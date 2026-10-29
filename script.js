const menuToggle=document.querySelector('#menu-toggle');
const nav=document.querySelector('#nav-links');
if(menuToggle&&nav){menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close menu':'Open menu')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}))}
const theme=document.querySelector('#theme-toggle');
if(theme)theme.addEventListener('click',()=>{const light=document.body.classList.toggle('light');theme.textContent=light?'☾':'☼';theme.setAttribute('aria-label',light?'Switch to dark theme':'Switch to light theme')});
const items=document.querySelectorAll('.reveal');
if('IntersectionObserver'in window){const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.12});items.forEach((el,i)=>{el.style.transitionDelay=`${i%4*65}ms`;obs.observe(el)})}else items.forEach(el=>el.classList.add('visible'));
const hover=matchMedia('(hover:hover) and (pointer:fine)').matches;
if(hover)document.querySelectorAll('[data-tilt]').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;card.style.transform=`perspective(900px) rotateX(${(.5-y)*6}deg) rotateY(${(x-.5)*6}deg) translateY(-2px)`});card.addEventListener('pointerleave',()=>card.style.transform='')});
const glow=document.querySelector('.cursor-glow');if(glow&&hover)window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'},{passive:true});
const sections=document.querySelectorAll('main section[id]');if('IntersectionObserver'in window){const so=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('#nav-links a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-35% 0px -55% 0px'});sections.forEach(s=>so.observe(s))}
const form=document.querySelector('#contact-form'),note=document.querySelector('#form-note');
if(form)form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form),name=String(d.get('name')||'').trim(),email=String(d.get('email')||'').trim(),message=String(d.get('message')||'').trim();if(!name||!email||!message){if(note)note.textContent='Please complete all fields first.';return}const subject=encodeURIComponent('Portfolio inquiry from '+name),body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject details:\n${message}`);window.location.href=`mailto:hello@example.com?subject=${subject}&body=${body}`;if(note)note.textContent='Your email app should open with the message prepared. Replace hello@example.com before publishing.'});
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
.whatsapp-float {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #25D366;
  color: #ffffff;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
  z-index: 9999;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.whatsapp-float:hover {
  transform: scale(1.08);
}

.whatsapp-float:focus-visible {
  outline: 3px solid #128C7E;
  outline-offset: 4px;
}

@media (max-width: 600px) {
  .whatsapp-float {
    width: 52px;
    height: 52px;
    right: 16px;
    bottom: 16px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .whatsapp-float {
    transition: none;
  }
}
