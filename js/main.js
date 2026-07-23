// Adora Events - mobile nav + small interactions
document.addEventListener('DOMContentLoaded', ()=>{
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '64px';
      nav.style.right = '16px';
      nav.style.background = '#fdfbf7';
      nav.style.border = '1px solid #ece6d9';
      nav.style.padding = '16px';
      nav.style.borderRadius = '16px';
      nav.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)';
    });
  }
});