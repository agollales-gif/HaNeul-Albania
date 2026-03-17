import { motion } from 'framer-motion';
import React from 'react';

// --- SILUETA E TELEFONIT (TEJDUKSHME & FIKSE) ---
const PhoneSilhouette = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-5 overflow-hidden md:overflow-visible">
      <motion.svg
        viewBox="0 0 400 800"
        className="absolute right-[-10%] md:right-[-5%] top-1/2 -translate-y-1/2 w-[50%] md:w-[35%] opacity-[0.07] text-[#1a2b4b]"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.07, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Trupi i telefonit me vija më të holla */}
        <rect x="50" y="50" width="300" height="650" rx="45" stroke="currentColor" strokeWidth="1" fill="none" />
        {/* Dynamic Notch */}
        <motion.rect 
          x="150" y="80" width="100" height="20" rx="10" fill="currentColor"
          animate={{ width: [100, 120, 100] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Elementi i pulsues për realizëm */}
        <motion.circle 
          cx="200" cy="500" r="50" stroke="currentColor" strokeWidth="0.5" fill="none"
          animate={{ scale: [0.9, 1.4], opacity: [0.4, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.svg>
    </div>
  );
};

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-[#fdfaf5] text-[#1a2b4b] pt-20 md:pt-40 pb-16 md:pb-32 overflow-hidden selection:bg-red-100">
      
      {/* 1. GLOBAL BACKGROUND VIDEO (E Fiksuar dhe pak më e dukshme) */}
      <div className="fixed inset-0 z-0">
        <video 
          autoPlay muted loop playsInline
          className="w-full h-full object-cover opacity-[0.10]" // Rritur nga 0.03 në 0.10
        >
          <source src="/hero_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Mjegullim i lehtë i videos për të mos vrarë tekstin */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
        <PhoneSilhouette />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* LEFT SIDE: HEADER & CONTACT INFO (Mbetet e njëjtë) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="text-red-600 font-sans font-bold tracking-[0.4em] uppercase text-xs mb-6">
              HaNeul Heritage
            </h4>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-9xl tracking-tighter leading-[0.85] mb-8 md:mb-12">
              NA <br/>
              <span className="text-red-600 italic font-extralight ml-[-5px]">GJENI</span>
            </h1>
            
            <div className="space-y-12 md:space-y-16 mt-12 md:mt-20">
              <div className="group">
                <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4">Sedi Qendrore</h4>
                <p className="font-serif text-xl md:text-3xl lg:text-4xl leading-tight border-b border-[#1a2b4b]/10 pb-2 group-hover:border-red-600 transition-all duration-500">
                  Rr. Ibrahim Rugova, Sky Tower, <br />
                  Kati 14, Tiranë, Shqipëri
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4">Inquiry Center</h4>
                  <p className="font-serif text-lg md:text-xl hover:text-red-600 transition-colors">info@haneul.al</p>
                </div>
                <div>
                  <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4">Haneul Connect</h4>
                  <p className="font-serif text-lg md:text-xl">+44 7464 729114</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: PREMIUM LOCATION CARD (TEJDUKSHME DHE PROFESIONALE) */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[400px] md:h-[650px] bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden shadow-[0_30px_60px_-15px_rgba(26,43,75,0.15)] rounded-sm"
          >
            {/* Rrjeta Abstrakte (Grid Decor) */}
            <div className="absolute inset-0 opacity-[0.03]">
                <svg width="100%" height="100%" className="absolute inset-0">
                    <pattern id="grid_contact" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid_contact)" />
                </svg>
            </div>

            {/* Simuluar Map Marker me "Aura" efekt */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                    <motion.div 
                        animate={{ scale: [1, 2, 1], opacity: [0.2, 0.1, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute -inset-10 bg-red-600 rounded-full blur-xl"
                    />
                    <motion.div 
                        className="relative z-10 w-3 h-3 bg-red-600 rounded-full border-2 border-white/50"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <span className="bg-[#1a2b4b]/90 backdrop-blur-md text-white px-3 md:px-5 py-2 md:py-2.5 font-sans text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] shadow-2xl">
                            HAneul CENTRAL — Tirana
                        </span>
                    </div>
                </div>
            </div>

            {/* Technical Coordinates (HUD Style) */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 bg-gradient-to-t from-[#1a2b4b]/80 via-[#1a2b4b]/30 to-transparent">
                <div className="flex justify-between items-end text-white/60 font-sans text-[8px] md:text-[9px] tracking-[0.3em]">
                    <div>
                        <p>LATITUDE: 41.3275° N</p>
                        <p>LONGITUDE: 19.8187° E</p>
                    </div>
                    <div className="text-right">
                        <p className="text-red-600 font-bold">STATUS: ACTIVE</p>
                        <p>MON-FRI: 09:00 - 18:00</p>
                    </div>
                </div>
            </div>

            {/* Butoni i Hartave me stil Glassmorphism */}
            <motion.a 
                href="https://maps.google.com" 
                target="_blank"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="absolute top-6 md:top-10 left-6 md:left-10 bg-white/5 backdrop-blur-md border border-white/20 px-4 md:px-6 py-2.5 md:py-3.5 text-white font-sans text-[9px] md:text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-[#1a2b4b] transition-all duration-700"
            >
                Launch in Maps
            </motion.a>
          </motion.div>

        </div>
      </div>
    </div>
  );
}