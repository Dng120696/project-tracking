'use strict';

const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const menuLinks = document.querySelector('.menu-links');
const overlay = document.querySelector('.overlay');

const toggle = () =>{

  openMenu.classList.toggle('hidden');
  closeMenu.classList.toggle('hidden');
  menuLinks.classList.toggle('show');
  overlay.classList.toggle('hidden');
}
menu.addEventListener('click',toggle);
overlay.addEventListener('click',toggle);

