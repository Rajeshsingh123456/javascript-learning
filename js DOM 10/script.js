window; // isme ye sari method aa jayega isme iske under hi document hote hai uske under html head vgra vgra 

window.document;// document window ka part hai toh isme document ka sarra kuch hoga html ka  

console.dir(window.document);//dir ka kaam ye special object jaise window ,document ke method or propert ko print karane ke kaam aata hai  .
//console.log("hello") ye print karta hai vhi cheeze simple as a element 
//hum html ko js me acces kar sakte hai window object ke undar document me 

console.dir(document.body) ;//body ko acces karenge ye object hai isme bahut saari cheeze hoti hai
console.log(document.body);// ye object ka print karega jo html me humne body me use kiya hoga sab aayega 

console.dir(document.body.childNodes[1])//body me 1 wala child node print karna 
//body element ka pura DOM object dikh jata hai jisme parent aur child nodes bhi hote hain.

//Parent Node=Parent node matlab jo element upar hota hai.
//Child Nodes=Body ke andar jo elements hote hain wo child nodes hote hain.
//dynamically change karte hai js ki help se html css nhi kar sakte  
//for ex jaise button me click kiya toh change huua
console.dir(document.body.style.background="green")//background color change kar diya dynamically change kiya hta dekenge toh vhi aa jayega pehle wala 
console.dir(document.body.childNodes[1].innerText="abc")//h1 ko control kiya fir inner text change kar diya 

//dom manipulation
//1 select with id =html element ko id se select access karna 
let selectid=document.getElementById("heading-id");// ye value return karta hai toh isliye hum isko variable me store karenge 
console.log(selectid);// id me jo value hogi vo print hogi
console.dir(selectid);//bs id me jo hoga vo hoga uska object aayega or ye object hote hai isliye hamesha dir karte hai 

//2 select with class
let cl=document.getElementsByClassName("heading");
console.dir(cl);//ye object hai isliye dir lgana hoga 
// class name return karta hai html collection ko ye array jaisa hi hota hai array nhi hoga bs.
// glt class name likhne se 0 empty dikhega or glt id se null aayega 

//3 select by tags name = isme html element ke tag name se access karte hai 
let tags =document.getElementsByTagName("p");// paragraph p tag ko acces kar liya 
console.dir(tags);

//4 select by query selecter = isme hum tag name id ya class name kisi se bhi select kar sakte hai 
//ye short and acha way hota hai select karne ka 
let q= document.querySelector("p")//tags p tag se slect kiya access kiya 
console.dir(q);// sir query selecter hai toh first element select karke de dega  bs ek p ye query selecter all likho tab sare return karke dega ek node list way me

let allel=document.querySelectorAll("p");
console.dir(allel);//isme sare element select hokar aayege as a node way

//query select by class
let query=document.querySelectorAll(".heading");
console.dir(query); // sare jitne bhi tag me heading di hai class saaare aa jayegneg 

// by id 
let id=document.querySelector("#heading-id");//id unique hoti hai isliye ek hi select karenge 
console.dir(id);
