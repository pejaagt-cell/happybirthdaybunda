
const readButton = document.getElementById("readButton");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("closeButton");

readButton.addEventListener("click", () => {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
});

closeButton.addEventListener("click", closeNote);

overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        closeNote();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeNote();
    }
});

function closeNote() {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
}



const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");
const musicIcon = document.getElementById("musicIcon");
const musicStatus = document.getElementById("musicStatus");
const musicLabel = document.getElementById("musicLabel");

musicButton.addEventListener("click", async () => {

    if (music.paused) {
        try {
            await music.play();

            musicIcon.textContent = "♫";
            musicStatus.textContent = "Now Playing";
            musicLabel.textContent = "Lagu sederhana buat bunda";
            musicButton.classList.add("playing");

        } catch (error) {
            musicLabel.textContent = "Couldn't play music";
        }

    } else {
        music.pause();

        musicIcon.textContent = "♪";
        musicStatus.textContent = "Music Paused";
        musicLabel.textContent = "Click to play";
        musicButton.classList.remove("playing");
    }

});
