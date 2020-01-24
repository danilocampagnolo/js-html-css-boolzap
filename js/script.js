$(document).ready(function() {

  $(document).on("click", "i.fa-telegram-plane",
      function() {
      var text = $(".write-message input").val();
      console.log(text);
      var newMessageInput = $(".template li").clone();
      newMessageInput.append(text);
      newMessageInput.addClass("msg input");
      $(".chat-window").append(newMessageInput);
    }
  );





});
