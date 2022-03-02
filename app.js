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
    const selected = event.target.value;
    hobbiesEl.innerHTML = '';
    divEl.classList.remove('Cody', 'Riley');
    
    if (selected === 'one') {
    /// we want to render the first users profile on the page. So we call our function.

        renderPerson(0);

    /// this will render the first person on our data array.
    } else {
    //// otherwise if the selected is not one we want to show the last person in our array.

        renderPerson(1);
    }


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




