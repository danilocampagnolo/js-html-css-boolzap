$(document).ready(function() {
  $(document).on("click", "i.fa-telegram-plane",
      function() {
        sendMessage();
      }
  );
});


// ===================FUNCTIONS
  function sendMessage() {
    var text = $(".write-message input").val();
    console.log(text);

    if (text.length != 0) {
      var newMessageInput = $(".template li").clone();

      var data = new Date();
      var hours = addZero(data.getHours());
      var minutes = addZero(data.getMinutes());
      var time = hours +':'+ minutes;

      newMessageInput.addClass("msg input");
      newMessageInput.children("p").append(text);
      newMessageInput.children(".time").append(time);
      $(".chat-window").append(newMessageInput);
      $(".write-message input").val("");
    }
    return newMessageInput;
  }

  function addZero(number) {
    if(number < 10) {
      number = '0' + number;
    }
    return number;
  }
