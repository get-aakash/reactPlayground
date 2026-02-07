export const  fetchUser = async()=>{
    const url = `https://jsonplaceholder.typicode.com/users`
    try {
        const response = await fetch(url)
        if(response.ok){
            const data = await response.json()
            return data

        }
        
        
        
    } catch (error) {
        console.log(error)
        return null
        
    }
}