$(document).ready(function(){
    $("form").submit(function(event){
      event.preventDefault();
      $("#submits").click(function(){  
      var email = $("#email").val();
      var message = $("#comment").val();
      if ($("#email").val() && $("#comment").val()){
        alert ( "we have received your message. Thank you for reaching out to us.");
      }
      
      else {
        alert("Please enter your email!");
      }
      });
    });
  });