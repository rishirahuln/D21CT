let div=document.createElement("div");
div.style.textAlign="center";

let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

let button=document.createElement("button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.addEventListener("click",foo);

let box=document.createElement("div");
box.style.paddingTop="30px";
box.style.color="red";

let active=document.createElement("div");
active.setAttribute("id","active");

let recovered=document.createElement("div");
recovered.setAttribute("id","recovered");

let death=document.createElement("div");
death.setAttribute("id","death");

let error=document.createElement("div");
error.setAttribute("id","error");

box.append(active,recovered,death,error);
div.append(input,button,box);
document.body.append(div);

async function foo(){
    try {
        let countryname=document.getElementById("country").value;
        let url=`https://api.covid19api.com/dayone/country/${countryname}`;
        let res=await fetch(url);
        let res1=await res.json();
        let index=res1.length-1;
        active.innerHTML=`Total active cases: ${res1[index].Active}`;
        recovered.innerHTML=`Total recovered cases: ${res1[index].Recovered}`;
        death.innerHTML=`Total death cases: ${res1[index].Deaths}`;
    } catch (error) {
        error.innerHTML=`Data unavailable`;
    }
}
