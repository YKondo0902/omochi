'use strict';
{
  const menu = document.getElementById('phone_menu');
  const overlay = document.querySelector('.overlay');

  menu.addEventListener('click',() => {
    overlay.classList.toggle('show');
    menu.classList.toggle('selected');
  });

 /*インターセクション監視で画像に動きをつける*/
 const pics = document.querySelectorAll('.pic');
 const texts = document.querySelectorAll('.text');

 function callback(entries,obs) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add('appear');
    obs.unobserve(entry.target);
  });
 }
 const options = {
   threshold :0.2,
 }
 const observer = new IntersectionObserver(callback,options);

 pics.forEach(pic => {
   observer.observe(pic);
 });
 texts.forEach(text => {
   observer.observe(text);
 });
 

  /*リンク押したらスクロールさせる　画面遷移はさせない*/
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
  const homes = document.querySelectorAll('a[href="#TOP"]');/*querySelectorは最初の要素しか取得できない */
homes.forEach(home => {
  home.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
 });
}); 

}