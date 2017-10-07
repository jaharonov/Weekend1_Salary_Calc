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

console.log($( "form" ).serializeArray());
  //var fields = $( "form" ).serializeArray();
  var annualSalary = $('[name="annualSalary"]').val();
  var monthlyCost = Math.round(annualSalary / 12);
   $( "#fromForm" ).empty();
   //jQuery.each( fields, function( i, field ) {
     $( "#fromForm" ).append('<th>' + $('[name="firstName"]').val() + '</th>');
     $( "#fromForm" ).append('<th>' + $('[name="lastName"]').val() + '</th>');
     $( "#fromForm" ).append('<th>' + $('[name="idNumber"]').val() + '</th>');
     $( "#fromForm" ).append('<th>' + $('[name="jobTitle"]').val() + '</th>');
     $( "#fromForm" ).append('<th>' + $('[name="annualSalary"]').val() + '</th>');
     $( "#fromForm" ).append('<th>' + monthlyCost + '</th>');
 //});
//}
}
