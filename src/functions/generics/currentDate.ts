function currentDate() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (day < 10) {
        return `${year}-${month}-0${day}`;
    } else if (month < 10) {
        return `${year}-0${month}-${day}`;
    } else if (day < 10 && month < 10) {
        return `${year}-0${month}-0${day}`;
    } else {
        return `${year}-${month}-${day}`;
    }
}

export { currentDate };