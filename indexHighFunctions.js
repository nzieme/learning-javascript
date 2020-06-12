function createNumber(number){
    return function(Y) { 
        return Y * number 
    }
    }
  let anji = createNumber(10)  
  let asis = createNumber(20)
  document.write(asis(10))
  // to confusing, need to read and practise again.

  // high functions with arrays
  let myFavColours = [ 'red' ,'orange' ,'blue ']
  myFavColours.forEach(writeSomething)

  function writeSomething(FavColours) {
      document.write('The colour ' + FavColours + ' is a beautiful colour.<br>')
      document.write ('the colour' + FavColours)
  }


  let MyBirthdayWish = [ 'Hbd' , 'MGB', 'LL' ]
  MyBirthdayWish.forEach(wishHim)

  function wishHim(onHisBirthday){
      document.write(onHisBirthday + 'to you' +'<br>')
      document.write(onHisBirthday + 'you' + '<br>')
      document.write(onHisBirthday + 'to my kuku'+'<br>')
  }