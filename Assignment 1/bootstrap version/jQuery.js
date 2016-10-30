$(document).ready(function() {
    $( '.dropDown' ).hover(
        function(){
            $(this).children('.subMenu').slideDown(200);
        },
        function(){
            $(this).children('.subMenu').slideUp(200);
        }
    );
});