

class Creat {
    constructor(demo) {
        const { name, label, text, styles, main } = demo
        this.name = demo.name
        this.label = demo.label
        this.text = demo.text
        this.style = demo.style
        this.main = demo.main

        const box = document.createElement(label)
        const demoClassName = `${name}`
        box.classList.add(demoClassName)

        if (text) box.textContent = text
        document.body.appendChild(box)

        if (styles) {
            switch (styles) {
                case 'white_space':
                    box.classList.add('white_space')
                    break
                case 'black_space':
                    box.classList.add('black_space')
                    break
                case 'grey_space':
                    box.classList.add('grey_space')
                    break
                case 'blue_space':
                    box.classList.add('blue_space')
                    break
                case 'gradient_space':
                    box.classList.add('gradient_space')
                    break
                case 'best_space':
                    box.classList.add('best_space')
                    break
                default:
                    break
            }
        }

        if (main) {
            function createMain(main, bigBox) {
                if (!(Array.isArray(main))) return
                main.map(({ name, label, text, moremain }) => {
                    const mainBox = document.createElement(label)

                    let mainClassName = `${name}`
                    mainBox.classList.add(mainClassName)

                    if (text) mainBox.textContent = text
                    bigBox.appendChild(mainBox)

                    if (moremain) createMain(moremain, mainBox)
                })
            }
            createMain(main, box)
        }

    }
}

