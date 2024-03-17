const mouseGradient = document.getElementById("mouse-gradient");



document.addEventListener("mousemove", (e) => {
    mouseGradient.style.transition = "0.5s opacity";
    mouseGradient.style.opacity = 1;
    mouseGradient.style.top = `${e.pageY}px`;
    mouseGradient.style.left = `${e.pageX}px`;
});
document.addEventListener("scroll", () => {
    mouseGradient.style.transition = "0.1s opacity";
    mouseGradient.style.opacity = 0;
});
document.addEventListener("click", (e) => {
    const effect = document.createElement("div");
    effect.classList.add("mouse-click");
    effect.style.top = `${e.pageY}px`;
    effect.style.left = `${e.pageX}px`;
    document.body.appendChild(effect);
    setTimeout(() => effect.remove(), 300);
});