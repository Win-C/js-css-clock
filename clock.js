"use strict";

const ALL_HANDS = document.querySelectorAll('.hand');
const HR_HAND = document.querySelector('.hour-hand');
const MIN_HAND = document.querySelector('.min-hand');
const SEC_HAND = document.querySelector('.second-hand');

function setTime(){
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Convert time to degrees on a clock
  const hoursDegrees = ((hours / 12) * 360) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const secondsDegrees = ((seconds / 60) * 360) + 90;

  // Handle glitch: whenver seconds hand hits zero, hands need to reset and go backwards by default
  if (secondsDegrees === 90){
    ALL_HANDS.forEach(hand => hand.style.transition = 'none');
  } else if (hoursDegrees === 0) {
    ALL_HANDS.forEach(hand => hand.style.transition = ''); // reset inline style by removing it, reverts back to stylesheet
  }

  // Rotate elements on DOM
  HR_HAND.style.transform = `rotate(${hoursDegrees}deg)`;
  MIN_HAND.style.transform = `rotate(${minutesDegrees}deg)`;
  SEC_HAND.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setTime, 1000);