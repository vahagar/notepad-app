import axios from 'axios';

const host = 'https://api.github.com';


const apiCall = async (url, method = 'GET', params) => {
    const postUrl = host + url;
    // const authorizationToken = localStorage.getItem('access_token');
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };
    // const body = JSON.stringify({
    //     'client_id': '(API KEY)',
    //     'client_secret': '(API SECRET)',
    //     'grant_type': 'client_credentials'
    // })
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
