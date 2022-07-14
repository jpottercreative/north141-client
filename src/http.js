import axios from 'axios'
const token = process.env.REACT_APP_TOKEN
export default axios.create({
    baseURL: "https://api.north141.com/",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
})