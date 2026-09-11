'use client';
import { useState } from 'react';

const cars = [
 { id:1, name:'2026 Dodge Charger RT - Diamond Black', price:'$6,000', year:2026, miles:'1,200', image:'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80', badge:'$500 DOWN', specs:'AWD • 420HP • 2026 NEW • Total $6k' },
 { id:2, name:'2020 Mercedes G63 AMG', price:'$89,500', year:2020, miles:'32,100', image:'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?w=800&q=80', badge:'JUST ARRIVED', specs:'G-Wagon • 4MATIC • 577HP' },
 { id:3, name:'2019 BMW 530i xDrive', price:'$18,900', year:2019, miles:'54,300', image:'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', badge:'LOW MILES', specs:'BMW Sedan • Turbo • Leather' },
 { id:4, name:'2021 Toyota Camry SE', price:'$16,500', year:2021, miles:'41,200', image:'https://images.unsplash.com/photo-1623869675781-80b34e094228?w=800&q=80', badge:'FUEL SAVER', specs:'Sedan • 2.5L • Apple CarPlay' },
 { id:5, name:'2017 Ford Mustang GT', price:'$19,900', year:2017, miles:'62,500', image:'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=800&q=80', badge:'V8 POWER', specs:'Mustang Coupe • 5.0L • 435HP' },
 { id:6, name:'2022 Lexus RX 350', price:'$32,000', year:2022, miles:'28,900', image:'https://images.unsplash.com/photo-1618843479313-40f8afb4d8?w=800&q=80', badge:'FAMILY SUV', specs:'Lexus SUV • AWD • Luxury' },
 { id:7, name:'2023 Dodge Challenger R/T', price:'$28,500', year:2023, miles:'18,400', image:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80', badge:'HEMI V8', specs:'Challenger Coupe • 5.7L • 375HP' },
 { id:8, name:'2022 BMW M4 Competition', price:'$62,900', year:2022, miles:'22,000', image:'https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?w=800&q=80', badge:'M POWER', specs:'BMW M4 Coupe • 510HP' },
 { id:9, name:'2021 Audi Q7 Premium', price:'$34,500', year:2021, miles:'38,500', image:'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80', badge:'7 SEATS', specs:'Audi Q7 SUV • Quattro • 3rd Row' },
 { id:10, name:'2020 Ford F-150 Lariat', price:'$29,900', year:2020, miles:'48,200', image:'https://images.unsplash.com/photo-1551830820-330a71b99659?w=800&q=80', badge:'TRUCK KING', specs:'F-150 Truck • 4x4 • EcoBoost' },
 { id:11, name:'2022 Toyota RAV4 XLE', price:'$24,900', year:2022, miles:'31,000', image:'https://images.unsplash.com/photo-1520076466130-1d55ff3e8a46?w=800&q=80', badge:'HYBRID', specs:'RAV4 SUV • AWD • 40 MPG' },
 { id:12, name:'2021 Honda Accord Sport', price:'$21,500', year:2021, miles:'36,700', image:'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', badge:'SPORT', specs:'Accord Sedan • 1.5T • Sport' },
 { id:13, name:'2023 Tesla Model 3 Long Range', price:'$31,900', year:2023, miles:'15,200', image:'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80', badge:'ELECTRIC', specs:'Tesla Model 3 • 353mi Range' },
 { id:14, name:'2022 Mercedes C300', price:'$28,900', year:2022, miles:'29,400', image:'https://images.unsplash.com/photo-1618843479313-40f8afb4d8?w=800&q=80', badge:'LUXURY', specs:'C-Class Sedan • Turbo • AMG Line' },
 { id:15, name:'2021 Jeep Wrangler Rubicon', price:'$36,900', year:2021, miles:'42,000', image:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', badge:'4X4 BEAST', specs:'Wrangler SUV • 4x4 • Off-Road' },
 { id:16, name:'2020 Audi A6 Prestige', price:'$27,500', year:2020, miles:'44,100', image:'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80', badge:'QUATTRO', specs:'Audi A6 Sedan • 3.0T' },
 { id:17, name:'2022 Honda CR-V EX-L', price:'$25,900', year:2022, miles:'27,800', image:'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80', badge:'TOP SAFETY', specs:'CR-V SUV • AWD • Leather' },
 { id:18, name:'2023 BMW X5 xDrive40i', price:'$48,500', year:2023, miles:'19,500', image:'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', badge:'M SPORT', specs:'BMW X5 SUV • Turbo • Panoramic' },
 { id:19, name:'2019 Chevrolet Camaro SS', price:'$24,500', year:2019, miles:'39,900', image:'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80', badge:'V8 455HP', specs:'Camaro Coupe • 6.2L V8' },
 { id:20, name:'2022 Toyota Highlander Limited', price:'$33,900', year:2022, miles:'26,300', image:'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80', badge:'8 SEATS', specs:'Highlander SUV • AWD • Hybrid' },
 { id:21, name:'2021 Ford Explorer ST', price:'$32,500', year:2021, miles:'37,200', image:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', badge:'400HP SUV', specs:'Explorer SUV • Twin-Turbo' },
 { id:22, name:'2020 Lexus ES 350', price:'$23,900', year:2020, miles:'46,000', image:'https://images.unsplash.com/photo-1618843479313-40f8afb4d8?w=800&q=80', badge:'LUXURY SEDAN', specs:'Lexus ES Sedan • V6' },
 { id:23, name:'2023 Dodge Durango R/T', price:'$38,900', year:2023, miles:'16,800', image:'https://images.unsplash.com/photo-1551830820-330a71b99659?w=800&q=80', badge:'7 SEAT HEMI', specs:'Durango SUV • 5.7L • 7 Seats' },
 { id:24, name:'2022 Audi A4 Premium', price:'$26,900', year:2022, miles:'30,100', image:'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80', badge:'S-LINE', specs:'Audi A4 Sedan • Quattro' },
 { id:25, name:'2021 Mercedes GLC 300', price:'$29,500', year:2021, miles:'34,600', image:'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?w=800&q=80', badge:'SUV LUXURY', specs:'GLC SUV • 4MATIC' },
 { id:26, name:'2020 Toyota Tacoma TRD', price:'$28,900', year:2020, miles:'52,000', image:'https://images.unsplash.com/photo-1551830820-330a71b99659?w=800&q=80', badge:'TRD OFF-ROAD', specs:'Tacoma Truck • 4x4 • V6' },
 { id:27, name:'2022 Chevrolet Tahoe LT', price:'$42,900', year:2022, miles:'28,900', image:'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80', badge:'FULL SIZE', specs:'Tahoe SUV • 5.3L • 8 Seats' },
 { id:28, name:'2021 BMW 330i M Sport', price:'$24,900', year:2021, miles:'40,200', image:'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', badge:'M SPORT', specs:'BMW 330i Sedan • M Sport' },
 { id:29, name:'2023 Honda Civic Type R', price:'$34,900', year:2023, miles:'9,800', image:'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', badge:'TYPE R', specs:'Civic Hatchback • 315HP • Manual' },
 { id:30, name:'2022 Ford Edge Titanium', price:'$26,500', year:2022, miles:'33,400', image:'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80', badge:'AWD SUV', specs:'Edge SUV • 2.0T • Leather' },
 { id:31, name:'2021 Lexus IS 350 F Sport', price:'$29,900', year:2021, miles:'31,500', image:'https://images.unsplash.com/photo-1618843479313-40f8afb4d8?w=800&q=80', badge:'F SPORT', specs:'Lexus IS Sedan • V6 • F Sport' },
 { id:32, name:'2020 Dodge Charger Scat Pack', price:'$32,900', year:2020, miles:'38,900', image:'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80', badge:'485HP SCAT', specs:'Charger Sedan • 6.4L • Widebody' },
 { id:33, name:'2022 Audi Q5 Premium Plus', price:'$31,500', year:2022, miles:'29,900', image:'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80', badge:'QUATTRO SUV', specs:'Audi Q5 SUV • 45 TFSI' },
 { id:34, name:'2021 Chevrolet Silverado 1500', price:'$30,900', year:2021, miles:'45,600', image:'https://images.unsplash.com/photo-1551830820-330a71b99659?w=800&q=80', badge:'Z71 4X4', specs:'Silverado Truck • 5.3L V8' },
 { id:35, name:'2023 Toyota Supra 3.0', price:'$49,900', year:2023, miles:'8,200', image:'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=800&q=80', badge:'SUPRA', specs:'Supra Coupe • 382HP • Sports' },
 { id:36, name:'2022 Mercedes E350 4MATIC', price:'$36,900', year:2022, miles:'28,400', image:'https://images.unsplash.com/photo-1618843479313-40f8afb4d8?w=800&q=80', badge:'E-CLASS', specs:'E-Class Sedan • Turbo • Luxury' },
 { id:37, name:'2021 Ford Bronco Wildtrak', price:'$44,900', year:2021, miles:'22,300', image:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', badge:'WILDTRAK', specs:'Bronco SUV • Sasquatch • 4x4' },
 { id:38, name:'2020 BMW X3 M40i', price:'$31,900', year:2020, miles:'41,000', image:'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', badge:'M40i 382HP', specs:'BMW X3 SUV • M Performance' },
 { id:39, name:'2022 Honda Pilot Elite', price:'$32,900', year:2022, miles:'27,100', image:'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80', badge:'8 SEAT ELITE', specs:'Pilot SUV • AWD • 8 Seats' },
 { id:40, name:'2023 Lexus GX 460 Premium', price:'$48,900', year:2023, miles:'14,500', image:'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80', badge:'GX 4X4 LUX', specs:'Lexus GX SUV • V8 • Off-Road' },
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
   <div className="flex items-center gap-2"><div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-black">U</div><span className="font-black tracking-widest">UBSCARS</span><span className="text-zinc-500 text-xs ml-2 hidden md:block">Europe & USA • 40 Cars Matched</span></div>
   <a href={link} target="_blank" className="bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-full font-bold text-xs">WhatsApp: +1 (435) 224-5247</a>
  </div>
 </header>
 <section className="max-w-7xl mx-auto px-4 pt-12 pb-6">
  <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">FIND YOUR<br/><span className="text-red-600">DREAM</span> RIDE</h1>
  <p className="text-zinc-400 mt-4 max-w-xl text-sm">40 Vehicles • Real Photos Matched • Clean titles • $500 Down • Europe & USA Shipping.</p>
  <div className="mt-8 bg-zinc-900 border border-zinc-800 p-1.5 rounded-full flex max-w-xl shadow-2xl">
   <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search Charger, G-Wagon, BMW, Tesla, Truck..." className="flex-1 bg-transparent px-5 outline-none text-sm placeholder:text-zinc-600"/>
   <button className="bg-white text-black px-7 py-3 rounded-full font-bold text-sm">Search {filtered.length}</button>
  </div>
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
       <a href={`${link}?text=Hello%20UBSCARS%20!%20I'm%20interested%20in%20${encodeURIComponent(car.name)}%20for%20${encodeURIComponent(car.price)}%20Send%20video%20tour`} target="_blank" className="bg-white text-black px-5 py-2.5 rounded-full font-bold text-xs hover:bg-zinc-200">WhatsApp →</a>
      </div>
     </div>
    </div>
   ))}
  </div>
 </section>
 <footer className="border-t border-zinc-900 text-center py-10 text-zinc-600 text-xs">
  <p className="font-bold text-white tracking-widest">UBSCARS - 40 VEHICLES MATCHED</p>
  <p className="mt-2">Europe & USA • Real Photos • International Sales • +1 (435) 224-5247</p>
 </footer>
 </div>
 )
}
