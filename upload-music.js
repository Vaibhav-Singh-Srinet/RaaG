const uploadForm = document.getElementById("uploadForm");
const videoInput = document.getElementById("videoFile");
const fileNameText = document.getElementById("fileName");
const previewContainer = document.getElementById("previewContainer");
const videoPreview = document.getElementById("videoPreview");
const successMessage = document.getElementById("successMessage");

/* VIDEO PREVIEW */

videoInput.addEventListener("change", function () {
  const file = this.files[0];

  if (!file) {
    fileNameText.textContent = "MP4 / MOV / WebM up to 200MB";
    previewContainer.style.display = "none";
    videoPreview.src = "";
    return;
  }

  fileNameText.textContent = file.name;

  const url = URL.createObjectURL(file);
  previewContainer.style.display = "block";
  videoPreview.src = url;
});

/* FORM SUBMIT – save to localStorage as a demo */

uploadForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!videoInput.files[0]) {
    alert("Please select a performance video to upload.");
    return;
  }

  const submission = {
    songTitle: document.getElementById("songTitle").value,
    instrument: document.getElementById("instrument").value,
    goals: document.getElementById("goals").value,
    fileName: videoInput.files[0].name,
    createdAt: new Date().toISOString()
  };

  const existing =
    JSON.parse(localStorage.getItem("musicSubmissions") || "[]");
  existing.push(submission);
  localStorage.setItem("musicSubmissions", JSON.stringify(existing));

  successMessage.textContent =
    "Your performance has been submitted! Teachers will review it soon.";

  // small reset + keep preview so user feels it was uploaded
  uploadForm.reset();
  fileNameText.textContent = "MP4 / MOV / WebM up to 200MB";
  // keep preview visible but pause
  videoPreview.pause();
});
