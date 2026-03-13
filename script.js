// Smooth scrolling for navigation links

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

if(this.hash !== ""){

e.preventDefault()

const section = document.querySelector(this.hash)

section.scrollIntoView({
behavior:"smooth"
})

}

})

})



// Highlight active section in navbar

window.addEventListener("scroll", ()=>{

let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("nav ul li a")

sections.forEach(section => {

let top = window.scrollY
let offset = section.offsetTop - 100
let height = section.offsetHeight
let id = section.getAttribute("id")

if(top >= offset && top < offset + height){

navLinks.forEach(link => {
link.classList.remove("active")
})

let activeLink = document.querySelector('nav a[href="#'+id+'"]')

if(activeLink){
activeLink.classList.add("active")
}

}

})

})



// Button click animation





// Scroll reveal animation

const cards = document.querySelectorAll(".card, .artist-card, .event-card")

const reveal = () => {

const trigger = window.innerHeight * 0.85

cards.forEach(card => {

const top = card.getBoundingClientRect().top

if(top < trigger){
card.style.opacity = "1"
card.style.transform = "translateY(0)"
}

})

}

window.addEventListener("scroll", reveal)



// Initial style for animation

cards.forEach(card=>{
card.style.opacity = "0"
card.style.transform = "translateY(40px)"
card.style.transition = "0.6s"
})