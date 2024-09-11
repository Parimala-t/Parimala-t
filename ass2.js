// Introduction to arrays
const fruits = ["Apple","Banana","Orange","Guava","Watermelon"];
for(var i=0; i<fruits.length; i++)
console.log(fruits[i]);
console.log(fruits[3]);
console.log(fruits.length);

// adding using push
fruits[5]="custard apple";
console.log(fruits);
const newLength = fruits.push("Pine apple","Jackfruit");
    console.log(newLength)
 console.log(fruits)

 // remove using pop
 fruits.pop();
 console.log(fruits);
// unshift
 fruits.unshift("Strawberry");
 console.log(fruits)
 // shift
 fruits.shift();
 console.log(fruits);

 //objects
 

 const person = {
     name : "parimala",
     age :18,
     city : "bheemili",
 }
     console.log(person);
     console.log(`${person.name}`)
     console.log(`${person['name']}`)
     person.occupation = "student";
     person['hobbies']=["reading","playing"];
     console.log(person);

     // properties methods

     const car = {
         make : "Martin",
         model : "Tesla",
         year : "2008" ,
         drive : function () {
             console.log(`The car is maked by ${this.make}and the model is ${this.model}introduced in ${this.year}`);
         }
     }
     car.drive();
     //caL

     const Calc={
     
        add:function(a,b)
        {
            return a+b;
             
        },
        sub:function(a,b)
        {
            return a-b;
        },
        mul:function(a,b)
        {
            return a*b;
    
        },
        div:function(a,b)
        {
            return a/b;
        },
    
    };
    console.log(Calc.add(50,70));
    console.log(Calc.sub(10,8));
     console.log(Calc.mul(9,990));
    console.log(Calc.div(900,60));



     //for loop
     var num = [1,2,3,4];
 for(var i=0; i<num.length; i++)
 {
     console.log(num[i])
 }
 // while
 var jobs = ["UI/UX","Developer","Frontend Devp","MERN StackDecv"]
 var i = 0;
 while(i<jobs.length){
    console.log(jobs[i])
    i++;
 }
 
 // for loop to find sum of ele
 var nums=[1,2,3,4];
 var sum = 0;
 for(var i=0; i<nums.length; i++)
 {
    sum+=nums[i];
 }
 console.log("the sum of the array ="+sum);

 // while loop to find first even num in an array
 var j=0;
 while(nums[j]%2!=0){
    j++;
 }
 console.log(nums[j]);

 // break 
 for(var i=0;i<nums.length;i++){
    if(nums[i]%2==0){
        break;
    }
}
console.log(nums[i]);

 /// continue

 for(var i=0;i<nums.length;i++){
    if(nums[i]%2!=0){
        continue;
    }
    else{
        console.log(nums[i]);
    }
}




 // variable scope
 var iam="parimala";
 function myFunction() {
  var lastName = "siri";
     console.log(`${lastName}`);
     console.log(`iam${iam}`);
 }
console.log(`iam${iam}`);

 //hoisting
name1="parimala";
age="19";
console.log(name1);
console.log(age);
var name1;
var  age;

// hoisted fun
hoistedFunction(); 

function hoistedFunction() {
    console.log("This function is hoisted");
}
hoistedFunction();

//////regular function
const ex1=function(name2,age){
    console.log(arguments);
    return `name is ${name2} and age is ${age}`
}
details2=ex1("siri",58);
console.log(details2);
details3=ex2("pravallika",49,"student");
console.log(details3);



//////arrow func
const ex2=(name3,age1)=>{
    console.log(arguments);
    return `name is ${name3} and age is ${age1}`// error
}
details4=ex2("siri",58);
console.log(details4);
details5=ex2("pravallika",49,"student");
console.log(details5);

//this is used in the regular fun
function func()
{
    console.log(this);
}
func();
//objects
let numq={
    a:90,
    func:function()
        {
    const obj =()=>{
        console.log(this.a);
    };
    obj();
}
    
};
numq.func();

