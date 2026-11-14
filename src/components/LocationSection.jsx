import React from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Compass, 
  Waves, 
  Navigation, 
  Milestone, 
  ExternalLink,
  ShieldCheck,
  Clock
} from 'lucide-react'

export default function LocationSection() {
  const landmarks = [
    {
      time: '0 دقيقة',
      title: 'ضفاف نهر دجلة الخالد',
      desc: 'إطلالة حصرية لا تنحجب وممشى نهري مباشر بطول الواجهة الغربية للمجمع',
      icon: Waves,
    },
    {
      time: '1 دقيقة',
      title: 'الجسر العتيق (الجسر القديم)',
      desc: 'الشريان التاريخي والحيوي الرابط بين جانبي الموصل الأيمن والأيسر',
      icon: Milestone,
    },
    {
      time: '3 دقائق',
      title: 'ساحة الميدان وأسواق الموصل القديمة',
      desc: 'المركز التاريخي للتجارة الموصلية، شارع النجفي، وسوق الصاغة العريق',
      icon: Compass,
    },
    {
      time: '5 دقائق',
      title: 'باب الطوب والمجمعات الحكومية',
      desc: 'عقدة المواصلات الرئيسية والمراكز الخدمية والإدارية في محافظة نينوى',
      icon: Navigation,
    },
  ]

  return (
    <section id="location" className="relative py-24 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-tigris/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tigris/10 border border-tigris/30 text-tigris text-xs sm:text-sm font-semibold mb-4">
            <Compass className="w-4 h-4" />
            <span>الموقع الجغرافي الاستراتيجي</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-black text-white leading-tight mb-4">
            قلب الموصل التاريخي.. <br />
            <span className="bg-gradient-to-l from-tigris via-halan to-gold bg-clip-text text-transparent">
              على ضفاف دجلة وبمحاذاة الجسر العتيق
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-muted leading-relaxed">
            يحتل مجمع المنيف التجاري (داون تاون الموصل) الموقع الأكثر تميزاً وجاذبية في محافظة نينوى؛ في نقطة الالتقاء الاستراتيجية بساحة الميدان بالجانب الأيمن، جامعاً بين عبق التراث وعصب الحركة التجارية اليومية.
          </p>
        </div>

        {/* Content Layout: Aerial View Image + Interactive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Real Aerial Image with Overlays (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-charcoal h-full min-h-[380px] sm:min-h-[480px] shadow-2xl group">
              <img 
                src="https://img.youtube.com/vi/sKUGNkyZbl8/maxresdefault.jpg" 
                alt="المنظور الجوي الشامل لموقع داون تاون الموصل بساحة الميدان ونهر دجلة" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
              
              {/* Location Badge Indicator */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-charcoal/90 backdrop-blur-md border border-gold/40 text-gold text-xs sm:text-sm font-bold shadow-xl">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span>الجانب الأيمن • ساحة الميدان</span>
                </span>
              </div>

              {/* Coordinates & Waterfront Overlay */}
              <div className="absolute bottom-4 right-4 left-4 sm:bottom-6 sm:right-6 sm:left-6 p-4 sm:p-5 rounded-2xl bg-charcoal/90 backdrop-blur-xl border border-white/10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="font-cairo font-bold text-white text-sm sm:text-base flex items-center gap-2">
                      <Waves className="w-4 h-4 text-tigris" />
                      <span>إطلالة نهرية متصلة على دجلة</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-muted mt-1">
                      حركة تسوق وسياحة متواصلة تستقطب أكثر من 50,000 زائر يومياً من كافة أرجاء نينوى والمحافظات
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gold" dir="ltr">
                      36.34°N, 43.13°E
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Distance & Landmark Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {landmarks.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-5 rounded-2xl bg-charcoal/80 backdrop-blur-md border border-white/10 hover:border-gold/30 hover:bg-charcoal-light transition-all flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-cairo font-bold text-white text-base group-hover:text-gold transition-colors">
                        {item.title}
                      </h4>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-tigris bg-tigris/10 px-2.5 py-1 rounded-md shrink-0">
                        <Clock className="w-3 h-3" />
                        <span>{item.time}</span>
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}

            {/* Quick Map Action Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-charcoal-light to-charcoal border border-gold/20 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
                <span className="text-xs sm:text-sm text-halan font-medium">
                  موقع مصدق ومثبت ضمن المخطط الأساسي لإعادة إعمار الموصل
                </span>
              </div>
              <a 
                href="#contact"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gold/15 hover:bg-gold/25 text-gold text-xs font-bold transition-colors shrink-0 min-h-[36px]"
              >
                <span>احجز جولة موقعية</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
