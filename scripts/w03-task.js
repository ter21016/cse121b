/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

// Function to add two numbers
function add(number1, number2) {
    return number1 + number2;
}


function addNumbers() {
    // Get the values from the input fields with IDs 'add1' and 'add2'
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    // Calculate the sum using the add function
    let sum = add(addNumber1, addNumber2);

    // Update the value of the HTML element with ID 'sum'
    document.querySelector('#sum').value = sum;
}

// Event Listener for the button with ID 'addNumbers'
document.querySelector('#addNumbers').addEventListener('click', addNumbers);


// Function Declaration - Subtract Numbers

function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    // Get the values from the input fields with IDs 'subtract1' and 'subtract2'
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);

    // Calculate the result of subtraction
    let difference = subtract(subtract1, subtract2);

    // Update the value of the HTML element with ID 'subtract'
    document.querySelector('#difference').value = difference;
}

// Event Listener for Subtract Numbers button
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


// Arrow Function - Multiply Numbers
const multiply = (factor1, factor2) => factor1 * factor2;

// Arrow Function - Multiply Numbers
const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1, factor2);
};

// Event Listener for Multiply Numbers button
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

// Function Declaration - Divide Numbers


function divide(dividend, divisor){
    return dividend / divisor;
}


function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividend, divisor);
}

// Event Listener for Divide Numbers button
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */


        // Event Listener for the button with ID 'getTotal'
        let memberCheck = document.getElementById('member');
        function newTotal(){
           let subtotal = Number(document.getElementById('subtotal').value);
           if (memberCheck.checked){
               document.getElementById('total').innerHTML = (subtotal * 0.8).toFixed(2);
           }else{
               document.getElementById('total').innerHTML = subtotal.toFixed(2);
           }
       }
       
       //memberCheck.addEventListener('change',newTotal);
       
       document.getElementById('getTotal').addEventListener('click',
       memberCheck.addEventListener('change',newTotal));


/* ARRAY METHODS - Functional Programming */

let numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

document.getElementById('array').textContent = numberArray;
/* Output Source Array */


/* Output Odds Only Array */
const oddNumbers = numberArray.filter(number => number % 2 === 1);

document.getElementById('odds').textContent = oddNumbers;

const evenNumbers = numberArray.filter(number => number % 2 === 0);
        // Assign the result to the HTML element with ID 'evens'
        document.getElementById('evens').textContent = evenNumbers;

        // Use reduce() to sum the array elements
const sum = numberArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        // Assign the result to the HTML element with ID 'sumOfArray'
document.getElementById('sumOfArray').textContent = sum;

        // Use map() to multiply each element by 2
const multipliedArray = numberArray.map(number => number * 2);
        // Assign the result to the HTML element with ID 'multiplied'
document.getElementById('multiplied').textContent = multipliedArray;

        // Use map() and reduce() to sum the array elements after multiplying by two
const sumOfMultiplied = numberArray.map(number => number * 2).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        // Assign the result to the HTML element with ID 'sumOfMultiplied'
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;


