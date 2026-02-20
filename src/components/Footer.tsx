import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Isabella Fava" className="h-8" />
            <div>
              <p className="font-display text-sm font-semibold text-foreground">
                Isabella Fava
              </p>
              <p className="text-xs text-muted-foreground">
                Psicóloga · CRP 06/205699
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="/#sobre" className="hover:text-primary transition-colors">Sobre</a>
            <a href="/#servicos" className="hover:text-primary transition-colors">Serviços</a>
            <Link to="/anamnese" className="hover:text-primary transition-colors">Anamnese</Link>
            <a href="/#contato" className="hover:text-primary transition-colors">Contato</a>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} · Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
