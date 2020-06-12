// Scope 
let myName = 'Anzi' 
function name(){
    if(2+ 2== 4){
        myName = 'Anzu' 
    }
}
name()
console.log('in the global scope', myName)
// scope helps to identify and show the inside value rather than the outside one even if the variable name is same


//Context
let Guddu ={
    firstName: 'Guddu',
    lastname: 'Bhaddu',
    drivecar(){
        console.log(this.firstName + " " + this.lastname + ' is driving car.')
// this points toward the object that is executing the current function like in guddu we are calling guddu so its call guddu.
    }
}
Guddu.drivecar()

//example of this
function breathe(){
    console.log(this.firstName + " " + this.lastname + ' inhale and exhale.')
}
breathe.call(Guddu)