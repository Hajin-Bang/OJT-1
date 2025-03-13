export function renderText(svg, text) {
    const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textElement.setAttribute("x", "50%");
    textElement.setAttribute("y", "40");
    textElement.setAttribute("font-size", "20");
    textElement.setAttribute("text-anchor", "middle");
    textElement.textContent = text;
    svg.appendChild(textElement);
}
