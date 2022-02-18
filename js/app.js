/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let diceInPlay = [0,0,0,0,0]
let diceKept = [] 
let discardedDice = []
let currentPlayer = null
let currentPlayerScore = null 
let playerOneScore = null
let playerTwoScore = null
/*------------------------ Cached Element References ------------------------*/

rollBtn = document.querySelector('#roll-dice')
statusMessage = document.querySelector('.status-message')
p1ScoreDisplay = document.querySelector('#player-one-score')
p2ScoreDisplay = document.querySelector('#player-two-score')
htmlBody = document.querySelector('body')


d1 = document.querySelector('#d1')
d2 = document.querySelector('#d2')
d3 = document.querySelector('#d3')
d4 = document.querySelector('#d4')
d5 = document.querySelector('#d5')


discardedDiceDisplay = document.querySelector('.discarded-dice')

/*----------------------------- Event Listeners -----------------------------*/

rollBtn.addEventListener('click', handleClick)

/*-------------------------------- Functions --------------------------------*/
init()
render()


function init(){
  diceInPlay = [0,0,0,0,0]
  diceKept = []
  discardedDice = []
  currentPlayer = 1
  playerOneScore = 0
  playerTwoScore = 0
  isWinner = false


}


function handleClick(){

diceInPlay = [0,0,0,0,0]

  

  for (let i=1; i <= (5 - (discardedDice.length)); i++) diceInPlay.push(rollDice(i))



  diceInPlay.forEach(function(die){
    if(die == 2 || die == 5 ){ discardedDice.push(die) 
    }else{ diceKept.push(die)} 
    })


  
  
  
  

    render()
  handleTurn()
  countScore()
  

}


function rollDice(min, max){  
  min = Math.ceil(1);
  max = Math.floor(6);
  
   return Math.floor(Math.random() * (6 - min + 1)+1); 
}

function handleTurn(){
  if  ((discardedDice.length == 5)&&(currentPlayer == 1))
  {(currentPlayer = -1) && playerInit()}
   if(currentPlayer == 1 ){htmlBody.style.background = 'rgb(238, 108, 77)'}
  else if (currentPlayer == -1){htmlBody.style.background = 'rgb(0, 121, 140)' }
  rollBtn.textContent = "Roll"
  endGame()
}


function playerInit(){
    diceInPlay = []
    discardedDice = [] 
    diceKept = []

}



function countScore(){
  

  diceKeptSum = diceKept.reduce( function(a, b){ return a += b},0 )


  discardedDiceSum = discardedDice.reduce( function(a, b){ return a += b},0 )
  

  


  
  if (currentPlayer == 1){playerOneScore = diceKeptSum
  }else if (currentPlayer == -1){
    playerTwoScore = diceKeptSum
    
  }

  
}

function endGame(){
  
  if ( (currentPlayer == -1) && discardedDice.length ==5){
    
    getWinner()
  }

}


function getWinner(){
  isWinner = true

  if(playerOneScore > playerTwoScore){(statusMessage.textContent = 'player 1 wins') && (htmlBody.style.background = 'rgb(238, 108, 77)')
  }else if( playerTwoScore> playerOneScore){(statusMessage.textContent = 'player 2 wins') && ( htmlBody.style.background = 'rgb(0, 121, 140)')
  }else if (playerOneScore == playerTwoScore){statusMessage.textContent =( 'its a tie sonny')&&(htmlBody.style.background = 'rgb(48, 99, 142)')}


rollBtn.textContent = "reset"
 

  init()

  
}


function render(){
  if (currentPlayer == 1){
    statusMessage.textContent = "Player 1's roll"
}else if (currentPlayer == -1){
  statusMessage.textContent = "Player 2's roll"
}
  
  d1.textContent = diceInPlay[(diceInPlay.length - 5)]
  d2.textContent = diceInPlay[(diceInPlay.length - 4)]
  d3.textContent = diceInPlay[(diceInPlay.length - 3)]
  d4.textContent = diceInPlay[(diceInPlay.length - 2)]
  d5.textContent = diceInPlay[(diceInPlay.length - 1)]
  
  
  p1ScoreDisplay.textContent = 'P1 Score: ' + playerOneScore
  p2ScoreDisplay.textContent = 'P2 Score: ' + playerTwoScore

  discardedDiceDisplay.textContent =  discardedDice.length
  pipRender()
}

function pipRender(){

if (d1.textContent == 0){
   (d1.textContent = '')
} 
if (d2.textContent == 0){
  (d2.textContent = '')
} 
if (d3.textContent == 0){
  (d3.textContent = '')
} 
if (d4.textContent == 0){
  (d4.textContent = '')
} 
if (d5.textContent == 0){
  (d5.textContent = '')
} 



 }

  