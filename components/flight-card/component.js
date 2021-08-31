import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { diffDate, timeOfFlights } from '../../utility/date';
import style from './style.module.css';

function FlightCard(props) {
    const {
        arrivalDateTime, leaveDateTime, airlineName, destination, origin,
    } = props.data;
    const times = timeOfFlights(arrivalDateTime, leaveDateTime);
    const dates = diffDate(arrivalDateTime, leaveDateTime);
    return (
        <div className={style.container}>
            <div className={style.row}>
                <div>
                    {`${times.arrival.hours}:${times.arrival.minutes} - ${times.leave.hours}:${times.leave.minutes}`}
                </div>
                <div>
                    {airlineName}
                </div>
            </div>
            <div className={style.row}>
                <div>
                    {`${dates.hours} h ${dates.minutes} m`}
                </div>
                <div>
                    {`${origin} - ${destination}`}
                </div>
            </div>
        </div>
    );
}

FlightCard.propTypes = {
    data: PropTypes.object.isRequired,
};

export default FlightCard;
