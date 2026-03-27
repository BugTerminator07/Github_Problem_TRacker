// login function
document.getElementById('login-btn').addEventListener("click",
    function(){
        // get the username
        const numberInput=document.getElementById('input-number');
        const contactNumber=numberInput.value;

        // get the password
        const inputPin=document.getElementById('input-pin');
        const pin=inputPin.value;

        // match the username and password
        if(contactNumber=="admin" && pin=="admin123"){
         // if true:::alert>homepage
         alert('Login Successful');
         window.location.assign("home.html");
        }
        // if false:::alert>return
        else{
            alert("Log-In Failed");
            return;
        }
    }
)