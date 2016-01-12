
$(document).ready( function( ) {
console.log("hello world")
$("a").click(function(event){
    event.preventDefault();
});
$(".post1").slideUp();


$( ".readmore" ).click(function() {
  console.log("clicked")
  $( ".post1" ).slideDown("slow")
  $(".readmore").hide();
  $( ".readless" ).show();
});

$( ".readless" ).click(function() {
  console.log("clicked")
  $( ".post1" ).slideUp("slow")
  $(".readless").hide();
  $( ".readmore" ).show();

  });


//on readless p tag I want a click event that slides up .post1
} );
