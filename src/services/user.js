const API_URL = 'https://jsonplaceholder.typicode.com/users/1';

const options = {
    headers: {
        'Content-Type': 'application/json'
    },
};

export const getUser = async () => {
    const response = await fetch(API_URL, options);
    const data = await response.json();
    return data;
};

export const login = () => { };