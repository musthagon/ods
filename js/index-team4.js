$(function(){
  $(".logo").click(function(){
    $(".svglogo").toggleClass("open");
    $(".left").toggleClass("sliderleft");
    $(".right").toggleClass("sliderright");
    $( ".svglogo" ).fadeOut( 1000 );
     setTimeout(
   function() 
   {
   $("html").css("overflow-y","scroll");
   }, 3500);
   
  });
});