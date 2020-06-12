// to add more objects we add function inside an array.
let pets = [
    { name: "Tommy", species :'dog', colour:'brown'},
    { name: 'kalu' , species:'cat', colour: 'black'}
]
//push command helps in adding.
pets.push({name:'jimi' , species:'dog', colour:'grey'})
console.log(pets)

//map function to create a new array to new paticular object.
let name =pets.map(nameonly)

function nameonly(x) {
return x.name //we use . for an object.
}
console.log(name)

//filter  returns  a value that is a new array
 let dog= pets.filter(onlyDog)

function onlyDog(x) {
    return x.species=='dog'
 }
 console.log(dog)



















































 



