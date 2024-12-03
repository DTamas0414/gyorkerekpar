//A kezdőlapon a fehér átmenet és a lap alsó részének elhelyezése
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("white").style.top = `${window.innerHeight - 100}px`;

});

//A kezdőlapon a nyíl eltűntetése az ablak feléhez körgetés után
window.addEventListener('scroll', () => {
    if (window.scrollY >= 0.5 * window.innerHeight) {
        document.getElementById("gorgetes").style.opacity = 0;
    }
});

//Az útvonalak lapon a kalória égetés kalkulátor
window.addEventListener("change", () => {
    let hossz = document.getElementById("hossz").value;
    let suly = document.getElementById("suly").value;
    const rata = 0.35
    if (hossz >= 0 && suly >= 0) {
        let kaloria = hossz * suly * rata;
        kaloria = kaloria.toFixed(1)
        document.getElementById("eredmeny").innerHTML = `A túrán megközelítőleg <b>${kaloria}</b> kalóriát fogsz égetni.`;
    } else{
        document.getElementById("eredmeny").innerHTML = `A túrán megközelítőleg <b>0.0</b> kalóriát fogsz égetni.`;
    }
});

//Az útvonalak lapon a szűrő
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