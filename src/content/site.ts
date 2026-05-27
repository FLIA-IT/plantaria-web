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
    subtitle: 'Asesoría experta y distribución de productos para tu jardín en Guatemala y El Salvador.',
    cta: 'Escribime por WhatsApp',
    whatsappMessage: 'Hola Plantaria, me gustaría una asesoría.',
  },
  about: {
    title: 'Sobre mí',
    body: 'Soy consultora en jardinería con experiencia ayudando a personas y espacios a florecer. Hoy también distribuyo productos seleccionados para el cuidado de tu jardín en la región.',
  },
  services: [
    { title: 'Asesoría de jardín', description: 'Diagnóstico y plan a medida para tu espacio verde.' },
    { title: 'Diseño y paisajismo', description: 'Composición de jardines funcionales y bonitos.' },
    { title: 'Cuidado y mantenimiento', description: 'Acompañamiento para que tus plantas prosperen.' },
  ] as ServiceItem[],
  products: [
    { name: 'Producto 1', description: 'Descripción breve del producto que distribuyo.' },
    { name: 'Producto 2', description: 'Descripción breve del producto que distribuyo.' },
    { name: 'Producto 3', description: 'Descripción breve del producto que distribuyo.' },
    { name: 'Producto 4', description: 'Descripción breve del producto que distribuyo.' },
  ] as ProductItem[],
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
