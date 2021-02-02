let message1 = [
  'doggie',
  'cat',
  'snake',
  'bird',
  'lion',
  'chicken',
  'tiger',
  'bear',
  'children',
];

const randomMessage = (array) => {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(array[Math.floor(Math.random() * array.length)]);
  }
  return arr;
};

let message = randomMessage(message1);
console.log(message.join(' '));
