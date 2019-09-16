
function clearVal() {
	$('#firstNum').val("");
	$('#secondNum').val("");
	$('#result').val("");
	
}

function sum() {
	var firstNum = $('#firstNum').val();
	var secondNum = $('#secondNum').val();
	var result = parseInt(+firstNum) + parseInt(+secondNum);
	$('#result').val(result);
}