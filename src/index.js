console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
const dropdown = document.querySelector("#breed-dropdown")
fetchImages()
fetchBreeds()


function fetchImages() {
    fetch(imgUrl)
        .then(resp => resp.json())
            .then(addImgToDom)
}

function addImgToDom(images) {
    const imgArray = images["message"]
    imgArray.forEach(image =>{
        const dogImageContainer = document.querySelector("#dog-image-container")
        let img = document.createElement('img');
        img.src = image
        dogImageContainer.appendChild(img)
    })
}

function fetchBreeds () {
    fetch(breedUrl)     
        .then(resp => resp.json())
            .then(addBreedsToDom)
}


function addBreedsToDom(breeds){
    const data = breeds["message"]
    const ulDogBreeds = document.querySelector("#dog-breeds")
    for (const breed in data) {
        let li = document.createElement('li')
        li.innerText = breed
        ulDogBreeds.appendChild(li)
        li.addEventListener('click', handleClick)
    }
}


function handleClick(event) {
    event.target.style.color = "violet"
}

