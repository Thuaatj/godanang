"use client";

import { useEffect, useRef, useState } from "react";

type FormType = "villa" | "tour" | null;

interface ChooseSectionProps {
  activeForm: FormType;
  onChoose: (type: FormType) => void;
}

export default function ChooseSection({ activeForm, onChoose }: ChooseSectionProps) {

  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible,setVisible] = useState(false);
  const [hovered,setHovered] = useState<FormType>(null);

  useEffect(()=>{

    const observer = new IntersectionObserver(
      ([entry])=>{
        if(entry.isIntersecting) setVisible(true)
      },
      {threshold:0.2}
    )

    if(sectionRef.current) observer.observe(sectionRef.current)

    return ()=>observer.disconnect()

  },[])


  const cards = [

{
type:"villa" as const,
icon:"🏡",
title:"Chia sẻ villa / homestay",
desc:"Bạn vừa ở một villa đẹp, homestay xinh hay resort đáng trải nghiệm tại Đà Nẵng? Hãy chia sẻ để cộng đồng biết đến.",
btnLabel:"Chia sẻ Villa",
image:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070"
},

{
type:"tour" as const,
icon:"🧭",
title:"Chia sẻ tour du lịch",
desc:"Bạn vừa tham gia một tour thú vị tại Bà Nà Hills, Hội An hay Cù Lao Chàm? Hãy chia sẻ để mọi người có chuyến đi tuyệt vời hơn.",
btnLabel:"Chia sẻ Tour",
image:"https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070"
}

]


return (

<section
id="choose-section"
ref={sectionRef}
style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
minHeight:"600px",
position:"relative",
overflow:"visible"
}}
>

{/* WAVE TOP */}

  <svg
  viewBox="0 0 1440 110"
  preserveAspectRatio="none"
  style={{
    position: "absolute",
    top: 520,
    left: 0,
    width: "100%",
    height: "110px",
    zIndex: 10,
  }}
>
  <path
    d="M0,0 C300,100 900,-40 1440,40 L1440,110 L0,110 Z"
    fill="#ffffff"
  />
</svg>

<style>{`

.choose-card{
position:relative;
display:flex;
align-items:center;
justify-content:center;
padding:60px;
cursor:pointer;
overflow:hidden;
color:white;
transition:all .5s ease;
}

.choose-bg{
position:absolute;
inset:0;
background-size:cover;
background-position:center;
transition:transform 1s ease;
}

.choose-overlay{
position:absolute;
inset:0;
background:linear-gradient(to top,rgba(0,0,0,0.8),rgba(0,0,0,0.3));
}

.choose-card:hover .choose-bg{
transform:scale(1.1);
}

.choose-content{
position:relative;
max-width:420px;
text-align:center;
z-index:2;
}

.choose-btn{
margin-top:25px;
padding:12px 26px;
border-radius:40px;
border:none;
background:white;
color:#111;
font-weight:600;
cursor:pointer;
transition:all .3s;
}

.choose-btn:hover{
transform:translateY(-3px);
box-shadow:0 10px 30px rgba(0,0,0,0.25);
}

@media(max-width:768px){

#choose-section{
grid-template-columns:1fr;
}

.choose-card{
min-height:420px;
padding:40px 30px;
}

}

@media(max-width:768px){

#choose-section{
grid-template-columns:1fr;
}

.choose-card{
min-height:420px;
padding:40px 30px;
}

/* ẨN WAVE SVG MOBILE */

#choose-section svg{
display:none;
}

}
`}</style>


{cards.map((card)=>{

const isActive = activeForm===card.type
const isHover = hovered===card.type

return(

<div
key={card.type}
className="choose-card"
onClick={()=>onChoose(card.type)}
onMouseEnter={()=>setHovered(card.type)}
onMouseLeave={()=>setHovered(null)}
>

<div
className="choose-bg"
style={{
backgroundImage:`url(${card.image})`
}}
/>

<div className="choose-overlay"/>

<div
className="choose-content"
style={{
opacity:visible?1:0,
transform:visible?"translateY(0)":"translateY(30px)",
transition:"all .7s ease"
}}
>

<div style={{
fontSize:48,
marginBottom:20
}}>
{card.icon}
</div>

<h3 style={{
fontSize:30,
fontWeight:700,
marginBottom:15
}}>
{card.title}
</h3>

<p style={{
fontSize:15,
lineHeight:1.7,
opacity:0.9
}}>
{card.desc}
</p>

<button className="choose-btn">
{isActive ? "✓ Đang chọn" : `${card.btnLabel} →`}
</button>

</div>

</div>

)

})}

</section>

)

}