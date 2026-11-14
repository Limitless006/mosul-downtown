import React from 'react'
import { motion } from 'framer-motion'
import { 
  Building2, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Users, 
  Calendar, 
  BadgeCheck,
  FileCheck2,
  TrendingUp
} from 'lucide-react'

export default function DeveloperSection() {
  const credentials = [
    {
      title: 'رعاية حكومية رسمية',
      desc: 'تم التدشين ووضع حجر الأساس بحضور رسمي رفيع المستوى من محافظ نينوى وهيئة الاستثمار',
      icon: Award
    },
    {
      title: 'رخصة استثمارية سيادية',
      desc: 'مشروع مرخص ومحمي بالكامل وفق قانون الاستثمار العراقي النافذ وحقوق التملك المضمونة',
      icon: ShieldCheck
    },
    {
      title: 'إشراف هندسي وتنفيذي رصين',
      desc: 'تحالف استشاري مع نخبة من كبرى المكاتب الهندسية وخبراء العمارة الحضرية والإنشاءات',
      icon: BadgeCheck
    },
    {
      title: 'التزام صارم بالجدول الزمني',
      desc: 'عمل إنشائي متواصل على مدار 24 ساعة لضمان افتتاح الصرح في الموعد المستهدف',
      icon: Calendar
    }
  ]

  return (
    <section id="developer" className="relative py-24 bg-charcoal/60 border-t border-white/5">
      
      {/* Ambience */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gold/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs sm:text-sm font-semibold mb-4">
            <Award className="w-4 h-4" />
            <span>المطور الرئيسي والمصداقية الرسمية</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-black text-white leading-tight mb-4">
            قيادة استثمارية ذات رؤية وطنية
          </h2>

          <p className="text-base sm:text-lg text-slate-muted">
            يقف خلف داون تاون الموصل فريق متمرس من رواد التطوير العقاري والهندسي بالشراكة مع الهيئات الحكومية لضمان أقصى درجات الأمان الاستثماري.
          </p>
        </div>

        {/* Developer Card & Foundation Ceremony Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Right Column: Foundation Ceremony Image (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl overflow-hidden border border-gold/30 shadow-2xl bg-charcoal group">
              <img 
                src="https://img.youtube.com/vi/hleOBUgCKPw/maxresdefault.jpg" 
                alt="حفل وضع حجر الأساس لمجمع المنيف التجاري بحضور محافظ نينوى وغرفة التجارة" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />

              {/* Ceremony Caption Overlay */}
              <div className="absolute bottom-4 right-4 left-4 sm:bottom-6 sm:right-6 sm:left-6 p-4 sm:p-5 rounded-2xl bg-charcoal/90 backdrop-blur-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                    <FileCheck2 className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-cairo font-bold text-white text-sm sm:text-base">
                      حفل وضع حجر الأساس الرسمي • 28 أيار / مايو 2024
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-muted">
                      بحضور معالي محافظ نينوى، ورئيس هيئة استثمار نينوى، ورئيس غرفة تجارة نينوى ومجلس إدارة مجموعة المنيف.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left Column: MPC Group Profile (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div className="p-8 rounded-3xl bg-charcoal/80 border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg shadow-gold/20 shrink-0">
                  <Building2 className="w-7 h-7 text-obsidian stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-cairo font-black text-white">
                    شركة المشاريع المتعددة (MPC Group)
                  </h3>
                  <p className="text-xs sm:text-sm text-gold font-semibold">
                    مجموعة المنيف القابضة بقيادة الأستاذ عمر منيف دهام
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-muted leading-relaxed mb-6">
                تعتبر شركة المشاريع المتعددة (MPC) إحدى أركان النهضة العمرانية الرائدة في العراق، وتملك سجلاً حافلاً بتنفيذ أضخم المشاريع التجارية والبنى التحتية بمواصفات هندسية تضاهي أرقى المعايير الدولية.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-halan">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>تاريخ حافل بتنفيذ مشاريع البنى التحتية والتطوير العقاري</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-halan">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>رؤية مستدامة تجمع بين حداثة العمارة وهوية الموصل التراثية</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-halan">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>توفير أكثر من 2,500 فرصة عمل مباشرة وغير مباشرة لأبناء نينوى</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 4 Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-charcoal/60 border border-white/10 hover:border-gold/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-cairo font-bold text-white text-base mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
