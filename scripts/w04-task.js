/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: 'Jessica Terry',
    photo: 'images/profile.jpg',
    favoriteFoods: [
        'Ceviche',
        'Fish and Chips',
        'Butter chicken',
        'Shish Kabob',
        'Hamburguer',
    ],
    hobbies: [
        'Hiking',
        'Reading',
        'Art and Craft',
        'Volunteering'
    ],

    placesLived: []

};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Chiclayo, Peru',
        length: '16 years'
    },

    {
        place: 'Lima, Peru',
        length: '2 years'
    },

    {
        place: 'Los Angeles, CA',
        length: '4 years'
    },

    {
        place: 'Seattle, WA',
        length: '20 years'
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
//Assign the value of the name property as the alt attribute of the HTML <img> with an ID of photo.
document.querySelector('#name').alt =  myProfile.photo;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods') .appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobby =>{
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies') .appendChild(li);
});



/* Places Lived DataList */
myProfile.placesLived.forEach(place =>{
    let dt = document.createElement('dt');
    dt.textContent = place.place;

    let dd =document.createElement('dd');
    dd.textContent = place.length;

    document.querySelector('#places-lived') .appendChild(dt);
    document.querySelector('#places-lived') .appendChild(dd);
});

document.getElementById("year").innerHTML = new Date().getFullYear();


