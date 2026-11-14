import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  TrendingUp, 
  Sparkles, 
  Download, 
  CheckCircle2, 
  ArrowLeft, 
  Percent, 
  Calendar, 
  FileText, 
  Building, 
  ShoppingBag, 
  Coffee, 
  Compass, 
  PhoneCall,
  ShieldCheck,
  Hotel
} from 'lucide-react'

export default function PersonaSwitcher() {
  const [activeTab, setActiveTab] = useState('investor') // 'investor' or 'visitor'
  const [downloadSuccess, setDownloadSuccess] = useState(false)

  const handleDownloadDeck = () => {
    setDownloadSuccess(true)
    setTimeout(() => setDownloadSuccess(false), 4000)
    // Smooth scroll to lead form to get investor info
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="persona-hub" className="relative py-24 bg-charcoal/40 border-y border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-tigris/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Dual Selector */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs sm:text-sm font-semibold mb-4">
            <Compass className="w-4 h-4" />
            <span>بوابات تجربة داون تاون الموصل</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-black text-white leading-tight mb-4">
            اختر مسارك لاستكشاف المشروع
          </h2>

          <p className="text-base sm:text-lg text-slate-muted">
            سواء كنت مستثمراً تبحث عن عوائد مضمونة وموقع استثنائي، أو زائراً تترقب أرقى تجارب التسوق والضيافة.
          </p>

          {/* Liquid Interactive Tab Switcher */}
          <div className="mt-8 w-full max-w-md flex p-1 sm:p-1.5 rounded-2xl bg-charcoal-dark border border-white/10 shadow-2xl relative mx-auto">
            <button
              onClick={() => setActiveTab('investor')}
              className={`flex-1 relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-cairo font-bold text-xs sm:text-base transition-colors min-h-[44px] ${
                activeTab === 'investor' ? 'text-obsidian' : 'text-halan/80 hover:text-white'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="sm:hidden">بوابة المستثمر</span>
              <span className="hidden sm:inline">بوابة المستثمر الشريك</span>
            </button>

            <button
              onClick={() => setActiveTab('visitor')}
              className={`flex-1 relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-cairo font-bold text-xs sm:text-base transition-colors min-h-[44px] ${
                activeTab === 'visitor' ? 'text-obsidian' : 'text-halan/80 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="sm:hidden">تجربة الزائر</span>
              <span className="hidden sm:inline">تجربة الزائر والسائح</span>
            </button>

            {/* Moving pill background */}
            <motion.div
              layout
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`absolute top-1 sm:top-1.5 bottom-1 sm:bottom-1.5 rounded-xl bg-gradient-to-r from-gold to-gold-dark shadow-lg ${
                activeTab === 'investor' 
                  ? 'right-1 sm:right-1.5 w-[calc(50%-4px)] sm:w-[calc(50%-6px)]' 
                  : 'right-[calc(50%+2px)] sm:right-[calc(50%+3px)] w-[calc(50%-4px)] sm:w-[calc(50%-6px)]'
              }`}
            />
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === 'investor' ? (
            <motion.div
              key="investor-hub"
              id="investor"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Investor Benefits (7 cols) */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-charcoal/90 border border-gold/30 backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-cairo font-bold text-white">
                        لماذا يعتبر داون تاون الموصل الفرصة الاستثمارية الأولى؟
                      </h3>
                      <p className="text-xs sm:text-sm text-gold font-medium">
                        عوائد استثمارية قياسية وتملك حر مدعوم بضمانات حكومية رسمية
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-2 text-gold font-bold text-base mb-1 font-cairo">
                        <Percent className="w-4 h-4" />
                        <span>عائد استثماري متوقع مرتفع</span>
                      </div>
                      <p className="text-xs text-slate-muted leading-relaxed">
                        نمو رأسمالي متسارع في قيمة الأصول التجارية مع ندرة الأراضي بقلب ساحة الميدان وضفاف النهر.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-2 text-gold font-bold text-base mb-1 font-cairo">
                        <Calendar className="w-4 h-4" />
                        <span>خطط سداد مرنة ومجدولة</span>
                      </div>
                      <p className="text-xs text-slate-muted leading-relaxed">
                        أقساط ميسرة وموزعة على مراحل البناء والتنفيذ الفعلي حتى استلام مفتاح الوحدة.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-2 text-gold font-bold text-base mb-1 font-cairo">
                        <ShieldCheck className="w-4 h-4" />
                        <span>سند ملكية رسمي وضمانات قانونية</span>
                      </div>
                      <p className="text-xs text-slate-muted leading-relaxed">
                        تسجيل رسمي لدى هيئة استثمار نينوى وغرفة التجارة مع حماية تشريعية كاملة للمستثمر.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-2 text-gold font-bold text-base mb-1 font-cairo">
                        <Building className="w-4 h-4" />
                        <span>إدارة تشغيلية فندقية وتجارية</span>
                      </div>
                      <p className="text-xs text-slate-muted leading-relaxed">
                        إدارة مركزية للمرافق والصيانة وإعادة التأجير للعلامات العالمية لضمان أعلى إشغال.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      onClick={scrollToContact}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold to-gold-dark text-obsidian font-cairo font-bold text-sm hover:shadow-lg hover:shadow-gold/25 transition-all min-h-[44px]"
                    >
                      <span>طلب حجز وحدة استثمارية</span>
                      <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
                    </button>

                    <a
                      href="tel:07501214455"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-halan text-sm font-semibold transition-all min-h-[44px]"
                    >
                      <PhoneCall className="w-4 h-4 text-gold" />
                      <span>استشارة مدير المبيعات: 07501214455</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Pitch Deck & Investment Kit Download (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-charcoal to-charcoal-light border border-white/15 backdrop-blur-xl relative overflow-hidden">
                  <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center mb-6">
                    <FileText className="w-6 h-6 text-gold" />
                  </div>

                  <h4 className="text-xl sm:text-2xl font-cairo font-bold text-white mb-2">
                    كراس الشروط والمخططات التنفيذية 2026
                  </h4>

                  <p className="text-sm text-slate-muted leading-relaxed mb-6">
                    احصل على الملف التعريفي الشامل الذي يتضمن المخططات المعمارية للطوابق، المساحات المتوفرة (من 25 م² إلى 500 م²)، ودراسة الجدوى الاستثمارية المعتمدة.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2.5 text-xs sm:text-sm text-halan/90">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>مخططات الطوابق والتوزيع الهندسي للمحلات والمطاعم</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs sm:text-sm text-halan/90">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>جدول الدفعات المالية والأقساط بحسب تقدم الإنجاز</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs sm:text-sm text-halan/90">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>العقود واللوائح الاستثمارية المعتمدة من MPC Group</span>
                    </li>
                  </ul>

                  <button
                    onClick={handleDownloadDeck}
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gold text-obsidian font-cairo font-bold text-sm sm:text-base hover:bg-gold-light transition-all min-h-[48px] shadow-lg shadow-gold/20"
                  >
                    <Download className="w-5 h-5 stroke-[2.2]" />
                    <span>تحميل كراس المستثمر (Investor Pitch Deck)</span>
                  </button>

                  {downloadSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs text-center"
                    >
                      تم تجهيز الطلب! يُرجى إكمال بيانات التواصل بالأسفل لإرسال الكراس فورياً لواتساب الخاص بك.
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="visitor-hub"
              id="visitor"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {/* Feature 1: Shopping */}
              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-charcoal/90 border border-white/10 hover:border-gold/40 transition-all group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-gold/15 group-hover:border-gold/30 transition-all">
                    <ShoppingBag className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-cairo font-bold text-white mb-2 group-hover:text-gold transition-colors">
                    أرقى وجهات التسوق والموضة
                  </h3>
                  <p className="text-sm text-slate-muted leading-relaxed mb-6">
                    استمتع بالتسوق بين أكثر من 400 متجر تحت سقف القبة الزجاجية الأيقونية؛ من أحدث صيحات الموضة العالمية، المجوهرات والذهب الموصلي، ومستحضرات التجميل والإلكترونيات.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gold font-medium">ممشى مكيف بالكامل</span>
                  <span className="text-xs text-halan/60">طوال أيام الأسبوع</span>
                </div>
              </div>

              {/* Feature 2: Waterfront Dining */}
              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-charcoal/90 border border-white/10 hover:border-tigris/40 transition-all group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-tigris/15 group-hover:border-tigris/30 transition-all">
                    <Coffee className="w-6 h-6 text-tigris" />
                  </div>
                  <h3 className="text-xl font-cairo font-bold text-white mb-2 group-hover:text-tigris transition-colors">
                    تراسات ومطاعم ضفاف دجلة
                  </h3>
                  <p className="text-sm text-slate-muted leading-relaxed mb-6">
                    تجارب تذوق استثنائية تجمع بين نكهات المطبخ العراقي الموصلي الأصيل وأشهر المطاعم العالمية، مع شرفات مفتوحة تشاهد منها سحر غروب الشمس على نهر دجلة والجسر العتيق.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-tigris font-medium">12 مطعماً وتراساً</span>
                  <span className="text-xs text-halan/60">جلسات عائلية مميزة</span>
                </div>
              </div>

              {/* Feature 3: Luxury Hospitality */}
              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-charcoal/90 border border-white/10 hover:border-gold/40 transition-all group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-gold/15 group-hover:border-gold/30 transition-all">
                    <Hotel className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-cairo font-bold text-white mb-2 group-hover:text-gold transition-colors">
                    إقامة فندقية 5 نجوم بقلب المدينة
                  </h3>
                  <p className="text-sm text-slate-muted leading-relaxed mb-6">
                    ثلاثة فنادق سياحية توفر أجنحة فخمة بإطلالات لا مثيل لها على معالم الموصل القديمة، مع خدمات استقبال وسبا ومسابح ونادي صحي متكامل لراحة النزلاء.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gold font-medium">خدمة فندقية 24/7</span>
                  <span className="text-xs text-halan/60">حجوزات سياحية وتنفيذية</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}