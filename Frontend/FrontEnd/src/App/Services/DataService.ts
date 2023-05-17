import axios, { isCancel, AxiosError } from 'axios';

const BaseURL = "http://localhost:5000/api/v1/";

type Response = {
    data: any;
    status: {
        isError: boolean;
        statusCode: string;
        statusText: string;
    }
}

async function GetData(url: string, inputData: string = "") {
    var res: Response = { data: [], status: { isError: false, statusCode: "", statusText: "" } };
    try {
        let response = await axios.get(BaseURL + url + inputData)
        res.data = response.data;
        res.status = {
            isError: false,
            statusCode: response.status.toString(),
            statusText: response.statusText,
        }
    } catch (err: any) {
        res.status = {
            isError: true,
            statusCode: err.code,
            statusText: err.message,
        }
    }

    return res
}

async function PostData(url: any, inputData = {}) {
    var res: Response = { data: [], status: { isError: false, statusCode: "", statusText: "" } };

    try {
        let response = await axios.post(BaseURL + url, inputData)
        res.data = response.data;
        res.status = {
            isError: false,
            statusCode: response.status.toString(),
            statusText: response.statusText,
        }
    } catch (err: any) {
        res.status = {
            isError: true,
            statusCode: err.code,
            statusText: err.message,
        }
    }
    return res
}

export default { GetData, PostData }