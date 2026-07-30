import Link from "next/link";
import { MobileNav, SiteFooter, SiteHeader } from "./components/SiteChrome";

export default function Home() {
  return (
    <main>
      <SiteHeader current="home" />

      <section className="home-hero" id="inicio">
        <div className="home-hero-image" aria-hidden="true" />
        <div className="home-hero-copy">
          <p className="eyebrow">Tabacaria & perfumaria</p>
          <h1>
            Seu estilo.
            <em>Sua presença.</em>
          </h1>
          <p>
            Uma curadoria feita para quem gosta de encontrar novidades,
            variedade e um atendimento que realmente entende o que procura.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="#universos">Conhecer a AYA</Link>
            <Link className="button secondary" href="#localizacao">Visitar a loja</Link>
          </div>
        </div>
        <div className="hero-signature">
          <span>AYA</span>
          <p>Uma marca. Duas experiências.</p>
        </div>
      </section>

      <section className="intro-strip" aria-label="Diferenciais da AYA">
        <span>Atacado & varejo</span>
        <span>Atendimento próximo</span>
        <span>Loja física</span>
        <span>Novidades frequentes</span>
      </section>

      <section className="brand-story" id="sobre">
        <div className="story-number">AYA</div>
        <div className="story-copy">
          <p className="eyebrow">Sobre a AYA</p>
          <h2>Uma loja feita para descobrir, escolher e voltar.</h2>
          <p>
            A AYA reúne perfumaria e tabacaria em um só lugar, com uma seleção
            que acompanha tendências e um atendimento pessoal para cada cliente.
            Da primeira escolha à reposição para revenda, a experiência continua
            simples, rápida e próxima.
          </p>
        </div>
        <div className="story-stats">
          <div>
            <strong>Desde [ano]</strong>
            <span>Tempo de mercado a confirmar</span>
          </div>
          <div>
            <strong>2 universos</strong>
            <span>Perfumes e pods</span>
          </div>
          <div>
            <strong>1 atendimento</strong>
            <span>Varejo e atacado</span>
          </div>
        </div>
      </section>

      <section className="choices-section" id="universos">
        <div className="section-heading light-heading">
          <div>
            <p className="eyebrow">Escolha seu caminho</p>
            <h2>O que você procura hoje?</h2>
          </div>
          <p>
            Cada área tem sua própria experiência, catálogo e forma de encontrar
            o produto certo.
          </p>
        </div>

        <div className="choice-grid">
          <Link className="choice-card perfume-choice" href="/perfumes">
            <div className="choice-top"><span>01</span><b>Perfumaria</b></div>
            <div>
              <p>Masculinos · femininos · unissex</p>
              <h3>Perfumes</h3>
              <span className="choice-description">
                Busque por marca, perfil e ocasião. Salve seus favoritos e monte
                seu pedido.
              </span>
              <strong className="choice-action">Entrar na perfumaria →</strong>
            </div>
          </Link>

          <Link className="choice-card pods-choice" href="/pods">
            <div className="choice-top"><span>02</span><b>Área adulta</b></div>
            <div>
              <p>Modelos · sabores · valores</p>
              <h3>Pods</h3>
              <span className="choice-description">
                Compare modelos, confira opções e envie sua seleção direto para
                o atendimento.
              </span>
              <strong className="choice-action">Entrar na área de pods →</strong>
            </div>
          </Link>
        </div>
      </section>

      <section className="location-section" id="localizacao">
        <div className="location-map">
          <div className="map-grid" aria-hidden="true" />
          <div className="map-pin">AYA</div>
          <span>Mapa será conectado ao endereço real</span>
        </div>
        <div className="location-copy">
          <p className="eyebrow">Nossa loja</p>
          <h2>Venha conhecer a AYA de perto.</h2>
          <p>
            Veja os produtos, tire dúvidas com a equipe e encontre as novidades
            que acabaram de chegar.
          </p>
          <div className="location-details">
            <div><span>Endereço</span><strong>A confirmar com a equipe AYA</strong></div>
            <div><span>Horários</span><strong>A confirmar com a equipe AYA</strong></div>
            <div><span>Atendimento</span><strong>Varejo e atacado</strong></div>
          </div>
          <a
            className="button primary"
            href="https://wa.me/?text=Olá%20AYA!%20Quero%20saber%20a%20localização%20e%20o%20horário%20da%20loja."
            target="_blank"
            rel="noreferrer"
          >
            Pedir localização
          </a>
        </div>
      </section>

      <section className="closing-cta">
        <p className="eyebrow">Atendimento direto</p>
        <h2>Encontrou a AYA.<br />Agora encontre o seu.</h2>
        <div>
          <Link className="button light" href="/perfumes">Ver perfumes</Link>
          <Link className="button outline-light" href="/pods">Ver pods</Link>
        </div>
      </section>

      <SiteFooter />
      <MobileNav current="home" />
    </main>
  );
}
