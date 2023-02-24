class Tile{
    constructor(){
        
    }
}

const item = document.getElementById('item')
const toDoBox = document.getElementById('box-todo')

item.addEventListener('keyup',(e)=>{
    if(e.key =='Enter'){
        addFun(item.value)
        item.value = ""
    }
})

const addFun = (data)=>{
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <span id="sp">${data}</span>
    <i class="fa-solid fa-trash"></i>
    `
    toDoBox.appendChild(listItem)
    document.getElementById('sp')

    listItem.addEventListener('click',()=>{
        listItem.classList.toggle('done')
    })

    listItem.querySelector('i').addEventListener('click',()=>{
        listItem.remove()
    })
    
}


