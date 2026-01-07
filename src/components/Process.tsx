import { ClipboardList, Palette, Code2, TestTube, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: ClipboardList,
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We conduct thorough stakeholder interviews to understand your business objectives and technical requirements.',
    },
    {
      icon: Palette,
      step: '02',
      title: 'Strategic Design',
      description: 'Our design team creates detailed wireframes and prototypes aligned with your brand standards.',
    },
    {
      icon: Code2,
      step: '03',
      title: 'Agile Development',
      description: 'Our engineers build your solution using clean, maintainable code with regular milestone reviews.',
    },
    {
      icon: TestTube,
      step: '04',
      title: 'Quality Assurance',
      description: 'Rigorous testing across platforms ensures reliability, security, and optimal performance.',
    },
    {
      icon: Rocket,
      step: '05',
      title: 'Launch & Support',
      description: 'Seamless deployment followed by ongoing maintenance and dedicated support partnership.',
    },
  ];

  return (
    <section id="process" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Our Methodology
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-primary">
            A Structured Approach to{' '}
            <span className="gradient-text">Delivering Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our proven five-phase methodology ensures every project is delivered 
            on time, within budget, and exceeds quality expectations.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="relative group"
              >
                <div className="bg-card rounded-xl p-6 border border-border text-center relative z-10 h-full card-hover">
                  {/* Step Number */}
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-display font-bold flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>

                  <h3 className="font-display font-bold text-lg mb-3 text-primary">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 z-20">
                    <div className="w-6 h-6 rounded-full bg-accent/20 border-2 border-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
