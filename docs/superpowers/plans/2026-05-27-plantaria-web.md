# Plantaria Web (one-page) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir una landing one-page profesional, mobile-first, para Plantaria (consultora de jardinería + distribución en GT y ESV), con contacto por WhatsApp directo y sin backend.

**Architecture:** SPA estática Vite + React + TS. Todo el copy/datos en `content/site.ts` (fuente única, tipada, fácil de reemplazar). Secciones como componentes presentacionales puros que consumen ese contenido. Tokens de diseño como CSS custom properties + extend de Tailwind. Único estado UI = menú mobile.

**Tech Stack:** Vite, React 18, TypeScript, Tailwind CSS, Vitest + Testing Library (unit/componente), Playwright (E2E). UI construida con la skill **/hallmark** (requisito del cliente).

**Spec:** `docs/superpowers/specs/2026-05-27-plantaria-web-design.md`

**Paleta (Botánica editorial):** cream `#EAE6DD`, cream-deep `#F3ECE2`, mauve `#B59C8F`, sage `#7C8C6A`, charcoal `#4A4A47`.

**WhatsApp/IG placeholder (TODO reemplazar):** número `50200000000`, IG `https://instagram.com/plantaria.sv`.

---

## File Structure

```
plantaria-web/
├── index.html                      Entry HTML, meta SEO, fuentes
├── package.json                    Scripts y deps
├── vite.config.ts                  Config Vite + Vitest
├── tsconfig.json / tsconfig.node.json
├── tailwind.config.ts              theme.extend con tokens
├── postcss.config.js
├── playwright.config.ts            Config E2E
├── src/
│   ├── main.tsx                    Bootstrap React
│   ├── App.tsx                     Compone secciones en orden
│   ├── vite-env.d.ts
│   ├── styles/
│   │   ├── tokens.css              CSS custom properties (paleta, type, spacing, motion)
│   │   └── global.css              base + @tailwind + import tokens
│   ├── content/
│   │   └── site.ts                 Copy + datos tipados (placeholder + TODOs)
│   ├── lib/
│   │   ├── constants.ts            WHATSAPP_NUMBER, INSTAGRAM_URL
│   │   └── whatsapp.ts             buildWhatsappUrl(message?)
│   ├── components/
│   │   ├── ui/
│   │   │   ├── WhatsappButton.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   └── Card.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Services.tsx
│   │       ├── Products.tsx
│   │       ├── Trust.tsx
│   │       └── FinalCta.tsx
│   └── test/
│       └── setup.ts                jsdom + jest-dom
├── tests/e2e/
│   └── home.spec.ts                Playwright E2E
```

---

## Task 1: Scaffold del proyecto Vite + React + TS

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`, `index.html`, `src/main.tsx`, `src/App.tsx`, `src/vite-env.d.ts`

- [ ] **Step 1: Crear proyecto con la plantilla oficial**

Run:
```bash
npm create vite@latest . -- --template react-ts
```
Si el directorio no está vacío, aceptar continuar (sólo hay `.gitignore`, `docs/`, `.superpowers/`). Si el CLI se niega, scaffold manual: crear `package.json` con deps `react`, `react-dom` y devDeps `vite`, `@vitejs/plugin-react`, `typescript`, `@types/react`, `@types/react-dom`.

- [ ] **Step 2: Instalar dependencias**

Run: `npm install`
Expected: `node_modules/` creado, sin errores.

- [ ] **Step 3: Limpiar boilerplate**

Borrar `src/App.css`, `src/index.css`, `src/assets/`. Dejar `src/App.tsx` mínimo:

```tsx
export default function App() {
  return <div>Plantaria</div>
}
```

`src/main.tsx`:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

(Crear `src/styles/global.css` vacío por ahora para no romper el import.)

- [ ] **Step 4: Verificar que arranca**

Run: `npm run dev` (matar con Ctrl-C tras confirmar). 
Expected: servidor Vite en `http://localhost:5173` sin errores en consola.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: scaffold vite react ts project"
```

---

## Task 2: Tailwind + tokens de diseño

**Files:**
- Create: `tailwind.config.ts`, `postcss.config.js`, `src/styles/tokens.css`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Instalar Tailwind**

Run:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p --ts
```
Expected: `tailwind.config.ts` y `postcss.config.js` creados.

- [ ] **Step 2: Definir tokens CSS** en `src/styles/tokens.css`

```css
:root {
  /* Paleta — Botánica editorial */
  --color-cream: #EAE6DD;
  --color-cream-deep: #F3ECE2;
  --color-mauve: #B59C8F;
  --color-sage: #7C8C6A;
  --color-charcoal: #4A4A47;

  /* Tipografía fluida */
  --text-hero: clamp(2.5rem, 1.5rem + 4vw, 5rem);
  --text-h2: clamp(1.75rem, 1.2rem + 2vw, 3rem);
  --text-base: clamp(1rem, 0.95rem + 0.3vw, 1.125rem);

  /* Ritmo */
  --space-section: clamp(4rem, 3rem + 5vw, 8rem);

  /* Motion */
  --duration-normal: 300ms;
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
}
```

- [ ] **Step 3: Configurar Tailwind theme** en `tailwind.config.ts`

```ts
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: 'var(--color-cream)',
        'cream-deep': 'var(--color-cream-deep)',
        mauve: 'var(--color-mauve)',
        sage: 'var(--color-sage)',
        charcoal: 'var(--color-charcoal)',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
```

- [ ] **Step 4: global.css** con directivas + import tokens

```css
@import './tokens.css';
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background-color: var(--color-cream);
  color: var(--color-charcoal);
  font-family: theme('fontFamily.sans');
}
```

- [ ] **Step 5: Cargar fuentes** en `index.html` (dentro de `<head>`)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

Actualizar `<title>` y meta description (es):
```html
<title>Plantaria · Consultoría en jardinería y distribución</title>
<meta name="description" content="Asesoría experta en jardinería y distribución de productos en Guatemala y El Salvador.">
<html lang="es">
```

- [ ] **Step 6: Verificar** colores/fuentes

En `App.tsx` poner temporalmente `<h1 className="font-serif text-sage text-5xl">Plantaria</h1>`. Run `npm run dev`. Expected: título serif en color salvia sobre fondo crema. Revertir App.tsx a `<div>Plantaria</div>` tras verificar.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: add tailwind and design tokens"
```

---

## Task 3: Setup de testing (Vitest + Testing Library)

**Files:**
- Modify: `vite.config.ts`, `package.json`
- Create: `src/test/setup.ts`

- [ ] **Step 1: Instalar deps de test**

Run:
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

- [ ] **Step 2: setup.ts**

```ts
import '@testing-library/jest-dom'
```

- [ ] **Step 3: Configurar Vitest** en `vite.config.ts`

```ts
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
  },
})
```

- [ ] **Step 4: Agregar scripts** en `package.json`

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "preview": "vite preview",
  "test": "vitest run",
  "test:watch": "vitest"
}
```

- [ ] **Step 5: Smoke test del harness** — crear `src/App.test.tsx`

```tsx
import { render, screen } from '@testing-library/react'
import App from './App'

test('renderiza la marca Plantaria', () => {
  render(<App />)
  expect(screen.getByText(/plantaria/i)).toBeInTheDocument()
})
```

- [ ] **Step 6: Correr tests**

Run: `npm test`
Expected: 1 test PASS.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "test: configure vitest and testing-library"
```

---

## Task 4: Contenido tipado + helpers (lib)

**Files:**
- Create: `src/lib/constants.ts`, `src/lib/whatsapp.ts`, `src/content/site.ts`
- Test: `src/lib/whatsapp.test.ts`

- [ ] **Step 1: Escribir el test que falla** — `src/lib/whatsapp.test.ts`

```ts
import { buildWhatsappUrl } from './whatsapp'
import { WHATSAPP_NUMBER } from './constants'

test('construye url wa.me con el número configurado', () => {
  expect(buildWhatsappUrl()).toBe(`https://wa.me/${WHATSAPP_NUMBER}`)
})

test('codifica el mensaje opcional en el query param text', () => {
  const url = buildWhatsappUrl('Hola, quiero una asesoría')
  expect(url).toBe(`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20quiero%20una%20asesor%C3%ADa`)
})
```

- [ ] **Step 2: Correr para verque falla**

Run: `npm test -- whatsapp`
Expected: FAIL (módulo no existe).

- [ ] **Step 3: Implementar constants.ts**

```ts
// TODO: reemplazar con el número real de WhatsApp (formato internacional sin +, ej. 50212345678)
export const WHATSAPP_NUMBER = '50200000000'
// TODO: confirmar handle/URL real
export const INSTAGRAM_URL = 'https://instagram.com/plantaria.sv'
```

- [ ] **Step 4: Implementar whatsapp.ts**

```ts
import { WHATSAPP_NUMBER } from './constants'

export function buildWhatsappUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}
```

- [ ] **Step 5: Correr test**

Run: `npm test -- whatsapp`
Expected: 2 tests PASS. (`encodeURIComponent` produce `%20` para espacios y `%2C`/`%C3%ADs` para coma y í.)

- [ ] **Step 6: Crear site.ts** (fuente única de contenido, placeholder + TODOs)

```ts
export interface ServiceItem { title: string; description: string }
export interface ProductItem { name: string; description: string; image?: string }
export interface TrustItem { quote: string; author: string }

export const site = {
  brand: 'Plantaria',
  nav: [
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Asesorías', href: '#asesorias' },
    { label: 'Productos', href: '#productos' },
    { label: 'Contacto', href: '#contacto' },
  ],
  hero: {
    eyebrow: 'Consultoría en jardinería',
    title: 'Jardines que respiran vida',
    subtitle:
      'Asesoría experta y distribución de productos para tu jardín en Guatemala y El Salvador.',
    cta: 'Escribime por WhatsApp',
    whatsappMessage: 'Hola Plantaria, me gustaría una asesoría.',
  },
  // TODO: reemplazar con bio real + retrato
  about: {
    title: 'Sobre mí',
    body:
      'Soy consultora en jardinería con experiencia ayudando a personas y espacios a florecer. Hoy también distribuyo productos seleccionados para el cuidado de tu jardín en la región.',
  },
  // TODO: reemplazar con asesorías reales
  services: [
    { title: 'Asesoría de jardín', description: 'Diagnóstico y plan a medida para tu espacio verde.' },
    { title: 'Diseño y paisajismo', description: 'Composición de jardines funcionales y bonitos.' },
    { title: 'Cuidado y mantenimiento', description: 'Acompañamiento para que tus plantas prosperen.' },
  ] as ServiceItem[],
  // TODO: reemplazar con productos reales (nombre/foto/descripción)
  products: [
    { name: 'Producto 1', description: 'Descripción breve del producto que distribuyo.' },
    { name: 'Producto 2', description: 'Descripción breve del producto que distribuyo.' },
    { name: 'Producto 3', description: 'Descripción breve del producto que distribuyo.' },
    { name: 'Producto 4', description: 'Descripción breve del producto que distribuyo.' },
  ] as ProductItem[],
  // TODO: reemplazar con testimonios/marcas reales
  trust: [
    { quote: 'Transformó por completo nuestro jardín. Profesional y atenta.', author: 'Cliente satisfecho' },
    { quote: 'Excelente asesoría y productos de calidad.', author: 'Cliente satisfecho' },
  ] as TrustItem[],
  finalCta: {
    title: '¿Hablamos de tu jardín?',
    body: 'Contame qué necesitás y armamos un plan juntos.',
    cta: 'Escribime por WhatsApp',
    whatsappMessage: 'Hola Plantaria, quiero más información.',
  },
} as const
```

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: add site content, constants and whatsapp helper"
```

---

## Task 5: Componentes UI base (con /hallmark)

> **REQUIRED SUB-SKILL para esta tarea y las Tasks 6–8:** invocar la skill **/hallmark** para dirigir el diseño visual (look & feel, jerarquía, estados, anti-slop). El plan fija estructura/props/tests; hallmark define el detalle visual dentro de esos límites, usando los tokens de Task 2.

**Files:**
- Create: `src/components/ui/WhatsappButton.tsx`, `src/components/ui/SectionHeading.tsx`, `src/components/ui/Card.tsx`
- Test: `src/components/ui/WhatsappButton.test.tsx`

- [ ] **Step 1: Test que falla** — `WhatsappButton.test.tsx`

```tsx
import { render, screen } from '@testing-library/react'
import { WhatsappButton } from './WhatsappButton'
import { WHATSAPP_NUMBER } from '../../lib/constants'

test('renderiza un link a wa.me con el mensaje codificado y atributos seguros', () => {
  render(<WhatsappButton message="Hola">Escribime</WhatsappButton>)
  const link = screen.getByRole('link', { name: /escribime/i })
  expect(link).toHaveAttribute('href', `https://wa.me/${WHATSAPP_NUMBER}?text=Hola`)
  expect(link).toHaveAttribute('target', '_blank')
  expect(link).toHaveAttribute('rel', 'noopener noreferrer')
})
```

- [ ] **Step 2: Correr — debe fallar**

Run: `npm test -- WhatsappButton`
Expected: FAIL (módulo no existe).

- [ ] **Step 3: Implementar WhatsappButton.tsx**

```tsx
import type { ReactNode } from 'react'
import { buildWhatsappUrl } from '../../lib/whatsapp'

interface Props {
  message?: string
  children: ReactNode
  className?: string
}

export function WhatsappButton({ message, children, className = '' }: Props) {
  return (
    <a
      href={buildWhatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-colors duration-300 min-h-[44px] ${className}`}
    >
      {children}
    </a>
  )
}
```

(Las clases de color/variantes las ajusta /hallmark; mantener `min-h-[44px]` para área táctil y los atributos del test.)

- [ ] **Step 4: Correr test**

Run: `npm test -- WhatsappButton`
Expected: PASS.

- [ ] **Step 5: Implementar SectionHeading.tsx**

```tsx
interface Props { eyebrow?: string; title: string; className?: string }

export function SectionHeading({ eyebrow, title, className = '' }: Props) {
  return (
    <header className={className}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-mauve">{eyebrow}</p>
      )}
      <h2 className="font-serif text-charcoal" style={{ fontSize: 'var(--text-h2)' }}>
        {title}
      </h2>
    </header>
  )
}
```

- [ ] **Step 6: Implementar Card.tsx**

```tsx
import type { ReactNode } from 'react'

interface Props { children: ReactNode; className?: string }

export function Card({ children, className = '' }: Props) {
  return (
    <div className={`rounded-2xl bg-cream-deep p-6 ${className}`}>{children}</div>
  )
}
```

- [ ] **Step 7: Correr toda la suite + commit**

Run: `npm test`
Expected: todo PASS.
```bash
git add -A
git commit -m "feat: add base ui components (whatsapp button, heading, card)"
```

---

## Task 6: Layout — Navbar, MobileMenu, Footer (con /hallmark)

**Files:**
- Create: `src/components/layout/Navbar.tsx`, `src/components/layout/MobileMenu.tsx`, `src/components/layout/Footer.tsx`
- Test: `src/components/layout/Navbar.test.tsx`

- [ ] **Step 1: Test que falla** — `Navbar.test.tsx`

```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

test('muestra la marca y abre el menú mobile al click', async () => {
  render(<Navbar />)
  expect(screen.getByText('Plantaria')).toBeInTheDocument()
  const toggle = screen.getByRole('button', { name: /abrir menú/i })
  await userEvent.click(toggle)
  expect(screen.getByRole('navigation', { name: /menú mobile/i })).toBeVisible()
})
```

- [ ] **Step 2: Correr — falla**

Run: `npm test -- Navbar`
Expected: FAIL.

- [ ] **Step 3: Implementar MobileMenu.tsx**

```tsx
import { site } from '../../content/site'

interface Props { open: boolean; onClose: () => void }

export function MobileMenu({ open, onClose }: Props) {
  if (!open) return null
  return (
    <nav
      aria-label="Menú mobile"
      className="fixed inset-0 z-50 flex flex-col gap-6 bg-cream p-8 md:hidden"
    >
      <button onClick={onClose} aria-label="Cerrar menú" className="self-end text-charcoal">
        ✕
      </button>
      {site.nav.map((item) => (
        <a key={item.href} href={item.href} onClick={onClose} className="font-serif text-2xl text-charcoal">
          {item.label}
        </a>
      ))}
    </nav>
  )
}
```

- [ ] **Step 4: Implementar Navbar.tsx**

```tsx
import { useState } from 'react'
import { site } from '../../content/site'
import { MobileMenu } from './MobileMenu'
import { WhatsappButton } from '../ui/WhatsappButton'

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur border-b border-mauve/30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="font-serif italic text-xl text-charcoal">{site.brand}</a>
        <nav aria-label="Principal" className="hidden items-center gap-6 md:flex">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-charcoal hover:text-sage">
              {item.label}
            </a>
          ))}
          <WhatsappButton className="bg-sage text-cream" message={site.hero.whatsappMessage}>
            WhatsApp
          </WhatsappButton>
        </nav>
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          className="text-charcoal md:hidden"
        >
          ☰
        </button>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
```

- [ ] **Step 5: Correr test**

Run: `npm test -- Navbar`
Expected: PASS.

- [ ] **Step 6: Implementar Footer.tsx**

```tsx
import { site } from '../../content/site'
import { INSTAGRAM_URL } from '../../lib/constants'
import { buildWhatsappUrl } from '../../lib/whatsapp'

export function Footer() {
  return (
    <footer id="contacto" className="bg-charcoal text-cream/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-10 text-center text-sm">
        <p className="font-serif italic text-xl text-cream">{site.brand}</p>
        <div className="flex gap-4">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-cream">Instagram @plantaria.sv</a>
          <a href={buildWhatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-cream">WhatsApp</a>
        </div>
        <p className="text-xs text-cream/50">© {new Date().getFullYear()} Plantaria</p>
      </div>
    </footer>
  )
}
```

- [ ] **Step 7: Suite + commit**

Run: `npm test`
Expected: todo PASS.
```bash
git add -A
git commit -m "feat: add navbar, mobile menu and footer"
```

---

## Task 7: Secciones de contenido (con /hallmark)

**Files:**
- Create: `src/components/sections/Hero.tsx`, `About.tsx`, `Services.tsx`, `Products.tsx`, `Trust.tsx`, `FinalCta.tsx`
- Test: `src/components/sections/sections.test.tsx`

- [ ] **Step 1: Test que falla** — `sections.test.tsx`

```tsx
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { Services } from './Services'
import { Products } from './Products'
import { site } from '../../content/site'

test('Hero muestra título y CTA de WhatsApp', () => {
  render(<Hero />)
  expect(screen.getByRole('heading', { name: site.hero.title })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: site.hero.cta })).toBeInTheDocument()
})

test('Services renderiza un card por servicio', () => {
  render(<Services />)
  site.services.forEach((s) => {
    expect(screen.getByText(s.title)).toBeInTheDocument()
  })
})

test('Products renderiza un card por producto', () => {
  render(<Products />)
  site.products.forEach((p) => {
    expect(screen.getByText(p.name)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Correr — falla**

Run: `npm test -- sections`
Expected: FAIL.

- [ ] **Step 3: Implementar Hero.tsx**

```tsx
import { site } from '../../content/site'
import { WhatsappButton } from '../ui/WhatsappButton'

export function Hero() {
  const { eyebrow, title, subtitle, cta, whatsappMessage } = site.hero
  return (
    <section id="top" className="bg-sage text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-cream/80">{eyebrow}</p>
        <h1 className="font-serif" style={{ fontSize: 'var(--text-hero)' }}>{title}</h1>
        <p className="max-w-xl text-cream/90" style={{ fontSize: 'var(--text-base)' }}>{subtitle}</p>
        <WhatsappButton className="bg-cream text-charcoal" message={whatsappMessage}>{cta}</WhatsappButton>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Implementar About.tsx**

```tsx
import { site } from '../../content/site'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-4" style={{ paddingBlock: 'var(--space-section)' }}>
      <div className="grid items-center gap-8 md:grid-cols-2">
        {/* TODO: reemplazar por retrato real */}
        <div className="aspect-[4/5] rounded-2xl bg-mauve/30" aria-hidden="true" />
        <div className="flex flex-col gap-4">
          <SectionHeading eyebrow="Sobre mí" title={site.about.title} />
          <p style={{ fontSize: 'var(--text-base)' }}>{site.about.body}</p>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Implementar Services.tsx**

```tsx
import { site } from '../../content/site'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'

export function Services() {
  return (
    <section id="asesorias" className="bg-cream-deep">
      <div className="mx-auto max-w-6xl px-4" style={{ paddingBlock: 'var(--space-section)' }}>
        <SectionHeading eyebrow="Asesorías" title="Cómo puedo ayudarte" className="mb-8 text-center" />
        <div className="grid gap-6 md:grid-cols-3">
          {site.services.map((s) => (
            <Card key={s.title}>
              <h3 className="font-serif text-xl text-sage">{s.title}</h3>
              <p className="mt-2 text-sm">{s.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 6: Implementar Products.tsx**

```tsx
import { site } from '../../content/site'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'

export function Products() {
  return (
    <section id="productos" className="mx-auto max-w-6xl px-4" style={{ paddingBlock: 'var(--space-section)' }}>
      <SectionHeading eyebrow="Productos" title="Lo que distribuyo" className="mb-8 text-center" />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {site.products.map((p) => (
          <Card key={p.name} className="bg-cream">
            {/* TODO: reemplazar por imagen real del producto */}
            <div className="mb-3 aspect-square rounded-xl bg-mauve/20" aria-hidden="true" />
            <h3 className="font-serif text-lg text-charcoal">{p.name}</h3>
            <p className="mt-1 text-xs text-charcoal/70">{p.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 7: Implementar Trust.tsx**

```tsx
import { site } from '../../content/site'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'

export function Trust() {
  return (
    <section className="bg-cream-deep">
      <div className="mx-auto max-w-6xl px-4" style={{ paddingBlock: 'var(--space-section)' }}>
        <SectionHeading eyebrow="Confianza" title="Lo que dicen" className="mb-8 text-center" />
        <div className="grid gap-6 md:grid-cols-2">
          {site.trust.map((t, i) => (
            <Card key={i}>
              <p className="font-serif italic text-lg text-charcoal">“{t.quote}”</p>
              <p className="mt-3 text-sm text-mauve">— {t.author}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 8: Implementar FinalCta.tsx**

```tsx
import { site } from '../../content/site'
import { WhatsappButton } from '../ui/WhatsappButton'

export function FinalCta() {
  const { title, body, cta, whatsappMessage } = site.finalCta
  return (
    <section className="bg-mauve text-cream">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-20 text-center">
        <h2 className="font-serif" style={{ fontSize: 'var(--text-h2)' }}>{title}</h2>
        <p>{body}</p>
        <WhatsappButton className="bg-cream text-charcoal" message={whatsappMessage}>{cta}</WhatsappButton>
      </div>
    </section>
  )
}
```

- [ ] **Step 9: Correr tests de secciones**

Run: `npm test -- sections`
Expected: 3 tests PASS.

- [ ] **Step 10: Commit**

```bash
git add -A
git commit -m "feat: add content sections (hero, about, services, products, trust, final cta)"
```

---

## Task 8: Componer App + pulido visual con /hallmark

**Files:**
- Modify: `src/App.tsx`, `src/App.test.tsx`

- [ ] **Step 1: Actualizar App.test.tsx**

```tsx
import { render, screen } from '@testing-library/react'
import App from './App'
import { site } from './content/site'

test('renderiza el hero y el footer', () => {
  render(<App />)
  expect(screen.getByRole('heading', { name: site.hero.title })).toBeInTheDocument()
  expect(screen.getByText(/instagram @plantaria.sv/i)).toBeInTheDocument()
})
```

- [ ] **Step 2: Componer App.tsx**

```tsx
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Services } from './components/sections/Services'
import { Products } from './components/sections/Products'
import { Trust } from './components/sections/Trust'
import { FinalCta } from './components/sections/FinalCta'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Trust />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 3: Correr toda la suite**

Run: `npm test`
Expected: todo PASS.

- [ ] **Step 4: Pulido visual con /hallmark**

Invocar la skill **/hallmark** en modo auditoría/redesign sobre el sitio corriendo (`npm run dev`). Aplicar mejoras dentro del sistema de tokens: jerarquía, ritmo de espaciado, profundidad/atmósfera botánica, estados hover/focus designed, motion sutil (transform/opacity, respetando `prefers-reduced-motion`). No romper los tests existentes (props, aria-labels, roles, hrefs). Verificar checklist anti-slop de las reglas web/design-quality.

- [ ] **Step 5: Verificar build y tests tras el pulido**

Run: `npm run build && npm test`
Expected: build OK, todos los tests PASS.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: compose app and polish ui with hallmark"
```

---

## Task 9: E2E con Playwright

**Files:**
- Create: `playwright.config.ts`, `tests/e2e/home.spec.ts`
- Modify: `package.json` (script `test:e2e`)

- [ ] **Step 1: Instalar Playwright**

Run:
```bash
npm install -D @playwright/test
npx playwright install chromium
```

- [ ] **Step 2: playwright.config.ts**

```ts
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
  use: { baseURL: 'http://localhost:5173' },
  projects: [
    { name: 'mobile', use: { ...devices['iPhone 13'] } },
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
  ],
})
```

- [ ] **Step 3: Agregar script** en `package.json`

```json
"test:e2e": "playwright test"
```

- [ ] **Step 4: home.spec.ts**

```ts
import { test, expect } from '@playwright/test'

test('carga el hero', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Jardines que respiran vida' })).toBeVisible()
})

test('el CTA del hero apunta a wa.me', async ({ page }) => {
  await page.goto('/')
  const cta = page.getByRole('link', { name: /escribime por whatsapp/i }).first()
  await expect(cta).toHaveAttribute('href', /^https:\/\/wa\.me\//)
  await expect(cta).toHaveAttribute('target', '_blank')
})

test('navegación por anclas a productos', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('#productos')).toBeAttached()
})
```

- [ ] **Step 5: Correr E2E**

Run: `npm run test:e2e`
Expected: tests PASS en mobile y desktop.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "test: add playwright e2e for home"
```

---

## Task 10: SEO básico, README y cierre

**Files:**
- Modify: `index.html`
- Create: `README.md`

- [ ] **Step 1: Meta tags Open Graph** en `index.html` `<head>`

```html
<meta property="og:title" content="Plantaria · Consultoría en jardinería">
<meta property="og:description" content="Asesoría experta y distribución de productos para tu jardín en Guatemala y El Salvador.">
<meta property="og:type" content="website">
<meta name="theme-color" content="#7C8C6A">
```

- [ ] **Step 2: README.md**

```markdown
# Plantaria — Sitio web

Landing one-page para Plantaria (consultoría en jardinería + distribución, GT/ESV).

## Stack
Vite + React + TypeScript + Tailwind. Contacto por WhatsApp (sin backend).

## Desarrollo
\`\`\`bash
npm install
npm run dev      # http://localhost:5173
npm test         # unit/componente (vitest)
npm run test:e2e # e2e (playwright)
npm run build    # producción
\`\`\`

## Contenido
Todo el copy y datos viven en \`src/content/site.ts\`. Buscar \`TODO\` para los pendientes a reemplazar con contenido real:
- Número de WhatsApp e Instagram en \`src/lib/constants.ts\`
- Bio + retrato, productos (nombre/foto/descripción), asesorías, testimonios en \`site.ts\`
```

- [ ] **Step 3: Verificación final**

Run: `npm run build && npm test`
Expected: build OK, todos los tests PASS.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "docs: add seo meta tags and readme"
```

---

## Self-Review (cobertura del spec)

- ✅ One-page con navbar de anclas → Tasks 6, 8 (App compone secciones; nav con hrefs `#...`)
- ✅ Contacto WhatsApp directo, sin backend → Tasks 4, 5 (whatsapp.ts, WhatsappButton)
- ✅ Stack Vite + React + Tailwind → Tasks 1, 2
- ✅ Contenido placeholder + TODOs → Task 4 (site.ts), constants.ts
- ✅ Dirección visual Botánica editorial (tokens/paleta) → Task 2
- ✅ UI con /hallmark → Tasks 5–8 (sub-skill requerida)
- ✅ Secciones Hero/About/Services/Products/Trust/FinalCta/Footer → Tasks 6, 7
- ✅ Mobile-first, área táctil, prefers-reduced-motion → Tasks 5 (min-h-44), 8 (motion)
- ✅ Accesibilidad (semántica, aria, foco) → Tasks 6, 7
- ✅ Testing unit/componente/E2E → Tasks 3, 4, 5, 6, 7, 8, 9
- ✅ SEO básico → Tasks 2, 10
- ✅ Fuera de alcance respetado (sin e-commerce/CMS/multi-idioma)

Consistencia de tipos: `buildWhatsappUrl(message?)`, `WhatsappButton` prop `message`, `site.*.whatsappMessage`, ids de ancla (`#top`, `#sobre-mi`, `#asesorias`, `#productos`, `#contacto`) coherentes entre Navbar/MobileMenu/secciones/Footer. ✅
