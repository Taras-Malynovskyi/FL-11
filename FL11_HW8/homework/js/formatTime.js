function formatTime(time) {
    let day = 0;
    let hour = 0;
    let minute = 0;
    for (let i = 0; i < time; i = i + (60 * 24)) {
        day = i / 60 / 24;
    }
    for (let i = 0; i < time - (day * 60); i = i + 60) {
        hour = i / 60 / 24;
    }
    minute = (time - day * 24 * 60 - hour * 60) % 60;


    let format = `${day} day(s) ${hour} hour(s) ${minute} minute(s). `;
    return format;
}

console.log(formatTime(1511));