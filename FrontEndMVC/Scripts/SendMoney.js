$(document).ready(function () {
    $("#submit").click(function () {
        jQuery.support.cors = true;
        var receiver = $("#receiver").val();
        var amount = $("#amount").val();
        var accno = sessionStorage.getItem("accountno");
        $.ajax({
            url: "http://localhost:64294/api/user/SendMoney",
            type: "POST",

            contentType: "application/json; charset=utf-8",

            dataType: "text",
            data: '{"senderaccount":"' + accno + '","targetaccount":"' + receiver + '","balance":"' + amount + ' "}',
            success: function (resultdata) {

                console.log(resultdata);
                alert("Transfer successfully");
                window.location.href = "http://localhost:55773/User/SendMoney"

            },

            error: function (e) {

                alert(JSON.stringify(e));

            }


        });

    });
});




//$(document).ready(function () {
//    $("#SendMoney").validate({
//        rules: {
//            txtreceiver: "required",
//            txtamount: "required",
//        },
//        messages: {
//            txtreceiver: {
//                required: "This field is required.",
//            },
//            txtamount: "This field is required.",
//        },
//        submitHandler: function (form) {
//            jQuery.support.cors = true;
//            var receiver = $("#receiver").val();
//            var amount = $("#amount").val();
//            var accno = sessionStorage.getItem("accountno");
//            $.ajax({
//                url: "http://localhost:64294/api/user/SendMoney",
//                type: "POST",

//                contentType: "application/json; charset=utf-8",

//                dataType: "text",
//                data: '{"senderaccount":"' + accno + '","targetaccount":"' + receiver + '","balance":"' + amount + ' "}',
//                success: function (resultdata) {

//                    console.log(resultdata);
//                    alert("Transfer successfully");
//                    window.location.href = "http://localhost:55773/User/SendMoney"

//                },

//                error: function (e) {

//                    alert(JSON.stringify(e));

//                }

//            });
//        }

//    });

//});

//$("#submit").click(function () {
//});