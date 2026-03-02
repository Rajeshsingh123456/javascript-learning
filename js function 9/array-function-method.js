//for each loop in array =forEach JavaScript ka ek aisa tool (method) hai jo array ke har ek dibbe (element) 
// ko ek-ek karke check karta hai aur jo kaam tum bologe, wo us par apply kar deta hai callback function ki help se.
//syntax arromul.forech(callback function)
//Callback ek aisa function hai jo kisi doosre function ke "andar" pass kiya jata hai (ya uska paremeter pass), taaki wo sahi time aane par execute ho sake .ex
//Anonymous Callback=Isme hum function ko koi "naam" nahi dete, seedha forEach ke bracket ke andar hi pura function likh dete hain.
//ex array ke element print krana 
let arr=[1,2,3,4]
arr.forEach(function myfun (val){  //fun myfun(val)ye hi callback haiya(anonymous callback),val tera Parameter hai.  iska naam hum kuch bhi rakh sakte hai
 console.log(val)
})
//Jab loop pehli baar chalega, val ki value 1 hogi.Jab doosri baar chalega, val ki value 2 hogi.
// Ye arr ke har element ko bari-bari pakad kar laata hai isme store ho jayenge .
//Manual Loop (for loop): Tu khud ginte hue jayega—"Pehle bande ko do, phir doosre ko do, jab tak line khatam na ho jaye."
//forEach: Tu bas delivery boy ko bolega, "Is line mein jitne log hain, sabko ek-ek mithai de do." Wo khud line ginega aur sabko baant dega.
// ex same in arrow function
let array=[1,2,3,4];
arr.forEach((valu)=>{//arrow function me hume sidhe value pass kar di koi jarurat nhi hai fun,funname pass karne ki side perameter pass kar do
    console.log(valu);
}
);//same kaam with arrow function
let a=["mumbai","delhi","kolkata","pune"];
a.forEach((b)=>{// array ke har index me jakar value uski b me aa jayegi fir b ko print 
    console.log(b);
    console.log(b.toUpperCase())//ye uppercase me likhne ke use
})

//parameter value ,idex,array 
// array ki value ,array ka index or pura ka pura array ."Value, Index, Array" wala pattern sirf Array Methods ke liye hi reserve hai.Normal functions mein aisa automatically nahi hota.
//JavaScript ne forEach, map, filter jaise methods ko design hi aise kiya hai ki woh callback ko 3 cheezein gift mein dete hain(value index or pura array).
let ar=[1,3,4,5];
ar.forEach((val,index,array)=>{//isme val me foreach loop sare element ko le lega index ek parameter hai jo 
    console.log(val,index,array)//array ke elememnt val me aa gye unhe print fir index ko print fir array ko hi print
})
//higher order function/method= aise function jo kisi fun ko as a parameter use karta hai ya return karta hai as a value isliye (jaha bhi callback ho vo higher oredre function hote hai)
//for each bhi higher order function /method hai

// MAP= map is an array method, it is a simler to foreach method.
//Jab tumhe ek array ke har element par koi kaam karna ho aur us kaam ke baad jo result aaye, 
//toh result ko return karta hai map jabki foreach return nhi karta .ek alag naya array chahiye ho, tab hum map use karte hain.
// syntex=arr.map(callbackfunction(value))
//ex for print array elemet by map
let c=[1,2,3,4];
c.map((val)=>{ //same to same foreach ki tarah hi
    console.log(val);
});
//ye return karta hai array ko toh iska nay array bnayenge
let num = [1, 2, 3, 4, 5];

// 1. Map ka result seedha 'newarray' mein store kiya 
let newarray = num.map((val) => {
    return val * 2; // Maan lo hum har number ko double kar rahe hain
});

console.log(newarray); // Output: [2, 4, 6, 8, 10]
console.log(num);      // Output: [1, 2, 3, 4, 5] (Original array waisa hi rahega)

//FILTER =YE BHI NEW ARRAY DETA HAI ek ek index me jakar unme se kuch value filter out karna based on some condition
 //filter() ka use tab hota hai jab tumhe kisi badi list (array) mein se sirf apni kaam ki cheezein chhaantni (select) hon.
 //Agar aapka callback function true bolega, toh wo element naye array mein chala jayega.
//Agar false bolega, toh wo wahin chhut jayega.
let d=[1,2,3,4];
let newar=d.filter((val)=>{// new array me store kar rhe hai hum function ko ye return 
    return val%2===0;//return karega even no ko bs array me se ye condition daal di 
});
console.log(newar);//isko new array ko print kara diya hai 
console.log(d)//purana array aise hi rhega bs isme changes nhi hunge 

//map aur filter ke andar jo tu callback function likhta hai, use tu call nahi karta, 
// balki JavaScript ka engine call karta hai array ke har element ke liye.isliye callback fun ko new variable me store karna hota hai

//REDUCE METHOD=array ke upper kuch operation perform karna hai fir single value aani chahiye 