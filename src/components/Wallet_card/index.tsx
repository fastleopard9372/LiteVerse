"use client";
import React, { useState } from 'react'
import types from '@/types'
declare global {
  interface Window {
    unisat: any,
    litescribe: any,
    ordinals: any,
    xverse: any,
    leather: any,
    phantom: any,
    BitcoinProvider: any,
    XverseProviders: any,
    LeatherProvider: any,
  }
}


const Wallet_card = (data: types.Wallet_connect) => {

  const [accounts, setAccounts] = useState<string[]>([]);
  const [network, setNetwork] = useState<string>('');
  const [publicKey, setPublicKey] = useState<string>('');
  const [balance, setBalance] = useState<any>(null);


  const connectWallet = async () => {

    console.log(window.litescribe);
    try {
      let accounts = await window.litescribe.requestAccounts();

      setAccounts(accounts);
    } catch (e) {
      console.log('LiteScribe Connection failed');
      window.open('https://litescribe.io/');
    }

    // try {
    //   let res = await window.litescribe.getAccounts();

    // } catch (e) {
    //   console.log(e);
    // }

    // try {
    //   let res = await window.litescribe.getNetwork();
    //   setNetwork(res);
    // } catch (e) {
    //   console.log(e);
    // }

    // try {
    //   let res = await window.litescribe.getPublicKey();
    //   setPublicKey(res);
    // } catch (e) {
    //   console.log(e);
    // }

    // try {
    //   let res = await window.litescribe.getBalance();
    //   setBalance(res);
    // } catch (e) {
    //   console.log(e);
    // }


  }

  const connectUnisat = async () => {
    console.log('unisat')
    try {
      let accounts = await window.unisat.requestAccounts();

    }
    catch {
      console.log('Unisat Connection failed');
      window.open('https://unisat.io/')
    }
  }

  const connectXverse = async () => {
    try {
      let accounts = await window.XverseProviders.BitcoinProvider.connect();
    }
    catch {
      console.log('Xverse Connection failed');
      window.open('https://www.xverse.app/download');

    }


  }

  const connectLeather = async () => {
    try {
      let accounts = await window.LeatherProvider.authenticationRequest();
    }
    catch {
      console.log('Leather Connection failed');
      window.open('https://leather.io/');
    }
  }
  const handleClick = (title: string, link: string) => {
    if (title === 'Leather') {
      connectLeather();
    } else if (title === 'LiteScrive') {
      connectWallet();
    } else if (title === 'Phantom') {

    } else if (title === 'Unisat') {
      connectUnisat();
    } else if (title === 'Xverse') {
      connectXverse();
    }

  }
  return (
    <div className='p-2 w-96 pb-6' onClick={() => handleClick(data.title, data.link)}>
      <div className="card bg-neutral shadow-xl cursor-pointer hover:opacity-95 hover:-translate-y-2 hover:animate-spin">
        <div className="card-body flex justify-center items-center p-5">
          <div className="avatar">
            <div className="w-20 rounded-full">
              <img src={data.url} />
            </div>
          </div>
          <p className='text-primary text-xl font-bold pt-5 p-2'>{data.title}</p>
          <p className='text-neutral-400 text-base break-words pt-2 pb-2 text-center' > {data.content}</p>
        </div >
      </div >
    </div >
  )
}

export default Wallet_card



// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';


function App() {





  //   const connectPhantom = async () => {
  //     console.log(window);
  //   }
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         {/* <img src={logo} className="App-logo" alt="logo" /> */}
  //         <p>
  //           LiteScribe wallet tester
  //         </p>
  //         <button onClick={() => { connectWallet() }}>
  //           Wallet
  //         </button>

  //         <button onClick={() => { connectUnisat() }}>
  //           Connect Unisat
  //         </button>


  //         <button onClick={() => { connectXverse() }}>
  //           Connect Xverse
  //         </button>

  //         <button onClick={() => { connectLeather() }}>
  //           Connect Leather
  //         </button>

  //         <button onClick={() => { connectPhantom() }}>
  //           Connect Phantom
  //         </button>
  //         <button onClick={() => { window.litescribe.initialize() }}>
  //           Disconnect
  //         </button>

  //         <p>
  //           <label>
  //             Address<br />
  //           </label>
  //           <input
  //             value={accounts[0]}
  //           >
  //           </input>
  //         </p>

  //         <p>
  //           <label>
  //             Network<br />
  //           </label>
  //           <input
  //             value={network}
  //             disabled={true}
  //           >
  //           </input>
  //         </p>
  //         <p>
  //           <label>
  //             Public Key<br />
  //           </label>
  //           <input
  //             value={publicKey}
  //             disabled={true}
  //           >
  //           </input>
  //         </p>
  //         <p>
  //           <label>
  //             Balance<br />
  //           </label>
  //           <input
  //             value={balance?.total}
  //             disabled={true}
  //           >
  //           </input>
  //         </p>
  //       </header>
  //       <body>

  //       </body>
  //     </div>
  //   );
}

// export default App;
