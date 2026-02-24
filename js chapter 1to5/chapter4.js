// conditional statement 
// to implement some condition in code 3 type in js
// if condition
// if (condition){
//     code hoga agar true hoga condition tab hi vrna nhi  vrna if statement ke bahar aa jayega .
// }

// ex
let age=20;
if(age>=18){
    console.log("you can vote");
}
if (age<18){
    console.log("you cannot vote");
}
// multiple if statement use kar sakte hai 

let mode ="dark";
let color;
if(mode=="dark")
{
    color="black";
}
if(mode=="light")
    {
    color ="white";
}
console.log(color);


// if else = agar if true toh if wala part run hoga false hoga toh else wala run ho jayega .
 
let m ="d";
let c;
if (m =="d"){
    color ="b";
}
else {
    color ="w";
}

let z=4;
if(z%2==0){
    console.log("even no");
}
else {
  console.log("not even");  
}
// else hamesha  if ke sath hi aayegi if toh hum akele bhi likh sakte hai baar baar bhi .

// else if statement .
//= else if statement me if statement kaam nhi kiya toh else if statment check hoti hai fir else statemnt hoti hai hum kitne bhi else if statment lga skate hai.esle if use hota hai bahut
// saari statment lgani ho agar fisrst true nhi toh second fit third baar baar hume if condition ki zarurat nhi hoti.
 // ex 

let w=50;
if(w<18){
    console.log("junior");
}
else if (w>18){
    console.log("adult");
}
else if (w>70){
    console.log("senior");
}
else {
    console.log("middle");
}


