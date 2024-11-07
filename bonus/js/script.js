const lampItem = document.querySelector("img");
console.log(lampItem);
console.log(lampItem.src);

const lampBtn = document.querySelector("button");
console.log(lampBtn);


lampItem.addEventListener("mouseover", function () {
    lampItem.src = "./img/yellow_lamp.png";
    lampBtn.innerHTML = "Accendi"
    console.log('sono gialla');
})
lampItem.addEventListener("mouseout", function () {
    lampItem.src = "./img/white_lamp.png";
    lampBtn.innerHTML = "Spengi"
    console.log('sono bianca');
})

lampBtn.addEventListener("mouseover", function () {

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