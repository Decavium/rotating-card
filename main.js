const flipper = document.querySelector(".flipper");
const flipperCard = document.querySelectorAll(".flipper-card");

document.addEventListener("mousemove", (e) => {
    rotateElement(e, flipper);
})

// on-click function called for each card face
flipperCard.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("flipper-is-flipped")
    })
});

function rotateElement(event, element) {
    // get mouse position
    const x = event.clientX;
    const y = event.clientY;

    // find the middle
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    // get offset from middle
    const offsetX = ((x - middleX) / middleX) * 45;
    const offsetY = ((y - middleY) / middleY) * 45;

    element.style.setProperty("--rotateX", -1 * offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");
}