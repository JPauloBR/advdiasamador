import { Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-6 w-6 text-accent" />
              <span className="text-lg font-semibold">Andreza Amador</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Serviços jurídicos excepcionais com integridade, expertise e dedicação ao sucesso dos nossos clientes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-accent transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-accent transition-colors">Diferenciais</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Informações</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-accent transition-colors">OAB/SP 410.139</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Termos de Serviço</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Andreza Carolina Dias Amador - OAB/SP 410.139. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
