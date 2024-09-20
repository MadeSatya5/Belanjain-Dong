import axios from 'axios';

export const getProducts = (callBack) => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
        callBack(res.data);
    });
};