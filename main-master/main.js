const cards = document.getElementById("cards")
fetch("./main-master/main.json")
    .then(res => res.json())
    .then(json => {
        let data = json.map(mal => ({
            id: mal.id,
            src: mal.src,
            title: mal.title,
            combined: mal.combined,
            when: mal.when,
            price: mal.price,
            day: mal.day,
            bed: mal.bed,
            people: mal.people,
            arrows: mal.arrows,
            rating: mal.rating
        }))

        for (let i = 0; i < data.length; i++) {
            const el = data[i]

            let card = document.createElement("div")
            card.className = "cardWrapper"

            let id = document.createElement("span")
            id.textContent = el.id
            id.style.display = "none"
            card.append(id)

            let btn = document.createElement("button")
            btn.textContent = "Send"
            btn.setAttribute("class", 'btn2')

            let imgWrapper = document.createElement("div")
            imgWrapper.className = "imgWrapper"

            let rating_like = document.createElement("div")
            rating_like.className = "rating_like"

            let rating = document.createElement("div")
            rating.className = "rating"

            let star = document.createElement("img")
            star.src = "./main-master/img/star.png"

            let rating_p = document.createElement("p")
            rating_p.textContent = el.rating

            let like = document.createElement("div")
            like.className = "like"

            let heart = document.createElement("img")
            heart.src = "./main-master/img/hurt.png"

            let title = document.createElement("p")
            title.textContent = el.title
            title.className = "title"

            let combined = document.createElement("p")
            combined.textContent = el.combined
            combined.className = "combined"

            let when = document.createElement("div")
            when.textContent = el.when
            when.className = "when"

            let price = document.createElement('p')
            price.textContent = el.price
            price.className = "price"

            let day = document.createElement("p")
            day.textContent = el.day
            day.className = "day"

            let bed = document.createElement("img")
            bed.src = "./main-master/img/bed.png"

            let people = document.createElement("img")
            people.src = "./main-master/img/userblue.png"

            let arrows = document.createElement("img")
            arrows.src = "./main-master/img/do.png"

            let bed_p = document.createElement("p")
            bed_p.textContent = el.bed

            let people_p = document.createElement("p")
            people_p.textContent = el.people

            let arrows_p = document.createElement("p")
            arrows_p.textContent = `${el.arrows} Sq `
            let people_wrapper = document.createElement("div")
            people_wrapper.className = "icon_wrapper"

            let arrows_wrapper = document.createElement("div")
            arrows_wrapper.className = "icon_wrapper"

            let bed_wrapper = document.createElement("div")
            bed_wrapper.className = "icon_wrapper"

            let facts = document.createElement("div")
            facts.className = "facts"

            let priceWrapper = document.createElement("div")
            priceWrapper.className = "priceWrapper"

            let icons = document.createElement("div")
            icons.className = "icons"


            people_wrapper.append(people)
            people_wrapper.append(people_p)

            bed_wrapper.append(bed)
            bed_wrapper.append(bed_p)

            arrows_wrapper.append(arrows)
            arrows_wrapper.append(arrows_p)

            icons.append(bed_wrapper)
            icons.append(people_wrapper)
            icons.append(arrows_wrapper)

            facts.append(title)
            facts.append(combined)
            facts.append(when)

            rating.append(star)
            rating.append(rating_p)



            priceWrapper.append(price)
            priceWrapper.append(day)

            like.append(heart)

            rating_like.append(rating)
            rating_like.append(like)

            imgWrapper.append(rating_like)
            imgWrapper.style.backgroundImage = `url(${el.src})`

            card.append(imgWrapper)
            card.append(facts)
            card.append(priceWrapper)
            card.append(icons)

            card.append(btn)

            cards.append(card)

            btn.addEventListener("click", (e) => {
                localStorage.setItem("id", e.target.parentElement.childNodes[0].textContent)
                location.assign("../Find Hotel Web App/index.html")
            })
        }
    })


let data = [
    {
        src: "./img/img1.png",
        title: "Wilderness Club at Big Ceddar",
        combined: "2 Bedroom Combined Lodge",
        when: "28 October — 1 November",
        price: "$2016",
        day: "/6 night",
        bed: "4 Beds",
        people: "8 ",
        arrows: "1,350",
        rating: "4.8"
    },
    {
        src: "./img/img2.png",
        title: "Wilderness Club at Big Ceddar",
        combined: "2 Bedroom Combined Lodge",
        when: "28 October — 1 November",
        price: "$2016",
        day: "/6 night",
        bed: "4 Beds",
        people: "8 Sleeps",
        arrows: "1,350 Sq Ft",
        rating: "4.8"
    },
    {
        src: "./img/img8.png",
        title: "Wilderness Club at Big Ceddar",
        combined: "2 Bedroom Combined Lodge",
        when: "28 October — 1 November",
        price: "$2016",
        day: "/6 night",
        bed: "4 Beds",
        people: "8 Sleeps",
        arrows: "1,350 Sq Ft",
        rating: "4.8"
    },
]







const data2 = {
    title: `I quickly found the right tour for me, but I had a few questions about the hotel,
        I wrote to tech support and they answered all my questions within an hour. The
        vacation itself was perfect. Thank you very much. I will come back again and
        again.`
}

for (let i = 0; i <= 2; i++) {
    if (window.innerWidth <= 450) {
        document.getElementById(`${i}`).textContent = data2.title.slice(0, 50)
        document.getElementById(`id${i}`).style.width = `75px`
        document.getElementById(`id${i}`).style.height = `75px`
    } else {
        document.getElementById(`${i}`).textContent = data2.title
    }
}

let menu_btn = document.getElementById("menu_btn")
let menu_img = document.getElementById("menu_img")
let links = document.getElementById("links")

links.style.width = "0px"
links.style.height = "0px"

menu_btn.addEventListener("click", () => {
    if (links.style.width === "0px") {
        links.style.width = "105%"
        links.style.height = "280px"
        menu_img.src = './main-master/img/iks.png'
    } else {
        links.style.width = "0px"
        menu_img.src = "./main-master/img/menu.png"
    }
})