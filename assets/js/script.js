$(document).ready(function(){
  $('.carousel').carousel();

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });

  $("#submit").click(function(e){
    e.preventDefault();
    //API call here

    // $.ajax({
    //
    // }).done(function(){
    //
    // })

    window.location.href = 'schedule.html'
  })
})