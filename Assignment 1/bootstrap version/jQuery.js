$(document).ready(function() {
    $( '.dropDown' ).hover(
        function(){
            $(this).children('.subMenu').slideDown(100);
        },
        function(){
            $(this).children('.subMenu').slideUp(100);
        }
    );
});