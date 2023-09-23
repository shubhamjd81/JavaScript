
const date = new Date()
const minutes = date.getMinutes()
const hours = date.getHours()
const myDate = date.toLocaleDateString()

console.log(`Time - ${hours} : ${minutes}  Date- ${myDate}`)