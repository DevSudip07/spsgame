let playButton = document.querySelector('.btn');
let userImg = document.querySelector('.user-img');
let botImg = document.querySelector('.bot-img');

playButton.addEventListener('click', () => {
    let userNum = Math.floor(Math.random() * 3) + 1;
    let botNum = Math.floor(Math.random() * 3) + 1;

    userImg.src = `./img/${userNum}.png`;
    botImg.src = `./img/${botNum}.png`;

    let userimgNum = document.querySelector('.user-num');
    let botimgNum = document.querySelector('.bot-num');
    let gameStatus = document.querySelector('.status');

    if (userNum == 1) {
        userimgNum.textContent = 'Rock';
    } else if (userNum == 2) {
        userimgNum.textContent = 'Paper';
    } else {
        userimgNum.textContent = 'Scissors';
    }
    if (botNum == 1) {
        botimgNum.textContent = 'Rock';
    } else if (userNum == 2) {
        botimgNum.textContent = 'Paper';
    } else {
        botimgNum.textContent = 'Scissors';
    }

    if (userNum == botNum) {
        gameStatus.textContent = 'It\'s a tie!';
    }
    else if ((userNum == 1 && botNum == 2) || (userNum == 2 && botNum == 3) || (userNum == 3 && botNum
        == 1)) {
        gameStatus.textContent = 'You win!';
    }
    else {
        gameStatus.textContent = 'You lose!';
    }

    // let statusBox = document.querySelector('.game-status');
    
    // statusBox.style.display = 'block';
});


// let playAgain = document.querySelector('.again');
// playAgain.addEventListener('click', ()=> {
//     let statusBox = document.querySelector('.game-status');
//     // statusBox.style.display = 'none';
// })