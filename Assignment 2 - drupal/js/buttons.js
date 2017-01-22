(function($) {
	$(document).ready(
		function(){
			$('#block-superfish-2, #block-superfish-3').addClass('col-md-3 col-xs-6');
			$('.items-button').click(
				function(){
					$('.view-items-' + ($('.displayNone').length + 1) + '.displayNone').removeClass('displayNone');
					if (($('.displayNone').length) == 0) {
						$('.items-button').addClass('displayNone');
					}
				})

			$('#menu-489-1').click(
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
    		});
    		$('#menu-489-1').click(
    			function(event){
    				event.stopPropagation();
    		});
		    $('#bigBox').click(
    			function(event){
    				event.stopPropagation();
    		});

			var product = 0;
			$('.products-prev-button').click(
				function(){
					if( product < 7){
						$(".product-node-" + product).animate({ width: '0px' }, 1000);
						$(".product-node-" + product).hide(500);
						$('.products-prev-button').hide();
						$('.products-next-button').hide();
						$('.products-prev-button').hide().delay(1500).show(1);
						$('.products-next-button').hide().delay(1500).show(1);
						product++;
					}
    			})
			$('.products-next-button').click(
				function(){
					var nodeWidth = $('.product-node-9').width() + 30;
					if(product > 0){
						$(".product-node-" + (product-1)).show(500);
						$(".product-node-" + (product-1)).animate({ width: nodeWidth + 'px' }, 1000);
						$('.products-prev-button').hide();
						$('.products-next-button').hide();
						$('.products-prev-button').hide().delay(1500).show(1);
						$('.products-next-button').hide().delay(1500).show(1);
						product--;
					}
    			})
			
		}
	)
})(jQuery);


