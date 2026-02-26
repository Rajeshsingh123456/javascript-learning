//Return is a keyword in JavaScript .iska use  function ke andar ek value ko bahar bhejne ke liye hota hai(return karne ke liye ). 
//Jab function apna kaam complete kar leta hai, tab return ke through result ko function ke bahar bhejta hai.
//ye ek hi value retrun karta hai jisme bahut sari value ho sakti hai like ek array return kar diya usme bahut sari value hui.
//us value ko variable me store karke print karate hai .ex
function add(a, b) {
    return a + b; // Ye value wapas bhej raha hai
}

let result = add(5, 10); // result variable mein store kar diya ab 15 store ho gaya
console.log(result); // Output: 15

//ye exmaple hai takes something return something ka
//Agar aap return nahi likhte, toh function apna kaam toh karega, lekin bahar ki duniya ko kuch nahi dega.
//  JavaScript aise mein by default undefined bhej deta hai. return ke niche likha koi bhi code kabhi execute nahi hoga.
// comapre =console.log tab use karo jab aapko sirf check karna ho ki code sahi chal raha hai ya nahi.
//return tab use karo jab aapko us function ka result kisi doosre kaam mein istemal karna ho.ex
// 1. Paise double karne wala function
function doubleKardo(paise) {
    return paise * 2; // Ye calculation karke result wapas bhej raha hai
}

// 2. Ab jo return aaya, usse shopping karo
let giftMoney = doubleKardo(500); // 500 bheja, 1000 wapas mila

let bachaHua = giftMoney - 200; // Return ki wajah se hi hum minus kar paaye!maan liya 200 ki shopping kar li ab kitne bache 

console.log(bachaHua); // Output: 800

//Takes Nothing, Returns Something ka matlab hai ki function ko kaam karne ke liye aapse koi data (input) nahi chahiye,
 //lekin kaam khatam karne ke baad wo aapko ek value (result) wapas zaroor dega.
// 1. Function banana (Takes Nothing)
function getLuckyNumber() {
    return 7; // Hamesha 7 wapas bhej raha hai (Returns Something)
}

// 2. Function ko call karna aur result store karna
let myNumber = getLuckyNumber(); // Bracket khali hain (kuch nahi liya)

console.log("Mera lucky number hai: " + myNumber); 
// Output: Mera lucky number hai: 7
function sum(){
    return 5+5;
}
let value=sum();
console.log(value)