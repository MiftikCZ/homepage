setInterval(() => {
    reloadTime()
}, 1000)

let e = false

function reloadTime() {
    let cas = document.getElementById("cas")
    let date = new Date()
    let text = `${date.getHours()}:${date.getMinutes()}`
    let dny = ["pondělí","úterý","středa","čtvrtek","pátek","sobota","neděle"]
    document.getElementById("day").innerText=dny[date.getDay()-1]
    cas.innerText = text
    if (date.getMinutes() == 0) {
        document.querySelector(".wave-container").style.background="linear-gradient(45deg, hsl(213, 70%, 35%), hsl(201, 70%, 35%))"
    } else {
        document.querySelector(".wave-container").style.background="linear-gradient(45deg, hsl(213, 70%, 41%), hsl(201, 70%, 41%))"
    }

}

window.onload = () => {
    reloadTime()
    document.querySelectorAll("[hue]").forEach(e=>{
        
        e.style.background = `hsl(${e.getAttribute("hue")},26%,16%)`
    })
}