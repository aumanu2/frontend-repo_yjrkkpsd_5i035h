import React from 'react'
import { motion } from 'framer-motion'
import { Spline } from '@splinetool/react-spline'
import { Bot, Brain, GraduationCap, ArrowRight, MapPin, Mail, Phone } from 'lucide-react'

function NavBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-amber-400 shadow-inner" />
          <span className="text-lg font-semibold tracking-tight">Perth AI Consulting</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#services" className="hover:text-slate-900 transition">Services</a>
          <a href="#approach" className="hover:text-slate-900 transition">Approach</a>
          <a href="#about" className="hover:text-slate-900 transition">About</a>
          <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-sm shadow-lg hover:shadow-xl transition">
          Start a project <ArrowRight size={16} />
        </a>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f1020] via-[#0e0f1b] to-[#0b0c14] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-purple-500/60 via-blue-500/60 to-amber-400/60" />
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-indigo-500/50 via-fuchsia-500/50 to-orange-300/50" />
      </div>

      <div className="absolute inset-0 -z-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 text-xs tracking-wide uppercase">
            <MapPin className="h-3.5 w-3.5" /> Perth • Australia
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            Build, launch and scale with AI
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-amber-300">— tailored to your business</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
            We design and deliver production-grade AI systems: from strategy and training to custom-built copilots, automations and voice agents. Fast iterations. Clear ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-slate-900 font-medium hover:opacity-90 transition shadow-xl">
              Book a discovery call <ArrowRight size={18} />
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 ring-1 ring-white/20 hover:bg-white/15 transition">
              Explore services
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300/90">
            <span className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10">Custom AI Development</span>
            <span className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10">AI Strategy</span>
            <span className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10">AI Training</span>
          </div>
        </motion.div>
        <div className="hidden md:block" />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-300/80">
        Scroll
      </div>
    </section>
  )
}

function ServiceCard({ icon: Icon, title, desc, items, accent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-2xl p-6 bg-white/60 backdrop-blur border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-lg transition"
    >
      <div className={`absolute -top-3 -left-3 h-14 w-14 rounded-xl blur-xl opacity-50 ${accent}`} />
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-xl grid place-items-center bg-slate-900 text-white shadow-lg">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-slate-600 mt-4 leading-relaxed">{desc}</p>
      {items?.length ? (
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          {items.map((it, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" /> {it}
            </li>
          ))}
        </ul>
      ) : null}
      <button className="mt-5 inline-flex items-center gap-2 text-slate-900 font-medium">
        Learn more <ArrowRight size={16} />
      </button>
    </motion.div>
  )
}

function Services() {
  return (
    <section id="services" className="relative bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            What we do
          </h2>
          <p className="text-slate-600 mt-3">
            End-to-end solutions to help Perth organisations adopt AI with confidence and speed.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <ServiceCard
            icon={Bot}
            title="Custom AI Development"
            desc="We build bespoke copilots, chat and voice agents, automations and computer vision systems that plug directly into your tools and data."
            items={[
              'RAG, agents and workflow automations',
              'Voice and chat experiences',
              'Data pipelines and evals',
              'Secure deployment and monitoring',
            ]}
            accent="bg-gradient-to-tr from-purple-500 via-blue-500 to-amber-300"
          />
          <ServiceCard
            icon={Brain}
            title="AI Strategy"
            desc="Identify high-ROI opportunities and a practical roadmap. We work with leadership and teams to align on goals, constraints and metrics."
            items={[
              'Opportunity mapping and ROI cases',
              'Tech stack + vendor selection',
              'Risk, governance and security',
              'Pilot design and success metrics',
            ]}
            accent="bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-pink-400"
          />
          <ServiceCard
            icon={GraduationCap}
            title="AI Training"
            desc="Hands-on workshops to upskill your team—from prompt engineering to building internal copilots and automations."
            items={[
              'Exec briefings and demos',
              'Team enablement workshops',
              'Best practices and guardrails',
              'Capability building programs',
            ]}
            accent="bg-gradient-to-tr from-amber-400 via-orange-400 to-rose-400"
          />
        </div>
      </div>
    </section>
  )
}

function Approach() {
  const steps = [
    { title: 'Discover', desc: 'Rapid assessment to uncover high-impact use cases.' },
    { title: 'Prototype', desc: 'Fast iterations to validate value and UX with real data.' },
    { title: 'Production', desc: 'Hardened, secure deployments with monitoring and analytics.' },
    { title: 'Enable', desc: 'Train teams, document processes and hand over with confidence.' },
  ]
  return (
    <section id="approach" className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-extrabold text-center">
          Our approach
        </motion.h2>
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl p-6 bg-slate-50 border border-slate-200">
              <div className="text-5xl font-black text-slate-200">{String(i + 1).padStart(2, '0')}</div>
              <div className="mt-4 text-xl font-semibold">{s.title}</div>
              <p className="text-slate-600 mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-blue-600 to-amber-400 opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="rounded-3xl p-8 md:p-12 bg-slate-900 text-white border border-white/10 shadow-2xl overflow-hidden">
          <div className="absolute -top-24 -right-12 h-72 w-72 rounded-full blur-3xl bg-amber-400/30" />
          <div className="absolute -bottom-24 -left-12 h-72 w-72 rounded-full blur-3xl bg-purple-500/30" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold">Let’s discuss your AI roadmap</h3>
              <p className="text-slate-300 mt-3">Tell us about your goals. We’ll propose a pragmatic plan and timeline within days.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="mailto:hello@perthaiconsulting.com" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-slate-900 font-medium hover:opacity-90 transition">
                  Email us <Mail size={18} />
                </a>
                <a href="tel:+61000000000" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 ring-1 ring-white/20 hover:bg-white/15 transition">
                  Call <Phone size={18} />
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <div className="text-slate-400">Location</div>
                  <div className="font-medium">Perth, WA</div>
                </div>
                <div className="space-y-1">
                  <div className="text-slate-400">Response time</div>
                  <div className="font-medium">1–2 business days</div>
                </div>
                <div className="space-y-1">
                  <div className="text-slate-400">Services</div>
                  <div className="font-medium">Development, Strategy, Training</div>
                </div>
                <div className="space-y-1">
                  <div className="text-slate-400">Industries</div>
                  <div className="font-medium">Mining, Energy, Healthcare, SMB</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-amber-400" />
          <span>© {new Date().getFullYear()} Perth AI Consulting. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#services" className="hover:text-slate-900">Services</a>
          <a href="#approach" className="hover:text-slate-900">Approach</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />
      <Hero />
      <Services />
      <Approach />
      <CTA />
      <Footer />
    </div>
  )
}
