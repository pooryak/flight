import { useState } from 'react';
import axios from 'axios';
import { locations } from './location';

export const useApi = () => {
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const fetchData = (data) => {
        axios
            .post('/api/flights', data)
            .then((res) => {
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
        if (origin && destination && date) {
            setLoading(true);
            fetchData(data);
        }
    };
    return {
        response, loading, error, handleChange,
    };
};
