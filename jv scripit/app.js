alert("rafiullah")

// var num = 500
// var num2 = 800
// var result = num + num2
// console.log(result)


// a = 456
// b = 456
// c = 677
// var add = a + b + c
// console.log("add", add)

// f = 3455
// g = 345
// add = "3455" + "345"
// console.log("rgc", add) 

// var add = "rafiullah"
// console.log(add)


// var add = "rgc0880"
// console.log(add)

//  var num1 = 38
//  var result = ++num1 + ++num1 - --num1 - num1 + num1

//  console.log(result)

//  var num2 = 25
//  var result = num2-- + num2++ + num2++ - --num2 - --num2 - num2-- + num2
//  console.log(result)

// var num3 = 8
// var result = num3 + num3 + ++num3 + --num3 - --num3 + ++num3 + --num3 - num3
// console.log(result)


var num1 = 25
var result = num1-- + num1++ + num1++ - --num1 - --num1 - num1-- + num1
            // 25 /24
            // 24 /25
            // 25 /26
            // 25 /25
            // 24 /24
            // 24 /23
            // 23
        //  var num1  = 24 Ans

var num2 = 38
var result = ++num2 + ++num2 - --num2 - num2 + num2
        //    39 / 39
        //  40 / 40
        // 39 / 39
        // 39 /39
        // 39 /39
        // var num2 = 40 Ans

var num3 = 8
var result = num3 + num3 + ++num3 + --num3 - --num3 + ++num3 + --num3 - num3
        // 8 / 8
        // 8 /9
        // 9 / 8
        // 8 / 7
        // 7 / 8
        // 8 / 7
        // 7 / 7
        // 7
    //    var num3 = 34 Ans





//     var num1 = +prompt("enter first numb")
//     var num2 = +prompt("enter 2nd numb")
// var opt = prompt("enter opt", "+,-,*,/")

// if(opt == "+"){
//         console.log(num1+num2)
// }else if(opt == "-"){
//         console.log(num1-num2)
// }else if(opt == "*"){
//         console.log(num1*num2)
// }else if(opt == "/"){
//         console.log(num1/num2)
// }else{
//         console.log(NaN)
// }


// var stdAge = 18
// if(stdAge <= 18 && stdAge > 10 ){
//         console.log("allow")
// }else{
//         console.log("notAllow" )
// }



// var gender = "male"
// if(gender == "male " || gender == "female"){
//         console.log("allow")
// }else{
//         console.log("not allow")
// }

// var stdAge = 40
// if(stdAge >= 20 && stdAge <= 40){
//         console.log("allow")
// }else{
//         console.log("notallow")
// }



// var age = 22
//  if(age >= 10 && age <= 20 ){
//         console.log("allow")
//  }else{
//         console.log("not allow")
//  }


//  var gender = "abcddd"
//  if(gender == "male" || gender == "female"){
//         console.log("allow")
//  }else{
//         console.log("not allow")
//  }





// var citiy1 = "lahore"
// var city2 = "multan"
// var city3 = "karachi"
//  console.log(citiy1)
//  console.log(city2)
//  console.log(city3)

// var cities = [ "sarhad","multan", "lahore", "karachi", "islamabad"]
// console.log(cities[0])

// var fruits = []
//  fruits[1] = "chitral"
//  console.log(fruits[1])



//  var fruits  = ["apple", "mango","orange"]
//  console.log(fruits[0])

//   fruits[3] = "banana"
//   console.log(fruits)

  
// fruits[4] = "pineapple"
// console.log(fruits)

// var ismatch = false
// var cities = prompt("enter your city")
// var cities = ["islamabad", "dehli","karachi"]
// for(var i = 0 ; i < cities.length; i++ ){
//         console.log(cities[1])
//         if(cities[i] === "karachi"){
//                 alert("welcome to the city of light")
//         }
// ismatch = true
// break

// }
// if(ismatch === false){
//         alert("karachi not exists")

// }


// var ismatch = false
// var fruits = prompt("enter fruits name")
// var fruits =["orange", "banana", "mango"]
// for(var i = 0; i < fruits.length; i++){
//         alert(fruits)
//         ismatch = true
//         if(fruits[0]=== "annanas"){
//                 alert("fruits axixts")
//         }
          
//           break      
        
// }
// if(ismatch === false){
//         alert("no entry")
// }



// var arr = [ ["mango", "apple","orange"],["pakistan","karachi","sarhad"]]
// for(var row =0;  row< arr.length; row++){
//         console.log(arr[row])
//         for(var col = 0; col< arr.length; col++){
//                 console.log(arr[row][0])
//         }

// }


// var userName = "raflullah"
// var firstLatter = userName[0].toLowerCase()
// var otherLatters = userName.slice(1).toUpperCase()
// var cap = firstLatter + otherLatters
// console.log(cap)




// var stdName = "aRUBA"
// var firstLatter = stdName[0].toUpperCase()
// var otherLatters = stdName.slice(1).toLowerCase()
// var cap = firstLatter + otherLatters
// console.log(cap)
// var stdName = "jaffar amman"
// var cap = stdName[0].toUpperCase() + stdName.slice(1).toLowerCase()
// console.log(cap)


var userName = "rGC CHITRALI"
var strsplit = userName.split(" ")
// console.log(strsplit)
var strsplit= userName[0].toUpperCase()

console.log(strsplit)
var strsplit = userName.slice(1,3).toLowerCase()
console.log(strsplit)

// var strjoin = userName.join()
// console.log(strjoin)



// var str = "a smarter way to learn javascript"



// for(var i = 0; i<str.length; i ++){
//         if(str.slice(i,i+10) === "javascript"){
//                 var beforelength = str.slice(0,i) 
//                 // console.log(beforelength)
//                 var concatword = "Second World War"
//                 var afterlength = str.slice(i+12)
//                 var finalsummary = beforelength + concatword+ afterlength
//                 console.log(finalsummary)
        




// var indexnumb = str.indexOf("javascript") 

// var changecase = str.slice(0,indexnumb) + "second word war" + str.slice(indexnumb+10)
// console.log(changecase)



// var str = "a smarter way to learn javascript"


// str = str.replace( "javascript","the new jv")
// console.log(str)



var str = "my name is rafiullah"
str = str.replace("rafiullah", "RGC")
console.log(str)









// var randnum =  Math.floor(Math.random()*2 +5)
// console.log(randnum)

// var str = "1233"
// var num1 = number(str);


// console.log( num1)

var a = 100
var str = String(a)
console.log(str)
console.log(typeof str)

















































        








        
























