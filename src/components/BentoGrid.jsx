import React from 'react'
import { motion } from 'framer-motion'
import { 
  Store, 
  Hotel, 
  UtensilsCrossed, 
  Sparkles, 
  Car, 
  Briefcase, 
  ShieldCheck, 
  Layers, 
  ArrowLeft,
  Compass,
  Maximize2
} from 'lucide-react'

export default function BentoGrid() {
  const pillars = [
    {
      id: 'hotels',
      title: '3 فنادق سياحية فاخرة بإطلالات نهرية',
      tag: 'الضيافة والسياحة',
      desc: 'أبراج فندقية متكاملة تقدم أجنحة فندقية 5 نجوم تلبي متطلبات السياحة والوفود الرسمية ورجال الأعمال في نينوى مع إطلالات بانورامية خلابة على دجلة والمدينة القديمة.',
      specs: ['أجنحة فندقية ملكية', 'خدمة غرف وكونسيرج 24/7', 'إطلالة حصرية على الجسر العتيق'],
      icon: Hotel,
      span: 'lg:col-span-8',
      image: 'https://img.youtube.com/vi/39RMkNVnmYs/maxresdefault.jpg',
      imageAlt: 'الرؤية الليلية الفخمة لأبراج وفنادق داون تاون الموصل',
      accent: 'gold'
    },
    {
      id: 'retail',
      title: '400+ متجر لأرقى العلامات التجارية',
      tag: 'التجزئة والتسوق',
      desc: 'مساحات استثمارية مرنة تشمل أرقى بيوت الأزياء، سوق الذهب والمجوهرات، والعلامات التكنولوجية في بيئة تجارية مكيفة وحديثة بالكامل.',
      specs: ['واجهات عرض زجاجية مزدوجة', 'توزيع حركة ذكي يضمن مرور الزوار', 'أنظمة محاسبة وأمان مركزية'],
      icon: Store,
      span: 'lg:col-span-4',
      accent: 'teal'
    },
    {
      id: 'dome',
      title: 'القبة الزجاجية الأيقونية والممشى المكيف',
      tag: 'الهندسة المعمارية',
      desc: 'قبة سماوية هندسية مبتكرة تتيح الإضاءة الطبيعية لجميع الطوابق مع الحفاظ على درجة حرارة مثالية طوال فصول السنة بنظام تكييف مركزي متطور.',
      specs: ['زجاج معزول حرارياً UV', 'إنارة معمارية ذكية LED', 'تصميم مستوحى من قباب الموصل'],
      icon: Sparkles,
      span: 'lg:col-span-4',
      accent: 'gold'
    },
    {
      id: 'dining',
      title: '12 مطعماً وتراساً سياحياً على ضفاف دجلة',
      tag: 'المطاعم واللايف ستايل',
      desc: 'وجهة الطهي والضيافة الأولى في الموصل؛ تضم أشهر المطاعم العالمية والمطابخ الموصلية العريقة مع جلسات خارجية مفتوحة على نسيم دجلة.',
      specs: ['شرفات وتراسات بانورامية', 'جلسات عائلية خاصة ومكيفة', 'إطلالات الغروب على النهر'],
      icon: UtensilsCrossed,
      span: 'lg:col-span-4',
      accent: 'teal'
    },
    {
      id: 'parking',
      title: '1,000+ موقف سيارات ذكي تحت الأرض',
      tag: 'البنية التحتية الذكية',
      desc: 'أكبر مجمع مواقف سيارات مؤتمت في قلب الموصل القديمة، يحل أزمة الازدحام المروري بفضل بوابات إلكترونية ومصاعد وسلالم سريعة تربط المواقف بكافة الطوابق.',
      specs: ['نظام إرشاد إلكتروني للمواقف', 'مصاعد شحن وبانوراما سريعة', 'مراقبة أمنية ذكية على مدار الساعة'],
      icon: Car,
      span: 'lg:col-span-4',
      accent: 'gold'
    },
    {
      id: 'business',
      title: 'مركز متكامل للمال والأعمال والمؤتمرات',
      tag: 'الأعمال والشركات',
      desc: 'مساحات مكتبية راقية وقاعات اجتماعات ومؤتمرات مجهزة بأحدث تقنيات الاتصال المرئي لخدمة الشركات والمؤسسات الاستثمارية في المحافظة.',
      specs: ['قاعات مؤتمرات متعددة الاستخدام', 'إنترنت ألياف ضوئية فائق السرعة', 'أجنحة تنفيذية مخصصة'],
      icon: Briefcase,
      span: 'lg:col-span-12',
      accent: 'gold'
    }
  ]

  const scrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pillars" className="relative py-24 bg-obsidian">
      
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs sm:text-sm font-semibold mb-4">
            <Layers className="w-4 h-4" />
            <span>ركائز ومكونات المشروع</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-black text-white leading-tight mb-4">
            منظومة متكاملة للتسوق، الضيافة، والترفيه
          </h2>

          <p className="text-base sm:text-lg text-slate-muted leading-relaxed">
            تمت هندسة داون تاون الموصل ليقدم معايير عالمية غير مسبوقة توازن بين احتياجات المستثمر وتطلعات الزائر في بيئة تجارية فاخرة.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            const hasImage = !!pillar.image

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`group relative rounded-2xl sm:rounded-3xl bg-charcoal/80 border border-white/10 hover:border-gold/40 backdrop-blur-xl overflow-hidden transition-all duration-500 flex flex-col justify-between p-5 sm:p-8 ${pillar.span}`}
              >
                {/* Visual Image Background for Hotel Pillar */}
                {hasImage && (
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={pillar.image} 
                      alt={pillar.imageAlt} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out opacity-35 group-hover:opacity-50"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/90 to-charcoal/50" />
                    <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-transparent to-charcoal" />
                  </div>
                )}

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Top Bar with Tag and Icon */}
                  <div className="flex items-center justify-between gap-3 mb-4 sm:mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-halan/90">
                      <span className={`w-1.5 h-1.5 rounded-full ${pillar.accent === 'gold' ? 'bg-gold' : 'bg-tigris'}`} />
                      <span>{pillar.tag}</span>
                    </span>

                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-gold/50 group-hover:bg-gold/15 transition-all shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-2xl font-cairo font-bold text-white mb-2.5 sm:mb-3 group-hover:text-gold transition-colors leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-base text-slate-muted leading-relaxed mb-4 sm:mb-6">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bottom Architectural Specs */}
                <div className="relative z-10 pt-4 border-t border-white/10 mt-auto">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {pillar.specs.map((spec, sIdx) => (
                      <span 
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-halan/80 bg-white/5 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg border border-white/5"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-gold/80" />
                        <span>{spec}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-gold/15 hover:bg-gold/25 border border-gold/40 text-gold font-cairo font-bold text-sm sm:text-base transition-all hover:scale-105 active:scale-95 min-h-[48px]"
          >
            <span>احجز مساحتك التجارية أو جناحك الفندقي الآن</span>
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  )
}