function e(e){let t=e|0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function t(e){return e*e*e*(e*(e*6-15)+10)}const n=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];function r(r){let i=e(r),a=new Uint8Array(512);for(let e=0;e<256;e++)a[e]=e;for(let e=255;e>0;e--){let t=i()*(e+1)|0;[a[e],a[t]]=[a[t],a[e]]}for(let e=0;e<256;e++)a[e+256]=a[e];return function(e,r){let i=Math.floor(e)&255,o=Math.floor(r)&255,s=e-Math.floor(e),c=r-Math.floor(r),l=t(s),u=t(c),d=a[a[i]+o]&7,f=a[a[i+1]+o]&7,p=a[a[i]+o+1]&7,m=a[a[i+1]+o+1]&7,h=n[d][0]*s+n[d][1]*c,g=n[f][0]*(s-1)+n[f][1]*c,_=n[p][0]*s+n[p][1]*(c-1),v=n[m][0]*(s-1)+n[m][1]*(c-1),y=h+l*(g-h);return y+u*(_+l*(v-_)-y)}}function i(e,t,n,r=6,i=2,a=.5){let o=0,s=1,c=1,l=0;for(let u=0;u<r;u++)o+=s*e(t*c,n*c),l+=s,s*=a,c*=i;return o/l}function a(e,t=0,n=1){return e<t?t:e>n?n:e}function o(e,t,n){return a((e-t)/(n-t))}const s=[{id:`aurora`,name:`Aurora`,bg:[8,8,18],bgLight:[240,240,248],colors:[[120,60,255],[60,180,250],[20,220,160],[200,80,255],[40,200,200]]},{id:`forest`,name:`Forest`,bg:[8,14,8],bgLight:[238,248,235],colors:[[40,180,80],[100,220,40],[20,140,60],[140,200,60],[30,120,100]]},{id:`ocean`,name:`Deep Ocean`,bg:[5,10,20],bgLight:[235,242,250],colors:[[20,120,255],[0,200,220],[80,60,255],[0,160,200],[40,80,220]]},{id:`lagoon`,name:`Lagoon`,bg:[5,15,18],bgLight:[232,248,250],colors:[[0,210,190],[30,180,220],[0,240,180],[60,160,200],[20,220,160]]},{id:`autumn`,name:`Autumn`,bg:[18,10,5],bgLight:[250,242,235],colors:[[200,80,30],[220,160,20],[180,50,20],[240,200,40],[160,100,30]]},{id:`sakura`,name:`Sakura`,bg:[18,8,14],bgLight:[252,238,246],colors:[[255,150,180],[255,180,200],[200,100,150],[255,200,220],[220,130,170]]},{id:`tundra`,name:`Tundra`,bg:[12,14,18],bgLight:[240,242,248],colors:[[140,160,180],[100,130,160],[160,180,200],[80,110,140],[120,150,170]]},{id:`marsh`,name:`Marsh`,bg:[10,12,8],bgLight:[238,244,232],colors:[[80,140,60],[120,160,40],[60,120,80],[140,180,50],[50,100,70]]},{id:`coral`,name:`Coral Reef`,bg:[10,10,18],bgLight:[242,240,250],colors:[[255,100,80],[0,200,180],[255,160,60],[40,180,220],[255,80,120]]},{id:`desert`,name:`Desert`,bg:[16,12,8],bgLight:[248,242,232],colors:[[220,180,100],[240,200,120],[180,140,80],[200,160,90],[160,120,70]]},{id:`ember`,name:`Ember`,bg:[15,8,5],bgLight:[250,245,240],colors:[[255,90,30],[255,160,20],[255,50,80],[200,30,30],[255,200,60]]},{id:`sunset`,name:`Sunset`,bg:[18,8,15],bgLight:[252,240,242],colors:[[255,100,120],[255,160,80],[200,60,120],[255,200,100],[180,50,90]]},{id:`volcanic`,name:`Volcanic`,bg:[15,5,5],bgLight:[250,235,232],colors:[[255,60,20],[255,120,0],[200,40,10],[255,180,30],[180,30,10]]},{id:`magma`,name:`Magma`,bg:[12,5,8],bgLight:[248,232,238],colors:[[255,80,40],[255,140,20],[200,30,60],[255,200,50],[220,60,30]]},{id:`copper`,name:`Copper`,bg:[14,8,6],bgLight:[248,240,235],colors:[[184,115,51],[218,145,70],[160,95,40],[200,130,60],[140,80,35]]},{id:`autumnleaves`,name:`Autumn Leaves`,bg:[16,8,5],bgLight:[250,238,232],colors:[[200,60,20],[240,180,30],[160,40,15],[255,140,20],[120,80,20]]},{id:`arctic`,name:`Arctic`,bg:[10,12,18],bgLight:[240,244,252],colors:[[150,200,255],[200,230,255],[100,180,240],[180,220,250],[120,160,230]]},{id:`frost`,name:`Frost`,bg:[8,10,16],bgLight:[236,240,250],colors:[[180,220,255],[140,200,250],[200,235,255],[100,170,240],[160,210,250]]},{id:`glacier`,name:`Glacier`,bg:[6,10,18],bgLight:[232,240,252],colors:[[100,180,240],[60,140,220],[140,200,255],[30,120,200],[80,160,230]]},{id:`midnight`,name:`Midnight`,bg:[6,6,14],bgLight:[232,232,248],colors:[[40,60,160],[60,80,200],[30,40,140],[80,100,220],[20,30,120]]},{id:`storm`,name:`Storm`,bg:[10,10,16],bgLight:[240,240,248],colors:[[80,90,140],[120,130,180],[60,70,120],[100,110,160],[140,150,200]]},{id:`teal`,name:`Teal Dream`,bg:[5,14,16],bgLight:[230,248,250],colors:[[0,180,180],[0,210,160],[0,150,170],[30,200,190],[0,130,150]]},{id:`sapphire`,name:`Sapphire`,bg:[5,8,20],bgLight:[230,235,252],colors:[[30,80,220],[60,100,240],[20,60,200],[80,120,255],[40,50,180]]},{id:`amethyst`,name:`Amethyst`,bg:[14,8,18],bgLight:[246,238,252],colors:[[160,60,220],[200,80,240],[120,40,180],[180,100,250],[100,30,160]]},{id:`lavender`,name:`Lavender`,bg:[14,10,18],bgLight:[246,240,252],colors:[[180,140,220],[200,160,240],[160,120,200],[190,150,230],[170,130,210]]},{id:`neonviolet`,name:`Neon Violet`,bg:[8,4,16],bgLight:[240,232,252],colors:[[180,0,255],[255,0,200],[100,0,220],[255,50,150],[140,0,200]]},{id:`plum`,name:`Plum`,bg:[16,8,14],bgLight:[250,238,246],colors:[[180,60,100],[200,80,130],[150,40,80],[170,70,110],[130,30,70]]},{id:`neon`,name:`Neon`,bg:[5,5,12],bgLight:[245,245,252],colors:[[255,0,128],[0,255,200],[128,0,255],[255,200,0],[0,200,255]]},{id:`cyberpunk`,name:`Cyberpunk`,bg:[8,5,15],bgLight:[242,238,250],colors:[[255,0,200],[0,255,255],[255,50,50],[50,255,100],[200,0,255]]},{id:`toxic`,name:`Toxic`,bg:[5,10,5],bgLight:[232,245,230],colors:[[0,255,60],[50,200,0],[0,180,40],[100,255,0],[0,160,30]]},{id:`laser`,name:`Laser`,bg:[5,5,10],bgLight:[242,242,252],colors:[[255,0,60],[0,255,100],[0,120,255],[255,200,0],[255,0,200]]},{id:`hacker`,name:`Hacker`,bg:[2,8,2],bgLight:[230,248,228],colors:[[0,255,0],[0,200,0],[0,180,0],[80,255,0],[0,140,0]]},{id:`vaporwave`,name:`Vaporwave`,bg:[12,6,20],bgLight:[245,235,252],colors:[[255,100,200],[100,200,255],[200,100,255],[255,180,100],[0,255,200]]},{id:`pastel`,name:`Pastel Dreams`,bg:[20,15,22],bgLight:[248,244,250],colors:[[255,180,210],[180,210,255],[210,255,200],[255,220,180],[220,180,255]]},{id:`cottoncandy`,name:`Cotton Candy`,bg:[16,10,20],bgLight:[248,240,252],colors:[[255,160,200],[160,200,255],[255,200,180],[180,220,255],[255,180,220]]},{id:`peach`,name:`Peach`,bg:[18,12,10],bgLight:[252,242,238],colors:[[255,180,140],[255,160,120],[240,140,100],[255,200,160],[220,120,90]]},{id:`candy`,name:`Candy`,bg:[16,10,18],bgLight:[248,240,250],colors:[[255,100,160],[100,200,255],[255,160,100],[160,100,255],[255,200,100]]},{id:`monochrome`,name:`Monochrome`,bg:[10,10,14],bgLight:[245,245,248],colors:[[200,200,220],[140,140,160],[100,100,120],[170,170,190],[220,220,240]]},{id:`charcoal`,name:`Charcoal`,bg:[8,8,10],bgLight:[240,240,244],colors:[[80,80,90],[120,120,130],[60,60,70],[100,100,110],[140,140,150]]},{id:`silver`,name:`Silver`,bg:[12,12,14],bgLight:[244,244,248],colors:[[180,180,195],[210,210,225],[150,150,165],[195,195,210],[165,165,180]]},{id:`mocha`,name:`Mocha`,bg:[14,10,8],bgLight:[248,240,236],colors:[[140,90,50],[180,120,60],[100,70,40],[160,110,55],[120,80,45]]},{id:`sandstone`,name:`Sandstone`,bg:[16,14,10],bgLight:[250,246,238],colors:[[200,170,120],[220,190,140],[180,150,100],[210,180,130],[170,140,90]]},{id:`clay`,name:`Clay`,bg:[16,10,8],bgLight:[250,240,236],colors:[[180,100,60],[200,130,80],[160,80,40],[190,115,70],[140,70,35]]},{id:`olive`,name:`Olive`,bg:[10,12,8],bgLight:[240,244,232],colors:[[120,130,50],[150,160,60],[90,110,40],[140,150,55],[100,120,45]]},{id:`gold`,name:`Gold`,bg:[12,10,5],bgLight:[248,244,232],colors:[[218,165,32],[255,200,50],[184,134,11],[240,185,40],[160,120,20]]},{id:`rosegold`,name:`Rose Gold`,bg:[16,10,10],bgLight:[250,240,238],colors:[[200,150,130],[220,170,150],[180,130,110],[210,160,140],[170,120,100]]},{id:`platinum`,name:`Platinum`,bg:[10,10,12],bgLight:[242,242,246],colors:[[190,195,210],[170,175,195],[210,215,230],[150,155,175],[180,185,200]]},{id:`bronze`,name:`Bronze`,bg:[14,10,6],bgLight:[248,240,232],colors:[[205,127,50],[184,115,51],[160,100,40],[195,130,60],[150,90,35]]},{id:`ruby`,name:`Ruby`,bg:[16,4,8],bgLight:[250,230,236],colors:[[220,20,60],[255,40,80],[180,10,40],[200,30,50],[160,5,30]]},{id:`garnet`,name:`Garnet`,bg:[14,5,8],bgLight:[248,232,238],colors:[[180,50,60],[200,70,80],[150,35,45],[190,60,70],[140,30,40]]},{id:`mulberry`,name:`Mulberry`,bg:[14,6,12],bgLight:[248,234,244],colors:[[180,50,100],[200,70,130],[150,35,80],[190,60,115],[130,25,65]]},{id:`indigo`,name:`Indigo`,bg:[8,6,18],bgLight:[238,234,252],colors:[[75,0,130],[100,20,160],[55,0,110],[90,10,145],[60,0,120]]},{id:`bubblegum`,name:`Bubblegum`,bg:[18,6,14],bgLight:[252,234,246],colors:[[255,50,140],[50,200,255],[255,120,180],[120,255,200],[255,80,100]]},{id:`electric`,name:`Electric`,bg:[4,4,12],bgLight:[234,234,250],colors:[[0,100,255],[255,50,0],[0,220,100],[200,0,255],[255,200,0]]},{id:`carnival`,name:`Carnival`,bg:[10,6,14],bgLight:[242,234,248],colors:[[255,40,40],[0,180,255],[255,220,0],[0,220,100],[255,80,180]]},{id:`confetti`,name:`Confetti`,bg:[14,10,18],bgLight:[246,240,252],colors:[[255,80,120],[80,200,255],[255,220,60],[120,255,160],[200,100,255]]},{id:`candyfloss`,name:`Candyfloss`,bg:[16,8,20],bgLight:[248,236,252],colors:[[255,130,200],[130,200,255],[255,180,130],[130,255,200],[200,130,255]]},{id:`obsidian`,name:`Obsidian`,bg:[5,5,8],bgLight:[232,232,238],colors:[[60,60,80],[80,80,100],[40,40,60],[70,70,90],[50,50,70]]},{id:`void`,name:`Void`,bg:[4,4,8],bgLight:[230,230,240],colors:[[30,20,60],[50,30,80],[20,10,50],[40,25,70],[25,15,55]]},{id:`slate`,name:`Slate`,bg:[8,10,14],bgLight:[236,240,248],colors:[[70,80,100],[90,100,120],[55,65,85],[80,90,110],[60,70,90]]},{id:`graphite`,name:`Graphite`,bg:[8,8,10],bgLight:[238,238,242],colors:[[50,50,58],[70,70,78],[40,40,48],[60,60,68],[45,45,53]]},{id:`macaron`,name:`Macaron`,bg:[18,14,18],bgLight:[250,246,250],colors:[[255,170,180],[180,220,255],[255,220,160],[200,255,200],[220,180,255]]},{id:`sorbet`,name:`Sorbet`,bg:[16,10,16],bgLight:[248,240,248],colors:[[255,130,160],[160,210,255],[255,190,130],[130,255,190],[210,130,255]]},{id:`sherbet`,name:`Sherbet`,bg:[18,12,14],bgLight:[252,244,246],colors:[[255,160,120],[120,210,255],[255,200,120],[160,255,180],[255,140,170]]}];function c(e,t,n){return[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n]}function l(e,t){let n=e.colors,r=n.length,i=t*(r-1),a=Math.floor(i),o=i-a,s=n[Math.min(a,r-1)],l=n[Math.min(a+1,r-1)];return c(s,l,o)}function u(e,t=1024){let n=e.colors,r=n.length,i=new Uint8ClampedArray(t),a=new Uint8ClampedArray(t),o=new Uint8ClampedArray(t),s=(r-1)/(t-1);for(let e=0;e<t;e++){let t=e*s,c=Math.min(r-1,t|0),l=Math.min(r-1,c+1),u=t-c;i[e]=n[c][0]+(n[l][0]-n[c][0])*u,a[e]=n[c][1]+(n[l][1]-n[c][1])*u,o[e]=n[c][2]+(n[l][2]-n[c][2])*u}return{r:i,g:a,b:o,size:t}}function d(e,t,n){let r,i,a;if(t===0)r=i=a=n;else{let o=(e,t,n)=>(n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),s=n<.5?n*(1+t):n+t-n*t,c=2*n-s;r=o(c,s,e+1/3),i=o(c,s,e),a=o(c,s,e-1/3)}return[Math.round(r*255),Math.round(i*255),Math.round(a*255)]}function f(t,n,i,a,o,s={}){let c=s,l=r(o),d=t.createImageData(n,i),f=d.data,p=a.bg,m=c.scale||.003,h=c.speed||2,g=c.detail||8e4,_=c.lineWidth||1.5,v=c.steps||25,y=s.isDark!==!1,b=Math.min(n,i)/1080,x=m/b,S=c.warp||1,C=c.alpha||.3,w=y?p:a.bgLight,T=w[0],E=w[1],D=w[2],O=n*.5,k=i*(y?.42:.5),A=Math.hypot(n*.55,i*.55),j=y?14:-10,M=u(a),N=M.size;for(let e=0;e<i;e++){let t=e-k,r=t*t,i=e*n*4;for(let e=0;e<n;e++){let t=e-O,n=1-Math.sqrt(t*t+r)/A;f[i]=T+j*n*n,f[i+1]=E+j*n*n,f[i+2]=D+j*n*n,f[i+3]=255,i+=4}}let P=e(o),F=1.5*b,I=Math.PI*h,L=n-1,R=i-1,z=_*b*.5;for(let e=0;e<g;e++){let e=P()*n,t=P()*i,r=P(),a=(r+.15+P()*.25)%1,o=C*255*(.5+P()*.5)|0,s=z+z*P()|0,c=r*N|0,u=(a+1)%1*N|0;for(let r=0;r<v;r++){let a=(l(e*x,t*x)+S*l(e*x*2+100,t*x*2+100))*I;if(e+=Math.cos(a)*F,t+=Math.sin(a)*F,e<0||e>=n||t<0||t>=i)break;let d=r/v,p=1-d*d,m=e|0,h=t|0,g=s*p|0,_=c+(u-c)*d|0;_<0?_+=N:_>=N&&(_-=N);let y=M.r[_],b=M.g[_],C=M.b[_],w=o*p/255,T=1-w;for(let e=-g;e<=g;e++){let t=h+e;if(!(t<0||t>R))for(let e=-g;e<=g;e++){let r=m+e;if(r<0||r>L)continue;let i=(t*n+r)*4;f[i]=f[i]*T+y*w,f[i+1]=f[i+1]*T+b*w,f[i+2]=f[i+2]*T+C*w}}}}t.putImageData(d,0,0)}function p(e,t,n,a,s,c={}){let l=c,d=r(s),f=e.createImageData(t,n),p=f.data,m=c.isDark!==!1,h=l.scale||.004,g=l.warpAmount||2,_=l.octaves||4,v=l.contrast||1,y=l.lacunarity||2,b=h/(Math.min(t,n)/1080),x=m?a.bg:a.bgLight,S=x[0],C=x[1],w=x[2],T=u(a),E=T.size;for(let e=0;e<n;e++){let n=e*b;for(let r=0;r<t;r++){let a=r*b,s=i(d,a,n,_,y),c=i(d,a+5.2,n+1.3,_,y),l=i(d,a+g*s+1.7,n+g*c+9.2,_,y),u=i(d,a+g*s+8.3,n+g*c+2.8,_,y),f=o(i(d,a+g*l,n+g*u,_,y),-.8,.8);f=Math.max(0,Math.min(1,f))**(1/v);let m=f*E|0,h=m>=E?E-1:m,x=f*f,D=(e*t+r)*4;p[D]=S+(T.r[h]-S)*x|0,p[D+1]=C+(T.g[h]-C)*x|0,p[D+2]=w+(T.b[h]-w)*x|0,p[D+3]=255}}e.putImageData(f,0,0)}function m(t,n,r,i,a,s={}){let c=s,u=e(a),d=t.createImageData(n,r),f=d.data,p=s.isDark!==!1,m=c.points||8,h=c.spread||.4,g=c.opacity||.8,_=c.blendSoftness||.5,v=c.vignette??.25,y=p?i.bg:i.bgLight,b=y[0],x=y[1],S=y[2],C=1/n,w=1/r,T=new Float32Array(m),E=new Float32Array(m),D=new Float32Array(m),O=new Float32Array(m),k=new Float32Array(m),A=new Float32Array(m),j=(n+r)*h;for(let e=0;e<m;e++){T[e]=u()*n,E[e]=u()*r;let t=l(i,u());D[e]=t[0],O[e]=t[1],k[e]=t[2];let a=j*(.3+u()*.7);A[e]=a*a}for(let e=0;e<r;e++){let t=e*n;for(let r=0;r<n;r++){let n=0,i=0,a=0,s=0;for(let t=0;t<m;t++){let o=r-T[t],c=e-E[t],l=o*o+c*c;if(l>A[t]*9)continue;let u=Math.exp(-l/A[t]);i+=D[t]*u,a+=O[t]*u,s+=k[t]*u,n+=u}n>0&&(i/=n,a/=n,s/=n);let c=o(n,0,1.5*(2-_))*g,l=(r+.5)*C-.5,u=(e+.5)*w-.5,d=1-(l*l+u*u)*2*v,p=(t+r)*4;f[p]=Math.max(0,(b+(i-b)*c)*d)|0,f[p+1]=Math.max(0,(x+(a-x)*c)*d)|0,f[p+2]=Math.max(0,(S+(s-S)*c)*d)|0,f[p+3]=255}}t.putImageData(d,0,0)}function h(e,t,n,a,o,s={}){let c=s,l=r(o),u=s.isDark===!1?a.bgLight:a.bg,d=u[0],f=u[1],p=u[2],m=Math.min(t,n)/1080,h=e.createImageData(t,n),g=h.data,_=(c.scale||.005)/m,v=c.contours||15,y=c.lineWidth||1,b=c.fillOpacity||.12,x=a.colors,S=x.length;for(let e=0;e<n;e++){let n=e*_,r=e*t;for(let e=0;e<t;e++){let t=(i(l,e*_,n,5)+1)*.5,a=Math.floor(t*v)/v,o=t*v%1,s=y*.06,c=o<s||o>1-s,u=a*(S-1),m=u|0,h=u-m,C=x[Math.min(m,S-1)],w=x[Math.min(m+1,S-1)],T,E,D;if(c)T=C[0]+(w[0]-C[0])*h,E=C[1]+(w[1]-C[1])*h,D=C[2]+(w[2]-C[2])*h;else{let e=C[0]+(w[0]-C[0])*h,n=C[1]+(w[1]-C[1])*h,r=C[2]+(w[2]-C[2])*h,i=b+t*b*1.5;T=d+(e-d)*i,E=f+(n-f)*i,D=p+(r-p)*i}let O=(r+e)*4;g[O]=T|0,g[O+1]=E|0,g[O+2]=D|0,g[O+3]=255}}e.putImageData(h,0,0)}function g(t,n,r,i,a,o={}){let s=o,c=e(a),u=o.isDark!==!1,d=Math.min(n,r)/1080,f=u?i.bg:i.bgLight;t.fillStyle=`rgb(${f[0]},${f[1]},${f[2]})`,t.fillRect(0,0,n,r);let p=n*(.3+c()*.4),m=r*(.3+c()*.4),h=s.particles||2500,g=Math.max(n,r)*.8,_=(s.trailLength||20)*d,v=s.speed||1.5,y=s.spread||.8,b=new Map;for(let e=0;e<h;e++){let e=c()*Math.PI*2,t=c()*g*y,n=v*(.5+c()*2),r=l(i,c()),a=.1+c()*.5,o=(.5+c()*3)*d,s=`${r[0]|0},${r[1]|0},${r[2]|0}`;b.has(s)||b.set(s,{color:r,items:[]}),b.get(s).items.push({angle:e,radius:t,speed:n,alpha:a,size:o})}for(let[,e]of b){let{color:n,items:r}=e,i=`${n[0]|0},${n[1]|0},${n[2]|0}`;t.lineCap=`round`;let a=new Map;for(let e of r){let t=e.alpha*10|0;a.has(t)||a.set(t,[]),a.get(t).push(e)}for(let[e,n]of a){let r=e*.1;t.beginPath(),t.strokeStyle=`rgba(${i},${r})`;for(let e of n){let n=p+Math.cos(e.angle)*e.radius,r=m+Math.sin(e.angle)*e.radius,i=p+Math.cos(e.angle)*(e.radius+e.speed*_),a=m+Math.sin(e.angle)*(e.radius+e.speed*_);t.moveTo(n,r),t.lineTo(i,a)}t.lineWidth=n[0].size,t.stroke()}}let x=t.createRadialGradient(p,m,0,p,m,g*.3),S=l(i,.5);x.addColorStop(0,`rgba(${S[0]|0},${S[1]|0},${S[2]|0},0.3)`),x.addColorStop(1,`rgba(0,0,0,0)`),t.fillStyle=x,t.fillRect(0,0,n,r)}function _(t,n,i,a,o,s={}){let c=s,u=r(o),d=e(o),f=s.isDark!==!1,p=Math.min(n,i)/1080,m=f?a.bg:a.bgLight;t.fillStyle=`rgb(${m[0]},${m[1]},${m[2]})`,t.fillRect(0,0,n,i);let h=c.curves||120,g=c.turbulence||3,_=c.lineWidth||1.2,v=c.segments||30,y=(c.amplitude||40)*p,b=c.noiseScale||.005,x=c.colorIntensity||.7,S=b/p,C=Math.max(n,i)/v;for(let e=0;e<h;e++){let e=d()*n,r=d()*i,o=l(a,d()),s=x*(.2+d()*.6),c=_*p*(.3+d()*1.4);t.beginPath(),t.moveTo(e,r),t.strokeStyle=`rgba(${o[0]|0},${o[1]|0},${o[2]|0},${s})`,t.lineWidth=c,t.lineCap=`round`;for(let n=0;n<v;n++){let n=u(e*S,r*S)*g,i=n+Math.PI*.5,a=(d()-.5)*y,o=e+Math.cos(n)*C*.5+Math.cos(i)*a,s=r+Math.sin(n)*C*.5+Math.sin(i)*a;e+=Math.cos(n)*C,r+=Math.sin(n)*C;let c=(d()-.5)*y,l=e-Math.cos(n)*C*.3+Math.cos(i)*c,f=r-Math.sin(n)*C*.3+Math.sin(i)*c;t.bezierCurveTo(o,s,l,f,e,r)}t.stroke()}}function v(t,n,r,i,a,o={}){let s=o,c=e(a),u=o.isDark!==!1,d=Math.min(n,r)/1080,f=u?i.bg:i.bgLight;t.fillStyle=`rgb(${f[0]},${f[1]},${f[2]})`,t.fillRect(0,0,n,r);let p=s.bolts||5,m=s.branches||4,h=s.jitter||.3,g=s.glow||8,_=s.decay||.65,v=s.branchAngle||.5,y=g*d;function b(e,n,r,a,o,s,u){if(s<=0||o<.3)return;let d=6+s*3|0,f=r-e,p=a-n,g=Math.sqrt(f*f+p*p);if(g<2)return;let x=-p/g,S=f/g,C=[{x:e,y:n}];for(let t=1;t<d;t++){let r=t/d,i=(c()-.5)*g*h*(1-Math.abs(r-.5)*2);C.push({x:e+f*r+x*i,y:n+p*r+S*i})}C.push({x:r,y:a});let w=l(i,u),T=.5+s/m*.5;if(y>0){t.beginPath(),t.moveTo(C[0].x,C[0].y);for(let e=1;e<C.length;e++)t.lineTo(C[e].x,C[e].y);t.strokeStyle=`rgba(${w[0]|0},${w[1]|0},${w[2]|0},${T*.04})`,t.lineWidth=o+y*4,t.lineCap=`round`,t.lineJoin=`round`,t.stroke(),t.beginPath(),t.moveTo(C[0].x,C[0].y);for(let e=1;e<C.length;e++)t.lineTo(C[e].x,C[e].y);t.strokeStyle=`rgba(${w[0]|0},${w[1]|0},${w[2]|0},${T*.12})`,t.lineWidth=o+y*1.5,t.stroke(),t.beginPath(),t.moveTo(C[0].x,C[0].y);for(let e=1;e<C.length;e++)t.lineTo(C[e].x,C[e].y);t.strokeStyle=`rgba(${Math.min(255,w[0]+60)|0},${Math.min(255,w[1]+60)|0},${Math.min(255,w[2]+60)|0},${T*.25})`,t.lineWidth=o+y*.5,t.stroke()}t.beginPath(),t.moveTo(C[0].x,C[0].y);for(let e=1;e<C.length;e++)t.lineTo(C[e].x,C[e].y);if(t.strokeStyle=`rgba(${Math.min(255,w[0]+80)|0},${Math.min(255,w[1]+80)|0},${Math.min(255,w[2]+80)|0},${T})`,t.lineWidth=o,t.lineCap=`round`,t.lineJoin=`round`,t.stroke(),s>1){let e=1+c()*m|0;for(let t=0;t<e;t++){let e=C[(.2+c()*.6)*(C.length-1)|0];if(!e)continue;let t=Math.atan2(p,f)+(c()-.5)*Math.PI*h*2*(1+v),n=g*_*(.3+c()*.4);b(e.x,e.y,e.x+Math.cos(t)*n,e.y+Math.sin(t)*n,o*_,s-1,u+.1)}}}for(let e=0;e<p;e++){let e=c()*n;b(e,c()*r*.1,e+(c()-.5)*n*.4,r*(.6+c()*.4),(1.5+c()*2.5)*d,m,c())}}function y(e,t,n,a,s,c={}){let l=c,u=r(s),d=e.createImageData(t,n),f=d.data,p=c.isDark!==!1,m=l.scale||.003,h=l.veins||20,g=l.turbulence||5,_=l.contrast||1.5,v=l.veinWidth||.8,y=l.colorShift||0,b=m/(Math.min(t,n)/1080),x=p?a.bg:a.bgLight,S=x[0],C=x[1],w=x[2];for(let e=0;e<n;e++){let n=e*b,r=e*t;for(let e=0;e<t;e++){let t=e*b,s=i(u,t,n,4)*g,c=i(u,t+5.2,n+1.3,4)*g,l=Math.sin((t+s)*h+(n+c)*h*.7),d=o((Math.abs(l)**(1/v))**_,0,1),p=(d+y)%1*(a.colors.length-1),m=p|0,x=p-m,T=a.colors[Math.min(m,a.colors.length-1)],E=a.colors[Math.min(m+1,a.colors.length-1)],D=.15+d*.85,O=(r+e)*4;f[O]=S+(T[0]+(E[0]-T[0])*x-S)*D|0,f[O+1]=C+(T[1]+(E[1]-T[1])*x-C)*D|0,f[O+2]=w+(T[2]+(E[2]-T[2])*x-w)*D|0,f[O+3]=255}}e.putImageData(d,0,0)}function b(t,n,r,i,a,o={}){let s=o,c=e(a),u=o.isDark!==!1,d=Math.min(n,r)/1080,f=u?i.bg:i.bgLight;t.fillStyle=`rgb(${f[0]},${f[1]},${f[2]})`,t.fillRect(0,0,n,r);let p=s.arms||3,m=s.tightness||.5,h=s.spread||.3,g=s.stars||8e3,_=s.rotation||0,v=s.coreSize||.08,y=s.coreGlow||.6,b=n*.5,x=r*.5,S=Math.min(n,r)*.45,C=_*Math.PI/180,w=[];for(let e=0;e<g;e++){let t=e%p,a=t/p*Math.PI*2+C,o=c()*Math.PI*6,s=S*(1-Math.exp(-m*o))*(.3+c()*.7),u=a+o,f=s/S,g=(c()-.5)*h*S*(.15+f*.85),_=b+Math.cos(u)*s+Math.cos(u+Math.PI/2)*g,v=x+Math.sin(u)*s+Math.sin(u+Math.PI/2)*g;if(_<-5||_>n+5||v<-5||v>r+5)continue;let y=Math.sqrt((_-b)**2+(v-x)**2)/S,T=l(i,(t/p+y*.3+c()*.15)%1),E=(.3+(1-y)*.7)*(.3+c()*.7),D=(.5+c()*2.5)*d;w.push({x:_,y:v,r:T[0],g:T[1],b:T[2],alpha:E,size:D})}for(let e=0;e<w.length;e+=200){let n=Math.min(e+200,w.length),r=new Map;for(let t=e;t<n;t++){let e=w[t],n=e.alpha*10|0;r.has(n)||r.set(n,[]),r.get(n).push(e)}for(let[e,n]of r){let r=e*.1;t.beginPath();for(let e of n)t.moveTo(e.x+e.size,e.y),t.arc(e.x,e.y,e.size,0,Math.PI*2);let i=n[0];t.fillStyle=`rgba(${i.r|0},${i.g|0},${i.b|0},${r})`,t.fill()}}let T=S*v*3,E=t.createRadialGradient(b,x,0,b,x,T),D=l(i,.1);E.addColorStop(0,`rgba(${Math.min(255,D[0]+100)|0},${Math.min(255,D[1]+100)|0},${Math.min(255,D[2]+100)|0},${.6*y})`),E.addColorStop(.3,`rgba(${D[0]|0},${D[1]|0},${D[2]|0},${.3*y})`),E.addColorStop(1,`rgba(0,0,0,0)`),t.fillStyle=E,t.fillRect(0,0,n,r);let O=t.createRadialGradient(b,x,0,b,x,T*.3);O.addColorStop(0,`rgba(255,255,255,${.5*y})`),O.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=O,t.fillRect(0,0,n,r)}function x(t,n,r,i,a,o={}){let s=o;e(a);let c=o.isDark!==!1,u=Math.min(n,r)/1080,d=c?i.bg:i.bgLight;t.fillStyle=`rgb(${d[0]},${d[1]},${d[2]})`,t.fillRect(0,0,n,r);let f=n/2,p=r/2,m=Math.min(n,r)*.42,h=s.symmetry||6,g=s.depth||3,_=(s.rotation||0)*Math.PI/180,v=s.spiralTightness||1,y=s.colorSpread||1,b=s.glowIntensity||.5,x=s.petalCount||8;b>0&&(t.shadowColor=`rgba(255,255,255,${b*.4})`,t.shadowBlur=12*u);for(let e=0;e<g;e++){let n=e/g,r=m*(.2+n*.8),a=l(i,n*y%1),o=.15+(1-n)*.5,s=(.5+(1-n)*2)*u;t.strokeStyle=`rgba(${a[0]|0},${a[1]|0},${a[2]|0},${o})`,t.lineWidth=s,t.lineJoin=`round`;for(let e=0;e<h;e++){let n=_+e/h*Math.PI*2,i=Math.PI*2/x;t.save(),t.translate(f,p),t.rotate(n),t.beginPath();for(let e=0;e<x;e++){let n=e*i,a=r*(.3+.7*Math.abs(Math.cos(n*v))),o=Math.cos(n)*a,s=Math.sin(n)*a;if(e===0)t.moveTo(o,s);else{let n=(e-.5)*i,a=r*(.5+.5*Math.abs(Math.cos(n*v)));t.quadraticCurveTo(Math.cos(n)*a,Math.sin(n)*a,o,s)}}t.closePath(),t.stroke(),t.beginPath();for(let e=0;e<60;e++){let n=e/60*Math.PI*2,i=r*(.05+e/60*.5)*(1+.3*Math.sin(n*x*v)),a=Math.cos(n)*i,o=Math.sin(n)*i;e===0?t.moveTo(a,o):t.lineTo(a,o)}t.stroke(),t.restore()}}t.shadowBlur=0}function S(t,n,r,i,a,o={}){let s=o,c=e(a),u=o.isDark!==!1,d=Math.min(n,r)/1080,f=u?i.bg:i.bgLight;t.fillStyle=`rgb(${f[0]},${f[1]},${f[2]})`,t.fillRect(0,0,n,r);let p=n/2,m=r/2,h=Math.hypot(p,m),g=s.rings||15,_=s.depth||10,v=s.twist||1.5,y=s.speed||1,b=(s.glowRadius||8)*d,x=(s.chromaShift||5)*d,S=s.perspective||.6;t.lineWidth=(1+c()*1.5)*d,t.lineCap=`round`;for(let e=0;e<_;e++){let n=e/_,r=h*S**+e*.9,o=l(i,(n*y*.3+a*.001)%1),s=.3+(1-n)*.5;if(!(r<3)){t.shadowColor=`rgba(${o[0]|0},${o[1]|0},${o[2]|0},${s})`,t.shadowBlur=b*(1-n*.5);for(let i=0;i<3;i++){let a=(i-1)*x*(1-n),o=i===0?[255,60,60]:i===1?[60,255,60]:[60,60,255];t.strokeStyle=`rgba(${o[0]},${o[1]},${o[2]},${s*.6})`,t.lineWidth=(.5+(1-n)*1.5)*d,t.beginPath();for(let n=0;n<=g;n++){let i=n/g*Math.PI*2,o=r*(1+.15*Math.sin(i*3+e*v)*Math.cos(i*2-e*.5)),s=p+Math.cos(i+e*v*.1)*o+a,c=m+Math.sin(i+e*v*.1)*o;n===0?t.moveTo(s,c):t.lineTo(s,c)}t.closePath(),t.stroke()}if(e>0){let i=h*S**(e-1)*.9;t.strokeStyle=`rgba(${o[0]|0},${o[1]|0},${o[2]|0},${s*.15})`,t.lineWidth=(.3+(1-n)*.5)*d,t.shadowBlur=0;let a=Math.min(12,g);for(let n=0;n<a;n++){let o=n/a*Math.PI*2,s=1+.15*Math.sin(o*3+(e-1)*v),c=1+.15*Math.sin(o*3+e*v);t.beginPath(),t.moveTo(p+Math.cos(o+(e-1)*v*.1)*i*s,m+Math.sin(o+(e-1)*v*.1)*i*s),t.lineTo(p+Math.cos(o+e*v*.1)*r*c,m+Math.sin(o+e*v*.1)*r*c),t.stroke()}}}}t.shadowBlur=0;let C=l(i,a*.001%1),w=t.createRadialGradient(p,m,0,p,m,h*.15);w.addColorStop(0,`rgba(${Math.min(255,C[0]+80)|0},${Math.min(255,C[1]+80)|0},${Math.min(255,C[2]+80)|0},0.6)`),w.addColorStop(1,`rgba(${C[0]|0},${C[1]|0},${C[2]|0},0)`),t.fillStyle=w,t.fillRect(0,0,n,r)}function C(t,n,r,i,a,o={}){let s=o;e(a);let c=o.isDark!==!1,u=Math.min(n,r)/1080,d=c?i.bg:i.bgLight;t.fillStyle=`rgb(${d[0]},${d[1]},${d[2]})`,t.fillRect(0,0,n,r);let f=n/2,p=r/2,m=Math.min(n,r)*.42,h=s.layers||4,g=s.ratio||1.618,_=(s.rotationSpeed||30)*Math.PI/180,v=s.petalCount||6,y=s.innerRadius||.15,b=s.opacity||.7,x=(s.glow||5)*u;x>0&&(t.shadowColor=`rgba(255,255,255,0.3)`,t.shadowBlur=x);for(let e=0;e<h;e++){let n=e/h,r=m*g**(e*.3)*.3,o=l(i,(n*.8+a*.001)%1),s=b*(.3+(1-n)*.7),c=(.4+(1-n)*1.5)*u;t.strokeStyle=`rgba(${o[0]|0},${o[1]|0},${o[2]|0},${s})`,t.lineWidth=c,t.lineJoin=`round`;let d=_*e,x=v,S=r*y*g;for(let e=0;e<x;e++){let n=d+e/x*Math.PI*2,i=f+Math.cos(n)*r*.5,a=p+Math.sin(n)*r*.5;t.beginPath(),t.arc(i,a,S,0,Math.PI*2),t.stroke()}t.beginPath();for(let e=0;e<v;e++){let n=d+e/v*Math.PI*2,i=d+(e+1)/v*Math.PI*2,a=f+Math.cos(n)*r*.5,o=p+Math.sin(n)*r*.5,s=f+Math.cos(i)*r*.5,c=p+Math.sin(i)*r*.5;t.moveTo(a,o),t.lineTo(s,c),t.moveTo(f,p),t.lineTo(a,o);let l=d+(e+Math.floor(v/2))%v/v*Math.PI*2;t.moveTo(a,o),t.lineTo(f+Math.cos(l)*r*.5,p+Math.sin(l)*r*.5)}t.stroke();for(let e=0;e<v;e++){let n=d+e/v*Math.PI*2,i=f+Math.cos(n)*r*.5,a=p+Math.sin(n)*r*.5;t.beginPath(),t.arc(i,a,S*1.2,0,Math.PI*2),t.stroke()}}t.shadowBlur=0;let S=m*.08,C=t.createRadialGradient(f,p,0,f,p,S);C.addColorStop(0,`rgba(255,255,255,0.4)`),C.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=C,t.beginPath(),t.arc(f,p,S,0,Math.PI*2),t.fill()}function w(e,t,n){e=(e%1+1)%1;let r=t,i=n,a=0;return a+=.12*r*Math.exp(-((e-.12)**2)/(.0012*i)),a-=.06*r*Math.exp(-((e-.26)**2)/(8e-5*i)),a+=1*r*Math.exp(-((e-.3)**2)/(2e-4*i)),a-=.12*r*Math.exp(-((e-.34)**2)/(8e-5*i)),a+=.2*r*Math.exp(-((e-.5)**2)/(.002*Math.sqrt(i))),a}function T(t,n,r,i,a,o={}){let s=o,c=e(a),u=t.createImageData(n,r),d=u.data,f=s.beats||4,p=s.amplitude??.5,m=s.glow??.5,h=s.grain??.15,g=s.convexity??.08,_=s.scanline??.15,v=s.lineWidth||2,y=s.hrv??.15,b=s.trail??.25,x=s.sweep??.3,S=o.isDark===!1?i.bgLight:i.bg,C=n*.5,T=r*.5,E=n*.5,D=r*.5,O=r*.52,k=r*.32*p,A=n/f,j=n*(.55+c()*.3),M=Math.ceil(A)+2,N=[];for(let e=0;e<f;e++){let t=new Float32Array(M),n=1+Math.sin(e*2.37+a)*y*.2,r=1+Math.sin(e*1.73+a*3)*y*.15;for(let e=0;e<M;e++)t[e]=w(e/A,n,r);N.push(t)}let P=new Float32Array(n);for(let e=0;e<n;e++)P[e]=Math.sin(e*.37)*1.8+(c()-.5)*2.5;for(let e=0;e<r;e++){let t=1-_*.25*(e&1?.15:1);for(let o=0;o<n;o++){let s=(o-C)/E,u=(e-T)/D,p=s*s+u*u,_=1+g*p,y=C+s*E/_,w=T+u*D/_;if(y<-1||y>=n+1||w<-1||w>=r+1){let t=(e*n+o)*4;d[t]=d[t+1]=d[t+2]=0,d[t+3]=255;continue}let F=Math.min(Math.floor(y/A),f-1),I=(y%A+A)%A,L=Math.min(I|0,M-2),R=I-L,z=N[F][L]*(1-R)+N[F][L+1]*R,B=Math.sin(y/n*Math.PI*2.5+a)*.03*r+Math.sin(y/n*Math.PI*1.1+a*2)*.015*r,V=P[Math.max(0,Math.min(n-1,Math.round(y)))]*.5,H=O-z*k+B+V,U=Math.abs(w-H),W=l(i,y/n),G,K,q,J=v*.5;if(U<J)G=W[0],K=W[1],q=W[2];else{let e=1+Math.max(0,z)*.8,t=J+22*m*e;if(U<t){let e=(U-J)/(t-J),n=Math.exp(-e*e*6);G=S[0]+(W[0]-S[0])*n*m,K=S[1]+(W[1]-S[1])*n*m,q=S[2]+(W[2]-S[2])*n*m}else G=S[0],K=S[1],q=S[2]}if(b>0){let e=y-j,t=e>0?1-b*.85*Math.min(1,e/(n*.3)):1-b*.15*Math.min(1,Math.abs(e)/(j||1));G*=t,K*=t,q*=t}if(x>0){let t=Math.abs(y-j);if(t<2.5){let e=Math.exp(-t*t*1.5)*x;G+=e*40,K+=e*60,q+=e*40}if((e<4||e>r-5)&&t<6){let e=Math.exp(-t*t*.08)*x*.25;G+=e*W[0],K+=e*W[1],q+=e*W[2]}}let Y=A/5,ee=(y%Y+Y)%Y,X=r/10,te=(w%X+X)%X;if(ee<.7||te<.7){let e=.05;G+=(W[0]*.2-G)*e,K+=(W[1]*.2-K)*e,q+=(W[2]*.2-q)*e}let ne=(y%A+A)%A,re=(w%(X*5)+X*5)%(X*5);if(ne<1||re<1){let e=.1;G+=(W[0]*.3-G)*e,K+=(W[1]*.3-K)*e,q+=(W[2]*.3-q)*e}if(Math.abs(w-O)<.6){let e=.04;G+=(W[0]*.25-G)*e,K+=(W[1]*.25-K)*e,q+=(W[2]*.25-q)*e}let Z=Math.max(.1,1-p*g*2.5);G*=Z,K*=Z,q*=Z;let ie=(o-n*.3)/n,ae=(e-r*.22)/r,Q=Math.exp(-(ie*ie+ae*ae)*18)*.07;if(G+=Q*255,K+=Q*255,q+=Q*255,G*=t,K*=t,q*=t,h>0){let t=(c()-.5)*h*50+Math.sin(o*.1+e*.07)*h*15;G+=t,K+=t,q+=t}let $=(e*n+o)*4;d[$]=Math.max(0,Math.min(255,G+.5))|0,d[$+1]=Math.max(0,Math.min(255,K+.5))|0,d[$+2]=Math.max(0,Math.min(255,q+.5))|0,d[$+3]=255}}t.putImageData(u,0,0)}function E(e,t,n,a,o,s={}){let c=s,l=r(o),d=e.createImageData(t,n),f=d.data,p=s.isDark!==!1,m=Math.min(t,n)/1080,h=p?a.bg:a.bgLight,g=h[0],_=h[1],v=h[2],y=c.drift||1,b=c.height||.7,x=c.intensity||.8,S=c.softness||.5,C=c.shimmer||3,w=u(a),T=w.size,E=.0016/m,D=E*.16,O=n*b,k=1.6+S*2.4;for(let e=0;e<n;e++){let n=e*t,r=e/O,a=r>=1?0:(1-r)**1.6,s=e*D;for(let e=0;e<t;e++){let t=e*E,r=l(t*.6+31.4,s*.5+o*.001)*y*2.2,c=i(l,t+r,s,C,2.2)*.5+.5,u=l(t*4.2+r*2.4,s*3.1)*.5+.5;c*=.72+u*.56;let d=(c>0?c:0)**+k*a*x,p=(n+e)*4;if(d<=.004)f[p]=g,f[p+1]=_,f[p+2]=v;else{let e=d*T|0;e>=T&&(e=T-1);let t=d>1?1:d;f[p]=g+(w.r[e]-g)*t|0,f[p+1]=_+(w.g[e]-_)*t|0,f[p+2]=v+(w.b[e]-v)*t|0}f[p+3]=255}}e.putImageData(d,0,0)}function D(t,n,a,o,s,c={}){let l=c,d=r(s),f=e(s),p=c.isDark!==!1;Math.min(n,a)/1080;let m=t.createImageData(n,a),h=m.data,g=p?o.bg:o.bgLight,_=g[0],v=g[1],y=g[2],b=l.blooms||5,x=l.spread||.5,S=l.sharpness||2,C=l.octaves||4,w=l.swirl||1.5;for(let e=0;e<h.length;e+=4)h[e]=_,h[e+1]=v,h[e+2]=y,h[e+3]=255;let T=Math.min(n,a),E=u(o),D=E.size;for(let e=0;e<b;e++){let e=n*(.18+f()*.64),t=a*(.18+f()*.64),r=T*(.1+f()*.16)*(.55+x*.9),o=f(),s=f()*Math.PI*2,c=(2.2+f()*2.4)/r,l=Math.max(0,e-r*1.6|0),u=Math.min(n-1,e+r*1.6|0),p=Math.max(0,t-r*1.6|0),m=Math.min(a-1,t+r*1.6|0),g=1/r;for(let r=p;r<=m;r++){let a=r*n,f=r-t;for(let t=l;t<=u;t++){let n=t-e,r=n*Math.cos(s)-f*Math.sin(s),l=n*Math.sin(s)+f*Math.cos(s),u=Math.sqrt(r*r+l*l)*g;if(u>1.5)continue;let p=r*c,m=l*c,_=i(d,p+5.2,m+1.3,3)*w,v=i(d,p+_,m-_*.7,C,2.1),y=(v+.55-u*.72)*S;if(y=y<0?0:y>1?1:y,y=y*y*(3-2*y),y<=.01)continue;let b=Math.exp(-Math.abs(v-(-.05+u*.5))*6),x=(o+v*.22+1)%1*D|0;x>=D&&(x=D-1);let T=1-b*.38,O=E.r[x]*T,k=E.g[x]*T,A=E.b[x]*T,j=y*(1-Math.min(1,u))*.9+y*.1,M=1-j,N=(a+t)*4;h[N]=h[N]*M+O*j,h[N+1]=h[N+1]*M+k*j,h[N+2]=h[N+2]*M+A*j}}}t.putImageData(m,0,0)}function O(t,n,r,i,a,o={}){let s=o,c=e(a),l=o.isDark!==!1,d=Math.min(n,r)/1080,f=l?i.bg:i.bgLight;t.fillStyle=`rgb(${f[0]|0},${f[1]|0},${f[2]|0})`,t.fillRect(0,0,n,r);let p=(s.tileSize||120)*d,m=(s.lineWidth||10)*d,h=(s.curvature||0)>.5,g=s.colorMode||0,_=s.density??.92,v=s.glow||0,y=u(i),b=y.size,x=p/2,S=Math.ceil(n/p)+1,C=Math.ceil(r/p)+1,w=(C+1)*S,T=C*S*2,E=new Uint8Array(T),D=new Map,O=(e,t)=>{let n=D.get(e);n?n.push(t):D.set(e,[t])};for(let e=0;e<C;e++)for(let t=0;t<S;t++){let n=(e*S+t)*2,r=+(c()>.5),i=e*S+t,a=i+S,o=w+e*(S+1)+t,s=o+1;E[n]=r,E[n+1]=r,O(i,n),O(r?o:s,n),O(a,n+1),O(r?s:o,n+1)}let k=new Int32Array(T);for(let e=0;e<T;e++)k[e]=e;let A=e=>{for(;k[e]!==e;)k[e]=k[k[e]],e=k[e];return e};for(let e of D.values())for(let t=1;t<e.length;t++){let n=A(e[0]),r=A(e[t]);n!==r&&(k[n]=r)}let j=new Map;for(let e=0;e<T;e++){let t=A(e),n=j.get(t);n?n.push(e):j.set(t,[e])}t.lineCap=`round`,t.lineJoin=`round`,t.lineWidth=m,v>0&&(t.shadowBlur=v*d);for(let e of j.values()){if(c()>_)continue;let n;if(g===1){let t=0,r=0;for(let n=0;n<e.length;n++)r+=(e[n]>>1)%S,t+=(e[n]>>1)/S|0;let i=t/e.length/C,a=r/e.length/S;n=Math.min(b-1,(i+a)*.5*b|0)}else n=g===2?c()>.85?b*.85|0:b*.35|0:c()*b|0;let r=y.r[n]|0,i=y.g[n]|0,a=y.b[n]|0;t.strokeStyle=`rgb(${r},${i},${a})`,v>0&&(t.shadowColor=`rgba(${r},${i},${a},0.6)`),t.beginPath();for(let n=0;n<e.length;n++){let r=e[n],i=(r>>1)%S,a=(r>>1)/S|0,o=i*p,s=a*p,c=E[r],l=r&1;h?c?l===0?(t.moveTo(o+x,s),t.arc(o,s,x,0,Math.PI/2)):(t.moveTo(o+x,s+p),t.arc(o+p,s+p,x,Math.PI,Math.PI*1.5)):l===0?(t.moveTo(o+p,s+x),t.arc(o+p,s,x,Math.PI/2,Math.PI)):(t.moveTo(o,s+x),t.arc(o,s+p,x,Math.PI*1.5,Math.PI*2)):c?l===0?(t.moveTo(o+x,s),t.lineTo(o,s+x)):(t.moveTo(o+x,s+p),t.lineTo(o+p,s+x)):l===0?(t.moveTo(o+x,s),t.lineTo(o+p,s+x)):(t.moveTo(o,s+x),t.lineTo(o+x,s+p))}t.stroke()}t.shadowBlur=0}function k(t,n,a,o,s,c={}){let l=c,d=r(s),f=e(s),p=c.isDark!==!1,m=Math.min(n,a)/1080,h=t.createImageData(n,a),g=h.data,_=p?o.bg:o.bgLight,v=_[0],y=_[1],b=_[2],x=l.stars||900,S=l.streak||1,C=l.warpRatio||.5,w=l.nebula||.5,T=l.coreGlow??.35,E=u(o),D=E.size,O=n/2,k=a/2,A=Math.hypot(O,k),j=1.6/A;for(let e=0;e<a;e++){let t=e*n,r=e-k;for(let a=0;a<n;a++){let n=a-O,o=Math.sqrt(n*n+r*r)/A,s=i(d,a*j,e*j,4,2.3)*.5+.5,c=1-o*o*.55,l=s*s*D*.55|0;l>=D&&(l=D-1);let u=w*s*c,f=(t+a)*4;g[f]=v+(E.r[l]*.85-v)*u|0,g[f+1]=y+(E.g[l]*.85-y)*u|0,g[f+2]=b+(E.b[l]*.85-b)*u|0,g[f+3]=255}}t.putImageData(h,0,0),t.lineCap=`round`;let M=new Map;for(let e=0;e<x;e++){let e=f()*Math.PI*2,t=f()**.55*A,n=Math.cos(e),r=Math.sin(e),i=(.4+f()*1.7)*m,a=.25+f()*.75,o=f()*D|0,s=O+n*t,c=k+r*t,l=f()<C?t*.22*S*(.4+f()):0,u=O+n*(t+l),d=k+r*(t+l),p=`${o}|${a*10|0}`;M.has(p)||M.set(p,[]),M.get(p).push({x1:s,y1:c,x2:u,y2:d,size:i})}for(let[e,n]of M){let[r,i]=e.split(`|`),a=+r;t.strokeStyle=`rgba(${E.r[a]|0},${E.g[a]|0},${E.b[a]|0},${i*.1})`,t.lineWidth=n[0].size,t.beginPath();for(let e of n)t.moveTo(e.x1,e.y1),t.lineTo(e.x2,e.y2);t.stroke()}if(T>0){let e=t.createRadialGradient(O,k,0,O,k,A*.25),r=D*.7|0;e.addColorStop(0,`rgba(${E.r[r]|0},${E.g[r]|0},${E.b[r]|0},${T*.5})`),e.addColorStop(1,`rgba(0,0,0,0)`),t.globalCompositeOperation=`screen`,t.fillStyle=e,t.fillRect(0,0,n,a),t.globalCompositeOperation=`source-over`}}function A(t,n,a,o,s,c={}){let u=c,d=e(s),f=c.isDark!==!1,p=u.cubeSize||60,m=u.heightVariation??.5,h=u.scatter??0,g=u.gradient??.3,_=u.edgeGlow??0,v=f?o.bg:o.bgLight;t.fillStyle=`rgb(${v[0]},${v[1]},${v[2]})`,t.fillRect(0,0,n,a);let y=r(s),b=p,x=b*.866,S=b*.5,C=b*1.5,w=Math.ceil(n/x)+2,T=Math.ceil(a/C)+2;_>0&&(t.shadowBlur=6+_*10);for(let e=-2;e<T;e++)for(let r=-2;r<w;r++){if(h>0&&d()<h)continue;let s=r*x+(e&1)*(x/2),c=e*C;if(s<-b*2||s>n+b*2||c<-b*2||c>a+b*2)continue;let u=i(y,r*.18,e*.18,4)*m*b*.5,[p,v,E]=l(o,((e&2147483647)*7+(r&2147483647)*13)%5/4);if(g>0){let[t,n,i]=l(o,Math.max(0,Math.min(1,(r+e*.3)/(w+T*.3)))),a=g*.5;p=p*(1-a)+t*a,v=v*(1-a)+n*a,E=E*(1-a)+i*a}let D=s,O=c-b-u,k=s+x,A=c-b+S-u,j=s-x,M=c-b+S-u,N=s,P=c-u,F=s+x,I=c+b*.5,L=s-x,R=c+b*.5,z=s,B=c+b,V=f?Math.min(255,p+45):Math.max(0,p-15),H=f?Math.min(255,v+45):Math.max(0,v-15),U=f?Math.min(255,E+45):Math.max(0,E-15);t.fillStyle=`rgb(${V|0},${H|0},${U|0})`,t.beginPath(),t.moveTo(D,O),t.lineTo(k,A),t.lineTo(N,P),t.lineTo(j,M),t.closePath(),t.fill();let W=f?Math.max(0,p-25):Math.min(255,p+15),G=f?Math.max(0,v-25):Math.min(255,v+15),K=f?Math.max(0,E-25):Math.min(255,E+15);t.fillStyle=`rgb(${W|0},${G|0},${K|0})`,t.beginPath(),t.moveTo(N,P),t.lineTo(k,A),t.lineTo(F,I),t.lineTo(z,B),t.closePath(),t.fill();let q=f?Math.max(0,p-55):Math.min(255,p+35),J=f?Math.max(0,v-55):Math.min(255,v+35),Y=f?Math.max(0,E-55):Math.min(255,E+35);t.fillStyle=`rgb(${q|0},${J|0},${Y|0})`,t.beginPath(),t.moveTo(N,P),t.lineTo(j,M),t.lineTo(L,R),t.lineTo(z,B),t.closePath(),t.fill(),_>0?(t.shadowColor=f?`rgba(${V|0},${H|0},${U|0},${_*.6})`:`rgba(${q|0},${J|0},${Y|0},${_*.4})`,t.strokeStyle=f?`rgba(255,255,255,${.08+_*.25})`:`rgba(0,0,0,${.08+_*.25})`):(t.shadowColor=`transparent`,t.strokeStyle=f?`rgba(255,255,255,0.06)`:`rgba(0,0,0,0.05)`),t.lineWidth=1,t.beginPath(),t.moveTo(D,O),t.lineTo(z,B),t.moveTo(k,A),t.lineTo(F,I),t.moveTo(j,M),t.lineTo(L,R),t.moveTo(D,O),t.lineTo(k,A),t.lineTo(N,P),t.lineTo(j,M),t.closePath(),t.stroke()}t.shadowBlur=0,t.shadowColor=`transparent`}function j(t,n,r,i,a,o={}){let s=o,c=e(a),l=o.isDark!==!1,u=s.polygonSides||6,f=s.layers||30,p=s.rotationSpeed||15,m=s.spacing||1,h=l?i.bg:i.bgLight;t.fillStyle=`rgb(${h[0]},${h[1]},${h[2]})`,t.fillRect(0,0,n,r);let g=n/2,_=r/2,v=Math.min(n,r)*.45/f*m,y=c()*360;for(let e=0;e<f;e++){let n=(e+1)/f,r=v*(e+1),i=p*e*Math.PI/180,a=(y+n*120)%360,o=40+n*20,s=l?35+n*15:50+n*10,[c,m,h]=d(a/360,o/100,s/100),b=.3+(1-n)*.4;t.strokeStyle=l?`rgba(${c},${m},${h},${b})`:`rgba(${c},${m},${h},${b*.8})`,t.lineWidth=Math.max(.5,3-n*2),t.beginPath();for(let e=0;e<=u;e++){let n=i+e/u*2*Math.PI-Math.PI/2,a=g+r*Math.cos(n),o=_+r*Math.sin(n);e===0?t.moveTo(a,o):t.lineTo(a,o)}t.closePath(),t.stroke()}}function M(t,n,i,a,o,s={}){let c=s,l=e(o),d=r(o),f=s.isDark!==!1,p=c.ribbons||9,m=c.flowSpeed||1.6,h=c.lineWidth||30,g=c.opacity||.5,_=Math.min(n,i)/1080,v=.0016/_,y=f?a.bg:a.bgLight;t.fillStyle=`rgb(${y[0]},${y[1]},${y[2]})`,t.fillRect(0,0,n,i);let b=u(a),x=b.size,S=3*_,C=2600;t.globalCompositeOperation=`screen`,t.lineCap=`round`,t.lineJoin=`round`;for(let e=0;e<p;e++){let e=l()*n,r=i*(.25+l()*.75),a=l(),o=.25+l()*.4,s=.4+l()*.6,c=.5+l()*.5,u=(2+l()*h)*_,f=e,p=r,y=f,w=p,T=l()*100;for(let e=0;e<C&&!(f<-80||f>n+80||p<-80||p>i+80);e++){let n=d(f*v,p*v+T),r=d(f*v*1.7+T,p*v*1.7),i=Math.PI*(n+s*r*.5);y=f,w=p,f+=Math.cos(i)*S*m,p+=Math.sin(i)*S*m;let l=e/C,h=(a+l*o)%1*x|0;h>=x&&(h=x-1);let _=Math.max(.5,u*(1-l*c)),E=g*(1-l*.7);t.strokeStyle=`rgba(${b.r[h]},${b.g[h]},${b.b[h]},${E.toFixed(3)})`,t.lineWidth=_,t.beginPath(),t.moveTo(y,w),t.lineTo(f,p),t.stroke()}}t.globalCompositeOperation=`source-over`}function N(e,t,n,r,i,a={}){let o=a,s=e.createImageData(t,n),c=s.data;a.isDark;let l=r.bg,d=a.mode===void 0?0:o.mode,f=o.power||2,p=Math.round(o.maxIter||100),m=o.zoom||1,h=o.cxOffset||0,g=o.cyOffset||0,_=o.cReal||0,v=o.cImag||0;if(p>8){let e=t*n,r=f!==2,i=a.quality===`preview`?r?6e7:22e7:r?26e7:16e8,o=Math.max(a.quality===`preview`?48:96,Math.floor(i/e));p>o&&(p=o)}let y=u(r),b=y.size,x=3.4/(m*Math.min(t,n)),S=t/2+h*t*x,C=n/2+g*n*x,w=m>1?-.75*Math.min(1,(m-1)/2.5):0,T=l[0],E=l[1],D=l[2],O=d===1?_*-1.5:0,k=d===1?v*1.5:0,A=a.quality===`preview`?400:4400,j=typeof performance<`u`&&typeof performance.now==`function`,M=j?performance.now():Date.now(),N=j?()=>performance.now():()=>Date.now(),P=p;for(let e=0;e<n;e++){if(!(e&15)&&e>0){let t=N()-M,r=A-t,i=(n-e)*(t/e);if(i>r){let e=i/Math.max(r,1);P=Math.max(f===2?4:2,Math.round(p/e))}else P=p}for(let n=0;n<t;n++){let r=d===0?w:0,i=(n-S)*x+r,a=(e-C)*x+0,o,s,l,u;d===0?(o=0,s=0,l=i,u=a):(o=i,s=a,l=O,u=k);let p=0,m=o*o,h=s*s;for(;p<P&&m+h<16;){if(f===2)s=2*o*s+u,o=m-h+l;else{let e=(m+h)**(f/2),t=Math.atan2(s,o)*f;o=e*Math.cos(t)+l,s=e*Math.sin(t)+u}m=o*o,h=s*s,p++}let g=(e*t+n)*4;if(p>=P)c[g]=T,c[g+1]=E,c[g+2]=D;else{let e=Math.log(m+h)/2,t=Math.log(e/Math.log(f))/Math.log(f),n=(p+1-t)/P;n=n<0?0:n>.999?.999:n;let r=n*b|0;r>=b&&(r=b-1),c[g]=y.r[r],c[g+1]=y.g[r],c[g+2]=y.b[r]}c[g+3]=255}}e.putImageData(s,0,0)}function P(e,t,n,a,o,s={}){let c=s,l=e.createImageData(t,n),d=l.data,f=r(o),p=c.scale||.004,m=c.warpAmount||2,h=c.octaves||6,g=c.contrast||1.3,_=c.colorSpan||.7,v=u(a),y=v.size,b=Math.min(t,n),x=t/2,S=n/2,C=Math.max(t,n)*.5,w=o*.004;for(let e=0;e<n;e++){let n=e/b;for(let r=0;r<t;r++){let a=r/b,o=i(f,a*5*p,n*5*p,2),s=i(f,a*5*p+5.2,n*5*p+1.3,2),c=a*6+m*o,l=n*6+m*s,u=i(f,c*1.6,l*1.6,h,2,.5),T=i(f,c*1.6+7.7,l*1.6+3.3,h,2,.5),E=Math.abs(u*2-1),D=Math.abs(T*2-1),O=Math.hypot(r-x,e-S),k=Math.max(0,1-O/C),A=.6+.4*k*k,j=(E*.55+D*.45)*A;j=.5+(j-.5)*g,j=j<0?0:j>.999?.999:j;let M=(j*_+w)%1*y|0;M>=y&&(M=y-1);let N=(e*t+r)*4;d[N]=v.r[M],d[N+1]=v.g[M],d[N+2]=v.b[M],d[N+3]=255}}e.putImageData(l,0,0)}function F(t,n,r,i,a,o={}){let s=o,c=t.createImageData(n,r),l=c.data,d=e(a),f=Math.round(s.maxSteps||40),p=s.scale||.8,m=s.zoom||1;s.glow;let h=o.mode===void 0?0:s.mode,g=Math.min(n,r),_=u(i),v=_.size,y=[],b=5+d()*4|0;for(let e=0;e<b;e++){let e=d()*Math.PI*2,t=.15+d()*.32;y.push({x:Math.cos(e)*t,y:Math.sin(e)*t,r:.06+d()*.14,kind:d()*3|0})}function x(e,t){let n=1e9;for(let r=0;r<y.length;r++){let i=y[r],a=e-i.x,o=t-i.y,s=Math.sqrt(a*a+o*o),c=s-i.r;n=i.kind===0?Math.min(n,c):i.kind===1?Math.max(-c,n):Math.min(n,Math.abs(s-i.r))}return n}let S=1/(g*.5*p*m),C=n/2,w=r/2;for(let e=0;e<r;e++)for(let t=0;t<n;t++){let r=(t-C)*S,i=(e-w)*S,a=0,o=x(r,i);for(let e=0;e<f&&!(o<1e-4);e++){let e=Math.max(.004,o*.7);a+=e,o=x(r,i+a)}let s=Math.abs(Math.sin(o*60*m))*.5+.5,c=.004,u=(x(r+c,i)-x(r-c,i))*.5,d=(x(r,i+c)-x(r,i-c))*.5,p=1-Math.min(1,Math.abs(d)*1.2+Math.abs(u)*.6),g;g=h===0?p*(.35+.65*s):Math.min(1,a*.8)*(.4+.6*s),g=Math.max(0,Math.min(.999,g));let y=g*v|0;y>=v&&(y=v-1);let b=(e*n+t)*4,T=.55+.45*p;l[b]=Math.min(255,_.r[y]*T),l[b+1]=Math.min(255,_.g[y]*T),l[b+2]=Math.min(255,_.b[y]*T),l[b+3]=255}t.putImageData(c,0,0)}function I(t,n,r,i,a,o={}){let s=o;o.isDark;let c=i.bg;t.fillStyle=`rgb(${c[0]},${c[1]},${c[2]})`,t.fillRect(0,0,n,r);let l=e(a),d=o.attType===void 0?0:s.attType,f=o.aParam===void 0?1.4:s.aParam,p=o.bParam===void 0?.3:s.bParam,m=o.cParam===void 0?2.5:s.cParam,h=o.dParam===void 0?.5:s.dParam,g=Math.round(s.iterations||4e4),_=s.pointSize||1,v=s.colorSpread||1,y=l(),b=u(i),x=b.size,S=l()*.1,C=l()*.1;l()*.1,t.fillStyle=`rgba(255,255,255,0.02)`;let w=new Float32Array(g),T=new Float32Array(g),E=1/0,D=-1/0,O=1/0,k=-1/0;for(let e=0;e<g;e++){let t,n;d===0?(t=Math.sin(f*C)+m*Math.cos(f*S),n=Math.sin(p*S)+h*Math.cos(p*C)):d===1?(t=Math.sin(f*C)-Math.cos(p*S),n=Math.sin(m*S)-Math.cos(h*C)):(t=C+1-f*S*S,n=p*S),S=t,C=n,e>100&&(w[e]=S,T[e]=C,S<E&&(E=S),S>D&&(D=S),C<O&&(O=C),C>k&&(k=C))}let A=D-E||1,j=k-O||1,M=n-1,N=r-1,P=Math.max(1,_);t.globalCompositeOperation=`lighter`;for(let e=0;e<g;e++){let i=(w[e]-E)/A*M,a=(T[e]-O)/j*N;if(i<0||a<0||i>=n||a>=r)continue;let o=(e/g*v+y)%1*x|0;o>=x&&(o=x-1),t.fillStyle=`rgb(${b.r[o]},${b.g[o]},${b.b[o]})`,t.fillRect(i,a,P,P)}t.globalCompositeOperation=`source-over`}function L(t,n,r,i,a,o={}){let s=o;o.isDark;let c=i.bg;t.fillStyle=`rgb(${c[0]},${c[1]},${c[2]})`,t.fillRect(0,0,n,r);let l=e(a),d=o.treeType===void 0?0:s.treeType,f=Math.max(1,Math.min(8,s.depth||6)),p=s.angle||22,m=s.trunkLen||Math.min(n,r)/1080*90,h=s.ratio||.7,g=s.spreadFactor||.6,_=p*Math.PI/180,v=u(i),y=v.size,b=l();function x(e,n,r,i,a,o){if(a>o||r<1.2)return;let s=e+Math.cos(i)*r,c=n+Math.sin(i)*r,u=(a/o*.6+b)%1*y|0;u>=y&&(u=y-1),t.strokeStyle=`rgb(${v.r[u]},${v.g[u]},${v.b[u]})`,t.lineWidth=Math.max(.5,r*.09),t.lineCap=`round`,t.beginPath(),t.moveTo(e,n),t.lineTo(s,c),t.stroke();let f=d===0?2:d===1?3:1+(l()<.5?1:2);for(let e=0;e<f;e++){let t=(e-(f-1)/2)*_,n=(l()-.5)*g*_;x(s,c,r*h,i+t+n,a+1,o)}}x(n/2,r*.92,m,-Math.PI/2,0,f)}function R(t,n,r,i,a,o={}){let s=o,c=t.createImageData(n,r),l=c.data,d=e(a),f=s.waves||6,p=s.frequency||4,m=s.contrast||1,h=s.asymmetry||.5,g=u(i),_=g.size,v=Math.max(2,Math.round(f*.6)),y=[],b=[],x=[];for(let e=0;e<v;e++){let e=d()*Math.PI*2;y.push([Math.cos(e),Math.sin(e)]),b.push(d()*Math.PI*2),x.push(1+d()*2.5)}let S=[];for(let e=0;e<v;e++)S.push(.6+d()*.8);let C=Math.max(1,f-v),w=[];for(let e=0;e<C;e++)w.push(d()*Math.PI*2);let T=n/2,E=r/2,D=h,O=Math.PI*(v+C*.7);for(let e=0;e<r;e++)for(let t=0;t<n;t++){let r=t-T,i=e-E,a=0;for(let e=0;e<v;e++){let t=y[e][0]*r+y[e][1]*i;a+=Math.sin(t*p*.003*x[e]+b[e])*S[e]}let o=1+D*1.2;for(let e=0;e<C;e++){let t=Math.sqrt(r*r+i*i);a+=Math.sin(t*p*.004*o+w[e])*.8}let s=a/O;s=Math.tanh(s*(1.5+m))*.5+.5,s=(s%1+1)%1,s>.999&&(s=.999);let c=s*_|0;c>=_&&(c=_-1);let u=(e*n+t)*4;l[u]=g.r[c],l[u+1]=g.g[c],l[u+2]=g.b[c],l[u+3]=255}t.putImageData(c,0,0)}function z(t,n,r,i,a,o={}){let s=o;o.isDark;let c=i.bg;t.fillStyle=`rgb(${c[0]},${c[1]},${c[2]})`,t.fillRect(0,0,n,r);let l=s.points||400,d=s.divergence||137.5,f=s.dotSize||8,p=s.colorShift||0,m=s.scale||.5,h=u(i),g=h.size,_=n/2,v=r/2,y=d*Math.PI/180,b=Math.min(n,r)*.48*m,x=e(a)(),S=l;for(let e=0;e<S;e++){let i=e*y,a=b*Math.sqrt(e/S),o=_+Math.cos(i)*a,s=v+Math.sin(i)*a,c=(e/S*.7+x+p)%1*g|0;c>=g&&(c=g-1),t.fillStyle=`rgb(${h.r[c]},${h.g[c]},${h.b[c]})`;let l=f/1200*Math.min(n,r)*(1-e/S*.6);t.beginPath(),t.arc(o,s,l,0,Math.PI*2),t.fill()}}function B(t,n,r,i,a,o={}){let s=o,c=t.createImageData(n,r),l=c.data;o.isDark;let d=i.bg,f=e(a),p=o.rule===void 0?30:Math.max(0,Math.min(255,s.rule|0)),m=s.cellsStart||1;o.colorMode===void 0||s.colorMode;let h=u(i),g=h.size,_=new Uint8Array(n);if(m===1)_[n/2|0]=1;else{let e=m*n*.1|0;for(let t=0;t<e;t++)_[f()*n|0]=1}function v(e,t,n){let r=e<<2|t<<1|n;return p>>r&1}for(let e=0;e<r;e++){for(let t=0;t<n;t++){let i=(e*n+t)*4;if(_[t]===1){let o=(e/r*.6+t/n*.2+a*.001)%1;o>.999&&(o=.999);let s=o*g|0;s>=g&&(s=g-1),l[i]=h.r[s],l[i+1]=h.g[s],l[i+2]=h.b[s]}else l[i]=d[0],l[i+1]=d[1],l[i+2]=d[2];l[i+3]=255}let t=new Uint8Array(n);for(let e=1;e<n-1;e++)t[e]=v(_[e-1],_[e],_[e+1]);_=t}t.putImageData(c,0,0)}function V(t,n,r,i,a,o={}){let s=o;o.isDark;let c=i.bg;t.fillStyle=`rgb(${c[0]},${c[1]},${c[2]})`,t.fillRect(0,0,n,r);let l=s.m||5,d=s.n1||1,f=s.n2||1,p=s.n3||1,m=s.layers||6,h=s.rotation||0,g=s.glow||0,_=e(a)(),v=n/2,y=r/2,b=Math.min(n,r),x=b*.42,S=u(i),C=S.size;g>0&&(t.shadowColor=`rgba(255,255,255,0.5)`,t.shadowBlur=b/1080*g);for(let e=0;e<m;e++){let n=h*Math.PI/180+e*.25,r=x*(.25+e/m*.75);.25+.75*(1-e/m);let i=(e/m*.7+_+.2)%1;i>.999&&(i=.999);let a=i*C|0;a>=C&&(a=C-1),t.strokeStyle=`rgb(${S.r[a]},${S.g[a]},${S.b[a]})`,t.lineWidth=(1+e*.2)*(b/1080),t.beginPath();for(let e=0;e<=400;e++){let i=e/400*Math.PI*2+n,a=Math.abs(Math.cos(l*i/4)),o=Math.abs(Math.sin(l*i/4)),s=r*(a**+f+o**+p)**(-1/d),c=v+Math.cos(i)*s,u=y+Math.sin(i)*s;e===0?t.moveTo(c,u):t.lineTo(c,u)}t.closePath(),t.stroke()}t.shadowBlur=0}function H(t,n,r,i,a,o={}){let s=o,c=t.createImageData(n,r),l=c.data;o.isDark;let d=i.bg,f=e(a),p=s.warp||.6,m=s.zoom||1,h=s.colorShift||0,g=s.detail||1,_=u(i),v=_.size,y=n/2,b=r/2,x=Math.min(n,r)*.0028*m;d[0],d[1],d[2];let S=.9+f()*.3-.15,C=.2+f()*.6,w=.3+f()*.5*p;for(let e=0;e<r;e++){let t=(e-b)*x;for(let r=0;r<n;r++){let i=(r-y)*x,a=t,o=w*i+1,s=w*a,c=o*o+s*s+1e-6,u=((S*i+C)*o+S*a*s)/c,d=(S*a*o-(S*i+C)*s)/c,f=Math.atan2(d,u)+h*Math.PI*2,p=Math.sqrt(u*u+d*d),m=Math.sin(f*4)*.5+.5,b=Math.sin(p*40)*.5+.5,T=m*.55+b*.45*g;T=(T%1+1)%1,T>.999&&(T=.999);let E=T*v|0;E>=v&&(E=v-1);let D=(e*n+r)*4;l[D]=_.r[E],l[D+1]=_.g[E],l[D+2]=_.b[E],l[D+3]=255}}t.putImageData(c,0,0)}function U(e){return e<0?0:e>1?1:e}function W(e,t,n,r,i,a={}){let o=a,s=e.createImageData(t,n),c=s.data,l=o.scale??2,d=o.zoom??1,f=Math.round(o.maxIter??10),p=o.color??.5,m=U(o.glow??.4),h=r.bg,g=u(r),_=g.size,v=i*.61803398875,y=(v-Math.floor(v))*Math.PI*2,b=i*.38196601125,x=(b-Math.floor(b))*1.4-.7,S=[Math.cos(y)*Math.cos(x),Math.sin(x),Math.sin(y)*Math.cos(x)],C=[-S[0],-S[1],-S[2]],w=Math.hypot(C[0],C[1],C[2]),T=C[0]/w,E=C[1]/w,D=C[2]/w,O=[0,1,0],k=[E*O[2]-D*O[1],D*O[0]-T*O[2],T*O[1]-E*O[0]],A=Math.hypot(k[0],k[1],k[2]||1e-6),j=k[0]/A,M=k[1]/A,N=k[2]/A,P=M*D-N*E,F=N*T-j*D,I=j*E-M*T,L=l*d;function R(e,t,n){let r=e*L,i=t*L,a=n*L,o=r,s=i,c=a,u=r,d=i,p=a,m=1,h=1e9;for(let e=0;e<Math.min(f,16);e++){u<-1&&-u,u>1?u=2-u:u<-1&&(u=-2-u),d>1?d=2-d:d<-1&&(d=-2-d),p>1?p=2-p:p<-1&&(p=-2-p);let e=u*u+d*d+p*p;if(e<.25)u*=4,d*=4,p*=4,m*=4;else if(e<1){let t=1/e;u*=t,d*=t,p*=t,m*=t}u=u*l+o,d=d*l+s,p=p*l+c,m*=l;let t=.6*Math.hypot(u,d,p);t<h&&(h=t)}return{dist:Math.hypot(u,d,p)/(m*L),trap:h}}let z=Math.min(t,n),B=t/n;for(let e=0;e<n;e++){let i=(e-.5*n)/z;for(let n=0;n<t;n++){let a=(n-.5*t)/z,o=T+j*a*B*1.3+P*i*1.3,s=E+M*a*B*1.3+F*i*1.3,l=D+N*a*B*1.3+I*i*1.3,u=Math.hypot(o,s,l);o/=u,s/=u,l/=u;let d=S[0]*3,f=S[1]*3,v=S[2]*3,y=0,b=1e9,x=!1,C={x:0,y:0,z:0};for(let e=0;e<96;e++){let e=d+o*y,t=f+s*y,n=v+l*y,r=R(e,t,n),i=r.dist*.8;if(b=r.trap,i<1e-4){x=!0,C={x:e,y:t,z:n};break}if(y+=i,y>5)break}let w,O,k;if(x){let e=.001,t=R(C.x+e,C.y,C.z).dist-R(C.x-e,C.y,C.z).dist,n=R(C.x,C.y+e,C.z).dist-R(C.x,C.y-e,C.z).dist,r=R(C.x,C.y,C.z+e).dist-R(C.x,C.y,C.z-e).dist,i=Math.hypot(t,n,r)||1,a=t/i,c=n/i,u=r/i,d=[-.6,.8,.4],f=Math.hypot(.6,.8,.4),v=d[0]/f,x=d[1]/f,S=d[2]/f,T=Math.max(0,a*v+c*x+u*S),E=(1-Math.max(0,-(a*o+c*s+u*l)))**3,D=(b*.6+p)%1;D<0&&(D+=1),D>.999&&(D=.999);let A=D*_|0;A>=_&&(A=_-1),w=g.r[A]*(.35+.95*T),O=g.g[A]*(.35+.95*T),k=g.b[A]*(.35+.95*T);let j=.5+m*1.5;w+=g.r[A]*E*j,O+=g.g[A]*E*j,k+=g.b[A]*E*j;let M=U(y*.18);w=h[0]*M+w*(1-M),O=h[1]*M+O*(1-M),k=h[2]*M+k*(1-M)}else w=r.bgLight[0]*.25+h[0]*.75,O=r.bgLight[1]*.25+h[1]*.75,k=r.bgLight[2]*.25+h[2]*.75;let A=(e*t+n)*4;c[A]=w,c[A+1]=O,c[A+2]=k,c[A+3]=255}}e.putImageData(s,0,0)}function G(e,t,n,r,i,a={}){let o=a,s=e.createImageData(t,n),c=s.data,l=o.scale??.7,d=o.colorShift??.3,f=o.glow??.6,p=.7+.3*U(((o.detail??5)-2)/4),m=r.bg,h=u(r),g=h.size,_=Math.PI*2,v=23+(i*97.7%1+1)%1*60,y=.005;for(let e=0;e<n;e++){let r=(e/n*_-250)*l;for(let n=0;n<t;n++){let i=(n/t*_-250)*l,a=i,o=r,s=1;for(let e=0;e<5;e++){let t=v*(1-3.5/(e+1)),n=i+Math.cos(t-a)+Math.sin(t+o),c=r+Math.sin(t-o)+Math.cos(t+a);a=n,o=c;let l=i/(Math.sin(a+t)/y),u=r/(Math.cos(o+t)/y);s+=1/Math.hypot(l,u)}s/=5,s=1.17-s**1.4;let u=U(U(s*1.35)**4*1.25)**+p,b=s*.5+d;b-=Math.floor(b);let x=b*g|0;x>=g&&(x=g-1);let S=.5+.9*f*u,C=h.r[x]*S+255*u*.4*f,w=h.g[x]*S+242*u*.4*f,T=h.b[x]*S+230*u*.4*f,E=.55+.45*u;C=m[0]*(1-E)+C*E,w=m[1]*(1-E)+w*E,T=m[2]*(1-E)+T*E;let D=1-.25*(1-u);C*=D,w*=D,T*=D;let O=(e*t+n)*4;c[O]=C,c[O+1]=w,c[O+2]=T,c[O+3]=255}}e.putImageData(s,0,0)}const K={flowField:f,fractalNoise:p,gradientMesh:m,topography:h,particleBurst:g,curves:_,lightning:v,marble:y,galaxy:b,fractalMandala:x,neonTunnel:S,sacredGeometry:C,auroraVeil:E,inkBloom:D,truchet:O,starfield:k,isometricCubes:A,concentricPolygons:j,cardiogram:T,fluidRibbons:M,mandelbrot:N,domainWarp:P,sdfRayMarching:F,strangeAttractors:I,lsystem:L,fourierWaves:R,phyllotaxis:z,cellularAutomata:B,superformula:V,mobius:H,mandelbox:W,caustics:G},q=[{id:`flowField`,name:`Flow Field`,description:`Noise-based vector field with flowing particle trails`,category:`organic`,defaultParams:{scale:.003,speed:2,detail:8e4,lineWidth:1.5,steps:25,alpha:.3,warp:1},params:[{key:`scale`,label:`Noise Scale`,min:.001,max:.01,step:5e-4,default:.003},{key:`speed`,label:`Flow Speed`,min:.5,max:4,step:.1,default:2},{key:`detail`,label:`Density`,min:1e4,max:3e5,step:1e4,default:8e4},{key:`lineWidth`,label:`Line Width`,min:.3,max:3,step:.1,default:1.5},{key:`steps`,label:`Trail Length`,min:5,max:60,step:5,default:25},{key:`alpha`,label:`Opacity`,min:.05,max:.8,step:.05,default:.3},{key:`warp`,label:`Warp`,min:0,max:3,step:.1,default:1}],fast:!1,pixelRender:!0},{id:`fractalNoise`,name:`Fractal Warp`,description:`Organic patterns from layered noise with domain warping`,category:`organic`,defaultParams:{scale:.004,warpAmount:2,octaves:4,contrast:1,lacunarity:2},params:[{key:`scale`,label:`Scale`,min:.001,max:.015,step:.001,default:.004},{key:`warpAmount`,label:`Warp Amount`,min:.5,max:5,step:.1,default:2},{key:`octaves`,label:`Octaves`,min:1,max:8,step:1,default:4},{key:`contrast`,label:`Contrast`,min:.3,max:3,step:.1,default:1},{key:`lacunarity`,label:`Lacunarity`,min:1,max:4,step:.1,default:2}],fast:!0,pixelRender:!0},{id:`gradientMesh`,name:`Gradient Mesh`,description:`Smooth gaussian-blended multi-point color gradients`,category:`abstract`,defaultParams:{points:8,spread:.4,opacity:.8,blendSoftness:.5,vignette:.25},params:[{key:`points`,label:`Control Points`,min:3,max:20,step:1,default:8},{key:`spread`,label:`Spread`,min:.1,max:1,step:.05,default:.4},{key:`opacity`,label:`Opacity`,min:.2,max:1,step:.05,default:.8},{key:`blendSoftness`,label:`Blend Softness`,min:.1,max:1,step:.05,default:.5},{key:`vignette`,label:`Vignette`,min:0,max:.6,step:.05,default:.25}],fast:!0,pixelRender:!0},{id:`cardiogram`,name:`Cardiogram`,description:`EKG heartbeat on convex CRT with phosphor glow and pixel grain`,category:`abstract`,defaultParams:{beats:4,amplitude:.5,glow:.5,grain:.15,convexity:.08,scanline:.15,lineWidth:2,hrv:.15,trail:.25,sweep:.3},params:[{key:`beats`,label:`Beats`,min:2,max:8,step:1,default:4},{key:`amplitude`,label:`Amplitude`,min:.3,max:1,step:.05,default:.5},{key:`glow`,label:`Glow`,min:0,max:1,step:.05,default:.5},{key:`grain`,label:`Grain`,min:0,max:1,step:.05,default:.15},{key:`convexity`,label:`Convexity`,min:0,max:.4,step:.02,default:.08},{key:`scanline`,label:`Scanlines`,min:0,max:1,step:.05,default:.15},{key:`lineWidth`,label:`Line Width`,min:1,max:5,step:.5,default:2},{key:`hrv`,label:`HR Variability`,min:0,max:1,step:.05,default:.15},{key:`trail`,label:`Phosphor Trail`,min:0,max:1,step:.05,default:.25},{key:`sweep`,label:`Sweep Line`,min:0,max:1,step:.05,default:.3}],fast:!0,pixelRender:!0},{id:`topography`,name:`Topography`,description:`Elevation contour lines from layered noise`,category:`organic`,defaultParams:{scale:.005,contours:15,lineWidth:1,fillOpacity:.12},params:[{key:`scale`,label:`Scale`,min:.001,max:.015,step:.001,default:.005},{key:`contours`,label:`Contour Lines`,min:3,max:30,step:1,default:15},{key:`lineWidth`,label:`Line Width`,min:.3,max:3,step:.1,default:1},{key:`fillOpacity`,label:`Fill Opacity`,min:0,max:.5,step:.02,default:.12}],fast:!0,pixelRender:!0},{id:`particleBurst`,name:`Particle Burst`,description:`Radial particle explosion with motion trails`,category:`abstract`,defaultParams:{particles:2500,speed:1.5,spread:.8,trailLength:20},params:[{key:`particles`,label:`Particles`,min:500,max:15e3,step:500,default:2500},{key:`speed`,label:`Speed`,min:.5,max:4,step:.1,default:1.5},{key:`spread`,label:`Spread`,min:.2,max:1,step:.05,default:.8},{key:`trailLength`,label:`Trail Length`,min:5,max:60,step:5,default:20}],fast:!1},{id:`curves`,name:`Curves`,description:`Flowing bezier curves guided by a noise flow field`,category:`organic`,defaultParams:{curves:120,turbulence:3,lineWidth:1.2,segments:30,amplitude:40,noiseScale:.005,colorIntensity:.7},params:[{key:`curves`,label:`Curve Count`,min:20,max:400,step:10,default:120},{key:`turbulence`,label:`Turbulence`,min:.5,max:8,step:.5,default:3},{key:`lineWidth`,label:`Line Width`,min:.3,max:4,step:.1,default:1.2},{key:`segments`,label:`Segments`,min:5,max:80,step:5,default:30},{key:`amplitude`,label:`Drift`,min:5,max:100,step:5,default:40},{key:`noiseScale`,label:`Noise Scale`,min:.001,max:.02,step:.001,default:.005},{key:`colorIntensity`,label:`Color Intensity`,min:.2,max:1,step:.05,default:.7}],fast:!1},{id:`lightning`,name:`Lightning`,description:`Recursive branching electric arcs with glow`,category:`abstract`,defaultParams:{bolts:5,branches:4,jitter:.3,glow:8,decay:.65,branchAngle:.5},params:[{key:`bolts`,label:`Bolt Count`,min:1,max:15,step:1,default:5},{key:`branches`,label:`Max Branches`,min:1,max:8,step:1,default:4},{key:`jitter`,label:`Jitter`,min:.05,max:1,step:.05,default:.3},{key:`glow`,label:`Glow Radius`,min:0,max:20,step:1,default:8},{key:`decay`,label:`Branch Decay`,min:.2,max:.9,step:.05,default:.65},{key:`branchAngle`,label:`Branch Angle`,min:.1,max:1.5,step:.05,default:.5}],fast:!1},{id:`marble`,name:`Marble`,description:`Noise-warped sinusoidal veining like natural stone`,category:`organic`,defaultParams:{scale:.003,veins:20,turbulence:5,contrast:1.5,veinWidth:.8,colorShift:0},params:[{key:`scale`,label:`Scale`,min:.001,max:.01,step:.001,default:.003},{key:`veins`,label:`Vein Density`,min:5,max:50,step:1,default:20},{key:`turbulence`,label:`Turbulence`,min:1,max:15,step:.5,default:5},{key:`contrast`,label:`Contrast`,min:.5,max:4,step:.1,default:1.5},{key:`veinWidth`,label:`Vein Width`,min:.2,max:3,step:.1,default:.8},{key:`colorShift`,label:`Color Shift`,min:0,max:1,step:.05,default:0}],fast:!0,pixelRender:!0},{id:`galaxy`,name:`Spiral Galaxy`,description:`Logarithmic spiral arms with particle scatter and core glow`,category:`abstract`,defaultParams:{arms:3,tightness:.5,spread:.3,stars:8e3,rotation:0,coreSize:.08,coreGlow:.6},params:[{key:`arms`,label:`Arm Count`,min:1,max:8,step:1,default:3},{key:`tightness`,label:`Tightness`,min:.1,max:2,step:.1,default:.5},{key:`spread`,label:`Arm Spread`,min:.05,max:1,step:.05,default:.3},{key:`stars`,label:`Star Count`,min:1e3,max:3e4,step:1e3,default:8e3},{key:`rotation`,label:`Rotation`,min:0,max:360,step:15,default:0},{key:`coreSize`,label:`Core Size`,min:.02,max:.3,step:.02,default:.08},{key:`coreGlow`,label:`Core Glow`,min:0,max:1,step:.05,default:.6}],fast:!1},{id:`fractalMandala`,name:`Fractal Mandala`,description:`Recursive mandala with rotation symmetry and spiral arms`,category:`psychedelic`,defaultParams:{symmetry:6,depth:3,rotation:0,spiralTightness:1,colorSpread:1,glowIntensity:.5,petalCount:8},params:[{key:`symmetry`,label:`Symmetry`,min:3,max:16,step:1,default:6},{key:`depth`,label:`Recursion Depth`,min:1,max:6,step:1,default:3},{key:`rotation`,label:`Rotation`,min:0,max:360,step:5,default:0},{key:`spiralTightness`,label:`Spiral Tightness`,min:.1,max:3,step:.1,default:1},{key:`colorSpread`,label:`Color Spread`,min:.1,max:2,step:.1,default:1},{key:`glowIntensity`,label:`Glow`,min:0,max:1,step:.05,default:.5},{key:`petalCount`,label:`Petals`,min:3,max:24,step:1,default:8}],fast:!1},{id:`neonTunnel`,name:`Neon Tunnel`,description:`Perspective tunnel with neon glow rings`,category:`psychedelic`,defaultParams:{rings:15,depth:10,twist:1.5,speed:1,glowRadius:8,chromaShift:5,perspective:.6},params:[{key:`rings`,label:`Ring Count`,min:5,max:30,step:1,default:15},{key:`depth`,label:`Depth`,min:3,max:20,step:1,default:10},{key:`twist`,label:`Twist`,min:0,max:5,step:.1,default:1.5},{key:`speed`,label:`Speed`,min:.5,max:3,step:.1,default:1},{key:`glowRadius`,label:`Glow Radius`,min:2,max:20,step:1,default:8},{key:`chromaShift`,label:`Chroma Shift`,min:0,max:15,step:1,default:5},{key:`perspective`,label:`Perspective`,min:.3,max:.9,step:.05,default:.6}],fast:!1},{id:`sacredGeometry`,name:`Sacred Geometry`,description:`Flower of life and metatron patterns with golden ratio`,category:`psychedelic`,defaultParams:{layers:4,ratio:1.618,rotationSpeed:30,petalCount:6,innerRadius:.15,opacity:.7,glow:5},params:[{key:`layers`,label:`Layers`,min:1,max:8,step:1,default:4},{key:`ratio`,label:`Golden Ratio`,min:1,max:3,step:.05,default:1.618},{key:`rotationSpeed`,label:`Rotation`,min:0,max:360,step:5,default:30},{key:`petalCount`,label:`Petals`,min:3,max:24,step:1,default:6},{key:`innerRadius`,label:`Inner Radius`,min:.05,max:.4,step:.01,default:.15},{key:`opacity`,label:`Opacity`,min:.2,max:1,step:.05,default:.7},{key:`glow`,label:`Glow`,min:0,max:15,step:1,default:5}],fast:!1},{id:`auroraVeil`,name:`Aurora Veil`,description:`Polar aurora light curtains with organic drift`,category:`organic`,defaultParams:{drift:1,height:.7,intensity:.8,softness:.5,shimmer:3},params:[{key:`drift`,label:`Drift`,min:0,max:3,step:.1,default:1},{key:`height`,label:`Veil Height`,min:.2,max:1.2,step:.05,default:.7},{key:`intensity`,label:`Intensity`,min:.2,max:1.5,step:.05,default:.8},{key:`softness`,label:`Softness`,min:.05,max:1,step:.05,default:.5},{key:`shimmer`,label:`Shimmer`,min:1,max:6,step:1,default:3}],fast:!0,pixelRender:!0},{id:`inkBloom`,name:`Ink Bloom`,description:`Fluid ink diffusing into paper with pigment rims`,category:`organic`,defaultParams:{blooms:5,spread:.5,sharpness:2,octaves:4,swirl:1.5},params:[{key:`blooms`,label:`Blooms`,min:1,max:12,step:1,default:5},{key:`spread`,label:`Spread`,min:.2,max:1,step:.05,default:.5},{key:`sharpness`,label:`Edge Sharpness`,min:.8,max:5,step:.1,default:2},{key:`octaves`,label:`Octaves`,min:2,max:6,step:1,default:4},{key:`swirl`,label:`Swirl`,min:0,max:4,step:.1,default:1.5}],fast:!0,pixelRender:!0},{id:`truchet`,name:`Truchet Tiles`,description:`Classic Truchet maze - unbroken single-color paths weaving across random tiles`,category:`geometric`,defaultParams:{tileSize:120,lineWidth:10,curvature:1,colorMode:0,density:.92,glow:0},params:[{key:`tileSize`,label:`Tile Size`,min:40,max:260,step:10,default:120},{key:`lineWidth`,label:`Line Width`,min:2,max:40,step:1,default:10},{key:`curvature`,label:`Arcs / Diagonals`,min:0,max:1,step:1,default:1},{key:`colorMode`,label:`Color Mode`,min:0,max:2,step:1,default:0},{key:`density`,label:`Density`,min:.3,max:1,step:.02,default:.92},{key:`glow`,label:`Glow`,min:0,max:20,step:1,default:0}],fast:!1},{id:`starfield`,name:`Starfield`,description:`Warp-speed star streaks over a nebula wash`,category:`abstract`,defaultParams:{stars:900,streak:1,warpRatio:.5,nebula:.5,coreGlow:.35},params:[{key:`stars`,label:`Star Count`,min:200,max:3e3,step:100,default:900},{key:`streak`,label:`Streak Length`,min:0,max:3,step:.1,default:1},{key:`warpRatio`,label:`Warp Ratio`,min:0,max:1,step:.05,default:.5},{key:`nebula`,label:`Nebula`,min:0,max:1,step:.05,default:.5},{key:`coreGlow`,label:`Core Glow`,min:0,max:1,step:.05,default:.35}],fast:!0,pixelRender:!0},{id:`isometricCubes`,name:`Isometric Cubes`,description:`3D optical illusion grid of interlocking colored cubes`,category:`geometric`,defaultParams:{cubeSize:60,heightVariation:.5,scatter:0,gradient:.3,edgeGlow:0},params:[{key:`cubeSize`,label:`Cube Size`,min:25,max:150,step:5,default:60},{key:`heightVariation`,label:`Height Variation`,min:0,max:1,step:.05,default:.5},{key:`scatter`,label:`Scatter`,min:0,max:.5,step:.05,default:0},{key:`gradient`,label:`Gradient`,min:0,max:1,step:.05,default:.3},{key:`edgeGlow`,label:`Edge Glow`,min:0,max:1,step:.05,default:0}],fast:!0},{id:`concentricPolygons`,name:`Concentric Polygons`,description:`Nested rotating polygons creating hypnotic moiré interference`,category:`geometric`,defaultParams:{polygonSides:6,layers:30,rotationSpeed:15,spacing:1},params:[{key:`polygonSides`,label:`Polygon Sides`,min:3,max:12,step:1,default:6},{key:`layers`,label:`Layers`,min:10,max:80,step:5,default:30},{key:`rotationSpeed`,label:`Rotation Speed`,min:0,max:45,step:1,default:15},{key:`spacing`,label:`Spacing`,min:.5,max:2,step:.1,default:1}],fast:!0},{id:`fluidRibbons`,name:`Fluid Ribbons`,description:`Additive silk strands following a Perlin flow field with palette ramps`,category:`organic`,defaultParams:{ribbons:9,flowSpeed:1.6,lineWidth:30,opacity:.5},params:[{key:`ribbons`,label:`Ribbons`,min:3,max:24,step:1,default:9},{key:`flowSpeed`,label:`Flow Speed`,min:.5,max:4,step:.1,default:1.6},{key:`lineWidth`,label:`Line Width`,min:6,max:80,step:2,default:30},{key:`opacity`,label:`Opacity`,min:.1,max:1,step:.05,default:.5}],fast:!1},{id:`mandelbrot`,name:`Mandelbrot / Julia`,description:`Escape-time fractal with smooth iteration coloring`,category:`psychedelic`,defaultParams:{mode:0,power:2,maxIter:100,zoom:1,cxOffset:0,cyOffset:0,cReal:0,cImag:0},params:[{key:`mode`,label:`Fractal Type`,min:0,max:1,step:1,default:0},{key:`power`,label:`Power`,min:2,max:8,step:1,default:2},{key:`maxIter`,label:`Iterations`,min:30,max:300,step:10,default:100},{key:`zoom`,label:`Zoom`,min:.5,max:10,step:.5,default:1},{key:`cxOffset`,label:`Pan X`,min:-1,max:1,step:.05,default:0},{key:`cyOffset`,label:`Pan Y`,min:-1,max:1,step:.05,default:0},{key:`cReal`,label:`Julia C (real)`,min:-1,max:1,step:.02,default:0},{key:`cImag`,label:`Julia C (imag)`,min:-1,max:1,step:.02,default:0}],fast:!0,pixelRender:!0},{id:`domainWarp`,name:`Domain Warp`,description:`Thick layered noise distorted by domain warping`,category:`organic`,defaultParams:{scale:.004,warpAmount:2,octaves:6,contrast:1.2,colorSpan:.7},params:[{key:`scale`,label:`Scale`,min:.001,max:.015,step:.001,default:.004},{key:`warpAmount`,label:`Warp Amount`,min:.5,max:5,step:.1,default:2},{key:`octaves`,label:`Octaves`,min:1,max:8,step:1,default:6},{key:`contrast`,label:`Contrast`,min:.5,max:3,step:.1,default:1.2},{key:`colorSpan`,label:`Color Span`,min:.2,max:1,step:.05,default:.7}],fast:!0,pixelRender:!0},{id:`sdfRayMarching`,name:`SDF Ray March`,description:`Signed distance field rendered by marching rays`,category:`psychedelic`,defaultParams:{maxSteps:40,scale:.5,mode:0,zoom:1,glow:.5},params:[{key:`maxSteps`,label:`Detail`,min:10,max:120,step:5,default:40},{key:`scale`,label:`Scale`,min:.2,max:1.5,step:.05,default:.5},{key:`mode`,label:`Mode`,min:0,max:1,step:1,default:0},{key:`zoom`,label:`Zoom`,min:.5,max:4,step:.1,default:1},{key:`glow`,label:`Glow`,min:0,max:1,step:.05,default:.5}],fast:!0,pixelRender:!0},{id:`strangeAttractors`,name:`Strange Attractors`,description:`Chaotic attractor points plotted as additive particles`,category:`abstract`,defaultParams:{attType:0,aParam:1.4,bParam:.3,cParam:2.5,dParam:.5,iterations:4e4,pointSize:1,colorSpread:1},params:[{key:`attType`,label:`Attractor`,min:0,max:2,step:1,default:0},{key:`aParam`,label:`Param A`,min:.1,max:3,step:.05,default:1.4},{key:`bParam`,label:`Param B`,min:.1,max:3,step:.05,default:.3},{key:`cParam`,label:`Param C`,min:.1,max:3,step:.05,default:2.5},{key:`dParam`,label:`Param D`,min:.1,max:3,step:.05,default:.5},{key:`iterations`,label:`Iterations`,min:5e3,max:2e5,step:5e3,default:4e4},{key:`pointSize`,label:`Point Size`,min:.5,max:3,step:.1,default:1},{key:`colorSpread`,label:`Color Spread`,min:.2,max:2,step:.1,default:1}],fast:!1},{id:`lsystem`,name:`L-System`,description:`Recursive branching fractal tree from grammar rules`,category:`geometric`,defaultParams:{treeType:0,depth:6,angle:22,trunkLen:90,ratio:.7,spreadFactor:.6},params:[{key:`treeType`,label:`Pattern`,min:0,max:2,step:1,default:0},{key:`depth`,label:`Depth`,min:2,max:8,step:1,default:6},{key:`angle`,label:`Angle`,min:5,max:60,step:1,default:22},{key:`trunkLen`,label:`Trunk Length`,min:20,max:200,step:5,default:90},{key:`ratio`,label:`Branch Ratio`,min:.5,max:.9,step:.05,default:.7},{key:`spreadFactor`,label:`Spread`,min:0,max:2,step:.1,default:.6}],fast:!1},{id:`fourierWaves`,name:`Fourier Waves`,description:`Interference of superimposed plane waves`,category:`abstract`,defaultParams:{waves:6,frequency:4,contrast:1,asymmetry:.5},params:[{key:`waves`,label:`Wave Sources`,min:2,max:16,step:1,default:6},{key:`frequency`,label:`Frequency`,min:1,max:12,step:.5,default:4},{key:`contrast`,label:`Contrast`,min:.3,max:3,step:.1,default:1},{key:`asymmetry`,label:`Asymmetry`,min:0,max:1,step:.05,default:.5}],fast:!0,pixelRender:!0},{id:`phyllotaxis`,name:`Phyllotaxis`,description:`Golden-angle spiral of dots (sunflower pattern)`,category:`abstract`,defaultParams:{points:400,divergence:137.5,dotSize:8,colorShift:0,scale:.5},params:[{key:`points`,label:`Dots`,min:100,max:2e3,step:50,default:400},{key:`divergence`,label:`Divergence`,min:130,max:145,step:.5,default:137.5},{key:`dotSize`,label:`Dot Size`,min:2,max:30,step:1,default:8},{key:`colorShift`,label:`Color Shift`,min:0,max:1,step:.05,default:0},{key:`scale`,label:`Scale`,min:.3,max:1,step:.05,default:.5}],fast:!0},{id:`cellularAutomata`,name:`Cellular Automata`,description:`Elementary 1D automaton rules grown row by row`,category:`geometric`,defaultParams:{rule:30,cellsStart:1,colorMode:0},params:[{key:`rule`,label:`Rule`,min:0,max:255,step:1,default:30},{key:`cellsStart`,label:`Seed Cells`,min:1,max:10,step:1,default:1},{key:`colorMode`,label:`Color Mode`,min:0,max:1,step:1,default:0}],fast:!0,pixelRender:!0},{id:`superformula`,name:`Superformula`,description:`Supershape contour rings with rotational symmetry`,category:`geometric`,defaultParams:{m:5,n1:1,n2:1,n3:1,layers:6,rotation:0,glow:0},params:[{key:`m`,label:`Symmetry M`,min:1,max:12,step:1,default:5},{key:`n1`,label:`N1`,min:.1,max:3,step:.1,default:1},{key:`n2`,label:`N2`,min:.1,max:3,step:.1,default:1},{key:`n3`,label:`N3`,min:.1,max:3,step:.1,default:1},{key:`layers`,label:`Layers`,min:1,max:12,step:1,default:6},{key:`rotation`,label:`Rotation`,min:0,max:360,step:5,default:0},{key:`glow`,label:`Glow`,min:0,max:20,step:1,default:0}],fast:!0},{id:`mobius`,name:`Möbius Map`,description:`Conformal complex map with banded interference`,category:`psychedelic`,defaultParams:{warp:.6,zoom:1,colorShift:0,detail:1},params:[{key:`warp`,label:`Warp`,min:0,max:2,step:.05,default:.6},{key:`zoom`,label:`Zoom`,min:.5,max:4,step:.1,default:1},{key:`colorShift`,label:`Color Shift`,min:0,max:1,step:.05,default:0},{key:`detail`,label:`Detail`,min:.2,max:2,step:.1,default:1}],fast:!0,pixelRender:!0},{id:`mandelbox`,name:`Mandelbox`,description:`Sphere-traced 3D fractal with orbit-trap color`,category:`abstract`,defaultParams:{scale:2,zoom:1,maxIter:10,color:.5,glow:.4},params:[{key:`scale`,label:`Fractal Scale`,min:1.3,max:2.5,step:.05,default:2},{key:`zoom`,label:`Zoom`,min:.5,max:3,step:.1,default:1},{key:`maxIter`,label:`Iterations`,min:8,max:16,step:1,default:10},{key:`color`,label:`Orbit Color`,min:0,max:1,step:.05,default:.5},{key:`glow`,label:`Glow`,min:0,max:1,step:.05,default:.4}],fast:!0,pixelRender:!0},{id:`caustics`,name:`Caustics`,description:`Underwater light-interference webs, closed form`,category:`abstract`,defaultParams:{scale:.7,detail:5,colorShift:.3,glow:.6},params:[{key:`scale`,label:`Scale`,min:.6,max:.8,step:.05,default:.7},{key:`detail`,label:`Layers`,min:3,max:6,step:1,default:5},{key:`colorShift`,label:`Color Shift`,min:0,max:1,step:.05,default:.3},{key:`glow`,label:`Glow`,min:0,max:1.5,step:.05,default:.6}],fast:!0,pixelRender:!0}],J=new Set([`mandelbrot`,`fractalNoise`,`topography`,`marble`,`domainWarp`,`mobius`,`fourierWaves`,`sdfRayMarching`,`mandelbox`,`caustics`]);function Y(e){switch(e){case`mandelbrot`:return`
uniform int uMode;
uniform int uPower;
uniform int uMaxIter;
uniform float uZoom;
uniform float uCxOffset;
uniform float uCyOffset;
uniform float uCReal;
uniform float uCImag;

void main() {
  vec2 px = fragCoord();
  float w = uResolution.x;
  float h = uResolution.y;
  float mn = min(w, h);

  float scale = 3.4 / (uZoom * mn);
  float centerX = w * 0.5 + uCxOffset * w * scale;
  float centerY = h * 0.5 + uCyOffset * h * scale;

  float focusX = uZoom > 1.0 ? -0.75 * min(1.0, (uZoom - 1.0) / 2.5) : 0.0;

  // Focus drift is Mandelbrot-only; Julia keeps its natural centre so deep
  // zoom doesn't dive into a filled region and show a blank background.
  float fx = uMode == 0 ? focusX : 0.0;
  float x0 = (px.x - centerX) * scale + fx;
  float y0 = (px.y - centerY) * scale;

  float zr, zi, cr, ci;
  if (uMode == 0) {
    zr = 0.0; zi = 0.0; cr = x0; ci = y0;
  } else {
    zr = x0; zi = y0; cr = uCReal * -1.5; ci = uCImag * 1.5;
  }

  int i = 0;
  float zr2 = zr * zr;
  float zi2 = zi * zi;
  float iter = 0.0;
  for (int k = 0; k < 512; k++) {
    if (k >= uMaxIter) break;
    if (zr2 + zi2 >= 16.0) break;
    if (uPower == 2) {
      zi = 2.0 * zr * zi + ci;
      zr = zr2 - zi2 + cr;
    } else {
      float mod_ = pow(zr2 + zi2, float(uPower) * 0.5);
      float arg = atan(zi, zr) * float(uPower);
      zr = mod_ * cos(arg) + cr;
      zi = mod_ * sin(arg) + ci;
    }
    zr2 = zr * zr;
    zi2 = zi * zi;
    i++;
    iter += 1.0;
  }

  if (i >= uMaxIter) {
    fragColor = vec4(uBg, 1.0);
    return;
  }
  float logZn = log(zr2 + zi2) * 0.5;
  float nu = log(logZn / log(float(uPower))) / log(float(uPower));
  float t = (iter + 1.0 - nu) / float(uMaxIter);
  t = clamp(t, 0.0, 0.999);
  fragColor = vec4(sampleColor(t), 1.0);
}
`;case`fractalNoise`:return`
uniform float uScale;
uniform float uOctaves;
uniform float uContrast;
uniform float uWarpAmount;
uniform float uLacunarity;

// Layered value noise with configurable octaves/lacunarity, mirroring the CPU
// generator so GPU output matches the CPU domain-warped look.
float fbmN(vec2 p, int oct) {
  float lac = max(1.0, uLacunarity);
  float v = 0.0;
  float a = 0.5;
  for (int k = 0; k < 8; k++) {
    if (k >= oct) break;
    v += a * valueNoise(p);
    p = p * lac + 11.7;
    a *= 0.5;
  }
  return v;
}

void main() {
  // Match the CPU generator's noise scale. CPU uses pixel-space p = px * scale
  // with the scale normalised to 1080: p = px * (scale * 1080 / min(w,h)).
  // Normalised uv (px/min * scale * 6) collapsed the whole frame into a single
  // noise cell, producing a flat/blank image.
  vec2 px = fragCoord();
  float mn = min(uResolution.x, uResolution.y);
  vec2 p0 = px * (uScale * 1080.0 / mn);
  int oct = int(round(uOctaves));

  // Domain warp, mirroring the CPU generator.
  float qx = fbmN(p0, oct);
  float qy = fbmN(p0 + vec2(5.2, 1.3), oct);
  float rx = fbmN(p0 + uWarpAmount * qx + 1.7, oct);
  float ry = fbmN(p0 + uWarpAmount * qx + 8.3, oct);
  float val = fbmN(p0 + uWarpAmount * rx, oct);

  float t = val * 0.5 + 0.5;
  t = 0.5 + (t - 0.5) * uContrast * 1.2;
  t = clamp(t, 0.0, 0.999);
  fragColor = vec4(sampleColor(t), 1.0);
}
`;case`topography`:return`
uniform float uScale;
uniform float uOctaves;

void main() {
  // Pixel-space scale matching the CPU generator: p = px * (scale * 1080 / min).
  // (uv * uScale * 6 collapsed the frame into one noise cell → flat contours.)
  vec2 px = fragCoord();
  float mn = min(uResolution.x, uResolution.y);
  vec2 p = px * (uScale * 1080.0 / mn);
  float n = fbm(p);
  float band = fract(n * 12.0);
  float line = 1.0 - smoothstep(0.0, 0.15, band);
  float base = 0.12 + n * 0.4;
  float t = base + line * 0.35;
  t = clamp(t, 0.0, 0.999);
  fragColor = vec4(mix(uBg, sampleColor(t), 0.95), 1.0);
}
`;case`marble`:return`
uniform float uScale;
uniform float uOctaves;

void main() {
  // Pixel-space scale matching the CPU generator: p = px * (scale * 1080 / min).
  vec2 px = fragCoord();
  float mn = min(uResolution.x, uResolution.y);
  vec2 p = px * (uScale * 1080.0 / mn);
  float veins = 0.0;
  float a = 0.5;
  for (int k = 0; k < 6; k++) {
    veins += a * sin(valueNoise(p) * 6.2831 + p.x * 2.0 + p.y * 1.3);
    p = p * 2.0 + 3.7;
    a *= 0.55;
  }
  float t = 0.5 + 0.5 * tanh(veins * 1.6);
  t = clamp(t, 0.0, 0.999);
  fragColor = vec4(sampleColor(t * 0.85), 1.0);
}
`;case`domainWarp`:return`
uniform float uScale;
uniform float uWarpAmount;
uniform float uOctaves;
uniform float uContrast;
uniform float uColorSpan;

void main() {
  vec2 uv = fragCoord() / uResolution;
  vec2 p = uv * uScale * 1800.0;
  float qx = fbm(p);
  float qy = fbm(p + vec2(5.2, 1.3));
  vec2 w = p * 1.0 + vec2(uWarpAmount * qx, uWarpAmount * qy);
  float f1 = fbm(w * 1.6);
  float f2 = fbm(w * 1.6 + vec2(7.7, 3.3));
  float ridgeline = abs(f1 * 2.0 - 1.0);
  float ridgeline2 = abs(f2 * 2.0 - 1.0);
  float t = ridgeline * 0.55 + ridgeline2 * 0.45;
  t = 0.5 + (t - 0.5) * uContrast;
  t = clamp(t, 0.0, 0.999);
  float ramp = fract(t * uColorSpan);
  fragColor = vec4(sampleColor(ramp), 1.0);
}
`;case`mobius`:return`
uniform float uWarp;
uniform float uZoom;
uniform float uColorShift;
uniform float uDetail;
uniform float uSeed;

void main() {
  vec2 px = fragCoord();
  float w = uResolution.x;
  float h = uResolution.y;
  float cx = w * 0.5, cy = h * 0.5;
  float S = min(w, h);
  float scale = S * 0.0028 * uZoom;
  float xx = (px.x - cx) * scale;
  float yy = (px.y - cy) * scale;

  // Deterministic Möbius coefficients derived from seed (visual match to CPU).
  float r1 = hash21(vec2(uSeed, 1.7));
  float r2 = hash21(vec2(uSeed, 2.3));
  float r3 = hash21(vec2(uSeed, 3.1));
  float a = 0.9 + r1 * 0.3 - 0.15;
  float bG = 0.2 + r2 * 0.6;
  float cG = 0.3 + r3 * 0.5 * uWarp;
  float dG = 1.0;

  float zr = xx, zi = yy;
  float denR = cG * zr + dG;
  float denI = cG * zi;
  float den = denR * denR + denI * denI + 1e-6;
  float wr = ((a * zr + bG) * denR + a * zi * denI) / den;
  float wi = (a * zi * denR - (a * zr + bG) * denI) / den;

  float arg = atan(wi, wr) + uColorShift * 6.28318;
  float mod = sqrt(wr * wr + wi * wi);

  float bands = sin(arg * 4.0) * 0.5 + 0.5;
  float radial = sin(mod * 40.0) * 0.5 + 0.5;
  float t = bands * 0.55 + radial * 0.45 * uDetail;
  t = fract(t);
  t = clamp(t, 0.0, 0.999);
  fragColor = vec4(sampleColor(t), 1.0);
}
`;case`fourierWaves`:return`
uniform float uWaves;
uniform float uFrequency;
uniform float uContrast;
uniform float uAsymmetry;
uniform float uSeed;

void main() {
  vec2 px = fragCoord();
  float w = uResolution.x;
  float h = uResolution.y;
  float cx = w * 0.5, cy = h * 0.5;
  float dx = px.x - cx;
  float dy = px.y - cy;

  int nPlane = int(floor(uWaves * 0.6));
  if (nPlane < 2) nPlane = 2;
  int nRad = int(uWaves) - nPlane;
  if (nRad < 1) nRad = 1;

  float sum = 0.0;
  for (int i = 0; i < 16; i++) {
    if (i >= nPlane) break;
    float fi = float(i);
    float ang = hash21(vec2(uSeed, fi * 3.1 + 1.0)) * 6.28318;
    float ph = hash21(vec2(uSeed, fi * 5.3 + 2.0)) * 3.14159;
    float f = 1.0 + hash21(vec2(uSeed, fi * 7.1 + 3.0)) * 2.5;
    float amp = 0.6 + hash21(vec2(uSeed, fi * 9.1 + 4.0)) * 0.8;
    float dotv = cos(ang) * dx + sin(ang) * dy;
    sum += sin(dotv * uFrequency * 0.003 * f + ph) * amp;
  }
  float radIn = 1.0 + uAsymmetry * 1.2;
  for (int i = 0; i < 16; i++) {
    if (i >= nRad) break;
    float fi = float(i);
    float ph = hash21(vec2(uSeed, fi * 11.1 + 5.0)) * 3.14159;
    float r = sqrt(dx * dx + dy * dy);
    sum += sin(r * uFrequency * 0.004 * radIn + ph) * 0.8;
  }
  float norm = 3.14159 * (float(nPlane) + float(nRad) * 0.7);
  float t = sum / norm;
  t = tanh(t * (1.5 + uContrast)) * 0.5 + 0.5;
  t = fract(t);
  t = clamp(t, 0.0, 0.999);
  fragColor = vec4(sampleColor(t), 1.0);
}
`;case`sdfRayMarching`:return`
uniform int uMaxSteps;
uniform float uScale;
uniform int uMode;
uniform float uZoom;
uniform float uGlow;
uniform float uSeed;

const int MAX_SHAPES = 9;

float sdCircle(vec2 p, vec2 c, float r) { return length(p - c) - r; }

float sdScene(vec2 p) {
  float d = 1e9;
  for (int i = 0; i < MAX_SHAPES; i++) {
    float fi = float(i);
    float ang = hash21(vec2(uSeed, fi * 17.3 + 1.5)) * 6.28318;
    float rad = 0.15 + hash21(vec2(uSeed, fi * 19.9 + 2.5)) * 0.32;
    vec2 c = vec2(cos(ang) * rad, sin(ang) * rad);
    float r = 0.06 + hash21(vec2(uSeed, fi * 23.7 + 3.5)) * 0.14;
    int kind = int(hash21(vec2(uSeed, fi * 29.3 + 4.5)) * 3.0);
    float rr = sdCircle(p, c, r);
    if (kind == 0) d = min(d, rr);
    else if (kind == 1) d = max(-rr, d);
    else d = min(d, abs(rr));
  }
  return d;
}

void main() {
  vec2 px = fragCoord();
  float w = uResolution.x;
  float h = uResolution.y;
  float S = min(w, h);
  float inv = 1.0 / (S * 0.5 * uScale * uZoom);
  float cxx = w * 0.5, cyy = h * 0.5;
  float sx = (px.x - cxx) * inv;
  float sy = (px.y - cyy) * inv;

  float t = 0.0;
  float d = sdScene(vec2(sx, sy));
  for (int st = 0; st < 128; st++) {
    if (st >= uMaxSteps) break;
    if (d < 1e-4) break;
    float stepSize = max(4e-3, d * 0.7);
    t += stepSize;
    d = sdScene(vec2(sx, sy + t));
  }

  float iso = abs(sin(d * 60.0 * uZoom)) * 0.5 + 0.5;
  float ep = 0.004;
  float gx = (sdScene(vec2(sx + ep, sy)) - sdScene(vec2(sx - ep, sy))) * 0.5;
  float gy = (sdScene(vec2(sx, sy + ep)) - sdScene(vec2(sx, sy - ep))) * 0.5;
  float fall = 1.0 - min(1.0, abs(gy) * 1.2 + abs(gx) * 0.6);

  float tC;
  if (uMode == 0) tC = fall * (0.35 + 0.65 * iso);
  else tC = min(1.0, t * 0.8) * (0.4 + 0.6 * iso);
  tC = clamp(tC, 0.0, 0.999);

  float shade = 0.55 + 0.45 * fall;
  vec3 col = sampleColor(tC) * shade;
  fragColor = vec4(col, 1.0);
}
`;case`mandelbox`:return`
uniform float uScale;
uniform float uZoom;
uniform int uMaxIter;
uniform float uColor;
uniform float uGlow;
uniform float uSeed;

// Standard box-fold / sphere-fold DE for the Mandelbox.
float deMandelbox(vec3 w, out float trap) {
  float s = uScale;
  float m = 1.0;
  // uZoom scales the fractal itself; the camera stays put on a fixed orbit so
  // it can never sink inside the set (which would flatten every pixel).
  vec3 p = w * (s * uZoom);
  vec3 c = p;
  trap = 1e9;
  for (int i = 0; i < 16; i++) {
    if (i >= uMaxIter) break;
    p = abs(p + 1.0) - abs(p - 1.0) - p;
    float r2 = dot(p, p);
    if (r2 < 0.25) {
      p *= 4.0; m *= 4.0;
    } else if (r2 < 1.0) {
      float k = 1.0 / r2;
      p *= k; m *= k;
    }
    p = p * s + c;
    m *= s;
    trap = min(trap, 0.6 * length(p));
  }
  return length(p) / (m * (s * uZoom));
}

void main() {
  vec2 px = fragCoord();
  float w = uResolution.x, h = uResolution.y;
  float S = min(w, h);
  float aspect = w / h;
  float z = max(uZoom, 0.25);

  // Seed-driven camera orbit so each seed frames a different region. The
  // camera radius is FIXED outside the set; uZoom only magnifies the fractal.
  float az = fract(uSeed * 0.61803398875) * 6.28318;
  float el = fract(uSeed * 0.38196601125) * 1.4 - 0.7;
  float radius = 3.0;
  vec3 dir = vec3(cos(az) * cos(el), sin(el), sin(az) * cos(el));
  vec3 ro = dir * radius;
  vec2 ndc = (px - 0.5 * vec2(w, h)) / S;

  // Pinhole camera always looking at the origin — rays converge on the box.
  vec3 fwd = -dir;
  vec3 vRight = normalize(cross(fwd, vec3(0.0, 1.0, 0.0)));
  vec3 up = cross(vRight, fwd);
  vec3 rd = normalize(fwd + vRight * ndc.x * aspect * 1.3 + up * ndc.y * 1.3);

  float t = 0.0, trap = 0.0;
  vec3 pos = vec3(0.0);
  bool hit = false;
  for (int i = 0; i < 96; i++) {
    pos = ro + rd * t;
    float d = deMandelbox(pos, trap) * 0.8;
    if (d < 1e-4) { hit = true; break; }
    t += d;
    if (t > 5.0) break;
  }

  vec3 col;
  if (hit) {
    float e = 1e-3, tt;
    vec3 n = normalize(vec3(
      deMandelbox(pos + vec3(e, 0.0, 0.0), tt) - deMandelbox(pos - vec3(e, 0.0, 0.0), tt),
      deMandelbox(pos + vec3(0.0, e, 0.0), tt) - deMandelbox(pos - vec3(0.0, e, 0.0), tt),
      deMandelbox(pos + vec3(0.0, 0.0, e), tt) - deMandelbox(pos - vec3(0.0, 0.0, e), tt)
    ));
    vec3 ld = normalize(vec3(-0.6, 0.8, 0.4));
    float diff = clamp(dot(n, ld), 0.0, 1.0);
    float fres = pow(1.0 - clamp(dot(n, -rd), 0.0, 1.0), 3.0);

    float tcol = clamp(fract(trap * 0.6 + uColor), 0.0, 0.999);
    vec3 albedo = sampleColor(tcol);
    col = albedo * (0.35 + 0.95 * diff);
    col += albedo * fres * (0.5 + uGlow * 1.5);
    col = mix(col, uBg, clamp(t * 0.18, 0.0, 0.5));
  } else {
    col = mix(uBgLight, uBg, 0.75);
  }
  fragColor = vec4(col, 1.0);
}
`;case`caustics`:return`
uniform float uScale;
uniform float uDetail;
uniform float uColorShift;
uniform float uGlow;
uniform float uSeed;

void main() {
  vec2 px = fragCoord();
  vec2 uv = px / uResolution;
  float TAU = 6.2831853;

  // Reference domain sits around -250 (Dave Hoskins) — normalizes the 1/l
  // scale so the interference web lands in a visible range.
  vec2 p = (uv * TAU - 250.0) * uScale;
  float time = 23.0 + fract(uSeed * 97.7) * 60.0;

  vec2 i = p;
  float c = 1.0;
  float inten = 0.005;
  // Fixed layer count keeps the interference sum stable; uDetail only widens
  // the line profile so contrast never collapses on any parameter value.
  int layers = 5;
  for (int n = 0; n < layers; n++) {
    float t = time * (1.0 - (3.5 / float(n + 1)));
    i = p + vec2(cos(t - i.x) + sin(t + i.y), sin(t - i.y) + cos(t + i.x));
    float l = length(vec2(p.x / (sin(i.x + t) / inten), p.y / (cos(i.y + t) / inten)));
    c += 1.0 / l;
  }
  c /= float(layers);
  c = 1.17 - pow(c, 1.4);

  // Peak-normalised web profile: soft shoulder, hard core — independent of the
  // absolute scale of c so both sparse (small scale) and dense (large scale)
  // interference stay visible.
  float web = pow(clamp(c * 1.35, 0.0, 1.0), 4.0);
  float sharp = 0.7 + 0.3 * clamp((uDetail - 2.0) / 4.0, 0.0, 1.0); // 0.7..1.0
  float webS = pow(clamp(web * 1.25, 0.0, 1.0), sharp);
  float tcol = fract(c * 0.5 + uColorShift);
  vec3 col = sampleColor(tcol) * (0.5 + 0.9 * uGlow * webS);
  col += vec3(1.0, 0.95, 0.9) * webS * 0.4 * uGlow;
  col = mix(uBg, col, 0.55 + 0.45 * webS);
  col *= 1.0 - 0.25 * (1.0 - webS);
  fragColor = vec4(col, 1.0);
}
`;default:return null}}function ee(e){return J.has(e)}function X(e,t,n,r,i,a,o=1){let s=Y(e);if(!s)return null;let c=te(t,`#version 300 es
in vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`,`#version 300 es
precision highp float;

uniform vec2 uResolution;
uniform vec3 uBg;
uniform vec3 uBgLight;
uniform vec3 uColors[5];

out vec4 fragColor;

vec3 sampleColor(float t) {
  t = t - floor(t);
  float n = 5.0;
  float scaled = t * (n - 1.0);
  int i = int(floor(scaled));
  float f = scaled - float(i);
  int i0 = clamp(i, 0, 4);
  int i1 = clamp(i + 1, 0, 4);
  return mix(uColors[i0], uColors[i1], f);
}
// Fragment position in pixels (like canvas pixel centers).
vec2 fragCoord() { return gl_FragCoord.xy; }

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int k = 0; k < 6; k++) {
    v += a * valueNoise(p);
    p = p * 2.02 + 11.7;
    a *= 0.5;
  }
  return v;
}
float fbmO(vec2 p, int oct) {
  float v = 0.0;
  float a = 0.5;
  for (int k = 0; k < 8; k++) {
    if (k >= oct) break;
    v += a * valueNoise(p);
    p = p * 2.02 + 11.7;
    a *= 0.5;
  }
  return v;
}
`+s);if(!c)return null;try{return ae(t,c,n,r,i,a,o)}catch{return null}finally{t.deleteProgram(c)}}function te(e,t,n){let r=ne(e,e.VERTEX_SHADER,t),i=ne(e,e.FRAGMENT_SHADER,n);if(!r||!i)return null;let a=e.createProgram();return!a||(e.attachShader(a,r),e.attachShader(a,i),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))?null:a}function ne(e,t,n){let r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:null):null}const re=new Set([`mode`,`power`,`maxIter`,`maxSteps`,`shape`]),Z=`mode.power.maxIter.zoom.cxOffset.cyOffset.cReal.cImag.scale.octaves.contrast.colorSpan.warpAmount.lacunarity.frequency.amplitude.detail.maxSteps.shape.waves.asymmetry.warp.colorShift.cellSize.colorVar.edgeSoft.border.ridge.turbulence.sunAngle.sunHeight.haze.light.color`.split(`.`);function ie(e){return`u`+e.charAt(0).toUpperCase()+e.slice(1)}function ae(e,t,n,r,i,a,o){let s=new Float32Array([-1,-1,3,-1,-1,3]),c=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,c),e.bufferData(e.ARRAY_BUFFER,s,e.STATIC_DRAW);let l=e.getAttribLocation(t,`aPos`);if(l<0)return e.deleteBuffer(c),null;e.enableVertexAttribArray(l),e.vertexAttribPointer(l,2,e.FLOAT,!1,0,0);let u=e.createTexture();e.bindTexture(e.TEXTURE_2D,u),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,r,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let d=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,d),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,u,0),e.viewport(0,0,n,r),e.useProgram(t);let f=n=>e.getUniformLocation(t,n);e.uniform2f(f(`uResolution`),n,r),e.uniform1f(f(`uSeed`),o),e.uniform3f(f(`uBg`),i.bg[0]/255,i.bg[1]/255,i.bg[2]/255),e.uniform3f(f(`uBgLight`),i.bgLight[0]/255,i.bgLight[1]/255,i.bgLight[2]/255);for(let t=0;t<5;t++){let n=i.colors[t];e.uniform3f(f(`uColors[`+t+`]`),n[0]/255,n[1]/255,n[2]/255)}for(let t of Z){if(a[t]===void 0)continue;let n=f(ie(t));if(n!=null){if(re.has(t)){let r=Math.round(Number(a[t]));e.uniform1i(n,r)}else typeof a[t]==`number`?e.uniform1f(n,a[t]):Array.isArray(a[t])&&a[t].length===2?e.uniform2f(n,a[t][0],a[t][1]):Array.isArray(a[t])&&a[t].length===3&&e.uniform3f(n,a[t][0],a[t][1],a[t][2])}}e.drawArrays(e.TRIANGLES,0,3);let p=new Uint8ClampedArray(n*r*4);return e.readPixels(0,0,n,r,e.RGBA,e.UNSIGNED_BYTE,p),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(u),e.deleteFramebuffer(d),e.deleteBuffer(c),p}const Q=new Set(q.filter(e=>e.pixelRender).map(e=>e.id));let $=0;self.onmessage=function(e){let{type:t}=e.data;if(t!==`generate`)return;(e.data.jobId??0)>$&&($=e.data.jobId??0);let{generatorId:n,paletteId:r,width:i,height:a,seed:o,params:c,isDark:l,quality:u=`preview`,jobId:d}=e.data;if(!e.data.isExport&&d!==void 0&&d!==$){self.postMessage({type:`skipped`,jobId:d});return}let f=K[n],p=s.find(e=>e.id===r);if(!f||!p){self.postMessage({type:`error`,message:`Unknown generator or palette`,jobId:d});return}try{let e=Q.has(n),t=u===`preview`&&e?.5:1,r=Math.round(i*t),s=Math.round(a*t),m=new OffscreenCanvas(r,s),h=performance.now(),g,_=!1,v=!1;if(ee(n))try{let e=m.getContext(`webgl2`);if(e){let t=X(n,e,m.width,m.height,p,{...c,isDark:l},o);if(t){let e=new Uint8ClampedArray(m.width*m.height*4),n=m.width*4;for(let r=0;r<m.height;r++){let i=(m.height-1-r)*n,a=r*n;e.set(t.subarray(i,i+n),a)}g=new ImageData(e,m.width,m.height),v=!0}}}catch{g=void 0,v=!1}if(!g){let e=m.getContext(`2d`);if(!e){self.postMessage({type:`error`,message:`2d context unavailable`,jobId:d});return}f(e,m.width,m.height,p,o,{...c,isDark:l,quality:u}),g=e.getImageData(0,0,m.width,m.height)}if(t<1){let e=new OffscreenCanvas(g.width,g.height),t=e.getContext(`2d`);if(!t){self.postMessage({type:`error`,message:`2d context unavailable`,jobId:d});return}t.putImageData(g,0,0);let n=new OffscreenCanvas(i,a).getContext(`2d`);if(!n){self.postMessage({type:`error`,message:`2d context unavailable`,jobId:d});return}n.imageSmoothingEnabled=!0,n.imageSmoothingQuality=`high`,n.drawImage(e,0,0,i,a),g=n.getImageData(0,0,i,a),_=!0}let y=performance.now()-h;self.postMessage({type:`complete`,imageData:g,elapsed:y,width:g.width,height:g.height,upscaled:_,quality:u,gpu:v,jobId:d},[g.data.buffer])}catch(e){let t=e instanceof Error?e.message:String(e);self.postMessage({type:`error`,message:t,jobId:d})}};