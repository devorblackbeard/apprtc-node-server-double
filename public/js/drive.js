$(function(){

window.socket = io(':8443');

socket.on('connect', function() {
    console.log('Connected to socket');
    socket.emit('send doubles');
$(window).bind('keydown', function(e){
    if (e.keyCode == 37) {
        console.log('left');
	socket.emit('control', {serial: $("#double-select").find(":selected").text(), left: 'start'});
    } else if (e.keyCode == 38) {
        console.log('up');
	socket.emit('control', {serial: $("#double-select").find(":selected").text(), forward: 'start'});
    } else if (e.keyCode == 39) {
        console.log('right');
	socket.emit('control', {serial: $("#double-select").find(":selected").text(), right: 'start'});
    } else if (e.keyCode == 40) {
        console.log('down');
	socket.emit('control', {serial: $("#double-select").find(":selected").text(), backward: 'start'});
    }
});

$(window).bind('keyup', function(e){
    if (e.keyCode == 37) {
        console.log('left');
	socket.emit('control', {serial: $("#double-select").find(":selected").text(), left: 'stop'});
    } else if (e.keyCode == 38) {
        console.log('up');
	socket.emit('control', {serial: $("#double-select").find(":selected").text(), forward: 'stop'});
    } else if (e.keyCode == 39) {
        console.log('right');
	socket.emit('control', {serial: $("#double-select").find(":selected").text(), right: 'stop'});
    } else if (e.keyCode == 40) {
        console.log('down');
	socket.emit('control', {serial: $("#double-select").find(":selected").text(), backward: 'stop'});
    }
});
});

socket.on('doubles', function(doubles) {
	$("#double-select").html("");
	doubles.forEach(function(double) {
		$("#double-select").append('<option value="' + double + '">' + double + '</option>');
	});
	
	if (doubles.length > 0) {
		$("#controls").show();
	} else {
		$("#controls").hide();
	}
});

$(window).bind('keydown', function(e){
    if (e.keyCode == 37) {
        console.log('left');
	socket.emit('control', {serial: $("#double-select").find(":selected").text(), left: 'start'});
    } else if (e.keyCode == 38) {
        console.log('up');
	socket.emit('control', {serial: $("#double-select").find(":selected").text(), forward: 'start'});
    } else if (e.keyCode == 39) {
        console.log('right');
	socket.emit('control', {serial: $("#double-select").find(":selected").text(), right: 'start'});
    } else if (e.keyCode == 40) {
        console.log('down');
	socket.emit('control', {serial: $("#double-select").find(":selected").text(), backward: 'start'});
    }
});

$(window).bind('keyup', function(e){
    if (e.keyCode == 37) {
        console.log('left');
	socket.emit('control', {serial: $("#double-select").find(":selected").text(), left: 'start'});
    } else if (e.keyCode == 38) {
        console.log('up');
	socket.emit('control', {serial: $("#double-select").find(":selected").text(), forward: 'start'});
    } else if (e.keyCode == 39) {
        console.log('right');
	socket.emit('control', {serial: $("#double-select").find(":selected").text(), right: 'start'});
    } else if (e.keyCode == 40) {
        console.log('down');
	socket.emit('control', {serial: $("#double-select").find(":selected").text(), backward: 'start'});
    }
});
