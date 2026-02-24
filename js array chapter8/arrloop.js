// looping over in array 
// print all elemnt in arry from for loop
let arr=[23,43,54,66,76];
for (let i=0;i<arr.length;i++){
    console.log(arr[i]);// array ke elemnt print ho jayenge 
}
// same from for of loop se
let a=[23,43,54,66,76];
for (let i of a){  // let i of a mtlb a array ke har element ko ek‑ek karke i variable me daalna pehle 23fir 43aise.
    console.log(i); // har i variable ki value print kar dega.
}
//string in arr
let array=["delhi","mumbai","gujrat","ahmadabad","uttrakhand"];
for (let city of array){
    console.log(city);
    console.log(city.toUpperCase());
}

// find sum of arr 
let ar=[23,43,54,66,76];
let sum=0;
for(let i of ar){   // ar array ke element i me jayenge or ek ek karke.
   sum=sum+i;
}
console.log(sum);

// arry elemt average
let b=[32,44,54,67,45];
let s=0;
for (let key of b){
    s=s+key;

}
let average =sum/b.length;
console.log("sum is =",sum ,"average is=",average);