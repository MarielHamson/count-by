$(document).ready(function() {
  $("#form").submit(function(event) {
    const countTo = parseInt($("input#countTo").val());
    const countBy = parseInt($("input#countBy").val());
    const startAt = parseInt($("input#startAt").val());
    const numbersArray = [];
    for (let i = startAt; i <= countTo; i += countBy){
      numbersArray.push(i);
  }
      console.log(numbersArray);
  event.preventDefault();
  });
});