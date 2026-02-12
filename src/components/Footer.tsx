const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-muted/30">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-sm text-foreground">
          Isabella Fava · <span className="text-primary">Psicóloga</span>
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
