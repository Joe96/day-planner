var schedule = [
    {
        id: "0",
        hour: "09",
        time: "09",
        reminder: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        reminder: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        reminder: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        reminder: ""
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        reminder: ""
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        reminder: ""
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        reminder: ""
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        reminder: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        reminder: ""
    },
    {
        id: "9",
        hour: "06",
        time: "18",
        reminder: ""
    },
    {
        id: "10",
        hour: "07",
        time: "19",
        reminder: ""
    },
    {
        id: "11",
        hour: "08",
        time: "20",
        reminder: ""
    },
    {
        id: "12",
        hour: "09",
        time: "21",
        reminder: ""
    },
    {
        id: "13",
        hour: "10",
        time: "22",
        reminder: ""
    },
    {
        id: "14",
        hour: "11",
        time: "23",
        reminder: ""
    },
    {
        id: "15",
        hour: "12",
        time: "00",
        reminder: ""
    },
    {
        id: "16",
        hour: "01",
        time: "01",
        reminder: ""
    },
    {
        id: "17",
        hour: "02",
        time: "02",
        reminder: ""
    },
    {
        id: "18",
        hour: "03",
        time: "03",
        reminder: ""
    },
    {
        id: "19",
        hour: "04",
        time: "04",
        reminder: ""
    },
    {
        id: "20",
        hour: "05",
        time: "05",
        reminder: ""
    },
    {
        id: "21",
        hour: "06",
        time: "06",
        reminder: ""
    },
    {
        id: "22",
        hour: "07",
        time: "07",
        reminder: ""
    },
    {
        id: "23",
        hour: "08",
        time: "08",
        reminder: ""
    },
    
]

function getTodaysDate() {
    var todaysDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(todaysDate);
}