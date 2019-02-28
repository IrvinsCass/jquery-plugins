var ripple = document.getElementsByClassName('button_submit');

Array.prototype.forEach.call(ripple, function (r) {
  r.addEventListener('click', createRipple);
})

function createRipple (e) {
  var circle = document.createElement('div');
  this.appendChild(circle);

  var d = 40;

  circle.style.width = circle.style.height = d + 'px';

  circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
  circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';

  circle.classList.add('ripple')
}