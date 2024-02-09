"use client"
import React, { useEffect, useState } from 'react'
import types from '@/types';
import config from '@/utils';
import axios from 'axios';

const Explorer = () => {
	const [data, setData] = useState<any>();
	const [sch, SetSch] = useState({
		offset: 0,
		orderBy: 'price',
		limit: 20
	})
	const handleChange = (e: any) => {
		SetSch({ ...sch, orderBy: e.target.value })
	}
	const handleClick = (kind: string) => {
		let start = sch.offset;
		if (kind === 'start') {
			start = 0;
		} else if (kind === 'prev') {
			start = start - sch.limit;
			if (start < 0) {
				start = 0;
			}
		}
		else if (kind === 'next') {
			start = start + sch.limit;
			if (start > Number(data.data.stats.total)) {
				start = Number(data.data.stats.total);
			}
		}
		else if (kind === 'last') {
			start = Math.floor(Number(data.data.stats.total) / sch.limit) * sch.limit;
		}
		SetSch({ ...sch, offset: start })
	}
	const options = {
		headers: {
			'x-access-token': config.apiKey,
		},
	};

	useEffect(() => {
		console.log(sch)
		axios.get(`${config.coinUrl}?tags[]=${config.tags}&orderBy=${sch.orderBy}&orderDirection=desc&offset=${sch.offset}&limit=${sch.limit}`, options)
			.then((response: any) => {
				const temp = { ...response.data };
				if (sch.offset === 0) {
					const sort_data = temp.data.coins.sort((a: any, b: any) => (parseFloat(b[sch.orderBy]) - parseFloat(a[sch.orderBy])));
					temp.coins = sort_data
				}
				setData({ ...temp });
			})
			.catch((error: any) => {
				console.error(error)
			});
	}, [sch])
	useEffect(() => {
		console.log(data);
	}, [data])
	return (
		<div className='section pt-20 pb-20'>
			<div className='flex justify-center items-center flex-wrap space-x-7'>
				<div className="overflow-x-auto w-full">
					<div className='flex justify-end items-center space-x-3'>
						<p>Sory By:</p>
						<select className="select select-bordered max-w-xs" onChange={handleChange}>
							<option selected value="price">Price</option>
							<option value="change">24h</option>
							<option value="marketCap">Market Cap</option>
							<option value="24hVolume">Volume</option>
						</select>
					</div>
					<table className="table text-base w-full">
						{/* head */}
						<thead>
							<tr className='text-base'>
								<th>Name</th>
								<th>Price</th>
								<th>24h</th>
								<th>Market Cap</th>
								<th>Volume(24h)</th>
							</tr>
						</thead>
						<tbody>
							{
								data?.data?.coins?.map((value: any, index: number) => (
									<tr className='hover bg-[#151531] border-b-2'>
										<th>{value.symbol}</th>
										<td>{Number(value.price).toFixed(3)}</td>
										<td className={value.change > 0 ? "text-green" : "text-pink"}>{value.change}%</td>
										<td>${new Intl.NumberFormat().format(value.marketCap)}</td>
										<td>${new Intl.NumberFormat().format(value['24hVolume'])}</td>
									</tr>
								))}

						</tbody>
					</table>
					<div className='flex justify-end space-x-3 pt-2'>
						<button className="btn btn-primary w-[50px]" onClick={e => handleClick('start')}>&lt;&lt; </button>
						<button className="btn btn-primary w-[50px]" onClick={e => handleClick('prev')}>&lt; </button>
						<button className="btn btn-primary w-[50px]" onClick={e => handleClick('next')}>&gt; </button>
						<button className="btn btn-primary w-[50px]" onClick={e => handleClick('last')}>&gt;&gt;</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Explorer
