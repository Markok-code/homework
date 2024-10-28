class Calculator {
    add(a, b){
        return a + b
    }
    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a /  b;
    }
   }

const call = new Calculator()

console.log(call.add(5, 5))
console.log(call.subtract(10, 9))
console.log(call.multiply(5, 5))
console.log(call.divide(15, 5))