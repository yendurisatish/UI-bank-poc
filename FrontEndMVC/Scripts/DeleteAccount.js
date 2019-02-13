$(document).ready(function () {

    
    $("#close").click(function () {
        jQuery.support.cors = true;

        var accno = $('#accno').val();





        $.ajax({

            url: "http://localhost:64294/api/admin/closeaccount",

            type: "POST",

            ContentType: "application/json",

            dataType: "json",

            data: accno,

            Success: function (resultdata) {

                alert("account closed successfully");

            },

            error: function (e) {

                alert(JSON.stringify(e));

            }

        });

    });
});