const data = {
  blocks: 0
};

const $block = document.querySelector('#block');
const $display = document.querySelector('#block-display');
$block.addEventListener('click', event => increment(data, 1));
function increment(data, rate) {
  data.blocks += rate;
  $display.textContent = data.blocks;
}
