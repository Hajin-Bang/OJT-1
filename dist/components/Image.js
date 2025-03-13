export function renderImage(svg, imagePath) {
    const imageElement = document.createElementNS("http://www.w3.org/2000/svg", "image");
    imageElement.setAttribute("href", `./images/${imagePath}`);
    imageElement.setAttribute("x", "150");
    imageElement.setAttribute("y", "100");
    imageElement.setAttribute("width", "200");
    imageElement.setAttribute("height", "200");
    svg.appendChild(imageElement);
}
