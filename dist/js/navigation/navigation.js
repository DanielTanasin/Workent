const link = document.querySelector('.js-nav-item');
const linkText = document.querySelector('.js-nav-link');
const icon = document.querySelector('.js-icon');
const dropMenu =document.querySelector('.js-drop-menu');
const header = document.querySelector('.js-header');
const ham = document.querySelector('.js-ham');
const navMenu = document.querySelector('.js-nav')
const panel = document.querySelector('.js-drop-accordion')




const openDrop = () => {
    linkText.classList.add('nav-link--about-active');
    icon.classList.add('header__icon--active');
    dropMenu.classList.add('drop-menu--active');
    link.classList.add('nav-item--about--active')
}

const closeDrop = () => {
    linkText.classList.remove('nav-link--about-active');
    icon.classList.remove('header__icon--active');
    dropMenu.classList.remove('drop-menu--active');
    link.classList.remove('nav-item--about--active')
}


const openHam = () => {
    // header.classList.toggle('header--active');
    if (!header.classList.contains('header--active')){
        header.classList.add('header--active')
    } else{
        header.classList.remove('header--active');
 }           
            
 ham.classList.toggle('active');
 navMenu.classList.toggle('header__nav--active');
        }        

    


const openDropAcc = () => {
    if (panel.style.maxHeight){
        panel.style.maxHeight = null;
    }else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
    }
}


link.addEventListener('click', openDropAcc);
ham.addEventListener('click', openHam);
link.addEventListener('mouseover', openDrop);
link.addEventListener('mouseleave', (e) =>{
    closeDrop();
})