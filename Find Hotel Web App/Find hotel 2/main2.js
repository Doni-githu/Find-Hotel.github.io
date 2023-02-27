let name2 = document.getElementById("name")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let data = document.getElementById("data")

let malumot = [];


document.getElementById("next_to3").addEventListener("click", (e) => {
    e.preventDefault();

    if (!name2.value || !email.value || !phone.value || !data.value) {
        alert("Qarangchi hammasini to'ldirdingizmi?")
        return ;
    };


    let info = {
        "name": name2.value,
        "email": email.value,
        "phone": phone.value,
        "data": data.value,
    }
    console.log("Registration", malumot);
    malumot.push(info)
    name2.value = ""
    email.value = ""
    phone.value = ""
    data.value = ""
})
// 2 bosilganda 2-page ga utishi
document.getElementById("one_button2").addEventListener("click", () => {
    location.assign("../sentting.html")
})
// 3 bosilganda 3-page ga utishi
document.getElementById("three_button2").addEventListener("click", () => {
    location.assign("../Find Hotel 3/index3.html")
})
