// map method

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const result = myNumbers.map((num)=>{return num + 10})


// chain method
const result = myNumbers
.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>=40)
console.log(result)