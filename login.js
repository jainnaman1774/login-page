function validate() {
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if (username=="Naman jain"&& password=="12345") 
    {
        alert("Login Successfully");
        return false;
    }
    else 
    {
        alert("Login Failed");
    }
}