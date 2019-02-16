$(document).ready(function () {
    jQuery.support.cors = true;


    jQuery.support.cors = true;
    $.ajax({

        url: "http://localhost:64294/api/user/transhistory?accountnumber=" + sessionStorage.getItem("accountno"),

        type: "GET",
        crossDomain: true,

        Accept: "application/json",


        success: function (resultdata) {

            $.each(resultdata, function (k, v) {

                var id = v.id;

                var amount = v.balance;

                var sender = v.senderaccount;

                var receiver = v.targetaccount;

                var transTime = v.time;


                var body = "<tr>";
                body += "<td>" + id + "</td>";
                body += "<td>" + sender + "</td>";
                body += "<td>" + amount + "</td>";
                body += "<td>" + receiver + "</td>";
                body += "<td>" + transTime + "</td>";
                body += "</tr>";
                $("#tb1 tbody").append(body);
                //$("#tb1").append("<tr><td>" + id + "</td><td>" + accountno + "</td><td>" + amount + "</td><td>" + approval + "</td><td>" + approvedTime + "</td></tr>")

            });
            $("#tb1").DataTable();



        },

        error: function (e) {

            alert(JSON.stringify(e));

        }

    });




});