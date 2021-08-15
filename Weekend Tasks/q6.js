function student(name, age, email)  
{ 
this.name = name 
this.age=age
this.email=email
} 

stu1 = new student();
stu1[0].name="Omar";
stu1[0].age=23;
stu1[0].email='omaraziz443@gmail.com';

stu1[1].name="Omar";
stu1[1].age=23;
stu1[1].email='omaraziz443@gmail.com';

stu1[2].name="Aziz";
stu1[2].age=23;
stu1[2].email='Aziz@gmail.com';

stu1[3].name="Hamza";
stu1[3].age=23;
stu1[3].email="hamza@gmail.com";

stu1[4].name="Rohail";
stu1[4].age=23;
stu1[4].email='Rohail3@gmail.com';
var email='a'
for (i = 0; i < 5 - 1; i++) {
    email=stu1.email;
    for (i = 0; i < 10; i++){
    if(email.indexOf(i)==1){
        console.log(stu1.name);
        console.log(stu1.age);
        console.log(stu1.email);
        break;    }
}


}

