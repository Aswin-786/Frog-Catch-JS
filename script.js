const score = document.getElementById('score')
const time = document.getElementById('time_left')
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')

let hitPosition
let result = 0
let currentTime = 60

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare
  
}


squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    
    if(square.id == hitPosition.id) {
      result++
      score.innerText = result
      console.log(result)
      hitPosition = null
    }
  })
})

function moveMole() {
  let timerId = null
  timerId = setInterval(randomSquare, 1000)
}


moveMole()

function countDown() {
  currentTime--
  time.innerText = currentTime

  if(currentTime == 0 ) {
    clearInterval(counttDownTimer)
    alert('GAME OVER !! Your score is ' + result)

  }

}

let counttDownTimer =setInterval(countDown, 1000)
// randomSquare()