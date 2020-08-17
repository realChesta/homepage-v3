import moment from "moment";

const birthday = moment([1998, 3, 18]);
const lastUpdate = "25. July 2020";

export const getMyAge = () => {
    return moment().diff(birthday, 'years');
};