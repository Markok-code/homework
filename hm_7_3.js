function askForNumber(){
    let userInput;
    for(let i = 0; i < 10;i++){
        userInput = prompt()
        if(isNaN(userInput)){
           return 
        }
        if(userInput > 100){
            return userInput
        }

    }

}

console.log(askForNumber())