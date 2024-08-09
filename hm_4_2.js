const num = prompt("Enter the number")
if(num.length === 3){
    if((num[0] === num[1]) &&(num[1]=== num[2])){
        alert("All numbers are the same")
    }
    else if(num[0] === num[1] || num[2] === num[1] || num[0] === num[2]) {
        alert("Two numbers are the same")
    }
}