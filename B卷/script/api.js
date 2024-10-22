export default async function get(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data.data
    } catch (error) {
        throw error
    }
}

export async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
