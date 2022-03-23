function formatDate(curr) {
    const date = new Date(curr);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const getFullValue = (value) => value < 10 ? `0${value}` : value;

    return `${getFullValue(day)}.${getFullValue(month)}.${year} ${getFullValue(hour)}:${getFullValue(min)}:${getFullValue(sec)}`
}

export default formatDate;
