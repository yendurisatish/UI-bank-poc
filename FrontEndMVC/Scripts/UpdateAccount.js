$(document).ready(function () {

    $('#submit').click(function () {
        var accno = $('#accountno').val();

        $.ajax({
            url: 'http://localhost:64294/api/user/getuserdetails?accountNumber=' + accno,
            contentType: 'application/json;charset=utf-8',

            method: 'get',
            Accept: "application/json",
            success: function (k, v) {
                alert(JSON.stringify(v));

                $("#username").val(k.UserName);

                $("#firstname").val(k.FirstName);
                $("#lastname").val(k.LastName);
                $("#dob").val(k.Dob);
                $("#phoneno").val(k.PhoneNumber);
                $("#email").val(k.Email);


                $("#aadhar").val(k.Aadhar);
                $("#account_type").val(k.AccountType);
                $("#balance").val(k.Balance);

                $("#address").val(k.Address);

                $("#Isadmin").val(k.IsAdmin);
            },
            error: function (err) {
                alert(JSON.stringify(err));
            }
        });
    });
    $("#update").click(function () {
        jQuery.support.cors = true;

        var accno = $("#accountno").val();
        var username = $("#username").val();

        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var dob = $("#dob").val();
        var phoneno = $("#phoneno").val();
        var email = $("#email").val();


        var aadhar = $("#aadhar").val();
        var acctype = $("#account_type").val();
        var balance = $("#balance").val();

        var address = $("#address").val();

        var isadmin = $("#Isadmin").val();





        $.ajax({

            url: "http://localhost:64294/api/admin/updateaccount",

            type: "POST",

            ContentType: "application/json",

            dataType: "json",

            data: '{"UserName":"' + username + '","AccountNumber":"' + accno + '","FirstName":"' + firstname + '","LastName":"' + lastname + '","Dob":"' + dob + '","PhoneNumber":"' + phoneno + '","Email":"' + email + '","Aadhar":"' + aadhar + '","AccountType":"' + acctype + '","Balance":"' + balance + '","Address":"' + address + '","IsAdmin":"' + isadmin + ' "}',

            success: function (resultdata) {

                alert("Updated successfully");

            },

            error: function (e) {

                alert(JSON.stringify(e));

            }

        });

    });

});