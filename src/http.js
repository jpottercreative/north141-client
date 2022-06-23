import axios from 'axios'
const token = "b57b98df9935b81e42158ebbfe0bd282d75d8be71881be7c3d8ac79da2d8be7778e46717fc02aaed86b22067b80a4c3e785242d1fd130ea85ffc7f24db48756431d51a85cffbc606b30cfa1ded249374d59db1fbaf00639f50b21cd44da65406712ef3c0b4daa5ae16659df1c9351506a810d90bf23d55deaa7f09ef7d4e4319"
export default axios.create({
    baseURL: "https://api.north141.com/",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
})