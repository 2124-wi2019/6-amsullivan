/*  Anna Sullivan
    sullivan_a06c.js
    INFO2124WW
    Thoendel
    1/25/2020
*/
//winning numbers: 22, 42, 43, 47, 61;

let lottoPicks = [];
let powerBallPick = getLottoNumber(); 
let winnings = 0; 

/* WRITE YOUR SOLUTION BETWEEN THIS LINE */

/*do.. while to push the return value of getLottoNumber into lottoPicks array when less than 5*/
do {
lottoPicks.push(getLottoNumber());
} while (lottoPicks < 5);

for(let lottoPick of lottoPicks){
/*for loop iterates through length of lottoPicks array*/
    switch(lottoPick){ /*switch to determine if an element of lottoPick in lottoPicks array matches the winnings numbers then adds 10*/
        case 22:
                winnings + 10;
        break;
        case 42:
                winnings + 10;
        break;
        case 43:
                winnings + 10;
        break;
        case 47:
                winnings + 10;
        break;
        case 61:
                winnings + 10;
        break;
        case powerBallPick:
                winnings + 100;
        break;
    }
    /*if else to output winngings message or failure to win*/
    if (winnings != 0){/*outputs text showing winnings if winnings is not 0*/
        console.log(`\nCongratulations! You won $${winnings}!\n`);
    }else {/*outputs text if fail to win*/
        console.log(`\nSorry, you didn't win anything. Better luck next time!\n`);
    }
}


    
/* AND THIS LINE */

function getLottoNumber() {
    //returns a random number between 1 and 100;
    const min = Math.ceil(1);       //Minimum value;
    const max = Math.floor(100);    //Maximum value;
    return Math.floor(Math.random() * (max - min)) + min;
}