// event in js
// event = the change in the state of an object is know as event (event basicly object ke through represent hote hai or ye  code ko btate hai ki kuch kaam huaa hai jaise button click huaa haiect)
//Jab bhi user browser ke saath interact karta hai (jaise button click karna, mouse ghumana, ya keyboard par kuch type karna), toh ek event trigger hota hai.
//Sochiye aapne ek "Submit" button banaya hai. Jab tak user use click nahi karega, kuch nahi hoga. Click karte hi ek "Event" generate hota hai use event bolte hai . Hum JS mein Event Listeners ka use karte hain taaki hum us event ka intezaar kar sakein aur uspar koi action le sakein use event handling kehte hai .

// event handling in js syntex = node.eventname=()=>{} (btn.onclick=()=>{})
//btn1 ka ex
let btn=document.querySelector("#btn1"); // btn ko id se acces kar liya 
btn1.onclick =()=>{ // then event likh diya konsa karana hai 
    console.log("button was clicked by js ")// event hote hi jo changes aayege vo likh diya jaise ye print karayega 
}
