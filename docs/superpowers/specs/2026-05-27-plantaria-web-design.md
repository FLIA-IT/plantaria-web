# Plantaria — Sitio web (one-page) · Diseño

**Fecha:** 2026-05-27
**Cliente:** Plantaria (@plantaria.sv) — consultora de jardinería iniciando distribución de productos en Guatemala y El Salvador.

## Objetivo

Landing one-page profesional, sencilla y mobile-first, que sirva como **carta de presentación** para una empresa con la que la clienta inicia relación comercial. Debe transmitir: negocio operativo, confiable y profesional. No es e-commerce ni tiene backend.

## Decisiones tomadas (brainstorming)

| Tema | Decisión |
|------|----------|
| Alcance | One-page con navbar de anclas (scroll a secciones) |
| Contacto | WhatsApp directo (`wa.me`), CTA siempre visible. Sin formularios ni backend |
| Stack | Vite + React + Tailwind |
| Contenido | Placeholder en español plausible + marcadores `TODO` (no hay contenido real aún; sólo el IG) |
| Dirección visual | **A · Botánica editorial** — derivada del IG del cliente |
| UI | Se construye con la skill **/hallmark** (requisito del cliente) |

## Dirección visual: Botánica editorial

Tono: femenino, premium, calmado, natural. Refleja el IG (post "2022 lleno de amor, luz y paz"): ilustración botánica vintage sobre fondo crema.

**Paleta (tokens CSS):**

| Token | Valor aprox. | Uso |
|-------|--------------|-----|
| `--color-cream` | `#EAE6DD` | Fondo base |
| `--color-cream-deep` | `#F3ECE2` | Superficies alternas |
| `--color-mauve` | `#B59C8F` | Acento rosa palo / secundario |
| `--color-sage` | `#7C8C6A` | Verde salvia / primario natural |
| `--color-charcoal` | `#4A4A47` | Texto e hi-contraste |

Valores son punto de partida; se afinan en implementación con `oklch` y escalas.

**Tipografía:** serif elegante para títulos (ej. Cormorant / Fraunces), sans legible para cuerpo (ej. Inter). Acentos tipo *script* puntuales para detalle editorial (uso medido, no en bloques de texto). Máx. 2 familias principales + 1 acento decorativo opcional.

**Atmósfera:** texturas/ilustración botánica sutil, espacios amplios, jerarquía por contraste de escala. Evitar look de template genérico (anti-slop, según reglas de design-quality).

## Estructura (aprobada)

One-page, mobile-first. Navbar fijo con anclas y CTA WhatsApp persistente.

1. **Navbar** — logo (wordmark serif "Plantaria") + menú de anclas; en mobile, hamburguesa. CTA WhatsApp visible.
2. **Hero** — eyebrow ("Consultoría en jardinería"), título, subtítulo (asesoría + distribución · GT & ESV), CTA WhatsApp primario.
3. **Sobre mí** — retrato + bio + propuesta de valor.
4. **Asesorías / Servicios** — 3 cards de servicio.
5. **Productos que distribuyo** — grid de productos (placeholder).
6. **Confianza** — testimonios / marcas / señales de "empresa operativa confiable".
7. **CTA final** — cierre + WhatsApp.
8. **Footer** — Plantaria, IG @plantaria.sv, WhatsApp.

## Arquitectura técnica

**Stack:** Vite + React 18 + TypeScript + Tailwind CSS.

**Estructura de carpetas** (organización por feature/surface, según reglas web):

```
src/
├── components/
│   ├── layout/        Navbar, Footer, MobileMenu
│   ├── sections/      Hero, About, Services, Products, Trust, FinalCta
│   └── ui/            Button, SectionHeading, Card, WhatsappButton
├── content/           site.ts  (todo el copy + datos placeholder, tipado)
├── lib/               whatsapp.ts (helper wa.me), constants.ts
├── styles/            tokens.css (design tokens), global.css
├── App.tsx
└── main.tsx
```

**Principios:**
- Componentes presentacionales puros; los datos vienen de `content/site.ts` (una sola fuente de copy → fácil de reemplazar cuando llegue contenido real).
- Cada sección es un componente aislado, testeable, < 800 líneas (típico < 200).
- Tokens de diseño como CSS custom properties + extend de Tailwind theme. Sin valores hardcodeados repetidos.
- Imágenes con `width`/`height` explícitos, `loading="lazy"` salvo hero; placeholders mientras no haya assets reales.

**Data flow:** estático. `site.ts` exporta objetos tipados (hero, about, services[], products[], trust[], contact). Las secciones consumen props/imports. Sin estado de servidor ni cliente complejo; único estado UI = apertura del menú mobile (`useState`).

**WhatsApp:** `lib/whatsapp.ts` construye URL `https://wa.me/<numero>?text=<mensaje>`. Número y mensaje en `constants.ts`/`site.ts` como `TODO` hasta tener el real.

## Manejo de errores / edge cases

- Sitio estático sin entradas de usuario → superficie de error mínima.
- Links externos (WhatsApp, IG) con `target="_blank"` + `rel="noopener noreferrer"`.
- Si falta número WhatsApp real (placeholder), el CTA igual funciona apuntando a placeholder marcado `TODO`; documentar dónde se cambia.
- `prefers-reduced-motion`: respetar; animaciones sólo en propiedades compositor-friendly (transform/opacity).

## Mobile-first & performance

- Diseñar a 320/375 primero; breakpoints hacia arriba (768/1024/1440).
- Objetivo CWV: LCP < 2.5s, CLS < 0.1. Bundle JS landing < 150kb gzip.
- Fuentes: `font-display: swap`, preload sólo peso crítico, máx 2 familias.
- Navbar fijo sin causar layout shift; CTA WhatsApp accesible (área táctil ≥ 44px).

## Accesibilidad

- HTML semántico (`header`/`nav`/`main`/`section[aria-labelledby]`/`footer`).
- Contraste AA (verificar charcoal sobre cream, texto sobre sage/mauve).
- Navegación por teclado en menú mobile; foco visible.

## Testing

- **Unit:** `lib/whatsapp.ts` (construcción de URL + encoding del mensaje).
- **Componentes:** render de cada sección con datos de `site.ts` (smoke + presencia de CTA/aria).
- **E2E (Playwright):** carga del home, hero visible, click CTA abre URL wa.me correcta, navegación por anclas, menú mobile abre/cierra. Screenshots a 320/768/1440.
- Cobertura objetivo 80% en `lib/` y lógica; lo visual se cubre con regresión visual, no asserts frágiles de markup.

## Fuera de alcance (YAGNI)

- E-commerce / carrito / pagos.
- Backend, CMS, formularios.
- Multi-idioma (es-only).
- Blog / múltiples páginas.

## Pendientes de contenido (a reemplazar cuando llegue)

`TODO`: número WhatsApp real · nombres/fotos/descripciones de productos · descripción real de asesorías · bio + retrato · testimonios/marcas reales · logo definitivo.
