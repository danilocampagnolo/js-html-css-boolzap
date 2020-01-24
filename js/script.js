$(document).ready(function() {

  $(document).on("click", "i.fa-telegram-plane",
      function() {
      var text = $(".write-message input").val();
      console.log(text);
      var newMessageInput = $(".template .msg-input").clone();
      newMessageInput.append(text);
      $(".chat-window .msg.input").append(newMessageInput);
    }
  );





});
