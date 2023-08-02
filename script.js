// Only load after 500ms when the screen loads
const windowLoad = () => {
  const score = document.getElementById('score');
  const time = document.getElementById('time_left');
  const squares = document.querySelectorAll('.square');
  const mole = document.querySelector('.mole');

  let hitPosition;
  let result = 0;
  let currentTime = 30;
  let timerId = null;

  // To make a random square
  const randomSquare = () => {
    squares.forEach((square) => {
      square.classList.remove('mole');
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');
    hitPosition = randomSquare;
  };

  // Update the result
  squares.forEach((square) => {
    square.addEventListener('mousedown', () => {
      if (square.id == hitPosition.id) {
        result++;
        score.innerText = result;
        document.getElementById('catch').play();
        // console.log(result)
        hitPosition = null;
      }
    });
  });

  // To move the mole
  const moveMole = () => {
    timerId = setInterval(randomSquare, 700);
  };

  moveMole();

  // To calculate the timing
  const countDown = () => {
    console.log(currentTime);
    if (currentTime <= 0) {
      clearInterval(countDownTimer);
      clearInterval(timerId);
      alert('GAME OVER !! Your score is ' + result);
    } else {
      currentTime--;
      time.innerText = currentTime;
    }
  };

  let countDownTimer = setInterval(countDown, 1000);
  // randomSquare();
};

window.onload = () => {
  setTimeout(windowLoad, 500);
};

// Scrolling effects
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
