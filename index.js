let hscore = 0
let gscore = 0

let hScore = document.getElementById("home-score")
let gScore = document.getElementById("guest-score")

function hadd1() {
    let hPoint = hscore += 1
    hScore.textContent = hPoint
}

function hadd2() {
    let hPoint = hscore += 2
    hScore.textContent = hPoint
}

function hadd3() {
    let hPoint = hscore += 3
    hScore.textContent = hPoint
}

function gadd1() {
    let gPoint = gscore += 1
    gScore.textContent = gPoint
}

function gadd2() {
    let gPoint = gscore += 2
    gScore.textContent = gPoint
}

function gadd3() {
    let gPoint = gscore += 3
    gScore.textContent = gPoint
}