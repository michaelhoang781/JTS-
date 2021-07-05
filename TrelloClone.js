
// Opens and Closes Menu and Navigation Bar

let menuButton = document.querySelector('.menu-button');
let navigationBar = document.querySelector('.navigation-bar');
let links = document.querySelectorAll('a');

let menuState = {
    open: false
}

menuButton.addEventListener('click', () => {

    if (!menuState.open) {
        menuButton.classList.remove('fas', 'fa-bars');
        menuButton.classList.add('far', 'fa-window-close');
        navigationBar.classList.add('opened');

        for (let link of links) {
            link.style.display = 'inline';
        }

        menuState.open = true;
    } else if (menuState.open) {
        menuButton.classList.remove('far', 'fa-window-close');
        menuButton.classList.add('fas', 'fa-bars');
        navigationBar.classList.remove('opened');

        for (let link of links) {
            link.style.display = 'none';
        }

        menuState.open = false;
    }
});

// Pop-up Window Functionality

// Allows Each Plus Button at Top of Column to Open Pop-up

let openModalButton1 = document.querySelector('.open-modal-1');
let openModalButton2 = document.querySelector('.open-modal-2');
let openModalButton3 = document.querySelector('.open-modal-3');
let openModalButton4 = document.querySelector('.open-modal-4');
let closeModalButton = document.querySelectorAll('[data-close-button]')
let overlay = document.getElementById('overlay');

openModalButton1.addEventListener('click', () => {
    let modal = document.querySelector('#modal');
    openModal(modal);
});

openModalButton2.addEventListener('click', () => {
    let modal = document.querySelector('#modal');
    openModal(modal);
});

openModalButton3.addEventListener('click', () => {
    let modal = document.querySelector('#modal');
    openModal(modal);
});

openModalButton4.addEventListener('click', () => {
    let modal = document.querySelector('#modal');
    openModal(modal);
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

// Closes Pop-up Window

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}


closeModalButton.forEach(button => {
    button.addEventListener('click', () => {
        let modal = button.closest('.modal');
        closeModal(modal);
    });
});

// Closes Pop-up When Overlay is Clicked

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    });
});

// let columnCounter = {
//     count: '0'
// }

// let newColumnButton = document.querySelector('.new-column-button');
// let columnWrapper = document.querySelector('.column-wrapper');

// newColumnButton.addEventListener('click', () => {
//     if (columnCounter.count < 2) {
//         let newColumn = document.createElement('div');
//         newColumn.classList.add('column');
//         columnWrapper.appendChild(newColumn);
//         columnCounter.count++;
//     }
// });


// Add New Job Card Functionality

let appliedColumn = document.querySelector('.col-1-add');
let screeningColumn = document.querySelector('.col-2-add');
let interviewingColumn = document.querySelector('.col-3-add');
let completedColumn = document.querySelector('.col-4-add');

appliedColumn.addEventListener('click', () => selectColumn.current = 'applied');
screeningColumn.addEventListener('click', () => selectColumn.current = 'screening');
interviewingColumn.addEventListener('click', () => selectColumn.current = 'interviewing');
completedColumn.addEventListener('click', () => selectColumn.current = 'completed');

let selectColumn = {
    current: 'none'
};

let appliedButton = document.querySelector('.new-job');
let appliedCards = document.querySelector('.applied-cards');
let screeningCards = document.querySelector('.screening-cards');
let interviewingCards = document.querySelector('.interviewing-cards');
let completedCards = document.querySelector('.completed-cards');

let id = 0;

let newJobButton = document.querySelector('#new-job-button');

newJobButton.addEventListener('click', () => {
    let newCardContainer = document.createElement('div');
    newCardContainer.classList.add('new-card-container');

    // Allows Users to Create Cards in Any Column

    if (selectColumn.current === 'applied') appliedCards.appendChild(newCardContainer);
    if (selectColumn.current === 'screening') screeningCards.appendChild(newCardContainer);
    if (selectColumn.current === 'interviewing') interviewingCards.appendChild(newCardContainer);
    if (selectColumn.current === 'completed') completedCards.appendChild(newCardContainer);

    // Gives Each Card Unique Id For Drag & Drop

    newCardContainer.id = 'draggable-' + id;
    id++;
    newCardContainer.setAttribute('draggable', 'true');
    newCardContainer.setAttribute('ondragstart', 'onDragStart(event);');

    let newCard = document.createElement('div');
    newCard.classList.add('card');;

    let newJobTitle = document.querySelector('#jobName');
    if (newJobTitle.value === '') newJobTitle.value = 'New Position';
    newCard.innerHTML = newJobTitle.value;
    newJobTitle.value = 'New Position';

    let priority = document.querySelector('#priority');
    newCard.classList.add(priority.value.toLowerCase());
    newCardContainer.appendChild(newCard);

    // Attaches Delete Button to Card

    let deleteButton = document.createElement('div');
    deleteButton.classList.add('fas', 'fa-times', 'delete-button');
    newCardContainer.appendChild(deleteButton);

    let allCards = document.querySelectorAll('.card');
    let deleteCard = document.querySelectorAll('.delete-button');

    for (let i = 0; i < allCards.length; i++) {
        deleteCard[i].addEventListener('click', remove, false);
    }
});


// Remove Card Functionality

let remove = function () {
    this.parentNode.remove();
}

// Drag & Drop Functionality

function onDragStart(event) {
    event
        .dataTransfer
        .setData('text/plain', event.target.id);

    event
        .currentTarget
        .style
        .fontStyle = 'italic';
}

function onDrop(event, el) {

    event.preventDefault();

    const id = event
        .dataTransfer
        .getData('text');

    const draggableElement = document.getElementById(id);
    // const dropzone = event.target;
    el.appendChild(draggableElement);

    draggableElement.style.fontStyle = 'normal';

    event
        .dataTransfer
        .clearData();
}

function onDragOver(event) {
    event.preventDefault();
}







