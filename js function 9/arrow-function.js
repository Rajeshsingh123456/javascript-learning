// arrow function is a compact way (chhota tarika)of writing a function 
//Normal function likhne ke liye aapko function keyword use karna padta hai, lekin arrow function mein sirf ek mota arrow => lagta hai. ex
//js me jayda tak arrow function hi likhte hai normal function nhi
// arrow function use hota hai chhote kaam ke liye bade kaam ke liye hum nhi karte hai .

const arrowSum =(a,b)=>{ // humne a,b perameter bnaya fir arrow lgaya jisse arrow function ban gya
//  use humne ek variable arrosum me  store kar diya ab vo variable function ban gya

    console.log(a+b); //do some code 

}; // hum function ko variable me bhi store kar sakte hai arrow function ko execute karn e ke liye humne const variable me store kiya.
arrowSum(90,9)

//arrow fun for multiply
const arromul =(a,b)=>{
    console.log(a*b);
};
arromul(90,12)
// arrow function me bhi value return kar sakte hai ex
const arromultiply=(a,b)=>{
    return a*b;
};
let result =arromultiply(12,2);
console.log(result);

/// for print a msg no parameter 
const arrow =()=>{// arrow function bnaya koi perameter nhi liya 
 console.log("hello");

};
arrow();