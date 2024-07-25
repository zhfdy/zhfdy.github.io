
(function () {
    //初始化分数
    let myMarkNum = 0
    const mark = document.createElement('div')
    mark.classList.add('mark')
    document.querySelector('.game_box').appendChild(mark)
    mark.textContent = `分数：${myMarkNum}`


    //生成平台构造函数
    class Platform {
        constructor(x, y, width, height) {
            const platform = document.createElement('div')
            platform.classList.add('platform')
            document.querySelector('.game_box').appendChild(platform)
            platform.style.left = `${x}px`
            platform.style.top = `${y}px`
            platform.style.width = `${width}px`
            platform.style.height = `${height}px`

            //填充平台背景色
            const platform_bg = document.querySelectorAll('[class^="platform"]')
            platform_bg.forEach(item => {
                item.style.backgroundImage = `linear-gradient(${Math.floor(Math.random() * 360)}deg, ${getRandomColor()}, ${getRandomColor()})`
            })

            //随机颜色
            function getRandomColor() {
                const letters = '0123456789ABCDEF'
                let color = '#'
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)]
                }
                return color
            }

            return platform
        }
    }
    //生成第一个平台
    generatePlatform()


    //生成新的平台
    function generatePlatform() {
        const width = Math.floor(Math.random() * 5) + 50
        const height = Math.floor(Math.random() * 5) + 50
        const x = Math.floor(Math.random() * 220)
        const y = Math.floor(Math.random() * 240)

        const platform = new Platform(x, y, width, height)
    }



    //游戏主循环
    function gameLoop() {
        //生成新的平台
        generatePlatform()

        //更新当前平台类名
        const platformFirst = document.querySelectorAll('.platform')[0]
        const platformSecond = document.querySelectorAll('.platform')[1]
        platformFirst.classList.add(`platform0`)
        platformSecond.classList.add(`platform1`)

        //创建角色
        const person = document.createElement('div')
        person.classList.add('person')
        person.classList.add('person_on')
        document.querySelector('.game_box').appendChild(person)

        //移动平台到面前
        platformFirst.style.top = `320px`
        platformFirst.style.left = `320px`
    }
    gameLoop()

    //开始游戏
    let startTime
    let exitTime
    let wayLength = 0

    //利用勾股定理求两元素的直线距离
    function getDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    }

    //延迟函数
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }


    //监听平台触摸事件
    function touchStart(e) {
        if (!(e.target.classList.contains('person_on'))) return
        e.preventDefault()
        startTime = Date.now()
    }
    function touchEnd(e) {
        if (!(e.target.classList.contains('person_on'))) return
        e.preventDefault()
        exitTime = Date.now()
        wayLength = exitTime - startTime
        if (wayLength > 2500) wayLength = 2500
        const touchLineLength = 452 * (wayLength / 2500)
        console.log(`跳跃距离：${touchLineLength}`)
        const boxLineLength = getDistance(
            320,
            320,
            document.querySelector('.platform1').offsetLeft,
            document.querySelector('.platform1').offsetTop,
        )
        console.log(`平台距离：${boxLineLength}`)
        console.log(`平台位置：${document.querySelector('.platform1').offsetLeft},${document.querySelector('.platform1').offsetTop}`)
        const deg = document.querySelector('.platform1').offsetLeft / document.querySelector('.platform1').offsetTop
        console.log(`角度：${deg}`)
        let personJumpTop = 320 * (1 - (wayLength / 2500))
        let personJumpLeft = 320 * (1 - (wayLength / 2500)) * deg
        if (personJumpLeft > 320) personJumpLeft = 320
        if (personJumpTop > 320) personJumpTop = 320

        console.log(`取反比例： = ${1 - (wayLength / 2500)}`)
        console.log(`角色跳跃位置：${personJumpTop},${personJumpLeft}`)

        //跳跃动画
        const style = document.createElement('style')
        document.querySelector('head').appendChild(style)
        const keyframes = `@keyframes jump {
    0% {
        top: 320px;
        left: 320px;
        transform: rotate(0deg);
    }

    100% {
        top: ${personJumpTop}px;
        left: ${personJumpLeft}px;
        transform: rotate(360deg);
    }
}`
        style.textContent = keyframes
        document.querySelector('.person').style.animation = `jump 1.9s ease-out forwards`
    
        generateNewPlatform()
    }

    //触发事件
    function touchPlatform() {
        //监听平台触摸开始事件
        document.querySelector('.game_box').addEventListener('touchstart',(e) => touchStart(e))

        //监听平台触摸结束事件
        document.querySelector('.game_box').addEventListener('touchend', (e) => touchEnd(e))
    }
    touchPlatform()

    //游戏结束后，生成新的平台
    async function generateNewPlatform() {
        //移除角色
        document.querySelector('.person_on')
        ?document.querySelector('.person_on').classList.remove('person_on')
        : null

        //等待3秒后，生成新的平台
        await sleep(2500)

        //等待动画结束后，计算是否跳跃成功
        function isInRange(num, min, max) {
            return num >= min && num <= max;
        }
        const personTop = document.querySelector('.person').offsetTop
        const personLeft = document.querySelector('.person').offsetLeft
        const platformTop = document.querySelectorAll('.platform')[1].offsetTop
        const platformLeft = document.querySelectorAll('.platform')[1].offsetLeft

        console.log(`角色位置：${personTop},${personLeft}`)

        if (isInRange(personTop, platformTop - 25, platformTop + 25) && isInRange(personLeft, platformLeft - 25, platformLeft + 25)) {
            console.log('跳跃成功')
            myMarkNum++
        } else {
            alert('跳跃失败')
            myMarkNum--
        }

        //更新分数
        mark.textContent = `分数：${myMarkNum}`

        //移移除样式,重新开始游戏
        document.querySelector('style').remove()
        document.querySelector('.person').remove()
        document.querySelectorAll('.platform')[1].classList.remove('platform1')
        document.querySelectorAll('.platform')[0].remove()
        gameLoop()
        touchPlatform()
    }
})()

