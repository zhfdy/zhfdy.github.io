//初始化分数
myMarkNum = 0
const mark = localStorage.getItem('myMarkNum')
mark ? myMarkNum = mark : myMarkNum = 0

//存储分数
function saveMark(value) {
    localStorage.setItem(myMarkNum, value)
}

//更新分数
function updateMark(flag) {
    const markBox = document.querySelector('.mark')

    const markChangeText = document.createElement('span')
    markChangeText.classList.add('mark_change')
    document.querySelector('.mark').insertAdjacentElement('afterend', markChangeText)
    flag
        ? (myMarkNum++
            , markBox.textContent = `分数：${myMarkNum}`
            , markChangeText.textContent = '+1'
            , markChangeText.style.color = 'green')
        : (myMarkNum--
            , markBox.textContent = `分数：${myMarkNum}`
            , markChangeText.textContent = '-1'
            , markChangeText.style.color = 'red')
    setTimeout(() => markChangeText.remove(), 1500)
}


//延迟函数
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

//创建类似bootstrap的提示框弹窗

function createAlert(title, content, type) {
    const alertBox = document.createElement('div')
    if (type === 'danger') {
        alertBox.classList.add('alert', 'alert-danger')
    } else if (type ==='success') {
        alertBox.classList.add('alert', 'alert-success')
    } else if (type === 'info') {
        alertBox.classList.add('alert', 'alert-info')
    }
    alertBox.innerHTML = `
            <strong>${title}</strong> ${content}
        `
    document.body.appendChild(alertBox)
    setTimeout(() => {
        alertBox.remove()
    }, 5000)
}

//监控分数变化