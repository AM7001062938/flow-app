"use strict";(self.webpackChunkflow_app=self.webpackChunkflow_app||[]).push([[27,753],{753:(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});t(43);var i=t(3),n=t(216),r=t(97),l=t(579);const a=function(e){let{category:s,position:t,onClick:i}=e;return(0,l.jsx)("div",{style:{backgroundColor:(()=>{const e=["#D0FFDB","#EBF1C2","#E5D0FF"];return e[t%e.length]})()},className:"p-3 rounded-3xl cursor-pointer",onClick:i,children:(0,l.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,l.jsx)("div",{className:"h-[60px] xl:h-[80px] text-center",children:(0,l.jsx)("img",{src:s.icon,alt:s.name,className:"h-full min-w-[80px] object-contain"})}),(0,l.jsx)("div",{className:"mt-3 text-center font-poppinsMedium text-[0.825rem]",children:s.name})]},s.id)})},c=()=>{const e=(0,i.d4)(r.Jk),s=(0,n.Zp)();return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"flex justify-between items-center w-full",children:[(0,l.jsx)("div",{className:"font-poppinsSemiBold text-[1.1rem]",children:"Categories"}),(0,l.jsx)("button",{className:"text-[#217229] font-poppinsSemiBold text-[1.1rem]",onClick:()=>{s("/all-products")},children:"See All"})]}),(0,l.jsx)("div",{className:"flex flex-wrap gap-5 mt-5",children:e.map(((e,t)=>(0,l.jsx)("div",{className:"w-[12%] xl:w-[11%] shrink-0",children:(0,l.jsx)(a,{category:e,position:t,onClick:()=>{return t=e.id,void s("/products/".concat(t));var t}})},e.id)))})]})}},562:(e,s,t)=>{t.d(s,{A:()=>m});var i=t(379),n=(t(43),t(996)),r=t(672),l=t(486),a=t(579);const c=e=>(0,a.jsx)(n.c.DropdownIndicator,(0,i.A)((0,i.A)({},e),{},{children:(0,a.jsx)("img",{src:l.A.expand,alt:"dropdown arrow",style:{width:"15px",height:"15px"}})})),d=()=>null,o=()=>null,x=(e,s)=>({control:t=>(0,i.A)((0,i.A)({},t),{},{borderRadius:s,borderColor:"#B7BBC170",boxShadow:"none","&:hover":{borderColor:"#aaa"},cursor:"pointer",maxWidth:"100%",backgroundColor:e,color:"rgba(0,0,0,0.5)",padding:"0.1rem 0.1rem"}),dropdownIndicator:e=>(0,i.A)((0,i.A)({},e),{},{padding:"0px 8px"}),indicatorSeparator:e=>(0,i.A)((0,i.A)({},e),{},{display:"none"}),clearIndicator:e=>(0,i.A)((0,i.A)({},e),{},{display:"none"})}),m=e=>{let{options:s,placeholder:t,bg:i,radius:n,changeValue:l,value:m,idx:p,placement:h,multiple:u=!1}=e;return(0,a.jsx)(r.Ay,{components:{DropdownIndicator:c,ClearIndicator:d,IndicatorSeparator:o},styles:x(i,n),options:s,className:"text-start w-full",placeholder:t})}},402:(e,s,t)=>{t.d(s,{A:()=>r});t(43);var i=t(486),n=t(579);const r=function(e){let{showOffer:s=!1}=e;return(0,n.jsxs)("div",{className:"bg-white rounded-xl pt-1 ",children:[(0,n.jsxs)("div",{className:"px-1",children:[(0,n.jsxs)("div",{className:"flex items-center justify-center rounded-xl bg-[#EBEEF2] p-2 border relative",children:[(0,n.jsx)("img",{src:i.A.sampleLays,className:"w-[100px]"}),s&&(0,n.jsx)("div",{className:"font-poppinsLight text-[0.88rem] absolute bottom-1 right-1 bg-white px-3 py-1 rounded-3xl",children:"12% OFF"})]}),(0,n.jsx)("div",{className:"font-poppinsMedium text-[0.825rem] cutoff-text mx-3 mt-2",children:"Oman Chili Potato Chips Spicy Indian Flavour fidji fjdsijfidsjfisdifsdii"}),(0,n.jsx)("div",{className:" font-poppinsMedium text-[0.825rem] underline underline-[#217229] underline-offset-4 text-[#217229] mx-3 mt-2 cutoff-text-one",children:"Zoom Supermarket"}),(0,n.jsxs)("div",{className:"flex items-center gap-5 mx-3 mt-2",children:[(0,n.jsx)("div",{className:"font-poppinsMedium text-[#00000094] text-[0.825rem]",children:"48g"}),(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:i.A.star,className:"w-[13px]"})}),(0,n.jsx)("div",{className:"font-poppinsMedium text-[0.825rem]",children:"4.9"})]})]})]}),(0,n.jsxs)("div",{className:"mt-5 flex items-center justify-between p-3 px-3 bg-[#071F18] rounded-b-xl text-white",children:[(0,n.jsx)("div",{className:"font-poppinsSemiBold text-[0.825rem] ",children:"20 AED"}),(0,n.jsxs)("div",{className:"flex items-center gap-3",children:[(0,n.jsx)("button",{className:"text-[1rem]",children:" - "}),(0,n.jsx)("div",{children:" 0 "}),(0,n.jsx)("button",{className:"text-[1rem]",children:" + "})]})]})]})}},27:(e,s,t)=>{t.r(s),t.d(s,{default:()=>g});var i=t(43),n=t(753),r=t(562),l=t(402),a=t(579);const c=[1,2,3,4,5,6,7,8,9,10];const d=function(){const e=(0,i.useRef)(null),[s,t]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{const t=e=>{s&&(Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.currentTarget.scrollLeft+=2*e.deltaX:(e.preventDefault(),e.currentTarget.scrollLeft+=2*e.deltaY))},i=e.current;return i&&i.addEventListener("wheel",t,{passive:!1}),()=>{i&&i.removeEventListener("wheel",t)}}),[s]),(0,a.jsxs)("div",{className:"px-10",children:[(0,a.jsxs)("div",{className:"flex justify-between ",children:[(0,a.jsx)("div",{className:"font-poppinsSemiBold text-[1.1rem] text-white",children:"Frequent Buys"}),(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsx)(r.A,{bg:"#FFFFFF",radius:"27px",placeholder:"Vendors"}),(0,a.jsx)(r.A,{bg:"#FFFFFF",radius:"27px",placeholder:"Category"})]})]}),(0,a.jsx)("div",{onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),ref:e,className:"mt-5 flex gap-5 overflow-x-scroll scroll-smooth",children:c.map(((e,s)=>(0,a.jsx)("div",{className:"basis-[14rem] shrink-0",children:(0,a.jsx)(l.A,{})})))})]})};const o=function(e){let{market:s,position:t}=e;return(0,a.jsxs)("div",{className:"h-full text-center",children:[(0,a.jsx)("div",{className:" flex items-center justify-center",children:(0,a.jsx)("div",{className:" w-[95px] h-[95px]  overflow-hidden rounded-full flex items-baseline justify-center ",children:(0,a.jsx)("img",{src:s.icon,alt:s.name,className:" w-full h-full object-cover"})})}),(0,a.jsx)("div",{className:"mt-2 font-poppinsMedium text-[1rem] text-center",children:s.name}),(0,a.jsx)("div",{className:"font-poppinsMedium text-[#00000073] text-[0.825rem] mt-2 text-center",children:s.dur})]})};var x=t(486),m=t(475);const p=[{icon:x.A.agile,name:"Agile Store",dur:"12 mins"},{icon:x.A.thegreen,name:"7/11 Store",dur:"12 mins"},{icon:x.A.nexis,name:"Nexis Food",dur:"12 mins"},{icon:x.A.agile,name:"Agile Store",dur:"12 mins"},{icon:x.A.thegreen,name:"7/11 Store",dur:"12 mins"},{icon:x.A.nexis,name:"Nexis Food",dur:"12 mins"},{icon:x.A.agile,name:"Agile Store",dur:"12 mins"},{icon:x.A.thegreen,name:"7/11 Store",dur:"12 mins"},{icon:x.A.nexis,name:"Nexis Food",dur:"12 mins"},{icon:x.A.agile,name:"Agile Store",dur:"12 mins"},{icon:x.A.thegreen,name:"7/11 Store",dur:"12 mins"},{icon:x.A.nexis,name:"Nexis Food",dur:"12 mins"},{icon:x.A.agile,name:"Agile Store",dur:"12 mins"},{icon:x.A.thegreen,name:"7/11 Store",dur:"12 mins"},{icon:x.A.nexis,name:"Nexis Food",dur:"12 mins"},{icon:x.A.agile,name:"Agile Store",dur:"12 mins"},{icon:x.A.thegreen,name:"7/11 Store",dur:"12 mins"},{icon:x.A.nexis,name:"Nexis Food",dur:"12 mins"},{icon:x.A.agile,name:"Agile Store",dur:"12 mins"},{icon:x.A.thegreen,name:"7/11 Store",dur:"12 mins"}];const h=function(){return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-between items-center w-full",children:[(0,a.jsx)("div",{className:"font-poppinsSemiBold text-[1.1rem]",children:"Supermarkets Near You"}),(0,a.jsx)(m.N_,{to:"nearby-vendors",children:(0,a.jsx)("button",{className:"text-[#217229] font-poppinsSemiBold text-[1.1rem]",children:"See All"})})]}),(0,a.jsx)("div",{className:"flex flex-wrap gap-6 justify-center xl:gap-3 xl:justify-start mt-5 ",children:p.map(((e,s)=>(0,a.jsx)("div",{className:" w-[12%] xl:w-[9%] ",children:(0,a.jsx)(o,{market:e,position:s})})))})]})};const u=function(e){let{position:s}=e;const t=["#B8BE8E","#ECC752","#E9D9FF"],i=["#636C33","#6A5B34","#8A76A5"],n=()=>i[s%i.length];return(0,a.jsxs)("div",{style:{backgroundColor:t[s%t.length]},className:" rounded-xl w-full tracking-wide mx-3 overflow-hidden relative",children:[(0,a.jsxs)("div",{className:"flex justify-between items-start",children:[(0,a.jsx)("div",{style:{backgroundColor:n()},className:" px-6 py-2 -skew-x-[30deg] relative -left-2",children:(0,a.jsx)("div",{className:"text-white font-poppinsSemiBold text-[0.8rem] skew-x-[30deg] ms-1",children:"20% OFF"})}),(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"mt-3 me-4",children:(0,a.jsx)("img",{src:x.A.cans,className:"w-[100px]",alt:"product"})})})]}),(0,a.jsxs)("div",{className:"flex justify-between mt-2",children:[(0,a.jsx)("div",{children:(0,a.jsx)("img",{src:x.A.meals,className:"w-[60px]"})}),(0,a.jsx)("div",{className:"self-center relative top-4",children:(0,a.jsxs)("button",{style:{backgroundColor:n()},className:"font-poppinsMedium text-[0.825rem] text-white py-3 flex items-center gap-2 px-5 rounded-l-lg",children:[(0,a.jsx)("div",{children:"View Products"}),(0,a.jsx)("img",{src:x.A.rightArrow,alt:"view products",className:"w-[20px]"})]})})]}),(0,a.jsxs)("div",{className:"absolute left-[65px] top-[30%] w-[60%] ",children:[(0,a.jsx)("div",{className:"font-poppinsSemiBold text-[#0D0D0DB2] text-[0.825rem]",children:"Sleepy owl"}),(0,a.jsx)("div",{className:"font-poppinsSemiBold text-[#0D0D0D75] text-[0.78rem] mt-[2px] underline underline-[#0D0D0DB2] underline-offset-[8px]",children:"PREMIUM INSTANT COFFEE"}),(0,a.jsx)("div",{className:"mt-[8px] font-poppinsMedium text-[#0D0D0DB2] text-[0.7rem]",children:"Premium cup of coffee ready in seconds."})]})]})},j=[1,2,3,4,5,6,7];const f=function(){const[e,s]=(0,i.useState)(!1),t=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const s=s=>{e&&(Math.abs(s.deltaX)>Math.abs(s.deltaY)?s.currentTarget.scrollLeft+=2*s.deltaX:(s.preventDefault(),s.currentTarget.scrollLeft+=2*s.deltaY))},i=t.current;return i&&i.addEventListener("wheel",s,{passive:!1}),()=>{i&&i.removeEventListener("wheel",s)}}),[e]),(0,a.jsx)("div",{className:"px-3",children:(0,a.jsx)("div",{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),ref:t,className:"flex gap-5 overflow-x-scroll scroll-smooth",children:j.map(((e,s)=>(0,a.jsx)("div",{className:"w-[390px] shrink-0",children:(0,a.jsx)(u,{position:s})})))})})},v=["Supermarket","Party Essentials","Homecare","Grab & Go","Ethnic Products","Organic","Stationery","Pharmacies","Fruits","Groceries","Flower shop","Electronics","Pet Shops","Vegetables","Butchery"];const N=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"pt-12 pb-5 w-[95%] mx-auto tracking-wide",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsxs)("div",{className:"flex gap-10",children:[(0,a.jsxs)("div",{className:"w-1/2 pe-4",children:[(0,a.jsx)("div",{className:"font-poppinsSemiBold text-[1.25rem]",children:"Short Links"}),(0,a.jsxs)("div",{className:"flex mt-2 gap-3",children:[(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("div",{className:"font-poppinsSemiBold text-[#040505] text-[0.825rem]",children:"Resources"}),(0,a.jsxs)("div",{className:"font-poppinsLight text-[#000000CF] text-[0.9rem] mt-2 flex flex-col gap-2",children:[(0,a.jsx)("div",{children:"Documentation"}),(0,a.jsx)("div",{children:"Delivery"}),(0,a.jsx)("div",{children:"Press Conferences"}),(0,a.jsx)("div",{children:"Privacy Policy"}),(0,a.jsx)("div",{children:"Terms & Condition"})]})]}),(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("div",{className:"font-poppinsSemiBold text-[#040505] text-[0.825rem]",children:"Company"}),(0,a.jsxs)("div",{className:"font-poppinsLight text-[#000000CF] text-[0.9rem] mt-2 flex flex-col gap-2",children:[(0,a.jsx)("div",{children:"About"}),(0,a.jsx)("div",{children:"Contact"}),(0,a.jsx)("div",{children:"Press Conferences"}),(0,a.jsx)("div",{children:"Vendor"})]})]}),(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("div",{className:"font-poppinsSemiBold text-[#040505] text-[0.885rem]",children:"Office Location"}),(0,a.jsxs)("div",{className:"font-poppinsLight text-[#000000CF] text-[0.9rem] mt-2 flex flex-col gap-2",children:[(0,a.jsx)("div",{children:"Circle Technology Pvt Ltd. 810, Iris Tech Park, Sector 48, Gurugram, Haryana - 122018"}),(0,a.jsx)("div",{children:"Circle Technology Pvt Ltd. 810, Iris Tech Park, Sector 48, Gurugram, Haryana - 122018"})]})]})]})]}),(0,a.jsxs)("div",{className:"w-1/2",children:[(0,a.jsx)("div",{className:"font-poppinsSemiBold text-[1.25rem]",children:"Categories"}),(0,a.jsx)("div",{className:"mt-2 flex flex-wrap items-start",children:v.map(((e,s)=>(0,a.jsx)("div",{className:"font-poppinsLight text-[#000000CF] text-[0.9rem] mt-2 w-[33%] text-start",children:e})))})]})]})}),(0,a.jsx)("div",{className:"border border-[#00000052] mt-8"}),(0,a.jsxs)("div",{className:"mt-8 flex justify-between items-start",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)("span",{children:(0,a.jsx)("img",{src:x.A.blacktick,alt:"Available on all platforms",className:"w-[20px]"})}),(0,a.jsx)("span",{className:"font-poppinsLight text-[#040505] text-[0.88rem]",children:"Available on all platforms"})]}),(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsxs)("div",{className:"flex gap-2 items-center px-5 border border-[#00000052] py-2 rounded-3xl",children:[(0,a.jsx)("span",{children:(0,a.jsx)("img",{src:x.A.appleicon,alt:"ios",className:"w-[20px]"})}),(0,a.jsx)("span",{className:"font-poppinsMedium text-[0.88rem] text-[#040505]",children:"iOS"})]}),(0,a.jsxs)("div",{className:"flex gap-2 items-center px-5 border border-[#00000052] py-2 rounded-3xl",children:[(0,a.jsx)("span",{children:(0,a.jsx)("img",{src:x.A.androidicon,alt:"android",className:"w-[20px]"})}),(0,a.jsx)("span",{className:"font-poppinsMedium text-[0.88rem] text-[#040505]",children:"Android"})]})]})]})]}),(0,a.jsx)("div",{style:{background:"linear-gradient(70.97deg, #3F32FF 0%, #8A12FF 111.98%)"},className:"py-4",children:(0,a.jsxs)("div",{className:"w-[95%] mx-auto flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"flex gap-2 items-center text-white font-poppinsMedium text-[0.88rem]",children:[(0,a.jsx)("div",{className:" w-[20px] h-[20px] border-2 border-white rounded-full flex items-center justify-center",children:"c"}),(0,a.jsx)("div",{children:"2024 Circle Inc."})]}),(0,a.jsxs)("div",{className:"flex items-center gap-5",children:[(0,a.jsx)("img",{src:x.A.instagram,alt:"instagram",className:"w-[20px]"}),(0,a.jsx)("img",{src:x.A.facebook,alt:"facebook",className:"w-[20px]"}),(0,a.jsx)("img",{src:x.A.twitter,alt:"twitter",className:"w-[20px]"})]})]})})]})},g=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"pb-8 w-[90%] mx-auto",children:[(0,a.jsx)("div",{className:"mt-8",children:(0,a.jsx)(n.default,{})}),(0,a.jsxs)("div",{className:"mt-8 bg-[#0C362A] pt-12",children:[(0,a.jsx)(d,{}),(0,a.jsx)(m.N_,{to:"trending-products",children:(0,a.jsx)("button",{className:"bg-[#071F18] text-white font-inter font-semibold text-[1rem] mt-5 p-3 text-center w-full",children:"See More"})})]}),(0,a.jsx)("div",{className:"mt-5 p-2",children:(0,a.jsx)(h,{})}),(0,a.jsx)("div",{className:"mt-10 overflow-x-scroll",children:(0,a.jsx)(f,{})})]}),(0,a.jsx)("div",{className:"bg-[#F5F2F7] mt-10",children:(0,a.jsx)(N,{})})]})}}]);
//# sourceMappingURL=27.0fa005f1.chunk.js.map