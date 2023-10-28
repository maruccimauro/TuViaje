const draggableElements = document.querySelectorAll(".draggable");

draggableElements.forEach((draggable) => {
    if (draggable) {
        let isDragging = false;
        let initialX;
        let initialScrollLeft;

        draggable.addEventListener("mousedown", (e) => {
            isDragging = true;
            draggable.classList.add("active");
            initialX = e.pageX - draggable.offsetLeft;
            initialScrollLeft = draggable.scrollLeft;
        });
        draggable.addEventListener("mouseleave", () => {
            isDragging = false;
            draggable.classList.remove("active");
        });
        draggable.addEventListener("mouseup", () => {
            isDragging = false;
            draggable.classList.remove("active");
        });
        draggable.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const currentX = e.pageX - draggable.offsetLeft;
            const dragOffset = (currentX - initialX) * 0.8;
            draggable.scrollLeft = initialScrollLeft - dragOffset;
        });
    }
});

window.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("galery-hotel-item")) {
        const item = target;

        const itemView =
            target.parentNode.parentNode.querySelector(".galery-hotel-view");

        if (itemView) {
            const currentImageView = itemView.getAttribute("src");
            const nextImageView = item.getAttribute("src");

            itemView.setAttribute("src", nextImageView);
            item.setAttribute("src", currentImageView);
        }
    }
});
