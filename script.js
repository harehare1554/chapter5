function set2fig(num) {
    var ret;
    if( num < 10 ) { ret = "0" + num; }
    else { ret = num; }
    return ret;
    }
    function showClock() {
    var nowTime = new Date();
    var nowHour = set2fig( nowTime.getHours() );
    var nowMin  = set2fig( nowTime.getMinutes() );
    var nowSec  = set2fig( nowTime.getSeconds() );
    var msg = nowHour + ":" + nowMin + ":" + nowSec;
    document.getElementById("RealtimeClock").innerHTML = msg;
    }
    setInterval('showClock()',100);


function showDate() {
    var today = new Date();
    var date = today.getFullYear() + '/' + (today.getMonth()+1) + '/' + today.getDate();
    document.getElementById("RealtimeDate").innerHTML = date;
    }
    setInterval('showDate()',100);
