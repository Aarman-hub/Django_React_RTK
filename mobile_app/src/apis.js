import axios from 'axios';

const callApi = async (method, path, data, jwt, params = {})=>{
    const headers = {
        Authorization: `Bearer ${jwt}`,
        "Content-Type":"application/json"
    };
    const baseUrl = "http://127.0.0.1:8000/api/v1" ||"http://localhost:8000/api/";
}