'use strict';
{
  const menu = document.getElementById('phone_menu');
  const overlay = document.querySelector('.overlay');

  menu.addEventListener('click',() => {
    overlay.classList.toggle('show');
    menu.classList.toggle('selected');
  });

}