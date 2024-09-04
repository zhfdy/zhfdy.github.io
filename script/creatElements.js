import { madeTitle, randomGetName} from './randomGetName.js'

    ; (function () {
        //创建主体元素id
        const app = document.createElement('div')
        app.id = 'app'
        document.body.appendChild(app)
        app.insertAdjacentHTML('afterbegin', createElement())
        function createElement() {
            return `
            <div class="app_mian">
                <div class="app_title">
                    
                </div>
                <div class="app_content">
                    <div class="app_content_left">
                        <div class="app_content_left_top">
                            <img class="image" src="" alt="">
                        </div>
                        <div class="app_content_left_bottom">
                            <p class="name">lucky</p>
                        </div>  
                    </div>
                    <div class="app_content_right">
                        <div class="app_content_right_top">
                            <ul class="app_content_right_top_list">
                                <p>ago</p>
                                <li>
                                </li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div class="app_content_right_bottom">
                            <button class="get_name">Click me</button>
                        </div>
                    </div>
                </div>
            </div>
        `
        }

        setInterval(madeTitleTime, 1000)
        function madeTitleTime() {
            const title = document.querySelector('.app_title')
            title.textContent = madeTitle()
        }
        madeTitleTime()

        let people = null, i = 1, j = 1, flag = true
        document.addEventListener('click', function (e) {
            if (!(e.target.classList.contains('get_name'))) return
            if (!flag) return
            flag = false

            document.querySelector('.name').style.color = ''
            update(people)
        })

        async function update(people) {
            const nameBox = document.querySelector('.name')
            const imageBox = document.querySelector('.image')
            nameBox.classList.remove('name_end')
            
            await randomGetName().then(data => {
                people = data
            })

            await sleep(i)
            i += j

            nameBox.textContent = people.name
            imageBox.src = `image/${people.image}`
            imageBox.alt = people.name

            if (i > 0 && i < 100) {
                j = 2
            }

            else if (i >= 100 && i < 200) {
                j = 5
            }

            else if (i >= 200 && i < 300) {
                j = 10
            }

            else if (i >= 300 && i < 500) {
                j = 40
                nameBox.style.color = 'rgba(225, 155, 55, 1)'
            }

            else {
                i = 1, j = 1
                flag = true
                nameBox.style.color = 'red'
                return
            }

            update()
        }

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms))
        }
    })()
