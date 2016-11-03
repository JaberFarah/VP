$(document).ready(function() {
    $( '.drop1' ).hover(
        function(){
            $(this).children('#sub1').slideDown(100);
        },
        function(){
            $(this).children('#sub1').slideUp(100);
        }
    );

    /* section 2 slide down code */




    $('.drop2').click(
    	function(){
    		$(this).children('#sub2').slideDown(100);
    	}
    );
    $(document).on("click",
    	function(){
    		$('#sub2').slideUp(100);
    	}
    )
    $('.drop2').click(
    	function(event){
<<<<<<< HEAD
    		event.stopPpagation();
=======
    		event.stopPropagation();
>>>>>>> refs/remotes/origin/jquery.js
    	}
    )
});