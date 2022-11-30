/* draws indices of dial*/
const ctx1 = document.getElementById("indices").getContext("2d");
for (let i = 6; i <= 360; i = i + 6) {
    const alpha = (i * Math.PI) / 180;
    const xEnd = 200 * (1 + Math.cos(alpha));
    const yEnd = 200 * (1 + Math.sin(alpha));
    if (i % 30 === 0) {
        const xStart = 200 * (1 + 0.9 * Math.cos(alpha));
        const yStart = 200 * (1 + 0.9 * Math.sin(alpha));
        ctx1.lineWidth = 5;
        ctx1.moveTo(xStart, yStart);
        ctx1.lineTo(xEnd, yEnd);
        ctx1.stroke();
    } else {
        const xStart = 200 * (1 + 0.95 * Math.cos(alpha));
        const yStart = 200 * (1 + 0.95 * Math.sin(alpha));
        ctx1.lineWidth = 2;
        ctx1.moveTo(xStart, yStart);
        ctx1.lineTo(xEnd, yEnd);
        ctx1.stroke();
    }
}

/* second hand */
drawSecondHand();
rotateSecondHand();
function drawSecondHand() {
    const ctx2 = document.getElementById("secondHand").getContext("2d");
    const xEndSecond = 200 * (1 + 0.95 * Math.cos((270 * Math.PI) / 180));
    const yEndSecond = 200 * (1 + 0.95 * Math.sin((270 * Math.PI) / 180));
    ctx2.lineWidth = 2;
    ctx2.moveTo(200, 200);
    ctx2.lineTo(xEndSecond, yEndSecond);
    ctx2.stroke();
}
function rotateSecondHand() {
    const currentSeconds = new Date().getSeconds();
    const secondAngle = currentSeconds * 6; //second Hand moves 6 degrees per second
    document.getElementById(
        "secondHand"
    ).style.transform = `rotate(${secondAngle}deg)`;
    setTimeout(rotateSecondHand, 1000);
}

/* minute hand */
drawMinuteHand();
rotateMinuteHand();
function drawMinuteHand() {
    const ctx3 = document.getElementById("minuteHand").getContext("2d");
    const xEndMinute = 200 * (1 + 0.9 * Math.cos((270 * Math.PI) / 180));
    const yEndMinute = 200 * (1 + 0.9 * Math.sin((270 * Math.PI) / 180));
    ctx3.lineWidth = 4;
    ctx3.moveTo(200, 200);
    ctx3.lineTo(xEndMinute, yEndMinute);
    ctx3.stroke();
}
function rotateMinuteHand() {
    const currentSeconds = new Date().getSeconds();
    const currentMinutes = new Date().getMinutes();
    const sumInSeconds = currentMinutes * 60 + currentSeconds; //sum of currentSeconds and currentMinutes in seconds
    const minuteAngle = sumInSeconds * 0.1; //minute Hand moves 0.1 degree per second
    document.getElementById(
        "minuteHand"
    ).style.transform = `rotate(${minuteAngle}deg)`;
    setTimeout(rotateMinuteHand, 1000);
}

/* hour hand */
drawHourHand();
rotateHourHand();
function drawHourHand() {
    const ctx3 = document.getElementById("hourHand").getContext("2d");
    const xEndHour = 200 * (1 + 0.7 * Math.cos((270 * Math.PI) / 180));
    const yEndHour = 200 * (1 + 0.7 * Math.sin((270 * Math.PI) / 180));
    ctx3.lineWidth = 6;
    ctx3.moveTo(200, 200);
    ctx3.lineTo(xEndHour, yEndHour);
    ctx3.stroke();
}
function rotateHourHand() {
    const currentMinutes = new Date().getMinutes();
    const currentHours = new Date().getHours();
    const sumInMinutes = currentHours * 60 + currentMinutes; //sum of currentMinutes and currentHours in Minutes
    const hourAngle = sumInMinutes * 0.5; //hour Hand moves 0.5 degree per Minute
    document.getElementById(
        "hourHand"
    ).style.transform = `rotate(${hourAngle}deg)`;
    setTimeout(rotateHourHand, 1000);
}

/* code for inserting current day of the week, date and time */
const daysOfTheWeek = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
];
insertCurrentTime();
function insertCurrentTime() {
    document.getElementById("slotCurrentDay").innerText =
        daysOfTheWeek[new Date().getDay()];

    document.getElementById("slotCurrentDate").innerText =
        new Date().toLocaleDateString("de-DE");

    document.getElementById("slotCurrentTime").innerText = new Date()
        .toLocaleTimeString("de-DE")
        .slice(0, 5);
    setTimeout(insertCurrentTime, 1000);
}
