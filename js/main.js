// Adora Events - mobile nav + interactions + toast
document.addEventListener('DOMContentLoaded', ()=>{
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      const isOpen = nav.style.display === 'flex';
      nav.style.display = isOpen ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '68px';
      nav.style.right = '16px';
      nav.style.background = '#fdfbf7';
      nav.style.border = '1px solid #ece6d9';
      nav.style.padding = '20px';
      nav.style.borderRadius = '16px';
      nav.style.boxShadow = '0 12px 32px rgba(0,0,0,0.12)';
      nav.style.zIndex = '999';
    });
  }
  // Close nav when clicking outside
  document.addEventListener('click', (e)=>{
    if(nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target) && window.innerWidth <= 900){
      nav.style.display = 'none';
    }
  });
});

function showToast(msg){
  let toast = document.querySelector('.toast');
  if(!toast){
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'), 3000);
}