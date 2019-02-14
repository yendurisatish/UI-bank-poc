$(document).ready(function () {
    jQuery.support.cors = true;
  
    $("#btn").click(function () {
        jQuery.support.cors = true;
        $.ajax({

            url: "http://localhost:64294/api/admin/getloans",

            type: "GET",
            crossDomain: true,

            Accept: "application/json",


            success: function (resultdata) {

                $.each(resultdata, function (k, v) {

                    var id = v.LoanId;

                    var amount = v.LoanAmount;

                    var approval = v.Approval;

                    var accountno = v.AccountNumber;

                    var approvedTime = v.ApprovedTime;


                    var body = "<tr>";
                    body += "<td>" + id + "</td>";
                    body += "<td>" + accountno + "</td>";
                    body += "<td>" + amount + "</td>";
                    body += "<td>" + approval + "</td>";
                    body += "<td>" + approvedTime + "</td>";
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
    

});