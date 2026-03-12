const bands = [
  {
    name: "Rhythm Rebels",
    city: "Mumbai",
    genre: "Bollywood • Rock • Sufi",
    lookingFor: "Lead Vocalist",
    details: "High‑energy wedding and college fest band.",
    tags: ["Wedding Gigs", "College Fests", "Hindi Rock"]
  },
  {
    name: "Neon Echo",
    city: "Bengaluru",
    genre: "Indie • Pop • Synth",
    lookingFor: "Keyboard / Synth Player",
    details: "Original music and YouTube live sessions.",
    tags: ["Indie Pop", "YouTube Content", "Studio Friendly"]
  },
  {
    name: "Midnight Caravan",
    city: "Delhi",
    genre: "Sufi • Folk • Fusion",
    lookingFor: "Female Vocalist",
    details: "Sufi‑fusion act for cafes and festivals.",
    tags: ["Sufi Nights", "Fusion", "Cafes"]
  },
  {
    name: "Blue Horizon",
    city: "Pune",
    genre: "Blues • Classic Rock",
    lookingFor: "Lead Guitarist",
    details: "Tribute sets to classic blues legends.",
    tags: ["Guitar Solos", "Bar Gigs", "Classic Covers"]
  },
  {
    name: "Urban Raaga",
    city: "Hyderabad",
    genre: "Bollywood • Hip‑Hop",
    lookingFor: "Rap Vocalist",
    details: "Experimenting with Hindi‑rap fusion.",
    tags: ["Rap Verses", "Originals", "Collabs"]
  },
  {
    name: "Desert Wind",
    city: "Jaipur",
    genre: "Folk • Bollywood",
    lookingFor: "Percussionist (Dholak / Djembe)",
    details: "Destination weddings and sangeet events.",
    tags: ["Weddings", "Folk Fusion", "Travel Gigs"]
  },
  {
    name: "Crimson Tide",
    city: "Kolkata",
    genre: "Alt Rock • Grunge",
    lookingFor: "Drummer",
    details: "Working on debut EP, heavy riff style.",
    tags: ["Original EP", "Heavy Drums", "Studio Work"]
  },
  {
    name: "City Lights Collective",
    city: "Mumbai",
    genre: "Jazz • Soul • RnB",
    lookingFor: "Bass Guitarist",
    details: "Lounge and hotel residency band.",
    tags: ["Residency", "Smooth Jazz", "Standards"]
  },
  {
    name: "Fusion Souls",
    city: "Chennai",
    genre: "Carnatic • Fusion",
    lookingFor: "Violinist",
    details: "Instrumental fusion for festivals.",
    tags: ["Instrumental", "World Music", "Stage Shows"]
  },
  {
    name: "Highway Harmony",
    city: "Nagpur",
    genre: "Bollywood • Soft Rock",
    lookingFor: "Rhythm Guitarist + Backing Vocals",
    details: "Touring across central India.",
    tags: ["Roadshows", "Soft Rock", "Hindi Covers"]
  },
  {
    name: "Echo Tribe",
    city: "Bengaluru",
    genre: "Indie • Experimental",
    lookingFor: "Multi‑instrumentalist",
    details: "Jam‑heavy experimental project.",
    tags: ["Jam Sessions", "Songwriting", "Looping"]
  },
  {
    name: "Moonlit Notes",
    city: "Goa",
    genre: "Acoustic • Chill",
    lookingFor: "Cajon Player",
    details: "Beach cafes and sunset sessions.",
    tags: ["Beach Gigs", "Sunset Sets", "Tourist Crowd"]
  },
  {
    name: "Silver Strings",
    city: "Ahmedabad",
    genre: "Instrumental • Bollywood",
    lookingFor: "Flutist",
    details: "Instrumental wedding and reception band.",
    tags: ["Instrumental", "Receptions", "Corporate"]
  },
  {
    name: "Thunder Pack",
    city: "Delhi",
    genre: "Hard Rock • Metal",
    lookingFor: "Growl / Screamo Vocalist",
    details: "Aggressive metalcore setlist.",
    tags: ["Metalcore", "Mosh Pits", "Festival Stage"]
  },
  {
    name: "Coffee House Crew",
    city: "Bhopal",
    genre: "Unplugged • Indie",
    lookingFor: "Fingerstyle Guitarist",
    details: "Small venues, storytelling vibe.",
    tags: ["Unplugged", "Fingerstyle", "Story Sets"]
  },
  {
    name: "Bollywood Buzz",
    city: "Lucknow",
    genre: "Bollywood • Dance",
    lookingFor: "Male Vocalist",
    details: "Mehendi, haldi and reception specialists.",
    tags: ["Dance Hits", "Baraat Friendly", "Family Events"]
  },
  {
    name: "Ocean Drive",
    city: "Kochi",
    genre: "Pop • Soft Rock",
    lookingFor: "Keyboardist who can sing harmonies",
    details: "Focusing on vocal‑heavy arrangements.",
    tags: ["Harmony Vocals", "Romantic Sets", "Acoustic Pop"]
  },
  {
    name: "Pulse Line",
    city: "Indore",
    genre: "EDM • Live Band",
    lookingFor: "DJ / Producer",
    details: "Hybrid DJ + live band concept.",
    tags: ["EDM", "College Fests", "Big Stage"]
  },
  {
    name: "Vintage Vibes",
    city: "Chandigarh",
    genre: "Retro Bollywood • Hindi Classics",
    lookingFor: "Female Singer",
    details: "Old school melodies for all ages.",
    tags: ["Retro Nights", "Family Shows", "Sangeet"]
  },
  {
    name: "Night Sky Project",
    city: "Delhi",
    genre: "Ambient • Post‑Rock",
    lookingFor: "Atmospheric Guitarist",
    details: "Long instrumentals and cinematic sounds.",
    tags: ["Instrumental", "Post‑Rock", "Studio Jam"]
  }
];

const grid = document.getElementById("bandGrid");

bands.forEach((band, index) => {
  const card = document.createElement("div");
  card.className = "band-card";
  card.dataset.index = index.toString();

  card.innerHTML = `
    <h3 class="band-name">${band.name}</h3>
    <div class="city">${band.city}</div>
    <div class="genre">${band.genre}</div>
    <div class="looking-for">
      Looking for: <span>${band.lookingFor}</span>
    </div>
    <div class="details">${band.details}</div>
    <div class="tag-row">
      ${band.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
    </div>
    <button class="join-btn">Request to Join</button>
  `;

  grid.appendChild(card);
});
