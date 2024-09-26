
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
        const dark = add_control('dark_mode', 'Dark', true)
        document.querySelector('.control_dark_mode').addEventListener('click', function () {
            document.querySelector('.game_box').classList.toggle('dark_mode_on')
        })
        //排行榜按钮
        const rank = add_control('rank', 'Top', false)
        document.querySelector('.control_rank').addEventListener('click', function () {
            add_rank()
        })
        //返回按钮
        const back = add_control('back', 'Back', false)
        document.querySelector('.control_back').addEventListener('click', function () {
            window.history.back()
        })
        //难度按钮
        const exit = add_control('exit', 'Exit', false)
        document.querySelector('.control_exit').addEventListener('click', function () {
            if (document.querySelector('.exit_box')) {
                document.querySelector('.exit_box').style.display = 'block'
            }
            else {
                add_exit()
            }
        })

    }
    add_li()

    //分数显示
    function add_score() {
        const markBox = document.createElement('div')
        markBox.classList.add('mark')
        document.querySelector('.game_box').appendChild(markBox)
        markBox.textContent = `分数：${myMarkNum}`
    }
    add_score()

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
            {
                name: '蔡徐坤',
                score: Math.floor(Math.random() * 10) + 150,
                imgSrc: 'https://img1.baidu.com/it/u=3008281021,2453276485&fm=253&fmt=auto&app=138&f=JPG?w=640&h=356'
            },
            {
                name: '科比·布莱恩特',
                score: Math.floor(Math.random() * 8) + 140,
                imgSrc: 'https://t8.baidu.com/it/u=3894000300,3600234868&fm=3031&app=3031&size=f242,150&n=0&f=JPEG&fmt=auto?s=F23836C61861C4DE3B282F2D0300A0D4&sec=1724000400&t=cf592aab429898ab092dd5ab0d300d1e5'
            },
            {
                name: '原神',
                score: Math.floor(Math.random() * 6) + 130,
                imgSrc: 'https://gimg3.baidu.com/game/src=https%3A%2F%2Fgp-open-platform.cdn.bcebos.com%2F204404240746%2F1ba8ab3eaca54dc83ed462ab47e4836a%2Fgp-open-platform%2Fupload%2Ffile%2Fimg%2Fe8e87d4e7a755b4b43cdfdb94d2fcb36.jpg&refer=http%3A%2F%2Fwww.baidu.com&app=2014&size=w256&n=0&g=0n&q=100&fmt=auto?sec=1724000400&t=c0c668686b8c6d600715fe8536e9154b'
            },
            {
                name: '马嘉祺',
                score: 122,
                imgSrc: 'https://t13.baidu.com/it/u=3867567029,2759062773&fm=251&app=136&size=f242,150&n=0&f=JPEG&fmt=auto?s=B9A2CA11DD665215648C20980300C022&sec=1724000400&t=547cd9903129e9ddb3db7e2a60bcdb33'
            },
            {
                name: '吴亦凡',
                score: 104,
                imgSrc: 'https://img2.baidu.com/it/u=3942921230,2898141367&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1724000400&t=db0a3d8e2f329d3cd6e9b02259474466'
            },
            {
                name: '罗志祥',
                score: 101,
                imgSrc: 'https://t9.baidu.com/it/u=984574465,2240976830&fm=217&app=126&size=f242,150&n=0&f=GIF?s=A2A3D50748524ED840AD453603003043&sec=1724000400&t=65d2da9cec2242aac940d69217ebbab7'
            },
            {
                name: '曹操',
                score: 90,
                imgSrc: 'https://gimg4.baidu.com/poster/src=http%3A%2F%2Ft13.baidu.com%2Fit%2Fu%3D1752447772%2C1529822101%26fm%3D225%26app%3D113%26f%3DJPEG%3Fw%3D440%26h%3D330%26s%3DF67B7DCADAE9AB7454EC4C120100E0C2&refer=http%3A%2F%2Fwww.baidu.com&app=2004&size=f242,182&n=0&g=0n&q=100?sec=1723915559&t=689ee1cd86147bece58ce7507956ab09'
            },
            {
                name: '乔碧萝',
                score: 88,
                imgSrc: 'https://t7.baidu.com/it/u=4009167069,1215912771&fm=217&app=126&size=f242,150&n=0&f=JPEG&fmt=auto?s=FAD2A0099847F2CC44B06CB303008004&sec=1724000400&t=5552f762f05dacabc51c81590df35b93'
            },
            {
                name: '蔡徐坤女粉1',
                score: 84,
                imgSrc: 'https://img2.baidu.com/it/u=3861723532,3176837490&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1724000400&t=8145c89fb1c610003968aadf9a1296c8'
            },
            {
                name: '菜需捆',
                score: 78,
                imgSrc: 'https://t9.baidu.com/it/u=2225208298,2708832196&fm=3031&app=3031&size=f242,150&n=0&f=JPEG&fmt=auto?s=4306DC085A02075D5CD1711D0300F0C0&sec=1724000400&t=a53e2ba147de7c6089241dd74f65763a'
            },
            {
                name: '罗翔',
                score: 66,
                imgSrc: 'https://t7.baidu.com/it/u=4224163000,1708958018&fm=3031&app=3031&size=f242,150&n=0&f=JPEG&fmt=auto?s=8F21F0044C53A4D40120F5800300309D&sec=1724000400&t=71130eb6be1b99b768e18ca5328fc9c3'
            },
            {
                name: '蔡徐坤女粉3',
                score: 54,
                imgSrc: 'https://img0.baidu.com/it/u=1844111227,3488174992&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500'
            },
            {
                name: '修勾',
                score: 48,
                imgSrc: 'https://img2.baidu.com/it/u=3034843010,3237382181&fm=253&fmt=auto?w=1126&h=800'
            },
            {
                name: '鸽鸽',
                score: 47,
                imgSrc: 'https://img2.baidu.com/it/u=2112206692,2072419980&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1724000400&t=c4af794168f1c495724bcc815fcdb7d0'
            }, {
                name: '帅逼作者',
                score: 999,
                imgSrc: 'https://img2.baidu.com/it/u=772151522,1039770876&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1724000400&t=7d87b65bb48c202da3a05d72bb04244a'
            },

            {
                name: '我',
                score: myMarkNum,
                imgSrc: 'https://img1.baidu.com/it/u=1211083176,2606397773&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1724000400&t=8ded41c0d2c2f6b9dd9ae7d6a66fd618'
            }
        ]
        function add_rank_item(top, name, score, imgSrc) {
            const rank_item = document.createElement('li')
            rank_item.classList.add('rank_item')
            rank_list.appendChild(rank_item)

            const rank_top = document.createElement('div')
            rank_top.classList.add('rank_top')
            rank_top.textContent = top
            rank_item.appendChild(rank_top)

            const rank_img = document.createElement('div')
            rank_img.classList.add('rank_img')
            rank_item.appendChild(rank_img)
            const rank_img_img = document.createElement('div')
            rank_img_img.classList.add('rank_img_img')
            rank_img_img.style.backgroundImage = `url(${imgSrc})`
            rank_img.appendChild(rank_img_img)

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
            add_rank_item(`Top${i + 1}`, rank_data[i].name, rank_data[i].score, rank_data[i].imgSrc)
        }

        sleep(100).then(() => {
            document.body.addEventListener('click', function (e) {
                if (!rank_box.contains(e.target)) {
                    rank_box.remove()
                }
            })
        })
    }

    //添加难度选择
    function add_exit() {
        const exit_box = document.createElement('div')
        exit_box.classList.add('exit_box')
        document.querySelector('.game_box').appendChild(exit_box)

        const exit_title = document.createElement('div')
        exit_title.classList.add('exit_title')
        exit_title.textContent = '难度选择'
        exit_box.appendChild(exit_title)

        const exit_list = document.createElement('ul')
        exit_list.classList.add('exit_list')
        exit_box.appendChild(exit_list)

        const exit_ = [
            { name: '简单', value: 1 },
            { name: '中等', value: 2 },
            { name: '困难', value: 3 },
            { name: '噩梦', value: 4 }
        ]

        const exit_item = exit_.map(item => {
            const { name, value } = item
            return `<li class="exit_item" data-value="${value}">${name}</li>`
        }).join('')

        exit_list.innerHTML = exit_item

        document.querySelectorAll('.exit_item')[1].style.backgroundColor = 'var(--value2-color)'

        const exit_li = document.querySelectorAll('.exit_item')
        exit_li.forEach(item => {
            item.addEventListener('click', function (e) {
                const value = e.target.dataset.value
                createAlert('提示', '当前难度为' + value + '级', 'info')
                exit_li.forEach(item => item.style.backgroundColor = '')
                e.target.style.backgroundColor = `var(--value${value}-color)`
                exit_box.style.display = 'none'
            })
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
