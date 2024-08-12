let is_open = false
function open_menu() {
    let menu_img = document.querySelector('#menu-img')
    let nav = document.querySelector('nav')
    if(is_open){
        nav.classList.remove('open_menu')
        menu_img.src = 'images/icon-hamburger.svg'
        document.body.style.overflow = 'auto'
        is_open = false
    }
    else{
        nav.classList.add('open_menu')
        menu_img.src = 'images/icon-close.svg'
        document.body.style.overflow = 'hidden'
        is_open = true
    }
}