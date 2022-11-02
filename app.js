// var i=9;
// while(i <= 100){
//     document.write("Hafiz Sheraz Hanif Khan<br>");
//     i=i+1;
// }
// var a =4;
// var b=3;
// function myfunction (a,b){
//     return a*b
// }
// document.write(a*b)
// var a=0;
// var id=setInterval(Anim,1000);

// function Anim(){
//     a=a+10;
//     if(a==200){
//       clearInterval(id);
//     }
//     else{
//         var target=document.getElementById("test");
//         target.style.marginLeft=a+'px';
//     }

    
// }
// dom me hm  is chezo se h1 ya paragraph ya div ko in chezo se target kr sakty hai
// Id
// class
// TagName
// Jb Hum Class name ko target krna chaty hy to hm likhy gy document.getelementsbyclassname(name)
// Jb hum tag ko target karygy to hm likhy gy document.getElementsByTagName()
// var element;
// element=document
// console.log(element)

//Lexical scope
// var a="hello guys";
// function first(){
//     var b="how are you";
//     second();
// }
// function second(){
//     var c="Myself Vinod Thapa";
//     console.log(a+b+c);
// }
// first();

// let mySet=new Set([1,45,'this',false,{a:4}])
// console.log('New set',mySet)

//Event Bubbling

// {
//     var a="1. var a:30 <br>";
//     let b="2. let a:40 <br>";
//     const c="3. const a:50 <br>";
//     document.write(a);
//     document.write(b);
//     document.write(c);
// }
// document.write(a);
//     document.write(b);
//     document.write(c);

// const outerFun=(a)=>{
//     let b=10;
// const innerFun=()=>{
//     let sum=a+b;
//     console.log('the sum of two no.is${sum}.');
//     }
//     return innerFun;
// }
// let inner=outerFun(5);

// console.dir(inner);



// var arr=[10,20,30,40,50]
// var newArr=arr.map(function(value,i,ar){
// value++;
// console.log(i,value);
// })
// console.log(arr);

// var ages=[10,12,19,20];
// document.write(ages+  "<br><br>");
// var b=ages.filter(checkAdult);
// document.write(b+"<br><br>");

// function checkAdult(age){
//     return age >=18;
// }

// const youtuber1={
//     name:"Hafiz Sheraz Hanif Khan",
//     content:"programing",
//     feature:function(){
//         console.log('very friendly way of teaching. ${this.name} is my fav ${this.content} channel')
//     }
// }
// youtuber1.feature();

//  async function test (){
//     console.log("2: Message");
//     await console.log("3: Message");
//     console.log("4: Message");
//  }
// console.log("1:Message");
// test();
// console.log("5: Message");
fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=>{
   return response.text();
}).then((data)=>{
    document.write(data);
});




























































