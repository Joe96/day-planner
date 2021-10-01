var schedule = [
    {
        id: "0",
        hour: "09",
        time: "09",
        note: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        note: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        note: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        note: ""
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        note: ""
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        note: ""
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        note: ""
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        note: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        note: ""
    },
    {
        id: "9",
        hour: "06",
        time: "18",
        note: ""
    },
    {
        id: "10",
        hour: "07",
        time: "19",
        note: ""
    },
    {
        id: "11",
        hour: "08",
        time: "20",
        note: ""
    },
    {
        id: "12",
        hour: "09",
        time: "21",
        note: ""
    },
    {
        id: "13",
        hour: "10",
        time: "22",
        note: ""
    },
    {
        id: "14",
        hour: "11",
        time: "23",
        note: ""
    },
    {
        id: "15",
        hour: "12",
        time: "00",
        note: ""
    },
    {
        id: "16",
        hour: "01",
        time: "01",
        note: ""
    },
    {
        id: "17",
        hour: "02",
        time: "02",
        note: ""
    },
    {
        id: "18",
        hour: "03",
        time: "03",
        note: ""
    },
    {
        id: "19",
        hour: "04",
        time: "04",
        note: ""
    },
    {
        id: "20",
        hour: "05",
        time: "05",
        note: ""
    },
    {
        id: "21",
        hour: "06",
        time: "06",
        note: ""
    },
    {
        id: "22",
        hour: "07",
        time: "07",
        note: ""
    },
    {
        id: "23",
        hour: "08",
        time: "08",
        note: ""
    },
    
]

function getTodaysDate() {
    var todaysDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(todaysDate);
}
getTodaysDate();

function init() {
    var scheduleToday = JSON.parse(localStorage.getItem("today"));

    if (scheduleToday) {
        schedule = scheduleToday;
    }

    todo();
    displaySchedule();
}

function todo() {
    localStorage.setItem("today", JSON.stringify(schedule));
}

function displaySchedule() {
    schedule.forEach(function (currentHour) {
        $(`#${currentHour.id}`).val(currentHour.note);
    })
}