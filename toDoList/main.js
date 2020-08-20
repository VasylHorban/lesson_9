const ToDoListModule = (function () {
    let list = [];
    let userList;
    let notification;
    const notificationText = ['Останній таск зі списку Ви не можете видалити!','Пусте поле не можна добавити!', 'Такий таск вже існує!']

    function initHTML() {
        userList = document.querySelector('#task-list')
        document.querySelector('#add').addEventListener('click', getInputValue)
        userList.addEventListener('click', e =>{
            remove(e)
        })
        notification = document.querySelector('#notification');
        document.querySelector('#close').addEventListener('click', hideNotification);
    }

    function getInputValue() {
        let userData = document.querySelector('#input-task').value
        checkUserData(userData)
    }
    function checkUserData(data) {
        let tempData = data.trim().split('').map((e,i)=> i == 0 ? e.toUpperCase(): e.toLowerCase()).join('');
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
        document.querySelector('#notification-text').textContent = notificationText[id]
        notification.style.display = 'block'
    }
    function hideNotification(){
        notification.style.display = 'none'
    }
    function add(data) {
        list.push(data)
        document.querySelector('#input-task').value = ''
        refresh()
    }

    function refresh() {
        let out = '<ul>'
        list.forEach((task, i) =>{
            out += `<li><label for="task-${i}"><input type ='checkbox' id='task-${i}' class='task' data-index ='${i}'> ${task}</label></li>`
        })
        out += '</ul>'
        userList.innerHTML = out;
        refreshLocalStorage()
    }
    function remove(e){
        if(e.target.classList.contains('task')){
            if(list.length == 1){
                showNotification(0)
                return false
            }
            let index = e.target.getAttribute('data-index');
            list.splice(index, 1)
            refresh();
        }
    }
    function refreshLocalStorage(){
        localStorage.setItem('task-list', JSON.stringify(list))
    }
    function checkLocalStorage(){
        if(localStorage.getItem('task-list')!= null && localStorage.getItem('task-list') != undefined){
            list = JSON.parse(localStorage.getItem('task-list'))
        }
    }
    function init(){
        initHTML();
        checkLocalStorage();
        refresh();
    }
    return{
        init : init
    }
})();

ToDoListModule.init();

