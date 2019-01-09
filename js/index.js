//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

//to create an element
let element = document.createElement('div');

//setting properties on element.
element.innerHTML = "Hello powerful Wizaard!";
element.style.background = '#f9f9f9';

//will add the new div element to the page on to the body.
document.body.appendChild(element);

element.style.textAlign = 'center';

let ul = document.createElement('ul');
for(let i = 0;  i< 3; i++){
let li = document.createElement('li');
li.innerHTML = (i + 1).toString();
ul.appendChild(li);
}
element.appendChild(ul);

ul.style.textAlign = 'left';
