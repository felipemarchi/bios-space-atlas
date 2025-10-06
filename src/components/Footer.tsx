const Footer = () => {
    
    const today = new Date();

    return (
        <footer className="border-t border-border/50 py-6 glass-card">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            © {today.getFullYear()} BioSpace Atlas. Exploring space life through technology.
        </div>
        </footer>
    );
};

export default Footer;