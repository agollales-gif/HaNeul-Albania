interface TechSpecs {
  [key: string]: string;
}

export default function ProductSpecs({ tech }: { tech: TechSpecs }) {
  return (
    <div className="mt-16 relative">
      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-600/5 blur-3xl rounded-full" />
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#1a2b4b]/5 blur-2xl rounded-full" />
      
      <div className="relative border-t border-[#1a2b4b]/10 pt-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <div className="relative">
              <span className="h-[1px] w-20 bg-red-600 block" />
              <div className="absolute -top-1 -right-2 w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            </div>
            <div>
              <h4 className="font-sans text-[10px] uppercase tracking-[0.4em] text-red-600 font-bold mb-1">Technical Blueprint</h4>
              <p className="font-serif text-xs text-[#1a2b4b]/40 italic">Precision Engineering Details</p>
            </div>
          </div>
          <div className="text-right">
            <span className="font-serif text-2xl text-[#1a2b4b]/10">{Object.keys(tech).length}</span>
            <p className="font-sans text-[8px] uppercase tracking-[0.3em] text-[#1a2b4b]/30">Specs</p>
          </div>
        </div>

        {/* Main Table Container */}
        <div className="relative group">
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-[#1a2b4b]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
          
          <div className="relative bg-white/80 backdrop-blur-xl border border-[#1a2b4b]/10 rounded-lg overflow-hidden shadow-[0_50px_100px_-25px_rgba(26,43,75,0.15)] group-hover:shadow-[0_60px_120px_-30px_rgba(26,43,75,0.2)] transition-all duration-700">
            {/* Top gradient bar */}
            <div className="h-1 bg-gradient-to-r from-red-600 via-[#1a2b4b] to-red-600 opacity-20" />
            
            <div className="grid grid-cols-2 divide-x divide-[#1a2b4b]/5">
              {Object.entries(tech).map(([key, value], index) => (
                <div 
                  key={key} 
                  className={`relative group/item hover:bg-gradient-to-br hover:from-[#1a2b4b]/5 hover:to-red-600/5 transition-all duration-500 ${
                    index < Object.entries(tech).length - 2 ? 'border-b border-[#1a2b4b]/5' : ''
                  } ${index === Object.entries(tech).length - 2 ? 'border-b border-[#1a2b4b]/5' : ''}`}
                >
                  {/* Hover indicator */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 to-[#1a2b4b] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                  
                  <div className="p-8 flex flex-col justify-between min-h-[100px]">
                    <div className="mb-4">
                      <span className="font-sans text-[8px] uppercase tracking-[0.5em] opacity-40 group-hover/item:opacity-70 transition-opacity duration-500 text-[#1a2b4b] block mb-2">
                        {key}
                      </span>
                      {/* Decorative line */}
                      <div className="h-px bg-gradient-to-r from-transparent via-[#1a2b4b]/20 to-transparent w-full" />
                    </div>
                    
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-base font-medium tracking-tight text-[#1a2b4b] leading-tight">
                        {value}
                      </span>
                      
                      {/* Icon indicator */}
                      <div className="opacity-0 group-hover/item:opacity-100 transition-all duration-500 transform translate-x-2 group-hover/item:translate-x-0">
                        <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom gradient bar */}
            <div className="h-1 bg-gradient-to-r from-red-600 via-[#1a2b4b] to-red-600 opacity-10" />
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-8 text-center">
          <p className="font-serif text-xs text-[#1a2b4b]/30 italic">
            Premium quality specifications for professional standards
          </p>
        </div>
      </div>
    </div>
  );
}
