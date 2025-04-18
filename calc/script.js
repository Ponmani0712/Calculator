const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';
let operatorPressed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
      display.textContent = '0';
    } else if (value === 'DEL') {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || '0';
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
      } catch {
        display.textContent = 'Error';
      }
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});