import _ from 'lodash'
import './style.scss'
import img from './books-768426_1920.jpg'
import compList from './comp.json'
import simpleParallax from 'simple-parallax-js';

// import './compFields.js';

// console.log(compList.activityFields)


function menuComponent(listOfItems, type) {

    let name = 'menu '

    const menu = document.createElement('div');
    menu.className = name.concat(type);

    for (var item of listOfItems) {
        console.log(item.acr);
        console.log(item.text);
        let menuItem = document.createElement('div');
        menuItem.className = menu.className.concat('item');
        menuItem.id = item.acr
        menuItem.innerHTML = item.text;
        menu.appendChild(menuItem);
        // item.innerHTML = element;
        // menu.appendChild(item)
    };

    return menu;

};

const menuList = document.getElementById('menu');
menuList.appendChild(menuComponent(compList.menuItem, 'main'));

function createList(listOfItems, type) {
    let name = 'list'

    const list = document.createElement('div')
    list.className = name.concat(type) 

    // listOfItems.forEach(el => console.log(el))


    for (var item of listOfItems) {
        console.log(item.acr)
        console.log(item.text)
        var listItem = document.createElement('div');
        listItem.className = list.className.concat(' items textForm');
        listItem.id = item.acr;
        listItem.innerHTML = item.text;
        list.appendChild(listItem);
    };

    return list;

}


const competenceList = document.getElementById('competenceList');
competenceList.appendChild(createList(compList.activityFields, 'competence'));


// menuComponent()

// document.body.appendChild(menuComponent());

function addPicture() {
    const myImg = new Image(1500, 1200);

    myImg.src = img;
    myImg.className = 'image';

    document.getElementsByClassName('contentGreeting')[0].appendChild(myImg);

    const image = document.getElementsByClassName('image');
    new simpleParallax(image, {
        orientation: "right"
    });

}

addPicture();


function contentComponents() {

    const contentComponent = document.createElement('div');
    contentComponent.className = 'content';

    return contentComponent;

}

// document.body.appendChild(contentComponents())



function contentOnMouseEnter() {

    const list = compList.activityDescriptions;
    
    for(let i = 0; i < list.length; i++){
        
        document.getElementById(list[i].acr).onmouseenter = function(event) {
            let target = event.target;
            const desc = document.createElement('div');
            desc.style.opacity = 0;
            desc.innerHTML = list[i].text;
            target.appendChild(desc)
            let steps = 0;
            let timer = setInterval(function() {
                steps++;
                desc.style.opacity = 0.05 * steps;
                if(steps >= 20) {
                    clearInterval(timer);
                    timer = undefined;
                }
            }, 50);
            target.style.background = '#D8C3A5';
            target.style.color = '#8E8D8A'
        };

        document.getElementById(list[i].acr).onmouseleave = function(event) {
            let target = event.target;
            let c = target.childNodes[1];    
            c.remove();
            target.style.background = '';
        };
        
        
    };

}


contentOnMouseEnter();



const Sections = document.getElementsByClassName('contentBox');
// console.log(Sections);


function getSectionIds(Sections) {
    
    let idSelections = []; 
    
    for (let i = 0; i < Sections.length; i++) {
        idSelections.push(Sections[i].attributes.id.textContent);
    }
    
    return idSelections;
    
};



function getButtonId(Ids) {
    let buttonIds = [];
    for (let i = 0; i < Ids.length; i++) {
        buttonIds.push(Ids[i].acr); 
    }
            
    return buttonIds
};

console.log(compList.menuItem.length)

console.log(getSectionIds(Sections));



function scrollThereNow() {
    
    for(let i = 0; i < Sections.length; i++){
        
        let elmnt = document.getElementById(buttonIds[i]);
        let targetLoc = document.getElementById(Ids[i]);
        elmnt.addEventListener('click', function() {
            
            targetLoc.scrollIntoView({behavior: 'smooth'});
            
        });
        
    }
}


const buttonIds = getButtonId(compList.menuItem);
const Ids = getSectionIds(Sections);

scrollThereNow();

function backUp() {
    let homeDude = document.getElementById("compName");
    let loc = document.getElementById("startImg");
    homeDude.addEventListener('click', function() {
        loc.scrollIntoView({behavior: 'smooth'});
    })
}

backUp();


// function goHome() {
    
//     let homeButton = document.getElementById('compName');
//     // let targetLoc = document.getElementById(Ids[i]);
//     homeButton.addEventListener('click', function() {

//         window.location.href = "/";
//         // targetLoc.scrollIntoView({behavior: 'smooth'});
            
//     });
    
// }


// goHome();




const checkpoint = 500;

window.addEventListener("scroll", () => {
   const currentScroll = window.pageYOffset;
   let opacity = 1
   if (currentScroll <= checkpoint) {
     opacity = 1 - currentScroll / checkpoint;
   } else {
     opacity = 0;
   }
   document.querySelector(".contentGreeting").style.opacity = opacity;
});

