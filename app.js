
window.onscroll = function(){
    scrollFunction()
}


function scrollFunction(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.getElementById('navbar').style.padding = "2.5rem 4rem";
        document.getElementById('logo').style.fontSize = "1.8rem";
        document.getElementsByClassName('navlink').style.fontSize = "1rem";
    }else{
        document.getElementById('navbar').style.padding = "3.5rem 6rem";
        document.getElementById('logo').style.fontSize = "2.2rem";
        document.getElementsByClassName('navlink').style.fontSize = "1.5rem";
    }
};


const menu = document.querySelector('.hamburger-icon');
const links = document.querySelector('.small-navlinks');

menu.addEventListener('click', () => {
    links.classList.toggle('hide')
})

links.addEventListener('click', () => {
links.classList.toggle('hide')
})
