const data = {
  blocks: 0,
  clickRate: 1,
  pickaxe: {
    count: 0,
    price: 10,
    increaseRate: 1.05,
    acceleration: 0.05
  },
  miner: {
    count: 0,
    price: 20,
    increaseRate: 1.1,
    acceleration: 0.075
  }

};

const $block = document.querySelector('#block');
const $display = document.querySelector('#block-display');
$block.addEventListener('click', event => increment(data, data.clickRate));

const $pickaxeBuy = document.querySelector('#pickaxe-buy');
const $pickaxePrice = document.querySelector('#pickaxe-price');
const $pickaxeCount = document.querySelector('#pickaxe-count');
$pickaxeBuy.addEventListener('click', event => {
  buyPickaxe();
});

const $minerBuy = document.querySelector('#miner-buy');
const $minerPrice = document.querySelector('#miner-price');
const $minerCount = document.querySelector('#miner-count');
$minerBuy.addEventListener('click', event => {
  buyMiner();
});

function increment(data, rate) {
  data.blocks += rate;
  $display.textContent = data.blocks;
}

function buyPickaxe() {
  if (data.blocks < data.pickaxe.price) {
    return;
  }
  data.blocks -= data.pickaxe.price;
  data.pickaxe.price *= data.pickaxe.increaseRate;
  data.pickaxe.price = Math.trunc(data.pickaxe.price);
  data.pickaxe.count++;
  $pickaxeCount.textContent = data.pickaxe.count;
  data.clickRate++;
  data.pickaxe.increaseRate += data.pickaxe.acceleration;
  $pickaxePrice.textContent = data.pickaxe.price;
  $display.textContent = data.blocks;
}

function buyMiner() {
  if (data.blocks < data) {
    return;
  }
  data.blocks -= data.miner.price;
  data.miner.price *= data.miner.increaseRate;
  data.miner.price = Math.trunc(data.miner.price);
  data.miner.count++;
  $minerCount.textContent = data.miner.count;
  data.miner.increaseRate += data.miner.acceleration;
  $minerPrice.textContent = data.miner.price;
  $display.textContent = data.blocks;
}
