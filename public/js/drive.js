$(function(){

socket = io(':8443');

socket.on('connect', function() {
    console.log('Connected to socket');
    socket.emit('send doubles');
$(window).bind('keydown', function(e){
    if (e.keyCode == 37) {
        console.log('left');
	socket.emit('control', {serial: "id25", left: 'start'});
    } else if (e.keyCode == 38) {
        console.log('up');
	socket.emit('control', {serial: "id25", forward: 'start'});
    } else if (e.keyCode == 39) {
        console.log('right');
	socket.emit('control', {serial: "id25", right: 'start'});
    } else if (e.keyCode == 40) {
        console.log('down');
	socket.emit('control', {serial: "id25", backward: 'start'});
    }
});

$(window).bind('keyup', function(e){
    if (e.keyCode == 37) {
        console.log('left');
	socket.emit('control', {serial: "id25", left: 'stop'});
    } else if (e.keyCode == 38) {
        console.log('up');
	socket.emit('control', {serial: "id25", forward: 'stop'});
    } else if (e.keyCode == 39) {
        console.log('right');
	socket.emit('control', {serial: "id25", right: 'stop'});
    } else if (e.keyCode == 40) {
        console.log('down');
	socket.emit('control', {serial: "id25", backward: 'stop'});
    }
});
});

socket.on('doubles', function(doubles) {
	console.log("Got Doubles");
	
	if (doubles.length > 0) {
		$("#controls").show();
	} else {
		$("#controls").hide();
	}
});

});
