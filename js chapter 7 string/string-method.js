//string method = ye inbuild function hai js ka iska use string me kuch kaam karana hota hai.
//.1 str.toUpperCase() = isme string uppercase me aa jati hai.
//.2 string.tolowerCase()= isme string lowercase me aa jati hai.
//.3 string.trim()= - trim() method →white space ko hatata hai यह string के starting और ending spaces (whitespace, tabs, newlines) हटाता है
/*.4 string.slice(start,ending)=ye string ko todta hai isme starting and ending point btana hota hai ending optional hota hai or ye ending count nhi hota 
 starting point jo hoga vaha se jaha tak ending point hoga vaha tak print karega agar ending point na ho toh saare startin se saare print honge */
//.5 string1.concat(string2)= ye do string ko join karti hai alag alag string ko+ bhi kar sakte hai 
//.6 string.charAt(index)= ye btata hai string ke index no me konsa charecter hai isko normal way se bhi kar sakte hai. 
//ex
let str="apna college";
let second=str.toUpperCase();
console.log(str);
console.log(second); // js me string immutable hoti hai mtln no change new creat ehoti hai isliye let second karke new string creat enad print kiya.
// string ke method new string create karte hai original string change nhi hoti check ke liye new or old dono string output m print hokar aayegi.


let string="APNA COLLEGE";
let secondstr= string.toLowerCase();
console.log(string,secondstr);

let strn="   i am learning js  ";
console.log(strn.trim());

let st="apna college";
console.log(st.slice(2,7)); //original string ko change nahi karta. Ye ek naya string return karta hai.
console.log(st);

let s1="apna"
let s2="college";
console.log(s1.concat(s2));
console.log(s2.concat(s1));
//+ se bhi do string alag alag string add kar sakte hai.
//ex
let z="rajesh";
let w="negi";
console.log(z+w);


// string.replace(searchvalue,new value) = string ke under koi value search karne ke kaam aata hai search karke replace karne me.
let m="hello";
console.log(m.replace("e","o"));// e ki jagah o aa jayega

let k="helololo";
console.log(k.replace("lo","p"));// first wale lo ki jagah hi p aayega,ek baar hi  ye nhi ki uske baad wale lo me bhi p aaye vo nhi aayega  
console.log(k.replaceAll("lo","lo"));// replace all se saare lo ki jagah p aa jayega.

//charat
let l="nitesh";
console.log(l.charAt(2));// ye 2 index me jo charecter ya text hoga usko print karega isko hum easy way me bhi karte hai 
// string[indexno ]aise bhi same kaam hota hai.


