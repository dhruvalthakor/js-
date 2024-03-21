
  let name=document.getElementById("name") ;
  let email=document.getElementById("email") ;
  let phone=document.getElementById("phone") ;
  let password=document.getElementById("password") ;
let bd=document.getElementById("tb") ;
let btn=document.getElementById("one") ;
let arr=[] ;
  document.getElementById("myForm").addEventListener("submit",function(e){
e.preventDefault() ;

let row=document.createElement("tr") ;
let td1=document.createElement("td") ;
td1.innerText=name.value ;
let td2=document.createElement("td") ;
td2.innerText=email.value ;
let td3=document.createElement("td") ;
td3.innerText=phone.value ;
let td4=document.createElement("td") ;
td4.innerText=password.value ;
row.append(td1,td2,td3,td4) ;
bd.append(row) ;
let obj={
  name:name.value ,
  email:email.value ,
  phone:phone.value ,
  password:password.value ,
}
  arr.push(obj) ;

 
  }) ;

  



//   btn.addEventListener("click" ,function(){
    document.getElementById("myForm").addEventListener("submit",function(e){
  arr.sort(function(a,b){
    return a.phone-b.phone ;
  })
bd.innerHTML="" ;

  for(let i=0 ; i<arr.length; i++){
    console.log(arr[i]) ;
    let row=document.createElement("tr") ;
let td1=document.createElement("td") ;

td1.innerText=arr[i].name ;

let td2=document.createElement("td") ;
td2.innerText=arr[i].email;
let td3=document.createElement("td") ;
td3.innerText=arr[i].phone ;
let td4=document.createElement("td") ;
td4.innerText=arr[i].password ;
row.append(td1,td2,td3,td4) ;
bd.append(row) ;
  }
 
  console.log(arr) ;
  })

 

