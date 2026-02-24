//aarrrays methods 
//1 push method = add the new element in the end of arry (array ke ned me element add karna );syntax array.push(isme jo element value add karni ho likho)
//ex
let array=["apply","banana"," mango"];
array.push("chips","paneer","bindi");
console.log(array);// output me new value aa jayegi usme ye last me ye sab sequance by add hokar aa jayegi ya sab add ho jayega isme
// push() purana array ko hi modify karta hai, naya array return nahi karta ,array ki length return karta hai 6 kar dega.
 
//pop()=pop() method ka kaam push() ka ulta hai. - Original array se last element remove hota hai.
//Uske baad tumhare paas updated array bacha jisme wo last element nahi hoga.
//Saath hi, pop() tumhe removed element return karta hai, jise tum alag se print ya use kar sakte ho.
// Original array modify ho jata hai, naya array nahi banta.- Agar array empty ho, to pop() undefined return karega.

// ex 
let arr=["apply","banana"," mango"];
arr.pop();
console.log(arr); //output apply and banana hi kyuki last elemnt ko remove kar diya hai 

let ar=[1,2,3,4,5,6,7];
let deleted =ar.pop();
console.log(ar);// isme arr print hoga without last elemnt .
console.log(deleted);// ye jo arr ka last element hai vo print kara dega 


//3 TOstring()=toString() ek array method hai jo array ke saare elements ko ek string me convert kar deta hai. 
// Har element ko default comma (,) se separate karke ek single string banata hai.
// array me changes nhi karta hai bas ek string return karta hai. 
// ex
let fruits=["apple","banana","mango"];
console.log(fruits.toString());//- fruits.toString() call karne se array ek string me convert hota hai, or print kara diya usko.
// array humne string me convert karje print bhi karani hoti hai ye new string return karta hai isliye

let b=[1,2,34,54,54];
let string=b.toString();//array ko convert karke string variable me store karya hai.
console.log(b);// original array print hoga jo k=hai vhi .
console.log(string);// yaha par string variable print kara diya .

//4 concat()=> - concat() ek array ke saath do ya do se zyada arrays ko join karke ek naya array banata hai.
// Ye original array ko change nahi karta, balki ek new array return karta hai.
//Matlab ye bhi array me new values add kar deta hai, lekin push() ke tarah original array ko modify nahi karta.
let c=[12,32,43,43,43];
let d=[32,45,657,65,76];// do array bna diye ab concat use karenge ye dno array ko marge karke new array dega.
let newarray = c.concat(d);// yaha dono merge hokar new array variable me store ho rhi hai
console.log(c,d);// ye purana hi array ko print karega vo chnage nhi hota.
console.log(newarray);// ye c or de dono ka new bna ka print karega order same rehnge 

//ex for add value throght concat
//ye new array bnata hai isliyehume new variableme store kara ke print karna padega purane array me changes nhi karta vo vaisa hi hota hai
 
let e=[12,32,43,43,43];
let n=e.concat(123);//new element ko n variable me store kar diya or ye array me add hoga
console.log(e);
console.log(n);

//5  unshift()  Ye array ke start me element add karta hai. Original array modify hota hai.
//  Return value hoti hai new length of array.ex
let a=[12,32,34,65,76];
a.unshift(12);// array a me start me 12 add ho jayega 
console.log(a.length);//pehle length array ki 5 thi ab 6 hogi ye return karta hai length bhi jaise push karta hai
console.log(a);

let f=[22,32,43,54,56];
let g=f.unshift(12,43,45);
console.log(f);// isme ye sare 12,43,45 add hokar print hoga array kyuki ye modify karta hai purane array me hi 
console.log(g); //ye return karta hai array ki length ko jisme new element add ho gye fir kitni length hai usko return karta hai. 

//6 shift()=>- Ye array ke first element ko remove karta hai.Original array modify hota hai.Return value hoti hai removed element.
let j=[24553,234,2,43,443,23];
j.shift();// ye j name ke array me first elemt ko select karke remove karega  
console.log(j);// then print karega usi arry ko jisme fisrt elemnt remove ho jayega 

let k=[24553,234,2,43,443,23];
let ays=k.shift();// k name ke array ka first elemnt remove karega 
console .log(k);// remove hokar first elemnt remove hokar arry same print ho jayega 
console.log(ays);// ye remove ki hui value ko return karega mtlb jo elemnt aray se remove ho gya usko print karega isliye hi humne 
// new varialbe me store karya  delete kane ke liye .

//7 SLICE() =>array.slice(start, end); return a peice of the array - Ye array ka ek portion (sub-array) nikalta hai.
// Original array unchanged (change nhi hota)rehta hai.Return karta hai ek new array jisme tumne specify kiye gaye elements hote hain.
// array.slice(startindex,endindex)=>- startindex jahan se lena ho ya  shuru hoga.end index jahan end karna hai tak nikalna hai (exclusive).
// simple me slice array me se new array bna ke deta hai jisme jo hum select karte hai bs vhi hota hai jaha. ex

let p=[21,32,43,53,53];
console.log(p.slice(2,3));//output 43 aayega last index count nhi hota hai
//slice(0)sare element print ho jayege 0 se end tak ,end index btata jaruri nhi hota 
//slice()isme bhi alll element prnt honge.

let s=[21,32,43,53,53];
let l=s.slice(1,4);//  jo range tum select karte ho (index 1 se 4 tak), usse ek new array banata hai jo l me store hunge.
console.log(s);// purana hi pura array print
console.log(l);//new array print 


//7 splice() = Array ko change karta hai new array nhi bnata hai (original array modify hota hai) Elements ko delete, add, ya replace kar sakta hai
//Kitne elements remove karne hain (optional)ya Naye elements add karne hai etc etc ya replace karna ho
//Return value hoti hai ek new array — jo deleted elements ka hota hai(jo element deted kiye hai unko return karta hai).
//syntex= array.splice(startIndex, deleteCount, item1, item2, ...)

//array.splice(startIndex, deleteCount, neweleement1, newelement2, ...)isem  pehle start index pass karte hai jaha se changes karne hai fir deletecount me fir startindex se 
//kitne elemnt delete karne hai vo deletecount me btate hai for ex humne starting index 2 pass kiya toh 2 se start hoga 
//or kitne 2 se kitne elemnt delete karne hai agar 1 likha toh 2 wala index ki value delte hogi vhi humne 2 likha toh 2,3 index ki value dlete hogi ek bhi elemnt delete 
//nhi karana toh delete count me 0 kar do
// newelement mtlb uske new element add karne hai agar hi toh mat likho agar karne hai add 101,102 ye 2,3 index me 101,102 aa jayega delte hokar.ye syntax sequence way me chalta hai ex
 let num= [1,2,3,4,5,6,7];
 num.splice(2,2,101,103);// 2 index starting index 2 de diya fir 2 elemnt delete kara diye 2,3 index delete then replce kar diye 2,3 index me 101,103 value.
 console.log(num);

 //splice me hume dleete nhi karna bs add karna hai elemnt ko

let sp=[1,2,3,4,5,6,7];
sp.splice(2,0,102,103);//2 index start ho gya bina kuch delete kiye 2 index ke baad humne value add kar di
console.log(sp);
// only delete  and print the deteleed value
let spl=[1,2,3,4,5,6,7];
let delet=spl.splice(3,1);//3 index select ho jayega vaha se 1 index ki value dlete toh 3 index ki value dlete ho jaygi
console.log(spl);
console.log(delet );// ye delete ki hui value bhi return karta hai 



