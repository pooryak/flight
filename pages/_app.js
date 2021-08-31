/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import '../styles/normalize.css';
import '../styles/theme.css';
import axios from 'axios';
import constants from '../constants';
import '../styles/globals.css';

axios.create({
    // baseURL: constants.baseUrl,
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
