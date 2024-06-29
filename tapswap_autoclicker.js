// Programmer: @NabiKAZ (https://twitter.com/NabiKAZ)
// TapSwap Telegram game automatic clicker!

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
