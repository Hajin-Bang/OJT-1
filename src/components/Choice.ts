export function createChoice(text: string, x: number, y: number): SVGGElement {
  const namespace = "http://www.w3.org/2000/svg";

  const group = document.createElementNS(namespace, "g");

  const rect = document.createElementNS(namespace, "rect");
  rect.setAttribute("width", "150");
  rect.setAttribute("height", "50");
  rect.setAttribute("rx", "10");
  rect.setAttribute("ry", "10");
  rect.setAttribute("fill", "lightgray");
  rect.setAttribute("stroke", "gray");
  rect.setAttribute("x", String(x));
  rect.setAttribute("y", String(y));

  const label = document.createElementNS(namespace, "text");
  label.setAttribute("x", String(x + 75));
  label.setAttribute("y", String(y + 25));
  label.setAttribute("font-size", "20");
  label.setAttribute("text-anchor", "middle");
  label.setAttribute("dominant-baseline", "middle");
  label.textContent = text;

  group.appendChild(rect);
  group.appendChild(label);

  group.addEventListener("click", () => {
    alert(text === "원숭이" ? "정답!" : "오답");
  });

  return group;
}
