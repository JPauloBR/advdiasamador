import { Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Andreza Carolina Dias Amador
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Advogada inscrita na OAB/SP 410.139, graduada pela Universidade Paulista - UNIP/Limeira em 2013. Há anos atuando na defesa criminal, com experiência em plenários do júri e casos complexos e de repercussão nacional. Ofereço uma atuação técnica, estratégica e pautada pelo sigilo e ética profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-4">OAB/SP</h3>
            <p className="text-muted-foreground">
              410.139 - Registro ativo e regularizado na Ordem dos Advogados
            </p>
          </div>

          <div className="text-center p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Experiência</h3>
            <p className="text-muted-foreground">
              Anos de atuação em defesa criminal e casos de repercussão nacional
            </p>
          </div>

          <div className="text-center p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Especialização</h3>
            <p className="text-muted-foreground">
              Defesa criminal estratégica e atuação em Tribunal do Júri
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
