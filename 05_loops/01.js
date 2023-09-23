// for

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (i == 5) {
//     console.log("five number is best");
//   }
//   console.log(element);
// }


for (let i = 1; i <= 10 ; i++) {
    // console.log(`Outer Loop Value : ${i}`)

    for (let j = 1; j <= 10 ; j++) {
    //    console.log(`Inner Loop Value : ${j} and Inner Loop ${j}`)
        
    // console.log(i + "*" + j + "=" + i*j)
    }
    
}
let myArray = ["batman","superman","iron-man"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element)
    
}

//  Break and Continue

for (let i = 1; i <= 20 ; i++) {
    if(i == 5){
        console.log(`5 is best`)
        continue
    }
    console.log(`Value of i is ${i}`)
    
}