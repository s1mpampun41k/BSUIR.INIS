document.addEventListener("DOMContentLoaded", function () {
    const shirtDetailsContainer = document.getElementById("shirtDetailsContainer");
    const selectedShirt = JSON.parse(localStorage.getItem("selectedShirt"));

    if (!selectedShirt) {
        shirtDetailsContainer.innerHTML = "<p>No shirt selected.</p>";
        return;
    }

    let colorsHtml = "";
    for (const color in selectedShirt.colors) {
        colorsHtml += `<button class="color-button" style="background-color: ${color}" onclick="changeShirtColor('${color}')">${color}</button>`;
    }

    shirtDetailsContainer.innerHTML = `
        <h2>${selectedShirt.name}</h2>
        <img id="shirtImage" src="${Object.values(selectedShirt.colors)[0].front}" alt="${selectedShirt.name}">
        <p>Price: ${selectedShirt.price}</p>
        <p>${selectedShirt.description}</p>
        <p>Choose color:</p>
        <div>${colorsHtml}</div>
        <p>View:</p>
        <button id="frontView" class="view-button">Front</button>
        <button id="backView" class="view-button">Back</button>
    `;

    document.getElementById("frontView").addEventListener("click", function () {
        changeShirtView("front");
    });

    document.getElementById("backView").addEventListener("click", function () {
        changeShirtView("back");
    });
});

function changeShirtColor(color) {
    const selectedShirt = JSON.parse(localStorage.getItem("selectedShirt"));
    const currentView = document.getElementById("shirtImage").dataset.view || "front";
    document.getElementById("shirtImage").src = selectedShirt.colors[color][currentView];
    document.getElementById("shirtImage").dataset.color = color;
}

function changeShirtView(view) {
    const selectedShirt = JSON.parse(localStorage.getItem("selectedShirt"));
    const currentColor = document.getElementById("shirtImage").dataset.color || Object.keys(selectedShirt.colors)[0];
    document.getElementById("shirtImage").src = selectedShirt.colors[currentColor][view];
    document.getElementById("shirtImage").dataset.view = view;
}