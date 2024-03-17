const langageButtons = document.querySelectorAll(".langage");
const desc = document.getElementById("langage-infos");
const data = {
    html: "HTML: 7 années d'expérience.",
    css: "CSS: 7 années d'expérience.",
    js: "JavaScript: 3 années d'expérience (mon langage préféré).",
    php: "PHP: 5 années d'expérience.",
    sql: "SQL: 4 années d'expérience.",
};



window.addEventListener("load", () => {
    for (let i = 0; i < langageButtons.length; i++) {
        const button = langageButtons[i];
        button.addEventListener("click", () => {
            if (desc.textContent === " ") {
                desc.textContent = data[button.textContent];
                desc.style.animation = "fade-in-left 0.5s forwards";
            } else if (desc.textContent !== data[button.textContent]) {
                desc.style.animation = "fade-out-left 0.5s forwards";
                setTimeout(() => {
                    desc.textContent = data[button.textContent];
                    desc.style.animation = "fade-in-left 0.5s forwards";
                }, 500);
            }
        });
    }
});