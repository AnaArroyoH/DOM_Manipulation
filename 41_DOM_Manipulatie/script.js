const animalButtons = document.querySelectorAll('.big-five-button');
const removeFirstItemButton = document.querySelector('#remove-first-item-button');
const removeAllButton = document.querySelector('#remove-all-button');

const spottedAnimal = animal => {
    // Checking if buttons work and that I have acces to the value of the clicked button
    console.log('button:', animal.target.innerHTML);
    const spottedAnimal = animal.target.textContent;
    const newLi = document.createElement('li');
    newLi.appendChild(document.createTextNode(spottedAnimal));
    const menu = document.getElementById('spotted-animals-list');
    menu.appendChild(newLi);
};

const removeFirst = () => {
    const firstLi = document.getElementById('spotted-animals-list').firstChild;
    firstLi.remove();
};

const removeAll = () => {
    // console.log('button works');
    const listSpottedAnimals = document.getElementById('spotted-animals-list');
    listSpottedAnimals.innerHTML = ""; // Note to self: this is an empty string and removes all text inside de node
};

animalButtons.forEach((btn) => {
    btn.addEventListener('click', spottedAnimal);
});

removeFirstItemButton.addEventListener('click', removeFirst);

removeAllButton.addEventListener('click', removeAll);