export interface ServiceItem { title: string; description: string }
export interface ProductItem { name: string; description: string; image?: string }
export interface TrustItem { quote: string; author: string }
export interface FaqItem { question: string; answer: string }

export const site = {
  brand: 'Plantaria',
  nav: [
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Asesorías', href: '#asesorias' },
    { label: 'Productos', href: '#productos' },
    { label: 'Preguntas', href: '#preguntas' },
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
  faq: {
    title: 'Preguntas frecuentes',
    eyebrow: 'Antes de escribirme',
    items: [
      {
        question: '¿En qué zonas trabajás?',
        answer: 'Ofrezco asesoría en Guatemala y El Salvador. La distribución de productos llega a ambos países; la visita presencial depende de la zona, y el resto lo resolvemos de forma remota.',
      },
      {
        question: '¿Cómo es una asesoría?',
        answer: 'Empezamos con un diagnóstico de tu espacio y tus plantas. A partir de ahí armo un plan a medida: qué sembrar, cómo cuidarlo y qué productos te conviene usar.',
      },
      {
        question: '¿Atendés jardines pequeños o balcones?',
        answer: 'Sí. Trabajo con jardines de todos los tamaños, macetas, terrazas y balcones. Cada espacio puede florecer con el cuidado correcto.',
      },
      {
        question: '¿Qué productos distribuís?',
        answer: 'Una selección curada para el cuidado del jardín. Te recomiendo solo lo que de verdad necesita tu espacio, según el plan que armamos juntos.',
      },
      {
        question: '¿Cómo agendo?',
        answer: 'Escribime por WhatsApp y me contás qué necesitás. Coordinamos desde ahí el primer paso.',
      },
    ] as FaqItem[],
  },
  finalCta: {
    title: '¿Hablamos de tu jardín?',
    body: 'Contame qué necesitás y armamos un plan juntos.',
    cta: 'Escribime por WhatsApp',
    whatsappMessage: 'Hola Plantaria, quiero más información.',
  },
} as const
