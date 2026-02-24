/*A string is a sequence of characters used to represent text, enclosed within single quotes (' '), double quotes (" "), or backticks (` `).
 name likhna ho paragraph likhna ho kuchbhi text
*/
// string length = charecter ki length  ye inbuild hota hai string.length se hum kisi bhi string ke charecter ki length nikal sakte hai.
let str ="rajesh negi";
console.log(str,str.length);
console.log(str[1])// ye string index ko acces karta hai string[index no] nikalne ke liye 1 index me kya charecter hai string me.


let a="apna college ";
b= a.length;
console.log(a,b);

/*ex 
let a="apna college";
0=a,1=p,2=n,3=a,4=c,5=o,6=l,7=l,8=e,9=g,10=e.
console.log(a[2]); a string ka 2 no index vo hai n toh n print hoga */

/*template literals in js = ek naya tarika string likhne ka -- Expressions aur variables ko embed kar sakte ho.
a way to have embedded expression in string (string ke sath expression embedded karne ka esy way hai tl)
ex `this is template literals` -> `ye sing ko backtick bolte hai backtick ke under jo likhte hai vo special type ki string hoti hai jinhe tl kehte hai`
iska use object ke kuch key value ko store karna hota hai easy kar deta hai.tl ki help se value ke sath hum string bhi likh sakte hai multi line string ek sath likh sakte hai 
ex `ye string kuch bhi text likh ab value ko store karne ke liye , ki jarurat nhi hai ek hi line me ab bs ${obj.name} koi bhi obj ki koi bhi key ki value ko store kra do sath me`
*/
// ex
let obj={
    name:"rajesh",
    class:12,
    rollno:12,
    s:"hjdjdjh",   
};
console.log(obj)// pura obj print hokar aa jayega jo bhi bnaya hai 
console.log("the name of student is",obj.name,"and class is ",obj.class);// string ptint hokar aayegi with obj me jo name key value hai uske sath ye simple ho gya ,lgana pad rha hai hume 
console.log(`the name of student is ${obj.name} and class of student is ${obj.class}`);/*yr tl hai specail string hai isme hum ek sth string or value dono print kara rhe hai simple string me bhi kara rhe hai but tl easy bna deta hai baar baar , 
lgane ki zarurat nhi hoti baar baar ""lgane ki zarurat nhi hoti.or simple string me value higlight hokar aati hai isme sab ek hi normal way me aata hai */


// string interpolation
/*String Interpolation
- Definition: String ke andar variables ya expressions directly insert karna.
- Kaam:
- Readable aur clean code banata hai.
- ${variable} syntax use hota hai (sirf template literals ke andar).
Matlab: String interpolation ek technique hai jo template literals ke andar hoti hai */
let s=89;
console.log(`this is string interpolation${1+2+4}`)

// escape charecter use in string
/* /n =alag alag line me print karana ,/t= space lana bich me.
ex
*/
let p="apna\ncollege";
console.log(p,p.length)
let r="rajesh\tsingh\tnegi"
console.log(r,r.length)