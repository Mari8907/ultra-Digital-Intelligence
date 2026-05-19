import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Zap, 
  Globe, 
  TrendingUp, 
  Users, 
  ChevronRight, 
  Menu, 
  X, 
  Bot, 
  BarChart3, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass-panel' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center overflow-hidden rounded-lg border border-white/10 glass-panel">
            <img 
              src='/favicon.png'
              alt="UDI Logo" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/150?text=UDI';
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-bold tracking-tighter leading-none">UDI</span>
            <span className="text-[8px] uppercase tracking-[0.2em] text-udi-cyan font-bold">Ultra Digital Intelligence</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#about" className="hover:text-udi-cyan transition-colors">Nosotros</a>
          <a href="#services" className="hover:text-udi-cyan transition-colors">Servicios</a>
          <a href="#benefits" className="hover:text-udi-cyan transition-colors">Beneficios</a>
          <a href="#contact" className="px-5 py-2 border border-udi-cyan text-udi-cyan hover:bg-udi-cyan hover:text-udi-dark transition-all duration-300 rounded-full">
            Contacto
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-panel py-8 px-6 flex flex-col gap-6 md:hidden"
          >
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Servicios</a>
            <a href="#benefits" onClick={() => setIsMobileMenuOpen(false)}>Beneficios</a>
            <a href="#contact" className="text-udi-cyan" onClick={() => setIsMobileMenuOpen(false)}>Contacto</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-40 scale-105"
        >
          <source src="https://res.cloudinary.com/dgwuxmtpc/video/upload/v1774324216/UDI_Ultra_Digital_202603232301_1_suzzyc.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-udi-dark via-transparent to-udi-dark"></div>
        <div className="absolute inset-0 bg-udi-dark/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-4 rounded-full border border-udi-cyan/30 bg-udi-cyan/10 text-udi-cyan text-xs font-bold tracking-[0.3em] uppercase mb-6">
            Inteligencia Artificial de Próxima Generación
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tighter leading-none">
            ULTRA DIGITAL <br />
            <span className="text-gradient">INTELLIGENCE</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Sistemas inteligentes que conectan mercados. <br className="hidden md:block" />
            Inteligencia Artificial que escala realidades entre Argentina y Brasil.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button onClick={() => window.open('https://api.whatsapp.com/send/?phone=5543999368418&text=&type=phone_number&app_absent=0', '_blank')} className="w-full md:w-auto px-8 py-4 bg-udi-cyan text-udi-dark font-bold rounded-full hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 group">
              Agendar Consultoría Estratégica
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => {
              const element = document.getElementById('services');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }} className="w-full md:w-auto px-8 py-4 glass-panel rounded-full hover:bg-white/10 transition-all duration-300">
              Ver Soluciones
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/30">Scroll para explorar</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-udi-cyan to-transparent"></div>
        </motion.div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-20"></div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              La Convergencia de <br />
              <span className="text-udi-cyan">Dos Mundos.</span>
            </h2>
            <p className="text-lg text-white/60 mb-6 leading-relaxed">
              En UDI, eliminamos las fronteras operativas. Unimos la visión estratégica de Argentina con la potencia expansiva de Brasil a través de soluciones de IA que no solo optimizan, sino que transforman el ADN de los negocios.
            </p>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              No seguimos tendencias; construimos la infraestructura inteligente sobre la cual se moverá el mercado internacional en los próximos años.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-udi-cyan">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Innovación</div>
              </div>
              <div className="w-[1px] h-10 bg-white/10"></div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-udi-cyan">24/7</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Automatización</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden glass-panel p-2">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <img 
                  src="../public/img1.jpeg" 
                  alt="UDI Technology" 
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-udi-cyan/10 mix-blend-overlay"></div>
                
              </div>
            </div>
            {/* Decorative elements */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Agentes de IA Autónomos",
      desc: "Empleados digitales inteligentes que operan 24/7, gestionando procesos complejos sin intervención humana."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automatización de Ventas",
      desc: "Sistemas que identifican, califican y cierran tratos mientras tú te enfocas en escalar tu visión."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Consultoría Estratégica",
      desc: "El mapa de ruta definitivo para la dominación digital, integrando IA en cada punto de contacto."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Formación Ejecutiva",
      desc: "Capacitamos a los líderes del mañana para dominar las herramientas que están redefiniendo el mundo."
    }
  ];

  return (
    <section id="services" className="py-24 bg-udi-gray/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Soluciones de <span className="text-udi-cyan">Alto Valor</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto">Diseñamos el futuro operativo de tu empresa con tecnología disruptiva.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl hover:border-udi-cyan/50 transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-udi-cyan/10 rounded-xl flex items-center justify-center text-udi-cyan mb-6 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-4">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    "Ahorro drástico de tiempo operativo",
    "Optimización de procesos críticos",
    "Eliminación de tareas repetitivas",
    "Atención al cliente hiper-personalizada",
    "Escalabilidad sin límites geográficos",
    "Incremento medible en el ROI digital"
  ];

  return (
    <section id="benefits" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-panel rounded-3xl overflow-hidden grid md:grid-cols-2">
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              ¿Por qué el mercado <br />
              está eligiendo <span className="text-udi-cyan">UDI?</span>
            </h2>
            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-white/70"
                >
                  <div className="w-5 h-5 rounded-full bg-udi-cyan/20 flex items-center justify-center">
                    <ChevronRight className="w-3 h-3 text-udi-cyan" />
                  </div>
                  {b}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="bg-udi-cyan/5 relative min-h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-64 h-64 border border-udi-cyan/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 border border-udi-cyan/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="w-20 h-20 text-udi-cyan animate-pulse" />
                </div>
              </div>
            </div>
            {/* Floating stats */}
            <div className="absolute top-1/4 right-10 glass-panel p-4 rounded-xl">
              <BarChart3 className="text-udi-cyan w-6 h-6 mb-2" />
              <div className="text-xs text-white/40">Crecimiento</div>
              <div className="text-lg font-bold">+400%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const International = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter">
            EL PUENTE <span className="text-gradient">INTELIGENTE</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto mb-16">
            Conectamos el pulso estratégico de Argentina con la potencia industrial de Brasil. UDI es el catalizador de la expansión regional.
          </p>
        </motion.div>

        <div className="relative h-[300px] md:h-[500px] w-full max-w-4xl mx-auto">
          {/* Abstract Map Representation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-udi-cyan/30 to-transparent"></div>
            <div className="absolute left-1/4 w-4 h-4 bg-udi-cyan rounded-full glow-cyan">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                <span className="text-2xl">🇦🇷</span>
                <span className="text-[10px] uppercase tracking-widest text-udi-cyan font-bold">Argentina</span>
              </div>
            </div>
            <div className="absolute right-1/4 w-4 h-4 bg-udi-cyan rounded-full glow-cyan">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                <span className="text-2xl">🇧🇷</span>
                <span className="text-[10px] uppercase tracking-widest text-udi-cyan font-bold">Brasil</span>
              </div>
            </div>
            {/* Connection Line */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '50%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute h-[2px] bg-udi-cyan shadow-[0_0_15px_rgba(0,240,255,0.8)]"
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTAFinal = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="glass-panel p-12 md:p-24 rounded-[40px] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-udi-cyan to-transparent"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              ¿Listo para <br />
              <span className="text-udi-cyan">el futuro?</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
              Empieza hoy la transformación que pondrá a tu empresa a la vanguardia internacional.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a 
                href="https://wa.me/5543999368418" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full md:w-auto px-8 py-4 bg-udi-cyan text-udi-dark font-bold rounded-full hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-3 group"
              >
                <span className="text-lg">🇧🇷</span>
                WhatsApp Brasil
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://wa.me/543764889702" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full md:w-auto px-8 py-4 glass-panel rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span className="text-lg">🇦🇷</span>
                WhatsApp Argentina
              </a>
            </div>
            <div className="mt-10">
              <a 
                href="https://instagram.com/ultra.digital_intelligence" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-udi-cyan hover:underline flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                @ultra.digital_intelligence
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/5 bg-udi-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-udi-cyan rounded-lg flex items-center justify-center overflow-hidden">
                <img src="../public/favicon.png" alt="UDI" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-display font-bold tracking-tighter">UDI</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Liderando la transformación digital con Inteligencia Artificial entre Argentina y Brasil.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-udi-cyan">Contacto Directo</h4>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <a href="https://api.whatsapp.com/send/?phone=5543999368418&text&type=phone_number&app_absent=0" className="hover:text-white transition-colors flex items-center gap-2">
                <span className="text-base">🇧🇷</span> +55 43 99936-8418
              </a>
              <a href="https://api.whatsapp.com/send/?phone=543764889702&text&type=phone_number&app_absent=0" className="hover:text-white transition-colors flex items-center gap-2">
                <span className="text-base">🇦🇷</span> +54 376 488-9702
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-udi-cyan">Siguenos</h4>
            <a 
              href="https://instagram.com/ultra.digital_intelligence" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2 text-white/60"
            >
              <Users className="w-5 h-5" />
              @ultra.digital_intelligence
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/20 text-[10px] uppercase tracking-[0.3em]">
            © 2026 Ultra Digital Intelligence. Innovación sin fronteras.
          </div>
          <div className="flex gap-6">
            <div className="w-1 h-1 rounded-full bg-udi-cyan"></div>
            <div className="w-1 h-1 rounded-full bg-udi-cyan opacity-50"></div>
            <div className="w-1 h-1 rounded-full bg-udi-cyan opacity-20"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-udi-cyan selection:text-udi-dark">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <International />
      <CTAFinal />
      <Footer />
    </div>
  );
}
