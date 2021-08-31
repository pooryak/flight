// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

const availableFlights = async (req, res) => {
    if (req.method !== 'POST') {
        res.status(400).send({ message: 'Only POST requests allowed' });
        return;
    }
    const { body } = req;
    const result = await axios.post('https://ws.alibaba.ir/api/v1/flights/domestic/available', {
        adult: 1, // this value doesn't need be changed
        child: 0, // this value doesn't need be changed
        infant: 0, // this value doesn't need be changed
        type: 'oneWay', // this value doesn't need be changed
        origin: body.origin,
        destination: body.destination,
        departureDate: body.date,
    });
    if (result.status === 200) {
        const { requestId } = result.data.result;
        const flights = await axios.get(`https://ws.alibaba.ir/api/v1/flights/domestic/available/${requestId}`);
        console.log('🚀 ~ file: hello.js ~ line 22 ~ availableFlights ~ flights', flights);
        return res.status(flights.status).json({ departing: flights.data.result.departing });
        // console.log('🚀 ~ file: hello.js ~ line 24 ~ availableFlights ~ flights', flights);
    }
    // console.log('🚀 ~ file: hello.js ~ line 21 ~ availableFlights ~ result', result);
    // res.status(200).json({ name: 'John Doe' });
};
export default availableFlights;
// export default function handler(req, res) {
//     res.status(200).json({ name: 'John Doe' });
// }
