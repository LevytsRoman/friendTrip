$(document).ready(function(){
  $('.carousel').carousel();
  var price = 0,
      outboundDate = "",
      inboundDate = "",
      outAirport = "",
      outBound = "",
      inBound = "",
      inBoundAirport = "";

  $('.datepicker').pickadate({
    format: 'yyyy-mm-dd',
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
    // pen 
    var outBound = $('.outbound').val();
    var inBound = $('.inbound').val();
    // debugger
    // $.ajax({
    //   url: 'https://api-dev.fareportallabs.com/air/api/search/searchflightavailability',
    //   contenType: 'application/json',
    //   type: 'POST',
    //   data: {
    //     "ResponseVersion": "VERSION41",
    //     "FlightSearchRequest": {
    //         "Adults": "1",
    //         "Child": "0",
    //         "ClassOfService": "ECONOMY",
    //         "InfantInLap": "0",
    //         "InfantOnSeat": "0",
    //         "Seniors": "0",
    //         "TypeOfTrip": "ROUNDTRIP",
    //         "SegmentDetails": [
    //                                 {
    //                                 "DepartureDate": outBound,
    //                                 "DepartureTime": "1100",
    //                                 "Destination": "MUC",
    //                                 "Origin": "NYC"
    //                                 },
    //                                 {
    //                                 "DepartureDate": inBound,
    //                                 "DepartureTime": "1100",
    //                                 "Destination": "NYC",
    //                                 "Origin": "MUC"
    //                                 }
    //                             ]
    //                         }
    //         },
    //   beforeSend: function (xhr) {
    //   },
    // }).done(function(res){
    //   debugger
      // $('.date').hide();
      // $('.book').show();
    // })
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api-dev.fareportallabs.com/air/api/search/searchflightavailability",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "authorization": "Basic ci5sZXZ5dHNAZ21haWwuY29tOkRDMTk2NDg3",
        "cache-control": "no-cache",
        "postman-token": "9e54cf48-a6ae-99be-ea34-dbbbadd1cd9d"
      },
      "processData": false,
      "data": `{\n\"ResponseVersion\": \"VERSION41\",\n\"FlightSearchRequest\": {\n    \"Adults\": \"1\",\n    \"Child\": \"0\",\n    \"ClassOfService\": \"ECONOMY\",\n    \"InfantInLap\": \"0\",\n    \"InfantOnSeat\": \"0\",\n    \"Seniors\": \"0\",\n    \"TypeOfTrip\": \"ROUNDTRIP\",\n    \"SegmentDetails\": [\n                            {\n                            \"DepartureDate\": \"${outBound}\",\n                            \"DepartureTime\": \"1100\",\n                            \"Destination\": \"MUC\",\n                            \"Origin\": \"NYC\"\n                            },\n                            {\n                            \"DepartureDate\": \"${inBound}\",\n                            \"DepartureTime\": \"1100\",\n                            \"Destination\": \"NYC\",\n                            \"Origin\": \"MUC\"\n                            }\n                        ]\n                    }\n    }`
    }

    $.ajax(settings).done(function (response) {
      var sorted = response.FlightResponse.FpSearch_AirLowFaresRS.SegmentReference.RefDetails.sort((a,b) => a.PTC_FareBreakdown.Adult.TotalAdultFare - b.PTC_FareBreakdown.Adult.TotalAdultFare)

      price = sorted[0].PTC_FareBreakdown.Adult.TotalAdultFare

      $('.date').hide();
      $('.book').show();
      $('.leaving-date').text(new Date(outBound).toUTCString())
      $('.arrival-date').text(new Date(inBound).toUTCString())

      $('.price').text(price);
      // $('.code').text(response.FlightResponse.FpSearch_AirLowFaresRS.CntKey);
    });
  })

  $("#book").click(function(e){
    e.preventDefault();
    //API call here

    // $.ajax({
    //
    // }).done(function(){
    //
    // })

    $('.date').hide();
    $('.book').hide();
    $('.brag').show();
  })
})
