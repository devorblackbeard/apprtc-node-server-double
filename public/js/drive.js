var $j = jQuery.noConflict();
$j(function(){

var FOV = 47 * Math.PI/180; // camera fov in radians

socket = io(':8443');

socket.on('connect', function() {

console.log('Connected to socket');
socket.emit('send doubles');

$j(window).bind('keydown', function(e){
    if (e.keyCode == 37) {
        console.log('left');
	socket.emit('control', {serial: "id25", left: 'start'});
    } else if (e.keyCode == 38) {
        console.log("Start: " + Date.now());
	socket.emit('control', {serial: "id25", forward: 'start'});
    } else if (e.keyCode == 39) {
        console.log('right');
	socket.emit('control', {serial: "id25", right: 'start'});
    } else if (e.keyCode == 40) {
        console.log('down');
	socket.emit('control', {serial: "id25", backward: 'start'});
    }
});

$j(window).bind('keyup', function(e){
    if (e.keyCode == 37) {
        console.log('left');
	socket.emit('control', {serial: "id25", left: 'stop'});
    } else if (e.keyCode == 38) {
        console.log("Stop: " + Date.now());
	socket.emit('control', {serial: "id25", forward: 'stop'});
    } else if (e.keyCode == 39) {
        console.log('right');
	socket.emit('control', {serial: "id25", right: 'stop'});
    } else if (e.keyCode == 40) {
        console.log('down');
	socket.emit('control', {serial: "id25", backward: 'stop'});
    }
});

$j(document).click(function(e) {
    var width = window.innerWidth/2;
    var x = e.pageX - width;
    if (x > 0) {
        theta = - Math.atan((x/width) * Math.tan(FOV/2)) * 180/Math.PI;
    } else if (x < 0) {
        theta = Math.atan((-x/width) * Math.tan(FOV/2)) * 180/Math.PI;
    } else {
        theta = 0;
    }
    console.log('turn ' + theta);
    socket.emit('control', {serial: "id25", turn: theta});
});

$j("#left-turn").click(function(e) {
    console.log('left turn');
    socket.emit('control', {serial: "id25", turn: 90});
});

$j("#right-turn").click(function(e) {
    console.log('right turn');
    socket.emit('control', {serial: "id25", turn: -90});
});

$j(window).keypress(function(e){
    if (String.fromCharCode(e.keyCode) == 'd') {
        console.log('deploy');
        socket.emit('control', {serial: "id25", kickstand: 'deploy'});
    }
    if (String.fromCharCode(e.keyCode) == 'r') {
        console.log('retract');
        socket.emit('control', {serial: "id25", kickstand: 'retract'});
    }
    if (String.fromCharCode(e.keyCode) == 'f') {
        console.log('follow');
        socket.emit('control', {serial: "id25", follow: 'alt'});
    }
    if (String.fromCharCode(e.keyCode) == 'n') {
        console.log('navigate');
        socket.emit('control', {serial: "id25", navigate: 'alt'});
    }
});

socket.on('doubles', function(doubles) {
	console.log("Got Doubles");
});
});
});
