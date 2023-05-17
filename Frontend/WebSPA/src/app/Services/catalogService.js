import axios, { isCancel, AxiosError } from 'axios';

const BaseURL = "http://localhost:5001/api/v1/";

async function getData(url, inputData = "") {
    var response = {};
    try {
        let res = await axios.get(BaseURL + url + inputData)
        response.data = res.data;
        response.returnCode = {
            isError: false,
            Code: res.status,
            Status: res.statusText,
            Description: res.statusText,
        }
        return response
    } catch (err) {
        response.returnCode = {
            isError: true,
            Code: err.status || err.code,
            Status: err.statusCode || err.code,
            Description: err.message,
        }
        return response
    }
}

async function postData(url, inputData = {}) {
    var response = {};
    try {
        let res = await axios.post(BaseURL + url, inputData)
        response.data = res.data;
        response.returnCode = {
            isError: false,
            Code: res.status,
            Status: res.statusText,
            Description: res.statusText,
        }
        return response
    } catch (err) {
        response.returnCode = {
            isError: true,
            Code: err.status || err.code,
            Status: err.statusCode || err.code,
            Description: err.message,
        }
        return response
    }
}

export default { getData }