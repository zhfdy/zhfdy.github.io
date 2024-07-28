    //初始化分数
    let myMarkNum = 0
    const mark = localStorage.getItem('myMark')
    if (mark) {
        myMarkNum = mark
    } else {
        myMarkNum = 0
    }

    //存储分数
    function saveMark(value) {
        localStorage.setItem(mark, value)
    }

    
    //延迟函数
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    //创建类似bootstrap的提示框弹窗

    function createAlert(title, content) {
        const alertBox = document.createElement('div')
        alertBox.className = 'alert alert-success'
        alertBox.innerHTML = `
            <strong>${title}</strong> ${content}
        `
        document.body.appendChild(alertBox)
        setTimeout(() => {
            alertBox.remove()
        }, 5000)
    }

    //监控分数变化