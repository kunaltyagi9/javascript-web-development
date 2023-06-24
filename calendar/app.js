window.onload = () => {
    const month = document.querySelector("#month");
    const date = document.querySelector("#date");
    const days = document.querySelector("#days");

    const currentMonth = new Date().getMonth();
    const firstDay = new Date(new Date().getFullYear(), currentMonth, 1).getDay() -1;
    const lastDay = new Date(new Date().getFullYear(), currentMonth + 1, 0).getDate();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"];

    month.innerText = months[currentMonth];
    date.innerText = new Date().toDateString();

    console.log(firstDay);

    let result = "";

    for (let i = firstDay; i > 0; i--) {
        result += `<div class="empty"></div>`
    }
    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate()) {
            result += `<div class="today">${i}</div>`
        } else {
            result += `<div>${i}</div>`
        }
    }

    days.innerHTML = result;
}