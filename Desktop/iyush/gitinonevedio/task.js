//Examine the document object

//console.dir(document); //to print all the properties and methods of the document object.
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

//GETELEMENTBYID//

// const ht = document.getElementById('header-title');
// console.log(ht);
// ht.innerText = 'Hello'; //innertext and textcontent are almost same but innertext pays more attention to styling 
// ht.textContent = 'Goodbye';
// ht.innerHTML = '<h1>Hii</h1>';
// const header = document.getElementById('main-header');
// ht.style.borderBottom = 'solid 3px #000';
// header.style.borderBottom = 'solid 3px #000';

//GETELEMENTSBYCLASSNAME//
// const items = document.getElementsByClassName('list-group-item');
// items[0].textContent = 'Text changed';
// items[0].style.fontWeigth = 'bold';
// items[2].style.backgroundColor = 'green';
// items[1].style.color = 'black';

// for(let i=0;i<items.length;i++){
//     items[i].style.color = 'black';
//     items[i].style.fontWeight = 'bold';
// }

//GETELEMENTSBYTAGNAME//
// const tg = document.getElementsByTagName('li');
// tg[0].textContent = 'Text changed';
// tg[0].style.fontWeigth = 'bold';
// tg[2].style.backgroundColor = 'green';
// tg[1].style.color = 'black';
// for(let i=0;i<tg.length;i++){
//     tg[i].style.color = 'black';
//     tg[i].style.fontWeight = 'bold';
// }

//QUERYSELECTOR//
//In query selector we can use all elements of the html like the class name, tag name etc.

// const qs = document.querySelector('#main-header');
// qs.style.borderBottom = 'solid 4px #000';

// let input = querySelector('input');
// input.value = 'Hello World';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send';

// const item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green';
// secondItem.style.fontWeight = 'bold';


// //QUERY SELECTOR ALL//

// const titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// const odd = document.querySelectorAll('li:nth-child(odd)');

// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = 'green';
// }

// const secItem = document.querySelectorAll('li:nth-child(2)');
// secItem.style.color = 'green';

//TRAVERSING THE DOM//

const itemList = document.querySelector('#items');

//parentNode property:
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// //PARENT ELEMENT PROPERTY//

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

// //CHILD NODES//
// console.log(itemList.childNodes);

//CHILDREN NODE//

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// //FIRST ELEMENT CHILD//

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

//LAST ELEMENT CHILD//

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 5';

//nextElementSibling//

console.log(itemList.nextElementSibling);

//previousElementSibling//

console.log(itemList.previousElementSibling);

itemList.previousElementSibling.style.color = 'orange';

//CREATE ELEMENT//

//Create a div

const newDiv = document.createElement('div');
console.log(newDiv);

//adding class to div

newDiv.className = 'Hii';

//adding id to div
newDiv.id = 'hello';

//adding attribute

newDiv.setAttribute('title', 'Hello Div');

//Create text node

const newDivText = document.createTextNode('Hello Piyush');

//adding text to div

newDiv.appendChild(newDivText);

const container = document.querySelector('header .container');

const h1 = document.querySelector('header h1');
console.log(newDiv);

container.insertBefore(newDiv, h1);

newDiv.style.fontSize = '30px';

//Adding hello world before text1
const nd = document.createElement('div');

nd.className = 'text';
nd.id = 'text1';
nd.setAttribute('title', 'hii');
const ndtext = document.createTextNode('Hello World');
nd.appendChild(ndtext);
const ap = document.querySelector('div .container');
const h = document.querySelector('div h2');
ap.insertBefore(nd, h);










