import { Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Excellence in Legal Practice
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our firm is built on a foundation of integrity, expertise, and unwavering commitment to our clients. We combine legal excellence with personalized service to achieve the best possible outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-4">25+ Years</h3>
            <p className="text-muted-foreground">
              Of proven legal expertise and successful case outcomes
            </p>
          </div>

          <div className="text-center p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-4">1000+ Clients</h3>
            <p className="text-muted-foreground">
              Successfully represented with personalized attention
            </p>
          </div>

          <div className="text-center p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-4">95% Success</h3>
            <p className="text-muted-foreground">
              Rate in achieving favorable outcomes for our clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
