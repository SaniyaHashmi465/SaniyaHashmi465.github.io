const progressBar=document.getElementById('progressBar');
const menuToggle=document.getElementById('menuToggle');
const navLinks=document.getElementById('navLinks');
const glow=document.querySelector('.cursor-glow');

window.addEventListener('scroll',()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progressBar.style.width=(window.scrollY/max*100)+'%';
});

menuToggle.addEventListener('click',()=>{
  const open=navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',open);
  menuToggle.textContent=open?'×':'☰';
});

document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded','false');
  menuToggle.textContent='☰';
}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

window.addEventListener('mousemove',e=>{
  if(window.innerWidth>900){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}
});
