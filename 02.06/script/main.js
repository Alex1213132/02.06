var field = document.getElementById('field');
var cat = document.getElementById('cat');


field.onclick = function(event) {

  var fieldCoords = this.getBoundingClientRect();

  var fieldInnerCoords = {
    top: fieldCoords.top + field.clientTop,
    left: fieldCoords.left + field.clientLeft
  };

  var catCoords = {
    top: event.clientY - fieldInnerCoords.top - cat.clientHeight / 2,
    left: event.clientX - fieldInnerCoords.left - cat.clientWidth / 2
  };

  if (catCoords.top < 0) catCoords.top = 0;

  if (catCoords.left < 0) catCoords.left = 0;


  if (catCoords.left + cat.clientWidth > field.clientWidth) {
    catCoords.left = field.clientWidth - cat.clientWidth;
  }

  if (catCoords.top + cat.clientHeight > field.clientHeight) {
    catCoords.top = field.clientHeight - cat.clientHeight;
  }

  cat.style.left = catCoords.left + 'px';
  cat.style.top = catCoords.top + 'px';
}