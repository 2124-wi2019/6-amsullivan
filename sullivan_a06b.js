/*  Anna Sullivan
    sullivan_a06b.js
    INFO2124WW
    Thoendel
    1/25/2020
*/

const standardInput = process.stdin;
standardInput.setEncoding('utf-8');

const story = 
    `You're walking along Dodge Street minding your own business
and your suddenly run into the Wizard of Benson standing
in on the corner of 50th and Dodge.

Do you (C)ontinue walking? (S)top and ask for some magical help?
(T)rip and fall into a pot hole?
`;

clearScreen();
console.log(story);

standardInput.on('data', function(text) {
    //This line will remove line breaks 
    //\n\r in window, \r in macOS
    text = text.replace('\n', '').replace('\r', '');
    /* WRITE YOUR SOLUTION BETWEEN THIS LINE */
    
/*clear screen with clearScreen() function before if else*/
clearScreen();
/*if else to change output from input from user*/
if ((text == "c") || (text == "C")){
/*user inputs c or C output text*/
    console.log(`You non-challantly walk past the Wizard of Benson with the smug
confidence of a person who don't need no stinkin' Wizard, lest a
Wizard of Benson.\n`);
} else if ((text == "s") || (text == "S")){
/*user inputs s or S output text*/
    console.log(`You walk up to the Wizard, hands sweaty with anticipation. As
you approach, you note the Wizard is wearing a Hawkeyes hat. Your disappointment
proves more powerful than your desire to engage a Wizard and instead you
turn left to buy a nice, warm Runza.\n`);
} else if ((text == "t") || (text == "T")){
/*user inputs t or T output text*/
    console.log(`You begin approaching the Wizard, hands sweaty with anticipation,
mouth dry with general dehydration. As you take one step forward, you place
your entire weight upon the forward leg but your foot fails to make contact
with solid ground. As the entirety of your uncontrolled body's weight continues
forward and downward simultaneousl,y your mind begins considering what
precisely the $50,000 increase in your home's assessment and matching tax
increase is paying for.\n`)
} else {
/*user inputs anything else output text*/
    console.log(`The Wizard watches as you approach. Determining you're not
cool enough to hang with him, the Wizard smugly smiles and
walks into a vape shop. You blew your chance.\n`)
}
/*end game using endGame() function after if else*/
endGame();  
    /* AND THIS LINE */
});

function endGame() {
    console.log("Game Over\n\n\n");
    process.exit();
}

function clearScreen() {
    console.log('\033[2J');
}