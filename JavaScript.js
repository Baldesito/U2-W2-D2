let number1 = 3;
let number2 = 2;

let max = (number1 > number2) ? number1 : number2;

console.log("Il numero piu grande è :" +  max);

let number = number1 !== number2;
if (number !== 5) { 
console.log("notEqual");
}
else {
  console.log("Equal");
}


let numero = 10;

if (numero % 5 === 0) {
  console.log("Divisibile per 5");
}
else {
  console.log("Non divisibile");
}

let num1 = 5;
let num2 = 3;

if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || Math.abs(num1 - num2) === 8) {
  console.log("Il valore è giusto 8");
}
else {
  console.log("Il valore non è giusto");
}

let totalShoppingCart = 55;
let shippingCost = 10;
if (totalShoppingCart > 50) {
  shippingCost = 0;
}
let totalAmount = totalShoppingCart + shippingCost;
console.log("Ammontare totale da addebitare all'utente per il checkout:", totalAmount);

let totalShoppingCart2 = 55;

// Applichiamo lo sconto del 20%
let discount = 0.20;
let discountedTotal = totalShoppingCart2 * (1 - discount);
let shippingCost2 = 10;
if (discountedTotal > 50) {
  shippingCost = 0;
}
let totalAmount2 = discountedTotal + shippingCost;
console.log("Ammontare totale da addebitare all'utente per il checkout:", totalAmount);


// Definizione delle variabili con valori numerici
let a = 15;
let b = 5;
let c = 20;

let first, second, third;

if (a >= b && a >= c) {
  first = a;
  if (b >= c) {
    second = b;
    third = c;
  } else {
    second = c;
    third = b;
  }
} else if (b >= a && b >= c) {
  first = b;
  if (a >= c) {
    second = a;
    third = c;
  } else {
    second = c;
    third = a;
  }
} else {
  first = c;
  if (a >= b) {
    second = a;
    third = b;
  } else {
    second = b;
    third = a;
  }
}
console.log("Variabili ordinate dal più alto al più basso:", first, second, third);

console.log(typeof 42);
// console output: "number"
console.log(typeof 'blubber');
// console output: "boolean"

let d = 13;

if (d % 2 === 0) {
  console.log(number + " è un numero pari.");
} else {
  console.log(number + " è un numero dispari.");
}

let val = 7
if (val < 10) {
    console.log("Meno di 10");
  } else if (val < 10) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

  
const me = {
    name: 'John',
    lastName: 'Doe',
    city: ['Toronto'],
    skills: ['javascript', 'html', 'css'],
  }
  
  delete me.lastName;
console.log(me);

delete me.skills.pop('css'),
console.log(me);

let obj = {}

for (let i = 1; i <= 10; i++ ) {
  obj[10] = i;
}
console.log(obj);

obj[10] = 100;

console.log(obj);