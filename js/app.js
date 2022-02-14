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



  
  
//if i is less than the length of the dice in play arr plus 1 then iterate. use six as a placeholder value to represent the five dice being rolled at the beginning of the game

//this clears out the diceInPlay array on button click 
 let diceInPlay =[]

//generates a number five times to represent five dice being rolled
 //for (let i=1; i < 6; i++) diceInPlay.push(rollDice(i))



 

 for (let i=1; i <= (5 - discardedDice.length); i++) diceInPlay.push(rollDice(i))


 //for each item in the array, if it = five or two, then push it to9 the discarded dice array.
// if(rollDice(i) === 2 || rollDice(i) === 5){discardedDice.push(rollDice(i))}
//dice.forEach(el, idx){   }


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
  {(currentPlayer = -1)&&(playerInit())}



  console.log('current plauer:', currentPlayer)
  console.log('discardedDice',discardedDice)
  console.log('discarded dice length:', discardedDice.length)
  
}

function playerInit(){
  let discardedDice = []
  //this function will clear out the discarded dice array
}


function countScore(){
  //total up the numbers in the remaining dice array on every move
  //add that total to the current players score on every move
}

function endGame(){
  //end game if both players discardedDice array length = 5
  //once the game is over, invoke the get rinner function

  if ( (turn == -1) && discardedDice.length ==5){
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