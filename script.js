document.querySelectorAll('.card').forEach((c,i)=>{c.style.animation=`fade .6s ease ${i*0.15}s both`;});
const s=document.createElement('style');
s.textContent='@keyframes fade{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}';
document.head.appendChild(s);
