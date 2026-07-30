"use client";

import { useMemo, useState } from "react";
import { MobileNav, SiteFooter, SiteHeader } from "../components/SiteChrome";

const products = [
  {
    id: 1,
    name: "Yara",
    brand: "Lattafa",
    profile: "Doce & envolvente",
    category: "Feminino",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Khamrah",
    brand: "Lattafa",
    profile: "Quente & especiado",
    category: "Unissex",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Club de Nuit",
    brand: "Armaf",
    profile: "Amadeirado & intenso",
    category: "Masculino",
    image:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Fakhar",
    brand: "Lattafa",
    profile: "Aromático & elegante",
    category: "Masculino",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85",
  },
];

const categories = ["Todos", "Feminino", "Masculino", "Unissex"];

export default function PerfumesPage() {
  const [category, setCategory] = useState("Todos");
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [order, setOrder] = useState<number[]>([]);
  const [drawer, setDrawer] = useState(false);

  const filtered = useMemo(
    () =>
      products.filter(
        (product) =>
          (category === "Todos" || product.category === category) &&
          `${product.name} ${product.brand} ${product.profile}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [category, query],
  );

  const toggle = (
    id: number,
    values: number[],
    setter: (value: number[]) => void,
  ) => setter(values.includes(id) ? values.filter((item) => item !== id) : [...values, id]);

  const orderProducts = products.filter((product) => order.includes(product.id));
  const whatsAppMessage = encodeURIComponent(
    `Olá! Montei uma solicitação de perfumes pelo site da AYA:\n\n${orderProducts
      .map((product) => `• 1x ${product.name} — ${product.brand}`)
      .join("\n")}\n\nGostaria de confirmar disponibilidade e valores.`,
  );

  return (
    <main className="inner-page perfumes-page">
      <SiteHeader current="perfumes" />

      <section className="inner-hero perfume-hero">
        <div className="inner-hero-copy">
          <p className="eyebrow">AYA Perfumaria</p>
          <h1>Fragrâncias que chegam antes de você.</h1>
          <p>
            Descubra perfumes por estilo, ocasião e personalidade. Favoritos e
            pedido organizados em poucos toques.
          </p>
          <a className="button primary" href="#catalogo">Explorar catálogo</a>
        </div>
        <div className="inner-hero-note">
          <span>Curadoria AYA</span>
          <strong>Marcante por escolha.</strong>
        </div>
      </section>

      <section className="catalog-section" id="catalogo">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Escolha pelo seu estilo</p>
            <h2>Encontre sua próxima assinatura.</h2>
          </div>
          <p>
            Busque por nome, marca ou sensação. A equipe confirma disponibilidade
            e valor no WhatsApp.
          </p>
        </div>

        <label className="search">
          <span>⌕</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar perfume, marca ou perfil..."
          />
        </label>

        <div className="chips" role="group" aria-label="Filtrar por categoria">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filtered.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={`Perfume ${product.name}, ${product.brand}`} />
                <button
                  className={favorites.includes(product.id) ? "favorite active" : "favorite"}
                  onClick={() => toggle(product.id, favorites, setFavorites)}
                  aria-label={
                    favorites.includes(product.id)
                      ? `Remover ${product.name} dos favoritos`
                      : `Adicionar ${product.name} aos favoritos`
                  }
                >
                  {favorites.includes(product.id) ? "♥" : "♡"}
                </button>
              </div>
              <div className="product-info">
                <p>{product.brand}</p>
                <h3>{product.name}</h3>
                <span>{product.profile}</span>
                <button
                  className={order.includes(product.id) ? "add-button added" : "add-button"}
                  onClick={() => toggle(product.id, order, setOrder)}
                >
                  {order.includes(product.id) ? "Adicionado ✓" : "Adicionar ao pedido"}
                </button>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="empty-state">
            <h3>Nenhum perfume encontrado.</h3>
            <p>Tente outro termo ou volte a ver todas as categorias.</p>
            <button onClick={() => { setQuery(""); setCategory("Todos"); }}>Limpar busca</button>
          </div>
        )}
      </section>

      <section className="discovery">
        <div>
          <p className="eyebrow">Não sabe por onde começar?</p>
          <h2>Conte o que você gosta. A gente encontra o perfume.</h2>
        </div>
        <a
          className="button light"
          href="https://wa.me/?text=Olá%20AYA!%20Quero%20ajuda%20para%20escolher%20um%20perfume."
          target="_blank"
          rel="noreferrer"
        >
          Falar com um especialista
        </a>
      </section>

      <section className="wholesale">
        <div className="wholesale-number">01</div>
        <div>
          <p className="eyebrow">AYA para revendedores</p>
          <h2>Mais variedade para o seu negócio.</h2>
          <p>
            Condições especiais para atacado, novidades frequentes e atendimento
            próximo para ajudar você a escolher seu mix.
          </p>
        </div>
        <a
          className="button secondary"
          href="https://wa.me/?text=Olá%20AYA!%20Quero%20conhecer%20as%20condições%20de%20atacado."
          target="_blank"
          rel="noreferrer"
        >
          Consultar atacado
        </a>
      </section>

      <SiteFooter />
      <MobileNav current="perfumes" />

      <button className="floating-order" onClick={() => setDrawer(true)}>
        Pedido <span>{order.length}</span>
      </button>
      <div className={drawer ? "drawer-backdrop open" : "drawer-backdrop"} onClick={() => setDrawer(false)} />
      <aside className={drawer ? "drawer open" : "drawer"} aria-hidden={!drawer}>
        <div className="drawer-header">
          <div><p className="eyebrow">Sua seleção</p><h2>Pedido AYA</h2></div>
          <button onClick={() => setDrawer(false)} aria-label="Fechar pedido">×</button>
        </div>
        <div className="drawer-products">
          {orderProducts.length ? (
            orderProducts.map((product) => (
              <div className="drawer-product" key={product.id}>
                <img src={product.image} alt="" />
                <div><strong>{product.name}</strong><span>{product.brand}</span></div>
                <button onClick={() => toggle(product.id, order, setOrder)} aria-label={`Remover ${product.name}`}>×</button>
              </div>
            ))
          ) : (
            <div className="drawer-empty">
              <span>◇</span>
              <h3>Seu pedido está vazio.</h3>
              <p>Adicione perfumes para enviar uma solicitação organizada à equipe.</p>
              <button onClick={() => setDrawer(false)}>Explorar catálogo</button>
            </div>
          )}
        </div>
        {orderProducts.length > 0 && (
          <a
            className="button primary drawer-action"
            href={`https://wa.me/?text=${whatsAppMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            Enviar pelo WhatsApp
          </a>
        )}
      </aside>
    </main>
  );
}
