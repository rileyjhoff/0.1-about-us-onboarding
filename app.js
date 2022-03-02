// import functions

import { people } from './data.js';

// console.log(people, 'people');



// grab DOM elements

const selectEl = document.querySelector('.select');

const divEl = document.querySelector('.contain');

const nameEl = document.querySelector('.name');

const pronounsEl = document.querySelector('.pronouns');

const favPlaceEl = document.querySelector('.favorite_place');

const hobbiesEl = document.querySelector('.hobbies');

// console.log(favPlaceEl);

// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state

selectEl.addEventListener('change', (event) => {
    console.log('user click');
});

function renderPerson(index) {
    divEl.classList.add(`${people[index.name]}`);
    nameEl.textContent = 'Name: ' + people[index].name;
    pronounsEl.textContent = 'Pronouns: ' + people[index].pronouns;
    favPlaceEl.textContent = 'Favorite Place: ' + people[index].favorite_place;

    for (let hobby of people[index].hobbies) {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbiesEl.appendChild(li);
    }
}

