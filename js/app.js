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
console.log(rollDice())
rollDice()
}
function rollDice(min, max){
  //generate a random number between one and //six inclusive
  min = Math.ceil(1);
  max = Math.floor(6);
 return Math.floor(Math.random() * (6 - min + 1)+1);

}
function getWinner(){}