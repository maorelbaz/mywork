
document.onload , intervalID = setInterval(drawCircles, 100);
var intervalR = 1;
function drawCircles() {
    var canvas = document.querySelector("#mycanvas");
    var context = canvas.getContext('2d');
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    if (centerX > centerY) {
    var radius = centerY;
    } else {
        var radius = centerX;
    }
    
    if (intervalR <= radius) {
    context.beginPath();
    context.arc(centerX, centerY, intervalR, 0, 2 * Math.PI, false);
   
    context.lineWidth = 1;
    context.strokeStyle = '#003300';
    context.stroke();
    intervalR++;
    } else {
    clearInterval(intervalID);
    }
}
