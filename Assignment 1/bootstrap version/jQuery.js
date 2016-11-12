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
    		$(this).children('#sub2').fadeToggle(100);
    	}
    );
    $(document).on("click",
    	function(){
    		$('#sub2').slideUp(100);
    	}
    );
    $('.drop2').click(
    	function(event){
    		event.stopPropagation();
    	}
    );
    $('li').click(
    	function(event){
    		event.stopPropagation();
    	})

    /* section 3 popUp code */
    $('.drop3').click(
    	function(){
    		var width = ($(document).width()/2) > $('.container').width() ? $('.container').width() : ($(document).width()/2);
    		var height = $('.holder').height()/3;
    		$('#bigBox').css("width", width);
    		$('#bigBox').css("height", height);
    		$('.holder').css("display", "block");
    });
    $('.close').click(
    	function(){
    		$('.holder').css("display", "none");
    });
    $(document).on("click",
    	function(){
    		$('.holder').css("display", "none");
    	}
    );
    $('.drop3').click(
    	function(event){
    		event.stopPropagation();
    	}
    );
    $('#bigBox').click(
    	function(event){
    		event.stopPropagation();
    	}
    );
   /* $('window').resize(
    	function(){
    		$('#bigBox').css("height", height);
    })
*/

        /* groducts more items button code */

    var index = 1;      		
    $('.moreItems').click(
    	function(){
    		if ( index < 4) {
    			$("div.row.extraRow" + index).removeClass('displayNone');
    			index = index + 1;
    		}
    		if (index == 4)
    			$('.moreItems').addClass('displayNone');
    })
});