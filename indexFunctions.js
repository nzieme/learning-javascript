// Alert helps to pop up you word  at first when you click something
function greet(myName){
    alert('Hello My name is' + myName)
}
greet('Anzi')
greet ('Sunny') // this pop up seconds time when u click, the no of gree we keep, the no of pop up be the same.
//it can also be done by by repeatin alerts with diiferent sentence.


//if we have two variables we need to add two variables inside the ()
function greet(name, favColour){
    alert('Hello my name is' + name +'.', 'My Favourite colour is' + favColour + '.')
}
greet("Anzi" ,"bkack")
greet ('Sunny','Blue') 
//greet(name, colour) in function can be defined at the end of code as greet(John,BLue)


//return value
function number(Y){
return ( 20 * Y)
}
console.log(number(30));
