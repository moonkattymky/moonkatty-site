(function(){
var red=matchMedia('(prefers-reduced-motion:reduce)').matches,L=window.I18N,codes=Object.keys(L);
function pick(){var q=new URLSearchParams(location.search).get('lang');if(q&&L[q])return q;
try{var s=localStorage.getItem('mk_lang');if(s&&L[s])return s}catch(e){}
var n=(navigator.languages||[navigator.language||'en']);for(var i=0;i<n.length;i++){var c=(n[i]||'').slice(0,2).toLowerCase();if(c==='iw')c='he';if(L[c])return c}return 'en'}
function apply(c){var d=L[c],x=(window.EX&&window.EX[c])||{};document.documentElement.lang=c;document.documentElement.dir=(c==='he'||c==='ar')?'rtl':'ltr';
document.querySelectorAll('[data-i]').forEach(function(e){var k=e.getAttribute('data-i');var v=x[k]||d[k];if(v)e.textContent=v});
document.querySelectorAll('select.lang').forEach(function(s){s.value=c;s.setAttribute('aria-label',d.lang||'Language')});var bu=document.querySelector('.burger');if(bu&&d.menu)bu.setAttribute('aria-label',d.menu);try{localStorage.setItem('mk_lang',c)}catch(e){}}
document.querySelectorAll('select.lang').forEach(function(s){codes.forEach(function(c){var o=document.createElement('option');o.value=c;o.textContent=L[c].n;s.appendChild(o)});s.setAttribute('aria-label','Language');s.onchange=function(){apply(s.value)}});
apply(pick());
// stars
var cv=document.getElementById('stars');if(cv){var cx=cv.getContext('2d'),st=[],W,H,dpr=Math.min(devicePixelRatio||1,2);
function rs(){W=cv.width=innerWidth*dpr;H=cv.height=innerHeight*dpr;st=[];var n=Math.min(220,(innerWidth*innerHeight)/5000|0);for(var i=0;i<n;i++)st.push([Math.random()*W,Math.random()*H,Math.random()*1.4*dpr+.3,Math.random()*6.28,Math.random()<.12])}
rs();addEventListener('resize',rs);red=matchMedia('(prefers-reduced-motion:reduce)').matches;
(function f(t){cx.clearRect(0,0,W,H);st.forEach(function(s){var a=.5+.5*Math.sin(t/900+s[3]);cx.globalAlpha=.3+.7*a;cx.fillStyle=s[4]?'#ffd27a':'#fff';cx.beginPath();cx.arc(s[0],s[1],s[2],0,6.28);cx.fill()});if(!red)requestAnimationFrame(f)})(0)}
var bg=document.querySelector('.hero .bg');if(bg&&!red)addEventListener('scroll',function(){var y=scrollY;if(y<innerHeight)bg.style.transform='translateY('+(y*.35)+'px) scale(1.05)'},{passive:true});
var io='IntersectionObserver'in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}})},{threshold:.08}):null;
document.querySelectorAll('.reveal').forEach(function(e){io?io.observe(e):e.classList.add('on')});
})();
(function(){var b=document.querySelector('.burger'),n=document.getElementById('nav');if(!b||!n)return;function set(o){n.classList.toggle('open',o);b.setAttribute('aria-expanded',o)}b.onclick=function(){set(!n.classList.contains('open'))};n.addEventListener('click',function(e){if(e.target.tagName==='A')set(false)});document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
var ml=document.querySelector('[data-i=menu]');var L=window.I18N[document.documentElement.lang];if(L&&L.menu)b.setAttribute('aria-label',L.menu)})();
