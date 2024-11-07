const lampItem = document.querySelector("img");
console.log(lampItem);
console.log(lampItem.src);

const lampBtn = document.querySelector("button");
console.log(lampBtn);


lampItem.addEventListener("click", function () {

    if (lampItem.src.includes("white_lamp.png")) {
        lampItem.src = "./img/yellow_lamp.png";
        lampBtn.innerHTML = "Accendi"
        console.log('sono gialla');
    } else if (!(lampItem.src.includes("white_lamp.png"))) {
        lampItem.src = "./img/white_lamp.png";
        lampBtn.innerHTML = "Spengi"
        console.log('sono bianca');
    }
})

lampBtn.addEventListener("click", function () {

    if (lampItem.src.includes("white_lamp.png")) {
        lampItem.src = "./img/yellow_lamp.png";
        lampBtn.innerHTML = "Accendi"
        console.log('sono gialla');
    } else if (!(lampItem.src.includes("white_lamp.png"))) {
        lampItem.src = "./img/white_lamp.png";
        lampBtn.innerHTML = "Spengi"
        console.log('sono bianca');
    }
})