
const sechand = document.querySelector(".second-hand");
const minhand = document.querySelector(".min-hand");
const hourhand = document.querySelector(".hour-hand");

function setDate(){
const now = new Date();

const seconds = now.getSeconds();
const secondsDegrees = ((seconds / 60) * 360) + 90;
sechand.style.transform = `rotate(${secondsDegrees}deg)`;


const minutes = now.getMinutes();
const minutesDegrees = ((minutes / 60) * 360) + 90;
minhand.style.transform = `rotate(${minutesDegrees}deg)`;


const hours = now.getHours();
const hoursDegrees = ((hours / 12) * 360) + 90;
hourhand.style.transform = `rotate(${hoursDegrees}deg)`;

const time = [hours,minutes,seconds];
console.log(now);

}
setInterval(setDate, 1000);
setDate();
