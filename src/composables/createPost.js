import { ref } from 'vue'

const createPost = (e) => {

    const error = ref(null)

    const load = async () => {
        try {
            // simulate delay
            await new Promise(resolve => {
                setTimeout(resolve, 2000)
            })

            await fetch('http://localhost:3000/posts/',{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(e)
            })
        }
        catch (err){
            error.value = err.message
            console.log(error.value)
        }
    }

    return { e, error, load }
}

export default createPost