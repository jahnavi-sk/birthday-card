
// document.addEventListener('DOMContentLoaded', () => {
//     const minimizeBtn = document.getElementById('minimize-btn');
//     const closeBtn = document.getElementById('close-btn');
//     const next2 = document.querySelector("next2");
//     const next3 = document.querySelector("next3");
//     const next4 = document.querySelector("next4");
//     const goBackBtn = document.getElementById("go-back");
//     const goBackBtn3 = document.getElementById("go-back3");
//     const goBackBtn2 = document.getElementById("go-back2");
    
//     if (next2) {
//         next2.addEventListener("click", () => {
//             window.electron.send("load-page-2");
//         });
//     }

//     if (next3) {
//         next3.addEventListener("click", () => {
//             window.electron.send("load-page-3");
//         });
//     }

//     if (next4) {
//         next4.addEventListener("click", () => {
//             window.electron.send("load-page-2");
//         });
//     }

//     if (goBackBtn) {
//         goBackBtn.addEventListener("click", () => {
//             window.electron.send("load-main-page");
//         });
//     }

//     if (goBackBtn2) {
//         goBackBtn2.addEventListener("click", () => {
//             window.electron.send("load-new-page");
//         });
//     }

//     if (goBackBtn3) {
//         goBackBtn3.addEventListener("click", () => {
//             window.electron.send("load-page-2");
//         });
//     }


//     minimizeBtn.addEventListener('click', () => {
//       window.electron.send('minimize-app');
//     });
  
//     closeBtn.addEventListener('click', () => {
//       window.electron.send('close-app');
//     });
//   });
  

document.addEventListener('DOMContentLoaded', () => {
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
