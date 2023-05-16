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

let winningPrecentage = 0;

let winning = document.getElementById('para');
let p = document.createElement('p');

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
console.log(imageArray);

function flipCard(){
    const cardId = this.getAttribute('data-id');
    cardChoosen.push({...imageArray[cardId], id: cardId});
    this.setAttribute('src', imageArray[cardId].image);
    console.log(cardId);

    if (cardChoosen.length === 2) {
        console.log('cardChoosen=2');
        setTimeout(checkMatch, 500);    
    }
} 

function checkMatch(){
    const optionOne = cardChoosen[0];
    const optionTwo = cardChoosen[1];

    const cards = document.querySelectorAll('img');

    console.log('checkMatch');

    if (optionOne.id !== optionTwo.id) {
        if (optionOne.name === optionTwo.name) {
            cards[optionOne.id].setAttribute('src', 'Images/tick.png');
            cards[optionTwo.id].setAttribute('src', 'Images/tick.png');
            winningPrecentage = winningPrecentage + (100/6);
            if(Math.round(winningPrecentage) == 100){
                p.innerHTML = 'You won ...';                    
            } else{
                p.innerHTML = 'You won ' + Math.round(winningPrecentage) + '%';
            }
            
            console.log(p);
            winning.appendChild(p);
            cards[optionOne.id].removeEventListener('click', flipCard);
            cards[optionTwo.id].removeEventListener('click', flipCard);

        } else {
            cards[optionOne.id].setAttribute('src', 'Images/question.jpeg');
            cards[optionTwo.id].setAttribute('src', 'Images/question.jpeg');
            console.log('Test');
        } 
    } else {
        cards[optionOne.id].setAttribute('src', 'Images/question.jpeg');
    }

    
    cardChoosen = [];
}