var _24hours = [
    {
        id: "0",
        hour: "0:00",
        time: "12",
        note: ""
    },
    {
        id: "1",
        hour: "1:00",
        time: "01",
        note: ""
    },
    {
        id: "2",
        hour: "2:00",
        time: "02",
        note: ""
    },
    {
        id: "3",
        hour: "3:00",
        time: "03",
        note: ""
    },
    {
        id: "4",
        hour: "4:00",
        time: "04",
        note: ""
    },
    {
        id: "5",
        hour: "5:00",
        time: "05",
        note: ""
    },
    {
        id: "6",
        hour: "6:00",
        time: "06",
        note: ""
    },
    {
        id: "7",
        hour: "7:00",
        time: "07",
        note: ""
    },
    {
        id: "8",
        hour: "8:00",
        time: "08",
        note: ""
    },
    {
        id: "9",
        hour: "9:00",
        time: "09",
        note: ""
    },
    {
        id: "10",
        hour: "10:00",
        time: "10",
        note: ""
    },
    {
        id: "11",
        hour: "11:00",
        time: "11",
        note: ""
    },
    {
        id: "12",
        hour: "12:00",
        time: "12",
        note: ""
    },
    {
        id: "13",
        hour: "13:00",
        time: "13",
        note: ""
    },
    {
        id: "14",
        hour: "14:00",
        time: "14",
        note: ""
    },
    {
        id: "15",
        hour: "15:00",
        time: "15",
        note: ""
    },
    {
        id: "16",
        hour: "16:00",
        time: "16",
        note: ""
    },
    {
        id: "17",
        hour: "17:00",
        time: "17",
        note: ""
    },
    {
        id: "18",
        hour: "18:00",
        time: "18",
        note: ""
    },
    {
        id: "19",
        hour: "19:00",
        time: "19",
        note: ""
    },
    {
        id: "20",
        hour: "20:00",
        time: "20",
        note: ""
    },
    {
        id: "21",
        hour: "21:00",
        time: "21",
        note: ""
    },
    {
        id: "22",
        hour: "22:00",
        time: "22",
        note: ""
    },
    {
        id: "23",
        hour: "23:00",
        time: "23",
        note: ""
    },
    
]

function getTodaysDate() {
    var todaysDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(todaysDate);
}

getTodaysDate();

function init() {
    var scheduleToday = JSON.parse(localStorage.getItem("_24Hours"));

    if (scheduleToday) {
        _24hours = scheduleToday;
    }
    todo();
    displaySchedule();
}

function todo() {
    localStorage.setItem("_24Hours", JSON.stringify(_24hours));
}

function displaySchedule() {
    _24hours.forEach(function (currentHour) {
        $(`#${currentHour.id}`).val(currentHour.note);
    })
}

_24hours.forEach(function(currentTime) {

    var timeBlock = $("<form>").attr({
        "class": "row"
        
    });

    $(".container").append(timeBlock);

    var hour = $("<div>")
        .text(`${currentTime.hour}`)
        .attr({
            "class": "col-md-2 hour"
    });

    var schedule = $("<div>")
        .attr({
            "class": "col-md-9 description p-0"
    });

    var scheduleText = $("<textarea>");
    schedule.append(scheduleText);
    scheduleText.attr("id", currentTime.id);
    if (currentTime.time < moment().format("HH")) {
        scheduleText.attr ({
            "class": "past", 
        })
    } else if (currentTime.time === moment().format("HH")) {
        scheduleText.attr({
            "class": "present"
        })
    } else if (currentTime.time > moment().format("HH")) {
        scheduleText.attr({
            "class": "future"
        })
    }

    var saveBtn = $("<i>Save</i>")
    var saveSchedule = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    saveSchedule.append(saveBtn);
    timeBlock.append(hour, schedule, saveSchedule);
})

init();


$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var position = $(this).siblings(".description").children(".future").attr("id");
    _24hours[position].note = $(this).siblings(".description").children(".future").val();
    todo();
    displaySchedule();
})
