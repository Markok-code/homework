    function average_num(arr) {
    const numbers = arr.filter(item => Number(item))


    const sum = numbers.reduce((acc, num) => acc + parseFloat(num), 0)


    return sum / numbers.length
}

const arr_el = prompt("").split(" "); // 5 10 15
console.log(average_num(arr_el)); 

