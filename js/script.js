const heart = document.querySelectorAll('.cat-img');
let title = document.querySelector('h1')


 for (let i = 0; i < heart.length; i++) {
     heart[i].addEventListener("click", function() {         
       heart[i].classList.toggle("cat-imgGG");
     });
 }

 title.textContent = `Найдено ${heart.length} котов`;

 let check = document.querySelector('[type="checkbox"]');
 let bgg = document.querySelector('label');
 
 let burger = document.querySelector('.border');

 burger.addEventListener('click', () => {
    burger.classList.toggle('visible');
 })
 // сортировка


//  let a = [1,34,6,7,3,12,6,86,56,2];

//  for (let i = 0; i < a.length; i++){
//    for (let k = i; k < a.length; k++){
//      if (a[i] > a[k]){
//        let temp = a[i];
//        a[i] = a[k];
//        a[k] = temp;
//      }
//      console.log(a);
//    }
//  }

 let sortPrice = document.querySelector('.sort');
 let sortAge = document.querySelector('.age')

 sortPrice.addEventListener('click', () => {
   mySort('data-price');   
 })

 sortAge.addEventListener('click', () => {
  mySortAge('data-age');   
})

 function mySort (sortType){
  let price = document.querySelector('.main-card');
  for (let i = 0; i < price.children.length; i++){
    for (let k = i; k < price.children.length; k++){
      if (+price.children[i].getAttribute(sortType) > +price.children[k].getAttribute(sortType)){
        replacedNode = price.replaceChild(price.children[k], price.children[i])
        insertAfter(replacedNode, price.children[i]);
      }
    }
  }
 }

 function mySortAge (sortType){
  let price = document.querySelector('.main-card');
  for (let i = 0; i < price.children.length; i++){
    for (let k = i; k < price.children.length; k++){
      if (+price.children[i].getAttribute(sortType) > +price.children[k].getAttribute(sortType)){
        replacedNode = price.replaceChild(price.children[k], price.children[i])
        insertAfter(replacedNode, price.children[i]);
      }
    }
  }
 }

 function insertAfter (elem, refElem) {
   return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
 }
 
