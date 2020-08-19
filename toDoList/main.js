const ToDoListModule = (function () {
    const list = [];
    let userList;
    const notificationText = ['Останній таск зі списку Ви не можете видалити!','Пусте поле не можна добавити!', 'Такий таск вже існує!']

    function initHTML() {
        userList = document.querySelector('#task-list')
        document.querySelector('#add').addEventListener('click', getInputValue)
    }

    function getInputValue() {
        let userData = document.querySelector('#input-task').value
        checkUserData(userData)
    }

    function checkUserData(data) {
        let tempData = data.trim();
        let permission = true;
        if (tempData == '' || tempData == null) {
            permission = false
            showNotification(1)
        }
        if (list.includes(tempData)) {
            permission = false
            showNotification(2)
        }

        if (permission) {
            add(tempData)
        } else {
            return false
        }
    }
    
    function showNotification(id) {
        console.log('nono' , id)
    }

    function add(data) {
        list.push(data)
        document.querySelector('#input-task').value = ''
        refresh()
    }

    function refresh() {
        let out = '<ul>'
        list.forEach((task, i) =>{
            out += `<li><input type ='checkbox' data-index ='${i}'>${task}</li>`
        })
        out += '</ul>'
        userList.innerHTML = out;
    }
    function init(){
        initHTML();
        refresh();
    }
    return{
        init : init
    }
})();

ToDoListModule.init();

