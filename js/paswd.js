const tohide = document.getElementById("tohide");
const loginpg = document.getElementById("loginpg");
let login =  document.getElementById("login");
let username = document.getElementById("usrname");
let pswd = document.getElementById("pswd");

document.addEventListener("DOMContentLoaded",function(){
    tohide.style.display='none';


});

login.addEventListener('click',function(){
    var uname = window.localStorage.getItem('uname');
    var pass = window.localStorage.getItem('pwd');
    if((username.value===uname) && (pswd.value===pass))
    {
        tohide.style.display = "inline";
        loginpg.style.display='none';
    }
    else {
        document.getElementById("unsuccessful").innerHTML = "Invalid Credentials. Try again.";
    }
});