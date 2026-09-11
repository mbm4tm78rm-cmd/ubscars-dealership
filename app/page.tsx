'use client';
import { useState } from 'react';

const cars = [
 { id:1, name:'2018 Dodge Charger SXT', price:'$6,000', year:2018, miles:'85,420', image:'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80', badge:'HOT DEAL', specs:'AWD • V6 • Clean Title' },
 { id:2, name:'2020 Mercedes G63 AMG', price:'$89,500', year:2020, miles:'32,100', image:'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?w=800&q=80', badge:'JUST ARRIVED', specs:'4MATIC • 577HP • Black' },
 { id:3, name:'2019 BMW 530i xDrive', price:'$18,900', year:2019, miles:'54,300', image:'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', badge:'LOW MILES', specs:'Turbo • Leather • Sunroof' },
 { id:4, name:'2021 Toyota Camry SE', price:'$16,500', year:2021, miles:'41,200', image:'https://images.unsplash.com/photo-1623869675781-80b34e094228?w=800&q=80', badge:'FUEL SAVER', specs:'2.5L • Apple CarPlay' },
 { id:5, name:'2017 Ford Mustang GT', price:'$19,900', year:2017, miles:'62,500', image:'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=800&q=80', badge:'V8 POWER', specs:'5.0L • 435HP • Manual' },
 { id:6, name:'2022 Lexus RX 350', price:'$32,000', year:2022, miles:'28,900', image:'https://images.unsplash.com/photo-1618843479313-40f8afb4d8?w=800&q=80', badge:'FAMILY SUV', specs:'AWD • Luxury • Low Miles' },
];

export default function Home(){
 const [q,setQ]=useState('');
 const wa='14352245247';
 const link=`https://wa.me/${wa}`;
 const filtered=cars.filter(c=>c.name.toLowerCase().includes(q.toLowerCase()));
 return(
 <div className="min-h-screen bg-[#050505] text-white selection:bg-red-600">
 <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800">
  <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
   <div className="flex items-center gap-2"><div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-black">U</div><span className="font-black tracking-widest">UBSCARS</span><span className="text-zinc-500 text-xs ml-2 hidden md:block">Europe & USA • Worldwide Shipping</span></div>
   <a href={link} target="_blank" className="bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-full font-bold text-xs">WhatsApp: +1 (435) 224-5247</a>
  </div>
 </header>

 <section className="max-w-7xl mx-auto px-4 pt-12 pb-6">
  <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">FIND YOUR<br/><span className="text-red-600">DREAM</span> RIDE</h1>
  <p className="text-zinc-400 mt-4 max-w-xl text-sm">Clean titles • Inspected • Financing available • Shipping across Europe & USA. Chat us on WhatsApp for video tour.</p>
  <div className="mt-8 bg-zinc-900 border border-zinc-800 p-1.5 rounded-full flex max-w-xl shadow-2xl">
   <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search Charger, G-Wagon, BMW, Camry..." className="flex-1 bg-transparent px-5 outline-none text-sm placeholder:text-zinc-600"/>
   <button className="bg-white text-black px-7 py-3 rounded-full font-bold text-sm">Search {filtered.length}</button>
  </div>
  <div className="flex gap-2 mt-4 text-[11px]"><span className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">✓ No Hidden Fees</span><span className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">✓ Europe & USA Delivery</span><span className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">✓ Financing</span></div>
 </section>

 <section className="max-w-7xl mx-auto px-4 pb-20">
  <div className="grid md:grid-cols-3 gap-5 mt-8">
   {filtered.map(car=>(
    <div key={car.id} className="group bg-zinc-900 rounded-[20px] overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all">
     <div className="relative"><img src={car.image} className="h-56 w-full object-cover group-hover:scale-105 transition duration-500"/><div className="absolute top-3 left-3 bg-red-600 text-[10px] px-2.5 py-1 rounded-full font-black tracking-widest">{car.badge}</div><div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur px-2.5 py-1 rounded-full text-[10px]">{car.year} • {car.miles} mi</div></div>
     <div className="p-5">
      <h3 className="font-bold text-[15px]">{car.name}</h3>
      <p className="text-zinc-500 text-xs mt-1">{car.specs}</p>
      <div className="flex justify-between items-center mt-5">
       <div><p className="text-[11px] text-zinc-500 uppercase tracking-widest">Price</p><p className="font-black text-xl">{car.price}</p></div>
       <a href={`${link}?text=Hello%20UBSCARS%20!%20I'm%20interested%20in%20${encodeURIComponent(car.name)}%20for%20${encodeURIComponent(car.price)}%20-%20Send%20me%20video%20tour`} target="_blank" className="bg-white text-black px-5 py-2.5 rounded-full font-bold text-xs hover:bg-zinc-200">WhatsApp →</a>
      </div>
     </div>
    </div>
   ))}
  </div>

  <div className="mt-16 bg-gradient-to-br from-red-600 to-red-800 rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
   <div><h2 className="text-3xl font-black">Need Financing? Europe & USA</h2><p className="text-red-100 text-sm mt-2 max-w-md">Get approved in 5 mins via WhatsApp. We ship to all EU countries + all 50 US states.</p></div>
   <a href={`${link}?text=Hello%20UBSCARS%2C%20I%20need%20financing%20for%20a%20car%20in%20Europe%20or%20USA`} target="_blank" className="bg-black text-white px-8 py-3.5 rounded-full font-bold text-sm">Apply on WhatsApp</a>
  </div>
 </section>

 <footer className="border-t border-zinc-900 text-center py-10 text-zinc-600 text-xs">
  <p className="font-bold text-white tracking-widest">UBSCARS</p>
  <p className="mt-2">Europe & USA • International Sales & Worldwide Shipping • +1 (435) 224-5247</p>
  <p className="mt-1">ubscars-dealership.vercel.app © 2026</p>
 </footer>
 </div>
 )
}
