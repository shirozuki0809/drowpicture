
function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function initEventHandler() {
  const clearButton = document.querySelector('#clear-button');
  clearButton.addEventListener('click', clear);
}
