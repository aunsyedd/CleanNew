import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 pt-24 pb-16">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/sofaclean.jpg"
          alt="Luxury Sofa Cleaning"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Gold Gradient Glow */}
      <div
        className="absolute inset-0 z-10 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(212,175,55,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Decorative Blur Effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-yellow-500/5 blur-3xl z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-3xl animate-fade-up">
        
        {/* <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-yellow-400 mb-4">
          Cleaning • Caring • Protecting
        </p> */}

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight mb-6">
          <span className="text-yellow-400">Premium</span>
          <br />
          <span className="text-white">Sofa Cleaning</span>
        </h1>

        <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed mb-10">
          Restore the beauty, comfort, and hygiene of your upholstery with
          expert deep cleaning and long-lasting fabric protection — delivered
          with luxury care.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#contact"
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full text-sm uppercase tracking-widest text-center transition-all duration-300"
          >
            Reach Us 
          </a>

          <a
            href="#services"
            className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-full text-sm uppercase tracking-widest text-center transition-all duration-300"
          >
            Our Services
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-14 text-center">
          {[
            { value: "500+", label: "Sofas Cleaned" },
            { value: "100%", label: "Satisfaction" },
            { value: "Eco", label: "Safe Products" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl sm:text-3xl text-yellow-400 font-semibold">
                {stat.value}
              </p>

              <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}