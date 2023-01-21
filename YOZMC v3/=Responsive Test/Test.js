var widthX = document.getElementById('width');
var heightY = document.getElementById('height');
var cube = document.getElementById('mc');
var page = document.getElementById('page');
var txtW = document.getElementById('txtw');
var txtH = document.getElementById('txth');
var radio = document.getElementById('btn');
function change()
{
    changeGo()
    
  if (radio.value == 1) {
    page.style.width=widthX.value*5+'px'
    page.style.height=heightY.value*5+'px'
  }
}
function changeGo()
{
  mc.style.width = widthX.value + 'px'
  mc.style.height = heightY.value + 'px'

  txtW.innerHTML = 'width = ' + widthX.value * 5 + ' px';
  txtH.innerHTML = 'height = ' + heightY.value * 5 + ' px';
}

function go()
{
  page.style.width = widthX.value * 5 + 'px';
  page.style.height = heightY.value * 5 + 'px'
}