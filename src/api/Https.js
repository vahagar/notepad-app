import axios from 'axios';

const host = 'https://api.github.com';


const apiCall = async (url, method = 'GET', params) => {
    const postUrl = host + url;
    const authorizationToken = localStorage.getItem('access_token');
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };
    if(authorizationToken){
        headers.Authorization = `token ${authorizationToken}`
    }

    const options = {
        url: postUrl,
        method,
        headers,
    }
    if(method === 'GET'){
        options.params = params
    } else {
        options.data = params
    }

    try {
        const response = await axios(options);

        if (method === 'DELETE') return response;
        return response?.data
    } catch (e) {
        console.log(e)
        return ({error: e})
    }
};

export default apiCall;
