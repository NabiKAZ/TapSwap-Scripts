// Programmer: @NabiKAZ (https://twitter.com/NabiKAZ)
// TapSwap Telegram game automatic clicker!
// First, run the game on the computer by the method I said here: https://github.com/NabiKAZ/TapSwap-Scripts?tab=readme-ov-file#1-run-on-computer
// Then copy and paste the following code in your browser's console tab (press F12). The magic will be started!
// To stop, write this: "clearInterval(i);"
// Caution: You are responsible for possible risks such as banning.
// The game link: https://t.me/tapswap_mirror_2_bot?start=r_101554083

var delay = 50;
var i = setInterval(() => {
  var el = document.querySelector('#ex1-layer');
  var rect = el.getBoundingClientRect();
  var x = rect.left + rect.width / 2;
  var y = rect.top + rect.height / 2;
  var event = new PointerEvent('pointerdown', {
    clientX: x,
    clientY: y,
  });
  el.dispatchEvent(event);
}, delay);
