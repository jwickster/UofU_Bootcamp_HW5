$(document).ready(function() {
  
$(".saveBtn").on("click", function() {
  
  //this gets obligatory values for text and time
  console.log(this);
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  
  //store in local storage
  localStorage.setItem(time, text)
})
  $("#8am .description").val(localStorage.getItem("8am"));
  $("#9am .description").val(localStorage.getItem("9am"));
  $("#10am .description").val(localStorage.getItem("10am"));
  $("#11am .description").val(localStorage.getItem("11am"));
  $("#12pm .description").val(localStorage.getItem("12pm"));
  $("#1pm .description").val(localStorage.getItem("1pm"));
  $("#2pm .description").val(localStorage.getItem("2pm"));
  $("#3pm .description").val(localStorage.getItem("3pm"));
  $("#4pm .description").val(localStorage.getItem("4pm"));
  $("#5pm .description").val(localStorage.getItem("5pm"));
  
  function trackCalender() {
    //initialize current hour
    const currHour = moment().hour();
    
    //loop through time elements of classes
    $(".time-element").each(function () {
      const hourBlock = parseInt($(this).attr("id").split("hour")[1]);
      
      console.log(hourBlock, currHour);
     
    })
    
  }
  
  
})