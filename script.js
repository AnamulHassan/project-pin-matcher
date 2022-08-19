document
  .getElementById('btn-pin-generate')
  .addEventListener('click', function () {
    const randomNumber = randomNumberGenerator();
    setInputValue('input-password', randomNumber);
  });

function randomNumberGenerator() {
  let numberRandom = Math.floor(Math.random() * 10000);
  if (numberRandom.toString().length === 4) {
    return numberRandom;
  } else {
    return randomNumberGenerator();
  }
}

function setInputValue(inputId, randomNumber) {
  let inputFieldSelector = document.getElementById(inputId);
  inputFieldSelector.value = randomNumber;
}

document
  .getElementById('btn-pin-matcher')
  .addEventListener('click', function (event) {
    const btnInput = event.target.innerText;
    const typedNumberField = document.getElementById('typed-password');
    const previousNumber = typedNumberField.value;
    if (!isNaN(btnInput)) {
      const currentNumber = previousNumber + btnInput;
      typedNumberField.value = currentNumber;
    } else if (btnInput === 'C') {
      typedNumberField.value = '';
    } else if (btnInput === '<') {
      const currentNumber = previousNumber.split('');
      currentNumber.pop();
      const newNumber = currentNumber.join('');
      typedNumberField.value = newNumber;
    }
  });
let tryCount = 0;
document.getElementById('btn-submit').addEventListener('click', function () {
  const randomPin = document.getElementById('input-password').value;
  const typedPin = document.getElementById('typed-password').value;
  const alertMatch = document.getElementById('match');
  const alertNotMatch = document.getElementById('not-match');
  const tryReminderNumber = document.getElementById('try-reminder').innerText;
  if (randomPin === typedPin) {
    alertMatch.style.display = 'block';
    alertNotMatch.style.display = 'none';
  } else {
    tryCount = tryCount + 1;
    let tryReminderCount = +tryReminderNumber - 1;
    document.getElementById('try-reminder').innerText = tryReminderCount;

    if (tryCount == 3) {
      document.getElementById('btn-submit').disabled = true;
    }

    alertMatch.style.display = 'none';
    alertNotMatch.style.display = 'block';
  }
});
