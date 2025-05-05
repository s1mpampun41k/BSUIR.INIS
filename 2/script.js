document.addEventListener("DOMContentLoaded", function () {
    const shirtsContainer = document.getElementById("shirtsContainer");
    const shirtCardTemplate = document.getElementById("shirtCardTemplate");

    shirts.forEach(shirt => {
        const shirtCard = shirtCardTemplate.content.cloneNode(true);

        const shirtImage = shirtCard.querySelector(".shirt-image img");
        const shirtName = shirtCard.querySelector(".shirt-name");
        const shirtColors = shirtCard.querySelector(".shirt-colors");

        const firstColor = Object.values(shirt.colors)[0];
        shirtImage.src = firstColor ? firstColor.front : shirt.default.front;
        shirtImage.alt = shirt.name;
        shirtName.textContent = shirt.name;
        shirtColors.textContent = `Available in ${Object.keys(shirt.colors).length} colors`;

        shirtsContainer.appendChild(shirtCard);
    });
});