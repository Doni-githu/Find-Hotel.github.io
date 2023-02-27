let card_number = document.forms["hisob"]["card_number"]
let expiry_date = document.forms["hisob"]["expiry_date"]
let expiry_date2 = document.forms["hisob"]["expiry_date2"]

let malumot = [];


document.getElementById("keyingi").addEventListener("click", (e) => {
    e.preventDefault();
    let info = {
        "card_number": card_number.value,
        "expiry_date": expiry_date.value,
        "expiry_date2": expiry_date2.value,
    }
    console.log("Registration_3", malumot);
    malumot.push(info)
})
// 1 bosilganda 1-page ga utishi
document.getElementById("one_button3").addEventListener("click", () => {
    location.assign("../sentting.html")
})
// 2 bosilganda 2-page ga utishi
document.getElementById("two_button3").addEventListener("click", () => {
    location.assign("../Find hotel 2/index2.html")
})

