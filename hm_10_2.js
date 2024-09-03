const numArray = prompt().split(', ')


const filterArray = numArray.filter(number => number % 2 === 0)

console.log(filterArray)