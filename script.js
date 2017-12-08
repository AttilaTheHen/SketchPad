let userNum = 16;
let i = 0;
while (i < userNum * userNum) {
  const div = document.createElement('div');
  div.classList.add('box');
  div.style.width = Math.floor((750 / userNum - 2)).toString() + 'px';
  div.style.height = Math.floor((750 / userNum - 2)).toString() + 'px';
  container.appendChild(div);
  i++;
}
