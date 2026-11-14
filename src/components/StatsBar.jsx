import React from 'react'
import { motion } from 'framer-motion'
import { 
  Store, 
  Hotel, 
  UtensilsCrossed, 
  Maximize2, 
  Car,
  TrendingUp
} from 'lucide-react'

export default function StatsBar() {
  const stats = [
    {
      id: 'retail',
      icon: Store,
      number: '400+',
      label: 'متجر وعلامة تجارية',
      desc: 'مساحات تجارية وتجزئة عصرية متعددة الأنماط',
      highlight: true
    },
    {
      id: 'hospitality',
      icon: Hotel,
      number: '3',
      label: 'فنادق سياحية فاخرة',
      desc: 'خدمات ضيافة فندقية 5 نجوم بإطلالة بانورامية',
      highlight: false
    },
    {
      id: 'dining',
      icon: UtensilsCrossed,
      number: '12',
      label: 'مطعماً وتراساً نهرياً',
      desc: 'جلسات خارجية مطلة مباشرة على ضفاف دجلة',
      highlight: false
    },
    {
      id: 'area',
      icon: Maximize2,
      number: '7,900',
      unit: 'م²',
      label: 'مساحة التطوير الإجمالية',
      desc: 'صرح معماري متعدد الطوابق والاستخدامات',
      highlight: true
    },
    {
      id: 'parking',
      icon: Car,
      number: '1,000+',
      label: 'موقف سيارات ذكي',
      desc: 'طوابق سفلية مؤتمتة بأنظمة أمان وتحكم حديثة',
      highlight: false
    }
  ]

  return (
    <section id="stats" className="relative py-12 -mt-6 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container */}
        <div className="relative rounded-3xl bg-charcoal/90 backdrop-blur-xl border border-gold/20 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/80">
          
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-1/4 w-72 h-36 bg-gold/10 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-36 bg-tigris/10 blur-[80px] pointer-events-none" />

          {/* Section Header Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 sm:pb-6 mb-6 sm:mb-8 border-b border-white/10 gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center border border-gold/30 shrink-0">
                <TrendingUp className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h2 className="text-lg sm:text-2xl font-cairo font-bold text-white">
                  المؤشرات والأرقام القياسية للمشروع
                </h2>
                <p className="text-xs sm:text-sm text-slate-muted">
                  حقائق ومقاييس تجسد ريادة داون تاون الموصل كأضخم مركز تجاري وسياحي في الشمال
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-halan/90 font-medium self-start sm:self-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>أرقام معتمدة من المخطط التنفيذي 2024 - 2026</span>
            </div>
          </div>

          {/* 5-Column Stats Grid (Fluid 2-col Mobile Dashboard) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 lg:divide-x lg:divide-x-reverse lg:divide-white/10">
            {stats.map((stat, idx) => {
              const IconComp = stat.icon
              const isLast = idx === 4
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] sm:bg-transparent border border-white/5 sm:border-0 lg:px-4 flex flex-col justify-between group ${
                    isLast ? 'col-span-2 sm:col-span-1 lg:col-span-1' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-gold/40 group-hover:bg-gold/10 transition-all shrink-0">
                        <IconComp className="w-4 h-4 sm:w-5 sm:h-5 text-gold group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-sans font-bold text-slate-muted group-hover:text-gold/80 transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-1 mb-1.5 sm:mb-2">
                      <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-cairo font-black text-white group-hover:text-gold transition-colors tracking-tight">
                        {stat.number}
                      </span>
                      {stat.unit && (
                        <span className="text-base sm:text-xl font-cairo font-bold text-gold">
                          {stat.unit}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xs sm:text-base font-cairo font-bold text-halan mb-1 leading-snug">
                      {stat.label}
                    </h3>
                  </div>

                  <p className="text-[11px] sm:text-xs text-slate-muted leading-relaxed mt-2 pt-2 border-t border-white/5">
                    {stat.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}