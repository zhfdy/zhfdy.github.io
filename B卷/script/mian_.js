import Creat from "./creat.js"

export const sy = new Creat({
    name: 'sy',
    sons: [
        {
            name: 'banner',
            sons: [
                {
                    name: 'banner_img',
                    sons: [
                        {
                            name: 'banner_img_1',
                            label: 'img',
                            value: {
                                src: 'https://img0.baidu.com/it/u=386292396,822785074&fm=253&fmt=auto&app=138&f=JPEG?w=906&h=800'
                            }
                        },
                    ]
                },
                {
                    name: 'banner_left',
                    text: '<'
                },
                {
                    name: 'banner_right',
                    text: '>'
                },
                {
                    name: 'banner_list',
                    label: 'ul',
                    sons: [
                        {
                            name: 'banner_list_1',
                            label: 'li',
                            value: {
                                data: '0'
                            }
                        },
                        {
                            name: 'banner_list_2',
                            label: 'li',
                            value: {
                                data: '1'
                            }
                        },
                        {
                            name: 'banner_list_3',
                            label: 'li',
                            value: {
                                data: '2'
                            }
                        },
                        {
                            name: 'banner_list_4',
                            label: 'li',
                            value: {
                                data: '3'
                            }
                        },
                    ]
                }
            ]
        },
        {
            name: 'content',
            sons: [
                {
                    name: 'content_title',
                    text: '校园小课堂'
                },
                {
                    name: 'line',
                },
                {
                    name: 'content_list',
                    sons: [
                        {
                            name: '',
                            text: '每个学生都应该享有安全和支持性的学习环境中学习的权利，校园欺凌威胁了这一权利。'
                        },
                        {
                            name: '',
                            text: '要消除校园欺凌，我们需要提高意识，教育人们如何辨别和应对欺凌行为，并确保受害者得到支持。'
                        },
                        {
                            name: '',
                            text: '我们还可以倡导学生积极参与校园活动，增强学生的社会责任感，促进校园文明建设。'
                        },
                        {
                            name: '',
                            text: '我们还可以倡导学生积极参与校园活动，增强学生的社会责任感，促进校园文明建设。'
                        }
                    ]
                },
                {
                    name: 'content_title',
                    text: '杜绝校园暴力'
                },
                {
                    name: 'line',
                },
                {
                    name: 'content_sy_list',
                    sons: [
                        {
                            name: '',
                            label: 'img',
                            value: {
                                src: 'https://img2.baidu.com/it/u=4127667898,1276934308&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500'
                            }
                        },
                        {
                            name: '',
                            label: 'img',
                            value: {
                                src: 'https://img1.baidu.com/it/u=3396497894,1837118339&fm=253&fmt=auto&app=120&f=JPEG?w=1025&h=577'
                            }
                        },
                        {
                            name: '',
                            label: 'img',
                            value: {
                                src: 'https://img0.baidu.com/it/u=2977638155,3405623196&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500'
                            }
                        },
                        {
                            name: 'content_sy_list_btn',
                            sons: [
                                {
                                    text: '切换图片'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})

export const qzzx = new Creat({
    name: 'qzzx',
    sons: [
        {
            name: 'content',
            sons: [
                {
                    name: 'content_qzzx_list',
                    sons: [
                        {
                            name: '',
                            sons: [
                                {
                                    name: 'left',
                                    sons: [
                                        {
                                            label: 'img',
                                        }
                                    ]
                                },
                                {
                                    name: 'right',
                                    sons: [
                                        {
                                            name: 'title',
                                        },
                                        {
                                            name: 'text',
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: '',
                            sons: [
                                {
                                    name: 'left',
                                    sons: [
                                        {
                                            label: 'img',
                                        }
                                    ]
                                },
                                {
                                    name: 'right',
                                    sons: [
                                        {
                                            name: 'title',
                                        },
                                        {
                                            name: 'text',
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: '',
                            sons: [
                                {
                                    name: 'left',
                                    sons: [
                                        {
                                            label: 'img',
                                        }
                                    ]
                                },
                                {
                                    name: 'right',
                                    sons: [
                                        {
                                            name: 'title',
                                        },
                                        {
                                            name: 'text',
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})
export const xxdt = new Creat({
    name: 'xxdt',
    sons: [
        {
            name: 'search',
            sons: [
                {
                    name: 'search_input',
                    label: 'input',
                    value: {
                        placeholder: '没用的搜索框'
                    }
                },
                {
                    name: 'search_btn',
                    text: '搜索'
                }
            ]
        },
        {
            name: 'search_list',
        }
    ]
})
export const jjfa = new Creat({
    name: 'jjfa',
    sons: [
        {
            name: 'content',
            sons: [
                {
                    name: 'content_jjfa_title',
                    text: '孩子在学校被同学欺凌了怎么办？这四种方法教会你解决问题'
                },
                {
                    name: 'content_jjfa_list',
                },
            ]
        },
        {
            name: 'title',
            text: '江南反校园欺凌宣传网解决方案'
        },
        {
            name: 'btn',
            text: '查看更多'
        }
    ]
})
export const ly = new Creat({
    name: 'ly',
    sons: [
        {
            name: '',
        },
        {
            name: '',
        }
    ]
})