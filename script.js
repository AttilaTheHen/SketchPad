let userNum = parseInt(window.prompt("Please enter a number:"));
let i = 0;

while (i < userNum * userNum) {
  const div = document.createElement('div');
  div.classList.add('box');
  div.setAttribute('id', 'boxes' + i + '')
  div.style.width = (750 / userNum - 2).toString() + 'px';
  div.style.height = (750 / userNum - 2).toString() + 'px';
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

let btn = document.querySelector('button');
btn.addEventListener('click', function(event) {
  window.location.reload(event);
});
