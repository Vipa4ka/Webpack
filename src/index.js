import './css/index.scss';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'Hello';
  element.style.fontSize = '150px'

    element.style.color = 'tomato'

  

  return element;
}

document.body.appendChild(component());
