let buttonMinus = document.querySelector('#minus');
let buttonPlus = document.querySelector('#plus');


let count = 0;
buttonMinus.addEventListener('click', function() {
  count -= 1;
  document.querySelector('#num').innerHTML = count;
})

buttonPlus.addEventListener('click', function() {
  count += 1;
  document.querySelector('#num').innerHTML = count;
})