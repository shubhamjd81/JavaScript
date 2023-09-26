
const h1 = document.getElementById("title")
// h1.setAttribute('class','black heading')

// console.log(h1.setAttribute('class','test heading'))

h1.innerText = "Dom Manipulation"

// console.log(h1.innerText);

const h2 = document.querySelector('title')

// console.log(h2.innerText)

const input = document.querySelector('input[type="password"]')

// console.log(input);

const myul = document.querySelector('ul').querySelector('li')
// const li = myul.querySelector('li')

// myul.style.backgroundColor = "red"

const tempList = document.querySelectorAll('li')

// own logic
// tempList.forEach((li,index)=>{
//     if(index==0){
//         li.style.backgroundColor="orange"
//     }
//     if(index==1){
//         li.style.backgroundColor="blue"
//     }
//     if(index==2){
//         li.style.backgroundColor="green"
//     }
// })

console.log(tempList)

const myClassList = document.getElementsByClassName('list-item')

const convertedList = Array.from(myClassList)

// convertedList.forEach((li,index)=>{
//     if(index==0){
//         li.style.backgroundColor = 'green'
//     }
//     if(index==1){
//         li.style.backgroundColor = 'blue'
//     }
//     if(index==2){
//         li.style.backgroundColor='orange'
//     }

// })

console.log(convertedList)
console.log(myClassList);