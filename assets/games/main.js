
(function () {
    const game = document.createElement('div')
    document.body.appendChild(game)
    game.classList.add('game')
    class MakeItem {
        constructor(fatherBox, name, value) {
            this.name = name
            this.value = value
            const item = `<div class="${name}"><span>${value}</span></div>`
            fatherBox.insertAdjacentHTML('beforeend', item)
        }
    }

    //加载游戏模块A
    const game_boxA = document.createElement('div')
    game.appendChild(game_boxA)
    game_boxA.classList.add('gameboxA')

    //创建游戏项
    const game_apple = new MakeItem(game_boxA, 'game_apple', '见缝插针')
    const game_cherry = new MakeItem(game_boxA, 'game_numadd', '2024')
    const game_clock = new MakeItem(game_boxA, 'game_clock', '定时器')
    const game_fight = new MakeItem(game_boxA, 'game_fight', 'fight')
    const game_jump = new MakeItem(game_boxA, 'game_jump', '跳一跳')
    const game_snake = new MakeItem(game_boxA, 'game_snake', '贪吃蛇')
    const game_world = new MakeItem(game_boxA, 'game_world', '模拟地球')

    //填充模块背景色
    const game_items = document.querySelectorAll('[class^="game_"]')
    function madeColor(){
        game_items.forEach(item => {
            item.style.backgroundColor = getRandomColor()
            })
    }
    madeColor()

    //随机颜色
    function getRandomColor() {
        const letters = '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color
    }


    //游戏模块点击事件
    let itemClickTimer
    game_items.forEach(item => {
        item.addEventListener('click', async function (e) {
            clearInterval(itemClickTimer)
            itemClickTimer = setTimeout(() => {
                location.href = `game.html?name=${e.target.classList[0]}`
            }, 300)
        } )
    })

})()
