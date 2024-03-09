// document.write("Hello")
// let a1="<li>HTMl</li>";
// var a=100;
// a=200;
// let b=200;
// b=300;
// const c=300;
// console.log(a)
// console.log(b)
// console.log(c)
// {
//     console.log(a)
// }
// {
//     console.log(b)
// }
// {
//     console.log(c)
// }
// document.getElementById("head").innerHTML=a;
// document.getElementById("head").innerText=a;
// document.getElementById("head").className="bg-primary text-white";

// function demo()
// {
//     var a= 100;
//     console.log("demo function" +a);
//     console.log("demo function",a);
//     console.log(`demo function: ${a}`);
// }
// demo();
// console.log(a);

// console.log(a);

// function other(){
//     console.log(a);
// }
// other();

// let arr = [10,"arun",true,undefined,124];
// console.log(typeof(arr));
// console.log(arr);
// console.log(arr.length);

// let itemList=[];
// function addItem(){
//     let stockItem = document.getElementById("item").value;
//     itemList.push(stockItem);
//     document.getElementById("divid").innerHTML = itemList;
// }
// document.getElementById("btnid").addEventListener("click",addItem)

// let itemList=[];
// const addItem=()=>{
//     let stockItem = document.getElementById("item").value;
//     itemList.push(stockItem);
//     document.getElementById("divid").innerHTML = itemList;
//     document.getElementById("item").value='';
// }
// document.getElementById("btnid").addEventListener("click",addItem)

// let obj ={
//     firstName : "arun",
//     age : 23,
//     degree : "cse",
//     skills : ["html","css","reactjs","nodejs"],
//     data : function fun(){
//         console.log("data");
//     }
// };
// console.log(obj.data());
// console.log(obj.firstName);
// console.log(obj["skills"]);
// console.log(obj["skills"][1]);

// function ok(){
//     let obj={
// firstName : document.getElementById("name").value,
// age : document.getElementById("age").value,
// degree : document.getElementById("degree").value,

// }
//     console.log(obj.data)
// console.log(obj.firstName);
// console.log(obj.age);
// console.log(obj.degree);
// document.getElementById("divid").innerHTML=obj.firstName,obj.age,obj.degree;
// document.getElementById("name").value='';
// document.getElementById("age").value='';
// document.getElementById("degree").value='';
// }
// document.getElementById("btnid").addEventListener("click",add)

const add=()=>{
    let bp = parseInt(document.getElementById("basicPay").value)

    let hra =parseInt (document.getElementById("hra").value=(bp*10/100));
    let da = parseInt( document.getElementById("da").value=(bp*5/100));
    let tra = parseInt (document.getElementById("travelling").value=(bp*15/100));
    let pf = parseInt (document.getElementById("pf").value=(bp*15/100)); 
  
    let grosspay = parseInt(document.getElementById("gross").value=bp+hra+da+tra+pf);
    let netsalary = parseInt(document.getElementById("netsal").value=grosspay-pf)

    

}
document.getElementById("basicPay").addEventListener('keyup',add)

const ok=()=>{
    let bp = parseInt(document.getElementById("basicPay").value)

    let hra =parseInt (document.getElementById("hra").value=(bp*10/100));
    let da = parseInt( document.getElementById("da").value=(bp*5/100));
    let tra = parseInt (document.getElementById("travelling").value=(bp*15/100));
    let pf = parseInt (document.getElementById("pf").value=(bp*15/100)); 
  
    let grosspay = parseInt(document.getElementById("gross").value=bp+hra+da+tra+pf);
    let netsalary = parseInt(document.getElementById("netsal").value=grosspay-pf);
    document.getElementById("tableid").innerHTML+=`<tr><td>${bp}</td><td>${hra}</td><td>${da}</td><td>${tra}
    </td><td>${pf}</td><td>${grosspay}</td><td>${netsalary}</td></tr>`
}
document.getElementById("btnid").addEventListener('click',ok)