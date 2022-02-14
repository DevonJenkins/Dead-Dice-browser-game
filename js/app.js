/*-------------------------------- Constants --------------------------------*/
let diceInPlay = []
let discardedDice = []


/*---------------------------- Variables (state) ----------------------------*/

let currentPlayer = null
let score = null 
/*------------------------ Cached Element References ------------------------*/

rollBtn = document.querySelector('#roll-dice')

/*----------------------------- Event Listeners -----------------------------*/

rollBtn.addEventListener('click', handleClick)

/*-------------------------------- Functions --------------------------------*/
init()



function init(){
  diceInPlay = []
  discardedDice = []
  score = 0
  currentPlayer = 1
}


function handleClick(){


//this clears out the diceInPlay array on button click 
 let diceInPlay =[]
 
//this for loop appears to mess with my turn handler. Where else could i put this? 

 for (let i=1; i <= (5 - discardedDice.length); i++) diceInPlay.push(rollDice(i))

 


diceInPlay.forEach(function(die){
  if(die == 2 || die == 5 ){ discardedDice.push(die) }
    })
 

  console.log('dice in play:', diceInPlay)


  handleTurn()

}

function rollDice(min, max){
  //generate a random number between one and //six inclusive
  min = Math.ceil(1);
  max = Math.floor(6);
  
   return Math.floor(Math.random() * (6 - min + 1)+1);
  
 
}

function handleTurn(){
    //if button press is true & discarded dice length is 5 and current player is 1, then current player is switched to -1 

  if  ((discardedDice.length == 5)&&(currentPlayer == 1))
  {(currentPlayer = -1) && playerInit()}

  //if current player is -1 then clear out discarded dice array 

  console.log('current plauer:', currentPlayer)
  console.log('discardedDice',discardedDice)
  console.log('discarded dice length:', discardedDice.length)

  endGame()
}

function playerInit(){
    diceInPlay = []
    discardedDice = [] 
    discardedDice.length == 0

  // diceInPlay.length == 5
  //this function should clear out the discarded dice array and set the diceinplay length back to 5
}


function countScore(){
  //total up the numbers in the remaining dice array on every move
  //add that total to the current players score on every move
}

function endGame(){
  //end game if both players discardedDice array length = 5
  //once the game is over, invoke the get rinner function

  if ( (currentPlayer == -1) && discardedDice.length ==5){
    console.log('gameover')
    getWinner()
  }
}


function getWinner(){
  console.log('winner is smelly')
  init()
  //compare the two players scores to find out the winner.
  //render winner message to the gameStatus message field
}