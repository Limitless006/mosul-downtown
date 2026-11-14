import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import LocationSection from './components/LocationSection'
import BentoGrid from './components/BentoGrid'
import PersonaSwitcher from './components/PersonaSwitcher'
import GallerySection from './components/GallerySection'
import DeveloperSection from './components/DeveloperSection'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'
import { Phone, MessageCircle } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-halan selection:bg-gold selection:text-obsidian flex flex-col font-sans">
      {/* Top Floating Glassmorphic Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Parallax Reveal */}
        <Hero />

        {/* 2. Live Animated Stats Bar */}
        <StatsBar />

        {/* 3. Strategic Location & Tigris Riverfront Section */}
        <LocationSection />

        {/* 4. Project Pillars Interactive Bento Grid */}
        <BentoGrid />

        {/* 5. Dual-Persona Switcher: Investor Hub vs. Visitor Experience */}
        <PersonaSwitcher />

        {/* 6. High-Res Architectural Visual Gallery */}
        <GallerySection />

        {/* 7. Developer & Official Government Endorsement */}
        <DeveloperSection />

        {/* 8. Interactive Lead Generation & Booking Form */}
        <LeadForm />
      </main>

      {/* 9. Luxury Comprehensive Footer */}
      <Footer />

      {/* Floating Quick Action Hotline Bar */}
      <div className="fixed bottom-5 left-5 z-40 flex items-center gap-3">
        {/* WhatsApp Direct Action */}
        <a
          href="https://wa.me/9647501214455"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-950/60 transition-all hover:scale-105 min-h-[44px]"
          title="تواصل معنا عبر واتساب"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">واتساب الاستثمار</span>
        </a>

        {/* Phone Quick Call */}
        <a
          href="tel:07501214455"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark text-obsidian shadow-xl shadow-gold/30 hover:scale-105 transition-all min-h-[44px] min-w-[44px]"
          title="اتصال هاتفي مباشر"
        >
          <Phone className="w-5 h-5 stroke-[2.2]" />
        </a>
      </div>
    </div>
  )
}
