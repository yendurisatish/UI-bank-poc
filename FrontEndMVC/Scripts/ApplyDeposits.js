$(document).ready(function () {
    $("#submit").click(function () {
        jQuery.support.cors = true;
        var depositamt = $("#depositamt").val();
        var duration = $("#duration").val();
        var accno = sessionStorage.getItem("accountno");
        $.ajax({
            url: "http://localhost:64294/api/user/applyDeposit",
        type: "POST",

        contentType : "application/json; charset=utf-8",

        dataType: "text",
        data: '{"AccountNumber":"' + accno + '","DepositAmount":"' + depositamt + '","Duration":"' + duration + ' "}',
        success: function (resultdata) {

            console.log(resultdata);
            alert("Deposit Applied successfully");

        },

        error: function (e) {

            alert(JSON.stringify(e));

        }

        
        });

});
});