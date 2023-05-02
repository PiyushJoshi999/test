// function outerfunction() {

//     console.log(a);
    
//     var a = 10;
    
    
    
//     innerfunction();
    
    
    
//     function innerfunction() {
    
//     console.log(a);
    
//     console.log(window.a);
    
//     console.log(this.a)
    
//     }
    
//     }
    
    
    
//     var a = 7;
    
//     var b =3
    
    
    
//     outerfunction();

    // var obj = {
    //     "key1" : "value1",
    //     "key2" : "value2",
    //     "key3" : "value3",
    //     "key4" : "value4"

    // }

    // //Iterating through the object:
    // Object.keys(obj).forEach(key =>{
    //     console.log(obj(key));
    // })
    
//    console.log('a');
//    console.log('b');
//    setTimeout(() => console.log('c'),1000);
//    setTimeout(()=>console.log('d'),0);
//    console.log('e');

//var arr = [1,2,3,5];
// var newArr = arr.forEach((item,i) => {
//     console.log(item + 'index' + i);
//     return (item+i);
// })
// var newArr = arr.map((item,i) => {
//     console.log(item + 'index' + i);
//     return (item+i);
// })

//console.log(newArr);

// console.log(printName());

// console.log(a);



// var a = 3;



// var printName = (name) => {

// console.log(name)

// }

//CLOSURES//

//Function along with its lexical scope(lexical environment) bundulled together forms a closuers: 

// function x(){
//     var p = 27;
//     function y(){
//         console.log(p);
//     }
//     y();
// }
// x();

//We can also return the whole function from a function:

// function x(){
//     var p = 27;
//     function y(){
//         console.log(p);
//     }
//     return y;
// }
// var z = x();
// console.log(z);//It returns the whole y function.

// z();//returns 27 as output as it still maintain its lexical environment.


//Another Example:
// function z(){
//     var b = 1999;
//     function x(){
//         var a = 27;
//         function y(){
//             console.log(a, b);
//         }
//         y();
//     }
//     x();
// }
// z();

//USES OF CLOSUERS//
/*
1) Module design pattern.
2) currying
3) Functions like once
4) Memoize
5) Maintaining state in async world
6) setTimeouts
7) Iterators...etc. */

// function x(){

//     let a = 10;
    
//     function y(){
    
//     console.log(a);
    
//     }
    
//     a= 50;
    
//     return y;
    
//     }
    
    
    
//     const z = x()
    
//     console.log(z());

    //Difference between call, apply and bind:
    //Online html,css and js compiler jsfiddle.net

    // var obj = {
    //     num : 10
    // };

    // var obj2 = {
    //     num : 5
    // };

    // var addToThis = function(a){
    //     return (this.num+a);
    // }

    //console.log(addToThis.call(obj, 5));//Output: 15
    //functionname.call(obj, functionargument);

    //In case of multiple arguments we can use:
//     var addToThis = function(a, b, c){
//         return (this.num+a+b+c);
//     }

//    console.log(addToThis.call(obj, 1, 2, 3));//This will print the output: 16

//    var add = [1,2,3];
//    console.log(addToThis.apply(obj, add));//this will also print the output:16
//    console.log(addToThis.apply(obj2, add));//This will print the output:11
   
//    var bound = addToThis.bind(obj);
//    console.dir(bound);
//    console.log(bound(1,2,3));


// var obj = {

//     val: 100
    
//     }
    
//     function fun(a, b , c){
    
//     console.log(this.val + a + b + c)
    
//     }
    
//     const fun2 = fun.bind(obj)
    
    
    
//     fun2(1, 2,3)

// function y(){
//     setTimeout(() => console.log("a"),1000);
//     console.log('Done Coding');
// }
// y();
//Output: Done Coding(line1) a (line 2)

// function y(){
//     setTimeout(() => console.log("a"),0);
//     console.log('Done Coding');
// }
// y();
//Output: Done Coding(line1) a(line2)

// function y(){
//         for(var i = 1; i<6; i++){
//             setTimeout(() => console.log(i), i*1000);
//         }
//         console.log("Done Coding");
// }
// y();

//Output: Done Coding(line1) 6(line 2)

// function y(){
//     for(let i = 1; i<6; i++){
//         setTimeout(() => console.log(i), i*1000);
//     }
//     console.log("Done Coding");
// }
// y();

//Output: Done Coding(line1) 1 2 3 4 5(line 2)


// const name = (arr) => {
//     let index = 0;
//     return () => {
//       if (index < arr.length) {
//         console.log(`Hello ${arr[index]}`);
//         index++;
//       } else {
//         console.log('No more names to print.');
//       }
//     };
//   };
  
//   let fun = name(["Ram", "Shyam"]);
  
//   fun(); // Print Hello Ram
  
//   fun(); // Print Hello Shyam

//   fun();//Print "No more names to print"

  //FUNCTIONS IN JAVASCRIPT//
  //ANONYMOUS FUNCTION: A function without a name is called as anonymous function.

  //FUNCTION STATEMENT aka FUNCTION DECLARATION:
//   a();
//    function a(){
//     console.log('a called');
//    }
//    //a();
   
//    //FUNCTION EXPRESSION:
//    //Major difference between function statement and function expression is Hoisting.

//     //b();
//     var b = function(){
//         console.log('b called');
//     }
//     //b();

//     //ANONYMOUS FUNCTION:This functions are used when the functions are used as values.

//     // function(){

//     // } this produce syntax error: function statement require a function name.

//     //NAMED FUNCTION EXPRESSION:
//     var p = function xyz(){
//         console.log('Bong');
//     }
//     p();
//     //xyz();//produce reference error:xyz() is not defined.

//     //Difference between function parameters and function arguments:
//     var s = function (para1, para2){ //Here para1 and para2 is called as function parameters
//         console.log(para1+para2);
//     }
//     s(2,3); //Here 2 and 3 is called as function arguments.

//     //FIRST CLASS FUNCTIONS:
//     //Passing a function inside another function as an argument is called as first class function.
//     //First class functions has the ability to use functions as values.
    
//     var d = function (param1){
//         console.log(param1);
//     }
//     function sv(){
//         console.log('True');
//     }

//     d(sv);

// function fun1(a){

//     const fun2 = (b) => {
    
//     a = a + b;
    
//     console.log(a)
    
//     }}
    
    
    
//     fun1(10)(30)

    
//CALL-BACK FUNCTIONS:
// setTimeout(() => console.log('timer1 expired'), 1000)



// setTimeout(() => console.log('timer2 expired'), 0)



// function x(y) {

// console.log('inside x');

// y();

// }



// x(function y(){

// setTimeout(() => console.log('inside y'), 0)

// })



// //Syntax to pass n number of arguments to the function using the fat arrow function:
// // var x = (...n) => {
// //     console.log(n[0]);//Output: 1
// // }

// // x(1,2,3);

// // //While for the normal function we can use this syntax:

// // var y = function(){
// //     console.log(arguments[0]);//Output: 2
// // }
// // y(2,3,4);


// // var fun = a => a
// // var a = 10;
// // console.log(fun(a)); // output: 10

// // var fun = a => a

// // console.log(fun(a))

// // var a =10; //Output: undefined

// // var fun = a =>{ a }

// // var a =10;

// // console.log(fun(a)) //Output: undefined

// // var fun =( a, b) =>{

// //     var sum = a + b
    
// //     return sum
    
// //     }
    
// //     var a =10;
    
// //     var b = 20
    
// //     console.log(fun(a, b)) //output: 30

// //VERY IMPORTANT TOPIC//
// //EVENT LOOP//
// //Javascript is a single threaded language, it has 1 CALL STACK which can only do one thing at a time.
// //Whenever a javascript code runs, a GLOBAL EXECUTION CONTEXT is created and it then pushed inside the call stack.
// //For example:

// // function a(){
// //     console.log('a');
// // }
// // a();
// // console.log('End');
// // //ooutput: a(line1) End(line2)

// // //In this e.g., first memory is created for function a and whole function is stored in it and then another execution context is created for function a where code inside function a executes line by line.
// // //Inside the browser there is javascript engine which contains call stack, local storage, timers, urls,etc..
// // //WEB APIs:(API = Application Programming Interface)
// // //A browser API can extend the functionality of a web browser and a server API can extend the functionality of web server.
// // //WEB APIs consists of:setTimeout(), Dom APIs, fetch(), local storage, console, location etc..

// // console.log('Start');
// // setTimeout(function cb(){
// //     console.log('CALL BACK');
// // }, 5000);
// // console.log('End');
// // //In this example both console.log will get executed first in the call stack, but when the 5000msec timer expires, the cb function needs to get push into the call stack.
// // //This gets done using the CALLBACK QUEUE. As the timer expires, the cb() is pushed inside the callback queue.
// // //Now, here comes the EVENT LOOP. Event loop checks whether there's something inside the callback queue, it then pushes it inside the call stack.


// // //SPREAD OPERATOR
// // const obj1 = {
// //     key1 : "Pune",
// //     key2 : "Satara"
// // }

// // //const obj2 = obj1;//this will store the reference of obj1,thus if we change something in obj2, obj1 will also get change.

// // //const obj2 = {...obj1};
// // //obj2.key2 = "Latur";//By doing this obj1.key2 will not get affected.
// // //IN simpler way you can also do this.

// // const obj2 = {...obj1, key2:"Akola", key3:"Amravati"};//this is the example of spread operator for objects.

// // const arr1 = [1,2];
// // const arr2 = [3,4];
// // const arr3 = [...arr1,...arr2];//Example of spread operator for array.
// // console.log(arr3);//output:1 2 3 4 
  


// // const obj= {

// //     "key1": "value1",
    
// //     "key2" : "value2",
    
// //     "key3" : "value3"
    
// //     }
    
// //     const obj2 = { ...obj}
    
// //     console.log(obj2 === obj)
    
// // console.log(printName);
// // console.log(a);
// // var a = 100;

// // var printName =  function(name){
// //     console.log(name)
// // }

// // function outerfunction() {
// //     var a = 25;
// //     console.log(a);

// // return function innerfunction(){
// //     console.log(a);
// //     console.log(window.a);
// //     console.log(this.a);
// // }
// // }

// // var a = 5;
// // var b = 6;

// // outerfunction();

// // var a = 50;

// // function fun(){
// //     var a=30;
// //     let b=20;
// //     let c =30;
// // }
// // fun();
// // console.log(a)

// // const a = 10;
// // {
// //     const a =20;
// //     {
// //         const a =50;
// //         console.log(a);
// //     }
// //     console.log(a);
// // }
// // console.log(a)

// function x(){
//     let a = 13;
//     function y(){
//         console.log(a);
//     }
//     a = 5;
//     return y;
// }

// const z = x();
// console.log(z());

// //Asynchronous means js code continue its execution from start to end without waiting for the callback functions like setTimeout to execute.
// //While synchoronous is opposite to it.

// //Importance of callback functions:- Callback functions are very useful to perform async operations in js.
// //Issues with callback fun.:- a)Callback hell and b)Inversion of control.

// //CALLBACK FUNCTIONS:
// const posts = [
//     { title : 'Post one', text : 'This is post one'},
//     { title: 'Post two', text: 'This is post two'}
// ];
// // function getPosts(){
// //     setTimeout(() => {
// //         let output = '';
// //         posts.forEach(post, index) => {
// //             output += (post.title); 
// //         }
// //     },1000);
// // }

// // getPosts();

// //PROMISES:
// function createPosts(post){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);
//             const error = false;
//             if(!error){
//                 resolve();
//             }
//             else{
//                 reject("Error: Something went wrong");
//             }

//         },2000);
//     });
// }

// function create3rdPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'post Three'});
//             resolve()
//         }, 3000)
//     }) 
// }

// //Do not touch this function below
// function create4thPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'post Four'});
//             resolve();
//         }, 2000)
//     }) 
// }

// // Correct the lines below smartly such that post three gets printed before post four
// create3rdPost().then(create4thPost);

// //Promise.all:
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Goodbye');
// });
// Promise.all([promise1, promise2, promise3]).then(values => console.log(values));



// Sample user object
const user = {
    name: "John",
    lastActivityTime: null,
    posts: [],
  };
  
  // Function to update the last activity time of the user
  function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        user.lastActivityTime = new Date();
        resolve();
      }, 1000);
    });
  }
  
  // Function to create a new post
  function createPost(title, body) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const post = { title, body };
        user.posts.push(post);
        resolve(post);
      }, 2000);
    });
  }
  
  // Function to delete the last post
  function deleteLastPost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const lastPost = user.posts.pop();
        if (lastPost) {
          resolve(lastPost);
        } else {
          reject("ERROR: NO POSTS TO DELETE");
        }
      }, 1500);
    });
  }
  
  // Implementation of the requirements
  createPost("First Post", "This is my first post")
    .then((post1) => {
      console.log(`Post Created: ${post1.title}`);
      return updateLastUserActivityTime();
    })
    .then(() => {
      console.log(`Last Activity Time: ${user.lastActivityTime}`);
      return createPost("Second Post", "This is my second post");
    })
    .then((post2) => {
      console.log(`Post Created: ${post2.title}`);
      return updateLastUserActivityTime();
    })
    .then(() => {
      console.log(`Last Activity Time: ${user.lastActivityTime}`);
      return createPost("Third Post", "This is my third post");
    })
    .then((post3) => {
      console.log(`Post Created: ${post3.title}`);
      return updateLastUserActivityTime();
    })
    .then(() => {
      console.log(`Last Activity Time: ${user.lastActivityTime}`);
      return deleteLastPost();
    })
    .then((deletedPost) => {
      console.log(`Post Deleted: ${deletedPost.title}`);
      console.log(`Posts: ${JSON.stringify(user.posts)}`);
    })
    .catch((error) => console.log(error));
