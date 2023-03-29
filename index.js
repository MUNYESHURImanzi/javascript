const main=document.createElement("div");
main.id="main";
const text=document.createElement("h3");
text.id="text";
text.innerText="hello world";

const p1=document.createElement("p");
p1.id="p1";
p1.innerText="today are learnind  javascsript";

const hash=document.createElement("p");
hash.id="hash";
hash.innerText="#make progress";

const java=document.createElement("h1");
java.id="java";
java.innerHTML="javascsriptis powerfull";

const link=document.createElement("a");
link.id="link";
link.innerText="youtube";
link.href="www.youtube.com";

main.appendChild( text);
main.appendChild(p1);
main.appendChild(hash );
main.appendChild(java );

 
let black= document.getElementById("black");
let today = new Date();
black.innerHTML=today;
let birthdate=new Date ("2005-04-16");
black.innerHTML=birthdate;

let website =window.location.href;
let address= document.getElementById("address")
address.innerHTML= website;


 website =window.location.host;
 address= document.getElementById("address");
address.innerHTML= website;

website =window.location.protocol;
address= document.getElementById("address");
address.innerHTML= website;

website =window.location.port;
 address= document.getElementById("address");
address.innerHTML= website;

let history=window.history.length;
let back= document.getElementById("back");
back.innerHTML= history;

window.alert("hello class");

window.location.href="www.instagram.com";
Window.location.replace("www.twitter.com")

// today

