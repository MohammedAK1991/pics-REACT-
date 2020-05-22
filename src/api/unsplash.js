import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
          'Client-ID dS5eABsdXxYSaKvrkWUQ0M--dLPJxjv_QQOz1B6_zfA'
    }  
});

