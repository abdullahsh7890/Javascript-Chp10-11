// // Q1
var city = prompt("Enter a city name")
if(city=="Karachi"){
    alert("Welcome to city of lights")
}
// //  Q2

var gender = prompt("Enter your gender")
if(gender=="male"){
    alert("Good Morning Sir")
}
if(gender=="female"){
    alert("Good Morning Ma’am")
}
// // Q3

var color = prompt("Enter a traffic signal color")
if(color=="red"){
    alert("Must Stop")
}
if(color=="yellow"){
    alert("Ready to move")
}
if(color=="green"){
    alert("Move now")
}
// // Q4

var fuel = prompt("Remaining fuel in car (in litres)")
if(fuel<=0.25){
    alert("Please refill the fuel in your car")
}
// // Q5
 var a =  4;
if (++a === 5){
alert("given condition for variable a is true");
}


var b = 82;
if (b++ === 82){
alert("given condition for variable b is true");
}

 var c = 12 ;
if (c++ === 12){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c == 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
    alert("False")
}

if("car" < "cat"){
    alert("cat is smaller than car");
    }

//     // Q6
document.write("Marks Sheet")
var totalMarks = +prompt("Enter total marks")
document.write(" <br/><br/ Total Marks: " + obtainedMarks)
var obtainedMarks = +prompt("Enter your obtained marks")
document.write(" <br/><br/>Obtained Marks: " + obtainedMarks)
var percentage = obtainedMarks/totalMarks*100
document.write("<br/> Percentage: " + percentage)
if(percentage >=80 && percentage <=90){
  document.write("<br/> Grade: A-one<br/> Remarks: Excellent")
  
}
if(percentage >=70 && percentage<=80 ){
  document.write("<br/> Grade: A <br/> Remarks: Good")
  
}
if(percentage >= 60 && percentage<=70){
  document.write("<br/> Grade: B <br/> Remarks: You need to improve")

 
}
if(percentage <=60){
    document.write("<br/> Grade: Fail <br/> Remarks: Sorry ")

}


//     // Q7
    var secretNumber = +prompt("Guess the secret number")
    if(secretNumber==7){
        alert("Bingo! Correct answer")
    }
    if(secretNumber==6){
      alert(" Close enough to the correct answer") 

    }

  var T = prompt("Enter the temperature of your area.")
  if(T>=40){
    alert("It is too hot outside")
  }
  if(T>=30){
    alert("The Weather today is Normal")
  }
  if(T>=20){
    alert("Today’s Weather is cool")
  }
  if(T>=10){
    alert("OMG! Today’s weather is so Cool")

}
var valueOne = +prompt("Enter value one");
var valueTwo = +prompt("Enter value two");
var operator = prompt("Enter arithmetic operation");
       if (operator === "+") {
         alert(valueOne + valueTwo);
       }
       if (operator === "-") {
         alert(valueOne - valueTwo);
       }
       if (operator === "*") {
         alert(valueOne * valueTwo);
       }
       if (operator === "/"){
         alert(valueOne / valueTwo);
       }
       

       var num1 = +prompt("Enter the number")
   
       if(num1 % 3 == 0){
        alert("The number is divisible by 3")
       }
  else{
    alert("This number is not divisible by 3")
  }

  var a = +prompt("Enter any number")
  if(a % 2==0){
    alert("This is an even number")
  }
  if(a % 1==0){
    alert("This is an odd number")
  }