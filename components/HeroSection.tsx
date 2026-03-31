import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-24 md:py-36 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 text-white">
          <span className="text-neon-cyan drop-shadow-lg">RALLY</span>
          <span className="block">POINT</span>
          <span className="text-neon-purple">TCG</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto">
          Veteran Owned. Mission Ready. <span className="text-neon-cyan font-bold">Game On.</span>
        </p>

        {/* Description */}
        <p className="text-text-secondary mb-10 max-w-xl mx-auto">
          Your mission: Build the ultimate trading card collection. Our mission: Get you there.
        </p>

        {/* CTA Button */}
        <Link href="/shop">
          <button className="inline-block px-8 py-4 bg-neon-cyan text-dark-bg font-bold text-lg rounded-lg hover:shadow-neon-cyan-lg transform hover:scale-105 transition-all duration-300">
            SHOP NOW
          </button>
        </Link>
      </div>
    </div>
  );
}
