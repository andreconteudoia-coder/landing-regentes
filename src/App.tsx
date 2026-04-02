/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Music, 
  Mic2, 
  FileText, 
  Search, 
  Layers, 
  Play, 
  Download, 
  ListMusic, 
  ChevronDown, 
  Star, 
  ShieldCheck, 
  Lock, 
  Menu, 
  X,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Tablet,
  Laptop
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Button = ({ children, className = "", pulse = false, variant = "primary", ...props }: any) => {
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-purple-500/20",
    secondary: "bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-sm",
    outline: "border-2 border-purple-500/50 hover:border-purple-500 text-purple-400 hover:text-purple-300"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={pulse ? {
        boxShadow: [
          "0 0 0 0px rgba(168, 85, 247, 0.4)",
          "0 0 0 20px rgba(168, 85, 247, 0)",
        ]
      } : {}}
      transition={pulse ? {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut"
      } : {}}
      className={`px-8 py-4 font-bold rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 ${variants[variant as keyof typeof variants]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

const SectionTitle = ({ children, subtitle, align = "center" }: { children: React.ReactNode, subtitle?: string, align?: "center" | "left" }) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    {subtitle && <span className="text-purple-400 font-semibold tracking-widest uppercase text-sm mb-4 block">{subtitle}</span>}
    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-serif italic">{children}</h2>
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg font-semibold text-slate-200 group-hover:text-purple-400 transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-slate-200 selection:bg-purple-500/30 selection:text-purple-200 bg-gradient-premium">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Music className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white font-serif italic">Regentify</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#solucao" className="text-sm font-medium text-slate-400 hover:text-purple-400 transition-colors">Solução</a>
            <a href="#funcionalidades" className="text-sm font-medium text-slate-400 hover:text-purple-400 transition-colors">Funcionalidades</a>
            <a href="#preço" className="text-sm font-medium text-slate-400 hover:text-purple-400 transition-colors">Preço</a>
            <Button className="py-2 px-6 text-sm" variant="secondary">Acessar Agora</Button>
          </div>
          <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-bold uppercase tracking-widest mb-8">
              <Star className="w-3 h-3 fill-current" />
              Exclusivo para Regentes e Líderes de Louvor
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight font-serif italic">
              Sua regência, elevada ao <span className="text-gradient">próximo nível</span>.
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
              O primeiro assistente digital feito exclusivamente para Regentes de Coral e Líderes de Louvor. Organize repertórios, gere PDFs profissionais e tenha tudo pronto para o seu ensaio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button pulse={true} className="w-full sm:w-auto text-lg px-10">
                Quero Organizar Meu Coral por R$ 14,99/mês
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">


            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 glass rounded-[2rem] p-4 shadow-2xl border border-white/10 aspect-[16/10] w-full overflow-hidden">
              <img 
                src="https://cdn.unasp.br/blog/wp-content/uploads/2019/08/shutterstock_1338680132-e1565876491158.jpg" 
                alt="Regentify App Interface" 
                className="w-full h-full object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-600/20 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </header>

      {/* 2. PROBLEMA VS. SOLUÇÃO */}
      <section id="solucao" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionTitle align="left" subtitle="O Problema">Você ainda sofre com a desorganização?</SectionTitle>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                Reger um coral já é um desafio artístico imenso. Você não deveria perder tempo lutando com pastas pesadas, xerox perdidos e áudios espalhados no WhatsApp.
              </p>
              
              <div className="space-y-6">
                {[
                  "Horas perdidas formatando letras no Word.",
                  "Pastas pesadas que cansam os braços e as costas.",
                  "Cantores perdidos sem saber qual a sua voz.",
                  "Falta de um lugar centralizado para áudios e MIDI."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="mt-1 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 group-hover:bg-red-500/20 transition-colors">
                      <X className="w-3 h-3 text-red-500" />
                    </div>
                    <span className="text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[3rem] border border-purple-500/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-3xl rounded-full" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-purple-500/20">
                  <Music className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 font-serif italic">Regentify: Sua Batuta Digital</h3>
                <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                  O Regentify foi criado para que você foque no que realmente importa: **a música**. Transformamos seu tablet ou celular na ferramenta de regência mais poderosa do mercado.
                </p>
                <div className="space-y-4">
                  {[
                    "Tudo organizado em um só lugar.",
                    "Ensaios 3x mais produtivos.",
                    "Coral mais confiante e afinado.",
                    "Profissionalismo em cada apresentação."
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle2 className="w-6 h-6 text-purple-500" />
                      <span className="text-white font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. FEATURES PRINCIPAIS (Bento Grid) */}
      <section id="funcionalidades" className="py-24 bg-black/40">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Funcionalidades">O que faz o Regentify ser indispensável?</SectionTitle>
          
          <div className="grid md:grid-cols-6 md:grid-rows-2 gap-4">
            {/* Feature 1: Organization */}
            <div className="md:col-span-3 md:row-span-2 glass rounded-[2.5rem] p-10 flex flex-col justify-between group hover:border-purple-500/40 transition-all">
              <div>
                <div className="w-14 h-14 bg-purple-600/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-600 transition-colors">
                  <Layers className="w-6 h-6 text-purple-400 group-hover:text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Organização Profissional</h3>
                <p className="text-slate-400 text-lg leading-relaxed">Centralize todo o seu repertório em um só lugar. Tenha acesso instantâneo a letras, áudios e anotações técnicas sem carregar peso.</p>
              </div>
              <div className="mt-12 flex gap-2">
                {[1, 2, 3, 4].map(v => (
                  <div key={v} className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-purple-400">
                    <Music className="w-4 h-4" />
                  </div>
                ))}
              </div>
            </div>

            {/* Feature 2: Search */}
            <div className="md:col-span-3 glass rounded-[2.5rem] p-8 flex items-center gap-8 group hover:border-blue-500/40 transition-all">
              <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                <Search className="w-8 h-8 text-blue-400 group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Busca Inteligente</h4>
                <p className="text-slate-400 text-sm">Encontre letras automaticamente em bancos de dados globais como Vagalume, Letras.mus e LRCLIB.</p>
              </div>
            </div>

            {/* Feature 3: Kit */}
            <div className="md:col-span-3 glass rounded-[2.5rem] p-8 flex items-center gap-8 group hover:border-pink-500/40 transition-all">
              <div className="w-16 h-16 bg-pink-600/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-pink-600 transition-colors">
                <Mic2 className="w-8 h-8 text-pink-400 group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Kit do Regente</h4>
                <p className="text-slate-400 text-sm">Metrônomo e Diapasão para auxiliar nos seus ensaios.</p>
              </div>
            </div>

            {/* Feature 4: Presentation */}
            <div className="md:col-span-2 glass rounded-[2.5rem] p-8 flex flex-col justify-between group hover:border-green-500/40 transition-all">
              <Play className="w-8 h-8 text-green-400 mb-4" />
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Modo Apresentação</h4>
                <p className="text-slate-400 text-xs">Auto-scroll inteligente para você reger sem tocar na tela.</p>
              </div>
            </div>

            {/* Feature 5: PDF */}
            <div className="md:col-span-2 glass rounded-[2.5rem] p-8 flex flex-col justify-between group hover:border-orange-500/40 transition-all">
              <Download className="w-8 h-8 text-orange-400 mb-4" />
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Gerador de PDF</h4>
                <p className="text-slate-400 text-xs">Exporte letras formatadas com um clique.</p>
              </div>
            </div>

            {/* Feature 6: Setlists */}
            <div className="md:col-span-2 glass rounded-[2.5rem] p-8 flex flex-col justify-between group hover:border-blue-400/40 transition-all">
              <ListMusic className="w-8 h-8 text-blue-400 mb-4" />
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Setlists Dinâmicos</h4>
                <p className="text-slate-400 text-xs">Monte o repertório do culto ou concerto em segundos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TUTORIAL COMPLETO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Passo a Passo">Como o Regentify transforma seu ensaio?</SectionTitle>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Busque ou Cole",
                desc: "Encontre a música em nossa base global ou simplesmente cole a letra. O Regentify identifica a estrutura musical na hora.",
                img: "https://tlgagenciadigital.com.br/wp-content/uploads/2026/03/meu-site-na-busca-organica-do-google.jpg"
              },
              {
                step: "02",
                title: "Prepare o Kit",
                desc: "Adicione os áudios de ensaio e suas anotações técnicas de dinâmica e tempo para cada música.",
                img: "https://picsum.photos/seed/step2/600/400"
              },
              {
                step: "03",
                title: "Reja com Maestria",
                desc: "Use o Modo Apresentação no ensaio ou gere PDFs profissionais para todo o coral em segundos.",
                img: "https://picsum.photos/seed/step3/600/400"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group"
              >
                <div className="relative mb-8 overflow-hidden rounded-[2rem] border border-white/5">
                  <img src={item.img} alt={item.title} className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">{item.step}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OFERTA IRRECUSÁVEL */}
      <section id="preço" className="py-24 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-600/5 blur-[120px] -z-10" />
        
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionTitle subtitle="Investimento">Sua música merece o melhor</SectionTitle>
          
          <div className="glass rounded-[3.5rem] border-2 border-purple-500/20 p-8 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-3xl rounded-full -mr-32 -mt-32" />
            
            <div className="mb-12">
              <p className="text-slate-400 mb-4 text-lg">
                Softwares de partitura custam mais de <span className="line-through">R$ 500/ano</span>. <br />
                Pastas e impressões custam centenas de reais todos os meses.
              </p>
              <div className="inline-block px-6 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-bold uppercase tracking-widest mb-8">
                Escolha seu plano: Mensal ou Anual
              </div>
              <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
                <Button pulse={true} className="w-full md:w-auto text-xl py-6" variant="primary">
                  <Lock className="w-5 h-5 mr-2" /> Assinar Mensal R$ 14,99/mês
                </Button>
                <div className="relative w-full md:w-auto">
                  <Button pulse={true} className="w-full md:w-auto text-xl py-6 border-2 border-yellow-400/80 ring-2 ring-yellow-300/40" variant="secondary">
                    <Lock className="w-5 h-5 mr-2" /> Assinar Anual R$ 120,00/ano
                  </Button>
                  <span className="absolute -top-3 right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-yellow-300 animate-bounce">Economize 33%</span>
                </div>
              </div>
          
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12 text-left max-w-lg mx-auto">
              {[
                "Organização Ilimitada",
                "Gerador de PDF Pro",
                "Modo Apresentação",
                "Kit do Regente Completo",
                "Suporte Musical VIP",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

    

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-8 border-t border-white/5">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-10 h-10 text-purple-500" />
              </div>
              <div className="flex items-center gap-3">
                <div className="flex text-yellow-500">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-white">Aprovado por Maestros</div>
                  <div className="text-xs text-slate-500">Nota 4.9/5 nas lojas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 bg-black/20">
        <div className="max-w-3xl mx-auto px-6">
          <SectionTitle subtitle="FAQ">Dúvidas Frequentes</SectionTitle>
          
          <div className="glass rounded-[2.5rem] p-10 border border-white/5">
            <FAQItem 
              question="O Regentify funciona no celular ou tablet?"
              answer="Sim! O Regentify é totalmente responsivo e funciona perfeitamente em smartphones e tablets (iOS e Android), além de computadores. Recomendamos o uso de tablets para a melhor experiência de regência."
            />

            <FAQItem 
              question="Posso compartilhar os PDFs com meu coral?"
              answer="Com certeza! O gerador de PDF cria arquivos profissionais e leves que você pode enviar via WhatsApp, e-mail ou imprimir para quem ainda prefere o papel."
            />
            <FAQItem 
              question="O pagamento de R$ 14,99 é mensal?"
              answer="Sim! Agora o Regentify funciona por assinatura mensal. Você paga R$ 14,99 por mês e pode cancelar quando quiser."
            />
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-20 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Music className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-bold tracking-tighter text-white font-serif italic">Regentify</span>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed">
                Elevando o nível da música coral através da tecnologia. O assistente definitivo para quem rege com paixão e excelência.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Links Úteis</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Suporte</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Contato</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li>contato@regentify.app</li>
                <li>@regentify.pro</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
            <p>© 2024 Regentify - Assistente Coral. Todos os direitos reservados.</p>
            <p>Feito com ❤️ por músicos para músicos.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
