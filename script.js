// button listener
function onButtonClick() {
  const line = document.getElementById('blue-line');
  line.style.stroke = 'red';
}

// circle mouseover listener
function circleMouseover() {
  const circle = document.getElementById('corner-circle');
  circle.style.stroke = 'orange';
  circle.style.fill = 'orange';
}

// circle mouseleave listener
function circleMouseOut() {
  const circle = document.getElementById('corner-circle');
  circle.style.stroke = 'black';
  circle.style.fill = 'black';
}

document.getElementById('line-change-button').addEventListener('click', onButtonClick)
document.getElementById('corner-circle').addEventListener('mouseover', circleMouseover)
document.getElementById('corner-circle').addEventListener('mouseout', circleMouseOut)
