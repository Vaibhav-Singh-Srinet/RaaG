const bands = [
"Rhythm Rebels",
"Electric Pulse",
"Sonic Wave",
"Golden Strings",
"Rock Nation",
"Echo Tribe",
"Sound Storm",
"Melody Makers",
"Fusion Beats",
"Wild Chords",
"Blue Rhythm",
"Midnight Beats",
"Urban Groove",
"Neon Sound",
"Thunder Band",
"Cosmic Melody",
"Silent Harmony",
"Dynamic Notes",
"Silver Strings",
"Epic Rhythm"
]

const bandList = document.getElementById("bandList")

bands.forEach((band,index)=>{

const bandCard = document.createElement("div")

bandCard.classList.add("band-card")

bandCard.innerHTML = `

<img src="https://source.unsplash.com/100x100/?band,music,concert&sig=${index}">

<h3>${band}</h3>

<p>Looking for musicians to join</p>

<button class="join-btn">Request to Join</button>

`

bandList.appendChild(bandCard)

})