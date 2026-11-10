const api_url = "https://dummyjson.com"

export const getTodos = async () => {
    const response = await fetch(`${api_url}/todos`)

    if (!response.ok) {
        throw new Error("Failed to fetch")
    }

    const result = await response.json()

    return result.todos
}