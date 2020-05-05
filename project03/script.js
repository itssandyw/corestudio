$(document).ready(function(){

	$(".pacman").hide();
	$(".envelope1").hide();
	$(".envelope2").hide();
	$(".envelope3").hide();
	$(".envelope4").hide();
	$(".envelope5").hide();

	$(".circle").click(function(){
		$(".circle").hide();
		$(".pacman").show();
	});
	$(".pacman").click(function() {
		$(".envelope1").show();
		var left = $(window).width() - $('.envelope1').width();
		$(".envelope1").css({
 			left: 0
		}).animate({
    		left: left
    	}, "slow");
		$('body').css('background','#E9E6FF'); 
    });
    $(".envelope1").click(function() {
    	$(".pacman").hide();
		$(".envelope1").hide();
		$(".envelope2").show();
	});
	$(".envelope2").click(function() {
    	$(".pacman").hide();
		$(".envelope1").hide();
		$(".envelope2").hide();
		$(".envelope3").show();
	});
	$(".envelope3").click(function() {
    	$(".pacman").hide();
		$(".envelope1").hide();
		$(".envelope2").hide();
		$(".envelope3").hide();
		$(".envelope4").show();
	});
	$(".envelope4").mouseover(function() {
    	$(".pacman").hide();
		$(".envelope1").hide();
		$(".envelope2").hide();
		$(".envelope3").hide();
		$(".envelope4").hide();
		$(".envelope5").show();
	});
	$(".envelope5").mouseleave(function() {
    	$(".pacman").hide();
		$(".envelope1").hide();
		$(".envelope2").hide();
		$(".envelope3").hide();
		$(".envelope4").show();
		$(".envelope5").hide();
	});
});