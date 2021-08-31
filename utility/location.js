import { IATACodes } from '../constants';

export const locations = (value) => {
    const validDates = ['tomorow', 'on'];
    const spliter = (position, word, pattern) => {
        if (position === 'before') {
            return word.slice(0, word.indexOf(pattern));
        }
        return word.slice(word.indexOf(pattern) + pattern.length);
    };
    const truncateAfter = spliter('after', value, 'to');
    const truncateBefore = spliter('before', value, 'to');
    const wordInString = (s, word) => new RegExp(`\\b${word}\\b`, 'i').test(s);
    const dateWord = validDates.find((item) => wordInString(truncateAfter, item));
    let date;
    if (dateWord && dateWord === 'on') {
        date = spliter('after', truncateAfter, 'on');
        date = new Date(date).toLocaleDateString('en-CA');
    } else if (dateWord && dateWord === 'tomorow') {
        date = new Date();
        date.setDate(date.getDate() + 1);
        date = new Date(date).toLocaleDateString('en-CA');
    }
    const origin = IATACodes.find((item) => wordInString(truncateBefore, item));
    const destination = IATACodes.find((item) => wordInString(truncateAfter, item));
    return { origin, destination, date };
};
