//business logic

var beepboop = function (userInput) {
  var result = [];
  var userName= "";
  for (var i= 1; i <= userInput; i++) {
    result.push(i);
    if (i === 0)  {
      result.push("BOOP!");
    } else if (i === 1) {
      result.push("BOOP!");
    } else if (i % 3 === 0) {
      result.push("I'm sorry, "+ userName + ". I'm afraid I can't do that.");
    }
  }
return result;
}

//front-end logic

$(document).ready (function(){
  $('#userInput').submit(function(event){
    event.preventDefault();
    userName = $("input#name").val();
    var number = parseInt($('input#number').val());
    var result = beepboop(number);
   $(".output").text(result);
   $(".output").show();
 });
});
