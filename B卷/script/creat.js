export default class Creat {
    constructor({ name, label, text, value, sons }) {
        this.box = document.createElement(label || 'div')
        name ? this.box.classList.add(name) : ''
        this.box.innerHTML = text || ''
        if (value) {
            for (let key in value) {
                this.box.setAttribute(key, value[key])
            }
        }
        if (sons instanceof Array) {
            sons.forEach(({ name, label, text, value, sons }) => {
                this.box.appendChild(new Creat({ name, label, text, value, sons }).box)
            })
        }
    }
    into(where) {
        document.querySelector(where).appendChild(this.box)
    }
}