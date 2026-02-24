// array is collection of item ( elements ) that store same data typee .
// 5 student ke marks store karane ho tb same data type use hota ahi usme arry best hota hai object or 5 alag alag variable bnakar bhi kar sakte haibut ye dono 
//aproach mushik hoti hai as compare to array arry js me non primitive data type hai .
//index 0se start hota hai arry me 
// ex
let arr=[24,34,56,76,76];
console.log(arr);
console.log(arr.length,typeof arr);// ye propert hoti hai ye value deti hai bs ki arry ki length kitni hai ,type of arry object hi hota hai


//ex= arry ke element print karana through for loop jaydatar js me for of loop ka use karte hai arry ke liye .
let arrex=[23,45,65,67,67];
for (let i=0;i<arrex.length;i++){
    console.log(arrex[i])
}

// array index(indices)=arr[0],arr[1]aise 
let a=[43,23,24,54,65];
console.log(a[3]);// ye array ka 3 index me jo value hogi bs usko print karega or index 0 se start hota haiarray me.
console.log(a[4]);

//changes in array 
let arrays=[43,23,24,54,65];
 arrays[3]=56;
 console.log(arrays);
 

