$(document).ready(function() {
  
$(".saveBtn").on("click", function() {
  
  //this gets obligatory values for text and time
  console.log(this);
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  
  //store in local storage
  localStorage.setItem(time, text)
})
  
})