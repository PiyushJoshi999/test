//Examine the document object

//console.dir(document); //to print all the properties and methods of the document object.
// console.log(document.domail);
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
const tg = document.getElementsByTagName('li');
tg[0].textContent = 'Text changed';
tg[0].style.fontWeigth = 'bold';
tg[2].style.backgroundColor = 'green';
tg[1].style.color = 'black'
for(let i=0;i<tg.length;i++){
    tg[i].style.color = 'black';
    tg[i].style.fontWeight = 'bold';
}
