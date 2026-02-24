// data type 
/* data tye in js 
 2 type ke hote hai primitive and non primitive .
 primitive 7 type hote hai basic hote hai single value store karte hai 
  String → "Hello"
- Number → 42
- Boolean → true / false
- Null → null
- Undefined → undefined
- BigInt → 123n
- Symbol → Symbol("id")


 non primitive =- Object → { name: "Rajesh", age: 21 }
- Array → [1, 2, 3]
- Function → function greet() { return "Hello"; }
- Date → new Date()
- RegExp → /abc/
- Map → new Map()
- Set → new Set()
- WeakMap → new WeakMap()
- WeakSet → new WeakSet()


*/

//code  number
let a =25;
console.log(a, typeof a);

//string = charecter text ko store karta hai isko single ya doble quotes me likhte hai 
let b="raj";
console.log(b ,typeof b);

// null = object honi chahiye variable ki value  but abhi null hai .ye hum jab variable ki value ko null rakhna chahte hai
let c=null;
console.log(c ,typeof c);

//undefine = variable declare kar diya but value nhi di value assign nhi ki
let d;
console.log(d , typeof d);

//bigint =integer ke bade no store karne ke liye use 
 let e=BigInt("45768");
 console.log(e ,typeof e);

 //non primitivedata type multiple value store karte hai complex hote hai

 // object = key value pair ya collection of  value.
  const profile={
    name:"rajesh",
    isfollow:true,
    age:23,
    following:"23k",
    post:21,

  };
  console.log(profile ,typeof profile);
  console.log(profile.following ) // isme profile object ka bs naam naam print hoga isko hum (profile["name"]) aise bhi likhte hai

  profile.age =profile.age+1;
  console.log(profile.age); // ye do line code se age jo 23 hai vo change hogi 24 ho jayegi iska use hum value  change karne ke liyekarte hai kyuki const ko update nhi kar sakte na,

// html me <script> src="js file link "</script> isse html file me js file link kar sakte hai.