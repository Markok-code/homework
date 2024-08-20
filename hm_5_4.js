let N = Number(prompt(""));
let var_a = "Число є простим"
if (N < 1) {
    var_a = "Число повинно бути більше 1";
} else {
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            var_a = "Число не є простим"
            break;
        }
    }
}
alert(var_a)