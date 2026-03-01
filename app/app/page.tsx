import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '4Clean | Calgary Cleaning & Junk Removal',
  description: 'Professional cleaning and junk removal in Calgary. Fixed pricing, vetted team, easy booking. Residential, commercial & more.',
}

const stats = [
  { value: '500+', label: 'Homes & Offices Cleaned' },
  { value: '98%', label: 'On-Time Rate' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '3+', label: 'Years in Business' },
]

const trustBadges = [
  { icon: '🛡️', title: 'Insured & Bonded', desc: 'Your property is protected. Certificate available on request.' },
  { icon: '🧾', title: 'Transparent Pricing', desc: 'Fixed rates and clear add-ons. No surprises.' },
  { icon: '🧹', title: 'Supplies Included', desc: 'Professional-grade tools. Eco-friendly options available.' },
  { icon: '🧑‍🔧', title: 'Background-Checked', desc: 'A vetted team you\'ll feel comfortable inviting home.' },
  { icon: '📅', title: 'Flexible Scheduling', desc: 'One-time, recurring, or same-day cleaning.' },
  { icon: '✅', title: 'Detailed Checklists', desc: 'Every clean follows a checklist for consistency.' },
]

const services = [
  {
    href: '/residential',
    icon: '🏠',
    title: 'Residential Cleaning',
    desc: 'Apartments, houses, move-in/move-out, Airbnb turnovers, deep cleans & more.',
    color: 'from-blue-50 to-blue-100',
    iconBg: 'bg-blue-100',
  },
  {
    href: '/commercial',
    icon: '🏢',
    title: 'Commercial Cleaning',
    desc: 'Offices, gyms, clinics — tailored schedules for your business needs.',
    color: 'from-indigo-50 to-indigo-100',
    iconBg: 'bg-indigo-100',
  },
  {
    href: '/junk-removal',
    icon: '🚛',
    title: 'Junk Removal',
    desc: 'We haul away unwanted items and dispose responsibly. Pay per load, not per hour.',
    color: 'from-amber-50 to-orange-100',
    iconBg: 'bg-amber-100',
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-white pt-16">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-100 opacity-50 blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-blue-200 opacity-30 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-blue-100 opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-blue-50 opacity-20" />
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Serving Calgary & Surrounding Areas
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight mb-6" style={{fontFamily:'Outfit,sans-serif'}}>
              <span className="text-gray-900">Perfectly</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Clean Spaces.</span>
              <br />
              <span className="text-gray-900">Stress-Free.</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
              Warm, reliable cleaning services for homes and businesses in Calgary.
              Fixed pricing, vetted team, and easy booking.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+15879666786"
                className="bg-blue-700 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
              >
                📞 Call Now
              </a>
              <a
                href="mailto:support@4clean.ca"
                className="border-2 border-blue-700 text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all text-lg"
              >
                ✉️ Email Us
              </a>
            </div>

            {/* Quick trust signals */}
            <div className="mt-10 flex flex-wrap gap-5 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">✅ Insured</span>
              <span className="flex items-center gap-1.5">✅ Fixed Pricing</span>
              <span className="flex items-center gap-1.5">✅ Background-Checked</span>
              <span className="flex items-center gap-1.5">✅ Same-Day Available</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400">
          <span className="text-xs">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-blue-700 py-14">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-black text-white mb-1" style={{fontFamily:'Outfit,sans-serif'}}>{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900 mb-4" style={{fontFamily:'Outfit,sans-serif'}}>
              Why Calgary Residents Trust 4Clean
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We built our business on reliability, transparency, and actually showing up on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{badge.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2" style={{fontFamily:'Outfit,sans-serif'}}>{badge.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900 mb-4" style={{fontFamily:'Outfit,sans-serif'}}>
              Residential & Commercial
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From apartments to clinics, we design custom task lists for your space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className={`group bg-gradient-to-br ${service.color} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`w-14 h-14 ${service.iconBg} rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" style={{fontFamily:'Outfit,sans-serif'}}>{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                <span className="text-blue-700 font-semibold text-sm group-hover:gap-3 flex items-center gap-2 transition-all">
                  Learn more <span>→</span>
                </span>
              </Link>
            ))}
          </div>

          {/* Mini checklist */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6" style={{fontFamily:'Outfit,sans-serif'}}>We handle it all:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-600">
              {[
                'Kitchens & Appliances', 'Bathrooms & Floors', 'Dusting & Surfaces',
                'Carpet Stain Removal', 'Window Cleaning', 'Laundry (add-on)',
                'Fridge & Oven', 'Post-Construction', 'Move In / Move Out',
              ].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-700 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-600 opacity-30 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-800 opacity-40 blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{fontFamily:'Outfit,sans-serif'}}>
            Ready when you are.
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Choose your time — our team brings everything needed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+15879666786"
              className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all shadow-lg text-lg"
            >
              📞 +1 (587) 966-6786
            </a>
            <a
              href="mailto:support@4clean.ca"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all text-lg"
            >
              ✉️ support@4clean.ca
            </a>
          </div>
        </div>
      </section>
    </>
  )
                }
