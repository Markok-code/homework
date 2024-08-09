const age = Number(prompt("Enter your birth year"))
const place = prompt("Enter your place of residence")
const f_sport = prompt("Enter your favorite sport")

const places = {
    "Київ": "Ти живеш у столиці Украини",
    "Лондон": "Ти живеш у столиці Великобритании",
    "Вашингтон": "Ти живеш у столиці США"
}

const answer =age + places.place ||  ", ти живеш у місті "+ place +' '+ f_sport
alert(answer)


