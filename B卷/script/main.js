import Creat from "./creat.js"
import get from "./api.js"
import banner from "./banner.js"
import search from "./search.js"
import question from "./question.js"
import messages from "./messages.js"
import { sy, qzzx, xxdt, jjfa, ly } from "./mian_.js"

(function () {
    function creatDom() {
        const app = new Creat({
            name: 'app',
            sons: [
                {
                    name: 'header',
                    sons: [
                        {
                            name: 'logo',
                            sons: [
                                {
                                    name: 'logo_img',
                                    label: 'img',
                                    value: {
                                        src: 'https://gd-hbimg.huaban.com/140eb0276a78f77ce7b44b36891d56bc2ea3483f1d77e-mGmku3_fw1200'
                                    }
                                },
                                {
                                    name: 'title',
                                    label: 'h1',
                                    text: '江西反校园欺凌宣传网'
                                },
                            ]
                        },

                        {
                            name: 'nav',
                            label: 'ul',
                            sons: [
                                {
                                    name: 'nav_sy',
                                    label: 'li',
                                    text: '首页'
                                },
                                {
                                    name: 'nav_qzzx',
                                    label: 'li',
                                    text: '群众中心'
                                },
                                {
                                    name: 'nav_xxdt',
                                    label: 'li',
                                    text: '信息动态'
                                },
                                {
                                    name: 'nav_jjfa',
                                    label: 'li',
                                    text: '解决方案'
                                },
                                {
                                    name: 'nav_ly',
                                    label: 'li',
                                    text: '留言'
                                },
                            ]
                        }
                    ]
                },
                {
                    name: 'main',
                },
                {
                    name: 'white',
                },
                {
                    name: 'footer',
                    sons: [
                        {
                            label: 'p',
                            text: '抵制校园暴力，从我做起'
                        },
                        {
                            label: 'p',
                            text: '江西反校园欺凌宣传网'
                        }
                    ]
                }
            ]
        })
        app.into('body')
    }
    creatDom()
})();

(function () {
    sy.into('.main')
    banner()
    const mainList = [sy, qzzx, xxdt, jjfa, ly]

    function creatMainElement(index) {
        switch (index) {
            case 0:
                mainList[0].into('.main')
                break
            case 1:
                mainList[1].into('.main')
                get('http://ncyunhua.com:9090/api/schoolBullying/peopleCenter')
                    .then(data => {
                        function creatContent(data) {
                            const imgList = document.querySelectorAll('.content_qzzx_list img')
                            const contentList = document.querySelectorAll('.content_qzzx_list .right')
                            imgList.forEach((item, index) => {
                                item.src = data[index].imgSrc
                            })
                            contentList.forEach((item, index) => {
                                item.querySelector('.title').textContent = data[index].title
                                item.querySelector('.text').textContent = data[index].text
                            })
                        }
                        creatContent(data)
                    })
                break
            case 2:
                mainList[2].into('.main')
                search()
                break
            case 3:
                mainList[3].into('.main')
                question()
                break
            case 4:
                mainList[4].into('.main')
                messages()
                break
        }
    }

    const app = document.querySelector('.app')
    const header = app.querySelector('.header')
    const nav = header.querySelector('.nav')
    const navLi = nav.querySelectorAll('li')
    const nav_active = document.createElement('span')
    nav_active.classList.add('nav_active')

    const main = app.querySelector('.main')

    const footer = app.querySelector('.footer')

    navLi[0].style.color = 'yellow'
    navLi[0].appendChild(nav_active)
    navLi.forEach((item, index) => {
        item.addEventListener('click', function () {
            removeActive()

            creatMainElement(index)
            this.style.color = 'yellow'
            item.appendChild(nav_active)
        })
    })
    function removeActive() {
        navLi.forEach(item => {
            item.style.color = ''
        })
        main.innerHTML = ''
        document.querySelector('.nav_active') ? document.querySelector('.nav_active').remove() : ''
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 's') {
            const dom = document.documentElement || document.body
            dom.scrollTop = dom.scrollTop + 150
        } else if (event.key === 'w') {
            const dom = document.documentElement || document.body
            dom.scrollTop = dom.scrollTop - 150
        }
    })
})()