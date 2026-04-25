const timeEl = document.getElementById("time")
const dateEl = document.getElementById("date")

function updateTClock() {
    const now = new Date();

    const timeFormatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Tokyo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });

    const dateFormatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Tokyo",
        weekday: "long",
        year: "numeric",
        month: "long",
         day: "numeric"
    });

    timeEl.textContent = timeFormatter.format(now);
    dateEl.textContent = dateFormatter.format(now);

}

updateTClock();
setInterval(updateTClock, 1000);
