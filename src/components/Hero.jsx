import React from 'react'
import { motion } from 'framer-motion'
import { 
  Building2, 
  Sparkles, 
  ArrowLeft, 
  Eye, 
  MapPin, 
  ShieldCheck, 
  ChevronDown
} from 'lucide-react'

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-tigris/10 blur-[130px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#1A2234_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Top Tag & Official Endorsement Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg shadow-gold/5">
            <Sparkles className="w-4 h-4 text-gold shrink-0" />
            <span>مشروع التطوير العقاري والسياحي الأضخم في نينوى</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-halan/80 text-xs font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-tigris shrink-0" />
            <span>مرخص رسمياً من هيئة استثمار نينوى</span>
          </div>
        </motion.div>

        {/* Master Titles */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-cairo font-black text-white leading-[1.25] mb-4 tracking-tight"
          >
            مجمع <span className="bg-gradient-to-l from-gold-light via-gold to-gold-accent bg-clip-text text-transparent">المنيف</span> التجاري
            <span className="block text-xl sm:text-3xl md:text-4xl font-bold text-halan/90 mt-2 font-cairo">
              داون تاون الموصل • Mosul Downtown
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-muted max-w-3xl mx-auto leading-relaxed font-normal"
          >
            حيث تلتقي أصالة <span className="text-halan font-semibold">حجر الحلان الموصلي العريق</span> مع فخامة <span className="text-halan font-semibold">عمارة الزجاج والقباب الشفافة</span> على ضفاف نهر دجلة الخالد بقلب ساحة الميدان.
          </motion.p>
        </div>

        {/* Dual High-Conversion CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <button
            onClick={() => scrollTo('#investor')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-gold via-gold-light to-gold text-obsidian font-cairo font-bold text-base hover:shadow-xl hover:shadow-gold/30 hover:scale-[1.02] active:scale-95 transition-all min-h-[48px]"
          >
            <span>استكشف الفرص الاستثمارية</span>
            <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <button
            onClick={() => scrollTo('#gallery')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-charcoal/80 hover:bg-charcoal-light border border-white/15 hover:border-gold/50 text-halan font-cairo font-semibold text-base backdrop-blur-md hover:scale-[1.02] active:scale-95 transition-all min-h-[48px]"
          >
            <Eye className="w-5 h-5 text-gold" />
            <span>جولة في داون تاون</span>
          </button>
        </motion.div>

        {/* Architectural Parallax Image Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-5xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden border border-gold/30 shadow-2xl shadow-black/90 group"
        >
          <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden bg-charcoal-dark">
            <img 
              src="https://img.youtube.com/vi/cixNeaVPunw/maxresdefault.jpg" 
              alt="الرندر المعماري الرئيسي لمجمع المنيف التجاري - داون تاون الموصل" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              loading="eager"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 via-transparent to-obsidian/60" />
            
            {/* Floating Architectural Badge */}
            <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 left-3 sm:left-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-charcoal/90 backdrop-blur-xl border border-white/15 shadow-xl">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-cairo font-bold text-white text-xs sm:text-base leading-snug">
                    الواجهة المعمارية الرئيسية & القبة الزجاجية الأيقونية
                  </h3>
                  <p className="hidden sm:block text-xs sm:text-sm text-slate-muted">
                    تصميم هندسي مستقبلي يدمج 7,900 م² من المساحات التجارية والضيافة
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center">
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gold font-medium bg-gold/10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-gold/20">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>الموصل القديمة - ساحة الميدان</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Luxury Down-Scroll Indicator */}
        <div className="flex justify-center mt-8 sm:mt-12">
          <motion.button
            onClick={() => scrollTo('#stats')}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex flex-col items-center gap-2.5 text-slate-muted hover:text-gold transition-all focus:outline-none p-3 rounded-2xl hover:bg-white/5 min-h-[48px]"
            aria-label="الانتقال إلى الأرقام والإحصائيات"
          >
            <span className="text-xs font-semibold tracking-wider font-cairo text-halan/70 group-hover:text-gold transition-colors">
              مرر للأسفل للاستكشاف
            </span>
            {/* Animated Luxury Mouse Pill */}
            <div className="w-6 h-10 rounded-full border-2 border-gold/40 group-hover:border-gold flex items-start justify-center p-1.5 shadow-[0_0_12px_rgba(212,175,55,0.15)] transition-colors">
              <motion.div
                animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-2.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]"
              />
            </div>
            <ChevronDown className="w-4 h-4 text-gold/60 group-hover:text-gold group-hover:translate-y-0.5 transition-transform" />
          </motion.button>
        </div>

      </div>
    </section>
  )
}