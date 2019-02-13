
$(document).ready(function () {

    $("#btn").click(function () {

        $.ajax({

            url: "http://localhost:64294/api/admin/getdeposits",

            type: "GET",
            dataType: "json",

            Accept: "application/json",


            success: function (resultdata) {

                $.each(resultdata, function (k, v) {

                    var id = v.DepositId;

                    var amount = v.DepositAmount;

                    var approval = v.Approved;
                    var duration = v.Duration;

                    var accountno = v.AccountNumber;

                    var depositTime = v.DepositTime;




                    $("#tb1").append("<tr><td>" + id + "</td><td>" + accountno + "</td><td>" + amount + "</td><td>" + duration + "</td><td>" + approval + "</td><td>" + depositTime + "</td></tr>")

                });



            },

            error: function (e) {

                alert(e);

            }

        });

    });
    $("#approve").click(function () {
        jQuery.support.cors = true;

        var depositid = $('#depositid').val();





        $.ajax({

            url: "http://localhost:64294/api/admin/approvedeposits",

            type: "POST",

            ContentType: "application/json",

            dataType: "json",

            data: depositid,

            Success: function (resultdata) {

                alert("Inserted successfully");

            },

            error: function (e) {

                alert(JSON.stringify(e));

            }

        });

    });
});