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
let de=document.querySelector("#heading-id");//id unique hoti hai isliye ek hi select karenge 
console.dir(de);

// dom manipulation Properties 
//1 tag name = return karega kisi bhi element  ke node ka tag name .ex
let first=document.querySelector(".click");
console.dir(first);// Yeh element ko object form me show karta hai.
//Matlab uske properties aur methods dekh sakte ho..
console.log(first.tagName)// .tagname likhna padta hai tag name print ke liye isme humne tag ka name print kara diya konsa tag hai ye karke 

// inner text = ye return karta hai node ke all element ka content child element (node)ka bhi content return karta hai change bhi kar sakte hai.
//ex
let div =document.querySelector("div");//select karega div elememnt ko
console.dir(div);// object print kar dega us div me jo jo hoga pura object
console.log(div.innerText);//ye print karayega div ke under jitna content hoga sab hi chil node ka bhi yahi div 
// me ul li child nod ehai unka bhi content print hoga 
//for change  ex=console.log(div.innerText="abc") = sare content ko change kar degi bs abc aayega bs


//inner html =isme hume sare ke sare tags or content both aayenge inner text me bs text aata hai 
// isme both tag or text both child node ka bhi  chnage bhi kar sakte hai ex.
let inner=document.querySelector(".exinnerhtml");
console.dir(inner); // isme object aa jayega 
console.log(inner.innerHTML);// ye print kara dega 
 // for change ex= 
 let chng=document.querySelector("#chnge");
 console.log(chnge.innerText="new heading");// heading 1 change ho jayegi new heading me innertext se 
 console.log(chnge.innerHTML="<i>heading</i>") // ab new heading heading me aa jayegi italic me.

 //4. text content= ye inner text ki tarah hi work kartahai but ye hidden eleemnt ke liye bhi kaam karta hai 
// ex agar hum kisi elemet ko hide kar denge toh ye usme bhi kaam karega 
//visibility css me hidden kar di ye heading nhi dikhegi toh ye js me text content lgaiye ye dikha dega
let textcon=document.querySelector("#content");
console.log(textcon.textContent)// dikh jayega vaha par ye 


//attribute ka mtlb hai element ki undar  extra inforamtion (img me src link me src vgra ) 
//JavaScript ki help se hum in attributes ko get, set, remove ya check kar sakte hain. ex
let att=document.querySelector(".attribute");// attribute class hai usko select kar diya 
console.log(att); // print kara diya pura div ko  ab  uske under class wali attribute haii uski value chahiye hume acces karni hai toh
let value=att.getAttribute("class")// isme hume fun ko varible me store karke getattribute se class wali attribute ko select kar diya access kar diya ab iski value aa jayegi 
console.log(value)

//set attribute = attribute ki value chnge karni ho set attribute use karte hai 
//ex syntex = setattribute(attribute,value) hum chah rhe ahi class ka name change akarna 
let chnges =document.querySelector(".attribute-set")// class ko select kara diya 
console.log(chnges);
let newval=chnges.setAttribute("class" ,"change-attribute-value")// class uski purani attribute thi jiski value attribute-set thi usko likha fir uski new value jo dena chahte hai vo likh diya 
console.log(newval)

//3 style attribute =>it is use for change stylevalue of any element 
//syntex = node.style 
let stylediv=document.querySelector("#box");// div wala box ko sleect kar rhe ahi id se 
console.log(stylediv.style);
let nsty =stylediv.style.backgroundColor="green";// pehle html me background color black diya tha ab style change kar diye by style attribute propert toh green ho jayega4
console.log(nsty)

