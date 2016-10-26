function postContactToGoogle() {
      var name = $("#name").val();
      var email = $('#email').val();
      var purpose = $('#purpose').val();
      var message = $("#message").val();

      console.log(name, email, purpose, message);

      $.ajax({
         url: "https://docs.google.com/forms/d/e/1FAIpQLSfO2HaIn2jnaTwj8ek94pfmXP5JD4bw-rGRPL_Czth3cCYNgQ/formResponse",
         data: {
            "entry.2121365026": name,
            "entry.564739827": email,
            "entry.553061721": purpose,
            "entry.1099313364": message
         },
         type: "POST",
         dataType: "xml",
         statusCode: {
               0: function () {
                  // window.location.replace("index.html");
                  Materialize.toast("Response successfully submitted", 4000);
                  $('input[type="text"],textarea').val('');
                  return false;
               },
               200: function () {
                  // window.location.replace("index.html");
                  Materialize.toast("Some Error Occured. Please try again", 4000);
                  $('input[type="text"],textarea').val('');
                  return false;
               }
         }
      });
}
