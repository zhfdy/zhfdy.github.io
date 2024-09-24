

function madeTitle() {
    const times = new Date().toLocaleTimeString()
    return times
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function randomGetName() {
    try {
        const randomNum = Math.floor(Math.random() * people.people.length)

        return people.people[randomNum]
    } catch (error) {
        console.error('获取不到people信息:', error)
        throw error
    }
}



; (function () {
    //创建主体元素
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
                            <div class="image"></div>
                        </div>
                        <div class="app_content_left_bottom">
                            <p class="name">by_zhf</p>
                        </div>  
                    </div>
                    <div class="app_content_right">
                        <div class="app_content_right_top">
                            <ul class="app_content_right_top_list">
                                <li>1.</li>
                                <li>2.</li>
                                <li>3.</li>
                                <li>4.</li>
                                <li>5.</li>
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

        document.querySelector('.image').style.opacity = 0.8
        document.querySelector('.name').style.color = ''
        update(people)
    })




    const nameBox = document.querySelector('.name')
    const imageBox = document.querySelector('.image')
    const getNameBtn = document.querySelector('.get_name')
    async function update(people) {
        getNameBtn.classList.add('get_name_off')
        nameBox.classList.remove('name_end')

        await randomGetName().then(data => {
            people = data
        })

        await sleep(i)
        i += j

        nameBox.textContent = people.name
        imageBox.style.backgroundImage = `url('image/${people.image}')`

        if (i >= 0 && i < 100) {
            j = 2
        }

        else if (i >= 100 && i < 200) {
            j = 5
        }

        else if (i >= 200 && i < 700) {
            j = 150
            nameBox.style.color = 'rgba(225, 155, 55, 1)'
        }

        else {
            i = 1, j = 1
            flag = true
            imageBox.style.opacity = 1
            nameBox.style.color = 'red'
            getNameBtn.classList.remove('get_name_off')
            makeAgoName(document.querySelector('.name').textContent, document.querySelector('.image').src)

            return
        }

        update()
    }

    const agoNameArr = []
    function makeAgoName(name, image) {
        agoNameArr.unshift(name)
        agoNameArr.length > 5
            ? (agoNameArr.pop())
            : void 0

        const agoNameBox = document.querySelectorAll('.app_content_right_top_list li')
        const agoName = document.querySelectorAll('.agoName')
        agoName ? agoName.forEach(name => name.remove()) : void 0

        agoNameArr.map((name, index) => {
            const agoName = document.createElement('span')
            agoName.classList.add('agoName')
            agoName.textContent = name
            agoNameBox[index].appendChild(agoName)
        })

    }
  
    function backgroundColorInvert(){
        document.body.style.backgroundColor = document.body.style.backgroundColor === '' ? 'white' : ''
        document.body.style.color = document.body.style.color === '' ? 'black' : ''
    }
    document.addEventListener('keyup', e => {
        if(e.key === '6') { 
            backgroundColorInvert() 
        }
    })
    /*document.addEventListener('click', backgroundColorInvert)*/

})()
