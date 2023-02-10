console.log("I am afull stack developer");
const student={
    name:"ABUL",
    id:11,
    study:function(){
        console.log("He is studing")
    }
}
  
const ulList=document.getElementsByTagName('li');
console.log(ulList)
ulList[0].style.backgroundColor='red'
ulList[1].style.backgroundColor='yellow'
ulList[2].style.backgroundColor='blue'
for(let li of ulList){
    console.log(li)
}

console.log("I am a full stack developer")

const all_h1=document.getElementsByTagName('h1');

console.log(all_h1)
for(let h1 of all_h1){
    console.log(h1.textContent);
}
const fruitId=document.getElementById('fruits-title')
fruitId.style.backgroundColor='red'
fruitId.style.color='white'
fruitId.style.padding='10px 20px'
const allStyle=document.getElementsByClassName('importnt-place')
console.log(allStyle)
allStyle[0].style.color='yellow'
allStyle[0].style.backgroundColor='red'
allStyle[1].style.color='red'
allStyle[1].style.backgroundColor='green'
for(let my of allStyle){
    console.log(my.textContent);
}

let h111=document.querySelectorAll('.h11');
console.log(h111);
h111[0].style.color='blue';
h111[1].style.color='aqua';
h111[2].style.color='green'
for(helement of h111){
    console.log(helement.textContent)
}

let q_0=document.querySelector('.h11');
q_0.style.backgroundColor='black'
console.log(q_0);
console.log(q_0.getAttribute('class'));
q_0.setAttribute('id','rifatIs');
q_0.classList.add('rifatIs2')
q_0.classList.remove('rifatIs2');
console.log(q_0);

let allSection=document.querySelectorAll('section');
console.log(allSection);
for(let singleSection of allSection){
    singleSection.style.border='2px solid black';
    singleSection.style.padding='10px 20px'
    singleSection.style.marginBottom='20px'
}

let all_container=document.getElementById('places-container');
 all_container.classList.add('all_containerStyle')
console.log(all_container)

console.log(all_container.childNodes);
console.log(all_container.childNodes[0].textContent)
console.log(all_container.childNodes[1].childNodes[2].nextSibling);
console.log(all_container.childNodes[2])


const PlaceList=document.getElementById('all-places-list');
const li=document.createElement('li');
const li_text_4=document.createTextNode('Canada');
const countryText=li.appendChild(li_text_4);
PlaceList.appendChild(countryText)
console.log(PlaceList);

//make a section
const mainContainer=document.getElementById('main-container');
const section=document.createElement('section');
const h1=document.createElement("h1");
h1.innerText="Abu Al Shahriar Rifat"
const myHeading=section.appendChild(h1);
console.log(myHeading.textContent);
mainContainer.appendChild(myHeading);
const ul=document.createElement('ul');
mainContainer.appendChild(ul);
const li1=document.createElement('li');
ul.appendChild(li1);
li1.innerText="List-1";
const li2=document.createElement('li');
ul.appendChild(li2);
li2.innerText="List-2";
const li3=document.createElement('li');
ul.appendChild(li3);
li3.innerText="List-3";
console.log(mainContainer);


const allli=document.getElementsByTagName('li');
console.log(allli);

const allTitile=document.getElementsByClassName('section-title');
console.log(allTitile)