"use client";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 bg-black-soft">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-mid mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-white mb-4">
            Book Your <span className="gold-text">Clean</span> Today
          </h2>
          <div className="section-divider w-32 mx-auto mt-6" />
          <p className="text-gray-400 mt-6">
            Free quotes · No obligation · We respond within 24 hours
          </p>
        </div>

        <form
          className="card-premium rounded-2xl p-8 sm:p-10 space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">
                Name
              </span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full bg-black-deep border border-gold/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">
                Phone
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                className="w-full bg-black-deep border border-gold/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
              />
            </label>
          </div>
          <label className="block">
            <span className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">
              Email
            </span>
            <input
              type="email"
              name="email"
              placeholder="you@email.com"
              className="w-full bg-black-deep border border-gold/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
            />
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">
              Sofa details
            </span>
            <textarea
              name="message"
              rows={4}
              placeholder="Type of sofa, number of seats, stains or concerns..."
              className="w-full bg-black-deep border border-gold/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all resize-none"
            />
          </label>
          <button
            type="submit"
            className="w-full btn-gold py-4 rounded-full text-sm uppercase tracking-widest"
          >
            Request Free Quote
          </button>
        </form>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 text-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Call</p>
            <a className="text-gray-300">
             +966-53-777-2926
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Location</p>
            <a
              className="text-gold hover:text-gold-light transition-colors , cursor-pointer"
            >
              Malibari Centre, Sari Street, Jeddah, Saudi Arabia
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Hours</p>
            <p className="text-gray-300">Mon – Sat, 8am – 8pm</p>
          </div>
        </div>
      </div>
    </section>
  );
}
