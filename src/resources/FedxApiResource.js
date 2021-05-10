const FedxApiResource = module.exports;

const axios = require('axios');

const BASE_URL = 'https://fedx-backend.herokuapp.com/api/fedx';

FedxApiResource.getView = async (page = 'home', lang) => {
    const url = `${BASE_URL}/view?content=${page}`;

    const config = {
        headers: {
            lang
        }
    };

    try {
        const response = await axios.get(url, config);

        return response.data;
    } catch (error) {
        console.log('FedxApiResource.getView: fetch error', error);

        return {};
    }
};