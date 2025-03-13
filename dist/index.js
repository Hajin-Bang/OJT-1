import { questions } from "./questions.js";
import { renderText } from "./components/Text.js";
import { renderImage } from "./components/Image.js";
import { createChoice } from "./components/Choice.js";
const svgElement = document.getElementById("quiz-container");
if (!svgElement || !(svgElement instanceof SVGSVGElement)) {
    throw new Error("SVG를 찾을 수 없습니다.");
}
const svg = svgElement;
const question = questions[0];
renderText(svg, question.question);
renderImage(svg, question.image);
question.choices.forEach((choice, index) => {
    const button = createChoice(choice, 100, 350 + index * 70);
    svg.appendChild(button);
});
