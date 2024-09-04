
export function madeTitle() {
    const times = new Date().toLocaleTimeString()
    return times
}

export async function randomGetName() {
    try {
        function onloadImg(imgsUrl, index = 0){
            if(index >= imgsUrl.length) return
        
            const img = new Image()
            img.src = `../image/${imgsUrl[index]}`
        
            img.onload = () => {
                onloadImg(imgsUrl, index + 1)
            }

            img.onerror = () => {
                console.log(img.src + '获取失败')
            }
        }
        
        const response = await fetch('../data/people.json')
        const data = await response.json()
        const randomNum = Math.floor(Math.random() * data.people.length)
        const imgs =  []
        
        data.people.forEach(img => {
            imgs.push(img.image)    
        })

        onloadImg(imgs)

        return data.people[randomNum]
    } catch (error) {
        console.error('Error fetching or processing data:', error)
        throw error
    }
}
