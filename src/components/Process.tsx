const steps = [
  {
    step: "01",
    title: "Inspect & Quote",
    text: "We assess fabric type, stains, and size — then give you a clear, upfront price.",
  },
  {
    step: "02",
    title: "Pre-Treat",
    text: "Targeted spot treatment loosens stubborn marks before the main clean.",
  },
  {
    step: "03",
    title: "Deep Clean",
    text: "Professional extraction removes dirt deep in cushions and crevices.",
  },
  {
    step: "04",
    title: "Protect & Dry",
    text: "Optional fabric guard applied; quick-dry process so you can relax sooner.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32 px-6 bg-black-soft">
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent, rgba(212,175,55,0.05) 50%, transparent)",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-mid mb-3">
            How It Works
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-white">
            Simple <span className="gold-text">4-Step</span> Process
          </h2>
          <div className="section-divider w-32 mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <div key={item.step} className="relative group">
              {/* {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-gold/40 to-transparent" />
              )} */}
              <div className="card-premium rounded-2xl p-6 h-full">
                <span className="font-display text-4xl gold-text font-bold opacity-80">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold text-white mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
