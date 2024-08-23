function filter(obj) {
   const salaries = []
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) { 
        if(key === "salary"){
            salaries.push(obj[key])
        }}
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          salaries.push(...filter(obj[key]));
        } 
    }
    return salaries
  }
  
function sum(arrayOfSaleries){
  return arrayOfSaleries.reduce((acc, num) => acc + num, 0)
}

  let sampleObject = {
    sales: [{name:'John', salary:1000}, {name:"Alie", salary:600}],
    development:{
        web:[{name:"Petrek", salary: 2000}, {name:"Alex", salary: 1800}],
        internals:[{name:"Jack", salary:1300}]
    }
  };
  
console.log(sum(filter(sampleObject)));
