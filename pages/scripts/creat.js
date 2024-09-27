

class Creat {
    constructor(demo) {
        const { name, label, text, styles, main } = demo

        const box = document.createElement(label)
        if (name) box.classList.add(name)
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
                main.map(({ name, label, text, src, moremain }) => {
                    const mainBox = document.createElement(label)

                    if (name) mainBox.classList.add(name)
                    if (text) mainBox.textContent = text
                    if (src) mainBox.src = src

                    bigBox.appendChild(mainBox)

                    if (moremain) createMain(moremain, mainBox)
                })
            }
            createMain(main, box)
        }

    }
}

