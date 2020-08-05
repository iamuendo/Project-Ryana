/*
@author Isaac Muendo
@email  isaac.muendo.official@gmail.com
@create date 2020-07-17 10:45:12
@modify date 2020-07-28 19:06:30
@desc Ryana Calendars - Product view
*/



/*This modal script is holds the functions for the 
 shop now button in the product card and the close 
 button in the product view. */


$(document).ready(function(){

    //When the shop button is clicked the product view popup is displayed.
    $('.shop-now').click(function(){
    var  $productview = $(this).parent().parent().next();

    // The fadeIn is a method defined in the jQuery.min.js
    $($productview).fadeIn('1000');
    });

    //When the close button is clicked the product view popup clears from the screen
    $('.close-btn').click(function(){
    var $closebtn = $(this).parent();
    
    // The fadeOut is a method also defined in the jQuery.min.js
    $($closebtn).fadeOut('800');
    });
 });