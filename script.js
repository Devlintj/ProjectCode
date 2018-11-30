window.onload = function(){
    var d = new Date();
    var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
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
    var calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month]+" "+year;
    document.getElementById("calendar-dates").appendChild(calendar);
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
	var now = new Date();
	var current;
	/*if(now.getMonth() == 11)
	{
		current = new Date(now.getFullYear()+1, 0, 1);
	}
	else
	{
		current = new Date(now.getFullYear(),now.getMonth()+1, 1);
	}*/
	var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	current = String(document.getElementById("calendar-month-year"));
	var i = 0;
	var month = -1;
	while(i < 12)
	{
		month = current.includes(String(month_name[i]), 0);
		if(month == true)
		{
			month = i;
			break;
		}
		i++;
	}
    var year = Number(current.substring(current.length - 5, current.length));
    if(month == 11)
    {
    	month = 0;
    	year++;
    }
    var first_date = month_name[month] + " " + 1 + " " + year;
    var tmp = new Date(first_date).toDateString();
    var first_day = tmp.substring(0,3);
    //November 1 2018
    //var tmp = new Date(first_date).toDateString();
    //Thu Nov 01 2018
    //var first_day = tmp.substring(0, 3);    //Mon
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day_no = day_name.indexOf(first_day);   //1
    var days = new Date(year, month+1, 0).getDate();    //30
    //Fri Nov 30 2018
    var calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month]+" "+year;
    document.getElementById("calendar-dates").appendChild(calendar);
}

function prevMonth()
{
	var now = new Date();
	var current;
	if(now.getMonth() == 0)
	{
		current = new Date(now.getFullYear()+1, 11, 1);
	}
	else
	{
		current = new Date(now.getFullYear(), now.getMonth()-1, 1);
	}
	var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var month = current.getMonth();   //0-11
    var year = current.getFullYear(); //2018
    var first_date = month_name[month] + " " + 1 + " " + year;
    //November 1 2018
    var tmp = new Date(first_date).toDateString();
    //Thu Nov 01 2018
    var first_day = tmp.substring(0, 3);    //Mon
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day_no = day_name.indexOf(first_day);   //1
    var days = new Date(year, month+1, 0).getDate();    //30
    //Fri Nov 30 2018
    var calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month]+" "+year;
    document.getElementById("calendar-dates").appendChild(calendar);
}