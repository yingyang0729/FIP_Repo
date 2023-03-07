const ajaxImg = document.querySelector(".mission__img");
const ajaxContent = document.querySelector(".mission__content");

function getData() {
    fetch("./data.json")
        .then((res) => res.json())
        .then((data) => {
            updateMissionInfo(data);
        })
        .catch((error) => console.log(error));
}

function updateMissionInfo(data) {
    const buttons = Array.from(
        document.querySelectorAll(".intro__buttons .mission-btn")
    );
    let prevTarget;
    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            if (prevTarget !== undefined) {
                prevTarget.classList.remove("selected");
            }
            const target = event.target;
            target.classList.add("selected");
            prevTarget = target;
            const key = target.dataset.name;
            displayMissionData(data[key]);
        });
    });
}

function displayMissionData(data) {
    ajaxContent.innerHTML = `
        <div>
            <p class="info__content">${data.info3}</p>
        </div>
    `;
    ajaxImg.innerHTML = `
        <div class="info__img">
            <img src="images/${data.img}" alt="${data.alt}" />
        </div>
    `;
}

getData();
