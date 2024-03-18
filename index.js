// document.getElementById("counter").innerText = 5

// let firstBatch = 5

// let secondBatch = 7

// let counter = firstBatch + secondBatch

// console.log(counter)

// let myAge = 30

// let humanDogRatio = myAge * 7

// console.log(humanDogRatio)
let saveEl = document.getElementById("save-el")

let counterEl = document.getElementById("counter")
console.log(counterEl)

let counter = 0

function increment() {
    counter = counter + 1
    counterEl.textContent = counter
    console.log(counter)
}

function save() {
    let save = counter + " - "
    saveEl.textContent += save
    counterEl.textContent = 0
    counter = 0
}