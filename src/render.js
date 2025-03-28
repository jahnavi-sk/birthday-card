
document.addEventListener('DOMContentLoaded', async () => {
    const minimizeBtn = document.getElementById('minimize-btn');
    const closeBtn = document.getElementById('close-btn');
    const next2 = document.getElementById("next2");
    const next3 = document.getElementById("next3");
    const next4 = document.getElementById("next4");
    const goBack1 = document.getElementById("go-back1");
    const goBack2 = document.getElementById("go-back2");
    const goBack3 = document.getElementById("go-back3");

    if (next2) {
        next2.addEventListener("click", () => {
            window.electron.send("load-pg2");
        });
    }

    if (next3) {
        next3.addEventListener("click", () => {
            window.electron.send("load-pg3");
        });
    }

    if (next4) {
        next4.addEventListener("click", () => {
            window.electron.send("load-final");
        });
    }

    if (goBack1) {
        goBack1.addEventListener("click", () => {
            window.electron.send("load-index");
        });
    }

    if (goBack2) {
        goBack2.addEventListener("click", () => {
            window.electron.send("load-pg2");
        });
    }

    if (goBack3) {
        goBack3.addEventListener("click", () => {
            window.electron.send("load-pg3");
        });
    }

    if (minimizeBtn) {
        minimizeBtn.addEventListener('click', () => {
            window.electron.send('minimize-app');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            window.electron.send('close-app');
        });
    }
});




const imagePaths = [
    "./assets/pg2/opengift/cutie1.png",
    "./assets/pg2/opengift/cutie2.png",
    "./assets/pg2/opengift/cutie3.png",
    "./assets/pg2/opengift/cutie4.png",
    "./assets/pg2/opengift/cutie5.png"
];

// Preload images to prevent flickering
const preloadedImages = [];
imagePaths.forEach((src) => {
    const img = new Image();
    img.src = src;
    preloadedImages.push(img);
});

document.getElementById("pg2-gift").addEventListener("click", () => {
    document.getElementById("gift-animation").style.display = "none"; // Hide animation on click
});

// const frames = document.querySelectorAll(".gift-frame");
// let index = 0;

// function changeFrame() {
//     let currentFrame = frames[index];
//     let nextIndex = (index + 1) % frames.length;
//     let nextFrame = frames[nextIndex];

//     // Ensure smooth crossfade: current fades out, next fades in
//     currentFrame.style.opacity = "0";
//     nextFrame.style.opacity = "1";

//     index = nextIndex;
// }

// // Change frame every 1.4 seconds (7s total cycle)
// setInterval(changeFrame, 1000);

// document.getElementById("pg2-gift").addEventListener("click", () => {
//     document.getElementById("gift-container").style.display = "none"; // Hide animation on click
// });
