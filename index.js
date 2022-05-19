const carWash = document.querySelector("#car")
const lawnMow = document.querySelector("#lawn")
const pullWeeds = document.querySelector("#weeds")

let tasks = document.querySelector("#task-list")
let totalList = document.querySelector("#total-list")
let grandTotalP = document.querySelector(".total")

let isCarWashAdded = false
let isMowLawnAdded = false
let isPullWeedsAdded = false

let services = []
let grandTotal = 0
let total = []

const render = (arr1, arr2) => {
    let serviceItems = ""
    let totalAmts = ""
    //render service array
    for (let i = 0; i < arr1.length; i++){
        serviceItems += `<p>${arr1[i]}</p>`
}
    //render total array
    for (let j = 0; j < arr2.length; j++){

        totalAmts += `<p>$${arr2[j]}</p>`
    }

    grandTotalP.textContent = `$ ${grandTotal}`

    tasks.innerHTML = serviceItems
    totalList.innerHTML = totalAmts
}

const addCarWash = () => {
    if (!isCarWashAdded){
    services.push("Car Wash")
    total.push(10)
    grandTotal += 10
    isCarWashAdded = true
    render(services, total)
    }

}

const addLawnMow = () => {
    if (!isMowLawnAdded){
    services.push("Mow Lawn")
    total.push(20)
    grandTotal += 20
    isMowLawnAdded = true
    render(services, total)
    }
}

const addPullWeeds = () => {
    if (!isPullWeedsAdded){
    services.push("Pull Weeds")
    total.push(30)
    grandTotal += 30
    isPullWeedsAdded = true
    render(services, total)
    }
}


carWash.addEventListener("click", addCarWash)
lawnMow.addEventListener("click", addLawnMow)
pullWeeds.addEventListener("click", addPullWeeds)
