// business logic

$(document).ready(function() {
  $("#form").submit(function(event) {
  
    const countTo = parseInt($("input#countTo").val());
    const countBy = parseInt($("input#countBy").val());
    const startAt = parseInt($("input#startAt").val());
    const numbersArray = [];

    if (countBy > countTo) {
      alert("Please enter a smaller number to count by");
    } else if (countTo >= 0 && countBy >= 0 && startAt >=0) {
      for (let i = startAt; i <= countTo; i += countBy){
        numbersArray.push(" " + i);
      }

  // UI logic

      $("#result").show();
      $("#output").text("Your calculation is " + numbersArray + " and the total amount of numbers in your calcuation is " + (numbersArray.length));
  } else {
    alert("Please enter positive integers in all fields");
  }
    event.preventDefault();

});
});