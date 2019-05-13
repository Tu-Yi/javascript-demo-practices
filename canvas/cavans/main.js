/** 
 * <canvas id="ca" width="300" height="300"></canvas>
 * 
 * #ca {
  background: green;
}
body{
  margin:0;
}
*/
//矩形
// ctx.strokeStyle='red'
// ctx.strokeRect(0,0,100,100)
// ctx.fillStyle='yellow'
// ctx.fillRect(0,0,100,100)
// ctx.clearRect(50,50,10,10)

// //三角形 3个点
// ctx.fillStyle='yellowgreen'
// ctx.beginPath();
// ctx.moveTo(240,240);
// ctx.lineTo(300,240);
// ctx.lineTo(300,300);
// ctx.fill();


var canvas = document.getElementById("ca")
var color = document.getElementById("color")
var ctx = canvas.getContext("2d")

var paint = false;
var isEraser = false
var lineWidth = 5;
var lastPoint = {
  x: undefined,
  y: undefined
}

AutoResize(canvas)

if(document.body.ontouchstart===null){
  ListenTouch();
}else{
  LitsenMouse();
}

save.onclick=function(){
  var url = canvas.toDataURL("image/png");
  var a = document.createElement("a")
  document.body.appendChild(a)
  a.href = url
  a.download = '我的画'
  a.target = '_blank'
  a.click();
}
red.onclick = function(){
  ctx.strokeStyle = 'red';
  setColor('red');
}
blue.onclick = function(){
  ctx.strokeStyle = 'blue';
  setColor('blue');
}
green.onclick = function(){
  ctx.strokeStyle = 'green';
  setColor('green');
}
black.onclick = function(){
  ctx.strokeStyle = 'black';
  setColor('black');
}
yellow.onclick = function(){
  ctx.strokeStyle = 'yellow';
  setColor('yellow');
}
gray.onclick = function(){
  ctx.strokeStyle = 'gray';
  setColor('gray');
}
purple.onclick = function(){
  ctx.strokeStyle = 'purple';
  setColor('purple');
}
orange.onclick = function(){
  ctx.strokeStyle = 'orange';
  setColor('orange');
}
pink.onclick = function(){
  ctx.strokeStyle = 'pink';
  setColor('pink');
}
clear.onclick=function(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
}
eraser.onclick = function () {
  isEraser=true
  eraser.classList.add('active')
  brush.classList.remove('active')
}
brush.onclick = function () {
  isEraser=false
  brush.classList.add('active')
  eraser.classList.remove('active')
}


function setColor(color){
  var lan = document.querySelector('.color');
  var child= lan.children;
  for(var i=0;i< child.length;i++){
    if(child[i].className==color){
      child[i].className = color + ' active'
    }else{
      child[i].classList.remove('active');
    }
  }
}



/**** */
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineWidth = lineWidth
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
}

function drawCircle(x, y, radius) {
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function AutoResize(canvas) {
  setSize();
  window.onresize = function () {
    setSize();
  }

  function setSize() {
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight
    canvas.width = pageWidth;
    canvas.height = pageHeight;
    color.height = pageHeight;
  }
}

function LitsenMouse() {
  canvas.onmousedown = function (e) {
    var x = e.clientX;
    var y = e.clientY;
    paint = true;
    if (isEraser) {
      ctx.clearRect(x, y, 10, 10);
    } else {
      lastPoint = {
        x: x,
        y: y
      }
    }
  }
  canvas.onmousemove = function (e) {
    var x = e.clientX;
    var y = e.clientY;
    if (!paint) {
      return;
    }
    if (isEraser) {
      ctx.clearRect(x, y, 10, 10);
    } else {
      var newPoint = {
        x: x,
        y: y
      }
      drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
      lastPoint = newPoint
    }
  }
  canvas.onmouseup = function (e) {
    paint = false;
  }
}
function ListenTouch(){
  canvas.ontouchstart=function(e){
    console.log(1)
    var x = e.touches[0].clientX;
    var y = e.touches[0].clientY;
    paint = true;
    if (isEraser) {
      ctx.clearRect(x, y, 10, 10);
    } else {
      lastPoint = {
        x: x,
        y: y
      }
    }
  }
  canvas.ontouchmove=function(e){
    console.log(e)
    var x = e.touches[0].clientX;
    var y = e.touches[0].clientY;
    if (!paint) {
      return;
    }
    if (isEraser) {
      ctx.clearRect(x, y, 10, 10);
    } else {
      var newPoint = {
        x: x,
        y: y
      }
      drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
      lastPoint = newPoint
    }
  }
  canvas.ontouchend=function(e){
    paint = false;
  }
}

function rangeChange(){
  console.log(document.getElementById('range'))
  var value = document.getElementById('range').value ;
  lineWidth = value;
  document.getElementById('rangeValue').innerHTML = value;
}