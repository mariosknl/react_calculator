/* eslint-disable no-param-reassign */
import operationFunction from './operate';

function calculate(dataObj, btnName) {
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operations = ['+', '-', '÷', 'X'];
  const { operate } = operationFunction;
  if (nums.includes(btnName) && dataObj.next == null) {
    dataObj.next = btnName;
  } else if (btnName === '.' && dataObj.operation === null) {
    dataObj.next += btnName;
  } else if (nums.includes(btnName) && dataObj.operation === null && dataObj.next) {
    dataObj.next += btnName;
  } else if (operations.includes(btnName)) {
    dataObj.operation = btnName;
  } else if (dataObj.next && dataObj.operation && nums.includes(btnName) && !dataObj.total) {
    dataObj.total = btnName;
  } else if (btnName === '.' && dataObj.operation) {
    dataObj.total += btnName;
  } else if (nums.includes(btnName) && dataObj.operation && dataObj.total) {
    dataObj.total += btnName;
  }

  if (btnName === '=') {
    dataObj.total = operate(
      dataObj.next,
      dataObj.total,
      dataObj.operation,
    );
    dataObj.operation = '=';
  } else if (btnName === 'AC') {
    dataObj.total = null;
    dataObj.next = null;
    dataObj.operation = null;
  } else if (btnName === '+/-') {
    if (dataObj.next) {
      dataObj.total *= -1;
      dataObj.total = dataObj.total.toString();
    } else if (!dataObj.total) {
      dataObj.next *= -1;
      dataObj.next = dataObj.next.toString();
    }
  } else if (btnName === '%') {
    dataObj.operation = btnName;
    dataObj.total = operate(dataObj.next, null, dataObj.operation);
  }
  return dataObj;
}

export default { calculate };
