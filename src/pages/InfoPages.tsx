import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// --- SHARED LAYOUT COMPONENT ---
const LuxuryLayout = ({ 
  title, 
  subtitle, 
  children 
}: { 
  title: string, 
  subtitle?: string,
  children: React.ReactNode 
}) => (
  <div className="min-h-screen bg-midnight text-white flex flex-col">
    <Navbar />
    
    {/* Main Content Area */}
    <main className="flex-grow pt-32 pb-24 px-6 relative overflow-hidden">
      
      {/* Subtle Background Gradient for depth */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-serif text-gold mb-6 tracking-wide">
            {title}
          </h1>
          {subtitle && (
            <div className="h-px w-24 bg-white/30 mx-auto mb-6" />
          )}
          {subtitle && (
            <p className="font-sans text-white/80 uppercase tracking-[0.2em] text-sm font-medium">
              {subtitle}
            </p>
          )}
        </div>

        {/* Text Content */}
        <div className="mx-auto font-light leading-relaxed text-white/90">
          {children}
        </div>
      </div>
    </main>

    <Footer />
  </div>
);


// --- 1. CONTACT PAGE ---
export const Contact = () => (
  <LuxuryLayout title="Get in Touch" subtitle="Concierge & Enquiries">
    <div className="grid md:grid-cols-2 gap-20 items-start mt-8">
      
      {/* Left: Contact Info */}
      <div className="space-y-10">
        <p className="text-2xl font-serif italic text-white leading-relaxed">
          "For those who seek the extraordinary in every detail."
        </p>
        <p className="text-lg text-white/80 leading-8">
          Whether you wish to propose a venue for our curated collection, 
          request a partnership, or simply share your experience, we are at your disposal.
        </p>
        
        <div className="pt-10 border-t border-white/20">
          <h3 className="text-gold text-sm uppercase tracking-widest mb-2 font-semibold">General Enquiries</h3>
          <p className="font-serif text-xl">hello@cardiffcompass.com</p>
        </div>

        <div>
          <h3 className="text-gold text-sm uppercase tracking-widest mb-2 font-semibold">Press & Media</h3>
          <p className="font-serif text-xl">press@cardiffcompass.com</p>
        </div>
      </div>

      {/* Right: Minimalist Form */}
      <form className="space-y-8">
        <div className="group">
          <label className="block text-sm uppercase tracking-widest text-white/60 mb-3 group-focus-within:text-gold transition-colors">Name</label>
          <input 
            type="text" 
            className="w-full bg-transparent border-b border-white/30 py-3 text-lg text-white outline-none focus:border-gold transition-colors"
          />
        </div>
        
        <div className="group">
          <label className="block text-sm uppercase tracking-widest text-white/60 mb-3 group-focus-within:text-gold transition-colors">Email Address</label>
          <input 
            type="email" 
            className="w-full bg-transparent border-b border-white/30 py-3 text-lg text-white outline-none focus:border-gold transition-colors"
          />
        </div>

        <div className="group">
          <label className="block text-sm uppercase tracking-widest text-white/60 mb-3 group-focus-within:text-gold transition-colors">Message</label>
          <textarea 
            rows={5} 
            className="w-full bg-transparent border-b border-white/30 py-3 text-lg text-white outline-none focus:border-gold transition-colors resize-none"
          />
        </div>

        <button className="mt-10 px-10 py-4 border border-white/40 text-white text-sm uppercase tracking-[0.25em] hover:bg-white hover:text-midnight hover:border-white transition-all duration-500">
          Send Message
        </button>
      </form>
    </div>
  </LuxuryLayout>
);


// --- 2. PRIVACY POLICY ---
export const Privacy = () => (
  <LuxuryLayout title="Privacy Policy" subtitle="Last Updated: Dec 2025">
    <div className="space-y-16 font-sans font-light text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
      <section>
        <h3 className="text-3xl font-serif text-white mb-6">1. Introduction</h3>
        <p className="leading-relaxed">
          At Cardiff Compass, we believe that privacy is the ultimate luxury. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
        </p>
      </section>

      <section>
        <h3 className="text-3xl font-serif text-white mb-6">2. Information We Collect</h3>
        <p className="leading-relaxed">
          We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the Website or otherwise contacting us.
        </p>
        <ul className="list-disc pl-6 mt-6 space-y-3 marker:text-gold">
          <li>Name and Contact Data</li>
          <li>Credentials</li>
          <li>Payment Data (if applicable)</li>
        </ul>
      </section>

      <section>
        <h3 className="text-3xl font-serif text-white mb-6">3. How We Use Your Information</h3>
        <p className="leading-relaxed">
          We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
        </p>
      </section>
    </div>
  </LuxuryLayout>
);


// --- 3. TERMS OF SERVICE ---
export const Terms = () => (
  <LuxuryLayout title="Terms of Service" subtitle="Legal Agreements">
    <div className="space-y-16 font-sans font-light text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
      <section>
        <h3 className="text-3xl font-serif text-white mb-6">1. Agreement to Terms</h3>
        <p className="leading-relaxed">
          These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Cardiff Compass (“we,” “us” or “our”), concerning your access to and use of the Cardiff Compass website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
        </p>
      </section>

      <section>
        <h3 className="text-3xl font-serif text-white mb-6">2. Intellectual Property Rights</h3>
        <p className="leading-relaxed">
          Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
        </p>
      </section>

      <section>
        <h3 className="text-3xl font-serif text-white mb-6">3. User Representations</h3>
        <p className="leading-relaxed">
          By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use.
        </p>
      </section>
    </div>
  </LuxuryLayout>
);