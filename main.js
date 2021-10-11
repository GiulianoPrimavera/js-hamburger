//collego elementi html a variabili js che dichiaro
const menu = document.querySelector (".hamburger-menu");
const faBars = document.querySelector (".fa-bars");
const closeMenu = document.querySelector (".fa-times");

//quando l'icona dell'hamburger menu viene clickata il menu compare
faBars.addEventListener ("click", function(){
    menu.style.display = "block";
})

//quado l'icona della x viene clickata il menu scompare
closeMenu.addEventListener ("click", function(){
    menu.style.display = "none";
})