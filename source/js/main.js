'use strict';

(function () {
  var mainNav = document.querySelector('.main-header__menu');
  var menuBtn = document.querySelector('.main-header__btn');
  var menuLogo = document.querySelector('.main-header__logo');

  var onMenuBtnClick = function (evt) {
    evt.preventDefault();
    mainNav.classList.toggle('main-header__menu--show');
    menuBtn.classList.toggle('main-header__btn--close');
    // menuLogo.style.position = 'absolute';
    // menuLogo.style.z-index = '1';
    document.body.classList.toggle('overflow-hidden');

  };

  menuBtn.addEventListener('click', onMenuBtnClick);

})();
