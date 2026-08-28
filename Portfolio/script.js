const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(window.scrollY/h*100)+'%'});

const menu=document.querySelector('.menu'), nav=document.querySelector('#navLinks');
menu?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='76px';nav.style.left='0';nav.style.right='0';nav.style.padding='22px';nav.style.background='#0b0d0f';nav.style.flexDirection='column'});

const filters=document.querySelectorAll('.filter'), cards=document.querySelectorAll('.project');
filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;cards.forEach(c=>{c.style.display=(f==='all'||c.dataset.cat.includes(f))?'flex':'none'})}));

const modal=document.querySelector('#modal'), close=document.querySelector('.modal-close');
cards.forEach(card=>card.querySelector('.case-btn').addEventListener('click',()=>{
 document.querySelector('#modalTitle').textContent=card.dataset.title;
 document.querySelector('#modalDesc').textContent=card.dataset.desc;
 document.querySelector('#modalStack').textContent=card.dataset.stack;
 document.querySelector('#modalLink').href=card.dataset.link;
 modal.classList.add('show');modal.setAttribute('aria-hidden','false');
}));
const closeModal=()=>{modal.classList.remove('show');modal.setAttribute('aria-hidden','true')};
close.addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

document.querySelector('#copyEmail')?.addEventListener('click',async e=>{await navigator.clipboard.writeText('lucianaokorie.c@gmail.com');e.currentTarget.textContent='Email copied ✓';setTimeout(()=>e.currentTarget.textContent='Copy email',1800)});
