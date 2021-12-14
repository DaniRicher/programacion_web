import axios from "axios";

export default axios.create({
    baseURL: /*"http://localhost:8000/api/v1",*/process.env.REACT_APP_ENDPOINT,
    headers:{
        "Content-type":"application/json"
    }
})