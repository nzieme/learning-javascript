function greet(birthdayWish){
    alert(birthdayWish)
}
greet('SURPRISE')
greet('Wait Wait')
greet('ITNI V KYA JALDVAZI, CHALO DHEKLO')

let MyBirthdayWish = [ 'Happy Birthday to' , 'May God Bless', 'Long Live to' ]
MyBirthdayWish.forEach(wishHim)
function wishHim(onHisBirthday){
    document.write(onHisBirthday + ' you' +'<br>')
    document.write(onHisBirthday + ' you' + '<br>')
    document.write(onHisBirthday + ' my kuku'+'<br>')
    document.write(onHisBirthday + ' you' + '<br>' + '<br>')
}
document.write('I love you kuku hehe *.* <br>' + '<br>') 
let wish =100
while(wish <=100000) {
    document.write('I love you. ')
    document.write('Hmm <br>')
wish+=1000 
}  