function setGrid(num) {
  let i = 0;

  while (i < num * num) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.setAttribute('id', 'boxes' + i + '')
    div.style.width = (750 / num - 2).toString() + 'px';
    div.style.height = (750 / num - 2).toString() + 'px';
    container.appendChild(div);
    i++;
  }

  let boxArray = document.getElementsByClassName('box');
  for (let j = 0; j < boxArray.length; j++) {
    const test = boxArray[j];
    test.addEventListener('mouseover', function(event) {
      event.target.style.background = 'powderblue';
    });
  }
}

function getNum() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  let userNum = parseInt(prompt("Please enter a number: "));
  setGrid(userNum);
}

setGrid(16);

let btn = document.querySelector('button');
btn.addEventListener('click', getNum);
