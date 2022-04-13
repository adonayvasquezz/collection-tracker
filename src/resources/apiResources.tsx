
const API_URL = 'http://127.0.0.1:8000/';

export const apiResources = async (method = 'GET', endpoint:string) => {

    const requestOptions = {
        method: method,
        headers: { 'Content-Type': 'application/json' }
    }
    let res;
    
    try {
        let response = await fetch(`${API_URL}${endpoint}`, requestOptions);
        res = await response.json();
        return res
    } catch (error) {
        console.error('Error: ', error);
        res = error;
    }

    return res;
}