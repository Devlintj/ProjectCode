var now = new Date();
console.log(document.getElementById("passedMonth").textContent);
var currMonth = parseInt(document.getElementById("passedMonth").textContent, 10);
var currYear = parseInt(document.getElementById("passedYear").textContent, 10);
var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var currentCalendar;


window.onload = function(){
    console.log('onloading window');
    var d = new Date();
    var month = currMonth;
    var year = currYear; //2018
    var first_date = month_name[month] + " " + 1 + " " + year;
    //November 1 2018
    var tmp = new Date(first_date).toDateString();
    //Thu Nov 01 2018
    var first_day = tmp.substring(0, 3);    //Mon
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day_no = day_name.indexOf(first_day);   //1
    var days = new Date(year, month+1, 0).getDate();    //30
    //Fri Nov 30 2018
    currentCalendar = get_calendar(day_no, days);
    //console.log(month_name[month]);
    document.getElementById("calendar-month-year").innerHTML = month_name[month]+" "+year;
    document.getElementById("calendar-dates").appendChild(currentCalendar); 

    console.log(currMonth);
    console.log(currYear);



    //set the values for the next and previous month and the attribute for what url to post it to
    var nextMonth;
    var nextYear;
    if(currMonth === 11){
        nextMonth = 0;
        nextYear = currYear + 1

    }
    else{
        nextMonth = currMonth + 1;
        nextYear = currYear
    }
    

    var string = '/calendar?currentMonth='+nextMonth+'&currentYear='+nextYear;;
    console.log(string);
    //document.getElementById("next").href = '/calendar?currentMonth='+nextMonth+'&currentYear='+nextYear;

    var prevMonth;
    var prevYear;
    if(currMonth === 0){
        prevMonth = 11;
        prevYear = currYear - 1;
    }
    else{
        prevMonth = currMonth - 1;
        prevYear = currYear;
    }
    string = '/calendar?currentMonth='+prevMonth+'&currentYear='+prevYear;
    console.log(string);
    document.getElementById("prev").href = '/calendar?currentMonth='+prevMonth+'&currentYear='+prevYear;
    document.getElementById("next").href = '/calendar?currentMonth='+nextMonth+'&currentYear='+nextYear;
    console.log(document.getElementById("prev").href);

}

function get_calendar(day_no, days){
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    
    //row for the day letters
    for(var c=0; c<=6; c++){
        var td = document.createElement('td');
        if(c != 4)
        {
        	td.innerHTML = "SMTWTFS"[c];
        }
        else
        {
        	td.innerHTML = "Th";
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
    //create 2nd row
    tr = document.createElement('tr');
    var c;
    for(c=0; c<=6; c++){
        if(c == day_no){
            break;
        }
        var td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
    }
    
    var count = 1;
    for(; c<=6; c++){
        var td = document.createElement('td');
        var dayString = count.toString();
        //var linkAddress = "/calendar?currentMonth="+8&currentYear=2017
        td.innerHTML = dayString.link("/calendar?currentMonth=8&currentYear=2017");
        //td.innerHTML.link("/calendar");

        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
    //rest of the date rows
    for(var r=3; r<=7; r++){
        tr = document.createElement('tr');
        for(var c=0; c<=6; c++){
            if(count > days){
                table.appendChild(tr);
                return table;
            }
            var td = document.createElement('td');
            td.innerHTML = count;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}



