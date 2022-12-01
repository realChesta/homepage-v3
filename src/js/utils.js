import moment from "moment";

const birthday = moment([1998, 3, 18]);
const lastUpdate = "25. July 2020";

export const getMyAge = () => {
    return moment().diff(birthday, 'years');
};

export const templatized = (template, vars = {}) => {
    const handler = new Function('vars', [
        'const tagged = ( ' + Object.keys(vars).join(', ') + ' ) =>',
        '`' + template + '`',
        'return tagged(...Object.values(vars))'
    ].join('\n'));

    return handler(vars);
};