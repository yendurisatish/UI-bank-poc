
$(document).ready(function () {
    $('#txtdob').datepicker({
        changeMonth: true,
        changeYear: true,
        format: "dd/mm/yyyy",

    });

    function stringToDate(_date, _format, _delimiter) {
        var formatLowerCase = _format.toLowerCase();
        var formatItems = formatLowerCase.split(_delimiter);
        var dateItems = _date.split(_delimiter);
        var monthIndex = formatItems.indexOf("mm");
        var dayIndex = formatItems.indexOf("dd");
        var yearIndex = formatItems.indexOf("yyyy");
        var month = parseInt(dateItems[monthIndex]);
        month -= 1;
        var formatedDate = new Date(dateItems[yearIndex], month, dateItems[dayIndex]);
        return formatedDate;
    }
    $("#Createform").validate({
        rules: {
            username: "required",
            firstName: "required",
            lastname: "required",
            dob: "required",
            balance: "required",
            address: "required",
            account_type: "required",
            isadmin: "required",

            phone: {
                required: true,
                minlength: 10,
                maxlength: 10
            },
            adharno: {
                required: true,
                minlength: 12,
                maxlength: 12
            },
            emailid: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            },
            cpassword: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
        },
        messages: {
            username: {
                required: "This field is required.",
            },
            firstName: "This field is required.",
            lastname: "This field is required.",
            phone: "This field is required.",
            emailid: "This field is required.",
            adharno: "This field is required.",

            password: {
                required: "This field is required.",
                minlength: "Your password must be at least 5 characters long"
            },
            cpassword: {
                required: "This field is required.",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
            account_type: {
                required: "This field is required.",
            },
            isadmin: {
                required: "This field is required.",
            },

        },
        submitHandler: function (form) {
            jQuery.support.cors = true;


            var username = $("#txtusername").val();

            var firstname = $("#txtfirstName").val();
            var lastname = $("#txtlastname").val();
          //  var dob = stringToDate($("#txtdob").val(), "dd/MM/yyyy", "/");
           // Date dob = $("#txtdob").value();
            var dob = $("#txtdob").val();
            var phoneno = $("#txtphone").val();
            var email = $("#txtemailid").val();
            var password = $("#password").val();

            var confirmpassword = $("#cpassword").val();

            var aadhar = $("#txtadharno").val();
            var acctype = $("#drpdwnaccount_type").val();
            var balance = $("#txtbalance").val();

            var address = $("#txtaddress").val();

            var isadmin = $("#drpisadmin").val();



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
            for (var ii = 0; ii < elements.length; ii++) {
                if (elements[ii].type == "text" || elements[ii].type == "password") {
                    elements[ii].value = "";
                }
            }
            return false;
        }
    });
});

$("#btnsubmit").click(function () {


});




