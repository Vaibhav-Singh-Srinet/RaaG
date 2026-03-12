const form = document.getElementById("loginForm")

form.addEventListener("submit", function(e){

e.preventDefault()

const email = document.getElementById("email").value
const password = document.getElementById("password").value

if(email === "" || password === ""){

alert("Please fill all fields")

return

}

alert("Login Successful 🎵 Welcome to MusicVilla!")

window.location.href="index.html"

})