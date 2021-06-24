'use strict';
{
  const menu = document.getElementById('phone_menu');
  const overlay = document.querySelector('.overlay');

  menu.addEventListener('click',() => {
    overlay.classList.toggle('show');
    menu.classList.toggle('selected');
  });
  
  /*リンク押したらスクロールさせる*/
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const header = document.querySelector('header');
  
  anchorLinks.forEach(link => {     
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
      const headerHeight = header.offsetHeight;
      const totalScrollAmount = targetOffsetTop - headerHeight;

      window.scrollTo({
        top: totalScrollAmount,
        behavior: "smooth"
      });
    });
  });
// トップに戻る
  const home = document.querySelector('a[href="#TOP"]');
home.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

}