document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("white").style.top = `${window.innerHeight - 100}px`;

});

window.addEventListener('scroll', () => {
    if (window.scrollY >= 0.5 * window.innerHeight) {
        document.getElementById("gorgetes").style.opacity = 0;
    }
});

window.addEventListener("change", () => {
    let szures = document.getElementById("szuro").selectedIndex;
    document.getElementById("1").style.display = szures == 0 || szures == 1 ? "block" : "none";
    document.getElementById("2").style.display = szures == 0 || szures == 3 ? "block" : "none";
    document.getElementById("3").style.display = szures == 0 || szures == 3 ? "block" : "none";
    document.getElementById("4").style.display = szures == 0 || szures == 1 ? "block" : "none";
    document.getElementById("5").style.display = szures == 0 || szures == 1 ? "block" : "none";
    document.getElementById("6").style.display = szures == 0 || szures == 3 ? "block" : "none";
    document.getElementById("7").style.display = szures == 0 || szures == 2 ? "block" : "none";
    document.getElementById("8").style.display = szures == 0 || szures == 3 ? "block" : "none";
    document.getElementById("9").style.display = szures == 0 || szures == 2 ? "block" : "none";
    document.getElementById("10").style.display = szures == 0 || szures == 3 ? "block" : "none";
});