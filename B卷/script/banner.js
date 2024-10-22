import { sleep } from "./api.js"

export default function banner() {
    if (!(document.querySelector('.banner'))) return
    const BANNERIMG = [
        'https://img0.baidu.com/it/u=386292396,822785074&fm=253&fmt=auto&app=138&f=JPEG?w=906&h=800'
        , 'https://gd-hbimg.huaban.com/4e4342b09fd9419a4e7e27bff3d74bcccf73c12e9a44e-kFjq7F_fw658webp'
        , 'https://img0.baidu.com/it/u=3552784303,1971606926&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1729616400&t=83a6de5b1b9f88b83c62c369d7154125'
        , 'https://img1.baidu.com/it/u=3993632632,1902351716&fm=253&fmt=auto&app=120&f=PNG?w=835&h=500'
    ]

    const banner_img = document.querySelector('.banner_img')
    const banner_img_img = banner_img.querySelector('img')
    const banner_li = document.querySelectorAll('.banner li')
    if (!(document.querySelector('.banner_active'))) {
        banner_li[0].classList.add('banner_active')
    }

    let timer = setInterval(banner_auto, 3000)
    async function banner_auto() {
        if (!(document.querySelector('.banner'))) return
        let index = document.querySelector('.banner_active').getAttribute('data')
        index++
        if (index === BANNERIMG.length) index = 0
        clearClass()

        banner_li[index].classList.add('banner_active')
        await banner_change(index)
    }

    function clearClass() {
        document.querySelector('.banner_active').classList.remove('banner_active')
    }
    async function banner_change(index) {
        banner_img.classList.add('banner_img_animate')
        await sleep(100)
        banner_img_img.src = BANNERIMG[index]
        await sleep(100)
        banner_img.classList.remove('banner_img_animate')
    }

    function cleaerTimer() {
        clearInterval(timer)
        timer = setInterval(banner_auto, 3000)
    }
    function banner_click() {
        banner_li.forEach((item, index) => {
            item.addEventListener('click', () => {
                cleaerTimer()
                clearClass()
                item.classList.add('banner_active')
                banner_change(index)
            })
        })
    }
    banner_click()

    function banner_touch() {
        const banner= document.querySelector('.banner')
        const banner_left = document.querySelector('.banner_left')
        const banner_right = document.querySelector('.banner_right')
        banner.addEventListener('mouseenter', e => {
            e.stopPropagation()
            banner_left.classList.add('banner_show')
            banner_right.classList.add('banner_show')
        })
        banner.addEventListener('mouseleave', e => {
            e.stopPropagation()
            banner_left.classList.remove('banner_show')
            banner_right.classList.remove('banner_show')
        })
        banner_left.addEventListener('click', e => {
            e.stopPropagation()
            let index = document.querySelector('.banner_active').getAttribute('data')
            index--
            if (index === -1) index = BANNERIMG.length - 1
            cleaerTimer()
            clearClass()
            banner_li[index].classList.add('banner_active')
            banner_change(index)
        })
        banner_right.addEventListener('click', e => {
            e.stopPropagation()
            let index = document.querySelector('.banner_active').getAttribute('data')
            index++
            if (index === BANNERIMG.length) index = 0
            cleaerTimer()
            clearClass()
            banner_li[index].classList.add('banner_active')
            banner_change(index)
        })
    }
    banner_touch()
}