# AYA — Design Foundation

## Source of truth
- Status: active visual contract
- Date: 2026-07-29
- Surfaces: responsive public website and WhatsApp ordering experience
- Evidence: original AYA logo extracted from the catalogs; user-selected mobile luxury-commerce reference; existing WhatsApp sales flow.

## Brand
- Personality: confident, refined, urban, welcoming.
- Promise: variety and personal service with a premium presentation.
- Trust signals: physical store, sealed products, direct human service, wholesale availability.
- Avoid: nightclub neon, excessive smoke effects, generic purple gradients, cluttered marketplace grids, and claims that cannot be verified.

## Goals
- Present AYA as one master brand with two clear categories: Pods and Perfumes.
- Turn the current long-message/PDF buying flow into a browsable experience.
- Make the physical store and WhatsApp service feel established and trustworthy.
- Demonstrate a clear path from discovery to a well-structured WhatsApp inquiry.
- Non-goal: online advertising or direct sale of electronic smoking devices before legal validation.
- Success: visitors find a fragrance quickly and reach WhatsApp with useful context.

## Audience
- Retail fragrance buyers using mobile devices.
- Resellers comparing availability and wholesale options.
- Existing local customers who already buy through WhatsApp.
- Main anxieties: authenticity, availability, price mode, delivery, and choosing the right fragrance.

## Journey and information architecture
1. Understand AYA and choose between Pods and Perfumes.
2. Browse fragrances or reach the responsible +18 store service.
3. Inspect products and save favorites.
4. Add products to an inquiry.
5. Choose retail or wholesale context.
6. Send the structured inquiry to WhatsApp.

Primary navigation: Início, Perfumes, Pods +18, Atacado, A AYA. Mobile persistent navigation: Início, Perfumes, Pods +18, Pedido, Atacado.

## Design principles
- Mobile is the primary designed state.
- One clear gold action per viewport.
- Editorial whitespace and asymmetry should temper the dark palette.
- Product cards reveal only decision-critical information.
- The public-facing brand is always “AYA”; “Tabacaria & Perfumaria” is a descriptor, never a competing wordmark.
- Pods and Perfumes receive equal prominence on the home page, while Pods remains an institutional +18 service until legal validation.

## Visual language
- Color: ink `#080807`, surface `#11110f`, warm ivory `#f4efe4`, muted `#a9a294`, gold `#c9a35c`, dark gold `#7b6033`.
- Typography: high-contrast serif for display; modern sans-serif for navigation and utility.
- Spacing: 8px base rhythm; generous 72–120px section spacing.
- Shape: restrained 14–24px radii; fine 1px warm borders.
- Elevation: light glows and inset borders, never stacked generic shadows.
- Motion: slow reveal, gentle image scale, concise hover translations; reduced-motion respected.
- Imagery: moody fragrance still life, warm directional light, dark backgrounds.

## Components
- Cropped original AYA wordmark, hero, universe selector, search field, category chips, product cards, editorial banners, wholesale panel, institutional Pods panel, inquiry drawer, mobile navigation.
- Cards support saved and added states.
- Buttons have primary gold, secondary outline, and quiet text variants.

## Accessibility
- WCAG-aware contrast; 44px minimum touch targets.
- Semantic headings and landmarks.
- Visible `:focus-visible` rings.
- Drawer and interactive controls have accessible labels.
- Reduced-motion media query disables nonessential transitions.

## Responsive behavior
- Mobile: one-column editorial flow, horizontal product rails, fixed bottom navigation.
- Tablet: two-column hero and product grid.
- Desktop: full navigation, asymmetric hero, four-column catalog grid; no bottom navigation.
- Breakpoints: 720px and 1024px.

## States
- Empty search and empty inquiry states include a useful next action.
- Added/saved states are visible without color alone.
- External-contact actions remain usable without account creation.

## Content voice
- Brazilian Portuguese; short, assured, sensory, and human.
- Prefer “solicitar”, “descobrir” and “falar com a equipe”.
- Avoid unverifiable superlatives, medical claims, and guaranteed performance language.

## Implementation constraints
- Single-route responsive prototype.
- No persistent database in the demonstration.
- WhatsApp number, address, prices, stock, and social links remain demonstrative until supplied by AYA.
- Keep production bundle lean and test keyboard, mobile, and desktop layouts.

## Open questions
- Owner: AYA — official WhatsApp, Instagram, address, opening hours, delivery methods.
- Owner: AYA — approved product list, photos, current retail/wholesale pricing, minimum wholesale order.
- Impact: final content and live conversion links cannot be confirmed before these answers.
