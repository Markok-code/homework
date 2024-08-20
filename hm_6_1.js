function func(args1, args2){
    const arg_l = args1.split("")
    const res2 = []
    arg_l.map((el, i)=>{
        if(!(args2.includes(el)) || el == ' '){
            res2.push(el)
        }
    })

    return res2.join('')
}
const s = prompt()
const u = prompt()
console.log(func(s, u))
