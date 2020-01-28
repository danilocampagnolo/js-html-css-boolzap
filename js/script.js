$(document).ready(function() {
  $(document).on("click", ".write-message .send",
      function() {
        sendMessage();
      }
  );
  $(".write-message input").keypress(
      function() {
        if (event.which == 13) {
          sendMessage();
        }
      }
    );

  $(".search input").keyup(
      function() {
        searchContact();
      }
    );
  $(document).on("click", ".user",
        function() {
          showChat(this);
        }
    );
  $(document).on("click", ".msg i.message-options",
        function() {
          $(this).siblings(".info-delete").toggleClass("active");
          $(this).parents(".msg").siblings(".msg").find('.info-delete').removeClass('active');
        }
    );
  $(document).on("click", ".info-delete .delete",
        function() {
          $(this).parents("li").hide();
        }
    );
  $(".write-message input").focusin(
      function(){
        $(".write-message .send i").removeClass("fas fa-microphone");
        $(".write-message .send i").addClass("fab fa-telegram-plane");
      }
    );
  $(".write-message input").focusout(
      function(){
        $(".write-message .send i").removeClass("fab fa-telegram-plane");
        $(".write-message .send i").addClass("fas fa-microphone");
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
      $(".chat-window.active").append(newMessageInput);
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
    $(".chat-window.active").append(newMessageOutput);
  }

  function addZero(number) {
    if(number < 10) {
      number = '0' + number;
    }
    return number;
  }

  function searchContact() {
    var search = $(".search input").val().toLowerCase();
    var contact = $(".contacts .user");

    contact.each(
      function() {
        var contactName = $(this).find("h4").text().trim().toLowerCase();
        if (!contactName.includes(search)) {
          $(this).hide();
        } else {
          $(this).show();
        }
      }
    );
  }

  function showChat(element) {
    var contact = $(element).attr("data-contact");
    console.log(contact);
    $(".user").removeClass("active");
    $(".chat-window").removeClass("active");
    $(".user[data-contact="+ contact +"]").addClass("active");
    $(".chat-window[data-contact="+ contact +"]").addClass("active");
  }
