const profiles = [
  { name: "Arjun Sharma", role: "Bollywood Singer", location: "Mumbai", skills: "Vocalist, Live Performer", tags: ["Hindi", "Wedding", "Corporate"] },
  { name: "Priya Singh", role: "Classical Guitarist", location: "Delhi", skills: "Fingerstyle, Flamenco", tags: ["Instrumental", "Classical", "Fusion"] },
  { name: "Rohan Mehta", role: "Piano Teacher", location: "Bengaluru", skills: "Classical, Jazz, Theory", tags: ["Piano", "Beginner", "Advanced"] },
  { name: "Neha Kapoor", role: "Tabla Artist", location: "Kolkata", skills: "Hindustani, Fusion", tags: ["Tabla", "Classical", "Jugalbandi"] },
  { name: "Vikram Rao", role: "Vocal Coach", location: "Pune", skills: "Western, Indian Classical", tags: ["Voice Training", "Performance", "Pitch"] },
  { name: "Sara Khan", role: "Violinist", location: "Hyderabad", skills: "Western, Carnatic", tags: ["Violin", "Orchestra", "Solo"] },
  { name: "Aditya Bose", role: "Drum Teacher", location: "Chennai", skills: "Western Drums, Percussion", tags: ["Drums", "Rock", "Fusion"] },
  { name: "Meera Patel", role: "Sitar Player", location: "Ahmedabad", skills: "Hindustani Classical", tags: ["Sitar", "Raga", "Concert"] },
  { name: "Kabir Ali", role: "Flute Artist", location: "Jaipur", skills: "Bansuri, Classical", tags: ["Flute", "Bansuri", "Folk"] },
  { name: "Ananya Iyer", role: "Carnatic Vocalist", location: "Chennai", skills: "Carnatic Music, Devotional", tags: ["Carnatic", "Kritis", "Concerts"] },
  { name: "Rahul Gupta", role: "Electric Guitarist", location: "Gurugram", skills: "Rock, Metal, Blues", tags: ["Electric Guitar", "Rock", "Live"] },
  { name: "Ishita Roy", role: "Keyboard Teacher", location: "Kolkata", skills: "Bollywood, Pop, Keys", tags: ["Keyboard", "Synthesizer", "Arrangements"] },
  { name: "Devendra Singh", role: "Saxophone Player", location: "Lucknow", skills: "Jazz, Bollywood", tags: ["Saxophone", "Jazz", "Fusion"] },
  { name: "Nisha Verma", role: "Harmonium Teacher", location: "Varanasi", skills: "Classical, Bhajan", tags: ["Harmonium", "Bhajan", "Kirtan"] },
  { name: "Yashwant Joshi", role: "Bass Guitarist", location: "Indore", skills: "Funk, Rock, Pop", tags: ["Bass Guitar", "Groove", "Session"] },
  { name: "Riya Malhotra", role: "Western Vocalist", location: "Mumbai", skills: "Pop, RnB, Soul", tags: ["Western Vocals", "Studio", "Live"] },
  { name: "Siddharth Nair", role: "Cello Teacher", location: "Kochi", skills: "Classical, Chamber Music", tags: ["Cello", "Classical", "Orchestra"] },
  { name: "Pooja Desai", role: "Ukulele Instructor", location: "Pune", skills: "Pop, Fingerstyle", tags: ["Ukulele", "Beginner", "Fun"] },
  { name: "Imran Qureshi", role: "Qawwali Singer", location: "Delhi", skills: "Sufi, Qawwali", tags: ["Qawwali", "Sufi", "Spiritual"] },
  { name: "Tara Sharma", role: "Music Producer", location: "Mumbai", skills: "Recording, Mixing", tags: ["Production", "Studio", "Mastering"] }
];

const grid = document.getElementById("profilesGrid");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const totalCount = document.getElementById("totalCount");

// Load all profiles initially
function loadProfiles(filteredProfiles = profiles) {
  grid.innerHTML = "";
  totalCount.textContent = filteredProfiles.length;

  filteredProfiles.forEach(profile => {
    const card = document.createElement("div");
    card.className = "profile-card";

    const initials = profile.name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();

    card.innerHTML = `
      <div class="profile-header">
        <div class="avatar">${initials}</div>
        <div>
          <div class="profile-name">${profile.name}</div>
          <div class="profile-role">${profile.role}</div>
        </div>
      </div>
      <div class="profile-location">${profile.location}</div>
      <div class="skills">${profile.skills}</div>
      <div class="profile-tags">
        ${profile.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
      </div>
    `;

    grid.appendChild(card);
  });
}

// Search function
function searchProfiles() {
  const query = searchInput.value.toLowerCase().trim();
  
  if (query === "") {
    loadProfiles(profiles);
  } else {
    const filtered = profiles.filter(profile =>
      profile.name.toLowerCase().includes(query) ||
      profile.role.toLowerCase().includes(query) ||
      profile.location.toLowerCase().includes(query) ||
      profile.skills.toLowerCase().includes(query) ||
      profile.tags.some(tag => tag.toLowerCase().includes(query))
    );
    loadProfiles(filtered);
  }
}

// Event listeners
searchBtn.addEventListener("click", searchProfiles);

searchInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    searchProfiles();
  }
});

// Load initial profiles
loadProfiles();
