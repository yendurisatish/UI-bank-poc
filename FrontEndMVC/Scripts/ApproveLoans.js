$(document).ready(function () {

    $("#btn").click(function () {

        $.ajax({

            url: "http://localhost:64294/api/admin/getloans",

            type: "GET",

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
    $("#approve").click(function () {
        jQuery.support.cors = true;

        var loanid = $('#loanid').val();





        $.ajax({

            url: "http://localhost:64294/api/admin/approveloans",

            type: "POST",

            ContentType: "application/json",

            dataType: "json",

            data: loanid,

            Success: function (resultdata) {

                alert("Inserted successfully");

            },

            error: function (e) {

                alert(JSON.stringify(e));

            }

        });

    });

});