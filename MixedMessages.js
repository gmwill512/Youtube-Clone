let message1 = ["doggie","cat","snake","bird","lion","chicken","tiger","bear","children"];

const randomMessage = (array) =>{
   console.log(array[Math.floor(Math.random()*array.length)]);
};

randomMessage(message1);