document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const modal = card.querySelector(".modal");
        if (modal) {
            card.addEventListener("mouseover", () => {
                modal.style.display = "block";
            });
            card.addEventListener("mouseout", () => {
                modal.style.display = "none";
            });
        }
    });
});