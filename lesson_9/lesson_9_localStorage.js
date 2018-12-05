/*Объявить функцию, которая будет вызываться в момент 
изменения хэш-части адреса страницы 
и сохранять в localStorage клиента 
hash-часть адреса страницы как  ✍ pageId  
и время входа ( в секундах ) как  ✍ startTime
 
Назначить эту функцию обработчиком  события  
✅ hashchange   объекта  window
Желательно, чтобы при изменении хеш-части адреса 
происходило обновление контента страницы
без перезагрузки
( например, изменялся заголовок и картинка,
чтобы создать иллюзию перехода на новую страницу )

Отслеживать в панели разработчика изменения в localStorage

 https://garevna.github.io/js-samples/#16
 
После загрузки страницы меняйте хеш-часть адреса
на 0, 1, 2, 3 и наблюдайте изменения на странице и
в дебагере на вкладке Application ( localStorage )
*/

var pageData = {
    num: 0,
    headers: {
        tag: "h1",
        attrs: {
            innerText: [
                "Hello", "This is your best day ever", "Take a look around"
            ]
        }
    },    
    pictures: {
        tag: "img",
        attrs: {
            src:
                [            
                    "http://bm.img.com.ua/img/prikol/images/large/0/0/307600.jpg",                          
                    "http://www.animza.ru/images/stories/zastavki/zastpc/38/08.JPG",            
                    "https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg"
                ],
            title: [
                "forest", "lake", "flowers"
            ]
        }  
    }
}

function changeElement(elemData, container){
    var __container = container ? container : document.body 
    for (var item in elemData){
        var elemOnPage = document.getElementsByTagName(elemData[item].tag)[0]
        var elem = !elemOnPage ?
                __container.appendChild(
            document.createElement(elemData[item].tag)) :
            elemOnPage 
        for(var atr in elemData[item].attrs){           
            elem[atr] = elemData[item].attrs[atr][elemData.num]            
        }             
    } 
    elemData.num = elemData.num < (elemData[item].attrs[atr].length-1) ? elemData.num+1 : 0
    return elem
}

window.onhashchange = function (event){
    localStorage.setItem("pageId", location.hash)
    localStorage.setItem("startTime", new Date().toLocaleTimeString())
    changeElement(pageData)
}


    
