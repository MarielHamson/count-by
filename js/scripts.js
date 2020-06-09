// business logic

$(document).ready(function() {
  $("#form").submit(function(event) {
    const countTo = parseInt($("input#countTo").val());
    const countBy = parseInt($("input#countBy").val());
    const startAt = parseInt($("input#startAt").val());
    const numbersArray = [];
    for (let i = startAt; i <= countTo; i += countBy){
      numbersArray.push(" " + i);
    }
    event.preventDefault();

// UI logic

$("#result").show();
$("#output").text("Your calculation is " + numbersArray + " and the total amount of numbers in your calcuation is " + (numbersArray.length));

});
});