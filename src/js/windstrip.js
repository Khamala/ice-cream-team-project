var c = document.getElementById('canvi');
var $ = c.getContext('2d');

var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;


var draw = function(a, b, t) {
  $.lineWidth = 0.1;
  $.fillStyle = 'hsla(103, 18%, 55%, 1)';
  $.fillRect(0, 0, w, h);
  for (var i = -60; i < 60; i += 1) {
    $.strokeStyle = 'hsla(47, 92%, 64%, 1)';
    $.beginPath();
    $.moveTo(0, h / 2);
    for (var j = 0; j < w; j += 10) {
      $.lineTo(10 * Math.sin(i / 10) +
        j + 0.008 * j * j,
        Math.floor(h / 2 + j / 2 *
          Math.sin(j / 50 - t / 50 - i / 118) +
          (i * 0.9) * Math.sin(j / 25 - (i + t) / 65)));
    };
    $.stroke();
  }
}
var t = 0;

window.addEventListener('resize', function() {
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
  $.fillStyle = 'hsla(160, 95%, 55%, 1)';
}, false);

var run = function() {
  window.requestAnimationFrame(run);
  t += 5;
  draw(33, 52 * Math.sin(t / 2400), t);
  txt();
};

run();