$(".saveBtn").on("click", function () {
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, value);
})



$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));




$("#currentDay").text(moment().format("dddd, MMMM Do"));
var currentHour = moment().hours();


$(".time-block").each(function (index) {
  console.log(index + ": " + $(this));
  var blockHour = parseInt($(this).attr("id").split("-")[1]);
  console.log(blockHour);
  if (blockHour < currentHour) {
    $(this).addClass("past")
  }
  else if (blockHour == currentHour) {
    $(this).addClass("present")
  }
  else {
    $(this).addClass("future")
  };
});
