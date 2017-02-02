import moment from "moment";
import dateFormat from 'dateformat';

const offset = moment().utcOffset();

export function shiftUtcTime(date) {
    let momentDate = moment.isMoment(date) ? date : moment(date);
    return date ? momentDate.utc(offset) : undefined;
}

export const format = (date) => dateFormat(date, 'yyyy-mm-dd');
