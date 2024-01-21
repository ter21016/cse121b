const PI = 3.14;
const radius = 3;
let area = 0;
area = radius * radius * PI;
radius = 4;
area = radius * radius * PI;
  



const fullName = 'Jessica terry';
const year = new(Date);
let currentYear = year.getFullYear();
let profilePicture = ('images/profile.jpg');

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('profilePicture');



/* Step 4 - Adding Content */


nameElement.innerHTML =`<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;

imageElement.setAttribute('alt',`Profile image of ${fullName}`);


/* Step 5 - Array */

let fav_food = ['ceviche', 'Fish and Chips','Butter chicken', 'Shish Kabah'];
let anotherFoodItem = 'Hamburguer';
favoriteFood.push(anotherFoodItem);
foodElement.innerHTML += `<br>${fav_food}`;
fav_food.shift();
foodElement.innerHTML +=` <br>${fav-Food}`;
fav_food.poo();
foodElement.innerHTML += `<br>${fav_food}`;