(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[374],{47004:function(e,t,r){Promise.resolve().then(r.bind(r,60264)),Promise.resolve().then(r.bind(r,12504)),Promise.resolve().then(r.bind(r,98254)),Promise.resolve().then(r.bind(r,25109)),Promise.resolve().then(r.bind(r,61909)),Promise.resolve().then(r.bind(r,28680)),Promise.resolve().then(r.bind(r,8265)),Promise.resolve().then(r.bind(r,90798)),Promise.resolve().then(r.bind(r,11099)),Promise.resolve().then(r.bind(r,78973)),Promise.resolve().then(r.bind(r,97590)),Promise.resolve().then(r.bind(r,51984)),Promise.resolve().then(r.bind(r,91423)),Promise.resolve().then(r.bind(r,16769)),Promise.resolve().then(r.bind(r,84036)),Promise.resolve().then(r.bind(r,59559)),Promise.resolve().then(r.bind(r,56775)),Promise.resolve().then(r.bind(r,72214)),Promise.resolve().then(r.bind(r,58648)),Promise.resolve().then(r.bind(r,20270)),Promise.resolve().then(r.bind(r,96168)),Promise.resolve().then(r.bind(r,95944)),Promise.resolve().then(r.bind(r,29958)),Promise.resolve().then(r.bind(r,3868)),Promise.resolve().then(r.bind(r,59337)),Promise.resolve().then(r.bind(r,36260)),Promise.resolve().then(r.bind(r,45660)),Promise.resolve().then(r.bind(r,83312)),Promise.resolve().then(r.bind(r,2436)),Promise.resolve().then(r.bind(r,27786)),Promise.resolve().then(r.bind(r,42978)),Promise.resolve().then(r.bind(r,11498)),Promise.resolve().then(r.bind(r,1930)),Promise.resolve().then(r.bind(r,51646)),Promise.resolve().then(r.bind(r,18626)),Promise.resolve().then(r.bind(r,65336)),Promise.resolve().then(r.bind(r,12555)),Promise.resolve().then(r.t.bind(r,38173,23)),Promise.resolve().then(r.t.bind(r,231,23)),Promise.resolve().then(r.bind(r,8270)),Promise.resolve().then(r.bind(r,92561))},62757:function(e,t,r){"use strict";r.d(t,{a:function(){return v},e_:function(){return j},cm:function(){return b}});var l=r(57437),n=r(2265),s=r(22109),i=function(e){let{image:t,index:r}=e,n=(0,s.ef)("".concat(t));return(0,l.jsx)("div",{className:"keen-slider__slide number-slide-".concat(r),children:(0,l.jsx)("img",{src:n,alt:"gallery-slide",className:"h-dvh w-full object-cover"})})},a=function(e){let{arr:t}=e;return(0,l.jsx)(l.Fragment,{children:t.map((e,t)=>(0,l.jsx)(i,{image:"".concat(e),index:t},t))})},c=function(e){let{id:t,title:r,text:n,image:i}=e,a=(0,s.ef)("".concat(i));return n&&(0,s.S1)(n),(0,l.jsxs)("div",{className:"keen-slider__slide flex h-72 gap-5",children:[(0,l.jsx)("div",{className:"h-full w-1/3",children:(0,l.jsx)("img",{src:a,alt:r,className:"h-full w-full rounded object-cover"})}),(0,l.jsxs)("div",{className:"flex h-full w-2/3 flex-col gap-5",children:[(0,l.jsx)("h4",{className:"text-xl text-white",children:r}),n&&(0,l.jsx)("div",{className:"w-2/3 text-base text-white"})]})]})},o=function(e){let{arr:t,ctype:r}=e;return(0,l.jsx)(l.Fragment,{children:t.map(e=>(0,n.createElement)(c,{...e,key:e.id}))})},d=r(87138),h=function(e){let{title:t,image:r,subtitle:n}=e,i=(0,s.ef)("".concat(r));return(0,l.jsxs)(d.default,{href:"",className:"keen-slider__slide flex h-auto flex-col gap-5",children:[(0,l.jsx)("div",{className:"h-48 w-full",children:(0,l.jsx)("img",{src:i,alt:t,className:"h-full w-full rounded-2xl object-cover"})}),(0,l.jsxs)("div",{className:"flex h-full w-full flex-col gap-5",children:[(0,l.jsx)("h4",{className:"text-xl text-white",children:t}),(0,l.jsx)("div",{className:"text-base text-white",children:n})]})]})},u=function(e){let{arr:t}=e;return(0,l.jsx)(l.Fragment,{children:t.map((e,t)=>{var r;return(null===(r=e.status)||void 0===r?void 0:r.hidden)?null:(0,l.jsx)(h,{...e},e.id||t)})})},x=function(e){let{image:t}=e,r=(0,s.ef)("".concat(t));return(0,l.jsx)("div",{className:"keen-slider__slide w-full overflow-hidden",children:(0,l.jsx)("img",{src:r,alt:"product slide",className:"h-full w-full rounded-xl object-cover"})})},m=function(e){let{arr:t}=e;return(0,l.jsx)(l.Fragment,{children:t.map((e,t)=>(0,l.jsx)(x,{image:"".concat(e),index:t},t))})};let f=(e,t)=>{switch(t){case"gallery":return(0,l.jsx)(a,{arr:e});case"info":return(0,l.jsx)(o,{arr:e});case"feed":return(0,l.jsx)(u,{arr:e});case"productinfo":return(0,l.jsx)(m,{arr:e});default:return null}};var v=n.forwardRef((e,t)=>{let{arr:r,type:n}=e;return(0,l.jsx)("div",{ref:t,className:"keen-slider",children:f(r,n)})}),b=(0,n.forwardRef)((e,t)=>{let{arr:r}=e;return(0,l.jsx)("div",{ref:t,className:"keen-slider thumbnail",children:r.map((e,t)=>(0,l.jsxs)("div",{className:"keen-slider__slide number-slide".concat(t+1," text-white"),children:[e.title&&(0,l.jsx)("button",{className:"bg-cyan-600",children:e.title}),!e.title&&(0,l.jsx)("img",{src:(0,s.ef)("".concat(e)),alt:"slide",className:"h-6 w-full overflow-hidden rounded-lg object-cover md:h-16"})]},t))})}),j=e=>{let{loaded:t,instanceRef:r,currentSlide:n,perPage:s=1}=e;if(!t||!r.current)return null;let i=r.current.track.details.slides.length,a=s?Math.ceil(i/s):i;return console.log(a),(0,l.jsx)("div",{className:"dots flex gap-2",children:Array.from({length:a},(e,t)=>(0,l.jsx)("button",{onClick:()=>{var e;null===(e=r.current)||void 0===e||e.moveToIdx(t*s)},className:(n===t*s?"border-cyan-600":"border-white/60")+" w-6 rounded border-2"},t))})}},8270:function(e,t,r){"use strict";r.d(t,{default:function(){return k}});var l=r(57437),n=r(62757),s=r(22109),i=r(92561),a=r(95199);r(81984);var c=r(94243),o=r(97209),d=r(27934),h=r(33666),u=r(34191),x=r(60603),m=r(55448),f=r(2265),v=r(87138),b=r(43781),j=r(41942),p=e=>{let{file:t}=e,{logo:r,link:n,title:s}=function(e){var t;let r=null===(t=e.fileUrl.split(".").pop())||void 0===t?void 0:t.toLowerCase(),n=(0,l.jsx)(j.mGS,{});switch(r){case"pdf":n=(0,l.jsx)(b.oZT,{});break;case"svg":default:n=(0,l.jsx)(j.mGS,{});break;case"jpg":case"jpeg":case"png":n=(0,l.jsx)(j.sYB,{})}return{logo:n,link:e.fileUrl,title:e.title}}(t);return(0,l.jsxs)(v.default,{href:"https://proftradelab.ru"+n,target:"_blank",className:"flex cursor-pointer items-center justify-start gap-6",children:[r,s]})},w=r(83521),g=r(8127),N=e=>{let{files:t}=e;return(0,l.jsx)("div",{className:"w-full max-w-[260px] rounded-small bg-white/10 px-1 py-2",children:(0,l.jsx)(w.X,{children:t.map((e,t)=>(0,l.jsx)(g.R,{classNames:{base:"bg-white/10 hover:!bg-white/30",title:"text-white/80 hover:text-white"},children:(0,l.jsx)(p,{file:e},t)},"index"))})})},P=function(e){let{product:t}=e;return(0,l.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,l.jsx)(s.Dx,{children:t.title}),(0,l.jsx)("div",{className:"flex gap-3",children:t.brand.map((e,t)=>(0,l.jsx)(o.z,{className:"cursor-default bg-white/30 text-white",children:e.title},t))}),t.text&&(0,l.jsx)("div",{className:"text-white",children:(0,l.jsx)(d.o,{hideScrollBar:!0,className:"h-[200px] w-[300px]",children:(0,l.jsx)(c.Z,{content:t.text})})}),(0,l.jsx)("div",{children:(0,l.jsx)(h.n,{"aria-label":"Options",radius:"full",classNames:{tabList:"!bg-white/10 !text-white/80",cursor:"!bg-white/30 !text-white",tabContent:"group-data-[selected=true]:text-white !text-white/80"},children:t.complexTabs.map(e=>(0,l.jsx)(u.r,{title:e.title,className:"!text-white/60",children:(0,l.jsx)(x.w,{className:"bg-black text-white",children:(0,l.jsxs)(m.G,{children:[e.description&&(0,l.jsx)(c.Z,{content:e.description}),!!e.files.length&&(0,l.jsx)(N,{files:e.files})]})})},e.id))})})]})},y=r(51446),k=e=>{let{product:t}=e,[r,c]=f.useState(!0),[o,d]=(0,a.E)({initial:0,slides:{perView:1,spacing:24}}),[h]=(0,a.E)({initial:0,slides:{perView:6,spacing:10}},[e=>{function t(t){e.slides[t].classList.add("active")}e.on("created",()=>{d.current&&(t(e.track.details.rel),e.slides.forEach((e,t)=>{e.addEventListener("click",()=>{d.current&&d.current.moveToIdx(t)})}),d.current.on("animationStarted",r=>{e.slides.forEach(e=>{e.classList.remove("active")});let l=r.animator.targetIdx||0;t(r.track.absToRel(l)),e.moveToIdx(Math.min(e.track.details.maxIdx,l))}))})}]);return f.useEffect(()=>{let e=setTimeout(()=>{c(!1)},1e3);return()=>clearTimeout(e)},[]),(0,l.jsxs)(s.$0,{className:"pt-36",children:[(0,l.jsx)(i.default,{}),(0,l.jsxs)("div",{className:"flex flex-col gap-12 py-12 md:flex-row",children:[(0,l.jsx)("div",{className:"flex w-full flex-col gap-6 md:w-1/2",children:r&&t.gallery?(0,l.jsx)(y.c,{label:"Loading...",color:"white",classNames:{label:"text-white"}}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.a,{arr:t.gallery,type:"productinfo",ref:o}),(0,l.jsx)(n.cm,{arr:t.gallery,ref:h})]})}),(0,l.jsx)("div",{className:"w-full md:w-1/2",children:(0,l.jsx)(P,{product:t})})]})]})}},22109:function(e,t,r){"use strict";r.d(t,{zx:function(){return i},dk:function(){return x},r_:function(){return h.Z},ef:function(){return d},$0:function(){return a},Dx:function(){return c},FL:function(){return u},S1:function(){return o.S}});var l=r(57437);r(66648),r(87138);var n=r(56800),s=r.n(n);function i(e){let{children:t,primary:r,secondary:n,className:i,as:a,...c}=e,o=s()({"bg-cyan-600 px-3 py-2 rounded-lg":r,"":n,className:i});return(0,l.jsx)(a||"button",{className:o,...c,children:t})}var a=function(e){let{children:t,className:r}=e;return(0,l.jsx)("section",{className:"".concat(r," py-12"),children:(0,l.jsx)("div",{className:"xl:w-9/10 2xl:w-8/10 mx-auto w-full sm:w-3/4 md:w-11/12 lg:w-10/12",children:t})})},c=function(e){let{children:t}=e;return(0,l.jsx)("h4",{className:"text-2xl font-bold text-white/80",children:t})},o=r(14431),d=function(e){return"".concat("https://proftradelab.ru"+e)},h=r(94243),u=e=>{let t;let r=!1;function l(){clearTimeout(t)}function n(){clearTimeout(t),r||(t=setTimeout(()=>{e.next()},3e3))}e.on("created",()=>{e.container.addEventListener("mouseover",()=>{r=!0,l()}),e.container.addEventListener("mouseout",()=>{r=!1,n()}),n()}),e.on("dragStarted",l),e.on("animationEnded",n),e.on("updated",n)},x=function(e){let{children:t}=e;return(0,l.jsx)("p",{className:"text-base font-normal text-white/60",children:t})}},94243:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var l=r(57437);r(2265);var n=r(53463),s=r(27165),i=r(22053),a=r(28382),c=r(9100),o=r(67022),d=r(51161),h=r(14431),u=e=>{let{content:t}=e,{type:r,content:u}=(0,h.S)(t);if("text"===r)return(0,l.jsx)("div",{children:u});if("html"===r)return(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:u}});if("table"===r)try{let{tables:e,otherHtml:t}=function(e){let t=new DOMParser().parseFromString(e,"text/html"),r=Array.from(t.querySelectorAll("table"));if(0===r.length)return{tables:[],otherHtml:e};let l=r.map(e=>{let t=[],r=[];return e.querySelectorAll("tr").forEach((l,n)=>{let s=Array.from(l.cells).map(e=>{var t;return(null===(t=e.textContent)||void 0===t?void 0:t.trim())||""});0===n&&e.querySelector("thead")?t.push(...s):r.push(s)}),0===t.length&&r.length>0&&t.push(...r.shift()),{headers:t,rows:r}});return r.forEach(e=>e.remove()),{tables:l,otherHtml:t.body.innerHTML}}(u);return(0,l.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,n.ZP)(t),e.map((e,t)=>(0,l.jsxs)(s.b,{classNames:{wrapper:"!bg-white/10",th:"text-white bg-white/30"},children:[(0,l.jsx)(i.J,{columns:e.headers.map((e,t)=>({key:"col-".concat(t),label:e})),children:e=>(0,l.jsx)(a.j,{children:e.label},e.key)}),(0,l.jsx)(c.y,{items:e.rows.map((e,t)=>{let r={key:"row-".concat(t)};return e.forEach((e,t)=>{r["col-".concat(t)]=e}),r}),children:e=>(0,l.jsx)(o.g,{children:t=>(0,l.jsx)(d.X,{children:e[t]})},e.key)})]},t))]})}catch(e){return console.error("Error parsing table:",e),(0,l.jsx)("div",{children:"Error rendering table."})}return null}},14431:function(e,t,r){"use strict";r.d(t,{S:function(){return s}});var l=r(11838),n=r.n(l);function s(e){return/<table[\s\S]*<\/table>/i.test(e)?{type:"table",content:e}:/<\/?[a-z][\s\S]*>/i.test(e)?{type:"html",content:n().sanitize(e)}:{type:"text",content:e}}},92561:function(e,t,r){"use strict";r.d(t,{default:function(){return b}});var l=r(57437),n=r(16463),s=r(2265);let i=(e,t)=>{for(let r of e){if(r.url===t)return r;let e=i(r.subcategories,t);if(e)return e}return null},a=(e,t)=>{for(let r of e){let e=r.products.find(e=>e.url===t);if(e)return e;let l=a(r.subcategories,t);if(l)return l}return null};async function c(){let e=await fetch("".concat("https://proftradelab.ru/api/","catalog"),{headers:{"X-API-KEY":"aWdcMbi5yMlx4lCBa8RUj"},next:{revalidate:3600}});if(!e.ok)throw Error("Failed to fetch data");return e.json()}var o=r(82058),d=r(31873),h=r(92692),u=r(8284),x=r(77372),m=r(2428),f=r(94675);let v=(e,t)=>{let r=e.split("/").filter(Boolean),l=[{label:"Главная",href:"/"}],n="";return r.forEach((e,r)=>{if("/catalog"===(n+="/".concat(e))){l.push({label:"Каталог",href:"/catalog/"});return}let s="".concat(n,"/"),c=i(t.categories,s),o=a(t.categories,s),d=c?c.title:o?o.title:e;l.push({label:d,href:n})}),l};var b=()=>{let e=(0,n.usePathname)(),[t,r]=(0,s.useState)(null);if((0,s.useEffect)(()=>{(async()=>{try{let e=await c();r(e)}catch(e){console.error("Failed to fetch catalog data:",e)}})()},[]),!t)return(0,l.jsx)("div",{className:"text-white/60",children:"Loading..."});let i=v(e,t);return(0,l.jsx)(o.$,{underline:"hover",variant:"light",maxItems:3,itemsBeforeCollapse:1,itemsAfterCollapse:2,renderEllipsis:e=>{let{items:t,ellipsisIcon:r,separator:n}=e;return(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsxs)(d.F,{classNames:{content:"bg-black py-1 px-1 border border-white/30 !text-white/80",trigger:"bg-white/10 !text-white border border-white/10",backdrop:"!text-white/60 "},children:[(0,l.jsx)(h.S,{children:(0,l.jsx)(u.A,{isIconOnly:!0,className:"h-6 w-6 min-w-6",size:"sm",variant:"flat",children:r})}),(0,l.jsx)(x.a,{"aria-label":"Routes",children:t.map((e,t)=>(0,l.jsx)(m.W,{href:e.href,className:"hover:!bg-white/10 hover:!text-white",children:e.children},t))})]}),n]})},children:i.map((e,t)=>(0,l.jsx)(f.d,{href:e.href,classNames:{item:"text-white/60 last:text-white",separator:"text-white/60"},children:e.label},t))})}}},function(e){e.O(0,[702,95,699,779,432,16,8,971,23,744],function(){return e(e.s=47004)}),_N_E=e.O()}]);