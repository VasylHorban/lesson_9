const btnDown = document.querySelector('#btn-down');
const btnUp = document.querySelector('#btn-up');
window.addEventListener('scroll', ()=>{
    console.log(window.scrollY)
    if(window.scrollY > document.querySelector('header').offsetHeight * 0.4){
        btnDown.style.fontSize = '46px'
    }else{
        btnDown.style.fontSize = '16px'
    }
    
    if(window.scrollY > document.querySelector('header').offsetHeight * 0.7){
        document.querySelector('#left-slide').style.marginLeft = '15vh'
        document.querySelector('#left-slide').style.width = '400px'
    }else{
        document.querySelector('#left-slide').style.marginLeft = '0vh'
        document.querySelector('#left-slide').style.width = '150px'
    }
    if(window.scrollY > document.querySelector('header').offsetHeight * 0.9){
        document.querySelector('#right-img').style.marginRight = '15vh'
    }else{
        document.querySelector('#right-img').style.marginRight = '0vh'

    }
    if(window.scrollY > document.querySelector('main').offsetHeight * 1.7){
        btnUp.style.fontSize = '16px'
    }else{
        btnUp.style.fontSize = '46px'

    }
})


btnDown.addEventListener('click', ()=>{
    document.querySelector('main').scrollIntoView({behavior : 'smooth'})
})

btnUp.addEventListener('click', ()=>{
    window.scroll({
        top:0,
        behavior : 'smooth'
    })
})