// console.log('%c HI', 'color: firebrick')

//challenge1
//fetch
function initiateDogs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(res => res.json())
        .then(data => imageAdder(data))
        .catch(e => console.log(e))
}

//functions bank
function imageAdder(data) {
    data = data.message;
    data.forEach((imgURL) => {
        const imgDiv = document.querySelector("#dog-image-container")
        const newImg = document.createElement('img')
        newImg.src = imgURL
        imgDiv.appendChild(newImg)
    })
}

//challenge2 
function initiateDogs2(){
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => res.json())
        .then(data => dogBreedList(data))
        .catch(e => console.log(e))
}

function dogBreedList(data) {
    data = data.message;

    for (const dogBreed in data) {
        const list = document.querySelector("#dog-breeds");
        const newBreed = document.createElement("li")
        newBreed.textContent = dogBreed;
        newBreed.addEventListener("click", (e) => colorChanger(e))
        list.appendChild(newBreed)
    }

    function colorChanger(e) {
        e.target.style.color = "red";
    }
}


//invoker function
addEventListener("DOMContentLoaded", () => {
    initiateDogs()
    initiateDogs2()

})


//challenge3 adding color on click
const list = document.querySelector("#dog-breeds");
