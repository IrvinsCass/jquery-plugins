var ripple = document.getElementsByClassName('button_cyan-small-ripple');

Array.prototype.forEach.call(ripple, function (r) {
  r.addEventListener('click', createRipple);
})

function createRipple (e) {

  if(this.getElementsByClassName('ripple').length > 0)
    {
      this.removeChild(this.childNodes[1]);
    }
    
  var circle = document.createElement('div');
  this.appendChild(circle);

  var d = 40;

  circle.style.width = circle.style.height = d + 'px';

  circle.style.left = e.pageX - screenLeft - this.offsetLeft - d / 2 + "px";
  circle.style.top = e.pageY - screenTop - this.offsetTop - d / 2 + "px";

  circle.classList.add('ripple')
}