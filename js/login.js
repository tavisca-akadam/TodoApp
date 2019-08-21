function login()
{
    var form = document.getElementById('login-form');
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username == "anil" && password == "anil123")
    {
        window.location = "index.html#home";
    }
    else{
        alert("Invalid username and password");
        window.location = "index.html#login";
    }
    
}