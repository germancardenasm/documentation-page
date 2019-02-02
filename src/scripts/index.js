import '../styles/index.scss';

let menuButton = document.getElementById("openMenu-icon");
menuButton.addEventListener('click', showMenu);

let closeMenuButton = document.getElementById("closeMenu-icon");
closeMenuButton.addEventListener('click', closeMenu);

function showMenu(){
    invertVisibility("showMenu");
};

function closeMenu(){
    invertVisibility("closeMenu");
};

function invertVisibility(action){

    let a, b;
    if(action == "showMenu"){
         a = 'visible';
         b = 'invisible';
    }else
    {
         a = 'invisible';
         b = 'visible';
    }

    let navLink = document.getElementsByClassName("nav-link");
    Array.prototype.forEach.call(navLink, function(e){e.className=`nav-link ${a}`});
    document.getElementById("openMenu-icon").className = `menu-icon ${b}`;
    document.getElementById("closeMenu-icon").className=`menu-icon ${a}`;

}