let userNum = parseInt(window.prompt("Please enter a number:"));
let i = 0;

while (i < userNum * userNum) {
  const div = document.createElement('div');
  div.classList.add('box');
  div.setAttribute('id', 'boxes')
  div.style.width = (750 / userNum - 2).toString() + 'px';
  div.style.height = (750 / userNum - 2).toString() + 'px';
  container.appendChild(div);
  i++;
}

const test = document.getElementById('boxes')
test.addEventListener("mouseover", function(event) {
  event.target.style.background = 'powderblue';
});
