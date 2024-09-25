

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
                                        }
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
                                    text: '激情game',
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
                                                    label: 'span',
                                                    text: '开始游戏',
                                                }
                                            ],
                                        },
                                        {
                                            name: 'xxitem2_li',
                                            label: 'li',
                                            text: '模拟战争(策略)',
                                            moremain: [
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
                                                    label: 'span',
                                                    text: '开始游戏',
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
                    text: 'div',
                }
            ],
        })
    }

    createHeader()
})();

(function (){

    const itemArr = document.querySelectorAll('.header [class^=item]')
    const itemUrl = ['../assets/clickname/index.html', '../assets/games/index.html']
    console.log(itemArr)
    itemArr.forEach((box, index) => {
        box.addEventListener('click', () => location.href = itemUrl[index])
    })
})()