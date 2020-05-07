//Both

//1. Reset button resets all shots and goal counters
//2. +1 to number of resets+++++



// Team 1
//1. click shoot - shot for team++++++++++++++
//2. shots have a random chance of success++++++
//3. num of shots take +1 shoot button+++++++++++++++++++++
//4. #goals increase when shot is successful++++++

let count = 0
const shootOne = document.querySelector("#teamone-numshots");
const teamOneCounter = document.querySelector("#teamone-shoot-button");

const teamGoal = document.querySelector('#teamone-numgoals')

teamOneCounter.addEventListener('click', function(){
    let shotsOne = Number(shootOne.innerText) +1;
shootOne.innerText = shotsOne;

let randOne = Math.random()
if (randOne < 0.5) {
    let totshotsOne = Number(teamGoal.innerText) +1;
    teamGoal.innerText = totshotsOne
}
})



//Team 2
//1. click shoot - shot for team++++++++++++++++
//2. shots have a random chance of success++++++++
//3. num of shots take +1 shoot button++++++++++++++++++++++++++
//4. #goals increase when shot is successful+++++++++++

let count2 = 0
const shootTwo = document.querySelector("#teamtwo-numshots");
const teamTwoCounter = document.querySelector("#teamtwo-shoot-button");

const teamGoal2 = document.querySelector('#teamtwo-numgoals')

teamTwoCounter.addEventListener('click', function(){
    let shotsTwo = Number(shootTwo.innerText) +1;
shootTwo.innerText = shotsTwo;

let randTwo = Math.random()
if (randTwo < 0.5) {
    let totshotsTwo = Number(teamGoal2.innerText) +1;
    teamGoal2.innerText = totshotsTwo
}
})

const reset = document.querySelector('#reset-button')
const numreset = document.querySelector('#num-resets')

reset.addEventListener('click', function(){
    let numresettot = Number(numreset.innerText) +1;
numreset.innerText = numresettot;
    let shotsTwo = Number(shootTwo.innerText) +1;
shootTwo.innerText = Number(0);
    let shotsOne = Number(shootOne.innerText) +1;
shootOne.innerText = Number(0);
    let totshotsTwo = Number(teamGoal2.innerText) +1;
teamGoal2.innerText = Number(0)
    let totshotsOne = Number(teamGoal.innerText) +1;
teamGoal.innerText = Number(0)
})