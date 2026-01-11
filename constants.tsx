
import React from 'react';
import { Plan, Testimonial, FAQItem } from './types';
import { 
  Instagram, 
  Video, 
  CheckCircle2, 
  Clock, 
  BarChart3, 
  Users, 
  MessageCircle, 
  Sparkles,
  Zap,
  Layout,
  MousePointer2
} from 'lucide-react';

export const WHATSAPP_URL = "https://wa.me/584146130675"; 

export const PLANS: Plan[] = [
  {
    id: 'basic',
    name: 'Plan Básico',
    price: '550',
    description: 'Instagram completo con community ligero y 2 reuniones.',
    features: [
      'Instagram (1 cuenta)',
      '12 posts mensuales',
      '4 carruseles (máx. 7 slides)',
      '6 reels (subtítulos + voz IA)',
      '16 historias',
      '2 reuniones/mes (30 min)',
      'Community ligero',
      'Reporte mensual'
    ],
    ctaText: 'Elegir Básico'
  },
  {
    id: 'intermediate',
    name: 'Plan Intermedio',
    price: '900',
    popular: true,
    description: 'Ideal para crecer: Instagram fuerte + TikTok lite.',
    features: [
      'Instagram + TikTok lite',
      'IG: 12 posts + 4 carruseles',
      'IG: 8 reels + 20 historias',
      'TikTok: 4 adaptaciones + 2 Photo Mode',
      'Community moderado',
      'Reporte con insights',
      '1 test estratégico / mes'
    ],
    ctaText: 'Elegir Intermedio'
  },
  {
    id: 'premium',
    name: 'Plan Premium',
    price: '1150',
    description: '2 redes, más volumen, soporte y Reels con IA.',
    features: [
      'Instagram + TikTok full',
      'IG: 14 posts + 5 carruseles',
      'IG: 10 reels + 28 historias',
      'TikTok: 6 adaptaciones + 2 exclusivos',
      '2 Photo Mode adicionales',
      'Hasta 4 Reels creados con IA',
      'Soporte prioritario',
      'Optimización continua'
    ],
    ctaText: 'Elegir Premium'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    author: 'Franklin',
    brand: 'Perfect Kream',
    title: '“Nos ayudó a conseguir mejores clientes.”',
    content: 'Desde que trabajamos con 1311 Creativo, hemos logrado posicionar mejor nuestro emprendimiento y atraer clientes de mayor calidad.',
  },
  {
    id: 2,
    author: 'Dra. Norma',
    brand: 'Dermatología',
    title: '“Me ayudó a posicionarme como especialista.”',
    content: 'Estoy muy contenta con los diseños y publicaciones. Me ha ayudado a reforzar mi autoridad en el cuidado de la piel y aumentar seguidores.',
  },
  {
    id: 3,
    author: 'Totoburger',
    brand: 'Comida rápida',
    title: '“Se notó la mejora en ventas.”',
    content: 'Con una imagen más profesional y contenido constante, mejoró la respuesta del público y se reflejó en las ventas.',
  }
];

export const FAQS: FAQItem[] = [
  {
    question: '¿Incluye grabación o sesión de fotos?',
    answer: 'No, nuestro servicio es content-only. Editamos y diseñamos con el material que tú nos proporciones o recursos de stock premium.'
  },
  {
    question: '¿Qué pasa si no tengo material para Reels?',
    answer: 'En el Plan Premium, parte de los Reels pueden ser creados totalmente con IA (avatars o contenido comercial), reduciendo tu dependencia de grabarte.'
  },
  {
    question: '¿Cómo apruebo el contenido?',
    answer: 'Te enviamos un calendario mensual con todas las piezas listas para tu aprobación. Una vez que das el visto bueno, nosotros programamos y publicamos.'
  },
  {
    question: '¿Cuánto tardan en empezar?',
    answer: 'Depende de la entrega de accesos y material. Una vez recibido todo, iniciamos el proceso de onboarding y la creación del primer calendario en 3-5 días hábiles.'
  }
];

export const PROCESS_STEPS = [
  {
    title: 'Onboarding',
    desc: 'Brief inicial, accesos a tus cuentas y definición de objetivos claros.',
    icon: <Users className="w-6 h-6" />
  },
  {
    title: 'Calendario',
    desc: 'Diseñamos la propuesta visual y estratégica mensual para que la apruebes.',
    icon: <Clock className="w-6 h-6" />
  },
  {
    title: 'Producción',
    desc: 'Diseño gráfico, edición de video y programación de todo el contenido.',
    icon: <Layout className="w-6 h-6" />
  },
  {
    title: 'Reporte',
    desc: 'Analizamos KPIs y te entregamos ideas de mejora para el siguiente ciclo.',
    icon: <BarChart3 className="w-6 h-6" />
  }
];

export const BUSINESS_CONTEXT = `
Eres el asistente virtual de "1311 Creativo", una agencia de gestión de redes sociales y contenido premium.
Tu objetivo es ayudar a los clientes con dudas sobre los planes y el proceso.

Información Clave:
- Plan Básico ($550/mes): 1 Instagram, 12 posts, 4 carruseles, 6 reels, 16 historias, 2 reuniones.
- Plan Intermedio ($900/mes - Más Popular): IG + TikTok Lite, 12 posts, 8 reels, 20 historias, community moderado.
- Plan Premium ($1,150/mes): IG + TikTok Full, 14 posts, 10 reels, 28 historias, soporte prioritario y contenido con IA.
- Proceso: Onboarding -> Calendario -> Producción -> Reporte.
- No incluimos grabación de video/fotos (es content-only). El Plan Premium incluye Reels con IA.
- Pago: en USD.
- Ubicación: Trabajo remoto para todo el mundo.

Reglas:
1. Sé amable, profesional y conciso.
2. Si no sabes la respuesta o el cliente pide hablar con alguien, invítalo a contactarnos por WhatsApp (${WHATSAPP_URL}) o llenar el formulario de contacto.
3. Responde siempre en español.
`;
