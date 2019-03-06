$(document).ready(function () {
    $("#ApplyDepositForm").validate({
        rules: {
            txtdepositamt: "required",
            txtduration: "required",
        },
        messages: {
            txtdepositamt: {
                required: "This field is required.",
            },
            txtduration: "This field is required.",
        },
        submitHandler: function (form) {
            jQuery.support.cors = true;
            var depositamt = $("#depositamt").val();
            var duration = $("#duration").val();
            var accno = sessionStorage.getItem("accountno");
            $.ajax({
                url: "http://localhost:64294/api/user/applyDeposit",
                type: "POST",

                contentType: "application/json; charset=utf-8",

                dataType: "text",
                data: '{"AccountNumber":"' + accno + '","DepositAmount":"' + depositamt + '","Duration":"' + duration + ' "}',
                success: function (resultdata) {

                    console.log(resultdata);
                    alert("Deposit Applied successfully");
                    window.location.href = "http://localhost:55773/User/ApplyDeposits"

                },

                error: function (e) {

                    alert(JSON.stringify(e));

                }

            });
        }

    });
});
$("#submit").click(function () {
});