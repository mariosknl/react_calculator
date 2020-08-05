import Big from 'big.js';

function operate(num1, num2, operation) {
  let result = new Big(0);
  const one = new Big(num1);
  let two;
  let temp = false;
  if (num2) two = new Big(num2);
  switch (operation) {
    case '+':
      result = one.plus(two);
      break;
    case '-':
      result = one.minus(two);
      break;
    case 'X':
      result = one.times(two);
      break;
    case '÷':
      if (num1 === '0' || num2 === '0') temp = true;
      result = temp ? 'cant be divided by zero(0)' : one.div(two);
      break;
    case '%':
      result = one.times('0.01');
      break;
    default:
  }
  return result.toString();
}

export default { operate };
