
const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

//this generates a random number and inputs it into the movie api key
const movieName = document.querySelector('.movie-name')
const targetBox = document.querySelector('.target')
const KEY = 'http://www.omdbapi.com/?apikey=4899398e'

//BELOW DOESNT WORK 
async function genRan(){
  let randomMovie = Math.floor(Math.random() * 9000000) + 1000000 
  let URL = KEY + `&i=tt${randomMovie}`
    let attempt = await fetch(`${URL}`, {
        Method: 'POST'
    }).then((response) => {
        if(response){
            console.log(response)
        }}).catch((error) => console.log(error))
    
    return attempt
}
//ABOVE DOESNT WORK 

//works perfectly
async function search(){
    let randomMovie = Math.floor(Math.random() * 9000000) + 1000000 
    const response = await fetch(`${KEY}&i=tt${randomMovie}`)
    const data = await response.json();
    console.log('Title: ' + data.Title)
    console.log('Actors: ' + data.Actors)
    console.log('Year: ' + data.Year)
    console.log('seriesID: ' + data.seriesID)
    movieName.innerHTML = data.Title
    targetBox.innerHTML = 'The movie picture will go here eventually lol' 
};

window.onload = search()



 