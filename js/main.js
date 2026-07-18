
document.addEventListener('DOMContentLoaded',()=>{
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');
  if(toggle){
    toggle.addEventListener('click',()=>{
      nav.style.display = nav.style.display==='flex' ? 'none' : 'flex';
      nav.style.flexDirection='column';
      nav.style.position='absolute';
      nav.style.top='60px';
      nav.style.left='0';
      nav.style.right='0';
      nav.style.background='var(--paper)';
      nav.style.padding='24px';
      nav.style.borderBottom='1px solid var(--line)';
    })
  }
  // Active link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href===path || (path==='' && href==='index.html')) a.classList.add('active');
  })
})
