import logo from './logo.svg';
import './App.css';
import {Contract, ethers} from 'ethers'
import { useEffect, useState } from 'react';
import instance from '../src/MyNft.sol/MyNFT.json'
function App() {

  const contractaddress = "0x143995657415F561983d2112B65061a74B402EA5"; //to be fetch from .env
  console.log(contractaddress)
  const [state,setstate]= useState({
    signer:null,
    contract:null
  }) 
  const abi = instance.abi;
  console.log(abi)
  useEffect(()=>{
    const instancecreate=async()=>{
      try{if(window.ethereum==null){
        alert("download metamask");
      }
      else{
        // console.log(contractaddress)
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new Contract(contractaddress,abi,signer)
        setstate({
          signer,
          contract
        })
        // console.log(signer.address)
      }}catch(error){
        console.log(error)
      }
    }
    instancecreate();
    }
    ,[])
   
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
