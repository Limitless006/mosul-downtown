import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Image as ImageIcon, 
  Maximize2, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Info,
  Calendar,
  Building2,
  MapPin
} from 'lucide-react'

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const galleryItems = [
    {
      id: 'main-render',
      category: 'architecture',
      title: 'الرندر المعماري الرئيسي والواجهة الحديثة',
      subtitle: 'التصميم المستقبلي للمجمع مع القبة الزجاجية الأيقونية ومداخل الزوار',
      src: 'https://img.youtube.com/vi/cixNeaVPunw/maxresdefault.jpg',
      meta: 'تصميم ثلاثي الأبعاد معتمد • استوديوهات MPC الهندسية',
      date: 'أيار 2024'
    },
    {
      id: 'night-view',
      category: 'riverfront',
      title: 'الرؤية الليلية الفخمة وانعكاسات دجلة',
      subtitle: 'إنارة معمارية متقدمة تبرز الأبراج الفندقية الثلاثة والواجهات الزجاجية المطلة على النهر',
      src: 'https://img.youtube.com/vi/39RMkNVnmYs/maxresdefault.jpg',
      meta: 'الإضاءة الديناميكية والأبراج الفندقية • 5 نجوم',
      date: 'أيار 2024'
    },
    {
      id: 'aerial-view',
      category: 'aerial',
      title: 'المنظور الجوي البانورامي لساحة الميدان',
      subtitle: 'يوضح توسط المجمع لقلب الموصل القديمة ومحاذاته المباشرة للجسر العتيق ونهر دجلة',
      src: 'https://img.youtube.com/vi/sKUGNkyZbl8/maxresdefault.jpg',
      meta: 'الموقع الاستراتيجي • ساحة الميدان - الجانب الأيمن',
      date: '2024'
    },
    {
      id: 'foundation',
      category: 'official',
      title: 'حفل وضع حجر الأساس والتدشين الرسمي',
      subtitle: 'التوثيق الرسمي للمشروع برعاية وحضور معالي محافظ نينوى، رئيس هيئة الاستثمار، ورئيس غرفة التجارة',
      src: 'https://img.youtube.com/vi/hleOBUgCKPw/maxresdefault.jpg',
      meta: 'تدشين رسمي • 28 أيار / مايو 2024',
      date: '28 أيار 2024'
    }
  ]

  const filters = [
    { id: 'all', label: 'كافة المعروضات' },
    { id: 'architecture', label: 'التصميم المعماري' },
    { id: 'riverfront', label: 'الإطلالة الليلية والنهرية' },
    { id: 'aerial', label: 'المنظور الجوي' },
    { id: 'official', label: 'التدشين الرسمي' }
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  const handlePrev = (e) => {
    e.stopPropagation()
    const currentIndex = galleryItems.findIndex(i => i.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length
    setSelectedImage(galleryItems[prevIndex])
  }

  const handleNext = (e) => {
    e.stopPropagation()
    const currentIndex = galleryItems.findIndex(i => i.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % galleryItems.length
    setSelectedImage(galleryItems[nextIndex])
  }

  return (
    <section id="gallery" className="relative py-24 bg-obsidian">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-gold/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs sm:text-sm font-semibold mb-4">
            <ImageIcon className="w-4 h-4" />
            <span>المعرض البصري التفاعلي</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-black text-white leading-tight mb-4">
            مشاهد حصرية من واقع ومستقبل المجمع
          </h2>

          <p className="text-base sm:text-lg text-slate-muted">
            استكشف الأصول البصرية الرسمية والمعتمدة؛ من رندرات الواجهات والقبة الزجاجية إلى وقائع حفل التدشين الرسمي في ساحة الميدان.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all min-h-[44px] ${
                  activeFilter === filter.id
                    ? 'bg-gold text-obsidian shadow-lg shadow-gold/20'
                    : 'bg-white/5 text-halan/80 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (2x2 luxury layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden bg-charcoal border border-white/10 hover:border-gold/50 cursor-pointer shadow-2xl transition-all duration-500"
            >
              {/* Image Container with aspect ratio */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-charcoal/80 backdrop-blur-md border border-white/15 text-xs text-gold font-medium">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </span>
                </div>

                {/* Hover Maximize Button */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-charcoal/80 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>

                {/* Bottom Overlay Details */}
                <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end">
                  <h3 className="text-lg sm:text-xl font-cairo font-bold text-white mb-2 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-muted line-clamp-2 mb-3">
                    {item.subtitle}
                  </p>
                  <div className="flex items-center gap-2 text-[11px] text-halan/70 font-medium">
                    <Info className="w-3.5 h-3.5 text-gold/80" />
                    <span>{item.meta}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-2xl p-4 sm:p-6 lg:p-10 flex items-center justify-center"
          >
            <div 
              onClick={(e) => e.stopPropagation()} 
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col rounded-3xl bg-charcoal border border-gold/30 shadow-2xl overflow-hidden"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-charcoal-dark">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-cairo font-bold text-white">
                      {selectedImage.title}
                    </h3>
                    <p className="text-xs text-gold">
                      {selectedImage.meta}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-halan hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="إغلاق المعاينة"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Image Area */}
              <div className="relative flex-1 bg-black/60 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[460px]">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title} 
                  className="max-h-[65vh] w-auto max-w-full object-contain"
                />

                {/* Left/Right Navigation Buttons */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-charcoal/80 hover:bg-charcoal border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 min-h-[44px]"
                  aria-label="الصورة التالية"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-charcoal/80 hover:bg-charcoal border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 min-h-[44px]"
                  aria-label="الصورة السابقة"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Footer Caption */}
              <div className="p-4 sm:p-6 bg-charcoal border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <p className="text-sm text-slate-muted max-w-3xl">
                  {selectedImage.subtitle}
                </p>
                <span className="text-xs text-halan/80 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 shrink-0">
                  تاريخ التوثيق: {selectedImage.date}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
