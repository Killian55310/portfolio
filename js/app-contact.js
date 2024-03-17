const stratingDatInput = document.getElementById("starting-date");



stratingDatInput.addEventListener("keydown", (e) => {
    e.target.value = e.target.value.slice(0, 10);
    const instantValue = e.target.value;
    setTimeout(() => {
        stratingDatInput.focus();
        var oldValue = e.target.value.slice(0, -1);
        if (oldValue !== instantValue) {
            if (e.key === "Backspace" && instantValue.split("").at(-1) === "/") e.target.value = e.target.value.slice(0, -1);
            return;
        }
        if (e.target.value.length > 10) {
            e.target.value = e.target.value.slice(0, -1);
            return;
        }
        if (["0","1","2","3","4","5","6","7","8","9"].indexOf(e.key) === -1) {
            e.target.value = oldValue;
            return;
        }
        if (e.target.value.length === 2 || e.target.value.length === 5) e.target.value += "/";
    }, 0);
});