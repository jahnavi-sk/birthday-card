
document.addEventListener('DOMContentLoaded', async () => {
    console.log("Script loaded!");
    const minimizeBtn = document.getElementById('minimize-btn');
    const closeBtn = document.getElementById('close-btn');
    const next2 = document.getElementById("next2");
    const checkItOut = document.getElementById("next-btn");

    const next3 = document.getElementById("next3");
    const next4 = document.getElementById("next4-btn");
    const next5 = document.getElementById("next5")
    const next6 = document.getElementById("next6")
    const goBack1 = document.getElementById("go-back1");
    const goBack2 = document.getElementById("go-back2");
    const goBack3 = document.getElementById("go-back3");
    const goBack4 = document.getElementById("go-back4");
    const goBack5 = document.getElementById("go-back5");


    const giftButton = document.getElementById("pg2-gift");
    const giftLabel = document.getElementById("opening-gift-label");

    

    const imagePaths = [
        ".././assets/pg2/opengift/cutie1.png",
        ".././assets/pg2/opengift/cutie2.png",
        ".././assets/pg2/opengift/cutie3.png",
        ".././assets/pg2/opengift/cutie4.png",
        ".././assets/pg2/opengift/cutie5.png",
        ".././assets/pg2/giftbox/gift1.png",
        ".././assets/pg2/giftbox/gift2.png",
        ".././assets/pg2/giftbox/gift3.png",
        ".././assets/pg2/giftbox/gift4.png",
        ".././assets/pg3/pookie/pookie1.png",
        ".././assets/pg3/pookie/pookie2.png",
        ".././assets/pg3/pookie/pookie3.png",
        ".././assets/pg3/cake/cake1.png",
        ".././assets/pg3/cake/cake2.png",
        ".././assets/pg3/cake/cake3.png",
        ".././assets/start/bigchick/bigchick1.png",
        ".././assets/start/bigchick/bigchick2.png",
        ".././assets/start/bigchick/bigchick3.png",
        ".././assets/start/bigchick/bigchick4.png",
        ".././assets/start/bigchick/bigchick5.png",
        ".././assets/pg4/snoopy/snoopy1.png",
        ".././assets/pg4/snoopy/snoopy2.png",
        ".././assets/pg4/snoopy/snoopy3.png",
       ".././assets/pg4/snoopy/snoopy3.png",
       ".././assets/pg5/kuromi/kuromi1.png",
       ".././assets/pg5/kuromi/kuromi2.png",
       ".././assets/pg5/kuromi/kuromi3.png",
       ".././assets/pg5/kuromi/kuromi4.png",
       ".././assets/pg5/kuromi/kuromi5.png",
       ".././assets/pg5/kuromi/kuromi6.png",
       ".././assets/pg5/kuromi/kuromi1.png",
       ".././assets/pg5/kuromi/kuromi2.png",
       ".././assets/pg5/kuromi/kuromi3.png",
       ".././assets/pg5/kuromi/kuromi4.png",
       ".././assets/pg5/kuromi/kuromi5.png",
       ".././assets/pg5/kuromi/kuromi6.png",
       ".././assets/final/froggie/froggie1.png",
        ".././assets/final/froggie/froggie2.png",
        ".././assets/final/froggie/froggie3.png",
        ".././assets/final/froggie/froggie4.png",
        ".././assets/final/froggie/froggie5.png",
        ".././assets/final/pinkie/pinkie1.png",
        ".././assets/final/pinkie/pinkie2.png",
        ".././assets/final/pinkie/pinkie3.png",
        ".././assets/final/pinkie/pinkie4.png",
        ".././assets/final/pinkie/pinkie5.png",
        ".././assets/start/pengu/pengu1.png",
        ".././assets/start/pengu/pengu2.png",
        ".././assets/start/pengu/pengu3.png",
    ];
    
    const preloadedImages = [];
    









    function typeEffect(text, element, speed = 100) {
        element.style.visibility = "visible";
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
            window.electron.send("load-pg4");
        });
    }
    if(next6){
        next6.addEventListener("click", () => {
            window.electron.send("load-final");
        });
    }
    if(next5){
        next5.addEventListener("click",()=>{
            window.electron.send("load-pg5")
        })
    }
    if (goBack1) {
        goBack1.addEventListener("click", () => {
            window.electron.send("load-index");
        });
    }
    if (goBack2) {
        goBack2.addEventListener("click", () => {
            window.electron.send("load-index");
        });
    }
    if (goBack3) {
        goBack3.addEventListener("click", () => {
            window.electron.send("load-pg2");
        });
    }
    if (goBack4) {
        goBack4.addEventListener("click", () => {
            window.electron.send("load-pg3");
        });
    }
    if (goBack5) {
        goBack5.addEventListener("click", () => {
            window.electron.send("load-pg4");
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
    



    if (window.location.pathname.includes("index.html")) {
        console.log("On start.html, running typeEffect...");

        const startLabel = document.getElementById("start-label");

        if (startLabel) {
            const text = "There is a secret message for you...";
            startLabel.textContent = "";
            setTimeout(() => typeEffect(text, startLabel, 150), 500);
        } else {
            console.error("Error: start-label not found on pg3.html!");
        }


        const next2Button = document.getElementById("next2");
        setTimeout( ()=>{
            next2Button.classList.add("show");
            next2Button.classList.add("pulsing");
        },5000)


    } else {
        console.log("Not on start.html, skipping typeEffect.");
    }

    if (window.location.pathname.includes("pg3.html")) {
        console.log("On pg3.html, running typeEffect...");

        const bdaymaLabel = document.getElementById("bday-ma-label");

        if (bdaymaLabel) {
            const text = "happy birthday मम्मी !!!";
            bdaymaLabel.textContent = "";
            setTimeout(() => typeEffect(text, bdaymaLabel, 150), 500);
        } else {
            console.error("Error: bday-ma-label not found on pg3.html!");
        }

        const nextButton = document.getElementById("next4-btn");
        setTimeout( ()=>{
            nextButton.classList.add("show");
        },3000)
    } else {
        console.log("Not on pg3.html, skipping typeEffect.");
    }

    if (window.location.pathname.includes("pg5.html")) {
        console.log("On pg3.html, running typeEffect...");

        const bdaypaLabel = document.getElementById("bday-pa-label");

        if (bdaypaLabel) {
            const text = "happy birthday पापा !!!";
            bdaypaLabel.textContent = "";
            setTimeout(() => typeEffect(text, bdaypaLabel, 150), 500);
        } else {
            console.error("Error: bday-pa-label not found on pg5.html!");
        }

        const nextButton = document.getElementById("next6");
        setTimeout( ()=>{
            nextButton.classList.add("show");
        },3000)
    } else {
        console.log("Not on pg5.html, skipping typeEffect.");
    }


    if (window.location.pathname.includes("final.html")) {
        console.log("On pg3.html, running typeEffect...");

        const fromLabel1 = document.getElementById("from-label1");

        if (fromLabel1) {
            const text = "from yatharth...";
            fromLabel1.textContent = "";
            setTimeout(() => typeEffect(text, fromLabel1, 150), 500);
        } else {
            console.error("Error: fromLabel1 not found on pg5.html!");
        }

        const fromLabel2 = document.getElementById("from-label2");
        
        
        setTimeout( ()=>{
            const pinkieA = document.getElementById("pinkie-animation");
            // pinkieA.style.display= "block";
            pinkieA.classList.add("show");
            if (fromLabel2) {
                const text = "...and jahnavi";
                fromLabel2.textContent = "";
                setTimeout(() => typeEffect(text, fromLabel2, 150), 500);
            }
        
        },4000)

        setTimeout( ()=>{
            const lastMsg = document.getElementById("last-msg");
            if (lastMsg) {
                const text = "We love you both very much. Thank you for being the best parents ever!";
                lastMsg.textContent = "";
                setTimeout(() => typeEffect(text, lastMsg, 150), 500);
            }
        },6000)
    } else {
        console.log("Not on pg5.html, skipping typeEffect.");
    }

    if (window.location.pathname.includes("pg4.html")) {
        console.log("On pg4.html, running typeEffect...");

        const label1 = document.getElementById("pg4-label1");

        if (label1) {
            const text = "huh? what's this ? looks like snoopy has a message !";
            label1.textContent = "";
            setTimeout(() => typeEffect(text, label1, 150), 500);
        } else {
            console.error("Error: pg4-label1 not found on pg4.html!");
        }
        
        const label2 = document.getElementById("pg4-label2");
        setTimeout( ()=>{
            label1.style.display= "none"
            if (label2) {
                const text = "hmm... it seems like we have a gift for someone else too !";
                label2.textContent = "";
                setTimeout(() => typeEffect(text, label2, 150), 500);
            }
            
        },10000)

        const pg4Gift = document.getElementById("pg4-gift");
        setTimeout(()=>{
            pg4Gift.classList.add("show");
            pg4Gift.classList.add("pulsing");
        },20000);
        
        const giftLabel4 = document.getElementById("opening-gift-label4");
        pg4Gift.addEventListener("click",()=>{
            // pg4Gift.style.display="none";
            pg4Gift.classList.remove("show");

            document.getElementById("gift-opening-animation").style.display = "block"; 
            
            typeEffect("opening gift...", giftLabel4, 150);
            setTimeout( ()=>{
                document.getElementById('next5').classList.add("show");
            },2300);
        })
    } else {
        console.log("Not on pg4.html, skipping typeEffect.");
    }

    if (window.location.pathname.includes("pg2.html")) {
    giftButton.addEventListener("click", () => {
        document.getElementById("gift-animation").style.display = "none"; // Hide animation on click
        document.getElementById("gift-opening-animation").style.display = "block"; 
        document.getElementById("pg2-gift").style.display="none";
        typeEffect("opening gift...", giftLabel, 150);
        setTimeout( ()=>{
            document.getElementById('next-btn').classList.add("show");
        },2300);
    });

    
    
    
    giftButton.classList.add("pulsing");
}
   

});




