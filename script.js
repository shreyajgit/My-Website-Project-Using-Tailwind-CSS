//Light Mode and Dark Mode
let html=document.getElementById('html');
let change_btn=document.getElementById('change_btn');
let change_image=document.getElementById('change_image');

change_btn.addEventListener('click', () => {
  html.classList.toggle('dark');
  if( change_image.src.includes('img/moon.svg') ){
    change_image.src = 'img/sun.svg';
  }
  else{
    change_image.src = 'img/moon.svg';
  }
});

let change_btn2=document.getElementById('change_btn2');
let change_image2=document.getElementById('change_image2');

change_btn2.addEventListener('click', () => {
  html.classList.toggle('dark');
  if( change_image2.src.includes('img/moon.svg') ){
    change_image2.src = 'img/sun.svg';
  }
  else{
    change_image2.src = 'img/moon.svg';
  }
});

// Mobile Menu
let main_menu = document.getElementById('main_menu');
let mobile_btn = document.getElementById('mobile_btn');
mobile_btn.addEventListener('click', () => {
  main_menu.classList.toggle('hidden');
});