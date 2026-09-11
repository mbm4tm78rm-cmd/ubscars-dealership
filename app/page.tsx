'use client';
import { useState } from 'react';

const cars = [
 { id:1, name:'2026 Dodge Charger RT - Diamond Black', price:'$6,000', year:2026, miles:'1,200', image:'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80', badge:'$500 DOWN', specs:'AWD • 420HP • 2026 NEW • Total $6k' },
 { id:2, name:'2020 Mercedes G63 AMG', price:'$89,500', year:2020, miles:'32,100', image:'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?w=800&q=80', badge:'JUST ARRIVED', specs:'4MATIC • 577HP • Black' },
 { id:3, name:'2019 BMW 530i xDrive', price:'$18,900', year:2019, miles:'54,300', image:'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', badge:'LOW MILES', specs:'Turbo • Leather • Sunroof' },
 { id:4, name:'2021 Toyota Camry SE', price:'$16,500', year:2021, miles:'41,200', image:'https://images.unsplash.com/photo-1623869675781-80b34e094228?w=800&q=80', badge:'FUEL SAVER', specs:'2.5L • Apple CarPlay' },
 { id:5, name:'2017 Ford Mustang GT', price:'$19,900', year:2017, miles:'62,500', image:'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=800&q=80', badge:'V8 POWER', specs:'5.0L • 435HP • Manual' },
 { id:6, name:'2022 Lexus RX 350', price:'$32,000', year:2022, miles:'28,900', image:'https://images.unsplash.com/photo-1618843479313-40f8afb4d8?w=800&q=80', badge:'FAMILY SUV', specs:'AWD • Luxury' },
 { id:7, name:'2023 Dodge Challenger R/T', price:'$28,500', year:2023, miles:'18,400', image:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80', badge:'HEMI V8', specs:'5.7L • 375HP • Clean' },
 { id:8, name:'2022 BMW M4 Competition', price:'$62,900', year:2022, miles:'22,000', image:'https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?w=800&q=80', badge:'M POWER', specs:'510HP • Carbon Roof' },
 { id:9, name:'2021 Audi Q7 Premium', price:'$34,500', year:2021, miles:'38,500', image:'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80', badge:'7 SEATS', specs:'Quattro • 3rd Row' },
 { id:10, name:'2020 Ford F-150 Lariat', price:'$29,900', year:2020, miles:'48,200', image:'https://images.unsplash.com/photo-1551830820-330a71b99659?w=800&q=80', badge:'TRUCK KING', specs:'4x4 • EcoBoost' },
 { id:11, name:'2022 Toyota RAV4 XLE', price:'$24,900', year:2022, miles:'31,000', image:'https://images.unsplash.com/photo-1520076466130-1d55ff3e8a46?w=800&q=80', badge:'HYBRID', specs:'AWD • 40 MPG' },
 { id:12, name:'2021 Honda Accord Sport', price:'$21,500', year:2021, miles:'36,700', image:'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', badge:'SPORT', specs:'1.5T • Honda Sensing' },
 { id:13, name:'2023 Tesla Model 3 Long Range', price:'$31,900', year:2023, miles:'15,200', image:'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80', badge:'ELECTRIC', specs:'353mi Range • Autopilot' },
 { id:14, name:'2022 Mercedes C300', price:'$28,900', year:2022, miles:'29,400', image:'https://images.unsplash.com/photo-1618843479313-40f8afb4d8?w=800&q=80', badge:'LUXURY', specs:'Turbo • AMG Line' },
 { id:15, name:'2021 Jeep Wrangler Rubicon', price:'$36,900', year:2021, miles:'42,000', image:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', badge:'4X4 BEAST', specs:'Lifted • Off-Road' },
 { id:16, name:'2020 Audi A6 Prestige', price:'$27,500', year:2020, miles:'44,100', image:'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80', badge:'QUATTRO', specs:'3.0T • Virtual Cockpit' },
 { id:17, name:'2022 Honda CR-V EX-L', price:'$25,900', year:2022, miles:'27,800', image:'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80', badge:'TOP SAFETY', specs:'AWD • Leather • Low Miles' },
 { id:18, name:'2023 BMW X5 xDrive40i', price:'$48,500', year:2023, miles:'19,500', image:'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', badge:'M SPORT', specs:'Turbo • Panoramic' },
 { id:19, name:'2019 Chevrolet Camaro SS', price:'$24,500', year:2019, miles:'39,900', image:'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80', badge:'V8 455HP', specs:'6.2L • Performance' },
 { id:20, name:'2022 Toyota Highlander Limited', price:'$33,900', year:2022, miles:'26,300', image:'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80', badge:'8 SEATS', specs:'AWD • JBL • Hybrid' },
 { id:21, name:'2021 Ford Explorer ST', price:'$32,500', year:2021, miles:'37,200', image:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', badge:'400HP SUV', specs:'Twin-Turbo • Sport' },
 { id:22, name:'2020 Lexus ES 350', price:'$23,900', year:2020, miles:'46,000', image:'https://images.unsplash.com/photo-1618843479313-40f8afb4d8?w=800&q=80', badge:'LUXURY SEDAN', specs:'V6 • Mark Levinson' },
 { id:23, name:'2023 Dodge Durango R/T', price:'$38,900', year:2023, miles:'16,800', image:'https://images.unsplash.com/photo-1551830820-330a71b99659?w=800&q=80', badge:'7 SEAT HEMI', specs:'5.7L • Tow Package' },
 { id:24, name:'2022 Audi A4 Premium', price:'$26,900', year:2022, miles:'30,100', image:'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80', badge:'S-LINE', specs:'Quattro • Virtual' },
 { id:25, name:'2021 Mercedes GLC 300', price:'$29,500', year:2021, miles:'34,600', image:'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?w=800&q=80', badge:'SUV LUXURY', specs:'4MATIC • Burmester' },
 { id:26, name:'2020 Toyota Tacoma TRD', price:'$28,900', year:2020, miles:'52,000', image:'https://images.unsplash.com/photo-1551830820-330a71b99659?w=800&q=80', badge:'TRD OFF-ROAD', specs:'4x4 • V6 • Lifted' },
 { id:27, name:'2022 Chevrolet Tahoe LT', price:'$42,900', year:2022, miles:'28,900', image:'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80', badge:'FULL SIZE', specs:'5.3L • 8 Seats • Bose' },
 { id:28, name:'2021 BMW 330i M Sport', price:'$24,900', year:2021, miles:'40,200', image:'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', badge:'M SPORT', specs:'Turbo • Harman Kardon' },
 { id:29, name:'2023 Honda Civic Type R', price:'$34,900', year:2023, miles:'9,800', image:'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', badge:'TYPE R', specs:'315HP • Manual • New' },
 { id:30, name:'2022 Ford Edge Titanium', price:'$26,500', year:2022, miles:'33,400', image:'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80', badge:'AWD SUV', specs:'2.0T • Leather • Pano' },
 { id:31, name:'2021 Lexus IS 350 F Sport', price:'$29,900', year:2021, miles:'31,500', image:'https://images.unsplash.com/photo-1618843479313-40f8afb4d8?w=800&q=80', badge:'F SPORT', specs:'V6 • Mark Levinson' },
 { id:32, name:'2020 Dodge Charger Scat Pack', price:'$32,900', year:2020, miles:'38,900', image:'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80', badge:'485HP SCAT', specs:'6.4L • Widebody' },
 { id:33, name:'2022 Audi Q5 Premium Plus', price:'$31,500', year:2022, miles:'29,900', image:'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80', badge:'QUATTRO SUV', specs:'45 TFSI • Pano' },
 { id:34, name:'2021 Chevrolet Silverado 1500', price:'$30,900', year:2021, miles:'45,600', image:'https://images.unsplash.com/photo-1551830820-330a71b99659?w=800&q=80', badge:'Z71 4X4', specs:'5.3L V8 • Crew Cab' },
 { id:35, name:'2023 Toyota Supra 3.0', price:'$49,900', year:2023, miles:'8,200', image:'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=800&q=80', badge:'SUPRA', specs:'382HP • BMW Engine' },
 { id:36, name:'2022 Mercedes E350 4MATIC', price:'$36,900', year:2022, miles:'28,400', image:'https://images.unsplash.com/photo-1618843479313-40f8afb4d8?w=800&q=80', badge:'E-CLASS', specs:'Turbo • Luxury' },
 { id:37, name:'2021 Ford Bronco Wildtrak', price:'$44,900', year:2021, miles:'22,300', image:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', badge:'WILDTRAK', specs:'Sasquatch • 4x4' },
 { id:38, name:'2020 BMW X3 M40i', price:'$31,900', year:2020, miles:'41,000', image:'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', badge:'M40i 382HP', specs:'Turbo • M Performance' },
 { id:39, name:'2022 Honda Pilot Elite', price:'$32,900', year:2022, miles:'27,100', image:'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80', badge:'8 SEAT ELITE', specs:'AWD • Honda Sensing' },
 { id:40, name:'2023 Lexus GX 460 Premium', price:'$48,900', year:2023, miles:'14,500', image:'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80', badge:'GX 4X4 LUX', specs:'V8 • 3 Rows • Off-Road' },
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
   <div className="flex items-center gap-2"><div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-black">U</div><span className="font-black tracking-widest">UBSCARS</span><span className="text-zinc-500 text-xs ml-2 hidden md:block">Europe & USA • 40 Cars In Stock</span></div>
   <a href={link} target="_blank" className="bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-full font-bold text-xs">WhatsApp: +1 (435) 224-5247</a>
  </div>
 </header>

 <section className="max-w-7xl mx-auto px-4 pt-12 pb-6">
  <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">FIND YOUR<br/><span className="text-red-600">DREAM</span> RIDE</h1>
  <p className="text-zinc-400 mt-4 max-w-xl text-sm">40 Vehicles In Stock • Clean titles • Inspected • Financing from $500 Down • Shipping across Europe & USA.</p>
  <div className="mt-8 bg-zinc-900 border border-zinc-800 p-1.5 rounded-full flex max-w-xl shadow-2xl">
   <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search Charger, G-Wagon, BMW, Tesla, Truck..." className="flex-1 bg-transparent px-5 outline-none text-sm placeholder:text-zinc-600"/>
   <button className="bg-white text-black px-7 py-3 rounded-full font-bold text-sm">Search {filtered.length}</button>
  </div>
  <div className="flex gap-2 mt-4 text-[11px] flex-wrap"><span className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">✓ 40 Cars Live</span><span className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">✓ Europe & USA Delivery</span><span className="bg-red-600 px-3 py-1.5 rounded-full font-bold">✓ $500 Down Available</span></div>
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
       <a href={`${link}?text=Hello%20UBSCARS%20!%20I'm%20interested%20in%20${encodeURIComponent(car.name)}%20for%20${encodeURIComponent(car.price)}%20-%20$500%20Down%20Available%3F%20Send%20video%20tour`} target="_blank" className="bg-white text-black px-5 py-2.5 rounded-full font-bold text-xs hover:bg-zinc-200">WhatsApp →</a>
      </div>
     </div>
    </div>
   ))}
  </div>

  <div className="mt-16 bg-gradient-to-br from-red-600 to-red-800 rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
   <div><h2 className="text-3xl font-black">Need Financing? $500 Down</h2><p className="text-red-100 text-sm mt-2 max-w-md">40 Cars Ready! Get approved in 5 mins via WhatsApp. We ship to all EU countries + all 50 US states.</p></div>
   <a href={`${link}?text=Hello%20UBSCARS%2C%20I%20need%20financing%20for%20$500%20down%20in%20Europe%20or%20USA`} target="_blank" className="bg-black text-white px-8 py-3.5 rounded-full font-bold text-sm">Apply on WhatsApp</a>
  </div>
 </section>

 <footer className="border-t border-zinc-900 text-center py-10 text-zinc-600 text-xs">
  <p className="font-bold text-white tracking-widest">UBSCARS - 40 VEHICLES</p>
  <p className="mt-2">Europe & USA • 40 Cars In Stock • International Sales & Shipping • +1 (435) 224-5247</p>
  <p className="mt-1">ubscars-dealership.vercel.app © 2026</p>
 </footer>
 </div>
 )
}
