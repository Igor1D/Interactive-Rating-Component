let submitBtn = document.getElementById('submitBtn');
let mainDiv1 = document.getElementById('mainDiv1');
let mainDiv2 = document.getElementById('mainDiv2');
let results = document.getElementById('results');
let radioInputs = document.getElementsByClassName('radioInput')
submitBtn.addEventListener('click', () => {
  let isOneInputChecked = false;
  let inputValue;
  for (let input of radioInputs) {
    if (input.checked) {
      isOneInputChecked = true;
      inputValue = input.value;
    }
  }
  if (isOneInputChecked) {
    mainDiv2.style.display = 'block';
    mainDiv1.style.display = 'none';
    results.innerText = 'You selected ' + inputValue + ' out of 5'
  }
})

