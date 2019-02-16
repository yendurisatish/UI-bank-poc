$(document).ready(function () {
    if(sessionStorage.getItem("username")==null)
    {
        window.location.href = "http://localhost:55773/user/Login";
    }
});