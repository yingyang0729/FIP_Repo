export function carousel() {
    const images = document.querySelector(".carosel__container"); //parent container
    const container = document.querySelectorAll(
        ".carosel__container .carosel__section"
    );

    let currentIndex = 0;

    function carousel() {
        currentIndex = (currentIndex + 1) % container.length;
        images.style.transform = `translateX(${-currentIndex * 100}%)`; //move each container
    }

    setInterval(carousel, 4000); //timer
}
