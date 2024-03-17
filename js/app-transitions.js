const nav = document.getElementsByTagName("nav")[0];
const nav_a = nav.getElementsByTagName("a");
const transition = document.getElementById("transition");



window.addEventListener("load", () => {
    const delay = parseFloat(window.getComputedStyle(document.body).getPropertyValue("--transition-delay")) * 1000;
    for (let i = 0; i < nav_a.length; i++) {
        const a = nav_a[i];
        const href = a.href;
        if (href.slice(href.lastIndexOf("."), -1).indexOf("#") !== -1) continue;
        a.removeAttribute("href");
        a.addEventListener("click", () => {
            transition.classList.remove("hide");
            transition.classList.add("show");
            setTimeout(() => window.location.href = href, delay);
        });
    }
});