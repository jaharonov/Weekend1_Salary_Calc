console.log('script sourced!');
$(document).ready(readyNow);

function readyNow() {
  console.log('ready!');
  $( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    addToForm();
    $("form").trigger("reset");
  });
}
function addToForm() {
  console.log($( "form" ).serializeArray());
  var monthlyCost = Math.round($('[name="annualSalary"]').val() / 12);
  $("tbody").append('<tr>');
  $( "tbody" ).append('<td>' + $('[name="firstName"]').val() + '</td>');
  $( "tbody" ).append('<td>' + $('[name="lastName"]').val() + '</td>');
  $( "tbody" ).append('<td>' + $('[name="idNumber"]').val() + '</td>');
  $( "tbody" ).append('<td>' + $('[name="jobTitle"]').val() + '</td>');
  $( "tbody" ).append('<td>' + $('[name="annualSalary"]').val() + '</td>');
  $( "#total" ).append('<br>' + monthlyCost);



}
