import { CollectionForm } from "../interfaces/collection";

const API_URL = 'http://127.0.0.1:8000/';
const COLLECTION = 'tracker'; //API endpoint

export const apiGetAll = async (method = 'GET', endpoint:string) => {
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

export const apiPostCollection = async (data: CollectionForm) => {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    }
    try {
        let response = await fetch(`${API_URL}${COLLECTION}`, requestOptions);
        let data = await response.json();
        return data; 
    } catch (error) {
        console.error('Error: ',error);
    }
}

export const apiPutCollection = async (data: CollectionForm, id:string) => {
 
    const requestOptions = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json'}
    }
    try {
        let response = await fetch(`${API_URL}${COLLECTION}/${id}`, requestOptions);
        let dataRes = await response.json();
        return dataRes;
    } catch (error) {
        console.error('Error: ',error);
    }
}


export const apiDeleteCollection = async (id:string) => {
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    }
    try {
        let response = await fetch(`${API_URL}${COLLECTION}/${id}`, requestOptions);
        let res = await response.json();
        return res;
    } catch (error) {
        console.error('Error: ',error);
    }
}

