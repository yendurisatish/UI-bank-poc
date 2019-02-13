$(document).ready(function () {

    $("#submit").click(function () {
        jQuery.support.cors = true;

        var username = $("#username").val();

        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var dob = $("#dob").val();
        var phoneno = $("#phoneno").val();
        var email = $("#email").val();
        var password = $("#password").val();

        var confirmpassword = $("#cpassword").val();

        var aadhar = $("#aadhar").val();
        var acctype = $("#account_type").val();
        var balance = $("#balance").val();

        var address = $("#address").val();

        var isadmin = $("#Isadmin").val();





        $.ajax({

            url: "http://localhost:64294/api/admin/createaccount",

            type: "POST",

            contentType: "application/json; charset=utf-8",

            dataType: "text",

            data: '{"UserName":"' + username + '","FirstName":"' + firstname + '","LastName":"' + lastname + '","Dob":"' + dob + '","PhoneNumber":"' + phoneno + '","Email":"' + email + '","Aadhar":"' + aadhar + '","AccountType":"' + acctype + '","Balance":"' + balance + '","Address":"' + address + '","Password":"' + password + '","IsAdmin":"' + isadmin + ' "}',

            success: function (resultdata) {

                console.log(resultdata);
                alert("Inserted successfully");

            },

            error: function (e) {

                alert(JSON.stringify(e));

            }

        });
        var elements = document.getElementsByTagName("input");
for (var ii=0; ii < elements.length; ii++) {
    if (elements[ii].type == "text" || elements[ii].type == "password") {
    elements[ii].value = "";
  }
}

    });

});