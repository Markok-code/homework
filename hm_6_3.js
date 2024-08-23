function removeElement(array, item){
    const res = []
    array.map((el, i)=>{
        if(!(item === el)){
            res.push(el)
        }
    })

    return res
}
const array = prompt().split(' ')
const deletElem = prompt()
console.log(removeElement(array, deletElem))
