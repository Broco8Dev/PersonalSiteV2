var movingObject = document.getElementById("movingObject");
var dynamicBG = document.getElementById("gradient-canvas")
var buttons = document.getElementById("button")

var initialSpeed = 3;
var speedMultiplier = 1.1;
var oldPosition = 0;
var oldPositionChecked = false;

function nextPage(pageName = "index.html") {
        window.location.href = pageName;
}

function animationOut(pageName = "index.html") {
    let someStopCondition = 600;
    let currentPosition = parseInt(getComputedStyle(movingObject).left);
    initialSpeed *= speedMultiplier;
    
    currentPosition -= initialSpeed;
    movingObject.style.left = currentPosition + 'px';
    
    if (currentPosition < someStopCondition) {
        if (currentPosition + movingObject.offsetWidth < 0 - screen.width) {
            oldPositionChecked = false;
            nextPage(pageName);
        } else {
            requestAnimationFrame(() => animationOut(pageName)); // Pass a callback function
        }
    }
}

function animationIn() {
  movingObject.style.opacity = 1.0;
  let startRight = screen.width;
  let endLeft = 0;
  let duration = 1000; 
  let startTime;

  function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function animate(currentTime) {
      if (!startTime) startTime = currentTime;

      let progress = (currentTime - startTime) / duration;
      if (progress > 1) progress = 1;

      let easedProgress = easeInOutQuad(progress);
      let newPosition = startRight - easedProgress * (startRight - endLeft);
      movingObject.style.left = newPosition + 'px';

      if (progress < 1) {
          requestAnimationFrame(animate);
      }
  }
  requestAnimationFrame(animate);
}

function fadeOutBackground() {
  let startOpacity = 1;
  let endOpacity = 0;
  let duration = 800; 
  let startTime;

  function easeOutQuad(t) {
      return t * (2 - t);
  }

  function animate(currentTime) {
      if (!startTime) startTime = currentTime;

      let progress = (currentTime - startTime) / duration;
      if (progress > 1) progress = 1;

      let easedProgress = easeOutQuad(progress);
      let newOpacity = startOpacity - easedProgress * (startOpacity - endOpacity);
      dynamicBG.style.opacity = newOpacity;
      buttons.style.opacity = newOpacity;

      if (progress < 1) {
          requestAnimationFrame(animate);
      }
  }
  requestAnimationFrame(animate);
}

function fadeInBackground() {
  let startOpacity = 0;
  let endOpacity = 1;
  let duration = 800; 
  let startTime;

  function easeOutQuad(t) {
      return t * (2 - t);
  }

  function animate(currentTime) {
      if (!startTime) startTime = currentTime;

      let progress = (currentTime - startTime) / duration;
      if (progress > 1) progress = 1;

      let easedProgress = easeOutQuad(progress);
      let newOpacity = startOpacity - easedProgress * (startOpacity - endOpacity);
      dynamicBG.style.opacity = newOpacity;
      buttons.style.opacity = newOpacity;

      if (progress < 1) {
          requestAnimationFrame(animate);
      }
  }
  requestAnimationFrame(animate);
}

 




