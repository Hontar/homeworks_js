/*Создать простую страничку, где пользователь вводит данные о себе
Введенные данные должны сохраняться в куки-файл
При повторном входе с этого же компьютера на эту же страничку
данные должны загружаться из куки-файла
и страничка должна быть заполнена*/

function makeDoc(){
    function createElem (tag = "div", destination = document.body){
        var elem = destination.appendChild(document.createElement(tag))
        return elem
    }
    var inputName = createElem("input")
    var inputAge = createElem("input")
    inputName.onchange = function(event){
        document.cookie = `name=${this.value}`
    }
    inputAge.onchange = function(event){
        document.cookie = `age=${this.value}`
    }
    function getCookieRecords () {
        var res = document.cookie.split ("; ").map ( x => x.split ( "=" ) )
        return res.map ( x => { return { id: x [0], val: x[1] } } )
    }
    function getRecordById ( id ) {
            return getCookieRecords().filter ( x => x.id === id )[0]
    }
    function getValueById ( id ) {
            return getCookieRecords().filter ( x => x.id === id )[0].val
    }
    inputName.value = !getRecordById("name") ? "enter your name" : getValueById("name") 
    inputAge.value = !getRecordById("age") ? "enter your age" : getValueById("age") 
}

makeDoc()