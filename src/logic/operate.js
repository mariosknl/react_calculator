import Big from 'big.js';

function operate(num1, num2, operation) {
  let result = new Big(0);
  const one = new Big(num1);
  const two = new Big(num2);
  switch (operation) {
    case '+':
      result = one.plus(two);
      break;
    case '-':
      result = one.minus(two);
      break;
    case '*':
      result = one.times(two);
      break;
    case '/':
      result = one.div(two);
      break;
    case '%':
      result = one.times('0.01');
      break;
    default:
  }
  return result.toString();
}

export default { operate };
