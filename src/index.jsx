import React from 'react';
import ReactDOM from 'react-dom/client';
import MinerButton from './button-miner';
import PurchasableCard from './purchasable-card';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const render = (
  <div className='container'>
    <MinerButton/>
    <div className='row'>
      <PurchasableCard name="Pickaxe" price="10" />
      <PurchasableCard name="Miner" price="20" />
    </div>
  </div>
);
root.render(render);
