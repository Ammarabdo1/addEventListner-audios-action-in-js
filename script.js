//?  while loops && addEventListener && <audio> Tags


const playDiv = document.getElementById('playDiv')
const searchInput = document.getElementById('searchInput')
const searchInput2 = document.getElementById('searchInput2')
const error = document.getElementById('error')
const done = document.getElementById('done')

// console.log(img.src)
// console.log(error)

playDiv.onclick = () => {
    console.log('hello')
}

//TODO>> addEventListener
playDiv.addEventListener('click' , () => {
    console.log('HI HI')
})

//TODO>> audio effect with addEventListener
searchInput.addEventListener('keyup' , (e) => {
    if(searchInput.value == 'ammar' ) {
        console.log('my name is ammar')
        done.play()
    }
    else {
        if(searchInput.value.length == 5){
            error.play()
            console.log('Enter the name ammar..')
        }
        // console.log(e.key);
        
    }
    // if(searchInput.value == 'ammar') console.log("my name is ammar")
})

searchInput2.addEventListener('keydown' , (e) => {
    if(e.key == 'a' ) console.log('you pressed a')
    else  console.log('Not a')
    // console.log(e.key)
    // if(searchInput2.value == 'ammar') console.log("my name is ammar")
})

//! without arrow function
// playDiv.addEventListener('click' , function() {

// })
