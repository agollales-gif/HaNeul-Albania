import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

// --- KOMPONENTI COUNTER ---
function Counter({ from, to }) {
  const [count, setCount] = useState(from);
  useEffect(() => {
    let startTime;
    const duration = 2000;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * (to - from) + from));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [from, to]);
  return <span>{count}</span>;
}

// --- HOMEPAGE PRODUCT CARD ---
function HomeProductCard({ product, index }: { product: any, index: number; key?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
      className="flex items-center gap-6 md:gap-10 py-12 md:py-16 border-b border-[#1a2b4b]/5 last:border-0"
    >
      {/* Product Image - Portrait Aspect Ratio */}
      <div className="w-2/5 lg:w-1/2 flex justify-center">
        <div className="relative w-full aspect-[4/5] bg-white/40 backdrop-blur-md flex items-center justify-center p-3 md:p-6 lg:p-8 shadow-[0_30px_60px_-15px_rgba(26,43,75,0.1)] rounded-sm overflow-hidden border border-white/20">
          <div className="absolute top-2 right-2 text-[#1a2b4b]/5 font-serif text-2xl md:text-4xl lg:text-6xl pointer-events-none">
            辛
          </div>
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]" 
          />
        </div>
      </div>

      {/* Product Content - Vertically Centered */}
      <div className="w-3/5 lg:w-1/2 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 + 0.2 }}
          className="space-y-4 md:space-y-6 max-w-xs md:max-w-lg"
        >
          <div className="flex items-center gap-2 md:gap-4">
            <span className="h-[1px] w-6 md:w-8 lg:w-12 bg-red-600" />
            <span className="font-sans text-[8px] md:text-xs uppercase tracking-[0.3em] text-red-600 font-bold">
              {product.detail}
            </span>
          </div>
          
          <h2 className="font-serif text-2xl md:text-3xl lg:text-5xl tracking-tighter text-[#1a2b4b] leading-tight">{product.name}</h2>
          
          <Link 
            to={`/products/${product.id}`}
            className="inline-block border-b-2 border-red-600 pb-1 md:pb-2 font-bold uppercase tracking-[0.3em] text-[8px] md:text-xs hover:text-red-600 transition-all mt-4 md:mt-6"
          >
            Shiko Detajet
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 0.2], ['0%', '20%']);
  const opacityHero = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Rrjeti Global i bazuar ne faqen 4 te PDF-se [cite: 96, 97, 104, 105, 107, 108, 109]
  const pastMarkets = [
    { id: "01", title: "America", desc: "Prani e fuqishme në tregun e Amerikës së Veriut." },
    { id: "02", title: "Europe", desc: "Zgjerimi në metropolet kryesore evropiane." },
    { id: "03", title: "China", desc: "Një nga tregjet më të mëdha aziatike për Nongshim." },
    { id: "04", title: "Japan", desc: "Cilësi dhe shije e certifikuar në tregun japonez." },
    { id: "05", title: "Australia", desc: "Zgjerim i suksesshëm në kontinentin e largët." },
    { id: "06", title: "Vietnam", desc: "Lider në rritje në tregun e Azisë Juglindore." },
  ];

  return (
    <div className="relative bg-[#fdfaf5] text-[#1a2b4b] selection:bg-red-600 selection:text-white">
      
      {/* 0. BACKGROUND VIDEO */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-[0.08]">
          <source src="/hero_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#fdfaf5]/40 backdrop-blur-[1px]" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden z-10">
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="px-6 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }} className="text-center lg:text-left">
              <span className="text-red-600 font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Distributori Zyrtar</span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-8xl leading-[0.9] tracking-tighter mb-6 sm:mb-8">
                Eleganca e <br /> <span className="italic font-extralight text-red-600">traditës</span> koreane.
              </h1>
              <p className="text-base sm:text-lg opacity-70 mb-8 sm:mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed font-light">
                HaNeul - Qielli Juaj i Shijes. Eksploroni gamën tonë të produkteve premium.
              </p>
              <Link 
                to="/products"
                className="bg-[#1a2b4b] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold shadow-2xl hover:bg-red-600 transition-all duration-500 uppercase text-xs tracking-widest inline-block"
              >
                 Shiko Katalogun
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className="relative">
              <img src="/hero.png" alt="HaNeul" className="w-full h-auto max-h-[600px] object-contain mx-auto drop-shadow-[0_35px_55px_rgba(0,0,0,0.2)]" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 2. GLOBAL NETWORK (ALBANIA FOCUS) */}
      <section className="relative py-48 bg-[#1a2b4b] text-white z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[150px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-32">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <span className="text-red-600 font-bold tracking-[0.5em] uppercase text-sm mb-4 block">Destinacioni i Ri</span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[10rem] tracking-tighter leading-none mb-6 sm:mb-8">
                Tani në <br /> <span className="text-red-600 italic">Shqipëri.</span>
              </h2>
              <p className="max-w-2xl text-base sm:text-lg md:text-xl text-white/60 font-light leading-relaxed">
                Pas një suksesi të jashtëzakonshëm në tregjet botërore, HaNeul sjell zyrtarisht 
                standardin më të lartë të produkteve koreane për konsumatorin shqiptar.
              </p>
            </motion.div>
          </div>

          <div className="relative mt-20 px-6 sm:px-8 md:px-12">
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />
            
            <div className="space-y-24 sm:space-y-32">
              <div className="relative flex items-center justify-center">
                 <div className="absolute left-1/2 w-14 h-14 bg-red-600/20 border-2 border-red-600 rounded-full -translate-x-1/2 z-20 animate-pulse flex items-center justify-center">
                    <div className="w-4 h-4 bg-red-600 rounded-full" />
                 </div>
              </div>

              {pastMarkets.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
                  className={`relative flex items-center justify-between w-full ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div className="w-full md:w-[42%] pl-12 md:pl-0 pr-0 md:pr-0 opacity-40 hover:opacity-100 transition-opacity duration-500">
                    <div className={index % 2 === 0 ? "text-right" : "text-left"}>
                      <span className="font-serif text-4xl block mb-2 text-white/20">{item.id}</span>
                      <h3 className="font-serif text-3xl mb-3">{item.title}</h3>
                      <p className="text-white/40 text-base font-light">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 w-8 h-8 bg-[#1a2b4b] border border-white/20 rounded-full -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                  </div>
                  <div className="hidden md:block w-[42%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT PREVIEW - Side-by-side layout with scroll animations */}
      <section className="py-24 md:py-48 bg-transparent z-10 relative">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="flex flex-col items-center text-center mb-16 md:mb-24 gap-8">
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl tracking-tighter leading-none text-center">
                  Gama <br /> <span className="text-red-600">Premium.</span>
                </h2>
                <Link to="/products" className="border-b-2 border-red-600 pb-2 font-bold uppercase tracking-[0.3em] text-xs hover:text-red-600 transition-all text-center">
                  Eksploro të gjitha
                </Link>
            </div>
            <div className="space-y-0">
                {[
                  { name: "Shin Ramyun Original", detail: "Supa ikonike pikante", image: "/shin_ramuyn/shin_ramuyn.png", id: "shin-ramyun" },
                  { name: "Shin Ramyun Toomba", detail: "Kremoze & Stir-fry", image: "/Shin_Ramun_tomba/Shin_Ramun_tomba.png", id: "shin-toomba" },
                  { name: "Shrimp Crackers", detail: "Shije Oqeani & Pikante", image: "/Sgin_Crackers/Sgin_Crackers.png", id: "shrimp-crackers" }
                ].map((item, i) => (
                    <HomeProductCard product={item} index={i} key={item.id} />
                ))}
            </div>
        </div>
      </section>

      {/* 4. STATS SECTION - Bazuar ne faqen 3 dhe 5 [cite: 76, 125, 132, 134] */}
      <section className="py-48 bg-white/80 backdrop-blur-md z-10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-6 sm:mb-8 text-red-600">Lider Global.</h2>
              <p className="text-base sm:text-lg md:text-xl opacity-60 font-light leading-relaxed">Ekskluzivitet i garantuar dhe cilësi e certifikuar për tregun shqiptar.</p>
            </div>
            <div className="grid grid-cols-2 gap-12">
                <div>
                  <div className="font-serif text-8xl text-[#1a2b4b] mb-2">2.8B</div>
                  <span className="text-[10px] uppercase tracking-[0.4em] opacity-40">Shitje Ndërkombëtare / Vit</span>
                </div>
                <div>
                  <div className="font-serif text-8xl text-red-600 mb-2"><Counter from={0} to={12} /></div>
                  <span className="text-[10px] uppercase tracking-[0.4em] opacity-40">Muaj Afatzgjatësi</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-60 bg-[#1a2b4b] text-white text-center relative overflow-hidden z-10">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-9xl tracking-tighter mb-8 sm:mb-12">Gati për HaNeul?</h2>
            <Link 
                to="/contact"
                className="bg-red-600 text-white px-12 sm:px-16 py-5 sm:py-7 rounded-full font-bold uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-red-600 transition-all duration-700 shadow-2xl"
              >
                Na Kontaktoni Sot
              </Link>
        </div>
      </section>
    </div>
  );
};