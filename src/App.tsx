/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Instagram, 
  MapPin, 
  Clock, 
  ChevronRight, 
  X, 
  MessageCircle,
  ChevronLeft
} from 'lucide-react';

const DOCKS_ASSETS = {
  brand: {
    name: "Dock's Barbershop",
    logo: "https://i.imgur.com/q8nnL2Y.png",
    instagram: "https://www.instagram.com/p/DBjZLT-vufT/",
    address: "AV. CEL. SILVA TELLES, 1002 - CAMBUÍ, CAMPINAS - SP (CAMBUÍ CORPORATE)"
  },
  booking: {
    geral: "https://api.whatsapp.com/send/?phone=5519993106255",
    gabriel: "https://api.whatsapp.com/send/?phone=559991061444",
    paulo: "https://api.whatsapp.com/send/?phone=5519994931985",
    eddy: "https://api.whatsapp.com/send/?phone=551993375652"
  },
  atmosphere: [
    "https://i.imgur.com/FNh6mGb.png", 
    "https://i.imgur.com/qISm4ac.png"
  ],
  visagismo: [
    "https://i.imgur.com/iB0PCrI.png", "https://i.imgur.com/GZubA1e.png",
    "https://i.imgur.com/0Oo5Q5u.png", "https://i.imgur.com/U0D3jy1.png", "https://i.imgur.com/fHLaU1T.png"
  ],
  cortes: [
    "https://i.imgur.com/VeyEctV.png", "https://i.imgur.com/ZJ8spHP.png",
    "https://i.imgur.com/84s81jQ.png", "https://i.imgur.com/rqFpkow.png", "https://i.imgur.com/UT5YwQM.jpeg"
  ],
  team: [
    { name: "Gabriel Damásio", img: "https://i.imgur.com/z21TsV4.png", link: "https://api.whatsapp.com/send/?phone=559991061444" },
    { name: "Paulo Lima", img: "https://i.imgur.com/eIylogp.jpeg", link: "https://api.whatsapp.com/send/?phone=5519994931985" },
    { name: "Eddy Santos", img: "https://i.imgur.com/kzZp6NA.jpeg", link: "https://api.whatsapp.com/send/?phone=551993375652" }
  ]
};

const FadeInWhenVisible = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <div className="min-h-screen bg-docks-navy selection:bg-docks-bronze selection:text-white overflow-x-hidden">
      {/* Navegação */}
      <nav className="fixed top-0 w-full z-50 border-b-thin bg-docks-navy/95">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src={DOCKS_ASSETS.brand.logo} 
              alt="Logo" 
              className="h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="flex items-center gap-6">
            <a 
              href={DOCKS_ASSETS.brand.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-docks-white hover:text-docks-bronze transition-colors flex items-center gap-2 text-[10px] font-medium tracking-[0.25em] uppercase"
            >
              <Instagram size={14} />
              <span className="hidden md:inline">Instagram</span>
            </a>
            <a 
              href={DOCKS_ASSETS.booking.geral}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-docks-bronze text-white px-5 py-2 text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-docks-bronze/90 transition-all"
            >
              Agendar
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={DOCKS_ASSETS.atmosphere[0]} 
            alt="Ambiente" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-docks-navy" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-8">
            <img 
              src={DOCKS_ASSETS.brand.logo} 
              alt="Dock's Logo" 
              className="h-16 md:h-24 w-auto object-contain opacity-90"
              referrerPolicy="no-referrer"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <span className="font-accent text-docks-bronze text-[1.2rem] mb-6 block">
            Estilo que reflete a sua personalidade
          </span>
          <h1 className="font-barlow text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9] mb-6">
            MOLDANDO ESTILOS <br />
            <span className="text-docks-bronze">COM MAESTRIA</span>
          </h1>
          <p className="font-montserrat text-[10px] md:text-xs tracking-[0.3em] uppercase font-light max-w-xl mx-auto mb-10 opacity-80 leading-relaxed">
            ESPAÇO VOLTADO PARA ESTUDOS DE IMAGEM MASCULINA NO CORAÇÃO DO CAMBUÍ.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={DOCKS_ASSETS.booking.geral}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-docks-bronze text-white px-10 py-5 text-xs font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-docks-navy transition-all duration-500 flex items-center justify-center gap-3 group"
            >
              Agendar Experiência
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <motion.div 
          style={{ opacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-px h-12 bg-gradient-to-b from-docks-bronze to-transparent" />
        </motion.div>
      </section>

      {/* Info & Localização */}
      <section className="py-20 border-y-thin industrial-grid">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeInWhenVisible>
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-docks-bronze font-oswald text-sm tracking-[0.4em] uppercase">Exclusividade</span>
                <h2 className="font-barlow text-4xl md:text-5xl font-bold tracking-tight uppercase leading-tight">
                  ATENDIMENTO E CORTE <br />
                  <span className="text-docks-bronze">DE ALTO PADRÃO</span>
                </h2>
              </div>
              <div className="w-16 h-[1px] bg-docks-bronze" />
              <p className="font-montserrat text-base leading-relaxed font-light opacity-80 max-w-lg">
                Seu tempo é valioso. Na Dock's, oferecemos o cuidado que você merece em um santuário de exclusividade no Cambuí. Cada detalhe foi pensado para proporcionar uma experiência única de relaxamento e estilo.
              </p>
              <div className="flex items-start gap-4 p-4 border border-docks-bronze/20 bg-docks-bronze/5">
                <MapPin className="text-docks-bronze shrink-0" size={20} />
                <div className="space-y-1">
                  <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-docks-bronze">Localização</p>
                  <p className="text-xs tracking-wider uppercase opacity-70">{DOCKS_ASSETS.brand.address}</p>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className="bg-slate-900/40 border border-white/5 p-8 md:p-12 space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-docks-bronze/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-docks-bronze/10 transition-colors" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-2 bg-docks-bronze/10">
                    <Clock className="text-docks-bronze" size={24} />
                  </div>
                  <h3 className="font-oswald text-2xl uppercase tracking-tight">Horários de Atendimento</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-end border-b border-white/10 pb-3">
                    <div className="space-y-1">
                      <span className="text-[10px] tracking-[0.3em] uppercase opacity-40">Dias Úteis</span>
                      <p className="font-montserrat text-sm uppercase">Terça a Sábado</p>
                    </div>
                    <span className="font-oswald text-xl text-docks-bronze">11h — 21h</span>
                  </div>
                  
                  <div className="flex justify-between items-end border-b border-white/10 pb-3">
                    <div className="space-y-1">
                      <span className="text-[10px] tracking-[0.3em] uppercase opacity-40">Fim de Semana</span>
                      <p className="font-montserrat text-sm uppercase">Domingo</p>
                    </div>
                    <span className="font-oswald text-xl text-docks-bronze">11h — 15h</span>
                  </div>
                </div>
              </div>
              
              <p className="text-[10px] tracking-[0.3em] uppercase opacity-40 text-center italic">
                Santuário de Estilo no Coração do Cambuí
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Seção Visagismo */}
      <section className="py-20 bg-[#0F172A] relative group">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <FadeInWhenVisible>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <span className="font-accent text-docks-bronze text-3xl">Estudos de</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] font-barlow tracking-tight uppercase">Visagismo Masculino</h2>
                <div className="w-20 h-1 bg-[#A8763E] mt-4"></div>
              </div>
              <p className="max-w-md font-montserrat text-xs tracking-[0.2em] uppercase opacity-60 leading-relaxed">
                Construindo autoridade através da imagem. <br />
                Análise técnica para alinhar seu visual ao seu propósito.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>

        <div className="relative">
          <div 
            className="flex overflow-x-auto snap-x snap-mandatory docks-scrollbar gap-6 px-6 pb-8" 
            style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            id="carousel-visagismo"
          >
            {DOCKS_ASSETS.visagismo.map((img, index) => (
              <div 
                key={index} 
                className="flex-none snap-center cursor-pointer group/item" 
                onClick={() => setSelectedImage(img)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={img} 
                    alt="Resultado" 
                    className="h-[400px] md:h-[500px] w-auto border border-white/10 shadow-2xl object-contain transition-transform duration-700 group-hover/item:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center" />
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows - Desktop Only */}
          <button 
            onClick={() => document.getElementById('carousel-visagismo')?.scrollBy({ left: -400, behavior: 'smooth' })}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 p-4 text-white opacity-0 group-hover:opacity-100 transition-all hidden md:flex items-center justify-center z-10 hover:bg-docks-bronze border border-white/10"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => document.getElementById('carousel-visagismo')?.scrollBy({ left: 400, behavior: 'smooth' })}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 p-4 text-white opacity-0 group-hover:opacity-100 transition-all hidden md:flex items-center justify-center z-10 hover:bg-docks-bronze border border-white/10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* Seção Cortes */}
      <section className="py-20 border-t-thin industrial-grid relative group/cortes">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <FadeInWhenVisible>
            <span className="text-docks-bronze font-oswald text-sm tracking-[0.4em] uppercase mb-4 block">Portfólio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] font-barlow tracking-tight uppercase">Resultados de Mestria</h2>
            <div className="w-24 h-1 bg-[#A8763E] mt-4 mx-auto"></div>
          </FadeInWhenVisible>
        </div>

        <div className="relative">
          <div 
            className="flex overflow-x-auto snap-x snap-mandatory docks-scrollbar gap-6 px-6 pb-8" 
            style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            id="carousel-cortes"
          >
            {DOCKS_ASSETS.cortes.map((img, index) => (
              <div 
                key={index} 
                className="flex-none snap-center cursor-pointer group/item" 
                onClick={() => setSelectedImage(img)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={img} 
                    alt="Resultado" 
                    className="h-[400px] md:h-[500px] w-auto border border-white/10 shadow-2xl object-contain transition-transform duration-700 group-hover/item:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Desktop Only */}
          <button 
            onClick={() => document.getElementById('carousel-cortes')?.scrollBy({ left: -400, behavior: 'smooth' })}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 p-4 text-white opacity-0 group-hover/cortes:opacity-100 transition-all hidden md:flex items-center justify-center z-10 hover:bg-docks-bronze border border-white/10"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => document.getElementById('carousel-cortes')?.scrollBy({ left: 400, behavior: 'smooth' })}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 p-4 text-white opacity-0 group-hover/cortes:opacity-100 transition-all hidden md:flex items-center justify-center z-10 hover:bg-docks-bronze border border-white/10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <span className="font-accent text-docks-bronze text-3xl mb-2 block">Diferenciais</span>
              <h2 className="font-barlow text-4xl md:text-5xl font-bold tracking-tight uppercase">
                A EXPERIÊNCIA DOCK'S
              </h2>
              <div className="w-24 h-[1px] bg-docks-bronze mx-auto mt-6 opacity-30" />
            </div>
            
            <div className="max-w-4xl mx-auto">
              {[
                { title: "OS MELHORES EQUIPAMENTOS", desc: "Tecnologia de ponta para precisão absoluta." },
                { title: "HIGIENE E ESTERILIZAÇÃO", desc: "Protocolos rigorosos de segurança e limpeza." },
                { title: "PRODUTOS DE ALTA QUALIDADE", desc: "As melhores marcas mundiais para seu cabelo e barba." },
                { title: "TOALHAS TROUSSEAU 500G", desc: "O máximo conforto em cada detalhe do atendimento." },
                { title: "DOCTOR SHOES", desc: "Cuidado e conforto para seus pés enquanto você relaxa." },
                { title: "ESTACIONAMENTO COM MANOBRISTA", desc: "Sua única preocupação será seu estilo." },
                { title: "BAR & CONVENIÊNCIA", desc: "Charuto, café, cerveja, vinhos e muito mais." }
              ].map((item, idx) => (
                <div key={idx} className="group py-8 border-b border-white/5 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 hover:bg-white/[0.02] px-4 md:px-8 transition-all duration-500 first:border-t">
                  <span className="text-docks-bronze font-mono text-sm opacity-40">0{idx + 1}</span>
                  <div className="flex-grow">
                    <h3 className="font-oswald text-xl md:text-2xl tracking-tight uppercase group-hover:text-docks-bronze transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[10px] md:text-xs font-montserrat opacity-50 leading-relaxed uppercase tracking-[0.2em]">
                      {item.desc}
                    </p>
                  </div>
                  <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                    <ChevronRight size={24} className="text-docks-bronze" />
                  </div>
                </div>
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Time */}
      <section className="py-24 border-t-thin bg-docks-navy">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <FadeInWhenVisible>
            <div className="text-center">
              <span className="text-docks-bronze font-oswald text-sm tracking-[0.4em] uppercase mb-4 block">Especialistas</span>
              <h2 className="font-barlow text-4xl md:text-5xl font-bold tracking-tight uppercase mb-4">
                NOSSO <span className="text-docks-bronze">TIME</span>
              </h2>
              <div className="w-24 h-[1px] bg-docks-bronze mx-auto opacity-30" />
            </div>
          </FadeInWhenVisible>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {DOCKS_ASSETS.team.map((member, idx) => (
            <FadeInWhenVisible key={idx} delay={idx * 0.15}>
              <div className="group text-center">
                <div className="aspect-[4/5] bg-slate-900 overflow-hidden mb-6 relative border border-white/5">
                  <motion.img 
                    src={member.img} 
                    alt={member.name} 
                    initial={{ filter: 'grayscale(100%)' }}
                    whileInView={{ filter: 'grayscale(0%)' }}
                    viewport={{ amount: 0.7, once: false }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-docks-navy via-transparent to-transparent opacity-60" />
                </div>
                <h3 className="font-oswald text-2xl uppercase tracking-tight mb-2">{member.name}</h3>
                <a 
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.4em] uppercase text-docks-bronze hover:text-white transition-all duration-300 group/link"
                >
                  Agendar <MessageCircle size={14} className="group-hover/link:scale-110 transition-transform" />
                </a>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </section>

      {/* Recrutamento */}
      <section className="py-24 bg-docks-bronze text-white text-center industrial-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <FadeInWhenVisible>
            <span className="font-accent text-docks-navy text-3xl mb-4 block">Carreira</span>
            <h2 className="font-barlow text-4xl md:text-6xl font-bold tracking-tight uppercase mb-8 leading-tight">
              VENHA FAZER PARTE <br /> DO TIME DOCK'S
            </h2>
            <div className="space-y-6 font-montserrat text-sm md:text-lg mb-12 font-light tracking-wide leading-relaxed">
              <p className="opacity-90">
                Se você busca um ambiente profissional de alto nível para evoluir sua carreira, a Dock's Barbershop é o seu lugar. Oferecemos estrutura completa em localização privilegiada no Cambuí.
              </p>
              <p className="font-bold uppercase tracking-[0.2em] text-xs md:text-sm border-y border-white/20 py-6">
                Talento, vontade e propósito: as chaves para crescer conosco.
              </p>
            </div>
            <a 
              href={DOCKS_ASSETS.booking.geral}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-docks-navy text-white px-12 py-6 text-xs font-bold tracking-[0.4em] uppercase hover:bg-white hover:text-docks-navy transition-all duration-500 shadow-2xl"
            >
              QUERO FAZER PARTE
            </a>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t-thin bg-docks-navy">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img 
                src={DOCKS_ASSETS.brand.logo} 
                alt="Logo" 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <p className="text-[9px] tracking-[0.2em] uppercase opacity-30 max-w-xs leading-relaxed">
              {DOCKS_ASSETS.brand.address}
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href={DOCKS_ASSETS.brand.instagram} target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-opacity">
              <Instagram size={20} />
            </a>
            <a href={DOCKS_ASSETS.booking.geral} target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-opacity">
              <MessageCircle size={20} />
            </a>
          </div>

          <p className="text-[9px] tracking-[0.2em] uppercase opacity-30">
            © {new Date().getFullYear()} DOCK'S BARBERSHOP. TODOS OS DIREITOS RESERVADOS.
          </p>
        </div>
      </footer>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-docks-bronze transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={28} />
            </button>
            <motion.img 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={selectedImage} 
              alt="Visualização" 
              className="max-w-full max-h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
