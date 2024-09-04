
export function madeTitle() {
    const times = new Date().toLocaleTimeString()
    return times
}

export async function randomGetName() {
    try {
        const response = await fetch('../data/people.json')
        const data = await response.json()
        const randomNum = Math.floor(Math.random() * data.people.length)
        return data.people[randomNum]
    } catch (error) {
        console.error('Error fetching or processing data:', error)
        throw error
    }
}
