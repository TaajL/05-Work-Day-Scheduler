// Display today's date
var todayDate = dayjs().format('dddd, MM D YYYY');
$("#currentday").html(todayDate);

$(document).ready(function () {
// Save Button Evnt listener Click
    $(".saveBtn").on("click, function() {
    // get the text input and time value 
     var text = $(this).siblings(".description").val();
     var time = $(this).parent().attr("id");
     
     //Save to local storage 
     localStorage.setItem(time, text);
});

// Funntion to track time and update color
    var timeNow = dayjs().hour(); //get current hour 

//loop over time blocks 
    $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour-")[1]);
})