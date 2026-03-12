const profiles = [
  { name: "Arjun Mehta", role: "Bollywood Singer", city: "Mumbai", genre: "Bollywood • Sufi • Romantic", experience: "120+ live shows, reality show finalist", tags: ["Hindi Covers", "Wedding Specialist", "Corporate Gigs"] },
  { name: "Sara Thomas", role: "Western Vocalist", city: "Bengaluru", genre: "Pop • RnB • Acoustic", experience: "8 years of stage experience", tags: ["English Pop", "Acoustic Duo", "Private Parties"] },
  { name: "Kabir Singh", role: "Lead Guitarist", city: "Delhi", genre: "Rock • Blues • Indie", experience: "Plays in 3 active bands", tags: ["Electric Guitar", "Solos", "Studio Recording"] },
  { name: "Riya Banerjee", role: "Classical Vocalist", city: "Kolkata", genre: "Hindustani Classical • Semi-Classical", experience: "Trained for 12+ years (Visharad)", tags: ["Bhajans", "Classical Concerts", "Morning Baithaks"] },
  { name: "Aditya Rao", role: "Keyboard Player", city: "Pune", genre: "Bollywood • Gospel • Fusion", experience: "Regular church and club performer", tags: ["Live Keys", "Music Production", "Backing Arrangements"] },
  { name: "Nisha Verma", role: "Wedding Band Singer", city: "Jaipur", genre: "Bollywood • Punjabi • Folk", experience: "Performed at 60+ weddings", tags: ["Sangeet Nights", "Ladies Sangeet", "Big Fat Indian Weddings"] },
  { name: "Imran Khan", role: "Dhol Player", city: "Delhi", genre: "Punjabi • Bollywood", experience: "High-energy baraat specialist", tags: ["Baraat", "Mehendi", "Haldi"] },
  { name: "Dev Patel", role: "Tabla Artist", city: "Varanasi", genre: "Classical • Fusion", experience: "Accompanies top vocalists and sitarists", tags: ["Classical Jugalbandi", "Fusion Projects", "Studio Sessions"] },
  { name: "Meera Joshi", role: "Sitar Player", city: "Ahmedabad", genre: "Instrumental • Fusion", experience: "Instrumental concerts across India", tags: ["Instrumental Evenings", "Corporate Dinners", "Art Festivals"] },
  { name: "Yash Sharma", role: "DJ & Producer", city: "Gurugram", genre: "EDM • Bollywood Mixes", experience: "Clubs and college festivals", tags: ["Club Nights", "College Fests", "Custom Remixes"] },
  { name: "Ananya Iyer", role: "Carnatic Vocalist", city: "Chennai", genre: "Carnatic • Devotional", experience: "Temple and Sabha performer", tags: ["Temple Concerts", "Bhakti Events", "Morning Concerts"] },
  { name: "Rohan Das", role: "Bass Guitarist", city: "Kolkata", genre: "Funk • Rock • Jazz", experience: "Session bassist for indie artists", tags: ["Live Bands", "Recording Bass", "Groove Specialist"] },
  { name: "Priya Nair", role: "Acoustic Duo", city: "Bengaluru", genre: "Unplugged Bollywood • English Soft Rock", experience: "Cafe and lounge regular", tags: ["Cafe Gigs", "Unplugged Sets", "Date Nights"] },
  { name: "Farhan Ali", role: "Qawwali Singer", city: "Hyderabad", genre: "Sufi • Qawwali • Naat", experience: "Traditional qawwali troupe lead", tags: ["Sufi Nights", "Spiritual Events", "Dargah Programs"] },
  { name: "Neha Kapoor", role: "Host & Singer", city: "Mumbai", genre: "Anchor • Singer • Performer", experience: "Corporate and award shows host", tags: ["Event Anchor", "Corporate Shows", "Sangeet Host"] },
  { name: "Vikram Kulkarni", role: "Percussionist", city: "Pune", genre: "Cajon • Djembe • Percussions", experience: "Acoustic and worship sessions", tags: ["Unplugged Sets", "Workshops", "Jam Nights"] },
  { name: "Simran Gill", role: "Punjabi Vocalist", city: "Ludhiana", genre: "Bhangra • Punjabi Pop", experience: "Shares stage with top Punjabi stars", tags: ["Bhangra Nights", "College Fests", "Live Bandi"] },
  { name: "Rahul Menon", role: "Pianist", city: "Kochi", genre: "Instrumental • Film Themes", experience: "Soothing instrumental specialist", tags: ["Hotel Lobbies", "Fine Dining", "Proposal Events"] },
  { name: "Ishita Roy", role: "Indie Singer‑Songwriter", city: "Mumbai", genre: "Indie Pop • Soft Rock", experience: "Own originals on streaming platforms", tags: ["Original Music", "Intimate Gigs", "Storytelling Sets"] },
  { name: "Arman Qureshi", role: "Full Band", city: "Delhi", genre: "Bollywood • Sufi • Rock", experience: "5‑piece band for big stages", tags: ["Full Band Setup", "College Fests", "Ticketed Shows"] }
];

const grid = document.getElementById("profilesGrid");

profiles.forEach((artist, index) => {
  const card = document.createElement("div");
  card.className = "profile-card";
  card.dataset.index = index.toString();

  const initials = artist.name.split(" ")
    .map(p => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  card.innerHTML = `
    <div class="profile-header">
      <div class="avatar">${initials}</div>
      <div class="profile-info">
        <h3>${artist.name}</h3>
        <div class="role">${artist.role}</div>
        <div class="city">${artist.city}</div>
      </div>
    </div>
    <div class="genre">${artist.genre}</div>
    <div class="experience">${artist.experience}</div>
    <div class="tag-row">
      ${artist.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
    </div>
    <button class="book-btn">Book for Your Event</button>
  `;

  grid.appendChild(card);
});
