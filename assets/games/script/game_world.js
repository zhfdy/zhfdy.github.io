

(function () {
    const game_box = document.querySelector(".game_box")

    //初始化NPC属性
    const NPC = [
        {
            name: '鹿',
            hp: 100,
            attack: 2,
        },
        {
            name: '狼',
            hp: 100,
            attack: 5,
        },
        {
            name: '牛',
            hp: 100,
            attack: 4,
        }
    ]
    
    //初始化地图
    function createMap() {
        const game_world = document.createElement("div")
        game_world.classList.add("game_world")
        game_box.appendChild(game_world)

        const game_map = document.createElement("div")
        game_map.classList.add("game_map")
        game_world.appendChild(game_map)


        game_map.addEventListener("click", function () {
            this.classList.add("game_map_open")
            create_map()
        })

        function create_map() {
            const game_map_open_box = document.createElement("div")
            game_map_open_box.classList.add("game_map_open_box")
            game_map.appendChild(game_map_open_box)
            for (let i = 0; i < 10; i++) {
                const row = document.createElement("div")
                row.classList.add("game_map_row")
                game_map.appendChild(row)
                for (let j = 0; j < 10; j++) {
                    const cell = document.createElement("div")
                    cell.classList.add("game_map_cell")
                    cell.dataset.x = i
                    cell.dataset.y = j
                    row.appendChild(cell)
                }
            }
        }


        document.addEventListener("click", e => {
            if (e.target !== game_map && game_map.classList.contains("game_map_open")) {
                game_map.classList.remove("game_map_open")
            }
        })
    }


})()