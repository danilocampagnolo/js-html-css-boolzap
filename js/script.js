$(document).ready(function() {
  $(document).on("click", "i.fa-telegram-plane",
      function() {
        sendMessage();
      }
  );
});


// ===================FUNCTIONS
  function sendMessage() {
    var textInput = $(".write-message input").val();
    console.log(textInput);

    if (textInput.length != 0) {
      var newMessageInput = $(".template li").clone();

      var data = new Date();
      var hours = addZero(data.getHours());
      var minutes = addZero(data.getMinutes());
      var time = hours +':'+ minutes;

      newMessageInput.addClass("msg input");
      newMessageInput.children("p").append(textInput);
      newMessageInput.children(".time").append(time);
      $(".chat-window").append(newMessageInput);
      $(".write-message input").val("");

      setTimeout(msgOutput, 1000);
    }
  }

  function msgOutput() {
    var data = new Date();
    var hours = addZero(data.getHours());
    var minutes = addZero(data.getMinutes());
    var time = hours +':'+ minutes;
    
    var textOutput = "ok";
    var newMessageOutput = $(".template li").clone();
    newMessageOutput.addClass("msg output");
    newMessageOutput.children("p").append(textOutput);
    newMessageOutput.children(".time").append(time);
    $(".chat-window").append(newMessageOutput);
  }

  function addZero(number) {
    if(number < 10) {
      number = '0' + number;
    }
    return number;
  }
