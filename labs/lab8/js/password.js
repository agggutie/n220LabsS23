let dv = document.getElementById("dv")

function credentialCheck(){
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    if( (username == "Username") && (password == "Password") ) {
        dv.innerHTML = "Success"
} else{
    dv.innerHTML = "Invalid Credentials"
}
}