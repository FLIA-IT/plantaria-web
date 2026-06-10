export interface ServiceCategory {
  title: string
  items: string[]
}
export interface ProductItem {
  name: string
  tagline: string
  paragraphs: string[]
  certifications?: string[]
  image?: string
  imageAlt?: string
}
export interface ProjectGallery {
  label: string
  caption: string
  images: string[]
  alt: string
}
export interface ProjectItem {
  subtitle: string
  paragraphs: string[]
  hero?: { src: string; alt: string; width: number; height: number }
  galleries?: ProjectGallery[]
}
export interface TrustItem { quote: string; author: string }
export interface FaqItem { question: string; answer: string }

export const site = {
  brand: 'Plantaria',
  nav: [
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Asesorías', href: '#asesorias' },
    { label: 'Productos', href: '#productos' },
    { label: 'Proyectos', href: '#proyectos' },
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
    eyebrow: 'Consultora especializada en jardinería y manejo vegetal',
    title: 'Sobre mí',
    image: '/sm.webp',
    imageAlt: 'Retrato de la consultora de Plantaria',
    paragraphs: [
      'Soy una profesional especializada en jardinería, manejo de áreas verdes y sanidad vegetal, con experiencia asesorando a empresas, instituciones y clientes particulares en el desarrollo y cuidado de espacios verdes saludables y funcionales.',
      'Mi labor se centra en ofrecer soluciones técnicas integrales, prácticas y sostenibles para el diseño, establecimiento, mantenimiento y recuperación de jardines y áreas verdes. Asimismo, brindo orientación especializada en la selección y uso adecuado de productos para la nutrición, protección y fortalecimiento de las plantas.',
      'Mi compromiso es acompañar a cada cliente con asesoría personalizada, recomendaciones basadas en criterios técnicos y soluciones confiables que contribuyan a obtener resultados eficientes, sostenibles y de alta calidad.',
    ],
  },
  services: {
    eyebrow: 'Servicios de consultoría',
    title: 'Cómo puedo ayudarte',
    categories: [
      {
        title: 'Diseño y planificación de jardines',
        items: [
          'Selección de especies ornamentales.',
          'Diseño de áreas verdes.',
          'Planificación de sistemas de riego.',
          'Optimización de espacios exteriores.',
        ],
      },
      {
        title: 'Manejo y mantenimiento de jardines',
        items: [
          'Diagnóstico del estado fitosanitario.',
          'Programas de mantenimiento.',
          'Control de malezas.',
          'Recomendaciones de fertilización.',
        ],
      },
      {
        title: 'Sanidad vegetal',
        items: [
          'Identificación de plagas y enfermedades.',
          'Programas de prevención y control.',
          'Monitoreo técnico.',
          'Manejo integrado de plagas.',
        ],
      },
      {
        title: 'Capacitación y asesoría técnica',
        items: [
          'Buenas prácticas agrícolas.',
          'Uso responsable de agroquímicos.',
          'Manejo seguro de productos fitosanitarios.',
          'Capacitación para personal de campo y mantenimiento.',
        ],
      },
    ] as ServiceCategory[],
  },
  products: {
    eyebrow: 'Soluciones para el cuidado y protección vegetal',
    title: 'Lo que distribuyo',
    intro: 'Ofrezco productos seleccionados para contribuir al desarrollo saludable de plantas, jardines y cultivos, acompañados de asesoría técnica para su adecuada utilización.',
    items: [
      {
        name: 'Ecominerales',
        tagline: 'Solución mineral orgánica de alto desempeño',
        image: '/producto.webp',
        imageAlt: 'Saco de Ecominerales en campo agrícola',
        paragraphs: [
          'Los Ecominerales de D´naturals son una solución mineral orgánica de alto desempeño, desarrollada para fortalecer la salud del suelo y maximizar el potencial de los cultivos. Su fórmula, rica en **48% de silicio** y compuesta por **montmorillonita (45–55%)**, **andesina (20–30%)** y **calcita (9–19%)**, mejora la estructura celular de las plantas, optimiza la absorción de nutrientes y aumenta la eficiencia en el uso del agua.',
          'Gracias a su acción sobre las paredes celulares, los cultivos logran una **mayor resistencia** frente a enfermedades, plagas y condiciones de estrés, además de favorecer una **fotosíntesis más eficiente** y un **desarrollo vegetal más vigoroso**. Su tecnología mineral contribuye también a regenerar y equilibrar la salud del suelo, promoviendo una agricultura más sostenible y productiva.',
          'Además, Ecominerales cuenta con **certificaciones orgánicas internacionales** como USDA Organic, JAS y Euro Hoja garantizando un producto seguro, confiable y alineado con los más altos estándares de agricultura orgánica.',
        ],
        certifications: ['USDA Organic', 'JAS', 'Euro Hoja'],
      },
    ] as ProductItem[],
  },
  projects: {
    eyebrow: 'Proyectos',
    title: 'La Gran Vía',
    items: [
      {
        subtitle: 'Paisajismo y dirección agronómica',
        paragraphs: [
          'El proyecto de paisajismo de **La Gran Vía** inició a mediados de 2024, comenzando desde el **vivero de reproducción**, donde el equipo técnico definió el **diseño paisajístico** y la selección de especies vegetales requeridas para el desarrollo del proyecto.',
          'Como **consultora en agronomía**, tuve la responsabilidad de dirigir los procesos de **reproducción, crecimiento y desarrollo** de las diferentes especies destinadas al proyecto, asegurando que cada planta alcanzara las condiciones óptimas para su establecimiento en campo.',
          'Para lograrlo, se desarrollaron **planes de manejo específicos**, **programas fitosanitarios** y **estrategias nutricionales** adaptadas a cada grupo de especies, incluyendo ornamentales de sombra, ornamentales de sol, pastos, especies frutales y árboles maderables. Cada plan fue diseñado de manera detallada para garantizar un **crecimiento saludable, uniforme** y dentro de los tiempos establecidos para la ejecución del proyecto.',
          'El proceso representó un importante **reto técnico y operativo**, debido a la diversidad de especies y a las condiciones necesarias para su adecuado desarrollo. Sin embargo, fue una experiencia **altamente satisfactoria** al lograr culminar el proyecto con éxito.',
          'En las fotografías puede observarse la **evolución completa del proceso**: desde la **etapa inicial en vivero** hasta el **resultado final** ya establecido en el sitio del proyecto.',
        ],
        hero: {
          src: '/gv-final/gv-final1.webp',
          alt: 'La Gran Vía — resultado final del proyecto de paisajismo',
          width: 1280,
          height: 960,
        },
        galleries: [
          {
            label: 'Etapa inicial · vivero',
            caption: 'Producción y manejo de especies antes del establecimiento en campo.',
            alt: 'Planta del vivero del proyecto La Gran Vía',
            images: [
              '/gv-comienzo/gv-comienzo1.webp',
              '/gv-comienzo/gv-comienzo2.webp',
              '/gv-comienzo/gv-comienzo3.webp',
              '/gv-comienzo/gv-comienzo4.webp',
              '/gv-comienzo/gv-comienzo5.webp',
              '/gv-comienzo/gv-comienzo6.webp',
            ],
          },
          {
            label: 'Resultado final · sitio establecido',
            caption: 'Las mismas especies ya establecidas en el proyecto.',
            alt: 'Resultado final del paisajismo en La Gran Vía',
            images: [
              '/gv-final/gv-final2.webp',
              '/gv-final/gv-final3.webp',
              '/gv-final/gv-final4.webp',
              '/gv-final/gv-final5.webp',
              '/gv-final/gv-final6.webp',
              '/gv-final/gv-final7.webp',
              '/gv-final/gv-final8.webp',
              '/gv-final/gv-final9.webp',
              '/gv-final/gv-final10.webp',
              '/gv-final/gv-final11.webp',
            ],
          },
        ],
      },
    ] as ProjectItem[],
  },
  trust: [
    { quote: 'Transformó por completo nuestro jardín. Profesional y atenta.', author: 'Cliente satisfecho' },
    { quote: 'Excelente asesoría y productos de calidad.', author: 'Cliente satisfecho' },
  ] as TrustItem[],
  faq: {
    title: 'Preguntas frecuentes',
    eyebrow: 'Antes de escribirme',
    items: [
      {
        question: '¿En qué zonas brindas tus servicios?',
        answer: 'Ofrezco asesoría especializada en Guatemala y El Salvador. La distribución de productos está disponible en ambos países. Las visitas presenciales se coordinan según la ubicación del proyecto, mientras que muchas consultas y seguimientos pueden realizarse de forma remota.',
      },
      {
        question: '¿Cómo funciona una asesoría?',
        answer: 'Cada asesoría inicia con una evaluación de tu espacio, las condiciones del entorno y el estado de tus plantas. Con base en este diagnóstico, desarrollo un plan personalizado que incluye recomendaciones de especies, manejo, mantenimiento y los productos más adecuados para lograr los mejores resultados.',
      },
      {
        question: '¿Atiendes jardines pequeños o balcones?',
        answer: 'Sí. Trabajo con proyectos de todos los tamaños, desde jardines residenciales hasta terrazas, balcones y espacios con macetas. Cada área tiene el potencial de convertirse en un entorno verde y funcional con la planificación adecuada.',
      },
      {
        question: '¿Qué productos distribuyes?',
        answer: 'Distribuyo una selección de productos especializados para jardinería, paisajismo y cuidado vegetal. Mi enfoque es recomendar únicamente las soluciones que realmente necesita cada proyecto, garantizando un manejo eficiente y sostenible.',
      },
      {
        question: '¿Cómo puedo agendar una consulta?',
        answer: 'Puedes comunicarte conmigo a través de WhatsApp y contarme brevemente sobre tu proyecto o necesidad. A partir de ahí coordinaremos la modalidad de atención y los siguientes pasos para comenzar.',
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
