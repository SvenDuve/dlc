import compList from '../comp.json'


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

function contentComponents() {

    const contentComponent = document.createElement('div');
    contentComponent.className = 'content';

    return contentComponent;

}





export { createList };
export { contentComponents };

