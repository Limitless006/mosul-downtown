import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { 
  Building2, 
  Phone, 
  Menu, 
  X, 
  Sparkles, 
  ChevronLeft,
  Compass,
  TrendingUp,
  Image as ImageIcon
} from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Motion Scroll Progress Indicator
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Streamlined 5 Core Sections for Maximum Visual Comfort
  const navLinks = [
    { name: 'الرئيسية', href: '#hero', icon: Building2 },
    { name: 'الموقع والمرافق', href: '#location', icon: Compass },
    { name: 'بوابة الاستثمار', href: '#investor', icon: TrendingUp },
    { name: 'تجربة الزائر', href: '#visitor', icon: Sparkles },
    { name: 'المعرض والتصميم', href: '#gallery', icon: ImageIcon },
  ]

  const scrollToSection = (href) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-2.5 sm:pt-3.5 transition-all duration-300">
      <div 
        className={`relative max-w-7xl mx-auto rounded-2xl transition-all duration-300 border overflow-hidden ${
          scrolled 
            ? 'bg-charcoal/90 backdrop-blur-2xl border-gold/30 shadow-2xl shadow-black/80 py-2.5 px-4 sm:px-6' 
            : 'bg-charcoal/65 backdrop-blur-xl border-white/10 shadow-lg shadow-black/40 py-3.5 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Brand Identity */}
          <a 
            href="#hero" 
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-gold/50 rounded-xl p-1"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg shadow-gold/25 group-hover:scale-105 transition-transform shrink-0">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-obsidian stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-cairo font-black text-base sm:text-xl text-white tracking-wide group-hover:text-gold transition-colors leading-tight">
                مجمع المنيف التجاري
              </span>
              <span className="text-[10px] sm:text-xs text-gold font-medium tracking-wider truncate max-w-[160px] sm:max-w-none">
                داون تاون الموصل • Mosul Downtown
              </span>
            </div>
          </a>

          {/* Streamlined Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-3.5 py-2 text-sm font-medium text-halan/85 hover:text-gold hover:bg-white/5 rounded-xl transition-all flex items-center gap-2 min-h-[44px]"
              >
                <span>{link.name}</span>
              </button>
            ))}
          </nav>

          {/* Right Action & Phone Hotline */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="tel:07501214455"
              className="hidden xl:flex items-center gap-2 px-3 py-2 text-xs font-medium text-halan/90 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/30 rounded-xl transition-all min-h-[44px]"
              title="اتصل بالخط الساخن للاستثمار"
            >
              <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
              <span className="font-sans font-bold tracking-wider" dir="ltr">0750 121 4455</span>
            </a>

            <button
              onClick={() => scrollToSection('#contact')}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-obsidian bg-gradient-to-r from-gold via-gold-light to-gold rounded-xl hover:shadow-lg hover:shadow-gold/25 hover:brightness-105 active:scale-95 transition-all min-h-[44px]"
            >
              <span>حجز موعد استثماري</span>
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-halan hover:text-gold hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="القائمة الرئيسية"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Dynamic Down-Scroll Progress Bar */}
        <motion.div 
          className="absolute bottom-0 right-0 left-0 h-[2.5px] bg-gradient-to-l from-gold-light via-gold to-cyan-400 origin-right shadow-[0_0_10px_rgba(212,175,55,0.7)]"
          style={{ scaleX }}
        />
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 max-w-7xl mx-auto rounded-2xl bg-charcoal/95 backdrop-blur-2xl border border-gold/25 p-4 sm:p-5 shadow-2xl shadow-black/80 max-h-[82vh] overflow-y-auto overscroll-contain"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const IconComponent = link.icon
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center gap-3 px-4 py-3 text-base font-medium text-halan hover:text-gold hover:bg-white/5 rounded-xl transition-colors text-right min-h-[44px]"
                  >
                    <IconComponent className="w-5 h-5 text-gold shrink-0" />
                    <span>{link.name}</span>
                  </button>
                )
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gold" />
                    <span className="text-xs text-halan/80">الخط الساخن للاستثمار:</span>
                  </div>
                  <a 
                    href="tel:07501214455" 
                    className="text-xs font-bold text-gold hover:underline" 
                    dir="ltr"
                  >
                    0750 121 4455
                  </a>
                </div>

                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-gold to-gold-dark text-obsidian font-bold text-sm shadow-lg shadow-gold/20 min-h-[44px]"
                >
                  <span>حجز موعد استثماري فوري</span>
                  <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}