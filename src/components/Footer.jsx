import React from 'react'
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUp, 
  ShieldCheck, 
  ExternalLink, 
  Globe, 
  Share2 
} from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-charcoal-dark border-t border-white/10 pt-12 sm:pt-16 pb-8 sm:pb-12 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[300px] bg-gold/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Developer Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg shadow-gold/20 shrink-0">
                  <Building2 className="w-6 h-6 text-obsidian stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-cairo font-bold text-xl text-white">
                    مجمع المنيف التجاري
                  </h3>
                  <p className="text-xs text-gold font-semibold tracking-wider">
                    داون تاون الموصل • Mosul Downtown
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-muted leading-relaxed mb-6 max-w-md">
                أيقونة التطوير العقاري والسياحي في الموصل القديمة؛ يجمع بين حداثة الهندسة المعمارية العالمية وأصالة حجر الحلان بساحة الميدان على ضفاف نهر دجلة الخالد.
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 max-w-md">
                <div className="flex items-center gap-2 text-xs font-bold text-halan mb-1">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  <span>المطور: شركة المشاريع المتعددة (MPC Group)</span>
                </div>
                <p className="text-xs text-slate-muted">
                  مجموعة المنيف القابضة بقيادة عمر منيف دهام • رخصة استثمارية رسمية
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-cairo font-bold text-white text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span>أقسام الموقع</span>
            </h4>

            <ul className="space-y-2 text-sm text-halan/80">
              <li>
                <button 
                  onClick={() => scrollTo('#hero')}
                  className="hover:text-gold transition-colors py-1.5 flex items-center gap-2 min-h-[36px]"
                >
                  <span>الرئيسية والرؤية المعمارية</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#location')}
                  className="hover:text-gold transition-colors py-1.5 flex items-center gap-2 min-h-[36px]"
                >
                  <span>الموقع الحيوي بساحة الميدان</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#pillars')}
                  className="hover:text-gold transition-colors py-1.5 flex items-center gap-2 min-h-[36px]"
                >
                  <span>مكونات المشروع والمرافق</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#investor')}
                  className="hover:text-gold transition-colors py-1.5 flex items-center gap-2 min-h-[36px]"
                >
                  <span>بوابة المستثمرين والفرص</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#gallery')}
                  className="hover:text-gold transition-colors py-1.5 flex items-center gap-2 min-h-[36px]"
                >
                  <span>المعرض البصري ورندرات المشروع</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#contact')}
                  className="hover:text-gold transition-colors py-1.5 flex items-center gap-2 min-h-[36px]"
                >
                  <span>حجز موعد استثماري وتواصل</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Official Contact Info (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-cairo font-bold text-white text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span>بيانات الاتصال والمقر</span>
            </h4>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-muted">
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>
                  ساحة الميدان، محاذاة الجسر العتيق، الجانب الأيمن (الموصل القديمة)، نينوى، العراق
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 font-sans font-semibold text-halan" dir="ltr">
                  <a href="tel:07501214455" className="hover:text-gold transition-colors">0750 121 4455</a>
                  <span className="hidden sm:inline">/</span>
                  <a href="tel:07783688048" className="hover:text-gold transition-colors">0778 368 8048</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a href="mailto:info@mosuldowntown.iq" className="hover:text-gold transition-colors text-halan" dir="ltr">
                  info@mosuldowntown.iq
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold shrink-0" />
                <span>مركز المبيعات: السبت - الخميس (9:00 ص - 8:00 م)</span>
              </div>

            </div>

            {/* Quick Action Hotline Button */}
            <div className="mt-6">
              <a
                href="https://wa.me/9647501214455"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gold/15 hover:bg-gold/25 border border-gold/30 text-gold font-cairo font-bold text-xs sm:text-sm transition-all min-h-[44px]"
              >
                <span>محادثة فورية مع المستشار الاستثماري</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-right">
            <p className="text-xs text-slate-muted">
              جميع الحقوق محفوظة © 2024 - 2026 لمجمع المنيف التجاري (داون تاون الموصل) • شركة المشاريع المتعددة (MPC Group).
            </p>
            <p className="text-[11px] text-halan/50 mt-1">
              التصميم والتطوير المعتمد لاستقطاب المستثمرين والزوار وفق أعلى معايير UI/UX Pro Max.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-halan/90 hover:text-gold text-xs font-semibold transition-all min-h-[44px]"
            aria-label="الرجوع إلى أعلى الصفحة"
          >
            <span>العودة للأعلى</span>
            <ArrowUp className="w-4 h-4 text-gold" />
          </button>
        </div>

      </div>
    </footer>
  )
}