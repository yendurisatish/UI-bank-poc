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


                    var body = "<tr>";
                    body += "<td>" + id + "</td>";
                    body += "<td>" + accountno + "</td>";
                    body += "<td>" + amount + "</td>";
                    body += "<td>" + approval + "</td>";
                    body += "<td>" + approvedTime + "</td>";
                    body += "<td>" + "<input type='button' id='" + id + "' onclick='CallMe(" + v.LoanId + ")' value='Approve'>" + "</td>";
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