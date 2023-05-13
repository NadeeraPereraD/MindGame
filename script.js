const imageArray = [

    {
        name: 'bird',
        image: 'Images/bird.png',
    },
    {
        name: 'bunny',
        image: 'Images/bunny.png',
    },
    {
        name: 'fox',
        image: 'Images/fox.png',
    },
    {
        name: 'lion',
        image: 'Images/lion.png',
    },
    {
        name: 'mouse',
        image: 'Images/mouse.png',
    },
    {
        name: 'owl',
        image: 'Images/owl.png',
    },

    {
        name: 'bird',
        image: 'Images/bird.png',
    },
    {
        name: 'bunny',
        image: 'Images/bunny.png',
    },
    {
        name: 'fox',
        image: 'Images/fox.png',
    },
    {
        name: 'lion',
        image: 'Images/lion.png',
    },
    {
        name: 'mouse',
        image: 'Images/mouse.png',
    },
    {
        name: 'owl',
        image: 'Images/owl.png',
    },
];

let cardChoosen = [];

imageArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.getElementById('grid');

function createBoard(){
    imageArray.forEach((img, index) => {
        const card = document.createElement('img');
        card.setAttribute('src', 'Images/question.jpeg');
        card.setAttribute('data-id', index);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    })
}

createBoard();

function flipCard(){
    const cardId = this.getAttribute('data-id');
    cardChoosen.push({...imageArray[cardId], id: cardId});
    this.setAttribute('src', imageArray[cardId].image);
    console.log(cardId);

    if (cardChoosen.length === 2) {
        checkMatch();
    }
} 

function checkMatch(){
    const optionOne = cardChoosen[0];
    const optionTwo = cardChoosen[1];

    const cards = document.querySelectorAll('img');

    if (optionOne.name === optionTwo.name) {
        
    }
}