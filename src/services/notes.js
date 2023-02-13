export default class {
    static async getNotes (){
        let response = await fetch('http://localhost:8082/getNotes')
        let data = await response.json()
        return data
    }
}