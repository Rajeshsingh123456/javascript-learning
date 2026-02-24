/*for loop
for (let i = 0; i < 3; i++) {
  console.log(i);
}
🧠 Kya milta hai?
index / count (i)
khud condition likhni padti hai
zyada control
📤 Output:

0
1
2

🔁 for-of loop
let arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);
}
🧠 Kya milta hai?
direct value
koi index nahi
simple & clean

📤 Output:

10
20
30
🦤 One-line difference

for → index ke saath kaam
for-of → value ke saath kaam likhne me for-of chhota & clean */
let arr= [10,20,30];
for (let i of arr){
  console.log(i);
}

let str= "rajeshnegi";
let size =0;
for(let i of str){
  console.log("i=", i);
 size++;
}
console.log(size);


// for off direct value deta hai for loop hume index deta hai.
let z=[12,32,321,43,33];
let sum =0;
for(let val of z){
  sum =sum+val
}
console.log(sum);


// for in loop = use hota hai object me
//key (i) ka output deta hai for in loop key mtlb jaise name ,age ,class , 
// value ka output ke liye hume console,log (student[i])
const student ={
  name:"raj",
  class:12,
  course:"commerce",
  age:18,
};
for(let key in student){
  console.log(key);
}
// result me key print hokar aa jayega object kya hota hai collection of key value pair but value ke liye niche likha hai

let car={
 model:"marutisuzikixl6",
 company:"maruti suzuki",
 price:"16lakh",
 engine:1462,
};
for(let i in car){
  console.log("key",i,"value",car[i]);// car[i]car ke har ek value ko acces karna mtlb value degi  or bs i hume object ki key dega jaise model,com,price en sab ki value ke liye hum car[i]likhte hai.

}

