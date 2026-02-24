// function is a block of code that perform a specific task .can be called it any time .
//  hum ise ek baar likhte ho aur jitni baar chahe use kar sakte ho. simple ye input ;eta hai funcrion or kaam karke output deta hai
//log()bhi function hai push() bhi touppercase() bhi function already devlop function hai hume nhi likhna apada 
//create a function
//step 1= function defination =isme hum code likhte hai function kaisa hoga kya kaam karana hai +paremeter.
//function call = kaam karwane ke liye function call function ko chalana aur value pass karna ke liye
//syntex
/*function functionname (){  =function keyword hai or functionname kuch bhi 
  code here jo kaar karna ho 
}*/
//functionname(); =ye fn call kar diya hai .
function myfunction(){
    console.log("apna colloge ");
    console.log("we are learning js");// yaha par kuch bhi operation performe kara sakte the
}
//humne myfunction naam ka ek function bna liya hai bs function bna hai jab tak call na karenge tab tak nhi hoga kaam complete.
myfunction(); 
myfunction(); 
myfunction(); 
//function ko 3 baar call kar diya 3 baar print hokar aayegabar bar code likhne ki jarurat nhi hai 
//agar ek kaam baar baar karana ho toh tab function ka use hota hai call karte samay hum kai baarcall kar sakte hai vo same kaam ko baar baar karke de dega
//ye function takes nothing return nothing type function hai.

function hello(msg,){ //msg  parameter(input)bolte hai hume apna msg input print karana ho tab 
    console.log(msg);

}
hello("hello everyone");// ye argument hai pass kiya hai
//ye function ko takes something return nothing.
//function defination me use karte hai use parameter bolte hai function call me jo pass karte hai usko argument bolte hai.
//msg ek parameter hai (variable hai) usko print kara diya or argument me value passkr di 

//paraneter =parameter ek variable jaisa hota hai jo use hota hai function ke under variable lene ke liye .
//argument = ye actual value hoti hai ye parameter ki value ko pass karte hai jaise variable me value dalte hai .ese fn call me pas karte hai.
//ek parameter me ek hi argument pass hota hai or do parameter me do argument.agar ek parameter me do argument pass karni ho tb fn ko do baar call karo ek baar ek argument pass dusri baar dusra argument pass.

//2no ka sum calculate and print with fn
function sum (a,b){
    console.log(a+b);
}
sum(12,34);
//ye function ko takes something return nothing.
//types of function=
/* 1.takes nothing return nothing 
2.takes something return nothing
3.takes nothing return something 
4.takes something return something*/

