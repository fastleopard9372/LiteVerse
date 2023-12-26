"use client";
import types from "@/types";

import Carousel from 'react-multi-carousel';
import ReactPlayer from "react-player";

import 'react-multi-carousel/lib/styles.css';
import Card1 from "@/components/Card1";
import Card2 from "@/components/Card2";
import Card3 from "@/components/Card3";
import Card4 from "@/components/Card4";
import Item from "@/components/Item";

import '@/styles/landing.css';

const Landing = () => {
  const item_data: types.Item_data[] = [{
    _id: "1",
    no: "1",
    avatar: '/item/avatar.png',
    count: 200,
    title: 'Los Muertos World',
    price: 295,
    percent: 54.98,
  }, {
    _id: "2",
    no: "2",
    avatar: '/item/avatar.png',
    count: 200,
    title: 'Los Muertos World',
    price: 295,
    percent: 54.98
  }, {
    _id: "3",
    no: "3",
    avatar: '/item/avatar.png',
    count: 200,
    title: 'Los Muertos World',
    price: 295,
    percent: 54.98
  }, {
    _id: "4",
    no: "4",
    avatar: '/item/avatar.png',
    count: 200,
    title: 'Los Muertos World',
    price: 295,
    percent: 54.98
  }, {
    _id: "5",
    no: "5",
    avatar: '/item/avatar.png',
    count: 200,
    title: 'Los Muertos World',
    price: 295,
    percent: 54.98
  }, {
    _id: "6",
    no: "6",
    avatar: '/item/avatar.png',
    count: 200,
    title: 'Los Muertos World',
    price: 295,
    percent: 54.98
  }];
  const card1_data: types.Card1_data[] = [{
    _id: "1",
    background: "/card1/back1.png",
    like: 25,
    time: "129 : 12: 32 : 34",
    title: "TrapMonkie 3D",
    avatar: [
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" }],
    name: "Fuliani",
    value: 76.4
  }, {
    _id: "1",
    background: "/card1/back2.png",
    like: 25,
    time: "129 : 12: 32 : 34",
    title: "TrapMonkie 3D",
    avatar: [
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" }],
    name: "Fuliani",
    value: 76.4
  }, {
    _id: "1",
    background: "/card1/back3.png",
    like: 25,
    time: "129 : 12: 32 : 34",
    title: "TrapMonkie 3D",
    avatar: [
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" }],
    name: "Fuliani",
    value: 76.4
  }]
  const card2_data: types.Card2_data[] = [{
    _id: '1',
    background: '/card2/back.png',
    avatar: '/card2/avatar.png',
    name: 'Moonbirds',
    by: 'PROOF_COLLECTIVE',
    content: 'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.'
  }, {
    _id: '2',
    background: '/card2/back.png',
    avatar: '/card2/avatar.png',
    name: 'Moonbirds',
    by: 'PROOF_COLLECTIVE',
    content: 'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.'
  }, {
    _id: '3',
    background: '/card2/back.png',
    avatar: '/card2/avatar.png',
    name: 'Moonbirds',
    by: 'PROOF_COLLECTIVE',
    content: 'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.'
  }];
  const card3_data: types.Card3_data[] = [{
    link: "/",
    url: "/card3/Group 69.png",
    title: "Set up your wallet",
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
  }, {
    _id: '2',
    link: "/",
    url: "/card3/Group 76.png",
    title: "Add Your NFT’s",
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
  }, {
    link: "/",
    _id: '3',
    url: "/card3/Group 77.png",
    title: "Sell Your NFT’s",
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
  }];
  const card4_data: types.Card4_data[] = [{
    _id: '1',
    left_img: '/card4/Rectangle 35.png',
    center_img: '/card4/Rectangle 34.png',
    right_img: '/card4/Rectangle 36.png',
    title: 'Utility',
    color: '#E932BE'
  }, {
    _id: '2',
    left_img: '/card4/Rectangle 35.png',
    center_img: '/card4/Rectangle 34.png',
    right_img: '/card4/Rectangle 36.png',
    title: 'Art',
    color: '#2081E2'
  }, {
    _id: '3',
    left_img: '/card4/Rectangle 35.png',
    center_img: '/card4/Rectangle 34.png',
    right_img: '/card4/Rectangle 36.png',
    title: 'Music',
    color: '#F6C000'
  }, {
    _id: '4',
    left_img: '/card4/Rectangle 35.png',
    center_img: '/card4/Rectangle 34.png',
    right_img: '/card4/Rectangle 36.png',
    title: 'Trading Cards',
    color: '#5D32E9'
  }, {
    _id: '5',
    left_img: '/card4/Rectangle 35.png',
    center_img: '/card4/Rectangle 34.png',
    right_img: '/card4/Rectangle 36.png',
    title: 'Collectibles',
    color: '#F2994A'
  }, {
    _id: '6',
    left_img: '/card4/Rectangle 35.png',
    center_img: '/card4/Rectangle 34.png',
    right_img: '/card4/Rectangle 36.png',
    title: 'Photography',
    color: '#2BCDE4'
  }, {
    _id: '7',
    left_img: '/card4/Rectangle 35.png',
    center_img: '/card4/Rectangle 34.png',
    right_img: '/card4/Rectangle 36.png',
    title: 'Virtual Worlds',
    color: '#34C67B'
  }, {
    _id: '8',
    left_img: '/card4/Rectangle 35.png',
    center_img: '/card4/Rectangle 34.png',
    right_img: '/card4/Rectangle 36.png',
    title: 'Domain Names',
    color: '#2081E2'
  }, {
    _id: '9',
    left_img: '/card4/Rectangle 35.png',
    center_img: '/card4/Rectangle 34.png',
    right_img: '/card4/Rectangle 36.png',
    title: 'Sports',
    color: '#E932BE'
  }];
  return (
    <div className="landing w-full">
      <div className='section1 flex justify-center items-center'>
        <div className='back'>
        </div>
        <div className='section front flex justify-between items-center'>
          <div className='text-section flex flex-col justify-center items-start'>
            <p className='text-5xl mb-7'>
              <span className='p1'>Discover,</span>
              <span> collect and sell<br /> extraorddinary</span>
              <span className='p2'> NFTs</span>
            </p>
            <p className='gray-text  mb-7'>
              OpenSea is the world's first and <br />
              largest NFT marketplace
            </p>
            <div className='form-control justify-center items-start flex-row  mb-7 space-x-4'>
              <button className="btn btn-primary">Explore</button>
              <button className="btn btn-outline">Create</button>
            </div>
            <div className='flex'>
              <div className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="13" viewBox="0 0 10 13" fill="none">
                  <path d="M10 6.5L0.249999 12.1292L0.25 0.870834L10 6.5Z" fill="white" />
                </svg>
              </div>
              <span className='text'>
                Learn more about companyName
              </span>
            </div>
          </div>
          <div className='card-section  ml-3'>
            <div className='card-img'>
              <img src='/card.png'></img>
            </div>
            <div className='info flex items-center p-5'>
              <div className="avatar ">
                <div className="w-12 rounded-full border  border-neutral">
                  <img src='/avatar.png'></img>
                </div>
              </div>
              <div className='card-data'>
                <p>text</p>
                <p>text</p>
              </div>
              <div className='info-img items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <g opacity="0.4">
                    <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#0A1020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11 7V11" stroke="#0A1020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11 15H11.01" stroke="#0A1020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className='section section2'>
        <div className='section-top-rect'>
          <img src='/Rectangle 14.png'>
          </img>
        </div>
        <div className="card-group">
          <h3 className='title'>Notable Drops</h3>
          <div style={{ paddingBottom: '30px', position: 'relative' }}>
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container-padding-bottom"
              dotListClass=""
              draggable
              focusOnSelect
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={true}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 3,
                  partialVisibilityGutter: 40
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 1,
                  partialVisibilityGutter: 30
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464
                  },
                  items: 2,
                  partialVisibilityGutter: 30
                }
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {
                card1_data.map((value, index) => <Card1 {...value} />)
              }
            </Carousel>
          </div>
        </div>
      </div>
      <div className='section section3'>
        <div className='card-group'>
          <div className='title flex justify-center'>
            <span>Top collections over</span>
            <span className='sub-title flex'><span className='mr-2'>last 7 days </span><img src="./item/down-arrow.svg"></img></span>
          </div>
          <div className='grid grid-cols-3 gap-5 mt-10'>
            {
              item_data.map((value, index) => (
                <Item {...value} key={index} />
              ))
            }
          </div>
          <div className='mt-8 flex justify-center'>
            <div className='button primary'>Go to Ranking</div>
          </div>
        </div>
      </div>
      <div className='section section4'>
        <div className='card-group'>
          <div className='title flex justify-center'>
            <span>Trending in</span>
            <span className='sub-title flex'><span className='mr-2'>all categories </span><img src="./item/down-arrow.svg"></img></span>
          </div>
          <div style={{ paddingBottom: '30px', position: 'relative' }}>
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container-padding-bottom"
              dotListClass=""
              draggable
              focusOnSelect
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={true}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 3,
                  partialVisibilityGutter: 40
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 1,
                  partialVisibilityGutter: 30
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464
                  },
                  items: 2,
                  partialVisibilityGutter: 30
                }
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {
                card2_data.map((value, index) => <Card2 {...value} key={index} />)
              }
            </Carousel>
          </div>
        </div>
      </div>
      <div className='section section5'>
        <div className='card-group'>
          <div className='title flex justify-center'>
            <span>Create and sell your NFTs</span>
          </div>
          <div className='grid grid-cols-3 gap-5 mt-10'>
            {
              card3_data.map((value, index) => (
                <Card3 {...value} key={index} />
              ))
            }
          </div>
        </div>
      </div>

      <div className='section section6'>
        <div className='card-group'>
          <div className='title flex justify-center'>
            <span>Create and sell your NFTs</span>
          </div>
          <div className='grid grid-cols-3 gap-5 mt-10 '>
            {
              card4_data.map((value, index) => (
                <Card4 {...value} key={index} />
              ))
            }
          </div>
        </div>
      </div>
      <div className='section section7'>
        <div className='card-group'>
          <div className='title flex justify-center' style={{ marginBottom: '10px' }}>
            <span>Meet CompanyName</span>
          </div>
          <div className='title-sub flex justify-center'>
            <span>The NFT marketplace with everything for everyone</span>
          </div>
          <div className='flex justify-center flex-col items-center p-20'>
            <img src="/image 3.png" style={{ cursor: "pointer" }} />
            {/* <ReactPlayer  width="800px" 
       height="600px"/> */}
            <p className="normal">Fiat on-ramp and profile customization is coming soon.</p>
          </div>
          <div className=' flex justify-center mb-10'>
            <div className='button primary' style={{ width: '274px !important;' }}>Explore the marketplace</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Landing