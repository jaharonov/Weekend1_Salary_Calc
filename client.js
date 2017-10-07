console.log('script sourced!');
$(document).ready(readyNow);


function readyNow() {
console.log('ready!');
$( "form" ).on( "submit", function( event ) {
  event.preventDefault();
addToForm();
/*$( "form" ).on( "submit", function( event ) {
  event.preventDefault();
  console.log( $("form").serializeArray() );
});*/


});
}

function addToForm() {


  var fields = $( "form" ).serializeArray();
   $( "#fromForm" ).empty();
   jQuery.each( fields, function( i, field ) {
     $( "#fromForm" ).append($(children)[1].value + " " );
   });
 }
