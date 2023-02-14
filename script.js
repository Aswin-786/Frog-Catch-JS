const score = document.getElementById('score')
const time = document.getElementById('time_left')
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')

let hitPosition
let result = 0
let currentTime = 10
let timerId = null

// to make random square
const randomSquare = () => {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')
  hitPosition = randomSquare
}

// update the result
squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    
    if(square.id == hitPosition.id) {
      result++
      score.innerText = result
      // console.log(result)
      hitPosition = null
    }
  })
})

// to moving the mole 
const moveMole = () => {
  timerId = setInterval(randomSquare, 1000)
}

moveMole()

// to calculate the timing
function countDown() {
  console.log(currentTime)
  if(currentTime <= 0 ) {
    clearInterval(counttDownTimer)
    clearInterval(timerId)
    alert('GAME OVER !! Your score is ' + result)
  } else {
    currentTime--
    time.innerText = currentTime
  }
}

let counttDownTimer = setInterval(countDown, 1000)
// randomSquare()