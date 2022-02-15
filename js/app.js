/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let diceInPlay = []
let diceKept = [] 
let discardedDice = []
let currentPlayer = null
let currentPlayerScore = null 
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
  diceKept = []
  discardedDice = []
  currentPlayer = 1
  currentPlayerScore = null
  playerOneScore = null
  playerTwoScore = null
}


function handleClick(){

  let diceInPlay =[] 

  

  for (let i=1; i <= (5 - discardedDice.length); i++) diceInPlay.push(rollDice(i))



  diceInPlay.forEach(function(die){
    if(die == 2 || die == 5 ){ discardedDice.push(die) 
    }else{ diceKept.push(die)} 
    })


  //console.log('dice in play:', diceInPlay)
  
  

  
  handleTurn()
  countScore()
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
  
  endGame()
}

function playerInit(){
    diceInPlay = []
    discardedDice = [] 
    diceKept = []
    currentPlayerScore = []
}


function countScore(){
  

  diceKeptSum = diceKept.reduce( function(a, b){ return a += b},0 )

  console.log('diceKept:', diceKept)
   console.log('diceKeptSum', diceKeptSum)

  discardedDiceSum = discardedDice.reduce( function(a, b){ return a += b},0 )
  
  // console.log('discardedDice:', discardedDice)
  // console.log('discardedDice sum:', discardedDiceSum)


  
  let currentPlayerScore = diceKeptSum

  
  if (currentPlayer == 1){playerOneScore = diceKeptSum
  }else if (currentPlayer == -1){
    playerTwoScore = diceKeptSum
    
  }

  
  console.log('current Player score:', diceKeptSum)

  console.log('Player 1 score:', playerOneScore)


  console.log('Player 2 score:', playerTwoScore)

  
}

function endGame(){
  
  if ( (currentPlayer == -1) && discardedDice.length ==5){
    console.log('The game has ended')
    console.log('Player 1 score:', playerOneScore)
    console.log('Player 2 score:', playerTwoScore)
    getWinner()
  }

}


function getWinner(){

if(playerOneScore > playerTwoScore){console.log('player 1 wins!')
}else if( playerTwoScore> playerOneScore){console.log('player 2 wins')
}else if (playerOneScore == playerTwoScore){console.log('its a tie mufk')}

  init()
  
}