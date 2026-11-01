"use strict";
// data types in ts
Object.defineProperty(exports, "__esModule", { value: true });
// number
// let netSalary: Number = 50;
// console.log(netSalary);
// string
// let uniName: String = "Islamia";
// console.log(uniName);
// boolean
// let isMarried: Boolean = true;
// console.log(isMarried);
// NaN
// when calculation is not according to math principles then this error comes
// let newNum:Number = 0/0;
// console.log(newNum);
// Infinity
// let newNum2:Number = 5/0;
// console.log(newNum2);
// basic operations on number
// let x:Number = 10;
// let y:Number = 5;
// let result:Number = x+y;
// let result:Number = x-y;
// let result:Number = x/y;
// let result:Number = x*y;
// let result:Number = x%y;
// console.log(result);
// methods to declare strings
// let firstName:String = "Fatima";
// let lastName:String = 'Batool';
// let fullName:String = `My name is ${firstName} and my last name is ${lastName}`;
// console.log(fullName);
// let len:string = firstName.length;
// console.log(len);
// let upper:string = firstName.toUpperCase();
// console.log(upper);
// let lower:string = firstName.toLowerCase();
// console.log(lower);
// null and undefined
// let myName:String;
// console.log(myName);
// let myName:null=null;
// console.log(myName);
// any and unknown
// we can strore any type of data in any this is not secure and should not use it
// let myName:any = "Fatima";
// myName=12;
// console.log(myName);
// let myName:unknown = "Fatima";
// myName=12;
// console.log(typeof myName);
// if(myName === String){
//     console.log(myName.toUpperCase());
// }
// void and nerver data type
// bigint data type
// bigint data type is used to pring a big inter
// let bigNum:bigint = BigInt(12345678);
// console.log(bigNum);
// symbol data type
// let id1=Symbol();
// let id2=Symbol();
// console.log(id1===id2);
// let user={
//     id1:1,
//     id2:2
// }
// console.log(user.id2);
// let str1 = Symbol("Fatima");
// let str1: symbol = Symbol("Fatima");
// let str2 = Symbol("Fatima");
// let str2: symbol = Symbol("Fatima");
// console.log(str1);
// console.log(str2);
// working with html input fields
// const username = document.getElementById('user') as HTMLInputElement;
// const btn = document.getElementById('btn') as HTMLInputElement;
// btn.addEventListener("click", ()=> {console.log(username.value)});
// const button1 = document.getElementById("btn1") as HTMLInputElement;
// button1.addEventListener("click", ()=>{alert("button clicked")});
// type inference in typescripts
// type inference means if we do not explicitly assign a type to a variable typescript by itself guess the type of variable
// let myName = "Fatima";
// myName = 12;
// console.log(typeof myName);
// array in typescript
// in normal javascript we define an array like this
// let array1 = [1,2,3];
// console.log(array1);
// but in typescript there are two ways to decleare an arry
// method1
// let array2: number[] = [10,20,30];
// console.log(array2);
// method2
// let array3: Array<string> = ["Fatima", "Zainab"];
// console.log(array3);
// array with multiple data types using union |
// let array4: (Number | String)[] = ["Fatima", 20];
// console.log(array4);
// map/filter and reduce in typescript
// map method
// let array1: number[] = [1,2,3];
// console.log(array1);
// let doubleArray:number[]=array1.map(n => n*2);
// console.log(doubleArray);
// filter
// let greaterNum: number[] = array1.filter(n => n>1);
// console.log(greaterNum);
// reduce
// let sum: number[] = array1.reduce((a,b)=> {
//     return a+b;
// })
// console.log(sum);
// tuple
// tuple is a special array which has fixed no of items and fixed data type.
// let user: [string,number] = ["Fatima", 21];
// console.log(user);
// access tuple value
// console.log(user[0]);
// destructring of tuple
// let [name, age] = user;
// console.log(name);
// console.log(age);
// enum
// enum pinCodes{
//     pin1="01",
//     pin2="02"
// }
// console.log(pinCodes.pin1);
// Alias type
// alias means we declere the type of variable at the start of programme and use it throughout
// let User: string;
// let Age: number;
// let myName:User = "Fatima"
// let myAge:Age = 20;
// console.log(myName);
// console.log(myAge);
// type user={
//     username: string,
//     age: number
// }
// let myUser:user ={
//     username: "Fatima",
//     age:21
// }
// console.log(user);
// intersection and union
// intersection is used for choice in variable type and union is used for mandator
// union "|"
// let user:string | number;
// user = "Fatima";
// user = "01";
// console.log(user);
// intersection "&"
// type Person={
//     username: string;
// }
// type Emp={
//     age: number
// }
// type Staff = Person & Emp;
// let myUser:Staff ={
//     username: "Fatima",
//     age:21
// }
// console.log(myUser);
// type narrowing
// function myData(data: string | number){
//     if(data === "string"){
//         console.log(data.toUpperCase());
//     }else{
//         console.log(data);
//     }
// }
// // myData(1);
// myData("Zainab");
// functions
// simple function
// function greet(){
//     console.log("Hi Fatima!");
// }
// greet();
// function greet(user:string){
//     console.log("hi", user);
// }
// greet("Fatima");
// function greet(user:string){
//     return "hi", user;
// }
// let output = greet();
// console.log(output);
// function add(a:number, b:number):number{
//     return a+b;
// }
// console.log(add(2,2));
spread;
and;
rest;
operator;
//# sourceMappingURL=app.js.map