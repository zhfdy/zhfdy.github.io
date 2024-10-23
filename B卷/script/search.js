import get from "./api.js";

export default function search() {
    if (!(document.querySelector(".search_list"))) return
    if (document.querySelector(".search_list div")) return
    get("http://ncyunhua.com:9090/api/schoolBullying/news")
    .then(data => {
        const search_list = document.querySelector(".search_list")
        data.forEach(({text, time}, index) => {
            const li = document.createElement("div")
            li.classList.add(`search_item${index}`)
            const te = document.createElement("div")
            te.textContent = text
            const ti = document.createElement("div")
            ti.textContent = time
            li.appendChild(te)
            li.appendChild(ti)
            search_list.appendChild(li)
        })
    })
}
