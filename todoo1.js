let result=document.getElementById("button");
let pop=document.getElementById("inputfield").value;
console.log(pop);
let task=document.getElementById("container");

result.addEventListener('click',function(){

var paragraph=document.createElement('p')
task.appendChild(paragraph);
paragraph.classList.add("paragraph-styling ")
paragraph.innerText=inputfield.value;
inputfield.value="";
console.log(pop.v,'hhhh');


})
