let point=0
function addPoint() {
    point=point + 1
    document.getElementById("score").textContent="Очки:" + point
}
function aadPoint() {
    if (point > 0) {
        point= point - 1
    }
    if (point === 0) {
    alert("Закінчились очки!")
}
    document.getElementById("score").textContent="Очки:" + point
}
