// reducer function in javascript

const myNumbers = [1,2,3]

const result = myNumbers.reduce(function(acc,curr){
    // console.log(`acc : ${acc} and curr : ${curr}`)
    return acc+curr;
},1)

// console.log(result)

const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"Data Science course",
        price:12999
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=>acc + item.price,0)

console.log(priceToPay)