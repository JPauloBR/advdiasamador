import { Shield, Target, Clock, Heart } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Proven Track Record",
    description: "Decades of successful case outcomes and satisfied clients across diverse practice areas."
  },
  {
    icon: Target,
    title: "Personalized Approach",
    description: "Every case receives individual attention with strategies tailored to your specific situation."
  },
  {
    icon: Clock,
    title: "Responsive Service",
    description: "We prioritize communication and keep you informed every step of the way."
  },
  {
    icon: Heart,
    title: "Client-Centered",
    description: "Your goals and concerns are at the heart of everything we do."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Our Firm
          </h2>
          <p className="text-lg text-primary-foreground/80">
            We combine legal excellence with a commitment to personalized service that sets us apart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="p-8 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6">
                <reason.icon className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
