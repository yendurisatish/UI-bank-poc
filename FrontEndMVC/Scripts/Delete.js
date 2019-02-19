$(document).ready(function () {




    $.ajax({

        url: "http://localhost:64294/api/admin/getaccountdetail",

        type: "GET",
        crossDomain: true,

        Accept: "application/json",


        success: function (resultdata) {
            $.each(resultdata, function (k, v) {

                var username = v.UserName;

                var firstname = v.FirstName;

                var lastname = v.LastName;

                var accountno = v.AccountNumber;

                var dob = v.Dob;

                var ph = v.PhoneNumber;

                var email = v.Email;

                var aadhar = v.Aadhar;

                var acctype = v.AccountType;

                var bal = v.Balance;

                var address = v.Address;

                var admin = v.IsAdmin;

                var body = "<tr>";
                body += "<td>" + v.UserName + "</td>";
                body += "<td>" + accountno + "</td>";
                body += "<td>" + firstname + "</td>";
                body += "<td>" + lastname + "</td>";
                body += "<td>" + dob + "</td>";
                body += "<td>" + ph + "</td>";
                body += "<td>" + email + "</td>";
                body += "<td>" + aadhar + "</td>";
                body += "<td>" + acctype + "</td>";
                body += "<td>" + bal + "</td>";
                body += "<td>" + address + "</td>";
                //body += "<td>" + admin + "</td>";
                body += "<td>" + "<input type='button' id='" + accountno + "' onclick='CallMe(" + v.AccountNumber + ")' value='Delete'>" + "</td>";
                body += "</tr>";
                $("#tb1 tbody").append(body);



                //$("#tb1").append("<tr><td>" + username + "</td><td>" + accountno + "</td><td>" + firstname + "</td><td>" + lastname + "</td><td>" + dob + "</td><td>" + ph + "</td><td>" + email + "</td><td>" + aadhar + "</td><td>" + acctype + "</td><td>" + bal + "</td><td>" + address + "</td><td>" + admin + "</td></tr>")

            });
            $("#tb1").DataTable();

        },

        error: function (e) {

            alert(JSON.stringify(e));

        }

    });





});




