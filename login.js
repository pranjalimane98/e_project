function login()
{
    var uname=document.getElementById("username").value;
    var pass=document.getElementById("password").value;
    if(uname=="tony" && pass=="loveyou3000")
    {
        location.assign("file:///C:/Users/Lean/Desktop/E-learning/home.html")
    }
    else{
        windows.alert("login failed");
    }
}