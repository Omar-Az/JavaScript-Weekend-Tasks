var today = new Date();
var dd = today.getDate();
var day=today.getDay();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
}
var Dayname=['Monday','Tuesday','Wednesday','Thursday','Friday'] 
var Monthname=['January','Febuary','March','April','May','June','July','August','September','October','November','December']
today =Dayname[day-1]+' '+ dd+', '+Monthname[mm-1]+' '+yyyy;
console.log(today);
