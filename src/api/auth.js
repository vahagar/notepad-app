import axios from 'axios';

const authCall = async (url, method = 'GET', params) => {
    // const authorizationToken = localStorage.getItem('access_token');
    const headers = {
        'Content-Type': 'application/json',
        // 'Authorization': 'token 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',
    };

    const options = {
        url: url,
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

export default authCall;
