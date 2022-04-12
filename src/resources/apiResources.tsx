
const API_URL = 'http://127.0.0.1:8000/';

export const apiResources = async (method = 'GET', endpoint:string) => {

    const requestOptions = {
        method: method,
        headers: { 'Content-Type': 'application/json' }
    }
    
    try {
        let response = await fetch(`${API_URL}${endpoint}`, requestOptions);
        let data = await response.json();
        
        return data
    } catch (error) {
        console.error('Error: ', error);
    }
}