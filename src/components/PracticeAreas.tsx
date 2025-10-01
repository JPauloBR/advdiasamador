import { Building2, Users2, FileText, Home, Briefcase, Scale } from "lucide-react";

const practiceAreas = [
  {
    icon: Building2,
    title: "Corporate Law",
    description: "Comprehensive business legal services including contracts, mergers, and compliance."
  },
  {
    icon: Users2,
    title: "Family Law",
    description: "Compassionate representation in divorce, custody, and family matters."
  },
  {
    icon: FileText,
    title: "Estate Planning",
    description: "Protect your legacy with wills, trusts, and estate administration."
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Expert guidance in property transactions, disputes, and development."
  },
  {
    icon: Briefcase,
    title: "Employment Law",
    description: "Protecting rights and resolving workplace disputes effectively."
  },
  {
    icon: Scale,
    title: "Civil Litigation",
    description: "Aggressive representation in complex civil disputes and trials."
  }
];

const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Areas of Practice
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive legal services across multiple practice areas, delivered with expertise and dedication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {practiceAreas.map((area, index) => (
            <div 
              key={index}
              className="p-8 bg-card rounded-lg border border-border hover:border-accent transition-all hover:shadow-lg group"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <area.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
