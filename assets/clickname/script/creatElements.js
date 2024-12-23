
import { peoples } from '../data/people.js'
import MadeModel from './madeModel.js'

if (typeof peoples === 'undefined') {
    peoples = {
        people: []
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function madeTitle() {
    const times = new Date().toLocaleTimeString()
    return times
}

async function randomGetName() {
    try {
        const randomNum = Math.floor(Math.random() * peoples.people.length)
        return peoples.people[randomNum]
    } catch (error) {
        throw error
    }
}



; (function () {
    let clickFlag = true

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
                            <img class="image" src="image/bg.png" alt="">
                        </div>
                        <div class="app_content_left_bottom">
                            <p class="name">by_zhf</p>
                            <img class="add_people" src="image/icon.png" alt="">
                        </div>  
                    </div>
                    <div class="app_content_right">
                        <div class="app_content_right_top">
                            <span class="eye"></span>
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
                        <div class="allpeople" style="display:none"></div>
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

    function showAllPeopleName() {
        document.querySelector('.allpeople').textContent = `${JSON.stringify(peoples.people)}`
    }

    function makeEye() {
        document.body.addEventListener('click', function (e) {
            if (e.target.classList.contains('eye')) {
                if (!(e.target.classList.contains('eye_off'))) {
                    e.target.classList.add('eye_off')
                    document.querySelector('.allpeople') ? document.querySelector('.allpeople').style.display = '' : void 0
                    showAllPeopleName()
                } else {
                    e.target.classList.remove('eye_off')
                    document.querySelector('.allpeople') ? document.querySelector('.allpeople').style.display = 'none' : void 0
                }
            }
        })
    }
    makeEye()

    function addNewPeopleName(addPeopleName) {
        const addPeople = addPeopleName
            .trim()
            .split(/\s+|,|，|\r\n|\n/g)
            .filter(name => name !== '')
        peoples.people.push(...addPeople)
    }

    function addPeople() {
        const addPeopleBox = new MadeModel('导入名单')
        document.querySelector('.model_add').addEventListener('click', () => {
            const addPeopleName = document.querySelector('.model_text').value
            addPeopleBox.closeModel()
            if (!addPeopleName || addPeopleName === '') return
            addNewPeopleName(addPeopleName)
            showAllPeopleName()
        })
        document.querySelector('.model_close').addEventListener('click', () => {
            addPeopleBox.closeModel()
        })
    }

    function madeAddPeopleBox() {
        if (document.querySelector('.people_box')) return
        const peopleBox = document.createElement('ul')
        peopleBox.classList.add('people_box')
        document.querySelector('.app_content_left_bottom').appendChild(peopleBox)
        const addPeopleBtn = document.createElement('li')
        const removeAllPeopleBtn = document.createElement('li')
        addPeopleBtn.classList.add('add_people_btn')
        removeAllPeopleBtn.classList.add('remove_people_btn')
        peopleBox.appendChild(addPeopleBtn)
        peopleBox.appendChild(removeAllPeopleBtn)
        addPeopleBtn.textContent = '导入'
        removeAllPeopleBtn.textContent = '清空'
    }

    function addPeopleBoxClick() {
        const addPeopleIcon = document.querySelector('.add_people')
        addPeopleIcon.addEventListener('click', () => {
            madeAddPeopleBox()
        })
    }
    addPeopleBoxClick()

    document.body.addEventListener('click', function (e) {
        if (!(e.target.classList.contains('add_people'))) {
            if (document.querySelector('.people_box')) {
                document.querySelector('.people_box').style.opacity = 0
                setTimeout(() => {
                    document.querySelector('.people_box') ? document.querySelector('.people_box').remove() : void 0
                }, 500)
            }
        }

        if (e.target.classList.contains('add_people_btn')) {
            addPeople()
        }
        if (e.target.classList.contains('remove_people_btn')) {
            peoples.people = []
            showAllPeopleName()
        }
    })

    let people = null, i = 1, j = 1
    document.body.addEventListener('click', function (e) {
        if (!(e.target.classList.contains('get_name'))) return
        if (!clickFlag) return

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

        if (peoples.people.length === 0) {
            clickFlag = true
            alert('名单数据库名字被您清空了，请重新添加或刷新页面')
            getNameBtn.classList.remove('get_name_off')
            return
        }

        clickFlag = false

        await randomGetName().then(data => {
            people = data
        })

        await sleep(i)
        i += j

        nameBox.textContent = people.name || people
        imageBox.src = people.image ? `image/${people.image}` : ''
        imageBox.alt = people.name || people

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
            clickFlag = true
            imageBox.style.opacity = 1
            nameBox.style.color = 'red'
            getNameBtn.classList.remove('get_name_off')
            makeAgoName(document.querySelector('.name').textContent, document.querySelector('.image').src)

            return
        }

        update()
    }

    const agoNameArr = []
    function makeAgoName(name) {
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


})()