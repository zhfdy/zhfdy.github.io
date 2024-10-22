import get from "./api.js"

export default function question() {
    if (!(document.querySelector(".content_jjfa_list"))) return
    get('http://ncyunhua.com:9090/api/schoolBullying/schoolClass')
        .then(data => {
            const content_jjfa_list = document.querySelector(".content_jjfa_list")
            data.forEach(({text} )=> {
                const li = document.createElement("div")
                li.textContent = text
                content_jjfa_list.appendChild(li)
            })
        })
}