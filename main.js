
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
    const game_apple = new MakeItem(game_boxA, 'game_apple', 'apple')
    const game_cherry = new MakeItem(game_boxA, 'game_2048', '2048')
    const game_clock = new MakeItem(game_boxA, 'game_clock', 'clock')
    const game_fight = new MakeItem(game_boxA, 'game_fight', 'fight')
    const game_jump = new MakeItem(game_boxA, 'game_jump', 'jump')
    const game_snake = new MakeItem(game_boxA, 'game_snake', 'snake')
    const game_world = new MakeItem(game_boxA, 'game_world', 'world')

    //填充模块背景色
    const game_items = document.querySelectorAll('[class^="game_"]')
    game_items.forEach(item => {
        item.style.backgroundColor = getRandomColor()
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
