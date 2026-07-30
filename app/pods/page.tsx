"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AyaMark, MobileNav, SiteFooter, SiteHeader } from "../components/SiteChrome";

const podProducts = [
  {
    id: "sky-solo",
    name: "Sky Solo",
    brand: "Sky",
    category: "Aparelhos",
    detail: "Disponível nas cores preto e colorido",
    retail: "R$ 120",
    wholesale: "R$ 100",
  },
  {
    id: "sky-solo-plus",
    name: "Sky Solo Plus",
    brand: "Sky",
    category: "Aparelhos",
    detail: "Disponível na cor colorida",
    retail: "R$ 150",
    wholesale: "R$ 130",
  },
];

export default function PodsPage() {
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<"Varejo" | "Atacado">("Varejo");

  useEffect(() => {
    document.body.style.overflow = ageConfirmed ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ageConfirmed]);

  const filtered = useMemo(
    () =>
      podProducts.filter((product) =>
        `${product.name} ${product.brand} ${product.category} ${product.detail}`
          .toLowerCase()
          .includes(query.toLowerCase()),
      ),
    [query],
  );

  return (
    <main className="inner-page pods-page">
      {!ageConfirmed && (
        <div className="age-gate" role="dialog" aria-modal="true" aria-labelledby="age-title">
          <div className="age-card">
            <AyaMark className="age-mark" />
            <p className="eyebrow">Acesso responsável</p>
            <h2 id="age-title">Você tem 18 anos ou mais?</h2>
            <p>
              Esta página é destinada exclusivamente ao público adulto. Confirme
              sua idade para acessar a área de pods.
            </p>
            <button className="button primary" onClick={() => setAgeConfirmed(true)}>
              Sim, tenho 18 anos
            </button>
            <Link className="button text-button" href="/">
              Não, voltar ao início
            </Link>
          </div>
        </div>
      )}

      <SiteHeader current="pods" />

      <section className="inner-hero pods-hero">
        <div className="inner-hero-copy">
          <p className="eyebrow">AYA Pods</p>
          <h1>Escolha fácil. Pedido direto.</h1>
          <p>
            Navegue por modelos, compare condições e envie sua escolha pronta
            para o atendimento da AYA.
          </p>
          <a className="button primary" href="#catalogo-pods">Ver catálogo</a>
        </div>
        <div className="inner-hero-note">
          <span>Varejo & atacado</span>
          <strong>Variedade que acompanha você.</strong>
        </div>
      </section>

      <section className="pods-toolbar" id="catalogo-pods">
        <div className="section-heading light-heading">
          <div>
            <p className="eyebrow">Catálogo AYA</p>
            <h2>Encontre seu próximo modelo.</h2>
          </div>
          <p>
            Produtos e valores demonstrativos. A equipe confirma sabores,
            cores e disponibilidade no atendimento.
          </p>
        </div>
        <div className="pod-controls">
          <label className="dark-search">
            <span>⌕</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar modelo ou marca..."
            />
          </label>
          <div className="mode-switch" aria-label="Modalidade de compra">
            <button className={mode === "Varejo" ? "active" : ""} onClick={() => setMode("Varejo")}>Varejo</button>
            <button className={mode === "Atacado" ? "active" : ""} onClick={() => setMode("Atacado")}>Atacado</button>
          </div>
        </div>

        <div className="pods-grid">
          {filtered.map((product) => (
            <article className="pod-card" key={product.id}>
              <div className="pod-visual">
                <span>{product.brand}</span>
                <div className="pod-silhouette" aria-hidden="true"><i /><i /></div>
                <small>Imagem do produto a inserir</small>
              </div>
              <div className="pod-content">
                <p className="eyebrow">{product.category}</p>
                <h3>{product.name}</h3>
                <p>{product.detail}</p>
                <div className="selected-price">
                  <span>{mode}</span>
                  <strong>{mode === "Varejo" ? product.retail : product.wholesale}</strong>
                </div>
                <a
                  className="button primary"
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `Olá AYA! Quero confirmar o ${product.name} no ${mode.toLowerCase()} pelo valor de ${mode === "Varejo" ? product.retail : product.wholesale}.`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Consultar disponibilidade
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pods-help">
        <div>
          <p className="eyebrow">Precisa de ajuda?</p>
          <h2>Fale com quem conhece cada opção.</h2>
        </div>
        <p>
          Diga o que você procura e a equipe apresenta os modelos disponíveis
          no momento.
        </p>
        <a
          className="button light"
          href="https://wa.me/?text=Olá%20AYA!%20Quero%20ajuda%20para%20escolher%20um%20pod."
          target="_blank"
          rel="noreferrer"
        >
          Chamar no WhatsApp
        </a>
      </section>

      <section className="responsible-note">
        <strong>18+</strong>
        <div>
          <h3>Área exclusiva para adultos.</h3>
          <p>
            A confirmação de idade acontece apenas nesta página. A home e a
            perfumaria continuam abertas para todos os visitantes.
          </p>
        </div>
      </section>

      <SiteFooter />
      <MobileNav current="pods" />
    </main>
  );
}
