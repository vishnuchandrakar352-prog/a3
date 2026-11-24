(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}var NS='http://www.w3.org/2000/svg';
function el(t,a){var e=document.createElementNS(NS,t);for(var k in a)e.setAttribute(k,a[k]);return e;}
var g=$('py-g');function py(){var a=+$('py-a').value,b=+$('py-b').value,c=Math.sqrt(a*a+b*b);$('py-av').textContent=a;$('py-bv').textContent=b;$('py-a2').textContent=a*a;$('py-b2').textContent=b*b;$('py-c2').textContent=a*a+b*b;$('py-c2b').textContent=a*a+b*b;
 var cs=Number.isInteger(c);$('py-c').textContent=cs?c:c.toFixed(3);$('py-n').textContent=cs?'A Pythagorean triple: all three sides are whole numbers.':'Not a whole number: c is irrational here, but the areas still add up exactly.';
 var s=Math.min(160/Math.max(a,b),360/(a+b+c)),ox=150+ (b*s>a*s?0:0),oy=190;var A=[ox,oy],B=[ox+b*s,oy],C=[ox,oy-a*s];
 while(g.firstChild)g.removeChild(g.firstChild);
 function sq(p,q,col,lab,v){var dx=q[0]-p[0],dy=q[1]-p[1];var r=[p[0]-dy,p[1]+dx],t=[q[0]-dy,q[1]+dx];g.appendChild(el('path',{d:'M'+p+'L'+q+'L'+t+'L'+r+'Z',fill:col,'fill-opacity':.28,stroke:col,'stroke-width':2}));var cx=(p[0]+t[0])/2,cy=(p[1]+t[1])/2;var tx=el('text',{x:cx,y:cy+6,'text-anchor':'middle','font-family':'Anonymous Pro, monospace','font-size':16,'font-weight':700,fill:'#1D2433'});tx.textContent=lab+'²='+v;g.appendChild(tx);}
 sq(C,A,'#3F51B5','a',a*a);sq(A,B,'#E0B800','b',b*b);sq(B,C,'#E8604C','c',+(a*a+b*b).toFixed(2));
 g.appendChild(el('path',{d:'M'+A+'L'+B+'L'+C+'Z',fill:'#fff',stroke:'#1D2433','stroke-width':3}));g.appendChild(el('path',{d:'M'+(ox)+' '+(oy-14)+'h14v14',fill:'none',stroke:'#1D2433','stroke-width':2}));
 var bb=g.getBBox(),pad=16;$('py-s').setAttribute('viewBox',(bb.x-pad)+' '+(bb.y-pad)+' '+(bb.width+pad*2)+' '+(bb.height+pad*2));}
if(g){$('py-a').addEventListener('input',py);$('py-b').addEventListener('input',py);py();}
function nf(x){x=Math.round(x*100)/100;return (x<0?'−'+Math.abs(x):''+x);}
function term(v,s,first){if(v===0)return '';var sg=v<0?' − ':(first?'':' + ');var m=Math.abs(v);if(first&&v<0)sg='−';return sg+((m===1&&s)?'':m)+s;}
function qd(){var a=parseFloat($('qd-a').value)||0,b=parseFloat($('qd-b').value)||0,c=parseFloat($('qd-c').value)||0;var f='y = '+(term(a,'x²',true)+term(b,'x',!a)+term(c,'',!a&&!b)||'0');$('qd-f').textContent=f;
 var S=20,X=function(x){return 200+x*S;},Y=function(y){return 200-y*S;},d='',pts=$('qd-pts');for(var i=0;i<=200;i++){var x=-10+i*.1,y=a*x*x+b*x+c;y=Math.max(-12,Math.min(12,y));d+=(i?'L':'M')+X(x).toFixed(1)+' '+Y(y).toFixed(1);}$('qd-p').setAttribute('d',d);
 while(pts.firstChild)pts.removeChild(pts.firstChild);if(!a){var r0=b?-c/b:null;$('qd-d').textContent='—';$('qd-r').textContent=r0===null?(c?'none':'every x'):'x = '+nf(r0);$('qd-v').textContent='none (a line)';$('qd-n').textContent='With a = 0 the graph is a straight line, not a parabola.';if(r0!==null)pts.appendChild(el('circle',{cx:X(r0),cy:200,r:6}));return;}
 var D=b*b-4*a*c,vx=-b/(2*a),vy=a*vx*vx+b*vx+c;$('qd-d').textContent=nf(D);$('qd-v').textContent='('+nf(vx)+', '+nf(vy)+')';
 if(D>0){var r1=(-b-Math.sqrt(D))/(2*a),r2=(-b+Math.sqrt(D))/(2*a);if(r1>r2){var t=r1;r1=r2;r2=t;}$('qd-r').textContent='x = '+nf(r1)+', '+nf(r2);$('qd-n').textContent='Positive discriminant: the parabola crosses the x-axis twice.';[r1,r2].forEach(function(r){pts.appendChild(el('circle',{cx:X(r),cy:200,r:6}));});}
 else if(D===0){$('qd-r').textContent='x = '+nf(vx)+' (double)';$('qd-n').textContent='Zero discriminant: the vertex just touches the x-axis.';}
 else{$('qd-r').textContent='no real roots';$('qd-n').textContent='Negative discriminant: the parabola never meets the x-axis.';}
 if(Math.abs(vy)<12)pts.appendChild(el('circle',{cx:X(vx),cy:Y(vy),r:7,'class':'vx'}));}
if($('qd-p')){['qd-a','qd-b','qd-c'].forEach(function(i){$(i).addEventListener('input',qd);});qd();}
})();
