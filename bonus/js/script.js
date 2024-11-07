const lampItem = document.querySelector("img");
console.log(lampItem);
console.log(lampItem.src);

const lampBtn = document.querySelector("button");
console.log(lampBtn);

let accesa = () => {
    lampItem.src = "./img/yellow_lamp.png";
    lampBtn.innerHTML = "Accendi"
    console.log('sono gialla');
}

let spenta = () => {
    lampItem.src = "./img/white_lamp.png";
    lampBtn.innerHTML = "Spengi"
    console.log('sono bianca');
}

lampItem.addEventListener("mouseover", accesa)
lampItem.addEventListener("mouseout", spenta)

lampBtn.addEventListener("mouseover", function () {

    if (lampItem.src.includes("white_lamp.png")) {
        accesa();
    } else if (!(lampItem.src.includes("white_lamp.png"))) {
        spenta();
    }
})

