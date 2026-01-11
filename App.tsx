
import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageCircle, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Zap, 
  Sparkles, 
  MousePointer2,
  Video,
  ArrowRight,
  Send,
  User,
  Bot,
  X,
  Loader2
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { 
  WHATSAPP_URL, 
  PLANS, 
  TESTIMONIALS, 
  FAQS, 
  PROCESS_STEPS,
  BUSINESS_CONTEXT
} from './constants';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-zinc-900 text-white w-10 h-10 flex items-center justify-center font-black rounded-lg text-lg">
            13
          </div>
          <span className="font-bold text-xl tracking-tight">1311 Creativo</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-medium text-zinc-600">
          <a href="#planes" className="hover:text-zinc-900 transition-colors">Planes</a>
          <a href="#proceso" className="hover:text-zinc-900 transition-colors">Proceso</a>
          <a href="#contacto" className="hover:text-zinc-900 transition-colors">Contacto</a>
          <a href="#faq" className="hover:text-zinc-900 transition-colors">FAQ</a>
        </nav>

        <a 
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-green-100 transition-all scale-100 hover:scale-105"
        >
          <MessageCircle size={20} />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {['Estética', 'Food', 'E‑commerce', 'Servicios'].map(tag => (
            <span key={tag} className="px-3 py-1 bg-zinc-100 text-zinc-600 rounded-full text-xs font-bold uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          Gestión de redes + contenido premium para marcas que <span className="text-zinc-500 underline decoration-zinc-300">quieren crecer</span>.
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl mx-auto">
          Planificamos, diseñamos, editamos y publicamos tu contenido. 
          En 1311 Creativo nos encargamos de todo. <span className="text-zinc-900 font-semibold">Tú solo apruebas.</span>
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-zinc-900 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-3 transition-all hover:pr-12 shadow-xl"
          >
            Hablar por WhatsApp
            <ArrowRight className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all" size={20} />
          </a>
          <p className="text-sm text-zinc-500 font-medium">
            Cupos limitados por mes · Trabajamos remoto · Pago en USD
          </p>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-zinc-50 p-8 md:p-12 rounded-[2.5rem] border border-zinc-100 shadow-sm">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Hablemos de tu proyecto</h2>
            <p className="text-zinc-500">Completa el formulario y te contactaremos en menos de 24hs.</p>
          </div>

          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">¡Mensaje enviado!</h3>
              <p className="text-zinc-500 mb-8">Gracias por contactarnos. Te responderemos pronto.</p>
              <button onClick={() => setStatus('idle')} className="text-zinc-900 font-bold underline">Enviar otro mensaje</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700">Nombre completo</label>
                  <input required type="text" placeholder="Ej. Juan Pérez" className="w-full px-5 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all bg-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700">Correo electrónico</label>
                  <input required type="email" placeholder="juan@empresa.com" className="w-full px-5 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all bg-white" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700">Asunto</label>
                <select className="w-full px-5 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all bg-white">
                  <option>Consulta General</option>
                  <option>Plan Básico</option>
                  <option>Plan Intermedio</option>
                  <option>Plan Premium</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700">Mensaje</label>
                <textarea required rows={4} placeholder="Cuéntanos un poco sobre tu marca..." className="w-full px-5 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all bg-white"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full bg-zinc-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-black transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'sending' ? <Loader2 className="animate-spin" /> : 'Enviar mensaje'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: '¡Hola! Soy el asistente de 1311 Creativo. ¿Tienes alguna duda sobre nuestros planes de redes sociales?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: BUSINESS_CONTEXT,
        }
      });

      const response = await chat.sendMessage({ message: userMsg });
      setMessages(prev => [...prev, { role: 'bot', text: response.text || 'Lo siento, hubo un error al procesar tu mensaje.' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Lo siento, parece que hay un problema de conexión. ¿Te gustaría hablar con un agente por WhatsApp?' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[320px] sm:w-[380px] h-[500px] bg-white rounded-3xl shadow-2xl border border-zinc-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-4 bg-zinc-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center font-bold text-xs">13</div>
              <div>
                <h4 className="font-bold text-sm">1311 Assist</h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-4 space-y-4 overflow-y-auto bg-zinc-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-zinc-900 text-white rounded-tr-none' : 'bg-white border border-zinc-100 text-zinc-800 shadow-sm rounded-tl-none'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-zinc-100 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                  <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-zinc-100">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escribe tu duda..." 
                className="flex-grow px-4 py-2 bg-zinc-100 border-none focus:ring-0 rounded-xl text-sm outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="p-2 bg-zinc-900 text-white rounded-xl hover:bg-black transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-zinc-100 text-zinc-900 rotate-90' : 'bg-zinc-900 text-white hover:scale-110'}`}
      >
        {isOpen ? <X size={24} /> : <Bot size={28} />}
      </button>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      title: "Diseño de alto impacto",
      desc: "Estética premium y consistente que eleva la percepción de tu marca.",
      icon: <Sparkles className="w-8 h-8 text-zinc-900" />
    },
    {
      title: "Reels con propósito",
      desc: "Guion, subtítulos y llamados a la acción claros para convertir seguidores.",
      icon: <Video className="w-8 h-8 text-zinc-900" />
    },
    {
      title: "Aprobación simple",
      desc: "Proceso fluido donde tú tienes el control final, pero nosotros el trabajo pesado.",
      icon: <MousePointer2 className="w-8 h-8 text-zinc-900" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((b, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="mb-6 p-4 bg-zinc-50 rounded-2xl group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                {b.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{b.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Lo que dicen nuestros clientes</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {TESTIMONIALS.map(t => (
            <div key={t.id} className="bg-white p-8 rounded-3xl border border-zinc-100 text-left shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Check key={i} size={14} className="text-zinc-900 fill-zinc-900" />)}
              </div>
              <h4 className="font-bold text-lg mb-2">{t.title}</h4>
              <p className="text-zinc-600 italic mb-6">"{t.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center font-bold text-zinc-500">
                  {t.author[0]}
                </div>
                <div>
                  <p className="font-bold text-sm">{t.author}</p>
                  <p className="text-zinc-400 text-xs">{t.brand}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={WHATSAPP_URL} className="bg-zinc-900 text-white px-6 py-3 rounded-full font-bold">Quiero empezar (WhatsApp)</a>
          <a href="#comparar" className="bg-white text-zinc-900 border border-zinc-200 px-6 py-3 rounded-full font-bold">Comparar planes</a>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="planes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Elige tu plan de crecimiento</h2>
          <p className="text-zinc-500">Sin contratos eternos. Resultados que se ven.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PLANS.map(plan => (
            <div 
              key={plan.id} 
              className={`relative flex flex-col p-8 rounded-[2.5rem] border ${plan.popular ? 'border-zinc-900 shadow-2xl scale-105 z-10' : 'border-zinc-100 bg-zinc-50/50'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-zinc-900 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                  Más popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black">${plan.price}</span>
                  <span className="text-zinc-400 font-medium">/ mes</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-zinc-900 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-zinc-700 font-medium leading-tight">{f}</span>
                  </div>
                ))}
              </div>

              <a 
                href={WHATSAPP_URL}
                className={`w-full py-4 rounded-2xl font-bold text-center transition-all ${plan.popular ? 'bg-zinc-900 text-white hover:bg-black' : 'bg-white border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white'}`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-12 text-zinc-400 text-sm max-w-xl mx-auto">
          * Sin sesiones de grabación incluidas. El Plan Premium incluye Reels creados con IA para reducir la dependencia de material enviado por el cliente.
        </p>
      </div>
    </section>
  );
};

const ComparisonTable = () => {
  const categories = [
    { label: 'Plataformas', values: ['IG', 'IG + TikTok Lite', 'IG + TikTok Full'] },
    { label: 'Posts + Carruseles', values: ['16', '16', '19'] },
    { label: 'Reels mensuales', values: ['6', '8', '10'] },
    { label: 'Historias mensuales', values: ['16', '20', '28'] },
    { label: 'TikToks adicionales', values: ['-', '6', '10'] },
    { label: 'Contenido IA', values: ['-', '-', 'Hasta 4 Reels'] },
    { label: 'Reuniones', values: ['2', '2', 'Ilimitadas / Prioridad'] },
    { label: 'Soporte', values: ['Standard', 'Standard', 'Prioritario'] },
  ];

  return (
    <section id="comparar" className="py-24 bg-zinc-900 text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Comparación rápida</h2>
          <p className="text-zinc-400">Detalles técnicos de cada plan para que decidas con claridad.</p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-6 font-bold text-zinc-400 text-sm uppercase tracking-wider">Característica</th>
                <th className="p-6 font-bold text-sm uppercase tracking-wider">Básico</th>
                <th className="p-6 font-bold text-sm uppercase tracking-wider text-zinc-300">Intermedio</th>
                <th className="p-6 font-bold text-sm uppercase tracking-wider text-white">Premium</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {categories.map((cat, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="p-6 font-medium text-zinc-400">{cat.label}</td>
                  {cat.values.map((v, j) => (
                    <td key={j} className={`p-6 text-sm ${v === '-' ? 'text-zinc-600' : 'text-zinc-200 font-semibold'}`}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  return (
    <section id="proceso" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Nuestro método de trabajo</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="relative p-8 rounded-[2rem] bg-zinc-50 border border-zinc-100">
              <div className="absolute top-8 right-8 text-6xl font-black text-zinc-200/50 leading-none">
                0{i + 1}
              </div>
              <div className="bg-zinc-900 text-white w-12 h-12 flex items-center justify-center rounded-xl mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-zinc-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Preguntas frecuentes</h2>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl border border-zinc-100 overflow-hidden cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="p-6 flex items-center justify-between font-bold text-zinc-800">
                {faq.question}
                {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              <div className={`px-6 pb-6 text-zinc-500 leading-relaxed transition-all ${openIndex === i ? 'block opacity-100' : 'hidden opacity-0'}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="bg-zinc-900 text-white w-8 h-8 flex items-center justify-center font-black rounded-lg text-sm">
            13
          </div>
          <span className="font-bold text-lg tracking-tight">1311 Creativo</span>
        </div>
        <div className="flex gap-8 text-sm font-medium text-zinc-500">
          <a href="#planes" className="hover:text-zinc-900">Planes</a>
          <a href="#proceso" className="hover:text-zinc-900">Proceso</a>
          <a href="#faq" className="hover:text-zinc-900">FAQ</a>
        </div>
        <p className="text-xs text-zinc-400 font-medium">
          © {new Date().getFullYear()} 1311 Creativo. Hecho para marcas con visión.
        </p>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Testimonials />
      <Pricing />
      <ComparisonTable />
      <Process />
      <ContactForm />
      <FAQ />
      <Footer />

      <LiveChat />

      {/* Persistent Mobile WhatsApp Button - adjusted position for chat bot */}
      <a 
        href={WHATSAPP_URL}
        className="fixed bottom-24 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl md:hidden flex items-center justify-center hover:bg-green-600 transition-colors"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default App;
