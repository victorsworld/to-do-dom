             /*Query Selectors */
let submit = document.querySelector('#to-do-item')
let toDoForm = document.querySelector('form')
let toDoList = document.querySelector('ul')

let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');

let parent = document.querySelector('ul')

let click = document.querySelectorAll('ul li')




button1.addEventListener('click', function(event){
    event.preventDefault();
    let item = document.createElement('li')
    item.innerText = submit.value 
    toDoList.appendChild(item)

    submit.value = ""
    console.log(parent)
})


parent.addEventListener('click', function(event){
    let element = event.target
    if(element.style.textDecoration !== 'line-through'){
        element.style.textDecoration = 'line-through'
    }else{element.style.textDecoration = 'none'}
    

})


button2.addEventListener('click', function(event){
    event.preventDefault()
    click = document.querySelectorAll('ul li')
    for(let i = 0; i < click.length; i++){
        console.log(click[i])
        if(click[i].style.textDecoration === 'line-through'){
            click[i].remove()
        }
    }
    })



button3.addEventListener('click', function(event){
    preventDefault();
})