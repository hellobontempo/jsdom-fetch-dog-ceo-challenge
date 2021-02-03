console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

fetchImages()
function fetchImages() {
    fetch(imgUrl)
        .then(resp => resp.json())
            .then(data => {
                addImgToDom(data)
            })
}

function addImgToDom(data) {
    const imgArray = data["message"]
    imgArray.forEach(image =>{
        const dogImageContainer = document.querySelector("#dog-image-container")
        let img = document.createElement('img');
        img.src = image
        dogImageContainer.appendChild(img)
    })
}

//   function renderBooks(books) {
//     const main = document.querySelector('main')
//     books.forEach(book => {
//       const h2 = document.createElement('h2')
//       h2.innerHTML = book.name
//       main.appendChild(h2)
//     })
//   }
  
