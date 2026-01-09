(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(r){if(r.ep)return;r.ep=!0;const l=i(r);fetch(r.href,l)}})();tailwind.config={theme:{extend:{fontFamily:{serif:['"Playfair Display"',"serif"],sans:['"Inter"',"sans-serif"]},colors:{royal:{800:"#001b3d",900:"#001229"},gold:{100:"#FCF6BA",300:"#FBF5B7",400:"#BF953F",500:"#B38728",600:"#AA771C"},surface:"#f8fafc"},animation:{"fade-up":"fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",float:"float 6s ease-in-out infinite"},keyframes:{fadeUp:{"0%":{opacity:"0",transform:"translateY(20px)"},"100%":{opacity:"1",transform:"translateY(0)"}},float:{"0%, 100%":{transform:"translateY(0)"},"50%":{transform:"translateY(-10px)"}}}}}};const B="es-MX",c=e=>new Intl.NumberFormat(B).format(Number(e||0)),E=[{id:101,name:"Carpa Estructural 12x24m",img:"bx-building"},{id:102,name:"Carpa 6x18 Luxury",img:"bx-window"},{id:103,name:"Carpa 6x12 Luxury",img:"bx-building"},{id:104,name:"Carpa Eventos 4x8",img:"bx-store-alt"},{id:105,name:"Carpa Premium 4x4",img:"bx-building-house"},{id:106,name:"Sombrilla Gigante 3m",img:"bx-sun"},{id:201,name:"Silla Crossback",img:"bx-chair"},{id:202,name:"Mesa Parota (12px)",img:"bx-table"},{id:203,name:"Sala Lounge Velvet",img:"bx-sofa"},{id:204,name:"Mesa Parota (8px)",img:"bx-square"},{id:205,name:"Mesa Redonda (10px)",img:"bx-circle"},{id:206,name:"Mesa Rectangular (10px)",img:"bx-rectangle"},{id:207,name:"Mesa Tablón Pro",img:"bx-minus"},{id:208,name:"Silla Tiffany",img:"bx-chair"},{id:209,name:"Silla Plegable",img:"bx-chair"},{id:210,name:"Silla Phoenix",img:"bx-star"},{id:301,name:"Mantel Terciopelo",img:"bx-layer"},{id:302,name:"Servilleta Lino",img:"bx-bookmark"},{id:303,name:"Loza Vajilla Premium",img:"bx-restaurant"},{id:304,name:"Loza Vajilla Básica",img:"bx-restaurant"},{id:305,name:"Copa Vidrio",img:"bx-wine"},{id:306,name:"Copa Cristal",img:"bx-wine"},{id:307,name:"Cubiertos Gold",img:"bx-knife"},{id:308,name:"Cubiertos Silver",img:"bx-knife"},{id:309,name:"Mantelería Gold",img:"bx-layer"},{id:310,name:"Mantelería Básica",img:"bx-layer"},{id:401,name:"Pista Baile Charol",img:"bx-grid-alt"},{id:402,name:"Iluminación Arq.",img:"bx-bulb"},{id:403,name:"Calentador Ambiental",img:"bx-flame"},{id:404,name:"Hielera Grande",img:"bx-fridge"}],L=[{id:1,titulo:"Boda Imperial",categoria:"grand",pax:"150 personas",precio:18500,desc:"El lujo máximo. Carpa estructural gigante, pista de charol y vajilla gold.",items:[101,201,202,303,306,307,301,401,402]},{id:2,titulo:"Gala Corporativa",categoria:"grand",pax:"100 personas",precio:12800,desc:"Ideal para cenas de fin de año. Elegancia sobria con sillas Tiffany y mantelería fina.",items:[102,208,205,303,308,309,402]},{id:3,titulo:"Cóctel Sunset",categoria:"medium",pax:"60 personas",precio:6500,desc:"Ambiente relajado semi-cubierto con salas lounge y mesas altas.",items:[103,203,207,305,310,403,404]},{id:4,titulo:"Cena Toscana",categoria:"medium",pax:"50 personas",precio:7200,desc:"Estilo rústico elegante. Mesas de parota sin mantel y luces cálidas.",items:[103,201,202,306,307,302,402]},{id:5,titulo:"Petit Comité",categoria:"boutique",pax:"Menos de 30 personas",precio:3900,desc:"Exclusividad íntima. Sillas Phoenix transparentes y detalles premium.",items:[105,210,204,303,306,307,404]}];let s={filtroActual:"all",paquetesVisibles:[...L],indiceActual:0,intervaloAuto:null};const p=document.getElementById("slider-container"),x=document.getElementById("dots-container");function h(){w(),$(0,"init"),C()}function w(){x&&(x.innerHTML=s.paquetesVisibles.map((e,a)=>`
      <button aria-label="Ir al slide ${a+1}" onclick="clickPunto(${a})"
              class="group relative w-10 h-2 transition-all duration-500 rounded-full overflow-hidden">
          <div class="absolute inset-0 bg-white/20"></div>
          <div class="absolute inset-0 bg-gold-400 transition-transform duration-700 origin-left ${a===s.indiceActual?"scale-x-100":"scale-x-0"}"></div>
      </button>
  `).join(""))}function j(e){e!==s.indiceActual&&(s.indiceActual=e,$(e,"slide"),w(),A())}function $(e,a){const i=s.paquetesVisibles[e];if(!i||!p)return;const t=i.items.map(o=>{const n=E.find(u=>u.id===o);return n?`
          <li class="flex items-center gap-3 text-sm text-slate-200 group/item">
              <div class="w-6 h-6 flex items-center justify-center rounded-lg bg-gold-400/10 text-gold-400 group-hover/item:bg-gold-400 group-hover/item:text-royal-900 transition-colors duration-300">
                  <i class='bx ${n.img}'></i>
              </div>
              <span class="font-light tracking-wide">${n.name}</span>
          </li>`:""}).join(""),r=`
  <div class="slide-content w-full min-h-full lg:h-[480px] flex flex-col lg:flex-row items-center justify-center lg:justify-between p-6 md:p-12 lg:p-16 gap-8 relative overflow-hidden bg-gradient-to-br from-[#0a192f] via-[#0d1b2a] to-[#0a192f]">

      <div class="absolute top-0 right-0 w-64 h-64 bg-gold-400/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
      <div class="absolute bottom-0 left-0 w-48 h-48 bg-royal-400/20 rounded-full blur-[60px] -ml-24 -mb-24"></div>

      <div class="w-full lg:w-1/2 text-white z-10 space-y-4 md:space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-gold-400/10 border border-gold-400/50 rounded-full">
              <i class="bx bx-group text-gold-400 text-xs"></i>
              <span class="text-[10px] font-black uppercase tracking-[0.2em] text-gold-400">Capacidad: ${i.pax} Personas</span>
          </div>

          <h3 class="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight tracking-tight">
              ${i.titulo.split(" ")[0]} <span class="text-gold-400 block lg:inline">${i.titulo.split(" ").slice(1).join(" ")}</span>
          </h3>

          <p class="text-sm md:text-base text-slate-300 font-light italic border-l-2 border-gold-400/60 pl-4 max-w-md leading-relaxed">
              "${i.desc}"
          </p>

          <div class="flex flex-col sm:flex-row sm:items-center gap-6 pt-4">
              <div class="flex flex-col">
                  <span class="text-[10px] uppercase text-gold-400/70 tracking-widest font-bold">Inversión</span>
                  <div class="flex items-baseline gap-1">
                      <span class="text-3xl md:text-4xl font-bold text-white">$${c(i.precio)}</span>
                      <span class="text-xs text-slate-400 font-medium">MXN</span>
                  </div>
              </div>

              <button onclick="botReservePackage(${i.id})" 
                  class="group relative overflow-hidden bg-gold-400 text-royal-900 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-gold-400/20 font-black uppercase text-[10px] tracking-widest">
                  <span class="relative z-10 flex items-center gap-2">
                      Reservar Ahora <i class="bx bx-right-arrow-alt text-lg group-hover:translate-x-1 transition-transform"></i>
                  </span>
              </button>
          </div>
      </div>

      <div class="w-full lg:w-5/12 z-10">
          <div class="bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl relative group hover:border-gold-400/40 transition-colors duration-500">
              <div class="absolute -top-3 -right-3 w-12 h-12 bg-royal-900 border border-gold-400 rounded-full flex items-center justify-center text-gold-400 shadow-lg">
                  <i class="bx bx-star text-xl"></i>
              </div>
              <h4 class="text-white font-serif text-xl mb-6 flex items-center gap-3">
                  <span class="w-8 h-px bg-gold-400/50"></span>
                  Detalles del Set
              </h4>
              <ul id="pkg-list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 overflow-y-auto max-h-[250px] lg:max-h-none pr-2 custom-scrollbar">
                  ${t}
              </ul>
          </div>
      </div>
  </div>`;p.innerHTML=r;const l=p.querySelector(".slide-content");l&&(a==="slide"?l.animate([{transform:"translateX(30px)",opacity:0},{transform:"translateX(0)",opacity:1}],{duration:600,easing:"cubic-bezier(0.16, 1, 0.3, 1)"}):a==="fade"&&l.animate([{opacity:0,transform:"scale(0.96)"},{opacity:1,transform:"scale(1)"}],{duration:700,easing:"ease-out"}))}function C(){k(),s.intervaloAuto=setInterval(()=>{let e=(s.indiceActual+1)%s.paquetesVisibles.length;j(e)},8e3)}function k(){s.intervaloAuto&&clearInterval(s.intervaloAuto)}function A(){k(),C()}document.addEventListener("DOMContentLoaded",h);const m=[{id:101,name:"Carpa Estructural 12x24m",colors:"Blanco, Transparente",includes:"Ventanales, alumbrado básico, instalación",price:1500,category:"Carpas",img:"bx-building"},{id:102,name:"Carpa 6x18 Luxury",colors:"Blanco, Transparente",includes:"Ventanales, cielo falso, iluminación LED",price:1200,category:"Carpas",img:"bx-window"},{id:103,name:"Carpa 6x12 Luxury",colors:"Blanco, Crema",includes:"Ventanales y alumbrado decorativo",price:900,category:"Carpas",img:"bx-building"},{id:104,name:"Carpa Eventos 4x8",colors:"Blanco, Crema",includes:"Paredes laterales removibles",price:550,category:"Carpas",img:"bx-store-alt"},{id:105,name:"Carpa Premium 4x4",colors:"Blanco, Crema",includes:"Estructura reforzada",price:400,category:"Carpas",img:"bx-building-house"},{id:106,name:"Sombrilla Gigante 3m",colors:"Beige, Blanco",includes:"Base de concreto",price:150,category:"Carpas",img:"bx-sun"},{id:201,name:"Silla Crossback",colors:"Madera Natural, Nogal",includes:"Cojín de lino",price:35,category:"Mobiliario",img:"bx-chair"},{id:202,name:"Mesa Parota (12px)",colors:"Madera Natural",includes:"Base de herrería",price:550,category:"Mobiliario",img:"bx-table"},{id:203,name:"Sala Lounge Velvet",colors:"Azul, Gris, Rosa",includes:"1 Sillón doble, 2 individuales, 1 mesa centro",price:1200,category:"Mobiliario",img:"bx-sofa"},{id:204,name:"Mesa Parota (8px)",colors:"Madera",includes:"Acabado en barniz mate",price:200,category:"Mobiliario",img:"bx-square"},{id:205,name:"Mesa Redonda (10px)",colors:"Madera/Fibra",includes:"Estructura plegable",price:65,category:"Mobiliario",img:"bx-circle"},{id:206,name:"Mesa Rectangular (10px)",colors:"Blanco",includes:"Estructura reforzada",price:80,category:"Mobiliario",img:"bx-rectangle"},{id:207,name:"Mesa Tablón Pro",colors:"Gris",includes:"Superficie de plástico de alta densidad",price:60,category:"Mobiliario",img:"bx-minus"},{id:208,name:"Silla Tiffany",colors:"Blanco, Dorado, Plata",includes:"Cojín de vinil",price:35,category:"Mobiliario",img:"bx-chair"},{id:209,name:"Silla Plegable",colors:"Negro, Blanco",includes:"Estructura metálica",price:15,category:"Mobiliario",img:"bx-chair"},{id:210,name:"Silla Phoenix",colors:"Transparente",includes:"Cojín blanco",price:45,category:"Mobiliario",img:"bx-star"},{id:301,name:"Mantel Terciopelo",colors:"Vino, Azul Petróleo, Esmeralda",includes:"Planchado industrial",price:180,category:"Mantelería",img:"bx-layer"},{id:302,name:"Servilleta Lino",colors:"Varios colores",includes:"Arillo decorativo",price:12,category:"Mantelería",img:"bx-bookmark"},{id:303,name:"Loza Vajilla Premium",colors:"Blanco con filo dorado",includes:"Plato base, plato fuerte, plato postre",price:18,category:"Servicio",img:"bx-restaurant"},{id:304,name:"Loza Vajilla Básica",colors:"Blanco Puro",includes:"Plato fuerte y plato postre",price:12,category:"Servicio",img:"bx-restaurant"},{id:305,name:"Copa Vidrio",colors:"Transparente",includes:"Agua o Vino",price:3,category:"Servicio",img:"bx-wine"},{id:306,name:"Copa Cristal",colors:"Transparente",includes:"Copa alta de cristal fino",price:5,category:"Servicio",img:"bx-wine"},{id:307,name:"Cubiertos Gold",colors:"Dorado",includes:"Tenedor, Cuchillo, Cuchara postre",price:22,category:"Servicio",img:"bx-knife"},{id:308,name:"Cubiertos Silver",colors:"Plata",includes:"Acero inoxidable 18/10",price:12,category:"Servicio",img:"bx-knife"},{id:309,name:"Mantelería Gold",colors:"Dorado, Champaña",includes:"Camino de mesa y servilletas",price:180,category:"Mantelería",img:"bx-layer"},{id:310,name:"Mantelería Básica",colors:"Blanco, Negro",includes:"Mantel redondo o rectangular",price:60,category:"Mantelería",img:"bx-layer"},{id:401,name:"Pista Baile Charol",colors:"Negro, Blanco",includes:"Instalación y nivelación",price:300,category:"Extras",img:"bx-grid-alt"},{id:402,name:"Iluminación Arq.",colors:"RGB (Multicolor)",includes:"10 Lámparas LED y cableado",price:1200,category:"Extras",img:"bx-bulb"},{id:403,name:"Calentador Ambiental",colors:"Acero",includes:"Tanque de gas (5 horas)",price:450,category:"Extras",img:"bx-flame"},{id:404,name:"Hielera Grande",colors:"Azul",includes:"Capacidad 100L",price:100,category:"Extras",img:"bx-fridge"}];let d=I()||{};function P(){try{localStorage.setItem("rc_cart_v1",JSON.stringify(d))}catch{}}function I(){try{const e=localStorage.getItem("rc_cart_v1");if(!e)return null;const a=JSON.parse(e);for(const i of Object.keys(a))a[i].qty=Number(a[i].qty)||0;return a}catch{return null}}function q(e="all"){const a=document.getElementById("products-list");if(!a)return;a.innerHTML="",(e==="all"?m:m.filter(t=>t.category===e)).forEach(t=>{const r=d[t.id]?d[t.id].qty:0;a.innerHTML+=`
      <div class="flex items-center justify-between p-3 border border-slate-100 rounded-lg hover:shadow-md transition bg-white animate-fade-up" role="group" aria-label="${t.name}">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-royal-900/5 rounded flex items-center justify-center text-royal-900" aria-hidden="true">
            <i class='bx ${t.img} text-xl'></i>
          </div>
          <div>
            <h4 class="text-sm font-bold text-royal-900">${t.name}</h4>
            <div class="flex flex-col lg:justify-between w-full justify-center items-center">
              <small class="text-[8px] text-slate-500 mr-auto mt-2 align-left">Colores: ${t.colors}</small>
              <small class="text-[8px] text-slate-500 mr-auto mb-2">Incluye: ${t.includes}</small>
            </div>
            <p class="text-xs text-gold-500 font-bold">$${c(t.price)} MXN</p>
          </div>
        </div>
        <div class="flex items-center">
          <button onclick="changeQty(${t.id}, -1)" aria-label="Disminuir cantidad de ${t.name}" class="w-9 h-9 flex items-center justify-center rounded-l border border-royal-900 bg-royal-900 text-white hover:bg-royal-800 hover:border-gold-400 transition-all active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" /></svg>
          </button>
          <input type="text" inputmode="numeric" pattern="[0-9]*" aria-label="Cantidad de ${t.name}" placeholder="0" value="${r}" data-id="${t.id}" oninput="debouncedUpdateFromInput(event)" class="w-12 h-9 text-center border-y border-royal-900 text-royal-900 font-bold focus:outline-none bg-white text-sm qty-input">
          <button onclick="changeQty(${t.id}, 1)" aria-label="Aumentar cantidad de ${t.name}" class="w-9 h-9 flex items-center justify-center rounded-r border border-royal-900 bg-royal-900 text-white hover:bg-royal-800 hover:border-gold-400 transition-all active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
          </button>
        </div>
      </div>
    `}),setTimeout(()=>{document.querySelectorAll(".qty-input").forEach(t=>{t.removeEventListener("keydown",b),t.addEventListener("keydown",b)})},20)}function b(e){const a=e.currentTarget;a&&(e.key==="ArrowUp"&&(e.preventDefault(),f(a.dataset.id,1)),e.key==="ArrowDown"&&(e.preventDefault(),f(a.dataset.id,-1)))}function f(e,a){const i=`input[data-id="${e}"]`,t=document.querySelector(i);if(!t)return;let l=(parseInt(t.value.replace(/[^\d]/g,""))||0)+Number(a);l<0&&(l=0),t.value=l,T({target:t})}function T(e){const a=e.target;if(!a)return;const i=parseInt(a.dataset.id,10);if(isNaN(i))return;a.value=(""+a.value).replace(/[^\d]/g,"");let t=parseInt(a.value,10);(isNaN(t)||t<0)&&(t=0);const r=m.find(l=>l.id===i);r&&(t>0?d[i]={...r,qty:t}:delete d[i],M(),P(),document.getElementById("chat-window")&&!document.getElementById("chat-window").classList.contains("hidden")&&Object.keys(d).length>0)}function M(){const e=document.getElementById("selected-items-container");if(!e)return;let a=0,i=0,t="";Object.values(d).forEach(o=>{const n=o.price*o.qty;a+=n,i+=o.qty,t+=`
      <div class="flex justify-between items-center text-sm text-white/90 border-b border-white/10 pb-2 mb-2">
        <div class="flex flex-col">
          <span class="font-medium">${o.name}</span>
          <span class="text-xs text-white/50">${o.qty} x $${c(o.price)}</span>
        </div>
        <span class="font-bold text-gold-400">$${c(n)}</span>
      </div>
    `}),e.innerHTML=t||'<p class="text-slate-500 text-sm text-center italic py-4">Carrito vacío</p>';const r=document.getElementById("total-display"),l=document.getElementById("item-count-label");r&&(r.innerText=`$${c(a)}`),l&&(l.innerText=`${i} ${i===1?"artículo seleccionado":"artículos seleccionados"}`)}let v=[{id:1,user:"Mariana Solis",text:"Mi evento fue un éxito gracias a sus recomendaciones. Se enfocaron en dejar más espacio sin importarles quitar algunas cosas ya pagadas, impecable servicio. Realmente superaron mis expectativas en cuanto a la logística.",rating:5,date:"Hace 2 días",reactions:{like:12,love:4,dislike:0},replies:[{id:900,user:"Rente Confort",isBrand:!0,text:"Gracias Mariana, fue un honor ser parte de tu día.",reactions:{like:2,love:1,dislike:0},replies:[]}]},{id:2,user:"Sebastian Estrada",text:"Es una excelente experiencia en su sitio. En sitios anteriores cada minuto me aparecían mensajes casi obligándome a realizar un pedido, aquí todo fluyó natural.",rating:5,date:"Hace 3 semanas",reactions:{like:8,love:0,dislike:0},replies:[{id:901,user:"Rente Confort",isBrand:!0,text:"Agradecemos mucho tu comentario Sebastian. Estamos a tus ordenes.",reactions:{like:1,love:0,dislike:0},replies:[]}]},{id:3,user:"Fernanda Lujan",text:"La decoración que realizaron en mi boda fue ¡Increíble! Muchas gracias por su muy buen servicio.",rating:5,date:"Hace 4 meses",reactions:{like:12,love:4,dislike:0},replies:[]},{id:4,user:"Pablo Santibañez",text:"Gran experiencia en todo momento, es la primera de muchas veces que realizaré un pedido con ustedes.",rating:4,date:"Hace 1 año",reactions:{like:2,love:1,dislike:0},replies:[]}],g;const V=1;function N(){const e=document.getElementById("reviews-container");e&&(e.innerHTML=v.map(a=>S(a)).join(""),setTimeout(()=>{v.forEach(a=>{const i=document.getElementById(`replies-container-${a.id}`);i&&i.classList.remove("open")})},50))}function S(e,a=!1){const i=e.rating?Array(e.rating).fill('<i class="bx bxs-star text-yellow-400 text-xs" aria-hidden="true"></i>').join(""):"",t=e.isBrand?'<span class="bg-blue-600 text-white text-[9px] px-1.5 py-0.5 rounded ml-1 font-bold uppercase tracking-wider" aria-hidden="true">Staff</span>':"",r=e.isBrand?"bg-royal-900 text-gold-400":"bg-gradient-to-br from-slate-200 to-slate-300 text-slate-600",l=e.isBrand?'<i class="bx bxs-crown" aria-hidden="true"></i>':e.user?e.user.charAt(0):"?";let o="",n="";return e.replies&&e.replies.length>0&&(n=`<button onclick="toggleReplies(${e.id})" class="text-xs font-semibold text-royal-600 hover:text-gold-500 ml-3 flex items-center gap-1" aria-expanded="false" aria-controls="replies-container-${e.id}"><i class='bx bx-subdirectory-right' aria-hidden="true"></i> Ver ${e.replies.length} respuesta(s)</button>`,o=`<div id="replies-container-${e.id}" class="nested-thread-container">${e.replies.map(u=>S(u,!0)).join("")}</div>`),a?`
      <div class="flex gap-3 mb-3 last:mb-0 bg-white p-3 rounded-lg border border-slate-100" role="article">
        <div class="w-6 h-6 rounded-full ${r} flex-shrink-0 flex items-center justify-center text-[10px] font-bold shadow-sm" aria-hidden="true">${l}</div>
        <div>
          <div class="flex items-center gap-2 mb-1"><h4 class="text-xs font-bold text-royal-900">${e.user} ${t}</h4></div>
          <p class="text-xs text-slate-600 leading-snug">${e.text}</p>
        </div>
      </div>`:`
      <div class="comment-card" role="article" aria-labelledby="comment-${e.id}">
        <div class="flex items-center justify-between mb-4 flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full ${r} flex items-center justify-center font-bold text-sm shadow-sm" aria-hidden="true">${l}</div>
            <div>
              <h4 id="comment-${e.id}" class="text-sm font-bold text-royal-900 leading-tight">${e.user} ${t}</h4>
              <div class="flex mt-0.5" aria-hidden="true">${i}</div>
            </div>
          </div>
          <span class="text-[10px] font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-full border border-slate-100">${e.date}</span>
        </div>
        <div class="card-content-scroll custom-scroll">
          <p class="text-sm text-slate-600 leading-relaxed">${e.text}</p>
          ${o}
        </div>
        <div class="mt-auto border-t border-slate-100 pt-3 flex-shrink-0">
          <div class="flex items-center justify-between">
            <div class="flex gap-2">${y(e.id,"like",e.reactions.like,"bx-like")}${y(e.id,"love",e.reactions.love,"bxs-heart")}</div>
            <div class="flex items-center">${n}<button onclick="toggleReplyForm(${e.id})" class="text-slate-400 hover:text-royal-600 text-lg ml-3 p-1 transition" title="Responder"><i class='bx bx-message-rounded-add' aria-hidden="true"></i></button></div>
          </div>
          <div id="reply-form-${e.id}" class="hidden mt-3 animate-fade-in-down" aria-hidden="true">
            <div class="flex gap-2">
              <input type="text" id="input-${e.id}" placeholder="Escribe tu respuesta..." class="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition" onfocus="pauseAutoScroll()" onblur="startAutoScroll()">
              <button onclick="submitReply(${e.id})" class="bg-royal-900 text-white w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gold-500 transition shadow-md" aria-label="Enviar respuesta"><i class='bx bx-send' aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
      </div>`}function y(e,a,i,t){return`<button onclick="react(${e}, '${a}', this)" class="reaction-btn flex items-center gap-1 text-slate-400 group" aria-pressed="false" aria-label="${a}"><i class='bx ${t} group-hover:scale-110 transition-transform' aria-hidden="true"></i><span class="text-xs font-medium">${i}</span></button>`}function z(){g&&clearInterval(g),g=setInterval(()=>{{const e=document.getElementById("reviews-container");e&&(e.scrollLeft+=V)}},30)}document.addEventListener("DOMContentLoaded",()=>{N(),z(),q(),h(),M(),Object.keys(d).length>0});
