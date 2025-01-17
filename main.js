let background = document.getElementById("background");
let lamp = document.getElementById("lamp");
let btn = document.getElementById("btn");
let title = document.getElementById("title")

btn.addEventListener("click", () => {
    if (lamp.getAttribute("src") == "./img/white_lamp.png") {
        btn.innerHTML = "Spegni";
        lamp.setAttribute("src", "./img/yellow_lamp.png");
        background.classList.replace("bg-black", "bg-white");
        title.classList.replace("text-white", "text-black");
        title.innerHTML = "Mi fanno male gli occhi! Spegni la lampadina!";
        btn.classList.replace("btn-light", "btn-dark")
    } else {
        btn.innerHTML = "Accendi";
        lamp.setAttribute("src", "./img/white_lamp.png");
        background.classList.replace("bg-white", "bg-black");
        title.classList.replace("text-black", "text-white");
        title.innerHTML = "Prova ad accendere la lampadina!";
        btn.classList.replace("btn-dark", "btn-light")
    }
}) 