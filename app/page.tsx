'use client';
import { useState } from 'react';
const cars = [
 { id:1, name:'2018 Dodge Charger SXT', price:'$6,000', miles:'85,420 mi', image:'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', badge:'HOT DEAL', specs:'AWD • V6 • Clean Title' },
 { id:2, name:'2020 Mercedes G63 AMG', price:'$89,500', miles:'32,100 mi', image:'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?w=800', badge:'JUST ARRIVED', specs:'4MATIC • 577HP' },
 { id:3, name:'2019 BMW 530i', price:'$18,900', miles:'54,300 mi', image:'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800', badge:'FINANCING', specs:'RWD • Turbo' }
];
export default function Home(){
 const [q,setQ]=useState('');
 const wa='14352245247'; const link=`https://wa.me/${wa}`;
 const list=cars.filter(c=>c.name.toLowerCase().includes(q.toLowerCase()));
 return(<div className="min-h-screen bg-black text-white">
 <header className="border-b border-zinc-800 p-4 flex justify-between max-w-7xl mx-auto"><span className="font-black">UBSCARS</span><a href={link} className="bg-red-600 px-4 py-2 rounded-full font-bold text-sm">WhatsApp +1(435)224-5247</a></header>
 <section className="max-w-7xl mx-auto p-4 py-10"><h1 className="text-5xl font-black">FIND YOUR <span className="text-red-600">DREAM</span> RIDE</h1>
 <div className="mt-6 bg-zinc-900 p-2 rounded-full flex max-w-lg border border-zinc-800"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search Charger, G-Wagon..." className="flex-1 bg-transparent px-4 outline-none"/><button className="bg-white text-black px-6 py-2 rounded-full font-bold">Search</button></div>
 <div className="grid md:grid-cols-3 gap-6 mt-10">{list.map(car=><div key={car.id} className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800"><img src={car.image} className="h-48 w-full object-cover"/><div className="p-4"><div className="bg-red-600 inline-block text-xs px-2 py-1 rounded-full font-bold">{car.badge}</div><h3 className="font-bold mt-2">{car.name}</h3><p className="text-zinc-500 text-xs">{car.specs} • {car.miles}</p><div className="flex justify-between items-center mt-4"><span className="font-black text-xl">{car.price}</span><a href={`${link}?text=Hi UBSCARS, I'm interested in ${car.name}`} className="bg-white text-black px-4 py-2 rounded-full font-bold text-xs">WhatsApp</a></div></div></div>)}</div></section>
 <footer className="text-center text-zinc-600 py-10 text-sm">UBSCARS © 2026 • Lagos • WhatsApp +1 (435) 224-5247</footer></div>)
}
