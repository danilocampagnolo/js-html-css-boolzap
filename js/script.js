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
      newMessageInput.addClass("msg input");
      newMessageInput.children("p").append(text);
      $(".chat-window").append(newMessageInput);
      $(".write-message input").val("");
    }
    return newMessageInput;
  }
