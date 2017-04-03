function getDateAndMonth() {
    "use strict";
    
    var d = new Date(), monthNames = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];
    
    document.getElementById("currentMonth").innerHTML = monthNames[d.getMonth()];
    document.getElementById("currentDay").innerHTML = d.getDate();
}

getDateAndMonth();
