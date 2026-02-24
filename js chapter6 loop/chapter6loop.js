// loops = execute the code again and again tab tak jab tak chaho
// js me loop 5 type hote hai 1- for ,2-while ,3-do while, 4- for of ,5 -for in

// for loop syntex
/*for (let i=0 ; i<=5; i++) {
console.log("hello world");
}
*/

// let variable declare kiya humne js me vaise normal c ,c++ me hum int likhte hai data type ka type likhte hai  js me variable declare le var const se hota hai.

// let i=0; = ye initialize state hoti hai 
// i<5 = ye stoping btata hai loop kab tak chalega
//i++ =updation 
//ex humne i =0 hai 0<5 hota hai true hoga for loop me jayega hello world print hoga fir i++ updation me jayega i ki value 0 se 1 hogi fir check karega 1<5 true fir loop ke under jayega print karega hello world.

// ex
let a = prompt("enter your name");
for (let i = 0; i < 10; i++) {
    console.log(a);
}

let b=prompt("enter a no");
for(let i=0; i<b; i++){
    console.log("hello");
}
 
// while 
// initialization hum pehle hi kar dete hai while loop me fr while (condition aati hai) {loop ke under updation aata hai}

let i=0;
while(i<=5){
    console.log("hello word");
    i++
}

// let i=0;
// while(i<=5){
//     console.log(i);
//     i++
// } isme no print hunge 

// do while loop = altest one baar toh print hoga hi hoga chahe vo condition false kyu na ho.
// syntex
// let i=0;
// do{
//     console.log("rajesh");
//     i++;
// } while(i<5);

// ex
let j=20;
do{
    console.log("rajesh");
  j++;
}while(j<=10); // condition false hai fir bhi ek baar rajesh print hokar aayega hi aayega