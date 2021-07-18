import axios from 'axios';

const authCall = async (url, method = 'GET', params) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
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
