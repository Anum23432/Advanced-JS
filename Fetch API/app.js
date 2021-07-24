//   fetch('https://jsonplaceholder.typicode.com/posts').then(function(response){
//      console.log(response, "Response"); 
//      return response.json()
//  }).then (function (body){
//      console.log(body, "body");

// }). then (function (body){
//     console.log(body, "body");
// document.querySelector(".class-body")[0].innerHTML = body[0].id;
// document.querySelector(".class-body")[1].innerHTML = body[0].userid;
// document.querySelector(".class-body")[2].innerHTML = body[0].title;
// document.querySelector(".class-body")[3].innerHTML = body[0].body;
// });



// fetch("people.json ").then(function(response){
//     console.log(response, "Response")
//     return response.json();
// }).then(function(body){
//     console.log(body, "body")
//     document.querySelector("#main")[0].innerHTML= body.date;
//  })

// fetch('https://jsonplaceholder.typicode.com/posts').then(function(response){
//     return response.json();
// }).then (function(obj){
//    console.log(obj);
// }).catch(function(error){
//     console.error("something went wrong..");
//     console.error(error)
// });

// fetch('https://jsonplaceholder.typicode.com/posts').then(function(response){
//     return response.json();
// }).then (function(obj){

//    document.getElementById('container-1').innerHTML = userID.map(user => 
//     `<div>
//      <div>UserID: ${user.id}</div>
//      // <div>Title: ${user.title}</div>
//      // <div>Body: ${user.body}</div>
//     //</div>`
// ).join('')
//   console.log(obj);
// }).catch(function(error){
//    console.error("something went wrong with retrieving people");
//    console.error(error)
// });
fetch ('https://jsonplaceholder.typicode.com/posts'). then( function (response){
    console.log(response);
    document.getElementById('container-2')[0].innerHTML= user.id;
    document.getElementById('container-3')[1].innerHTML= user.userId;
    document.getElementById('container-4')[2].innerHTML= user.title;
    document.getElementById('container-5')[3].innerHTML= user.body;
    //console.log( response.json(user));
}).then (function (userID){
            document.getElementById('conatiner-1').innerHTML = userID.map(user => 
                `<div>
                  <div>Id: ${user.id}</div>
                  <div>User Id: ${user.userId}</div>
                  <div>Title: ${user.title}</div>
                  <div>Body: ${user.body}</div>
                </div>`
            ).join('') 
});