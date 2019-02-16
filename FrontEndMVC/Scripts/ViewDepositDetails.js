$(document).ready(function () {
    //$("#btn").click(function () {
    $.ajax({


        url: "http://localhost:64294/api/user/depositdetails?accountnumber="+sessionStorage.getItem("accountno"),

        type: "GET",
        crossDomain: true,

        Accept: "application/json",



        success: function (resultdata) {

            $.each(resultdata, function (k, v) {

                var id = v.DepositId;

                var amount = v.DepositAmount;

                var approval = v.Approved;
                var duration = v.Duration;

                var accountno = v.AccountNumber;

                var depositTime = v.DepositTime;

                var body = "<tr>";
                body += "<td>" + id + "</td>";
                body += "<td>" + accountno + "</td>";
                body += "<td>" + amount + "</td>";
                body += "<td>" + duration + "</td>";
                body += "<td>" + approval + "</td>";
                body += "<td>" + depositTime + "</td>";
                body += "</tr>";
                $("#tb1 tbody").append(body);


                // $("#tb1").append("<tr><td>" + id + "</td><td>" + accountno + "</td><td>" + amount + "</td><td>" + duration + "</td><td>" + approval + "</td><td>" + depositTime + "</td></tr>")

            });

            $("#tb1").DataTable();

        },

        error: function (e) {

            alert(e);

        }

    });

});
