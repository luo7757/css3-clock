var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d');
ctx.strokeStyle = '#00ffff';
ctx.lineWidth = 17;
ctx.shadowBlur = 15;
ctx.shadowColor = "#00ffff";

// function MyCanvas(domId){
//     this.dom = document.querySelector('#' + dom);
//     this.ctx = canvas.getContext('2d');
//     this.ctx.strokeStyle = '#00ffff';
//     this.ctx.lineWidth = 17;
//     this.ctx.shadowBlur = 15;
//     this.ctx.shadowColor = "#00ffff";
// }

function renderTime(){
    var date = new Date();
    var today = date.toDateString();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ms = date.getUTCMilliseconds();
    var xs = ms / 1000 + s; 
    grandint = ctx.createRadialGradient(250,250,5,250,250,300);
    grandint.addColorStop(0,'#03303a');
    grandint.addColorStop(1,'#000');
    ctx.fillStyle = grandint;
    ctx.fillRect(0,0,500,500);

    ctx.beginPath();
    ctx.arc(250,250,200,deg(270),deg(h * 30 - 90));
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(250,250,170,deg(270),deg(m * 6 - 90));
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(250,250,140,deg(270),deg(xs * 6 - 90));
    ctx.stroke();

    ctx.font = '25px Helvetica';
    ctx.fillStyle = 'rgba(0,255,255,.8)';
    ctx.fillText(today,170,250);

    ctx.font = '25px Helvetica';
    ctx.fillStyle = 'rgba(0,255,255,.8)';
    ctx.fillText(twoNum(h) + ':' + twoNum(m) + ':' + twoNum(s) + ':' + twoNum(ms),170,280);
}

setInterval(renderTime, 40);
function twoNum(num){
    return ('0' + num).slice(-2);
}
function deg(deg){
    var f = Math.PI / 180;
    return deg * f;
}

renderTime();