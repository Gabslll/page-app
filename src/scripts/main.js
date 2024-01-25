AOS.init();

const dataApp = new Date("May 31, 2024 20:00:00");
const minhaData = dataApp.getTime();

const countHours = setInterval(function() {
    const agora = new Date();
    const dataAtual = agora.getTime();

    const distance = minhaData - dataAtual;

    const daysInMs = 1000 * 60 * 60 * 24;
    const hoursInMs = 1000 * 60 * 60;
    const minuteInMs = 1000 * 60;

    const daysToDate = Math.floor(distance / daysInMs);
    const hoursToDate = Math.floor((distance % daysInMs) / hoursInMs);
    const minuteToDate = Math.floor((distance % hoursInMs) / minuteInMs);
    const secondsToDate = Math.floor((distance % minuteInMs) / 1000);

    console.log(daysToDate);
    console.log(hoursToDate);
    console.log(minuteToDate);
    console.log(secondsToDate);

    document.getElementById('contador').innerHTML = `${daysToDate}d ${hoursToDate}h ${minuteToDate}m ${secondsToDate}s`;

    if (distance < 0) {
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = 'Faça o Download no link abaixo.'
    }
}, 1000)