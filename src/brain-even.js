import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const brainEven = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let attempts = 3;
  let inGame = true;
  while (attempts > 0) {
    const randomNumber = Math.round(Math.random() * 100);
    const answer = isEven(randomNumber) ? 'yes' : 'no';
    const guees = readlineSync.question(`Question: ${randomNumber} `);
    if (guees === answer) {
      attempts -= 1;
      console.log(`Your answer: ${guees}`);
      console.log('Correct!');
    } else {
      attempts = 0;
      console.log(`Your answer: ${guees}`);
      console.log(`'${guees}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      inGame = false;
    }
  }
  console.log(inGame ? `Congratulations, ${name}!` : '');
};

export default brainEven;
