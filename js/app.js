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
  pipRender()

}


function rollDice(min, max){  
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

  if(playerOneScore > playerTwoScore){statusMessage.textContent = 'player 1 wins'
  }else if( playerTwoScore> playerOneScore){statusMessage.textContent = 'player 2 wins'
  }else if (playerOneScore == playerTwoScore){statusMessage.textContent = 'its a tie sonny'}

  init()
  
}


function render(){
  if (currentPlayer == 1){
    statusMessage.textContent = 'player 1 roll'
}else if (currentPlayer == -1){
  statusMessage.textContent = 'player 2 roll'
}
  
  d1.textContent = diceInPlay[(diceInPlay.length - 5)]
  d2.textContent = diceInPlay[(diceInPlay.length - 4)]
  d3.textContent = diceInPlay[(diceInPlay.length - 3)]
  d4.textContent = diceInPlay[(diceInPlay.length - 2)]
  d5.textContent = diceInPlay[(diceInPlay.length - 1)]
  
  
  p1ScoreDisplay.textContent = 'P1 score: ' + playerOneScore
  p2ScoreDisplay.textContent = 'p2 score: ' + playerTwoScore

  discardedDiceDisplay.textContent =  discardedDice.length

}

function pipRender(){
if (d1.textContent == 1){
  d1.style.color = red
}
   
}
  

function buttonChange(){
//on gameover, change the roll button to a reset button 
}    