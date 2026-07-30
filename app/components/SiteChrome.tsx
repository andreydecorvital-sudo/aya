import Link from "next/link";

export function AyaMark({ className = "" }: { className?: string }) {
  return (
    <span className={`aya-mark ${className}`} aria-label="AYA">
      <img src="/brand/aya-perfume-logo.png" alt="" aria-hidden="true" />
    </span>
  );
}

export function SiteHeader({ current = "home" }: { current?: "home" | "perfumes" | "pods" }) {
  return (
    <header className="header">
      <Link className="brand" href="/" aria-label="AYA, página inicial">
        <AyaMark />
      </Link>
      <nav className="desktop-nav" aria-label="Navegação principal">
        <Link className={current === "home" ? "active" : ""} href="/">Início</Link>
        <Link className={current === "perfumes" ? "active" : ""} href="/perfumes">Perfumes</Link>
        <Link className={current === "pods" ? "active" : ""} href="/pods">Pods</Link>
        <Link href="/#sobre">A AYA</Link>
        <Link href="/#localizacao">Localização</Link>
      </nav>
      <a
        className="header-contact"
        href="https://wa.me/?text=Olá%20AYA!%20Vim%20pelo%20site."
        target="_blank"
        rel="noreferrer"
      >
        Falar com a AYA
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer id="rodape">
      <div className="footer-brand">
        <AyaMark className="footer-mark" />
        <span>Tabacaria & Perfumaria</span>
      </div>
      <div>
        <p className="footer-label">Visite a loja</p>
        <p>Endereço e horário a confirmar com a equipe AYA.</p>
        <Link href="/#localizacao">Ver localização</Link>
      </div>
      <div>
        <p className="footer-label">Explore</p>
        <Link href="/perfumes">Perfumes</Link>
        <Link href="/pods">Pods</Link>
        <a href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
      <p className="legal">
        Demonstração comercial · Informações, disponibilidade e valores sujeitos
        à confirmação da equipe AYA.
      </p>
    </footer>
  );
}

export function MobileNav({ current = "home" }: { current?: "home" | "perfumes" | "pods" }) {
  return (
    <nav className="mobile-nav" aria-label="Navegação móvel">
      <Link className={current === "home" ? "active" : ""} href="/">
        <span>⌂</span>Início
      </Link>
      <Link className={current === "perfumes" ? "active" : ""} href="/perfumes">
        <span>◇</span>Perfumes
      </Link>
      <Link className={current === "pods" ? "active" : ""} href="/pods">
        <span>◇</span>Pods
      </Link>
      <Link href="/#localizacao">
        <span>⌖</span>Localização
      </Link>
      <a href="https://wa.me/" target="_blank" rel="noreferrer">
        <span>↗</span>WhatsApp
      </a>
    </nav>
  );
}
