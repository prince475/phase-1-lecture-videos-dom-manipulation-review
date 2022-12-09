//Event Listeners
document.querySelector('#animal-form').addEventListener('submit', handleSubmit)

//Event handlers
function handleSubmit(e){
    e.preventDefault()
    let animalObj = {
        name:e.target.name.value,
        imageUrl:e.target.image_url.value,
        description:e.target.description.value,
        donations: 0
    }
    renderOneAnimal(animalObj)
    adoptAnimal(animalObj)
}


//DOM Render Functions
function renderOneAnimal(animal){

    //Build Animal

    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
        <img src="${animal.imageUrl}">
        <div class="content">
            <h4>${animal.name}</h4>

            <p>
               $<span class="donation-count">${animal.donations}</span> Donated
            </p>

            <p>${animal.description}</p>
        </div>
        <div class="buttons">
        <button> Donate $10 </button>
        <button> Set Fee </button>

        </div>
    `
    //add animal card to DOM
    document.querySelector('#animal-list').appendChild(card)
}




//Fetch Reaquests
//Get Fetch for all animal resources
function getAllAnimals(){
    fetch('http://localhost:3000/animalData')
    .then(res => res.json())
    .then(animalData => animalData.forEach(animal => renderOneAnimal(animal)))
}

  



function adoptAnimal(animalObj){
    fetch('http://localhost:3000/animalData',{
        
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(animalObj)

    })
    .then(res => res.json())
    .then(animal => console.log(animalObj))

}


//Initila Render
//Get data and render our animals to the Dom
function initialize(){
    getAllAnimals()
 //animalData.forEach(animal => renderOneAnimal(animal))   
}
initialize()







