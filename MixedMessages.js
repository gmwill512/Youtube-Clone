var addTwoNumbers = function (l1, l2) {
  const arr = [];
  const rem = 0;
  const add = 0;
  for (let i = l1.length - 1; i > 0; i--) {
    const number = l1[i] + l2[i];
    if (number < 9) {
      arr[i].push(number);
    }
  }
  return arr;
};
