'use strict';

const bookings = [];
const bookTicket = (
  planeeNum,
  passengerNum = 1,
  price = 199 * passengerNum
) => {
  const booking = {
    planeeNum,
    passengerNum,
    price,
  };
  bookings.push(booking);
  console.log(bookings);
};

bookTicket('bob123', 2);
bookTicket('bob1223');

const flight = 'HH202';
const ankit = {
  name: 'Ankit Kumar',
  pasportNum: 1236547895,
};

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'HH303'; // we do not change flightNum value
//   passenger.name = 'Mr.' + ankit.name; // we can change passenger.name because its a reference.

//   if (passenger.pasportNum === 1236547895) {
//     alert('Checked In');
//   } else {
//     alert('wrong pasport number.');
//   }
// };

// // checkIn(flight, ankit);
// // console.log(flight, ankit);

// const pasport = function (person) {
//   person.pasportNum = Math.trunc(Math.random() * 100000000000);
//   console.log(person.pasportNum);
// };

// pasport(ankit);

// checkIn(flight, ankit);

// heigher order function..

const oneWord = function (str) {
  //   console.log(str.replace(/ /g, '').toLowerCase());
  return str.replace(/ /g, '').toLowerCase();
};
// oneWord('my name is ankit.');

const upperFirst = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// upperFirst('My name is ankit kumar');

// Heigher order function

const transformar = function (str, fn) {
  console.log(`this is original string: ${str}`);
  console.log(`this is heigher order function: ${fn(str)}`);
};

transformar('Ankit is a boy', oneWord);
transformar('Ankit is a boy.', upperFirst);

//on event listner
const high5 = function (str) {
  console.log('👋');
};

document.body.addEventListener('click', high5);

// for each method.
['anki', 'nikhil', 'dheeraj'].forEach(high5);

// function returning another function..

const greet = function (greeting) {
  return function (namee) {
    console.log(`${greeting} ${namee}`);
  };
};

const greeter = greet('hey');
greeter('ankit');
greet('Hello')('ankit');

// with arrow function || one arrow function returning another arrow function

const greetArrow = msg => {
  return nam => {
    console.log(`${msg} ${nam}`);
  };
};

greetArrow('Heyy')('Ankit');

////
const airIndia = {
  airLine: 'Air India',
  code: 'Air',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airLine}, flight ${this.code}${flightNum}`
    );
    this.booking.push(`${name} ${this.airLine}, ${this.code}`);
  },
};

airIndia.book(722, 'Ankit');

const indigo = {
  airLine: 'Indigo',
  code: 'Ind',
  booking: [],
};

//does not work..
// indigo.book(455, 'Nikhil');

const book = airIndia.book;
// call method
book.call(indigo, 455, 'Nkihil');
book.call(indigo, 45, 'Dheeraj');

// apply method
const bookingData = [566, 'Rohit'];
book.apply(indigo, bookingData);
book.apply(airIndia, bookingData);
book.call(indigo, ...bookingData);

// bind method
const bookIndigo = book.bind(indigo);
const bookAirIndia = book.bind(airIndia, 233);
bookAirIndia('Pro');
bookIndigo(28, 'Ram');

// bind method in event Listner

indigo.planes = 200;
indigo.buyPlanes = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', indigo.buyPlanes.bind(indigo));

// Partial application
const addTex = (rate, value) => value + value * rate;
console.log(addTex(0.1, 200));

const vatIND = addTex.bind(null, 0.28);

console.log(vatIND(200));

// with function calling another function..

// const greet = function (greeting) {
//     return function (namee) {
//       console.log(`${greeting} ${namee}`);
//     };
//   };

//   const greeter = greet('hey');
//   greeter('ankit');
//   greet('Hello')('ankit');

const addTett = rate => {
  return price => {
    const tax = price + price * rate;
    console.log(tax);
  };
};

addTett(0.1)(300);

// Code Challenge-1

const poll = {
  question: 'What is your favourite programming langauge?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n (Write option number)`
      )
    );

    console.log(answer);

    // add answer to the array
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
