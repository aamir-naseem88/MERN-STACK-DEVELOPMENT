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
// spread and rest operator
// spread operator is used to copy arrays, objects. it is used to spread the values of arrays and objects.
// let array1: number[] = [1,2,3];
// let array2: number[] = [4,5,6];
// let combinedArray: number[] = [...array1, ...array2];
// let customArray = [20, ...array1];
// console.log(customArray);
// console.log(combinedArray);
// let user={
//     userName:"Fatima",
//     age:21
// }
// let newUser={...user, address:"Madina"}
// console.log(newUser);
// rest operator
// rest operator is used to convert the arguments of function into array
// function add(...num){
//     return num.reduce((total, cv)=> total + cv, 0)
// }
// console.log(add(1,2,3));
// function
// simple function
// function greet(user:string){
//     console.log("Hi",user);
// }
// greet("Fatima");
// function add(a:number, b:number):number{
//        return a+b;
// }
// console.log(add(2,2));
// call signatures with type and interface
// type Multiply = (x:number, y:number) => number;
// const myMultiply: Multiply =(a, b)=> a*b;
// console.log(myMultiply(2,10));
// interface Multiply = (x:number, y:number) => number;
// const myMultiply: Multiply =(a, b)=> a*b;
// console.log(myMultiply(2,10));
// function overloading
// means when we use more than one data type in a fuction
// function search(value:any):string{
//        if (typeof value === "number"){
//               return `the input is Number ${value}`;
//        }else{
//               return `the input is String ${value}`;
//        }
// }
// console.log(search("Fatima"));
// arrow function
// const add = (a:number, b:number):number => a+b;
// console.log(add(1,5));
// objects in typescript
// let user:{
//        userName: string,
//        age: number
// }
// user = {
//        userName: "Fatima",
//        age:21
// }
// console.log(user);
// optional parameters
// let user:{
//        userName: string,
//        age?: number
// }
// user = {
//        userName:"Fatima"
// }
// console.log(user);
// readonly property
// let user:{
//        readonly userName: string,
//        age?: number
// }
// user = {
//        userName:"Fatima",
//        age:21
// }
// user.userName = "abc";
// console.log(user);
// interface in typescript
// interface is the blue print or structure of the objects
// interface User{
//        readonly id:number,
//        userName:string;
//        age:number,
//        address?:string
// }
// let emp1:User ={
//        id:101,
//        userName:"Fatima",
//        address:"Madina",
//        age:21,
// }
// let emp2:User = {
//        id:102,
//        userName:"Zainab",
//        address:"Makkah",
//        age:22
// }
// console.log(emp1);
// console.log(emp2);
// interface in function
// interface MultiplyFunction {(a:number, b:number):number}
// function myFunction(x,y){
//        return x*y;
// }
// console.log(myFunction(2,5));
// function myAdd(x,y){
//        return x+y;
// }
// console.log(myAdd(2,20));
// what is typescript
// typpescript is a programming language built on top of javascript. it is super set of javascript. it provides type to javasscript.
// javascript is a dynamically typed language while typescript is staically typed language means in javascript we do not assign data type to a vairable js itself give it a data type whereas in ts we explicitly give the data type to variables.
// e.g in js let userName = "Fatima";
// while in ts let userName: string = "Fatima";
// now can not do this userName = 12 or userName = true;
// ###### Chapter No. 2 #####
// Type Annotations and Basic Data Types
// data type
// data type means which type of value will be stored in variable
// for example
// let myName = "Fatima"; //string
// let age = 12; //number
// let isMarried = false; //boolean
// type anotations means explicitly telling ts what type of value a variable should contain.
// Syntax
// let variableName: dataType = value;
// let userName: string = "Fatima"
// 1. string
// a string is a series of character stored in variable
// for example let userName: string = "Fatima";
// we can denote a string with "" (double quotes), '' (single quotes) and `` backticks
// for example
// let userName:string = "Fatima";
// let userName:string = 'Fatima';
// let userName:string = `Fatima`;
// all are valid we use `` when we use variable within strings for example
// let userName: string = 'Fatima';
// let age: number = 23;
// now using string literals
// let fullInfo = `My name is ${userName} and i am ${age} years old.`;
// string concatination
// we can concatenate two or more strings by using "+"
// let firstName: string = "Fatima";
// let lastName: string = "Batool";
// let fullName = firstName + " " + lastName;
// console.log(fullName);
// 2. Number
// let age:number = 23;
// let price:number = 24.5;
// Mathematical operations
// let num1:number = 5;
// let num2:number = 2;
// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1/num2);
// console.log(num1**num2);
// console.log(num1%num2);
// 3. Boolean
// let isLogedin: boolean = true;
// console.log(isLogedin);
// 4. Undefined
// means when we do not assign a value to a variable.
// for example
// let userName: undefined= undefined;
// console.log(userName);
// console.log(typeof(userName));
// userName = "Fatima";
// console.log(userName);
// 5. null
// represents an intentional absence of value
// let userName: null = null;
// console.log(userName);
// userName = "Fatima";
// let num1: null = null;
// console.log(num1);
// num1 = 12;
// console.log(num1);
// 6. any
// the any type tells ts to stop checking the of a particular value
// we can store any value in any data type
// let anyVariable:any = "Fatima";
// console.log(anyVariable);
// anyVariable = 23;
// console.log(anyVariable);
// 7. object
// an object is a variable which have related values about something in key value pair
// let user:{
//     userName:string;
//     age:number
// }={
//     userName:"Fatima",
//     age:23
// }
// console.log(user);
// console.log(user.userName);
// console.log(user.age);
// 8. array
// array is a special variable having more than one value
// let colors:string[] = ["Red", "Green", "Blue"];
// console.log(colors);
// 9. symbol
// symbol creates unique identifiers
// let id1:symbol = Symbol("Fatima");
// let id2:symbol = Symbol("Fatima");
// console.log(id1);
// console.log(id2);
// console.log(id1===id2);
// 9. bigint
// allow us to work with very large integers.
// let myBigInteger:bigint = 12345678900987654321n;
// console.log(myBigInteger);
// let smallNum:number = 100;
// console.log(myBigInteger+smallNum);
// ##### Chapter No. 3 ######
// Variables, Constants and Type Inference
// variable
// a variable is a named container used to store data in a program
// for example
// let userName: string = "Fatima";
// let age:number = 23;
// let isStudent:boolean = true;
// let hobbies:string [] = ["Playing", "Reading"];
// in the above variables examples how we used variables
// let is the keyword to declare a variable
// userName is the name of the variable
// :string is the type inotation in ts
// and "Fatima" is the value of the variable
// there are three ways to decleare the variables
// 1. let
// 2. var
// 3. const
// 1. let is used when want to change the value of the variable latter in the program.
// for example
// let userName:string = "Fatima";
// let is a blocked scoped variable it can not be accessed from outside the {}
// for example
// if(true){
//     let userName = "Fatima";
//     console.log(userName); 
// }
// we can access it from if it will run
// console.log(userName); this will throw error
// we can not declare a let variable again
// for example
// let userName = "Fatima";
// console.log(userName);
// let userName = "Zainab";
// console.log(userName);
// but we can reasign value to let variable
// userName = "Zainab";
// console.log(userName);
// 2. const
// const is used when we do not want to change the value in program
// const tech:string = "typeScript";
// tech = "javaScript";
// console.log(tech);
// const is function scoped
// we can chage the properties of the objects when decleared by const
// type infrence
// means ts automatically knows the data type of the variable even if type is not defined
// for example
// let userName = "Fatima";
// if we check the type of the variable then we will get string because ts knows this is string because of double qoutes
// console.log(typeof userName);
// similarly ts can guess the type of numbers, booleans, array and objects
// explicit typing vs type infrence
// explicit
// let userName:string = "Fatima";
// and type inference
// let userName = "Fatima";
// variable naming convention
// 1. the name of variable should now start with a number
// 2. name should not be a keyword of ts like if etc
// 3. use camel case naming like userName
// 4. use meaningful names for variable like userName
// 5. avoid spaces like user Name
// ###### Chapter No. 4 #####
// Functions in TypeScript
// a function is a resuable block of code designed to perform a particular task
// for example
// function addNumbers(a, b){
//     console.log(a+b);
// }
// console.log(addNumbers(2,3));
// function with parameters and return type
// parameters are the variables those receive values when a function is being called
// when calling a function the values we pass are called arguments
// retun type mean when caller get a return value from a function then this funtion is called a function with type return and we can use it
// for example
// function addNum(a, b){ //a and b are parameters
// return a+b; //it is returning addition
// }
// let result = addNum(2,3); //2 and 3 here are arguments
// console.log(result);
// optional parameters
// we use ? to denote optional parameters we can give or leave optional operator
// default parameters
// for some parameters we can give the default values like user="Guest"
// arrow functions
// this is the short form of a function and is being used in modern ts
// for example
// const addNumbers = (a:number, b:number):number => a+b;
// console.log(addNumbers(2,4));
// function expressions
// when we assign a variable to a function then it is called function experission
// for example
// const multplyNumbers = function (a:number, b:number):number{
//     return a*b;
// }
// console.log(multplyNumbers(2,3));
// anonymous functions
// when a function has no name then it is called anonymos function
// rest parameters
// when a function receives more than defined parameters as arguments then we use "..." operator to handle this
// for example
// function addNumbers(...num){
//     let total = 0;
//     for (let number of num){
//         total +=number;
//     }
//     return total;
// }
// let result = addNumbers(25,50,75);
// console.log(result);
// function type
// in ts we can define a type for function and use it
// for example
// let addNum: (a:number, b:number)=> number;
// addNum = (x, y){
//     return x+y;
// }
// console.log(addNum(2,3));
// function overloading
// function combine(a: number, b: number): number;
// function combine(a: string, b: string): string;
// function combine(a: number | string, b: number | string): number | string {
//     if (typeof a === "number" && typeof b === "number") {
//         return a + b;
//     }
//     if (typeof a === "string" && typeof b === "string") {
//         return a + b;
//     }
//     throw new Error("Both arguments must have the same type.");
// }
// console.log(combine(2,3));
// console.log(combine("Fatima", "Batool"));
// callback functions
// when a fuction is given inside another function as a parameter then it is called callback function
// let callBackFun = setTimeout(()=> console.log("callback"),2000);
// console.log(callBackFun);
// ###### Chapter No. 5 #####
// Arrays and Tuples in ts
// is a data structure that stores multiple values in a single variable
// For example
// let fruit1 = "Apple";
// let fruit2 = "Banana";
// let fruit3 = "Orange";
// we can write this in a single variable
// const fruits:string[] = ["Apple", "Banana", "Orange"];
// array in ts
// there are two ways to decleare an array
// 1. [] method
// let colors:string [] = ["Red", "Blue", "Green"]
// console.log(colors);
// 2. using array generic type
// let users:Array<string>= ["Fatima", "Zainab"];
// console.log(users);
// assessing array elements
// console.log(users[0]);
// users[1] = "Noor";
// console.log(users);
// console.log(users.length);
// array methos
// for adding elements to an array
// 1. push()
// const fruits:string[] = ["Apple", "Banana", "Orange"];
// fruits.push("Mango");
// console.log(fruits);
// 2. unshift()
// adds element in start
// const fruits:string[] = ["Apple", "Banana", "Orange"];
// fruits.unshift("Peach");
// console.log(fruits);
// 3. splice()
// adds, delete or change an element
// const fruits:string[] = ["Apple", "Banana", "Orange"];
// sytax of splice
// myArray.splice(startingIndex, deletingItems, endingIndex)
// fruits.splice(1,1,"Liche");
// console.log(fruits); //replaced banana with liche
// fruits.splice(3,0,"Gava");
// console.log(fruits); //added Gauva after orange
// fruits.splice(3,1);
// console.log(fruits);//removed Guava
// for removing elements from array
// 4. pop()
// const fruits:string[] = ["Apple", "Banana", "Orange"];
// removes last item
// fruits.pop()
// console.log(fruits);
// 5. splice()
// example already taught
// 6. shift()
// removes first element
// const fruits:string[] = ["Apple", "Banana", "Orange"];
// console.log(fruits);
// fruits.shift();
// console.log(fruits);
// other array methods
// 7. includes()
// const fruits:string[] = ["Apple", "Banana", "Orange"];
// console.log(fruits.includes("Apple"));
// 8. sort()
// sorts an array in alphabatical order
// const fruits:string[] = ["Peach", "Apple", "Banana", "Orange"];
// fruits.sort();
// console.log(fruits);
// for a number array we have to use the callback function
// const numbers:number [] = [20, 10, 50, 90, 60];
// console.log(numbers);
// numbers.sort((a,b)=> a-b); //sorts in accending order
// console.log(numbers);
// numbers.sort((a,b)=> b-a); //sorts in decending order
// console.log(numbers);
// 9. map()
// modifies all elements of an array
// const numbers:number [] = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((num)=> num*2);
// console.log(doubledNumbers);
// 10.filter()
// filters and pick only those elements which fulfills a condition
// const numbers:number [] = [1, 2, 3, 4, 5];
// const bigNumbers = numbers.filter((num)=> num>2);
// console.log(bigNumbers);
// 11. reduce()
// reduce an array to a single value
// const numbers:number [] = [1, 2, 3, 4, 5];
// const productNmuber = numbers.reduce((product, number)=> {
//     product = product*number;
//     return product;
// });
// console.log(productNmuber);
// const numbers:number [] = [1, 2, 3, 4, 5];
// const sumNumber = numbers.reduce((total, number)=> {
//     total = total+number;
//     return total;
// },0);
// console.log(sumNumber);
// 12. foreach()
// forecah also modify the elements of an array
// const fruits:string [] = ["Orang", "Banana", "Apple"];
// fruits.forEach((fruit)=>{
//     return fruit;
// });
// console.log(fruits);
// 13. indexOf()
// const fruits:string [] = ["Orange", "Banana", "Apple","Orange"];
// console.log(fruits.indexOf("Orange"));
// 14. lastIndexOf()
// console.log(fruits.lastIndexOf("Orange"));
// 15. jion()
// jions two arrays
// const fruits:string [] = ["Orange", "Banana", "Apple","Orange"];
// const colors:string [] = ["Red", "Green", "Blue"];
// const newArray = fruits.join();
// console.log(newArray);
// 16. concat()
// const fruits:string [] = ["Orange", "Banana", "Apple","Orange"];
// const colors:string [] = ["Red", "Green", "Blue"];
// const newArray = fruits.concat(colors);
// console.log(newArray);
// 17. fill()
// fills a dersired value in an array
// const fruits:string [] = ["Orange", "Banana", "Apple","Orange"];
// const result = fruits.fill("fill method");
// console.log(result);
// 18. slice()
// cut out a specific part of an array
// const fruits:string [] = ["Orange", "Banana", "Apple", "Guva", "Graps"];
// console.log(fruits);
// const result = fruits.slice(1,3);
// console.log(result);
// 19. reverse()
// const fruits:string [] = ["Orange", "Banana", "Apple", "Guva", "Graps"];
// console.log(fruits);
// const result = fruits.reverse();
// console.log(result);
// 20. chaining array methods
// chaining array means use multiple array methods on a single Array
// const numbers:number [] = [1,2,3,4,5];
// console.log(numbers);
// const result = numbers.map((num)=> num*2).filter((num)=> num>2).reduce((total, num)=> {total=total+num return total},0);
// console.log(result);
//in the above array we used three array methods on a single array
//1 map the output is [2,4,6,8,10]
//2 then filter output is [4,6,8,10]
//3 then reduce output is 28
// 21. find()
//this method is used to find the item and it returns true or false
// const fruits:string [] = ["Orange", "Banana", "Guava"];
// console.log(fruits);
// const result = fruits.find((fruit)=> "Orange");
// console.log(result);
// 21. findIndex()
// const numbers = [10, 20, 30, 40, 50];
// const index = numbers.findIndex(
//     num => num > 25
// );
// console.log(index);
// 22. some()
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.some(num => num > 3);
// console.log(result);
// 23. every()
// const numbers = [2, 4, 6, 8];
// const result = numbers.every(
//     num => num % 2 === 0
// );
// console.log(result);
// 24. flat()
// 25. flatMap()
// 26. Array.from()
// 27. ArrayOf()
// 28. at()
// 29. toSorted()
// 30. toReversed()
// 31. arrays of objects
// type Users = {
//     userID:number;
//     userName:string;
// };
// const list:Users[] = [
//     {
//         userID:1,
//         userName: "Fatima"
//     },
//     {
//         userID:2,
//         userName: "Zainab"
//     }
// ];
// console.log(list);
// 32. multidimentional array
// const numbers:number [][] = [
//     [1,2,3],
//     [4,4,6],
//     [7,8,9,10]
// ];
// console.log(numbers);
// console.log(numbers[0]);
// 33. readonly arrays
// const fruits:readonly string [] = ["Orang", "Mango", "Guva"];
// console.log(fruits);
// fruits[0] = "Banana";
// console.log(fruits);
// tuples in ts
// a tuple is a special array with a defined length and defined data types
// const fruits: [string, number] = ["Mango",1];
// console.log(fruits);
// optional tuple elements
// const fruits: [string, number?] = ["Mango"];
// console.log(fruits);
// readonly tuples
// const fruits: readonly [string, number?] = ["Mango"];
// console.log(fruits);
// named tuple elements
// const fruits: [fruitName:string, fruitID:number] = ["Mango",1];
// console.log(fruits);
// rest in tuple
// syntax
// ###### Chapter No. 7 #####
// Object and Object Type in TypeScript
// object
// an object is a related data stored in key value pair.
// const user = {
//     userID:1,
//     userName: "Fatima"
// };
// console.log(user);
// console.log(user.userName);
// user.userName = "Zainab";
// console.log(user);
// objects in ts
// const user: {
//     userId:number;
//     userName:string;
// } = {
//     userId:1,
//     userName: "Fatima"
// };
// or we can decleare
// let user: {
//     userId:number;
//     userName:string;
// };
// user = {
//     userId:1,
//     userName: "Fatima"
// };
// console.log(user);
// console.log(user.userName);
// user.userName = "Zainab";
// delete user.userName;
// console.log(user);
// destructring objects
// const user = {
//     userName: "Fatima",
//     age: 25
// };
// const {userName, age} = user;
// console.log(userName);
// console.log(age);
// rest operator objects
// let user = {
//     userName:"Fatima",
//     age:25
// }
// let salary = {
//     userSalary:20000
// }
// let userFullDetails = {...user, ...salary};
// console.log(userFullDetails);
// let updatedUser = {
//     ...user,
//     userEmail:"zainab@example.com"
// }
// console.log(updatedUser);
// let user = {
//     userName:"Fatima",
//     age:25,
//     address:{
//         city:"Madeena",
//         postal:2300
//     }
// }
// let employee = {
//     ...user,
//     isWorking:true
// }
// console.log(employee);
// ##### Chapter 8 #####
// Type Aliases and Interfaces in TypeScript
// type aliases
// A Type Alias allows you to create a name for a type.
// if we need an object structure repeatedly then we make type aliases
// for example
// type Product = {
//     productId:number;
//     productName:string;
//     productDescription:string;
//     productPrice:number;
//     inStock:boolean
// }
// let product1:Product = {
//     productId:1,
//     productName:"Mouse",
//     productDescription:"Laser mouse",
//     productPrice:250,
//     inStock:true
// };
// let product2:Product = {
//     productId:2,
//     productName:"Keyboard",
//     productDescription:"Laser keyboard",
//     productPrice:500,
//     inStock:false
// };
// Type Aliases with arrays
// type Product = {
//     productId:number;
//     productName:string;
//     productDescription:string;
//     productPrice:number;
//     inStock:boolean
// }
// const products:Product [] = [
//     {
//     productId:1,
//     productName:"Mouse",
//     productDescription:"Laser mouse",
//     productPrice:250,
//     inStock:true
// },
// {
//     productId:2,
//     productName:"Keyboard",
//     productDescription:"Laser keyboard",
//     productPrice:500,
//     inStock:false
// }
// ];
// console.log(products);
// let result = products.map((product)=> product.productDescription);
// console.log(result);
// interfaces
// An Interface is another way to define the structure of an object.
// interface Product  {
//     productId:number;
//     productName:string;
//     productDescription:string;
//     productPrice:number;
//     inStock:boolean
// }
// const product1:Product = {
//     productId:1,
//     productName:"Mouse",
//     productDescription:"Laser mouse",
//     productPrice:250,
//     inStock:true
// }
// console.log(product1);
// extends in interface
// interface ProductSalesPrice extends Product {
//     salesPrice:number;
// }
// const product2:ProductSalesPrice = {
//     productId:5,
//     productName:"Printer",
//     productDescription:"Laser printer",
//     productPrice:900,
//     inStock:true,
//     salesPrice:1000
// }
// console.log(product2);
// intersection type
// it is used to jion the types
// symbol & is used to denote this
// type PersonalInfo = {
//     name: string;
//     age: number;
// };
// type ContactInfo = {
//     email: string;
//     phone: string;
// };
// type Employee = PersonalInfo & ContactInfo;
// const employee: Employee = {
//     name: "Ali",
//     age: 28,
//     email: "ali@example.com",
//     phone: "03001234567"
// };
// console.log(employee);
// Interface
// interface User {
//     userName:string;
//     age:number;
// };
// const user1:User = {
//     userName:"Fatima",
//     age:25
// };
// console.log(user1);
// with arrays
// interface User {
//     userName:string;
//     age:number;
// };
// const users:User [] = [
// {
//     userName:"Fatima",
//     age:25
// },
// {
//     userName:"Haleema",
//     age:20
// }
// ];
// console.log(users);
// Enums
// is used to define the constants
// enum Role {
//     Admin,
//     User
// }
// console.log(Role.Admin); //output 0 as showing index
// custom numeric enum
// enum Role {
//     Admin= 50,
//     User=60
// }
// console.log(Role.Admin); //output 0 as showing index
// string enum definition
// enum Role {
//     Admin="ADMIN",
//     User="USER"
// }
// console.log(Role.Admin);
// advance types (any, unknown, never, type assertions (as) etc)
// any means there can be any value in this variable stop checking type
// for example
// let userName:any;
// userName="Fatima";
// console.log(userName);
// console.log(typeof userName);
// userName=1;
// console.log(userName);
// console.log(typeof userName);
// avoide any
// unknown
// safe to use as we use this after codition
// let userName:unknown = "Fatima";
// userName = 1;
// console.log(userName.toUpperCase());
// console.log(typeof userName);
// so we can do this
// if(typeof userName === "string"){
// console.log(userName.toUpperCase());
// }else{
// console.log(userName);
// }
// never
// represents value that never occur.
// type assertion
// type assertion tells ts trust me i know the exact type.
// let userName:unknown = "Fatima";
// let nameLen = (userName as string).length;
// console.log(nameLen);
// non-null assertion (!)
// tells ts this value will not be null or undefined
// const fieldValue = document.getElementById("name")!;
// type guard
// is a technique used to narrow a type.
// if string | number
// ts doest not know which type is currently stored we should check first
function displayName(name) {
    if (typeof name === )
         = "string";
    {
        console.log(name.toUpperCase());
    }
}
displayName("Fatima");
//# sourceMappingURL=app.js.map