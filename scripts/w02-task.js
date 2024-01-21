/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = 'Jessica Terry'; 
const year = new Date();
let currentYear = year.getFullYear();
let profilePicture = 'images/profile.jpg'; 

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img'); 

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

let fav_food = ['Ceviche', 'Fish and Chips', 'Butter chicken', 'Shish Kabob'];
foodElement.innerHTML += `<br>${fav_food}`
let anotherFoodItem = 'Hamburguer'; ;
fav_food.push(anotherFoodItem);
foodElement.innerHTML += `<br>${fav_food}`; 
fav_food.shift();
foodElement.innerHTML += `<br>${fav_food}`; 
fav_food.pop(); 
foodElement.innerHTML += `<br>${fav_food}`; 








