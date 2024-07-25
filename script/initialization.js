
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
        function add_control(name, text) {
            const controls = document.querySelector('.controls')
            const control = document.createElement('li')
            control.classList.add(`control_${name}`)
            control.textContent = text
            controls.appendChild(control)
            control.addEventListener('click', function () {
                this.classList.contains(`${name}_off`) ? this.classList.remove(`${name}_off`) : this.classList.add(`${name}_off`)
            })
        }
        //暗夜模式切换
        const dark = add_control('dark_mode', '深色')
        document.querySelector('.control_dark_mode').addEventListener('click', function () {
            this.classList.contains('dark_mode_off') ? document.querySelector('.game_box').classList.add('dark_mode_on') : document.querySelector('.game_box').classList.remove('dark_mode_on')
        })
        //声音开关
        const sound = add_control('sound_on', '声音')
        //返回按钮
        const back = add_control('back', '返回')
        document.querySelector('.control_back').addEventListener('click', function () {
            window.history.back()
        })
        //开挂按钮
        const exit = add_control('exit', '开挂')
        document.querySelector('.control_exit').addEventListener('click', function () {
            myMarkNum = 999
            document.querySelector('.mark').textContent = `分数：${myMarkNum}`
        })
    }
    add_li()


    //插入对应css/js文件
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = `game_style/${name}.css`
    document.head.appendChild(link)
    const script = document.createElement('script')
    script.src = `script/${name}.js`
    document.body.appendChild(script)
})()
