const backGround = document.querySelector('.background')
const loadPct = document.querySelector('.loading-percentage')

let pct = 0;

let pctInterval = setInterval(blurring, 43)

function blurring() {
    pct++;

    if (pct > 42) {
        clearInterval(pctInterval)
    }

    loadPct.textContent = `${pct}%`;
    loadPct.style.opacity = scale(pct, 0, 43, 0, 1)
    backGround.style.filter = `blur(${scale(pct, 0, 43, 43, 0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
