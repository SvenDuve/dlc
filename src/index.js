import _ from 'lodash'
import './style.scss'
import img from './books-768426_1920.jpg'
import compList from './comp.json'
import simpleParallax from 'simple-parallax-js';

// console.log(compList.activityFields)


function menuComponent() {
    var menuItems = ['Kanzlei', 'Recht', 'Methode', 'Kontakt'];

    var item;

    const menu = document.createElement('div');
    menu.className = 'menu';

    for (item of menuItems) {
        console.log(item);
        var menuItem = document.createElement('div');
        menuItem.className = 'menu item';
        menuItem.innerHTML = item;
        menu.appendChild(menuItem);
        // item.innerHTML = element;
        // menu.appendChild(item)
    };

    return menu;

};


function createList(listOfItems, type) {
    let name = 'list'

    const list = document.createElement('div')
    list.className = name.concat(type) 

    // listOfItems.forEach(el => console.log(el))


    for (var item of listOfItems) {
        console.log(item.acr)
        console.log(item.text)
        var listItem = document.createElement('div');
        listItem.className = list.className.concat(' items');
        listItem.id = item.acr;
        listItem.innerHTML = item.text;
        list.appendChild(listItem);
    };

    return list;

}

// createList(compList.activityFields)

// const schwerpunkt = ['Wirtschaftsrecht', 'Nationales und internationales Handelsrecht', 'Bankenrecht', 'Gesellschaftsrecht']

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


// const wirtschaftsRecht = document.getElementsByClassName('')

// document.addEventListener()