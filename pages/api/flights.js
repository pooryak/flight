import axios from 'axios';

const availableFlights = (req, res) => {
    if (req.method !== 'POST') {
        res.status(400).send({ message: 'Only POST requests allowed' });
        return;
    }
    const { body } = req;
    axios.post('https://ws.alibaba.ir/api/v1/flights/domestic/available', {
        adult: 1, // this value doesn't need be changed
        child: 0, // this value doesn't need be changed
        infant: 0, // this value doesn't need be changed
        type: 'oneWay', // this value doesn't need be changed
        origin: body.origin,
        destination: body.destination,
        departureDate: body.date,
    })
        .then((response) => {
            console.log("🚀 ~ file: flights.js ~ line 19 ~ .then ~ response", response)
            const { requestId } = response.data.result;
            axios.get(`https://ws.alibaba.ir/api/v1/flights/domestic/available/${requestId}`)
                .then((secondResponse) => {
                    res.status(200).json({ departing: secondResponse.data.result.departing });
                })
                .catch((err) => {
                    console.log('🚀 ~ file: flights.js ~ line 34 ~ .then ~ err', err);
                    res.status(400).send({ message: err });
                    // throw new Error('BROKEN');
                });
        })
        .catch((err) => {
            console.log('🚀 ~ file: flights.js ~ line 40 ~ availableFlights ~ err', err);
            res.status(400).send({ message: err });
        });
};
export default availableFlights;
