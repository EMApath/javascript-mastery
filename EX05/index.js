// Assignment

// 1. 
function findLargest(a,b){
    if (a > b){
        return a;
    }else if (b > a){
        return b;
    };
    
}
console.log(findLargest(15,10))

// 2.
function check(num){
    if (num%2 == 0)
    return true;
    if (num%2 == 1)
    return false;
}
console.log(check(10))


// 3.

let Triangle;
function findTriangleType(a,b,c){
    if (a === b && b === c){
        Triangle = "equilateral triangle"
    }else if (a != b && b != c){
        Triangle = "scelene triangle"
    }else if (a === b){
        Triangle = "isosceles triangle"
    }
    return (Triangle);
    }
    console.log(findTriangleType(10,20,15))
    console.log(findTriangleType(10,10,15))
    console.log(findTriangleType(10,10,10))


// 4.
 function getDayName(num){

switch(num){
    case 0 : day = "Sunday";
    break;
    case 1 : day = "Monday";
    break;
    case 2 : day = "Tuseday";
    break;
    case 3 : day = "Wednesday";
    break;
    case 4 : day = "Thursday";
    break;
    case 5 : day = "Friday";
    break;
    case 6 : day = "Saturday";
    break;
    default: day = "invalid day";
}
    
    return day;
    
}

console.log(getDayName(6))




