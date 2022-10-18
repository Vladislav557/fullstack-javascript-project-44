import readlineSync from 'readline-sync';
import engine from '../index.js';
import { getInteger, isEven } from '../utils.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const condition = () => {
    const number = getInteger();
    const rightAnswer = isEven(number) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const guess = readlineSync.question('Your answer: ');
    const result = guess === rightAnswer;
    return [result, guess, rightAnswer];
  };
  engine(question, 3, condition);
};
