import get from "./api.js"
import Creat from "./creat.js"

export default function messages() {
    document.addEventListener('click', e => {
        if (e.target.classList.contains('ly_add_btn')) {
            if (document.querySelector('.user')) return 
            const dom = new Creat({
                name: 'user',
                sons: [
                    {
                        name: 'user_title',
                        text: '留言板',
                    },
                    {
                        name: 'user_name',
                        sons: [
                            {
                                name: 'user_name_text',
                                text: '用户名'
                            },
                            {
                                name: 'user_name_input',
                                label: 'input',
                            }
                        ]
                    },
                    {
                        name: 'user_content',
                        sons: [
                            {
                                name: 'user_content_text',
                                text: '留言'
                            },
                            {
                                name: 'user_content_input',
                                label: 'textarea',
                            }
                        ]
                    },
                    {
                        name: 'user_btn',
                        text: '发送'
                    },
                    {
                        name: 'user_add',
                        sons: [
                            {
                                name: 'user_add_text',
                                text: '添加您的专属签名'
                            },
                            {
                                name: 'user_add_input',
                                label: 'textarea',
                            },
                            {
                                name: 'user_add_key',
                                sons: [
                                    {
                                        name: 'user_add_color',
                                        label: 'input',
                                        value: {
                                            type: 'color'
                                        }
                                    },
                                    {
                                        name: 'user_add_range',
                                        label: 'input',
                                        value: {
                                            type: 'range'
                                        }
                                    },
                                    {
                                        name: 'user_add_download',
                                        text: '下载'
                                    },
                                    {
                                        name: 'user_add_remove',
                                        text: '清空'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            })
            dom.into('.ly')
        }
    })
    document.addEventListener('click', e => {
        if (!(document.querySelector(".user"))) return
        if (!e.target.classList.contains('ly_add_btn') && !e.target.closest('.user')) {
            document.querySelector(".user").remove()
        }
    })

    if (!(document.querySelector(".content_ly_list"))) return
    if (document.querySelector(".content_ly_list").children.length) return
    get('http://ncyunhua.com:9090/api/schoolBullying/submitMessage')
        .then(data => {
            const list = document.querySelector('.content_ly_list')
            const dom = data.map(({name, message}) => {
                return `<div><p class="name">昵称：${name}</p><p class="message">留言：${message}</p></div>`
            }).join('')
            list.insertAdjacentHTML('afterbegin', dom)
        })
}