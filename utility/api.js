import { useState } from 'react';
import axios from 'axios';
import { locations } from './location';

let source;

export const useApi = () => {
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const fetchData = (data) => {
        if (source) {
            source.cancel();
        }
        const { CancelToken } = axios;
        source = CancelToken.source();
        axios
            .post('/api/flights', data, {
                // abort previous call
                cancelToken: source.token,
            })
            .then((res) => {
                setError('');
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    const handleChange = async (e) => {
        const { origin, destination, date } = locations(e.target.value);
        const data = {
            origin,
            destination,
            date,
        };
        if (origin && destination && date && date !== 'Invalid Date') {
            setResponse([]);
            setLoading(true);
            fetchData(data);
        } else {
            setResponse([]);
        }
    };
    return {
        response, loading, error, handleChange,
    };
};
