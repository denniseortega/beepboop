//business logic

var beepboop = function (num) {

  var result = [];

  for (var i= 1; i < num; i++) {

    if (i % 3 === 0)  {
      result.push("I'm sorry, Dave. I'm afraid I can't do that.");
      return;

    } else if (i.toString().match (/0/)){
      result.push("BEEP!");
      return;

    }else if (i.toString().match(/1/)) {
      result.push("BOOP!");
  }
}
return result;
}

//front-end logic
$(document).ready (function(){
  $('#userInput').submit(function(event){
    event.preventDefault();
    var input = parseInt ($('#number').val());
    var output = beepboop(input);
   $(".message").text(output);
   $(".output").show();
 });
});
