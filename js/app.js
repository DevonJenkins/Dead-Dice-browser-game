/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let diceInPlay = []
let discardedDice = []
let currentPlayer = null
let score = null 
let playerOneScore = null
let playerTwoScore = null
/*------------------------ Cached Element References ------------------------*/

rollBtn = document.querySelector('#roll-dice')

/*----------------------------- Event Listeners -----------------------------*/

rollBtn.addEventListener('click', handleClick)

/*-------------------------------- Functions --------------------------------*/
init()



function init(){
  diceInPlay = []
  discardedDice = []
  currentPlayer = 1
  currentPlayerScore = 0
  playerOneScore = 0
  playerTwoScore = 0
}


function handleClick(){

  let diceInPlay =[] 
////this for loop appears to mess with my turn handler. Where else could i put this? 
  for (let i=1; i <= (5 - discardedDice.length); i++) diceInPlay.push(rollDice(i))

  currentPlayerScore = diceInPlay.reduce( function(a, b){ return a += b},0 )
  
  console.log(currentPlayerScore) 


  diceInPlay.forEach(function(die){
  if(die == 2 || die == 5 ){ discardedDice.push(die) }//else get pushed into a dice left array. 
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
  if  ((discardedDice.length == 5)&&(currentPlayer == 1))
  {(currentPlayer = -1) && playerInit()}
  //if current player is -1 then clear out discarded dice array 

  // console.log('current plauer:', currentPlayer)
  // console.log('discardedDice',discardedDice)
  // console.log('discarded dice length:', discardedDice.length)
  
  
   
  endGame()
}

function playerInit(){
    diceInPlay = []
    discardedDice = [] 
    discardedDice.length == 0
}


function countScore(){
  //total up the numbers in the remaining dice array on every move
  //add that total to the current players score on every move
  // currentPlayerScore = diceInPlay.reduce( function(a, b){
  // return a + b
  // },0 )
  
  //currentscore will be based on dice left array 

  //return 'dice in play sum:', diceInPlay.reduce( function(a, b){ return a += b},0 )
      //replace diceInPlay with diceLeft 
  //console.log('discarded dice sum:', discardedDice.reduce( function(a, b){ return a += b},0 ))
  
}

function endGame(){
  //end game if both players discardedDice array length = 5
  //once the game is over, invoke the get rinner function
  if ( (currentPlayer == -1) && discardedDice.length ==5){
    console.log('gameover')
    console.log('Player 1 score:', playerOneScore)
    console.log('Player 2 score:', playerTwoScore)
    getWinner()
  }
}


function getWinner(){
  console.log('winner is smelly')

  init()
  //compare the two players scores to find out the winner.
  //render winner message to the gameStatus message field
}