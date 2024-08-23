const infoUser = {
    name:"Максим",
    age: 16,
    city:"Днепр",
    education: "10 класс",
    getInfo: function() {
        return this.name + "\n" +this.age + "\n"+this.city + "\n" + this.education
    }
}
console.log(infoUser.getInfo())