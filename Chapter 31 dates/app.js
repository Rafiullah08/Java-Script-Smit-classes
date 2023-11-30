// alert("hello")
// var rightnow = new date();
// console.log(rightnow)

// var rightnow = new Date()
// console.log(rightnow)

// let dt = new Date("2023")
// console.log(dt)
// console.log(typeof dt)
// let str = dt .toString()
// console.log(typeof str)


let newdate = new Date("2024, 10,09")
console.log(newdate)

//  let dr = new Date.getDate();
//  console.log(dr)


let rightnow = new Date()
console.log(rightnow)


let yr = rightnow.getFullYear();
console.log("the year", yr )


let month = rightnow.getMonth()
console.log("the month",month)

let dt = rightnow.getDate()
console.log("the date",dt)


let hr = rightnow.getHours()
console.log("the hours",hr)

let mnt = rightnow.getMinutes()
console.log("the minutes",mnt)

let sec = rightnow.getSeconds()
console.log("the seconds",sec)

let milsec = rightnow.getMilliseconds()
console.log("the milliseconds",milsec)


rightnow.setDate(31)
console.log(rightnow)

let dat = rightnow.getDate()
console.log(dat)


let milsecc = Date.now()
console.log(milsecc)

let today = prompt("enter one number")
let daysarr = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
console.log("today",daysarr[today])


// var now = new Date()
// console.log(now)

// console.log(now .getDate())
// console.log(now .getMonth()+1)
// console.log(now .getDay())
// console.log(now .getFullYear())
// console.log(now .getMinutes())

// console.log(now .getMilliseconds())


// var now = new Date()
// var date = now.getDate();
// var mon = now.getMonth();
// var year = now.getFullYear()
// var dateformate = date + "/"+ mon + "/" + year
// console.log(dateformate)



// let now = new Date()
// console.log(now)
// let date = now.getDate();
// let mon = now.getMonth();
// let year = now.getFullYear();
// let dateformate = date + "/" + mon + "/"+ year
// console.log("today is", dateformate)

// var day = prompt("enter number")
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// console.log(days[6])

// var day = new Date().getDate()
// console.log("day", days[day])


var time = new Date().getTime()
console.log(time)

// var userDobprompt = prompt("enter your dob")
// var now = new Date()
// var userDob = new Date(userDobprompt)

// var usermillisec = userDob.getTime()
// var nowmillisec = now.getTime()

// var diff = nowmillisec - usermillisec
// var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365 ))
// console.log(age)



var now = new Date()
var userDob = new Date(2002,09,10)
// console.log(userDob)

var userDobmillisec = userDob.getTime()
var nowmillisec = now.getTime()

var diff = nowmillisec- userDobmillisec 
// console.log(diff)
var age = Math.floor(diff / (1000*60*60*24*365)) 

console.log("DOB" , age)








var now = new Date();
var thehr = now.getHours;
var themnts = now.getMinutes;
var thesec = now.getSeconds;
console.log(thehr +":"+ themnts +":"+ thesec)




var now = new Date()
console.log(now)
var time = now.getTime()
console.log(time)





var milsc = new Date()
var time = milsc.getTime()
console.log(time)
 var chnagetime = Math.floor(time / (1000 *60 *60*24*365 ))
 console.log(chnagetime)


 

 var now = new Date(0)
 console.log(now)























