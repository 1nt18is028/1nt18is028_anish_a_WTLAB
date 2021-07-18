
// const submit = document.getElementById("submit");


let s = new Set();

function func(){
    var user =document.getElementById("user");
    var pass= document.getElementById("password");
    
    let obj={
        'username': user.value,
        'password' : pass.value
    }
    s.add(obj);
    console.log(s);
} 
