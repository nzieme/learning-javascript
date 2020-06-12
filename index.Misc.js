//anonymous function
document.addEventListener('click', function(){
    alert('Thanku for clicking')
})

//arrow functions
document.addEventListener('click', () => alert('Thanku for clicking'))
 // if your syntax is with an arrow sign in a same line we dont need {} brackets.
   
 //another example with array
    let myNo = [ 10, 100, 190]
    let doubleNo = myNo.map(x => x * 2 ) // if only one variable we dont need to write.
    console.log(doubleNo)


//function hoisting
cool()
function cool(){
    console.log('this is super cool')
}

// template literals to make syntax shoter by using `` signs
let myname = 'Anzi'
console.log (`hello my name is anzi, my age is ${10 + 15}.`)

//semi colons keeping syntax in single line with ;.
let myname ='Anzi'; console.log (`hello my name is anzi, my age is ${10 + 15}.`)
