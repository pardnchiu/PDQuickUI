!function(){"use strict";const e=document,t=String,n=Number,o=Array,i=Object,r=Boolean,a=JSON,s=URL,l=Date,d=Math,c=Promise,u=Node,f=parseInt,h=isNaN,p=structuredClone,g=setTimeout,m=/\{\{\s*(((CALC|LENGTH|UPPER|LOWER|DATE)\(\s*[\w\.\s\+\-\*\/\,\s\/\:]+\s*\))|[\w\.]+)\s*\}\}/i,b=/\s+([\w\.]+)\s*$/i,y=/\s*[\!\>\<\=]+\=*\s*/,k=/([\w\.]+)\s*([\+\-\*\/\%])\s*([\d\.]+)/,v=":path",C=":for",w=":if",x=":else-if",E=":elif",A=":else",D="push",P="splice",T="head",M="startsWith",O="children",N="parentElement",_="textContent",L="toLowerCase",R="dismiss",S="getElementById",I="classList",B="test",H="data",z="event",Y="trim",V="parse",$="src",U="now",j="split",F="isArray",X="indexOf",W="type",q="props",Z="display",G="vdom",J="appendChild",K="createTextNode",Q="removeAttribute",ee="keys",te="parentNode",ne="setAttribute",oe="addEventListener",ie="TEXT_NODE",re="ELEMENT_NODE",ae="headers",se="get",le="crossOrigin",de="anonymous",ce="slice",ue="unobserve",fe="remove",he="script",pe="querySelectorAll",ge="tagName",me="tag",be="stringify",ye="id",ke="style",ve="innerHTML",Ce="forEach",we="replace",xe="value",Ee="body",Ae="length",De="match",Pe="shift",Te="index",Me={[w]:null,[x]:null,[E]:null,[A]:null},Oe={":id":"id",":src":$,":alt":"alt",":href":"href",tagHtml:"innerHTML"},Ne={":margin":"margin",":padding":"padding",":border":"border",":border-radius":"borderRadius",":borderRadius":"borderRadius",":outline":"outline",":box-sahdow":"boxShadow",":boxSahdow":"boxShadow",":bg-image":"backgroundImage",":background-image":"backgroundImage",":backgroundImage":"backgroundImage",":bg-attachment":"backgroundAttachment",":background-attachment":"backgroundAttachment",":backgroundAttachment":"backgroundAttachment",":bg-blend-mode":"backgroundBlendMode",":background-blend-mode":"backgroundBlendMode",":backgroundBlendMode":"backgroundBlendMode",":bg-clip":"backgroundClip",":background-clip":"backgroundClip",":backgroundClip":"backgroundClip",":bg-origin":"backgroundOrigin",":background-origin":"backgroundOrigin",":backgroundOrigin":"backgroundOrigin",":bg-position":"backgroundPosition",":background-position":"backgroundPosition",":backgroundPosition":"backgroundPosition",":bg-position-x":"backgroundPositionX",":background-position-x":"backgroundPositionX",":backgroundPositionX":"backgroundPositionX",":bg-position-y":"backgroundPositionY",":background-position-y":"backgroundPositionY",":backgroundPositionY":"backgroundPositionY",":bg-repeat":"backgroundRepeat",":background-repeat":"backgroundRepeat",":backgroundRepeat":"backgroundRepeat",":bg-size":"backgroundSize",":background-size":"backgroundSize",":backgroundSize":"backgroundSize",":bg-color":"backgroundColor",":background-color":"backgroundColor",":backgroundColor":"backgroundColor",":color":"color"},_e="before_render",Le="rendered",Re="before_update",Se="updated",Ie="before_destroy",Be="destroyed",He={create:"CREATE",append:"APPEND",replace:"REPLACE",text:"TEXT",prop:"PROP",remove:"REMOVE"},ze="ID: 未提供",Ye="元素: 不存在。";e[T][J](nt("style",'\n[\\:animation=fade-in],[animation=fade-in]{opacity:0;transition:opacity .3s ease-in}[\\:animation=expand].show,[\\:animation=fade-in].show,[animation=expand].show,[animation=fade-in].show{opacity:1}[\\:animation=expand],[animation=expand]{min-height:0;height:0;overflow:hidden;transition:min-height .3s ease-in}[\\:mask="1"],[\\:mask="1=true"],[mask="1"],[mask=true]{position:relative}[\\:mask="1"]::after,[\\:mask="1=true"]::after,[mask="1"]::after,[mask=true]::after{content:\'\';position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(to right,#e0e0e0 25%,#f0f0f0,#e0e0e0 75%);background-size:200% 100%;animation:1.5s infinite alternate loading-animation;z-index:10;transition:.3s}[\\:mask="1"].show::after,[\\:mask="1=true"]::after,[mask="1"].show::after,[mask=true]::after{opacity:0}@keyframes loading-animation{0%{background-position:-100% 0}100%{background-position:100% 0}}img[lazyload]:not([lazyload=""]){width:1rem;height:1rem;border:.25rem solid rgba(0,0,0,.1);border-top-color:#3498db;border-radius:50%;animation:2s ease-in-out infinite spin}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}img[src]:not([src=""]){width:unset;height:unset;border:0 solid transparent;border-radius:0;animation:none;transition:height .3s}\n'));class Ve{#e;#t;#n;#o;#i;#r;#a;#s;#l;constructor(e={}){this.#e=e[_e]||void 0,this.#t=e[Le]||void 0,this.#n=e[Re]||void 0,this.#o=e[Se]||void 0,this.#i=e[Ie]||void 0,this.#r=e[Be]||void 0}async#d(e){return new c(((t,n)=>{t(!1!==e())}))}#c(e){e(!1)}async render(e){this.#a=l.now(),null!=this.#e&&!1===await this.#d(this.#e)||(await e(),this.#s=l[U]()-this.#a,null!=this.#t&&this.#c(this.#t),et("渲染耗時:",this.#s/1e3))}async update(e){clearTimeout(this.#l),this.#l=setTimeout((async()=>{this.#a=l.now(),null!=this.#n&&!1===await this.#d(this.#n)||(await e(),this.#s=l[U]()-this.#a,null!=this.#o&&this.#c(this.#o),et("更新耗時:",this.#s/1e3))}),300)}async destroy(e){this.#a=l.now(),null!=this.#i&&!1===await this.#d(this.#i)||(await e(),this.#s=l[U]()-this.#a,null!=this.#r&&this.#c(this.#r),et("銷毀耗時:",this.#s/1e3))}}async function $e(e,t=!1){return new c((async(n,o)=>{try{const i=await fetch(e);if(i.ok){const e=i[ae][se]("Content-Type");if(e&&e[M]("image")){if("image/svg+xml"==e&&!t)return void n(i);const r=await i.blob(),a=new Image,l=s.createObjectURL(r);a[$]=l,a[le]=de,a.onload=e=>n({[$]:l,img:a}),a.onerror=e=>{s.revokeObjectURL(l),o(e)}}else n(i)}else o(new Error(`HTTP error! status: ${i.status}`))}catch(e){o(e)}}))}function Ue(e,t,n){return new Proxy(e,{get(e,o,i){const r=Reflect.get(e,o,i),a=t?`${t}.${o.toString()}`:o.toString();return"object"==typeof r&&null!==r?Ue(r,a,n):r},set(e,o,i,r){const a=e[o],s=Reflect.set(e,o,i,r),l=t?`${t}.${o.toString()}`:o.toString();return a!==i&&n(l,i,a),s}})}window.QUI=class{body;data;event;done={};#u=null;#f=null;#h=null;#p;constructor(n){if(t(n[ye]||"")[Ae]<1)return void et(ze);const o=e[S](n[ye]);if(null==o)return void et(Ye);if(this.#u=this.#g(o),this.#h=p(this.#u),"function"==typeof n.render){const e=n.render();let t=nt("temp"),i=o.cloneNode(!0);t?.appendChild(function(e){const t=qe(e.trim().replace(/\s*([\{\}\[\]\:,])\s*/g,"$1"));return Ze(t)}(e)),i.replaceChildren(t),this.#u=this.#g(i)}this[Ee]=o,this[H]=Ue(n[H]||{},"",(e=>{this.#p.update((()=>this.#m()))})),this[z]=n[z]||{};const i=n.option||{};!1!==i.svg&&function(){if(null!=Xe)return;We=new IntersectionObserver((e=>{e.forEach((e=>{if(!e.isIntersecting)return;const t=e.target,n=(t.getAttribute("src")||"")[Y]();n[Ae]<1||$e(n).then((e=>{We[ue](t),e.text().then((e=>{const n=nt("div");n[ve]=e;const o=n[O][0];o.id=t.id,t.classList[Ce]((e=>o.classList.add(e))),o.onclick=t.onclick,null!=t[N]&&t[N].insertBefore(o,t),t.remove()})).catch((e=>{t[ve]="☒"}))})).catch((e=>{We[ue](t),t[ve]="☒"}))}))})),[][ce].call(document.body.querySelectorAll("temp-svg[src]:not([src=''])")||[])[Ce]((e=>We.observe(e)))}(),!1!==i.lazyload&&function(){if(null!=je)return;Fe=new IntersectionObserver(((e,t)=>{e[Ce]((e=>{const t=e.target;if(e.isIntersecting){t.parentElement;const e=t.getAttribute("lazyload")||"";if(Fe[ue](t),e[Ae]<1)return;$e(e,!0).then((e=>{const n=e.img,o=n.naturalWidth,i=n.naturalHeight;t.style.width=o+"px",t.style.height=i+"px",t[$]=e[$]})).catch((e=>{console.log(e),t.style.width="",t.style.height="",t[$]="https://cdn.jsdelivr.net/gh/pardnchiu/PDRenderKit@latest/static/image/404.svg"}))}}))})),[][ce].call(document.body.querySelectorAll("img[lazyload]:not([lazyload=''])")||[])[Ce]((e=>Fe.observe(e)))}();const r=n.when||n.lifecycle||{};this.#p=new Ve({before_render:r[_e]||n[_e],rendered:r[Le]||n[Le],before_update:r[Re]||n[Re],updated:r[Se]||n[Se],before_destroy:r[Ie]||n[Ie],destroyed:r[Be]||n[Be]}),this.#p.render((()=>this.#m()))}#g(t){if(t[ge][L]()===he){let n=!1;for(const o of e[T][pe](he)||[])if(null!=t[$]&&o[$]===t[$]||null!=t[_]&&o[_]===t[_]){n=!0;break}return n||e[T][J](t),{[me]:he,[q]:{},[O]:[],[H]:null,[R]:!1}}return{[me]:t[ge][L](),[q]:(n=t,[...n.attributes].reduce(((e,t)=>(e[t.name]=t.value.trim(),e)),{})),[O]:tt(t).map((e=>e.nodeType===Node[re]?this.#g(e):(e[_]||"")[Y]())),[H]:null,[R]:!1};var n}#m(){return new Promise((async e=>{this.#f=p(this.#u),null!=this.#f&&(this.#b(this.#f),this.#y(this.#f),await this.#k(this.#f),this.#b(this.#f),this.#y(this.#f),this.#v(this.#f),this.#C(this.#f),e(!0))}))}#b(e){let t=0;if(!("string"==typeof e||e[O][Ae]<1)){for(;t<e[O][Ae];){const n=e[O][t];if("string"==typeof n){t++;continue}if(null==n[H]&&(n[H]=e[H]),!(C in n[q])){t++;continue}const i=n[q][C],r=(i[De](/^\(?\s*(\w+)/)||[])[1],s=(i[De](/\,\s*(\w+)/)||[])[1],l=(i[De](b)||[])[1];let d=this.#w(l,e[H]),c=[];if(delete n[q][C],o[F](d)){d=a[V](a[be](d));for(const e in d){const t=a[V](a[be](d[+e]));let o=p(n);o[H]=a[V](a[be]({[r]:t,[l]:d})),null!=s&&(o[H][s]=+e),c.push(o)}e[O][P](t,1,...c),t+=c[Ae]-2}else if(null!=d&&"object"==typeof d){d=a[V](a[be](d));for(const e in d){const t=a[V](a[be](d[e]));let o=p(n);o[H]=a[V](a[be]({[r]:e,[s]:t,[l]:d})),c.push(o)}e[O][P](t,1,...c),t+=c[Ae]-2}else t++}for(let t of e[O])this.#b(t)}}#y(e){let o=0;if(!("string"==typeof e||e[O][Ae]<1)){for(;o<e[O][Ae];){const i=e[O][o];if("string"==typeof i){o++;continue}if(!(w in i[q])){delete i[q][x],delete i[q][E],delete i[q][A],o++;continue}let a=o+1,s=e[O][a],l=[o],d=!1;(()=>{for(;!d;){if(l[D](a),a+=1,s=e[O][a],null==s||"string"==typeof s){d=!0;continue}const t=s[q]||{};d=null==(t[x]||t[E]||t[A])}})();let c=!1;for(let i of l){const a=e[O][i];if(null==a||"string"==typeof a)return;const s=a[q][w]||a[q][x]||a[q][E],d=null!=a[q][A];if(c)return;if(d)e[O][P](o,l.length,a);else if(null!=s){const i=s[j](y)[0],d=s[j](y)[1],u=((s[De](y)||[])[0]||"")[Y](),f=this.#w(i,a[H]);if(null==d&&u[Ae]<1?c=r(f):">"===u?c=(n(f)||0)>(n(d)||0):"<"===u?c=(n(f)||0)<(n(d)||0):">="===u||">=="===u?c=(n(f)||0)>=(n(d)||0):"<="===u||"<=="===u?c=(n(f)||0)<=(n(d)||0):"=="===u||"==="===u?c="null"==d?null==f:"true"==d?r(f):"false"==d?!r(f):"empty"==d?t(f||"")[Ae]<1:t(f||"")==t(d):"!="!==u&&"!=="!==u||(c="null"==d?null!=f:"true"==d?!r(f):"false"==d?r(f):"empty"==d?t(f||"")[Ae]>0:t(f||"")!=t(d)),c)return delete a[q][w],void e[O][P](o,l.length,a);a[R]=!c}}c?o+=l.length-2:o++}for(let t of e[O])this.#y(t)}}async#k(e){let t=0;if(!("string"==typeof e||e[O][Ae]<1)){for(;t<e[O][Ae];){const n=e[O][t];if("string"==typeof n){t++;continue}if(!(v in n[q])||"temp"!=n.tag){t++;continue}const o=n[q][v],i=this.#w(o,e[H])||o;delete n[q][v],await fetch(i).then((async n=>{const o=nt("div",await n.text()).cloneNode(!0),i=this.#g(o);e[O][P](t,1,...i[O]),t+=i[O][Ae]-2})),t++}for(let t of e[O])await this.#k(t)}}#v(e){let t=0;for(;t<e[O][Ae];){let n=e[O][t];if("string"==typeof n)for(let o of n[De](new RegExp(m,"g"))||[]){const n=e[O][t]||"",i=o[De](m)||[];if(i[Ae]<1)continue;const r=i[1]||"",a=this.#w(r,e[H]);"string"!=typeof n||r.length<1||null==a||(e[O][t]=n[we](new RegExp("{{\\s*?"+r[we](/(\?|\.|\+|\*|\\|\%|\-|\(|\))/g,"\\$1")+"\\s*?}}","i"),a))}else null!=n&&(null==n[H]&&(n[H]=e[H]),this.#v(n));t++}}#C(t){const n=e[S](this[Ee][ye]);if(null==n)return void et(Ye);const i=this.#x(this.#h,t);o[F](i)&&this.#E(n,i);for(let e of n[pe]("*[\\:if]"))e[Q](":if");n[I].add("show"),"expand"==n.getAttribute("animation")&&(n[ke].minHeight=n.scrollHeight+"px"),g((()=>{n.removeAttribute("animation"),n.removeAttribute("mask"),n[I][fe]("fade-in"),n[I][fe]("loading-block"),n[I][fe]("expand"),n[I][fe]("show")}),300),this.#h=t}#x(e,t,n=[]){if(null==e&&t)return[{[W]:He.create,[Te]:n,[G]:t}];if(e&&!t)return[{[W]:He.remove,[Te]:n}];if(!e&&!t)return[];if(e.tag!==t.tag)return[{[W]:He[we],[Te]:n,[G]:t}];const o=[];return o[D](...this.#A(e,t,n)),o[D](...this.#D(e,t,n)),o}#A(e,t,n=[]){if(null==e||"string"==typeof e||null==t||"string"==typeof t)return[];const o=[],r=e[q]||{},a=i[ee](r)[Ae],s=t[q]||{},l=i[ee](s)[Ae];if(l>0)for(let e in s){const i=s[e];o[D]({[W]:He.prop,[G]:t,key:e,value:i,[Te]:n})}if(a>0){if(l<1)for(let e in r)o[D]({[W]:He.prop,[G]:t,key:e,[xe]:null,[Te]:n});for(let e in s)l>0&&!(e in s)&&o[D]({[W]:He.prop,[G]:t,key:e,[xe]:null,[Te]:n})}return o}#D(e,t,n=[]){if(null==e||"string"==typeof e||null==t||"string"==typeof t)return[];const i=[],r=o[F](e[O])?e[O]:[],a=o[F](t[O])?t[O]:[],s=d.max(r[Ae],a[Ae]);for(let e=0;e<s;e++){const o=r[e],s=a[e],l=n.concat(e);if("string"==typeof o&&"string"==typeof s){if(o===s)continue;i[D]({[W]:He.text,[G]:t,[xe]:s,[Te]:l})}else null==o?i[D]({[W]:He.append,[G]:s,[Te]:l}):null==s?i[D]({[W]:He.remove,index:l}):i[D](...this.#x(o,s,l))}return i}#E(t,n){if(null!=t&&o[F](n)){(()=>{const e=n.filter((e=>e.type===He.remove)).sort(((e,t)=>{const n=(t.index.length||0)-(e.index.length||0);if(0!==n)return n;for(let n=0;n<(e.index.length||0);n++)if((e.index[n]||0)!==(t.index[n]||0))return(t.index[n]||0)-(e.index[n]||0);return 0}));for(const n of e){const e=this.#P(t,n.index);null!=e&&null!=e[te]&&e[te].removeChild(e)}})();for(let o of n){let n,{index:r}=o,s=a[V](a[be](r||[]));o.type===He.append&&(n=s?.pop());const l=s?this.#P(t,s):t;if(l)if(o.type===He.create&&G in o){const t="string"==typeof o.vdom?e[K](o.vdom):this.#T(o.vdom);if(null==l[N])continue;l[N][J](t)}else if(o.type===He.replace&&G in o&&null!=l[te]){const t="string"==typeof o.vdom?e[K](o.vdom):this.#T(o.vdom);if(l[te].replaceChild(t,l),t instanceof Text||"string"==typeof o.vdom)continue;for(const[e,n]of i.entries(o.vdom[q]))this.#M(t,e,n||"",o.vdom);this.#O(o.vdom,t)}else if(o.type===He.text&&xe in o&&null!=l)l[_]=o.value||"";else if(o.type===He.prop&&"key"in o&&l instanceof Element)this.#M(l,o.key,o.value||"",o.vdom);else if(o.type===He.append&&G in o&&null!=n){const t="string"==typeof o.vdom?e[K](o.vdom):this.#T(o.vdom);if(n+1>l[O][Ae]?l[J](t):l.insertBefore(t,l[O][n+1]),"string"==typeof o.vdom)continue;for(const[e,t]of i.entries(o.vdom[q]))this.#M(l[O][n],e,t||"",o.vdom);this.#O(o.vdom,l[O][n])}}}}#M(e,t,n,o){null==n?e[Q](t):t[M](":@")||t[M]("@")?this.#N(e,t,n,o):t[L]()[M](":model")?this.#_(e,t,n):t[M](":")?this.#L(e,t,n,o):null!=e&&e[ne](t,n)}#N(e,t,n,o){(()=>{if(!1===t[M]("@"))return;const o=t[we](/^\@/,"on"),i=this[z][n];e[o]=i})(),(()=>{if(!1===t[M](":@"))return;const i=t[we](/^\:\@/,"on"),r=this.#w(n,o[H]),a=this[z][r];e[i]=a})(),e[Q](t)}#_(t,n,o){if(null==o||!/(input|select|textarea)/i[B](t[ge]))return;const i=t instanceof HTMLInputElement,r=t instanceof HTMLTextAreaElement,a=t instanceof HTMLSelectElement,s=t.getAttribute("type");!i||"checkbox"!==s&&"radio"!==s?a?t[oe]("change",(e=>{this[H][o]=e.target[xe]||""})):(i||r)&&(t[oe]("keyup",(e=>{this[H][o]=e.target[xe]||""})),t[oe]("change",(e=>{this[H][o]=e.target[xe]||""}))):t[oe]("change",(t=>{this[H][o]=[...e.body.querySelectorAll("input[name='"+t.target.name+"'][type='"+s+"']:checked")].map((e=>e.value)).join(",")})),t[Q](n)}#L(e,t,n,o){const i=null==this.#w(n,o[H])?n:this.#w(n,o[H]),a=(Oe[t[L]()]||"")[Y](),s=(Ne[t[L]()]||"")[Y]();if(e[ke][Z]=o[R]?"none":"",":lazyload"===t[L]()&&n[Y]()[Ae]>0&&Fe.observe(e),t[L]()===C);else if(":src"===t[L]()&&"temp-svg"===o.tag[L]()&&n[Y]()[Ae]>0){const t=this.#w(n,o[H])||n;e.setAttribute($,t),We.observe(e)}else t[L]()in Me||(t[L]()in Oe?e[a]=i:t[L]()in Ne?e[ke][s]=i:":hide"===t[L]()&&r(h(+i)?i:+i)?e[ke][Z]="none":i[Ae]>0&&e[ne](`${t[we](/^:/,"")}`,i));e[Q](t)}#O(e,t){if("string"!=typeof e)for(const n in e.children.filter((e=>"string"!=typeof e))){if(null==t)continue;const o=e.children[+n],r=t.children[+n];if("string"!=typeof o){for(const[e,t]of i.entries(o[q]))this.#M(r,e,t||"",o);this.#O(o,r)}}}#w(e,n){if(e[Y]()[Ae]<1)return;const r=m[B](e);let a="",s="";r&&(a=e[j](m)[0]||"",s=e[j](m)[4]||"",e=e[De](m)[1]);const l=/^LENGTH\(.+\)/[B](e);l&&(e=e[we](/^LENGTH\(|\)$/g,""));const d=/^CALC\(.*\)$/[B](e);let c="",u=0;if(d){const t=(e=e[we](/^CALC\(|\)$/g,""))[De](k);e=t[1],c=t[2],u=+t[3]||0}const h=/^UPPER\(.*\)$/[B](e),p=/^LOWER\(.*\)$/[B](e);(h||p)&&(e=e[we](/^(UPPER|LOWER)\(|\)$/g,""));const g=/^DATE\([\w\,\-\s\:]*\)$/[B](e);let b="";if(g){const t=(e=e[we](/^DATE\(|\)$/g,""))[De](/(\w+),\s*([^\n]+)/);e=t[1],b=t[2]}let y=e[j](/\./),v=n||this[H],C=y[0],w=v[C];for(y[Pe]();y[Ae]>0;)v=w||{},C=y[0],w=v[C],y[Pe]();if(null==w)for(y=e[j](/\./),v=this[H],C=y[0],w=v[C],y[Pe]();y[Ae]>0;)v=w||{},C=y[0],w=v[C],y[Pe]();let x="";if(null!=w&&w instanceof Object&&!o[F](w)?x=t(i[ee](w)[Ae]):null!=w&&(x=w[Ae]),r){if(l)return a+x+s;if(d&&(w=this.#R(w,c,u),null==w))return;return a+w+s}if(l)return x;if(d){if(w=this.#R(w,c,u),null==w)return}else{if(h)return w.toUpperCase();if(p)return w[L]();if(g)return function(e,n="yyyy/MM/DD (ddd) HH:mm:ss"){const o=new Date(1e3*e),i=t(o.getFullYear()),r=t(o.getMonth()+1),a=t(o.getDate()),s=t(o.getDay()),l=t(o.getHours()),d=t(o.getMinutes()),c=t(o.getSeconds()),u=t(o.getMilliseconds());let h={YYYY:i,yyyy:i,YY:i[ce](-2),yy:i[ce](-2),Y:i[ce](-2),y:i[ce](-2),M:r,MM:("0"+r)[ce](-2),D:a,DD:("0"+a)[ce](-2),d:s,dd:("0"+s)[ce](-2),H:l,HH:("0"+l)[ce](-2),h:t(f(l)%12||12),hh:("0"+(f(l)%12||12))[ce](-2),m:d,mm:("0"+d)[ce](-2),s:c,ss:("0"+c)[ce](-2),SSS:("00"+u)[ce](-3),a:f(l)>=12?"pm":"am",A:f(l)>=12?"PM":"AM"};const p=/zh/.test(navigator.language||"")?["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return h.ddd=p[f(s)][ce](0,3),h.dddd=p[f(s)],n.replace(/YYYY|YY|Y|yyyy|yy|y|MM|M|DD|D|HH|H|hh|h|mm|m|ss|s|SSS|a|A|ddd|dddd/g,(e=>h[e]))}(+w,b)}return w}#P(e,t){let n=e,i=o.from(n.childNodes).filter((e=>e.nodeType===u[re]||e.nodeType===u[ie]&&""!==e[_]?.trim()))||[];for(const e of t)n=i[e],null!=n&&(i=o.from(n.childNodes).filter((e=>e.nodeType===u[re]||e.nodeType===u[ie]&&""!==e[_]?.trim()))||[]);return n}#T(t){const n=e.createElement(t.tag);if(t[q])for(const[e,o]of i.entries(t[q]))e[M](":")||e[M]("@")||void 0!==o&&n[ne](e,o);for(const o of t[O])if("string"==typeof o)n[J](e[K](o));else{if(!0===o[R])continue;n[J](this.#T(o))}return n}#R(e,t,o){return e=n(e),o=n(o),h(e)||h(o)?void 0:"+"===t?e+o:"-"===t?e-o:"*"===t?e*o:"/"===t?e/o:"%"===t?e%o:e}};let je,Fe,Xe,We;new Map;function qe(e){const t=[];let n=0;for(;n<e.length;){let o=Ge(e,n),i=Je(e,n);if(null==i&&null==o)break;if(null!=i&&null==o)t.push(i.value),n=i.nextIndex;else if(null!=o){let i={tag:o.tag,id:o.id,class:o.class,attributes:{}};for(;"}"!==e[n];){if("children:"===e.slice(n,n+9)){n+=9;const t=Qe(e,n);i.children=t.value,n=t.nextIndex}const t=Ke(e,n,["id","class","children"]);t?(i.attributes[t.key]=t.value,n=t.nextIndex):n++}n++,t.push(i)}}return t}function Ze(e){const t=new DocumentFragment;if(!Array.isArray(e))return t;for(let n of e){if(null==e)continue;const o=n.tag+(null==n.id?"":"#"+n.id)+(null==n.class?"":"."+n.class.replace(/\s/g,".")),i="string"==typeof n?document.createTextNode(n):nt(o,n.attributes||{});"string"!=typeof n&&i?.appendChild(Ze(n.children)),t?.appendChild(i)}return t}function Ge(e,t){let n=t,o="",i="",r=[];for(;/[\s\,]/.test(e[n]);)n++;for(;/[a-zA-Z]/.test(e[n]);)o+=e[n],n++;if("#"===e[n])for(n++;/[a-zA-Z0-9_-]/.test(e[n]);)i+=e[n],n++;for(;"."===e[n];){n++;let t="";for(;/[a-zA-Z0-9_-]/.test(e[n]);)t+=e[n],n++;r.push(t)}const a=r.join(" ");for(;/\s/.test(e[n]);)n++;return"{"===e[n]?(n++,{tag:o.trim(),id:i||null,class:a||null,nextIndex:n}):null}function Je(e,t){let n=t,o="";for(;/\s/.test(e[n]);)n++;for(;'"'!==e[n];)n++;for(n++;'"'!==e[n];)o+=e[n],n++;return n++,{value:o,nextIndex:n}}function Ke(e,t,n=[]){let o=t,i="",r="";for(;/\s/.test(e[o]);)o++;for(;/[a-zA-Z_-]/.test(e[o]);)i+=e[o],o++;if(n.includes(i.trim()))return null;if(":"===e[o]){o++;const t=Je(e,o);return r=t.value,o=t.nextIndex,{key:i.trim(),value:r,nextIndex:o}}return null}function Qe(e,t){let n=t,o=[],i=0,r="";for(;/\s/.test(e[n]);)n++;for(;"["!==e[n];)n++;for(n++;n<e.length;){const t=e[n];if("{"===t)i++,r+=t;else if("}"===t)i--,r+=t;else{if("]"===t&&0===i){o=qe(r);break}r+=t}n++}return{value:o,nextIndex:n}}function et(...t){const n=nt(he,`console.log.apply(void 0, ${a[be](t)});`);e.body[J](n),n[fe]()}function tt(e){return o.from(e.childNodes).filter((e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&e.textContent&&e.textContent.trim().length>0))}function nt(n="",i,r){const a=/\.([\w_-]+)?/gi,s=((n[De](/^\w+(?=[\#\.]*)/i)||[])[0]||"")[Y](),l=((n[De](/\#([\w_-]+)?/i)||[])[1]||"")[Y](),d=(a.test(n)&&n.match(a)||[]).map((e=>e.replace(/^\./,"")));if(s[Ae]<1)return;let c,u,f,h=!1;"temp"===n?(h=!0,c=e.createDocumentFragment()):c=e.createElement(s),l[Ae]&&(c.id=l);for(let e of d)c.classList.add(e);if(null==i&&null!=r&&([i,r]=[r,null]),null!=i&&null!=r)[u,f]=[i,r];else if(null==r)"string"==typeof i||"number"==typeof i||o[F](i)?f=i:u=i;else if(null==i)return c;if("object"==typeof u&&null!=u)for(const e in u){if(!u.hasOwnProperty(e))continue;const t=u[e];-1!=["value","innerText",ve,"textContent","contentEditable"][X](e)?c[e]=t:-1!=["color","backgroundColor","width","height","display","float"][X](e)?c.style[e]=t:null!=t&&c[ne](e,t)}if(null!=f){const n="string"==typeof f,i="number"==typeof f,r=o[F](f);if(n||i){const t=f;"img"===s||"source"===s?c.src=t:h?c[J](e[K](f)):c[ve]=t}else if(r)for(let n of f){const o=n instanceof Element;"string"==typeof n||"number"==typeof n?c[J](e[K](t(n))):o&&c[J](n)}}return c}}("undefined"==typeof window?window={}:window);