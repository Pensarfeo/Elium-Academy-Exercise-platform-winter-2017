const loadState = () => {
    try{
        const serializedState = localStorage.getItem('state')
        if (serializedState === null){
            return undefined
        }
        console.log()
        return JSON.parse(serializedState)
    } catch (err){
        console.log(err)
        return undefined
    }
}

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch(err){
        console.log(err)
        /// you can load errors
    }
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const fetchProfiles = () => (delay(500).then( () => { return ((loadState() || {}).profiles || []) }))

export default fetchProfiles