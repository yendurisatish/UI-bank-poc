$(document).ready(function () {
    sessionStorage.clear();
    $("#Loginbtn").click(function () {
        var username = document.getElementById("txtUsername").value;
        var password = document.getElementById("txtPassword").value;
    $.ajax({


        url: "http://localhost:64294/api/user/login?username="+username+"&&password="+password,

        type: "GET",
        crossDomain: true,

        Accept: "application/json",



        success: function (resultdata) {

            $.each(resultdata, function (k, v) {

                var isadmin = resultdata.IsAdmin;
                sessionStorage.setItem("username", resultdata.UserName);
                sessionStorage.setItem("accountno", resultdata.AccountNumber);
                sessionStorage.setItem("balance", resultdata.Balance);
                sessionStorage.setItem("isadmin", isadmin);
                if (isadmin)
                {
                    window.location.href = "http://localhost:55773/Admin/AdminHome";
                }
                else {
                    window.location.href = "http://localhost:55773/User/UserHome";
                }
                
               

            });

          

        },

        error: function (e) {

            alert(e);

        }

    });

});

});