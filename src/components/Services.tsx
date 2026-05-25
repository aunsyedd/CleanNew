const services = [
  {
    id: "cleaning",
    title: "Cleaning",
    tagline: "Deep restoration",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.47 2.94a2.25 2.25 0 01-2.01 1.24H8.48a2.25 2.25 0 01-2.01-1.24L5 14.5m14 0H5"
      />
    ),
    description:
      "Steam and dry extraction for fabric, leather, and suede. We remove stains, odours, allergens, and embedded dirt without damaging fibres.",
    features: ["Stain removal", "Odour neutralising", "Allergen reduction", "Pet-safe methods"],
  },
  {
    id: "caring",
    title: "Caring",
    tagline: "Gentle on your home",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    ),
    description:
      "pH-balanced, eco-friendly solutions tailored to each fabric type. We treat your furniture like an investment — never harsh chemicals.",
    features: ["Eco-friendly products", "Fabric-specific care", "Child & pet safe", "No residue left"],
  },
  {
    id: "protecting",
    title: "Protecting",
    tagline: "Lasting defence",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    ),
    description:
      "Optional Scotchgard-style fabric guard repels spills and daily wear. Keep sofas looking showroom-fresh between professional visits.",
    features: ["Spill repellent coating", "UV fade reduction", "Extended fabric life", "Easy maintenance"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-mid mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-white mb-4">
            Our <span className="gold-text">Services</span>
          </h2>
          <div className="section-divider w-32 mx-auto mt-6" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Every service reflects our promise: Cleaning, Caring, and Protecting
            the sofas you love.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="card-premium rounded-2xl p-8 flex flex-col"
            >
              <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mb-6 text-gold">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {service.icon}
                </svg>
              </div>
              <p className="text-xs uppercase tracking-widest text-gold-mid mb-1">
                {service.tagline}
              </p>
              <h3 className="font-display text-2xl text-white font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Sectional sofas",
            "Leather & suede",
            "Armchairs & recliners",
            "Mattresses & cushions",
          ].map((item) => (
            <div
              key={item}
              className="text-center py-4 px-3 rounded-xl border border-gold/10 bg-charcoal/50 text-sm text-gray-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
