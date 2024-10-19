
document.addEventListener('selectstart', function(event) {
    event.preventDefault(); // Disable text selection
});
document.querySelector('button').addEventListener('click',()=>{
    let todo = document.getElementById('Todo').value.trim()
    if(!todo){
        document.querySelector('.alert').innerHTML = `Please Enter Your Task`
        return setTimeout(()=>{
            document.querySelector('.alert').innerHTML = ``
        },1000)
    }  
    let ptodo = document.createElement('p')
    let ptodoWraper = document.createElement('div')
    ptodoWraper.className = 'todo'
    ptodo.textContent = todo
    let append = document.querySelector('.lists').appendChild(ptodoWraper)
    append.appendChild(ptodo)
    document.getElementById('Todo').value =""
})