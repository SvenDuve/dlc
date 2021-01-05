import _ from 'lodash'
// import './styles/style.scss'
import img from './books-768426_1920.jpg'
import compList from './comp.json'
import simpleParallax from 'simple-parallax-js';
import { menuComponent } from './js/navigation';
import { createList } from './js/content';
import { contentComponents } from './js/content';




function addPicture() {
    const myImg = new Image(1200, 700);

    myImg.src = img;
    myImg.className = 'image';


    document.getElementsByClassName('contentGreeting')[0].appendChild(myImg);

    const image = document.getElementsByClassName('image');
    new simpleParallax(image, {
        orientation: "up"
    });

};



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
            // target.style.color = '#8E8D8A'
            target.style.color = 'black'
        };

        document.getElementById(list[i].acr).onmouseleave = function(event) {
            let target = event.target;
            let c = target.childNodes[1];    
            c.remove();
            target.style.color = '#8E8D8A'
            target.style.background = '';
        };
        
        
    };

}




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




function scrollThereNow() {
    
    for(let i = 0; i < Sections.length; i++){
        
        let elmnt = document.getElementById(buttonIds[i]);
        let targetLoc = document.getElementById(Ids[i]);
        elmnt.addEventListener('click', function() {
            
            targetLoc.scrollIntoView({behavior: 'smooth'});
            
        });
        
    }
}


function backUp() {
    let homeDude = document.getElementById("compName");
    let loc = document.getElementById("startImg");
    homeDude.addEventListener('click', function() {
        loc.scrollIntoView({behavior: 'smooth'});
    })
}


        
        
        
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
        

// function fadeInHeadline() {
//     let imageElement = getElementsByClassName('contentGreeting')[1];
//     imageElement.
// }





const menuList = document.getElementById('menu');
menuList.appendChild(menuComponent(compList.menuItem, 'main'));



const competenceList = document.getElementById('competenceList');
competenceList.appendChild(createList(compList.activityFields, 'competence'));




addPicture();
contentOnMouseEnter();




const Sections = document.getElementsByClassName('contentBox');
const buttonIds = getButtonId(compList.menuItem);
const Ids = getSectionIds(Sections);

scrollThereNow();
backUp();
