const form = document.getElementById("teacherForm")
const imageUpload = document.getElementById("imageUpload")
const preview = document.getElementById("preview")

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

const teacherProfile = {

username: document.getElementById("username").value,
bio: document.getElementById("bio").value,
qualification: document.getElementById("qualification").value,
instrument: document.getElementById("instrument").value,
experience: document.getElementById("experience").value

}

localStorage.setItem("teacherProfile", JSON.stringify(teacherProfile))

window.location.href = "dashboard.html"

})