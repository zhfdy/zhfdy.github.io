
(function () {
    //初始化任务偏移量
    const personOffset = 320

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

    //修改难度
    document.body.addEventListener('click', (event) => {
        if (!(event.target.classList.contains('exit_item'))) return
        const value = event.target.getAttribute('data-value')
        
    })

    //生成新的平台
    function generatePlatform() {
        const width = 70
        const height = 70
        const x = Math.floor(Math.random() * 220)
        const y = Math.floor(Math.random() * 200 + 40)

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
        platformFirst.style.top = `${personOffset}px`
        platformFirst.style.left = `${personOffset}px`
    }
    gameLoop()

    //开始游戏
    let startTime
    let exitTime
    let wayLength = 0

    //监听平台触摸事件
    let flag = true
    function touchStart(e) {
        if (!flag) return
        flag = false
        if (!(e.target.classList.contains('person_on') || e.key === 'j')) return
        startTime = Date.now()
    }
    function touchEnd(e) {
        if (flag) return
        flag = true
        if (!(e.target.classList.contains('person_on') || e.key === 'j')) return
        exitTime = Date.now()
        wayLength = exitTime - startTime

        if (wayLength > 2500) wayLength = 2500

        const deg = (document.querySelector('.platform1').offsetLeft - document.querySelector('.platform1').offsetTop) / 320

        //跳跃动画
        const parabola = document.querySelector('.person')
        const duration = 1000// 动画持续时间，单位毫秒
        const startX = 0
        const startY = 0
        let endX
        let endY
        deg > 0
            ? (endX = -personOffset * (wayLength / 2500) * (1 - deg)
                , endY = -personOffset * (wayLength / 2500))
            : (endX = -personOffset * (wayLength / 2500)
                , endY = -personOffset * (wayLength / 2500) * (1 + deg))
        const peakX = endX + 50
        const peakY = endY - 100

        function animateParabola() {
            let startTime = null;

            function step(timestamp) {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const t = Math.min(progress / duration, 1);

                // 使用二次贝塞尔曲线公式计算位置
                const x = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * peakX + t * t * endX;
                const y = (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * peakY + t * t * endY;

                parabola.style.transform = `translateX(${x}px) translateY(${y}px)`;

                if (progress < duration) {
                    requestAnimationFrame(step);
                } else {
                    //等待动画结束后，计算是否跳跃成功
                    function isInRange(num, min, max) {
                        return num >= min && num <= max;
                    }

                    const platformTop = document.querySelectorAll('.platform')[1].offsetTop
                    const platformLeft = document.querySelectorAll('.platform')[1].offsetLeft
                    const personTop = endY + 320
                    const personLeft = endX + 320

                    if (isInRange(personTop, platformTop - 25, platformTop + 25) && isInRange(personLeft, platformLeft - 45, platformLeft + 45)) {
                        updateMark(true)
                    } else {
                        updateMark(false)
                    }
                }
            }

            requestAnimationFrame(step);
        }

        generateNewPlatform()

        animateParabola()

    }

    //触发事件
    function touchPlatform() {
    const gameBox = document.querySelector('.game_box');

    // 添加新的事件监听器
    gameBox.addEventListener('touchstart', touchStart)
    gameBox.addEventListener('mousedown', touchStart)
    document.body.addEventListener('keydown', touchStart)
    gameBox.addEventListener('touchend', touchEnd)
    gameBox.addEventListener('mouseup', touchEnd)
    document.body.addEventListener('keyup', touchEnd)
}

    touchPlatform()

    //游戏结束后，生成新的平台
    async function generateNewPlatform() {
        //移除角色
        document.querySelector('.person_on')
            ? document.querySelector('.person_on').classList.remove('person_on')
            : null

        //等待数秒后，生成新的平台
        await sleep(1500)

        //移移除样式,重新开始游戏
        document.querySelector('.person').remove()
        document.querySelectorAll('.platform')[1].classList.remove('platform1')
        document.querySelectorAll('.platform')[0].remove()
        gameLoop()
        touchPlatform()
    }
})()

