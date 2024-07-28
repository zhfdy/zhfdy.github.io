
(function () {
    //查询上个页面参数
    const urlParams = new URLSearchParams(window.location.search)
    const name = urlParams.get('name')

    //修改页面详情
    const title = document.querySelector('title')
    title.textContent = name

    //界面初始化
    const game_box = document.createElement('div')
    game_box.classList.add('game_box')
    document.body.appendChild(game_box)
    const game_content = document.createElement('div')
    game_content.classList.add('game_content')
    game_content.textContent = `${name}`
    document.body.appendChild(game_content)

    //增加控件菜单
    const controls = document.createElement('ul')
    controls.classList.add('controls')
    game_box.appendChild(controls)

    //控件点击事件，实现下拉
    const control_btn = document.createElement('div')
    control_btn.classList.add('controls_btn')
    game_box.appendChild(control_btn)
    control_btn.addEventListener('click', function () {
        const controls = document.querySelector('.controls')
        this.classList.contains(`controls_btn_off`)
            ? (this.classList.remove(`controls_btn_off`)
                , controls.classList.remove(`controls_on`))
            : (this.classList.add(`controls_btn_off`)
                , controls.classList.add(`controls_on`))
    })
    document.body.addEventListener('click', function (e) {
        if (e.target === control_btn || e.target === controls) return
        if (!(document.querySelector('.controls_btn').classList.contains(`controls_btn_off`))) return
        controls.classList.remove(`controls_on`)
        control_btn.classList.remove(`controls_btn_off`)
    })



    //添加控件项
    function add_li() {
        function add_control(name, text, callback) {
            const controls = document.querySelector('.controls')
            const control = document.createElement('li')
            control.classList.add(`control_${name}`)
            control.textContent = text
            controls.appendChild(control)
            control.addEventListener('click', function () {
                if (!callback) return
                this.classList.contains(`${name}_off`) ? this.classList.remove(`${name}_off`) : this.classList.add(`${name}_off`)
            })
        }
        //暗夜模式切换
        const dark = add_control('dark_mode', '深色', true)
        document.querySelector('.control_dark_mode').addEventListener('click', function () {
            this.classList.contains('dark_mode_off') ? document.querySelector('.game_box').classList.add('dark_mode_on') : document.querySelector('.game_box').classList.remove('dark_mode_on')
        })
        //排行榜按钮
        const rank = add_control('rank', '排行榜', false)
        document.querySelector('.control_rank').addEventListener('click', function () {
            add_rank()
        })
        //返回按钮
        const back = add_control('back', '返回', false)
        document.querySelector('.control_back').addEventListener('click', function () {
            window.history.back()
        })
        //开挂按钮
        const exit = add_control('exit', '开挂', true)
        document.querySelector('.control_exit').addEventListener('click', function () {

        })
    }
    add_li()

    //添加排行榜
    async function add_rank() {
        const rank_box = document.createElement('div')
        rank_box.classList.add('rank_box')
        document.body.appendChild(rank_box)
        const rank_title = document.createElement('div')
        rank_title.classList.add('rank_title')
        rank_title.textContent = '排行榜'
        rank_box.appendChild(rank_title)
        const rank_list = document.createElement('ul')
        rank_list.classList.add('rank_list')
        rank_box.appendChild(rank_list)

        //添加排行榜项
        let rank_data = [
            { name: 'TOP1', score: 325 },
            { name: 'TOP2', score: 254 },
            { name: 'TOP3', score: 214 },
            { name: 'TOP4', score: 187 },
            { name: 'TOP5', score: 165 },
            { name: 'TOP6', score: 154 },
            { name: 'TOP7', score: 145 },
            { name: 'TOP8', score: 137 },
            { name: 'TOP9', score: 130 },
            { name: 'TOP10', score: 124 },
            { name: '我', score: myMarkNum }
        ]
        function add_rank_item(name, score) {
            const rank_item = document.createElement('li')
            rank_item.classList.add('rank_item')
            rank_list.appendChild(rank_item)
            const rank_name = document.createElement('div')
            rank_name.classList.add('rank_name')
            rank_name.textContent = name
            rank_item.appendChild(rank_name)
            const rank_score = document.createElement('div')
            rank_score.classList.add('rank_score')
            rank_score.textContent = score
            rank_item.appendChild(rank_score)
        }
        for (let i = 0; i < rank_data.length; i++) {
            add_rank_item(rank_data[i].name, rank_data[i].score)
        }

        //关闭排行榜
        await sleep(200)
        document.body.addEventListener('click', function (e) {
            if (!rank_box.contains(e.target)) {
                rank_box.remove()
            }
        })


    }


    //插入对应css/js文件
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = `game_style/${name}.css`
    document.head.appendChild(link)
    const script = document.createElement('script')
    script.src = `script/${name}.js`
    document.body.appendChild(script)
})()