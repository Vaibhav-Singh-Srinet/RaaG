const videosGrid = document.getElementById("videosGrid");
const noVideos = document.getElementById("noVideos");

// Load submissions from localStorage
const submissions = JSON.parse(localStorage.getItem("musicSubmissions") || "[]");

if (submissions.length === 0) {
  // no videos, show empty state
} else {
  noVideos.style.display = "none";

  submissions.forEach((submission, index) => {
    const card = document.createElement("div");
    card.className = "video-card";

    const uploadedDate = new Date(submission.createdAt).toLocaleDateString("en-IN");

    card.innerHTML = `
      <div class="video-thumbnail">
        <!-- Thumbnail placeholder – replace with actual video thumbnail later -->
      </div>
      <div class="video-info">
        <div class="video-title">${submission.songTitle}</div>
        <div class="video-meta">
          <span>${submission.instrument}</span>
          <span class="evaluation-status pending">Pending Review</span>
        </div>
        <div class="video-uploaded">Uploaded ${uploadedDate}</div>
      </div>
    `;

    videosGrid.appendChild(card);
  });
}
