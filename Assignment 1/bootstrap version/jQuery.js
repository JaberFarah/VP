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
    		var marginTop = $('.holder').height()/3;
    		$('#bigBox').css("margin-top", marginTop);
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
    $(window).resize(
    	function(){
    		if ( $('#bigBox').attr('display') == 'block') {
    			var marginTop = $('.holder').height()/3;
    			$('#bigBox').css("margin-top", marginTop);
    		 	$('.holder').css("display", "block");
    		}

    	})


        /* groducts more items button code */

    $('.moreItems').click(
    	function(){
    		var index = 1;
    		var extraRows =  $('.extraRow').length;
    		var patch = '<div class="col-md-4 mgbot">\
						    <a href="#" class="thumbnail"></a>\
						    <h3 class="text-center"><a class="normal-lnk black">Item';
			var item = '</a></h3>\
						</div>';
    		if ( extraRows < 2) {
    			$("div .more").append('<div class="row extraRow">\
						'+ patch + " One" + item + patch + " Two" + item + patch + " Three" + item +'\
					</div>');
    		}
    		else {
    			$("div .more").append('<div class="row extraRow">\
    				'+ patch + " One" + item + patch + " Two" +'\
					</div>');
    			$('.moreItems').addClass('displayNone');
    		}
    })
    		        /* gallery items slide code */
    var slide = 0;
    var originalWidth = $('.slide0').width();
    function plusSlides(n){
    	slide += n;
    }
    $('.prev').click(
    	function(){
    		$('.slide' + slide).animate({ width: '0px' }, 1000);
    		$('.slide' + slide).hide(1000);

    	})
    $('.next').click(
    	function(){
    		$('.slide' + slide).show(1000);
    		$('.slide' + slide).animate({ width: originalWidth }, 1000);
    	})
});

