$(document).ready(function () {

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

                   
                   $("#tb1").append("<tr><td>" + id + "</td><td>" + accountno + "</td><td>" + amount + "</td><td>" + approval + "</td><td>" + approvedTime + "</td></tr>")

                });

            },

            error: function (e) {

                alert(JSON.stringify(e));

            }

        });

    });
    $('#tb1').DataTable();

});