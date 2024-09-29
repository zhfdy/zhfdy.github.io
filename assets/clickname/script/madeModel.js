
export default class MadeModel {
    constructor(header) {
        this.box = document.createElement('div')
        this.box.className = 'model'
        this.header = document.createElement('h2')
        this.header.textContent = header
        this.text = document.createElement('textarea')
        this.text.className = 'model_text'
        this.textider = document.createElement('label')
        this.textider.textContent = '导入名字用空格、逗号或换行符进行分割！'
        this.addBtn = document.createElement('span')
        this.addBtn.className = 'model_add'
        this.addBtn.textContent = '导入'
        this.close = document.createElement('span')
        this.close.className = 'model_close'
        this.close.textContent = '取消'
        this.box.appendChild(this.header)
        this.box.appendChild(this.text)
        this.box.appendChild(this.textider)
        this.box.appendChild(this.addBtn)
        this.box.appendChild(this.close)
        document.body.appendChild(this.box)

        this.mask = document.createElement('div')
        this.mask.className ='mask'
        document.body.appendChild(this.mask)

        this.into()
    }

    closeModel() {
        this.box.remove()
        this.mask.remove()
    }

    into() {
        this.close.addEventListener('click', () => {
            this.closeModel()
        })
    }
}