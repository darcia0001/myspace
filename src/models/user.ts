export interface User{
    id?:number |string;
    firstname:string; 
    lastname:string;
    login:string;
    password:string;
} 

 function a(){
    console.log("donner le nombre 1");
    let n1;
    console.log("donner le nombre 2");
    let n2; 
    return n1+n2
 }
 function b(){
    console.log("donner le nombre 1");
    let n1;
    console.log("donner le nombre 2");
    let n2; 
    return n1*n2
 }

 function ab(operation){
    console.log("donner le nombre 1");
    let n1;
    console.log("donner le nombre 2");
    let n2; 
    if(operation=="+"){
        return n1+n2
    }else 
    return n1*n2
 }