import Link from 'next/link';
import { CheckCircle, Target, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-dark-card border-b border-brand-gold/20">
        <div className="container mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-brand-gold">Mission</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Rally Point TCG is more than a store — it's a gathering place for collectors who value
            integrity, service, and community. Veteran owned. Mission ready.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The <span className="text-brand-red">Rally Point</span> Story
          </h2>

          <div className="space-y-6 text-text-secondary leading-relaxed text-left">
            <p>
              Rally Point TCG was born from a simple observation: the trading card community deserves
              a vendor that brings the same values to business that we brought to our service.
            </p>

            <p>
              A "rally point" in military operations is a designated place where scattered units gather
              to regroup. We chose this name because that's exactly what we wanted to build — a
              gathering place where card collectors could assemble, share their passion, and trust they
              were getting treated fairly.
            </p>

            <p>
              Every transaction at Rally Point TCG is backed by the commitment to authenticity,
              fair pricing, and transparent communication. We know the value of trust because we built
              our careers on it. Now we're applying those lessons to help you build your collection.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-dark-card border-y border-brand-gold/20 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Our <span className="text-brand-gold">Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service */}
            <div className="bg-dark-bg border border-brand-gold/20 rounded-lg p-8">
              <Target className="text-brand-gold mb-4" size={40} />
              <h3 className="text-xl font-bold text-white mb-4">Service First</h3>
              <p className="text-text-secondary">
                Every interaction is an opportunity to demonstrate the respect and attention to detail
                our military careers taught us. Your satisfaction is our mission.
              </p>
            </div>

            {/* Integrity */}
            <div className="bg-dark-bg border border-brand-gold/20 rounded-lg p-8">
              <CheckCircle className="text-brand-red mb-4" size={40} />
              <h3 className="text-xl font-bold text-white mb-4">Integrity</h3>
              <p className="text-text-secondary">
                No bait-and-switch tactics. No hidden fees. What you see is what you get. Every card
                is accurately graded and honestly described.
              </p>
            </div>

            {/* Community */}
            <div className="bg-dark-bg border border-brand-gold/20 rounded-lg p-8">
              <Users className="text-brand-red mb-4" size={40} />
              <h3 className="text-xl font-bold text-white mb-4">Community</h3>
              <p className="text-text-secondary">
                We're building something together. A community where collectors share knowledge, celebrate
                finds, and support each other's passion for the hobby.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rally Point Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Why <span className="text-brand-gold">Rally Point</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: '✓',
              title: 'Authentic Cards',
              description:
                'Every card verified for authenticity. You get what you pay for, backed by our guarantee.',
            },
            {
              icon: '⚡',
              title: 'Fast Shipping',
              description:
                "Orders ship within 24 hours. Because we know you can\u0027t wait to add to your collection.",
            },
            {
              icon: '🎖️',
              title: 'Veteran Support',
              description:
                'A portion of every sale goes back to veteran support organizations.',
            },
            {
              icon: '🤝',
              title: 'Transparent Pricing',
              description:
                'No surprise fees. Market-competitive rates with honest grading standards.',
            },
            {
              icon: '📚',
              title: 'Expert Curation',
              description:
                'We know trading cards because we collect them. Every card is personally vetted.',
            },
            {
              icon: '🏆',
              title: 'Community Events',
              description:
                'Monthly tournaments, rare card drops, and collector spotlights. Stay tuned.',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="text-4xl flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-text-secondary">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative bg-dark-card border-t border-brand-gold/20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-brand-gold rounded-full mix-blend-multiply filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join the Rally?
          </h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Start building your collection today with cards you can trust from a vendor you can
            believe in.
          </p>
          <Link href="/shop">
            <button className="inline-block px-8 py-4 bg-brand-gold text-dark-bg font-bold rounded-lg hover:shadow-brand-gold-lg transform hover:scale-105 transition-all">
              SHOP NOW
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
