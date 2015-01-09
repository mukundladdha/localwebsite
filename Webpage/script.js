var main = function(){
    
	    $('.stuff1').hide();
	    $('.stuff2').hide();
	    
    
	    $('.header1').click(function(){
		$('.header2').removeClass('.active');
		$('.header1').addClass('.active');
		$('.stuff2').hide();
		$('.stuff1').show();
	    });
	    
	    $('.header2').click(function(){
		$('.header1').removeClass('.active');
		$('.header2').addClass('.active');
		$('.stuff1').hide();        
		$('.stuff2').show();
	    });
}
    
    $(document).ready(main);