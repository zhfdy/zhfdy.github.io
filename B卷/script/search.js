import get from "./api.js"

export default function question() {
    if (!(document.querySelector(".content_jjfa_list"))) return
    if (document.querySelector(".content_jjfa_list").children.length) return
    get('http://ncyunhua.com:9090/api/schoolBullying/schoolClass')
        .then(data => {
            const content_jjfa_list = document.querySelector(".content_jjfa_list")
            data.forEach(({text}, index)=> {
                const li = document.createElement("div")
                li.textContent = text
                li.classList.add(`content_jjfa_item${index}`)
                content_jjfa_list.appendChild(li)
            })
        })
}