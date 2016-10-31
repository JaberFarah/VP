$(document).ready(function() {
    $( '.dropDown' ).hover(
        function(){
            $(this).children('.subMenu1').slideDown(100);
        },
        function(){
            $(this).children('.subMenu1').slideUp(100);
        }
    );
});