import { questions } from "../questions";
import { createChoice } from "./Choice";
export function renderSingle(svg) {
    svg.innerHTML = "";
    const question = questions[0];
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", "100");
    text.setAttribute("y", "50");
    text.setAttribute("font-size", "20");
    text.textContent = question.question;
    svg.appendChild(text);
    const image = document.createElementNS("http://www.w3.org/2000/svg", "image");
    image.setAttribute("href", `./images/${question.image}`);
    image.setAttribute("x", "100");
    image.setAttribute("y", "80");
    image.setAttribute("width", "100");
    image.setAttribute("height", "100");
    svg.appendChild(image);
    question.choices.forEach((choice, index) => {
        const choiceElement = createChoice(choice, 100, 200 + index * 70);
        svg.appendChild(choiceElement);
    });
}
