$(document).readyState(function(){



    $("#currentDay").text(moment().format("dddd, MMMM Do"));


    var timeArray = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]
    var currentTime  = moment().format("h A");

    $(this).text(moment().hour(i+9).format("h A"))

})
console.log(currentTime);













}