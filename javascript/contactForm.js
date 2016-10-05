function postContactToGoogle() {
      var name = $("#name").val();
      var email = $('#email_id').val();
      var message = $("#personal_message").val();

      console.log(name, email, message);

      // $.ajax({
      //    url: "https://docs.google.com/forms/d/1lrRwaw5Tssbm9tREBnhlPpQoAEVPYehRz35O_VeV_sQ/formResponse",
      //    data: { "entry_887569524": email},
      //    type: "POST",
      //    dataType: "xml",
      //    statusCode: {
      //          0: function () {
      //             // window.location.replace("index.html");
      //             window.alert("Successfully Subscribed");
      //             return false;
      //          },
      //          200: function () {
      //             // window.location.replace("index.html");
      //             window.alert("Successfully Subscribed");
      //             return false;
      //          }
      //    }
      // });
}
