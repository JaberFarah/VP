$(document).ready(function() {
    $( '.drop1' ).hover(
        function(){
            $(this).children('#sub1').slideDown(100);
        },
        function(){
            $(this).children('#sub1').slideUp(100);
        }
    );

    //var for the slide gallery
    var sslide = 0;

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
    var originalWidth;

    $('.prev2').click(
    	function(){
    		if (($(window).width() >= 768 && sslide < 2) || ($(window).width() < 768 && sslide < 4) ) {
    			originalWidth = $('.sslide' + sslide).width();
    			$('.sslide' + sslide).animate({ width: '0px' }, 1000);
    			$('.sslide' + sslide).hide(1000);
    			$('.next' + sslide).hide();
    			$('.prev2').hide().delay(2000).show(1);
    			$('.next2').hide().delay(2000).show(1);
    			sslide +=1;
    			$('.drnr').append('<p>' + $(window).width() + '</p>');
    		}

    	}),
    $('.next2').click(
    	function(){
    		if (sslide > 0) {
	    		$('.sslide' + (sslide - 1)).show();
	    		$('.sslide' + (sslide - 1)).animate({ width: (originalWidth + 30) }, {duration: 1500, queue: false});
	    		$('.next2' + (sslide - 1)).show(1500)
    			$('.prev2').hide().delay(1500).show(1);
    			$('.next2').hide().delay(1500).show(1);

	    		sslide-=1;
    		}

    	})
});

