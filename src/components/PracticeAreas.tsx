import { Building2, Users2, FileText, Home, Briefcase, Scale } from "lucide-react";

const practiceAreas = [
  {
    icon: Scale,
    title: "Tribunal do Júri",
    description: "Atuação estratégica no Tribunal do Júri, oferecendo defesa técnica de acusados em crimes dolosos contra a vida e também representação como assistente de acusação."
  },
  {
    icon: FileText,
    title: "Assistência em Ações Penais",
    description: "Atuação completa em ações penais, com acompanhamento em delegacias, flagrantes, audiências de custódia e defesa técnica em todas as fases do processo criminal."
  },
  {
    icon: Building2,
    title: "Tribunais Superiores",
    description: "Atuação nos Tribunais Superiores, com elaboração de defesas técnicas, recursos estratégicos e realização de sustentação oral."
  },
  {
    icon: Users2,
    title: "Defesa Criminal",
    description: "Defesa técnica especializada em crimes contra a vida, patrimônio e demais delitos penais."
  },
  {
    icon: Briefcase,
    title: "Habeas Corpus",
    description: "Impetração de Habeas Corpus para garantir a liberdade e direitos fundamentais do acusado."
  },
  {
    icon: Home,
    title: "Revisão Criminal",
    description: "Ações de revisão criminal para rever decisões judiciais e buscar a justiça."
  }
];

const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground">
            Serviços jurídicos especializados em defesa criminal, com atuação estratégica e dedicada à proteção dos seus direitos.
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
