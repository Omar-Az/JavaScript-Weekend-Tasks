var name='Omar';
var number=0;
number=name.length/2;
number=number-0.5;
last=name.length-1;
var check= name.length/2;
check=check-0.5;
var count=0;
for (i = 0; i < number; i += 1) {
    if(name[i] === name[last])
    {     
        count=count+1;
    }  
    last=last-1;
}
if(count===check)
{
    console.log("Palindrome");
}
else{
    console.log("Not Palidrome");
}