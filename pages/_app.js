import '../styles/normalize.css';
import axios from 'axios';
import constants from '../constants';
import '../styles/globals.css';

const instance = axios.create({
    baseURL: constants.baseUrl,
    timeout: constants.timeout,
    responseType: 'application/json',
    headers: {
        Accept: constants.Accept,
        'Access-Control-Allow-Origin': '*',
        'Accept-Language': constants['Accept-Language'],
        'Content-Type': constants['Content-Type'],
    },
});

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
