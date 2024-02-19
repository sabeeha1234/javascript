//object.create

// const mySym = Symbol("key1")



// const JsUser = {
//     name: "sabeeha",
//     "full name": "Sabeeha shaik", 
//     [mySym]: "mykey1",
//     age: 18,
//     location: "vijayawad",
//     email: "sabeeha@google.com", 
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) 
//  console.log(JsUser[mySym])


//  JsUser.email = "sabeeha@chatgpt.com" 
//   Object.freeze(JsUser)
// JsUser.email = "sabeeha@microsoft.com"
//  console.log(JsUser);



//  JsUser.greeting = function(){ 
//     console.log("Hello JS user");
// }






// const regularUser = {
// email: "some@gmail.com", 
// fullname: {
//   userfullname: {
//     firstname: "sabeeha", 
//     lastname: "shaik"
//  }
// }
// }
// console.log(regularUser.fullname.userfullname.firstname);





// const obj1 = {1: "a", 2: "b"} 
// const obj2 = {3: "a", 4: "b"} 
// const obj4 = {5: "a", 6: "b"}
// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// const obj3 = {...obj1, ...obj2} 
//  console.log(obj3);





// const tinderUser = new Object()


// //  const tinderUser = {}
// tinderUser.id = "123abc"
//  tinderUser.name = "Sammy" 
//  tinderUser.isLoggedIn = false




// const users = [ {
//     id: 1,
//     email: "h@gmail.com" },
//     {
//     id: 1,
//     email: "h@gmail.com" },
//     {
//     id: 1,
//     email: "h@gmail.com" },
//     ]
//     users[1].email
    //console.log(tinderUser);
    // console.log(Object.keys(tinderUser));
     //console.log(Object.values(tinderUser));
     //onsole.log(Object.entries(tinderUser));
//    console.log(tinderUser.hasOwnProperty('isString'));


    //console.log("hello");
//     const tinder=new Object()
//     const tinders={}
//     const regUser={
//         email:"shaiksabeeha8784@gmail..com",
//         userid:1234556,
//         fullname:{
//             userfullname:{
//                 firstname:"sabeeha",
//                 lastname:"shaik"
//             }
//         }
//     }
// console.log(regUser.fullname.userfullname.firstname);


// const ob1={1:"a",2:"b"}
// const ob2={3:"a",4:"b"}
// const ob4={5:"a",6:"b"}
// //const ob3={ob1,ob2}
// //const ob3=Object.assign({},ob1,ob2,ob4)
// const ob3={...ob1,...ob2,...ob4}
// console.log(ob3);



const course={
    coursename:"js",
    price:999,
    courseInst:"sabeeha"

}
//course.courseInst
const{courseInst:inst}=course
console.log(inst);
