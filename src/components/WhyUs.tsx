const reasons = [
  {
    title: "Trained Specialists",
    text: "Certified technicians who understand every fabric — from velvet to performance weave.",
  },
  {
    title: "Same-Day Slots",
    text: "Flexible booking including evenings and weekends to fit your schedule.",
  },
  {
    title: "Fully Insured",
    text: "Your property and furniture are covered for complete peace of mind.",
  },
  {
    title: "Fair Pricing",
    text: "Transparent quotes with no hidden fees — you know the cost before we start.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold-mid mb-3">
              Why CleanNew
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold text-white leading-tight mb-6">
              Luxury care for{" "}
              <span className="gold-text">every sofa</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Your sofa is the heart of your living space. We combine professional
              equipment with meticulous hand-finished detail — so it looks, smells,
              and feels renewed without a single harsh shortcut.
            </p>
            <div className="h-1 w-24 shimmer-line rounded-full mb-8" />
            <a
              href="#contact"
              className="inline-flex btn-gold px-7 py-3.5 rounded-full text-sm uppercase tracking-widest"
            >
              Schedule a Visit
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="card-premium rounded-xl p-6"
              >
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-2xl border border-gold/20 bg-gradient-to-br from-charcoal to-black-deep p-8 sm:p-12 text-center gold-glow">
          <p className="font-display text-xl sm:text-2xl text-white italic leading-relaxed max-w-3xl mx-auto">
            &ldquo;Our sofa looked brand new — stains gone, no chemical smell, and
            the fabric guard has already saved us from two spills.&rdquo;
          </p>
          <p className="mt-6 text-sm uppercase tracking-widest text-gold-mid">
            — Happy CleanNew Customer
          </p>
        </div>
      </div>
    </section>
  );
}
