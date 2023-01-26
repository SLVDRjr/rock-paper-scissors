const info = document.getElementById('info')
const choices = document.querySelectorAll('.choice')
const wonEl = document.getElementById('wonEl')
const lostEl = document.getElementById('lostEl')
const drawEl = document.getElementById('drawEl')
const choicesDiv = document.getElementById('choicesDiv')
const resultDiv = document.getElementById('resultDiv')
const playAgainBtn = document.getElementById('playAgainBtn')

const hands = ['rock', 'paper', 'scissors']
let playerHand = ''
let computerHand = ''
let won = 0
let lost = 0
let draw = 0

window.addEventListener('load', addScreen)

choices.forEach(choice => {
  choice.addEventListener('click', function(e){
    playerHand = e.target.id
    document.querySelectorAll('.hand-animation').forEach(a => {
      a.classList.add('play')
    })
    choicesDiv.style.display = 'none'
    info.innerHTML = ''
    document.getElementById('stats').style.display = 'none'

    setTimeout(removeHandAnimation, 3000)
    setTimeout(checkWinner, 3000)
    removeScreen()
  })
})

playAgainBtn.addEventListener('click', function(){
  choicesDiv.style.display = 'flex'
  resultDiv.style.display = 'none'
  playAgainBtn.style.display = 'none'
  info.innerHTML = 'CHOOSE:'
  addScreen()
  document.querySelectorAll('.hand-animation').forEach(a => {
    a.classList.remove('play')
  })
})

function randomHand(){
  const randomNumber = Math.floor(Math.random() * hands.length)
  return computerHand = hands[randomNumber]
}

function checkWinner(){
  computerHand = randomHand()
  if(playerHand === computerHand){
    info.innerHTML = 'Draw!'
    draw++
    drawEl.innerHTML = draw
  }else if(playerHand === 'rock' && computerHand === 'scissors'){
    info.innerHTML = 'You Win!'
    won++
    wonEl.innerHTML = won
  }else if(playerHand === 'paper' && computerHand === 'rock'){
    info.innerHTML = 'You Win!'
    won++
    wonEl.innerHTML = won
  }else if(playerHand === 'scissors' && computerHand === 'paper'){
    info.innerHTML = 'You Win!'
    won++
    wonEl.innerHTML = won
  }else{
    info.innerHTML = 'You Lose!'
    lost++
    lostEl.innerHTML = lost
  }
  renderHands()
}

function renderHands(){
  resultDiv.style.display = 'flex'
  playerImg.src = `img/${playerHand}.png`

  computerImg.classList.add('change')
  computerImg.src = `img/${computerHand}.png`
  playAgainBtn.style.display = 'block'

  document.getElementById('stats').style.display = 'flex'
}

function addScreen(){
  document.querySelectorAll('#screen').forEach(side => {
    side.classList.add('active')
  })
}

function removeScreen(){
  document.querySelectorAll('#screen').forEach(side => {
    side.classList.remove('active')
  })
}

function removeHandAnimation(){
  document.querySelectorAll('.hand-animation').forEach(hand => {
    hand.classList.remove('play')
  })
}




