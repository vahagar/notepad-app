import axios from 'axios';

const host = 'https://api.github.com';


const apiCall = async (url, method = 'get', params) => {
    const postUrl = host + url;
    // const authorizationToken = localStorage.getItem('access_token');
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'token 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',
    };
    // const body = JSON.stringify({
    //     'client_id': '(API KEY)',
    //     'client_secret': '(API SECRET)',
    //     'grant_type': 'client_credentials'
    // })
    try {
        const response = await axios({
            url: postUrl,
            method,
            headers,
            params
        });

        // if (method === requestMethods.delete) return response;
        return response?.data
    } catch (e) {
        console.log('error catch', e)
        return e
    }
};

export default apiCall;
