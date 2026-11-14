import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Send, 
  CheckCircle2, 
  Phone, 
  Mail, 
  User, 
  Building, 
  DollarSign, 
  MessageSquare, 
  Sparkles, 
  ShieldCheck, 
  PhoneCall 
} from 'lucide-react'

export default function LeadForm() {
  const [formType, setFormType] = useState('investor') // 'investor' or 'visitor'
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    unitType: 'retail',
    budget: '50k-100k',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 900)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      unitType: 'retail',
      budget: '50k-100k',
      message: ''
    })
  }

  return (
    <section id="contact" className="relative py-24 bg-obsidian">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gold/10 blur-[170px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>بوابة الحجز والاستفسارات المباشرة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-black text-white leading-tight mb-4">
            سجّل اهتمامك واحجز موقعك المتميز
          </h2>

          <p className="text-base sm:text-lg text-slate-muted">
            فريق العلاقات الاستثمارية والتأجير في داون تاون الموصل مستعد للرد على كافة استفساراتكم وترتيب زيارة موقعية خاصة.
          </p>
        </div>

        {/* Lead Capture Box */}
        <div className="rounded-3xl bg-charcoal/90 border border-gold/30 backdrop-blur-2xl p-5 sm:p-10 shadow-2xl shadow-black/80">
          
          {/* Form Type Tabs */}
          <div className="flex rounded-2xl bg-charcoal-dark border border-white/10 p-1 sm:p-1.5 mb-8 max-w-md mx-auto">
            <button
              type="button"
              onClick={() => setFormType('investor')}
              className={`flex-1 py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-cairo font-bold transition-all min-h-[44px] ${
                formType === 'investor'
                  ? 'bg-gradient-to-r from-gold to-gold-dark text-obsidian shadow-md'
                  : 'text-halan/70 hover:text-white'
              }`}
            >
              <span className="sm:hidden">استثمار وتملك</span>
              <span className="hidden sm:inline">استفسار استثماري وتملك وحدات</span>
            </button>

            <button
              type="button"
              onClick={() => setFormType('visitor')}
              className={`flex-1 py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-cairo font-bold transition-all min-h-[44px] ${
                formType === 'visitor'
                  ? 'bg-gradient-to-r from-gold to-gold-dark text-obsidian shadow-md'
                  : 'text-halan/70 hover:text-white'
              }`}
            >
              <span className="sm:hidden">زوار واستفسار عام</span>
              <span className="hidden sm:inline">استفسار عام وزوار ونشرة بريدية</span>
            </button>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-12 text-center flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 stroke-[2.2]" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-cairo font-bold text-white mb-2">
                  شكراً لتواصلك واهتمامك بداون تاون الموصل!
                </h3>

                <p className="text-sm sm:text-base text-slate-muted max-w-xl mx-auto mb-8 leading-relaxed">
                  تم استلام طلبكم بنجاح. سيقوم مستشار الاستثمار والمبيعات بالتواصل معكم عبر الهاتف أو تطبيق واتساب خلال أقل من ساعتين لتزويدكم بالمخططات والأسعار.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href="https://wa.me/9647501214455"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-cairo font-bold text-sm transition-all min-h-[44px] shadow-lg shadow-emerald-600/30"
                  >
                    <Phone className="w-4 h-4" />
                    <span>محادثة فورية عبر واتساب (07501214455)</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-halan font-semibold text-sm transition-all min-h-[44px]"
                  >
                    <span>إرسال طلب إضافي</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-halan/90 mb-2">
                      الاسم الكامل <span className="text-gold">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-muted">
                        <User className="w-5 h-5 text-gold/70" />
                      </div>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="مثال: د. أحمد الموصلي"
                        className="w-full pr-11 pl-4 py-3.5 rounded-xl bg-charcoal-dark border border-white/10 focus:border-gold focus:ring-2 focus:ring-gold/20 text-white placeholder-slate-500 text-sm transition-all min-h-[44px]"
                      />
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-halan/90 mb-2">
                      رقم الهاتف / واتساب <span className="text-gold">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-muted">
                        <Phone className="w-5 h-5 text-gold/70" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0750 123 4567"
                        dir="ltr"
                        className="w-full pr-11 pl-4 py-3.5 rounded-xl bg-charcoal-dark border border-white/10 focus:border-gold focus:ring-2 focus:ring-gold/20 text-white placeholder-slate-500 text-sm transition-all min-h-[44px] text-right"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-halan/90 mb-2">
                      البريد الإلكتروني
                    </label>
                    <div className="relative">
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-muted">
                        <Mail className="w-5 h-5 text-gold/70" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        dir="ltr"
                        className="w-full pr-11 pl-4 py-3.5 rounded-xl bg-charcoal-dark border border-white/10 focus:border-gold focus:ring-2 focus:ring-gold/20 text-white placeholder-slate-500 text-sm transition-all min-h-[44px] text-right"
                      />
                    </div>
                  </div>

                  {/* Unit Type Selection */}
                  {formType === 'investor' ? (
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-halan/90 mb-2">
                        نوع الوحدة المستهدفة <span className="text-gold">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-muted pointer-events-none">
                          <Building className="w-5 h-5 text-gold/70" />
                        </div>
                        <select
                          name="unitType"
                          value={formData.unitType}
                          onChange={handleChange}
                          className="w-full pr-11 pl-4 py-3.5 rounded-xl bg-charcoal-dark border border-white/10 focus:border-gold focus:ring-2 focus:ring-gold/20 text-white text-sm transition-all min-h-[44px] appearance-none"
                        >
                          <option value="retail">محل تجاري / متجر تجزئة (داخل المول أو القبة)</option>
                          <option value="hotel-suite">جناح فندقي استثماري (فنادق 5 نجوم)</option>
                          <option value="restaurant">مطعم / كافيه بتراس نهر دجلة</option>
                          <option value="office">مساحة مكتبية لرجال الأعمال والشركات</option>
                          <option value="kiosk">كشك أو ركن تجاري متخصص</option>
                        </select>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-halan/90 mb-2">
                        طبيعة الاستفسار <span className="text-gold">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-muted pointer-events-none">
                          <Building className="w-5 h-5 text-gold/70" />
                        </div>
                        <select
                          name="unitType"
                          value={formData.unitType}
                          onChange={handleChange}
                          className="w-full pr-11 pl-4 py-3.5 rounded-xl bg-charcoal-dark border border-white/10 focus:border-gold focus:ring-2 focus:ring-gold/20 text-white text-sm transition-all min-h-[44px] appearance-none"
                        >
                          <option value="general">استفسار عام عن موعد الافتتاح والخدمات</option>
                          <option value="hotel-booking">معلومات الحجز الفندقي المستقبلي</option>
                          <option value="brand-franchise">رغبة بفتح فرع لعلامة تجارية</option>
                          <option value="media-careers">العلاقات العامة وفرص العمل</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Investment Budget Range (If Investor) */}
                  {formType === 'investor' && (
                    <div className="md:col-span-2">
                      <label className="block text-xs sm:text-sm font-medium text-halan/90 mb-2">
                        الميزانية الاستثمارية التقريبية (بالدولار الأمريكي)
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                        {[
                          { id: '30k-60k', label: '30,000$ - 60,000$' },
                          { id: '60k-120k', label: '60,000$ - 120,000$' },
                          { id: '120k-250k', label: '120,000$ - 250,000$' },
                          { id: '250k+', label: '250,000$ فأكثر' }
                        ].map(budgetOpt => (
                          <button
                            type="button"
                            key={budgetOpt.id}
                            onClick={() => setFormData(p => ({ ...p, budget: budgetOpt.id }))}
                            className={`p-2.5 sm:p-3 rounded-xl border text-[11px] sm:text-sm font-semibold text-center transition-all min-h-[44px] ${
                              formData.budget === budgetOpt.id
                                ? 'bg-gold/15 border-gold text-gold shadow-md'
                                : 'bg-charcoal-dark border-white/10 text-slate-muted hover:text-white hover:border-white/20'
                            }`}
                          >
                            {budgetOpt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Notes / Message */}
                  <div className="md:col-span-2">
                    <label className="block text-xs sm:text-sm font-medium text-halan/90 mb-2">
                      ملاحظات أو استفسارات إضافية
                    </label>
                    <div className="relative">
                      <div className="absolute right-3.5 top-3.5 text-slate-muted">
                        <MessageSquare className="w-5 h-5 text-gold/70" />
                      </div>
                      <textarea
                        rows={3}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="اكتب أية تفاصيل تفضل مناقشتها مع مستشار المبيعات..."
                        className="w-full pr-11 pl-4 py-3 rounded-xl bg-charcoal-dark border border-white/10 focus:border-gold focus:ring-2 focus:ring-gold/20 text-white placeholder-slate-500 text-sm transition-all resize-none"
                      />
                    </div>
                  </div>

                </div>

                {/* Privacy Assurance & Submit Button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-slate-muted">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>بياناتكم محمية وسرية ولن تُشارك مع أي طرف خارجي.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-gold via-gold-light to-gold text-obsidian font-cairo font-bold text-base hover:shadow-xl hover:shadow-gold/25 hover:brightness-105 active:scale-95 disabled:opacity-50 transition-all min-h-[48px]"
                  >
                    {isSubmitting ? (
                      <span>جاري إرسال الطلب...</span>
                    ) : (
                      <>
                        <span>إرسال طلب الحجز والاستفسار</span>
                        <Send className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </div>

              </motion.form>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  )
}