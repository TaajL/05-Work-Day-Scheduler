var todayDate = dayjs().format('dddd, MM D YYYY');
$("#currentDay").html(todayDate);
    console.log($("#currentDay"))
$(document).ready(function () {
    // Save Button Event listener Click
    $(".saveBtn").on("click", function() {
        // Get the text input and time value
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save to local storage
        localStorage.setItem(time, text);
    });

    // Function to track time and update color
    var timeNow = dayjs().hour(); // Get current hour

    // Loop over time blocks
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour-")[1]);

        // Check time and classes for BG Color
        if (blockTime < timeNow) {
            $(this).removeClass("future present").addClass("past");
        } else if (blockTime === timeNow) {
            $(this).removeClass("past future").addClass("present");
        } else {
            $(this).removeClass("past present").addClass("future");
        }
    });

    // Get items from local storage
    for (var i = 8; i <= 21; i++) {
        $("#hour" + i + " .description").val(localStorage.getItem("hour" + i));
    }

    // Call the time tracker function
   // timeTracker();
});