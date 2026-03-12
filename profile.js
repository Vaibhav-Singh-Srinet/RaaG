const form = document.getElementById("profileForm")
const preview = document.getElementById("preview")
const imageUpload = document.getElementById("imageUpload")
const successMessage = document.getElementById("successMessage")

/* IMAGE PREVIEW */

imageUpload.addEventListener("change", function(){

const file = this.files[0]

if(file){

preview.src = URL.createObjectURL(file)

}

})

/* SAVE PROFILE */

form.addEventListener("submit", function(e){

e.preventDefault()

const username = document.getElementById("username").value
const bio = document.getElementById("bio").value
const skills = document.getElementById("skills").value
const location = document.getElementById("location").value

const profile = {

username: username,
bio: bio,
skills: skills,
location: location

}

localStorage.setItem("artistProfile", JSON.stringify(profile))

successMessage.innerText = "✅ Profile Created Successfully!"

form.reset()

})