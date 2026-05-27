# Plantaria Web

Landing page de una sola página para **Plantaria** — consultoría en jardinería y distribución de productos para Guatemala y El Salvador. Contacto únicamente vía WhatsApp, sin backend.

## Stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS**
- **Vitest** + **Testing Library** (unit/component tests)
- **Playwright** (E2E)

## Comandos

```bash
npm install          # instalar dependencias
npm run dev          # servidor de desarrollo → http://localhost:5173
npm test             # unit tests (vitest run)
npm run test:e2e     # E2E con Playwright (arranca dev server automáticamente)
npm run build        # build de producción (tsc + vite build)
```

## Contenido

Todo el copy y los datos del sitio viven en **`src/content/site.ts`**. Las constantes de integración (WhatsApp, redes) están en **`src/lib/constants.ts`**.

### TODOs — reemplazar con contenido real

**`src/lib/constants.ts`**

- `WHATSAPP_NUMBER` — número real en formato internacional sin `+` (ej. `50212345678`)
- `INSTAGRAM_URL` — URL real del perfil de Instagram

**`src/content/site.ts`**

- `about.body` — bio real de la consultora
- Agregar campo `about.portrait` con la URL/ruta de la foto de perfil
- `products[]` — nombre, foto (`image`) y descripción real de cada producto distribuido
- `services[]` — títulos y descripciones reales de las asesorías ofrecidas
- `trust[]` — testimonios reales con nombre/autor real del cliente
