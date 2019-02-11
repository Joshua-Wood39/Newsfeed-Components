
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
    
  // if (menu.classList.contains('menu--open')) {
  //     menu.classList.toggle('menu--open');
  //     TweenMax.staggerTo(menuItems, 1, {x:"+=-500"}, 0.2);
  // } else {
  //   menu.classList.toggle('menu--open');
  //   TweenMax.staggerFrom(menuItems, 1, {x:"+=-500"}, 0.2); 
  // }
  
  
  
  
    menu.classList.toggle('menu--open');
        TweenMax.staggerFrom(menuItems, 1, {x:"+=-500"}, 0.2); 
    
    // menu.classList.toggle('menu--open');
    //     TweenMax.staggerTo(menuItems, 1, {x:"+=-500"}, 0.2);
    console.log(menu.classList.contains('menu--open'));

}


// Start Here: Create a reference to the ".menu" class
const menu  = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu ul li');
const menuButton = document.querySelector('.menu-button');




// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);