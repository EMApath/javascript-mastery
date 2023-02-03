// Assignment

// 1.

const text = "do not lie about anything, ever. lying leeds to hell.";

const arr = text.split(" ");
function capitalize(){
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        
    }
    return(arr.join(" "));
}
   
console.log(capitalize(text))


// 2.


function even(num){
    if (num%2 == 0)
     return('number is even');
    if (num%2 == 1);
     return('number is odd');
 }
 console.log(even(15))


 // 3.

 let mart = ["anfal", "sana", "afraa"];
mart.forEach(element => console.log(element));
