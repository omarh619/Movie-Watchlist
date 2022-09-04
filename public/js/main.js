const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')

// On Click, #movieName (invisible text box) for a form, gets the value of the randomly generated movie title.
document.getElementById('watchlist').addEventListener('click',changeName)
function changeName(){
    document.getElementById('movieName').value = document.querySelector('#incoming-title').innerHTML
 }


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
const movieName = document.querySelector('#movie-name')
const moviePoster = document.querySelector('#poster')
const KEY = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=be0cf5cf6bac9b1433800fb42bc2e41e'
const title = document.querySelector('#incoming-title')
const desc = document.querySelector('#incoming-desc')
const poster = document.querySelector('#incoming-img')
const randomButton = document.querySelector('#random')
randomButton.addEventListener('click', () => search())
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'

async function search(){
    // Error: randomMovie can return an invalid movie number
    let randomPage = Math.floor(Math.random() * 10) + 1
    console.log(randomPage)
    let response = await fetch(`${KEY}&page=${randomPage}`)
    let data = await response.json();
    let randomTitle = Math.floor(Math.random() * (data.results.length - 1)) + 0
    
    title.innerHTML = data.results[randomTitle].title
    desc.innerHTML = data.results[randomTitle].overview
    poster.src = `${IMG_PATH + data.results[randomTitle].poster_path}`
    console.log(data)
}

window.onload = search()


 



