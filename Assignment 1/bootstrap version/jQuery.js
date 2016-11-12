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
    		//var width = ($(document).width()/2) > $('.container').width() ? $('.container').width() : ($(document).width()/2);
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
    		var marginTop = $('.holder').height()/3;
    		$('#bigBox').css("margin-top", marginTop);
    		$('.holder').css("display", "block");
    	})


        /* groducts more items button code */

    $('.moreItems').click(
    	function(){
    		var extraRows =  $('.extraRow').length;
    		if ( extraRows < 2) {
    			$("div .more").append('<div class="row extraRow">\
						<div class="col-md-4 mgbot">\
						    <a href="#" class="thumbnail"></a>\
						    <h3 class="text-center"><a class="normal-lnk black">Item One</a></h3>\
						</div>\
						<div class="col-md-4 mgbot">\
						    <a href="#" class="thumbnail"></a>\
						    <h3 class="text-center"><a class="normal-lnk black">Item Two</a></h3>\
						</div>\
						<div class="col-md-4 mgbot">\
						    <a href="#" class="thumbnail"></a>\
						    <h3 class="text-center"><a class="normal-lnk black">Item Three</a></h3>\
						</div>\
					</div>');
    		}
    		else {
    			$("div .more").append('<div class="row extraRow">\
						<div class="col-md-4 mgbot">\
						    <a href="#" class="thumbnail"></a>\
						    <h3 class="text-center"><a class="normal-lnk black">Item One</a></h3>\
						</div>\
						<div class="col-md-4 mgbot">\
						    <a href="#" class="thumbnail"></a>\
						    <h3 class="text-center"><a class="normal-lnk black">Item Two</a></h3>\
						</div>\
					</div>');
    			$('.moreItems').addClass('displayNone');
    		}
    })
});