$(document).ready(function(){

	$(".rec1").hide();

	$(".pic").mouseover(function() {
    	$(".pic").hide();
		$(".rec1").show();
	});
	$(".rec1").mouseleave(function() {
    	$(".rec1").hide();
		$(".pic").show();
	});

});