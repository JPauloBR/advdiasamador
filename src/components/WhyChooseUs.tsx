import { Shield, Target, Clock, Heart } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Atuação Estratégica",
    description: "Defesa técnica e estratégica com experiência em casos complexos e de repercussão nacional."
  },
  {
    icon: Target,
    title: "Abordagem Personalizada",
    description: "Cada caso recebe atenção individual com estratégias sob medida para sua situação específica."
  },
  {
    icon: Clock,
    title: "Sigilo Profissional",
    description: "Atuação pautada pelo sigilo absoluto, ética profissional e comprometimento com seus direitos."
  },
  {
    icon: Heart,
    title: "Dedicação Total",
    description: "Compromisso com a proteção das suas garantias fundamentais em todas as fases do processo."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por Que Escolher Nosso Escritório
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Combinamos excelência jurídica com comprometimento e atendimento personalizado que nos distingue.
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
