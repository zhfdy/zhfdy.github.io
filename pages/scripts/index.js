

(function () {
    const body = document.body

    const creatCss = document.createElement('link')
    creatCss.rel = 'stylesheet'
    creatCss.href = './styles/creat.css'
    body.appendChild(creatCss)

    function createHeader() {
        const header = new Creat({
            name: 'header',
            label: 'div',
            styles: 'white_space',
            main: [
                {
                    name: 'item1',
                    label: 'div',
                    moremain: [
                        {
                            name: 'xitem1',
                            label: 'h2',
                            text: 'click me',
                        },
                        {
                            name: 'xitem2',
                            label: 'div',
                            moremain: [
                                {
                                    name: 'xxitem1',
                                    label: 'p',
                                    text: '点名系统',
                                },
                                {
                                    name: 'xxitem2',
                                    label: 'p',
                                    text: '(23级5班名单)',
                                },
                                {
                                    name: 'xxitem3',
                                    label: 'p',
                                    moremain: [
                                        {
                                            name: 'xxitem3_button',
                                            label: 'button',
                                            text: 'click',
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'item2',
                    label: 'div',
                    moremain: [
                        {
                            name: 'xitem1',
                            label: 'h2',
                            text: 'play games',
                        },
                        {
                            name: 'xitem2',
                            label: 'div',
                            moremain: [
                                {
                                    name: 'xxitem1',
                                    label: 'p',
                                    text: '娱乐游戏',
                                },
                                {
                                    name: 'xxitem2',
                                    label: 'ul',
                                    moremain: [
                                        {
                                            name: 'xxitem2_li',
                                            label: 'li',
                                            text: '激情贪吃蛇(休闲)',
                                            moremain: [
                                                {
                                                    label: 'img',
                                                    src: '../assets/games/images/body/snake.png',
                                                },
                                                {
                                                    label: 'span',
                                                    text: '开始游戏',
                                                },
                                            ],
                                        },
                                        {
                                            name: 'xxitem2_li',
                                            label: 'li',
                                            text: '模拟战争(策略)',
                                            moremain: [
                                                {
                                                    label: 'img',
                                                    src: '../assets/games/images/fight/fightIcon.png',
                                                },
                                                {
                                                    label: 'span',
                                                    text: '开始游戏',
                                                }
                                            ],
                                        },
                                        {
                                            name: 'xxitem2_li',
                                            label: 'li',
                                            text: '见缝插针(手速)',
                                            moremain: [
                                                {
                                                    label: 'img',
                                                    src: '../assets/games/images/clock/clockIcon.png',
                                                },
                                                {
                                                    label: 'span',
                                                    text: '开始游戏',
                                                }
                                            ],
                                        },
                                        {
                                            name: 'xxitem2_li',
                                            label: 'li',
                                            text: '更多游戏...',
                                            moremain: [
                                                {
                                                    label: 'img',
                                                    src: '../assets/games/images/add.png',
                                                },
                                                {
                                                    label: 'span',
                                                    text: '前往主页',
                                                }
                                            ],
                                        },
                                    ]
                                },
                            ]
                        }
                    ]
                },
                {
                    name: 'item3',
                    label: 'div',
                    moremain: [
                        {
                            name: 'xitem1',
                            label: 'h2',
                            text: 'about me',
                        },
                        {
                            name: 'xitem2',
                            label: 'div',
                            moremain: [
                                {
                                    name: 'xxitem1',
                                    label: 'p',
                                    text: '关于我',
                                },
                                {
                                    name: 'xxitem2',
                                    label: 'p',
                                    text: '',
                                },
                                {
                                    name: 'xxitem3',
                                    label: 'p',
                                    moremain: [
                                        {
                                            name: 'xxitem3_',
                                            label: 'i',
                                            text: '了解更多',
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
        })
    }

    createHeader()
})();

(function (){

    const itemArr = document.querySelectorAll('.header [class^=item]')
    const itemUrl = ['../assets/clickname/index.html', '../assets/games/index.html', '../assets/about/index.html']
    itemArr.forEach((box, index) => {
        box.addEventListener('click', () => location.href = itemUrl[index])
    })
})()