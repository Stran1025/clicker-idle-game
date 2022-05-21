import React from 'react';
import ReactDOM from 'react-dom/client';
import MinerButton from './button-miner';
import PurchasableCard from './purchasable-card';
import data from './data.json';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const render = (
  <div className='container'>
    <MinerButton data={data}/>
    <div className='row mt-5 align-items-'>
      <PurchasableCard name="Pickaxe" price="10" data={data}/>
      <PurchasableCard name="Miner" price="20" data={data}/>
      <PurchasableCard name="Drill" price="50" data={data}/>
    </div>
  </div>
);
root.render(render);
