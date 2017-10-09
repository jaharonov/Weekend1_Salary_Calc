console.log('script sourced!');
$(document).ready(readyNow);


function readyNow() {
console.log('ready!');
$( "form" ).on( "submit", function( event ) {
  event.preventDefault();

addToForm();

$("form").trigger("reset");



/*$( "form" ).on( "submit", function( event ) {
  event.preventDefault();
  console.log( $("form").serializeArray() );
});*/


});


}
var annualSalary = $('[name="annualSalary"]').val();
var monthlyCost = Math.round(annualSalary / 12);

function addToForm() {
console.log($( "form" ).serializeArray());
  //var fields = $( "form" ).serializeArray();

  var monthlyCost = (Math.round($('[name="annualSalary"]').val() / 12)) + ;





   //jQuery.each( fields, function( i, field ) {
     $("tbody").append('<tr>');
     $( "tbody" ).append('<td>' + $('[name="firstName"]').val() + '</td>');
     $( "tbody" ).append('<td>' + $('[name="lastName"]').val() + '</td>');
     $( "tbody" ).append('<td>' + $('[name="idNumber"]').val() + '</td>');
     $( "tbody" ).append('<td>' + $('[name="jobTitle"]').val() + '</td>');
     $( "tbody" ).append('<td>' + $('[name="annualSalary"]').val() + '</td>');
     $( "#total" ).append(monthlyCost );





}
