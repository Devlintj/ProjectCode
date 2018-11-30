var now = new Date();
var currMonth = now.getMonth();
var currYear = now.getFullYear();
var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var currentCalendar;


window.onload = function(){
    var d = new Date();
    var month = d.getMonth();   //0-11
    var year = d.getFullYear(); //2018
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
    document.getElementById("calendar-month-year").innerHTML = month_name[month]+" "+year;
    document.getElementById("calendar-dates").appendChild(currentCalendar); 
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
        td.innerHTML = count;
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

function nextMonth()
{
	var current;
	if(currMonth == 11)
	{
		currMonth = 0;
		currYear++;
	}
	else
	{
		currMonth++;
	}
	var first_date = month_name[currMonth] + " " + 1 + " " + currYear;
	var tmp = new Date(first_date).toDateString();
    //Thu Nov 01 2018
    var first_day = tmp.substring(0, 3);    //Mon
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day_no = day_name.indexOf(first_day);   //1
    var days = new Date(currYear, currMonth+1, 0).getDate();    //30
    //Fri Nov 30 2018
    var calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[currMonth]+" "+currYear;
    document.getElementById("calendar-dates").replaceChild(calendar, currentCalendar); 
    currentCalendar = calendar;
}

function prevMonth()
{
	var current;
	if(currMonth == 0)
	{
		currMonth = 11;
		currYear--;
	}
	else
	{
		currMonth--;
	}
	var first_date = month_name[currMonth] + " " + 1 + " " + currYear;
	var tmp = new Date(first_date).toDateString();
    //Thu Nov 01 2018
    var first_day = tmp.substring(0, 3);    //Mon
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day_no = day_name.indexOf(first_day);   //1
    var days = new Date(currYear, currMonth+1, 0).getDate();    //30
    //Fri Nov 30 2018
    var calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[currMonth]+" "+currYear;
    document.getElementById("calendar-dates").replaceChild(calendar, currentCalendar); 
    currentCalendar = calendar;
}