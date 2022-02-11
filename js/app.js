/*-------------------------------- Constants --------------------------------*/
const dice = [1,2,3,4,5,6]
const discardedDice = []


/*---------------------------- Variables (state) ----------------------------*/

let currentPlayer = null
let score = null 
/*------------------------ Cached Element References ------------------------*/

rollBtn = document.querySelector('#roll-dice')

/*----------------------------- Event Listeners -----------------------------*/

rollBtn.addEventListener('click', handleClick)

/*-------------------------------- Functions --------------------------------*/
function init(){}


function render(){}

function handleClick(){
console.log('youve been clicked')

}
function rollDice(){}
function getWinner(){}