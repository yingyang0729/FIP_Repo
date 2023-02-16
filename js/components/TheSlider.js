const images = document.querySelector(".sliding__container");
const image = document.querySelectorAll(
    ".sliding__container .sliding__section"
);

let idimg = 0;

function carousel() {
    idimg++;

    if (idimg > image.length - 1) {
        idimg = 0; // back to the initial image
    }

    images.style.transform = `translateX(${-idimg * 100}%)`; // changes each image
    console.log("changing images");
}

setInterval(carousel, 4000);
