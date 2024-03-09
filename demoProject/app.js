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
