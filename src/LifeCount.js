var uLifeCounter = 40;
var eLifeCounter = 40;

function uIncrease() {
  uLifeCounter+=1
  $('#YourCount').html(uLifeCounter)
}

function uIncrease2() {
  uLifeCounter+= 10
  $('#YourCount').html(uLifeCounter)
  }
function uDecrease() {
  uLifeCounter-= 1
  $('#YourCount').html(uLifeCounter)
}

function uDecrease2() {
  uLifeCounter-=10
  $('#YourCount').html(uLifeCounter);
  }

function eIncrease() {
  eLifeCounter+=1
  $('#EnemyCount').html(eLifeCounter)
}
function eIncrease2() {
  eLifeCounter+=10
  $('#EnemyCount').html(eLifeCounter)
  }
function eDecrease() {
  eLifeCounter-=1
  $('#EnemyCount').html(eLifeCounter)
}  
function eDecrease2() {
  eLifeCounter-=10
  $('#EnemyCount').html(eLifeCounter)
  }  
function Reset() {
    uLifeCounter = 40;
    eLifeCounter = 40;
    $('#YourCount').html(40)
    $('#EnemyCount').html(40);
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

console.log($('#YourCount')[0])