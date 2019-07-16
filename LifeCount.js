var uLifeCounter = 20;
var eLifeCounter = 20;

function uIncrease() {
  document.getElementById('YourCount').innerHTML = uLifeCounter++;
}

function uIncrease2() {
    uLifeCounter+= 10
    document.getElementById('YourCount').innerHTML = uLifeCounter;
  }
function uDecrease() {
  document.getElementById('YourCount').innerHTML = uLifeCounter--;
}

function uDecrease2() {
    uLifeCounter-=10
    document.getElementById('YourCount').innerHTML = uLifeCounter;
  }

function eIncrease() {
  document.getElementById('EnemyCount').innerHTML = eLifeCounter++;
}
function eIncrease2() {
    eLifeCounter+=10
    document.getElementById('EnemyCount').innerHTML = eLifeCounter;
  }
function eDecrease() {
  document.getElementById('EnemyCount').innerHTML = eLifeCounter--;
}  
function eDecrease2() {
    eLifeCounter-=10
    document.getElementById('EnemyCount').innerHTML = eLifeCounter;
  }  
function Reset() {
    document.getElementById('YourCount').innerHTML = 20;
    document.getElementById('EnemyCount').innerHTML = 20;
}

window.onload = function() {
    document.getElementById('YourUp').addEventListener('click', () => {uIncrease();})
    document.getElementById('uUp2').addEventListener('click', () => {uIncrease2();})
    document.getElementById('YourDown').addEventListener('click', () => {uDecrease()})
    document.getElementById('uDown2').addEventListener('click', () => {uDecrease2()})
    document.getElementById('EnemyUp').addEventListener('click', () => {eIncrease()})
    document.getElementById('eUp2').addEventListener('click', () => {eIncrease2()})
    document.getElementById('EnemyDown').addEventListener('click', () => {eDecrease()})
    document.getElementById('eDown2').addEventListener('click', () => {eDecrease2()})
    document.getElementById('reset').addEventListener('click', () => {Reset()})
    document.getElementById('YourCount').innerHTML = uLifeCounter;
    document.getElementById('EnemyCount').innerHTML = eLifeCounter;
};