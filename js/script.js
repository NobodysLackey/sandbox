// ==============================
// 📌 CONSOLE LOGS
// ==============================

console.log('Hello, world!');
console.log('Number:', 42);
console.log('Boolean:', true);
console.log('Object:', { name: 'Michael', role: 'Instructor' });


// ==============================
// 📌 VARIABLES
// ==============================

let count = 10;
console.log('Count:', count);

const name = 'Michael';
console.log('Name:', name);

count = 20; // OK
// name = 'John'; // ❌ Error: cannot reassign const


// ==============================
// 📌 DATA TYPES
// ==============================

const city = 'Austin';
console.log('String:', city);

const age = 35;
console.log('Number:', age);

const isInstructor = true;
console.log('Boolean:', isInstructor);

const notANumber = 'abc' / 2;
console.log('NaN:', notANumber);

const empty = null;
console.log('null:', empty);

let notDefined;
console.log('undefined:', notDefined);


// ==============================
// 📌 ARRAYS
// ==============================

const fruits = ['apple', 'banana', 'cherry'];
console.log('Array:', fruits);
console.log('First fruit:', fruits[0]);


// ==============================
// 📌 OBJECTS
// ==============================

const user = {
  name: 'Michael',
  role: 'Instructor',
  location: 'Bahrain',
};
console.log('Object:', user);
console.log('User name:', user.name);


// ==============================
// 📌 CONDITIONALS
// ==============================

const score = 85;

if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 80) {
  console.log('Grade: B');
} else {
  console.log('Grade: C or below');
}


// ==============================
// 📌 LOOPS
// ==============================

// for loop
for (let i = 0; i < fruits.length; i++) {
  console.log('Fruit:', fruits[i]);
}

// for...of loop
for (const fruit of fruits) {
  console.log('Fruit (for...of):', fruit);
}

// while loop
let counter = 0;
while (counter < 3) {
  console.log('While Counter:', counter);
  counter++;
}


// ==============================
// 📌 FUNCTIONS
// ==============================

// Regular function
function greet(name) {
  // Template literal & string interpolation
  console.log(`Hello, ${name}!`);
}
greet('Michael');

// Arrow function
const add = (a, b) => a + b;
console.log('Add:', add(2, 3));

// Arrow function with block body
const multiply = (a, b) => {
  return a * b;
};
console.log('Multiply:', multiply(2, 3));


// ==============================
// 📌 SPREAD OPERATOR
// ==============================

const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log('Spread Array:', moreNumbers);

const userCopy = { ...user, role: 'Freelancer' };
console.log('Spread Object:', userCopy);


// ==============================
// 📌 DESTRUCTURING
// ==============================

const [firstFruit, secondFruit] = fruits;
console.log('First Fruit:', firstFruit);
console.log('Second Fruit:', secondFruit);

const { name: userName, location } = user;
console.log('Destructured Name:', userName);
console.log('Destructured Location:', location);


// ==============================
// 📌 FETCH vs ASYNC/AWAIT
// ==============================

// Using fetch with then
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log('Fetch .then:', data))
  .catch(error => console.error('Fetch Error:', error));

// Using async/await
const getTodo = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    const data = await response.json();
    console.log('Async/Await:', data);
  } catch (error) {
    console.error('Async/Await Error:', error);
  }
};

getTodo();
