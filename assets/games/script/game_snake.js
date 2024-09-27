

(function () {

    times = 120 // 移动速度
    let showflag = true //蛇移动提示
    //初始化网格
    function initGrid() {
        let x = 20
        let y = 20
        const style = document.createElement('style')
        document.querySelector('head').appendChild(style)

        const sheet = style.sheet
        sheet.insertRule(`:root { --grid-x: ${x}; }`, 0)
        sheet.insertRule(`:root { --grid-y: ${y}; }`, 1)

        const grid = document.createElement('div')
        grid.classList.add('grid')
        document.querySelector('.game_box').appendChild(grid)

        for (let i = 0; i < x; i++) {
            for (let j = 0; j < y; j++) {
                const cell = document.createElement('div')
                cell.classList.add(`grid-item-${i}-${j}`)
                grid.appendChild(cell)
            }
        }

        return { x, y }
    }
    const init = initGrid()
    const grid_x = init.x
    const grid_y = init.y

    //初始化蛇
    function initSnake() {
        const itemX = document.querySelector('.grid-item-0-0').getBoundingClientRect().width
        const itemY = document.querySelector('.grid-item-0-0').getBoundingClientRect().height
        const snakeX = Math.floor(Math.random() * grid_x) * itemX
        const snakeY = Math.floor(Math.random() * grid_y) * itemY

        const snake = document.createElement('div')
        snake.classList.add('snake')
        snake.style.width = itemX + 'px'
        snake.style.height = itemY + 'px'
        snake.style.left = snakeX + 'px'
        snake.style.top = snakeY + 'px'

        document.querySelector('.grid').appendChild(snake)
    }


    //初始化食物
    function initFood() {
        const itemX = document.querySelector('.grid-item-0-0').getBoundingClientRect().width
        const itemY = document.querySelector('.grid-item-0-0').getBoundingClientRect().height
        const foodX = Math.floor(Math.random() * grid_x) * itemX
        const foodY = Math.floor(Math.random() * grid_y) * itemY

        const food = document.createElement('div')
        food.classList.add('food')
        food.style.width = itemX + 'px'
        food.style.height = itemY + 'px'
        food.style.left = foodX + 'px'
        food.style.top = foodY + 'px'
        food.classList.add(`food${Math.floor(Math.random() * 5) + 1}`)

        document.querySelector('.grid').appendChild(food)
    }


    //游戏主循环
    function gameLoop() {
        snakeTimer = null // 蛇定时器
        initSnake()
        initFood()

        //修改难度
        document.body.addEventListener('click', (event) => {
            if (!(event.target.classList.contains('exit_item'))) return
            const value = event.target.getAttribute('data-value')
            if (value === '1') {
                times = 200
            } else if (value === '2') {
                times = 120
            } else if (value === '3') {
                times = 80
            } else if (value === '4') {
                times = 40
            }
        })

        //判断碰撞
        function checkCollision() {
            const x = document.querySelector('.grid').getBoundingClientRect().width
            const y = document.querySelector('.grid').getBoundingClientRect().height
            const itemX = document.querySelector('.grid-item-0-0').getBoundingClientRect().width
            const itemY = document.querySelector('.grid-item-0-0').getBoundingClientRect().height
            const snake = document.querySelector('.snake')
            const food = document.querySelector('.food')
            const snakeX = snake.offsetLeft
            const snakeY = snake.offsetTop
            const foodX = food.offsetLeft
            const foodY = food.offsetTop

            if (snakeX >= foodX && snakeX <= foodX + itemX && snakeY >= foodY && snakeY <= foodY + itemY) {
                food.remove()
                initFood()

                updateMark(true)
            }

            else if (snakeX < 0 || snakeX > x - itemX || snakeY < 0 || snakeY > y - itemY) {
                clearInterval(snakeTimer)
                snake.remove()
                initSnake()

                updateMark(false)
            }
        }

        //控制蛇移动
        async function moveSnake(direction) {
            checkCollision()

            const snake = document.querySelector('.snake')
            const itemX = document.querySelector('.grid-item-0-0').getBoundingClientRect().width
            const itemY = document.querySelector('.grid-item-0-0').getBoundingClientRect().height
            const snakeX = snake.offsetLeft
            const snakeY = snake.offsetTop

            if (direction === 1) {
                snake.style.top = `${snakeY - itemY}px`
                snake.style.transform = 'rotate(0deg)'
            }
            else if (direction === 2) {
                snake.style.top = `${snakeY + itemY}px`
                snake.style.transform = 'rotate(180deg)'
            }
            else if (direction === 3) {
                snake.style.left = `${snakeX - itemX}px`
                snake.style.transform = 'rotate(270deg)'
            }
            else if (direction === 4) {
                snake.style.left = `${snakeX + itemX}px`
                snake.style.transform = 'rotate(90deg)'
            }

        }

        function startGame(direction) {
            clearInterval(snakeTimer)
            moveSnake(direction)
            snakeTimer = setInterval(() => moveSnake(direction), times)
        }



        //键盘事件
        document.addEventListener('keydown', (e) => {
            e.preventDefault()
            const key = e.key
            const directionMap = {
                'w': 1,
                's': 2,
                'a': 3,
                'd': 4
            }

            if (directionMap[key] !== undefined) {
                startGame(directionMap[key])
            } else {
                if (!showflag) return
                showtimers()
                showflag = false
            }
        })
        const showtimers = function () {
            sleep(3000).then(() => {
                createAlert('按w,s,a,d或按键控制蛇移动!', '', 'info')
                showflag = true
            })
        }

        //按键事件
        //按键事件
        function createBtns() {
            //生成按键
            const btnBox = document.createElement('div')
            btnBox.classList.add('btn_box')
            document.querySelector('.game_box').appendChild(btnBox)

            const controls_arr = [
                {
                    id: 'controls_up',
                    text: '↑',
                    direction: 1
                },
                {
                    id: 'controls_left',
                    text: '←',
                    direction: 3
                },
                {
                    id: 'controls_down',
                    text: '↓',
                    direction: 2
                },
                {
                    id: 'controls_right',
                    text: '→',
                    direction: 4
                }
            ].map(({ id, text, direction}) => {
                const control = document.createElement('div')
                control.id = id
                control.textContent = text
                btnBox.appendChild(control)
                control.addEventListener('click', () => {
                    startGame(direction)
                })
            })
        }
        function createBtns_() {
            const w = document.documentElement.clientWidth || document.body.clientWidth
            if (w > 750) return
            createBtns()
        }
        createBtns_()
    }
    gameLoop()


    //暂停游戏
    document.querySelector('.controls_btn').addEventListener('click', () => {
        clearInterval(snakeTimer)
    })
})()