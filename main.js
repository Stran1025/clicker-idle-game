const data = {
  wallet: 0
};

const $block = document.querySelector('#block');
$block.addEventListener('click', event => increment(data, 1));
function increment(data, rate) {
  data.wallet += rate;
}
