
document.addEventListener('DOMContentLoaded', async () => {
    const minimizeBtn = document.getElementById('minimize-btn');
    const closeBtn = document.getElementById('close-btn');
    const next2 = document.getElementById("next2");
    const checkItOut = document.getElementById("next-btn");

    const next3 = document.getElementById("next3");
    const next4 = document.getElementById("next4");
    const goBack1 = document.getElementById("go-back1");
    const goBack2 = document.getElementById("go-back2");
    const goBack3 = document.getElementById("go-back3");
    const giftButton = document.getElementById("pg2-gift");
    const giftLabel = document.getElementById("opening-gift-label");


    const imagePaths = [
        "./assets/pg2/opengift/cutie1.png",
        "./assets/pg2/opengift/cutie2.png",
        "./assets/pg2/opengift/cutie3.png",
        "./assets/pg2/opengift/cutie4.png",
        "./assets/pg2/opengift/cutie5.png"
    ];
    const imagePaths2 = [
        "./assets/pg2/giftbox/gift1.png",
        "./assets/pg2/giftbox/gift2.png",
        "./assets/pg2/giftbox/gift3.png",
        "./assets/pg2/giftbox/gift4.png",
    ];
    const preloadedImages = [];
    const preloadedImages2 = [];


    if (checkItOut) {
        checkItOut.addEventListener("click", () => {
            window.electron.send("load-pg3");
        });
    }
    
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


    
    
    imagePaths.forEach((src) => {
        const img = new Image();
        img.src = src;
        preloadedImages.push(img);
    });
    imagePaths2.forEach((src) => {
        const img = new Image();
        img.src = src;
        preloadedImages2.push(img);
    });
    
    giftButton.addEventListener("click", () => {
        document.getElementById("gift-animation").style.display = "none"; // Hide animation on click
        document.getElementById("gift-opening-animation").style.display = "block"; 
        document.getElementById("pg2-gift").style.display="none";
    });
    giftButton.classList.add("pulsing");
    giftButton.addEventListener("click", () => {
        giftButton.classList.remove("pulsing");
    });
    
    
    
    
    function typeEffect(text, element, speed = 100) {
        element.style.display = "block"; 
        element.textContent = ""; 
        let index = 0;
        function type() {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
                setTimeout(type, speed); 
            }
        }
    
        type();
    }
    
    giftButton.addEventListener("click", () => {
        typeEffect("opening gift...", giftLabel, 150);
        setTimeout( ()=>{
            document.getElementById('next-btn').classList.add("show");
        },2300);
        
    });

    
      
    

});




