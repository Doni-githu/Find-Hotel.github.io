document.getElementById("next").addEventListener("click", () => {
     location.assign("./Find hotel 2/index2.html")
})
// 2 two_button bosilganda 2-registration page ga utishi
document.getElementById("two_button").addEventListener("click", () => {
     location.assign("./Find hotel 2/index2.html")
})

document.getElementById("three_button").addEventListener("click", () => {
     location.assign("../Find Hotel Web App/Find Hotel 3/index3.html")
})


fetch("./main.json")
     .then(res => res.json())
     .then(json => {
          for (let i = 0; i < json.length; i++) {
               const element = json[i];
               if (element.id == localStorage.getItem("id")) {
                    console.log("Topildi", element);
                    document.getElementById("content").innerHTML = `
     <div class="left">
     <img src="${element.src}">
     </div>
     <div class="right">
     <div class="yozuv_2">
          <p>Wilderness Club at Big Ceddar</p>
     </div>
     <div class="icon_block">
          <div class="card_2">
               <img src="./images/Mask group.png">
               <p>4 Beds</p>
          </div>
          <div class="card_2">
               <img src="./images/Mask group (1).png">
               <p>8 Sleeps</p>
          </div>
          <div class="card_2" id="three_card">
               <img src="./images/Mask group (2).png">
               <p>${element.arrows} Sq Ft</p>
          </div>
     </div>
     <div class="boshqalar">
          <div class="one-qator">
               <p>Arrival Date</p>
               <p id="three_p">Total Nighrs</p>
               <p>Rate</p>
               <p id="five_p">Discount</p>
               <p>Community Fee</p>
               <p>Tax</p>
               <p>Total</p>
          </div>
          <div class="two-qator">
               <p id="two_one_p">${element.when}</p>
               <p id="two_three_p">${element.day.replace("/", '')}s</p>
               <p id="four_p">${element.price}</p>
               <p id="two_five_p">Apply Coupon Code</p>
               <p id="two_six_p">$${149}</p>
               <p id="two_seven_p">$${143.25}</p>
               <p id="two_eight_p">$${parseInt(149 + 143.25 + parseInt(element.price.replace("$", '')))}</p>
          </div>
     </div>
     </div>`
               }
          }
     })

