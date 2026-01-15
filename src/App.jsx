import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Database, Server, Layout, Cpu, Code2, Terminal, 
  Github, Linkedin, Mail, Globe, Moon, Sun, 
  MapPin, ExternalLink, Music, Sparkles, 
  ArrowRight, Box, ShieldCheck, Workflow, CheckCircle, 
  Send, AlertCircle, Users, Brain, Clock, Layers
} from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

// --- CONTEÚDO ATUALIZADO ---
const content = {
  pt: {
    hero: {
      role: 'Developer & AI Enthusiast', // Alterado para "Developer"
      title: 'Código com Alma & Lógica',
      subtitle: 'Desenvolvedora apaixonada por arquitetura de software, automação e inteligência artificial. Transformo regras de negócio complexas em sistemas elegantes e escaláveis.',
      location: 'Sorocaba, SP',
      btnProject: 'Ver Portfolio',
      btnContact: 'Entrar em Contato'
    },
    about: {
      title: 'A Arquiteta por trás do Código',
      // Texto atualizado para incluir Front-end
      desc1: 'Minha jornada técnica une a robustez do desenvolvimento Back-end com a versatilidade do Front-end e a inovação da Inteligência Artificial. Atualmente cursando Análise e Desenvolvimento de Sistemas na UNISO.',
      desc2: 'Tenho experiência prática na criação de sistemas desktop (Python/SQL) e aplicações web modernas. Meu foco é construir soluções completas, integrando APIs de IA com interfaces responsivas e intuitivas.',
      skillsTitle: 'Arsenal Técnico & Humano'
    },
    skills: {
      cat1: 'Back-end & Arquitetura',
      cat2: 'Banco de Dados',
      cat3: 'DevOps & Ferramentas',
      cat4: 'Frontend & UI', // Adicionado ao arsenal
      cat5: 'Soft Skills (Interpessoais)'
    },
    projects: {
      title: 'Projetos em Destaque',
      desktopCat: 'Desktop Engineering',
      aiCat: 'AI & Web Solutions',
      webCat: 'Web Development & Leadership',
      btnCode: 'Ver Código',
      btnLive: 'Testar Online',
      btnLegacy: 'Projeto Concluído (2024)',
      
      p1_title: 'Belle Time - Studio System',
      p1_desc: 'Sistema de gestão completo para salões de beleza. Gerencia agendamentos, base de clientes e fluxo financeiro com integridade de dados rigorosa.',
      p1_tech: ['Python', 'MySQL', 'PySide6', 'VirtualBox'],
      p1_role: 'Full System Architecture',
      p1_repo: 'https://github.com/isabelladosanjos/BelleTime_Agenda',
      
      p2_title: 'Symphony IA - Music Agent',
      p2_desc: 'Agente inteligente que analisa sentimentos via PLN e recomenda playlists musicais personalizadas utilizando a API do Groq.',
      p2_tech: ['Python', 'Groq API', 'Streamlit', 'LLM Engineering'],
      p2_role: 'AI Implementation',
      p2_repo: 'https://github.com/isabelladosanjos/SymphonyIA_ProjetoADS',
      p2_live: 'https://symphonyiaprojetoads-5dfiru6tjoubjst8kvsabn.streamlit.app/',

      p3_title: 'Robson Pinturas - Digital Presence',
      p3_desc: 'Liderança técnica no desenvolvimento de uma plataforma mobile-first. Implementação de WhatsApp Business API e Google OAuth.',
      p3_tech: ['JavaScript', 'Bootstrap', 'WhatsApp API', 'OAuth 2.0'],
      p3_role: 'Tech Lead & Full Front-End',
    },
    contact: {
      title: 'Vamos criar algo incrível?',
      desc: 'Preencha o formulário abaixo. A mensagem chegará diretamente no meu e-mail profissional.',
      btn: 'Enviar Mensagem',
      sending: 'Enviando...',
      success: 'Mensagem enviada com sucesso!',
      error: 'Houve um erro ao enviar.',
      placeholderName: 'Seu Nome',
      placeholderEmail: 'Seu E-mail',
      placeholderMsg: 'Sua Mensagem'
    },
    footer: {
      tagline: 'Construindo o futuro, uma linha de código por vez.',
      copy: '© 2026 Isabella Dos Anjos. Todos os direitos reservados.'
    }
  },
  en: {
    hero: {
      role: 'Developer & AI Enthusiast',
      title: 'Code with Soul & Logic',
      subtitle: 'Developer passionate about software architecture, automation, and artificial intelligence.',
      location: 'Sorocaba, Brazil',
      btnProject: 'View Portfolio',
      btnContact: 'Get in Touch'
    },
    about: {
      title: 'The Architect Behind the Code',
      desc1: 'My technical journey bridges robust Back-end development with Front-end versatility and AI innovation. Currently studying ADS at UNISO.',
      desc2: 'I have practical experience building desktop systems (Python/SQL) and modern web applications. My focus is delivering full-stack solutions with AI integration.',
      skillsTitle: 'Technical & Human Arsenal'
    },
    skills: {
      cat1: 'Back-end & Architecture',
      cat2: 'Database',
      cat4: 'Frontend & UI',
      cat5: 'Soft Skills'
    },
    projects: {
      title: 'Featured Projects',
      desktopCat: 'Desktop Engineering',
      aiCat: 'AI & Web Solutions',
      webCat: 'Web Development & Leadership',
      btnCode: 'View Code',
      btnLive: 'Live Demo',
      btnLegacy: 'Completed Project (2024)',
      p1_title: 'Belle Time - Studio System',
      p1_desc: 'Complete management system for beauty salons.',
      p1_tech: ['Python', 'MySQL', 'PySide6', 'VirtualBox'],
      p1_role: 'Full System Architecture',
      p2_title: 'Symphony IA - Music Agent',
      p2_desc: 'Intelligent agent that recommends music based on user sentiment.',
      p2_tech: ['Python', 'Groq API', 'Streamlit', 'LLM Engineering'],
      p2_role: 'AI Implementation',
      p3_title: 'Robson Pinturas - Digital Presence',
      p3_desc: 'Technical leadership for a mobile-first platform.',
      p3_tech: ['JavaScript', 'Bootstrap', 'WhatsApp API', 'OAuth 2.0'],
      p3_role: 'Tech Lead & Full Front-End',
    },
    contact: {
      title: 'Let\'s build something amazing?',
      desc: 'Fill out the form below. I will get back to you shortly.',
      btn: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Error sending message.',
      placeholderName: 'Your Name',
      placeholderEmail: 'Your Email',
      placeholderMsg: 'Your Message'
    },
    footer: {
      tagline: 'Building the future, one line of code at a time.',
      copy: '© 2026 Isabella Dos Anjos. All rights reserved.'
    }
  }
};

const App = () => {
  const [lang, setLang] = useState('pt');
  const [theme, setTheme] = useState('dark');
  const form = useRef();
  const [formStatus, setFormStatus] = useState('idle');

  const t = content[lang];

  const softSkillsList = lang === 'pt' 
    ? ['Trabalho em Equipe', 'Organização', 'Comunicação Clara', 'Resolução de Problemas', 'Adaptabilidade'] 
    : ['Teamwork', 'Organization', 'Clear Communication', 'Problem Solving', 'Adaptability'];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const toggleLang = () => setLang(prev => prev === 'pt' ? 'en' : 'pt');

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    const SERVICE_ID = 'service_parjxqq';   
    const TEMPLATE_ID = 'template_pkxt7e5'; 
    const PUBLIC_KEY = 'y8ylFUesGIArqOpkq';   

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
          setFormStatus('success');
          e.target.reset();
          setTimeout(() => setFormStatus('idle'), 5000);
      }, () => {
          setFormStatus('error');
          setTimeout(() => setFormStatus('idle'), 5000);
      });
  };

  const linkedinUrl = "https://www.linkedin.com/in/isabella-dos-anjos/";
  const emailUrl = "mailto:bellaadevs@gmail.com"; 

  const styles = `
    :root {
      --bg-body: #0a0508; 
      --bg-card: #140a0f;
      --bg-footer: #050204;
      --bg-glass: rgba(20, 10, 15, 0.7);
      --text-main: #eaddcf; 
      --text-muted: #9c8c94;
      --accent: #9b2242; 
      --accent-glow: rgba(155, 34, 66, 0.4);
      --success: #2e7d32;
      --error: #c62828;
      --border: #3d1822;
      --font-display: 'Playfair Display', serif;
      --font-body: 'Inter', sans-serif;
      --font-code: 'Fira Code', monospace;
    }

    [data-theme="light"] {
      --bg-body: #fdfbf7; 
      --bg-card: #ffffff;
      --bg-footer: #f2efe9;
      --bg-glass: rgba(255, 255, 255, 0.8);
      --text-main: #2b2124; 
      --text-muted: #665a5d;
      --accent: #800020; 
      --accent-glow: rgba(128, 0, 32, 0.15);
      --success: #1b5e20;
      --error: #b71c1c;
      --border: #e6dadd;
    }

    body {
      background-color: var(--bg-body) !important;
      color: var(--text-main) !important;
      font-family: var(--font-body);
      transition: all 0.3s ease;
    }

    .btn-goth {
      border: 1px solid var(--accent);
      color: var(--text-main);
      padding: 10px 24px;
      background: transparent;
      font-family: var(--font-code);
      font-size: 0.85rem;
      letter-spacing: 1px;
      transition: all 0.3s;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      text-decoration: none;
    }
    
    .btn-goth:hover:not(:disabled) {
      background: var(--accent);
      color: #fff !important;
      box-shadow: 0 0 20px var(--accent-glow);
    }

    .glass-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      padding: 2rem;
      border-radius: 4px; 
      transition: all 0.3s;
      height: 100%;
    }

    .glass-card:hover {
      transform: translateY(-5px);
      border-color: var(--accent);
    }

    .nav-blur {
      background: var(--bg-glass);
      backdrop-filter: blur(15px);
      border-bottom: 1px solid var(--border);
    }

    .skill-badge {
      font-family: var(--font-code);
      font-size: 0.85rem;
      padding: 6px 12px;
      background: rgba(128, 128, 128, 0.1);
      border: 1px solid var(--border);
      color: var(--text-muted);
      margin-right: 5px;
      margin-bottom: 5px;
    }

    .skill-category {
      border-left: 2px solid var(--border);
      padding-left: 1.5rem;
      margin-bottom: 2rem;
    }

    .text-accent { color: var(--accent) !important; }
    .text-muted-custom { color: var(--text-muted) !important; }
    .font-code { font-family: var(--font-code); }
    .input-underlined {
      background: transparent;
      border: none;
      border-bottom: 1px solid var(--border);
      color: var(--text-main);
      padding: 15px 0;
      width: 100%;
      outline: none;
    }
  `;

  return (
    <>
      <style>{styles}</style>

      {/* --- NAVBAR --- */}
      <nav className="nav-blur fixed-top py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <span className="font-display fw-bold" style={{fontSize: '1.4rem'}}>Isabella Dev<span className="text-accent">.</span></span>
          <div className="d-flex align-items-center gap-4">
            <button onClick={toggleTheme} className="btn p-0 border-0 text-accent">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={toggleLang} className="btn p-0 border-0 d-flex align-items-center gap-2" style={{color: 'var(--text-main)'}}>
              <Globe size={18} /> <span className="font-code small">{lang.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO --- */}
      <section className="min-vh-100 d-flex align-items-center pt-5">
        <div className="container text-center text-lg-start">
          <div className="d-inline-block px-3 py-1 mb-4 border border-secondary rounded-pill font-code text-accent small">{t.hero.role}</div>
          <h1 className="display-1 mb-4" style={{fontFamily: 'var(--font-display)'}}>{t.hero.title}</h1>
          <p className="lead text-muted-custom mb-5" style={{maxWidth: '650px'}}>{t.hero.subtitle}</p>
          <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
            <a href="#projects" className="btn-goth">{t.hero.btnProject}</a>
            <div className="d-flex align-items-center gap-2 text-muted-custom font-code small"><MapPin size={16} className="text-accent" /> {t.hero.location}</div>
          </div>
        </div>
      </section>

      {/* --- ABOUT & SKILLS --- */}
      <section id="about" className="py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6">
              <h2 className="mb-5 display-5 font-display">{t.about.title}</h2>
              <p className="text-muted-custom mb-4" style={{fontSize: '1.15rem', lineHeight: '1.9'}}>{t.about.desc1}</p>
              <p className="text-muted-custom" style={{fontSize: '1.15rem', lineHeight: '1.9'}}>{t.about.desc2}</p>
            </div>
            
            <div className="col-lg-5 offset-lg-1">
              <h3 className="h5 mb-5 font-code text-accent">&lt; {t.about.skillsTitle} /&gt;</h3>
              
              {/* Back-end */}
              <div className="skill-category">
                <h4 className="h6 mb-3 d-flex align-items-center gap-2"><Server size={18} className="text-accent"/> {t.skills.cat1}</h4>
                <div className="d-flex flex-wrap">
                  {['Python', 'Node.js', 'API REST', 'MVC', 'Security'].map(s => <span key={s} className="skill-badge">{s}</span>)}
                </div>
              </div>

              {/* Front-end (NOVO) */}
              <div className="skill-category">
                <h4 className="h6 mb-3 d-flex align-items-center gap-2"><Layout size={18} className="text-accent"/> {t.skills.cat4}</h4>
                <div className="d-flex flex-wrap">
                  {['React.js', 'JavaScript', 'HTML5/CSS3', 'Bootstrap', 'UI/UX'].map(s => <span key={s} className="skill-badge">{s}</span>)}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="skill-category">
                <h4 className="h6 mb-3 d-flex align-items-center gap-2"><Users size={18} className="text-accent"/> {t.skills.cat5}</h4>
                <div className="d-flex flex-wrap">
                  {softSkillsList.map(s => <span key={s} className="skill-badge">{s}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS --- */}
      <section id="projects" className="py-5" style={{background: 'linear-gradient(to bottom, var(--bg-body), var(--bg-card))'}}>
        <div className="container py-5">
          <h2 className="display-4 mb-5 text-center font-display">{t.projects.title}</h2>
          <div className="row g-4">
            
            {/* 1. Belle Time */}
            <div className="col-md-6 col-lg-4">
              <div className="glass-card d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div className="p-3 rounded-circle border border-danger"><ShieldCheck size={28} className="text-accent" /></div>
                </div>
                <span className="font-code text-accent small mb-2">{t.projects.desktopCat}</span>
                <h3 className="h4 mb-3">{t.projects.p1_title}</h3>
                <p className="text-muted-custom mb-4 small flex-grow-1">{t.projects.p1_desc}</p>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {t.projects.p1_tech.map(tech => <span key={tech} className="skill-badge">{tech}</span>)}
                </div>
                <a href={t.projects.p1_repo} target="_blank" rel="noreferrer" className="btn-goth w-100"><Github size={16} /> {t.projects.btnCode}</a>
              </div>
            </div>

            {/* 2. Symphony IA */}
            <div className="col-md-6 col-lg-4">
              <div className="glass-card d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div className="p-3 rounded-circle border border-danger"><Music size={28} className="text-accent" /></div>
                </div>
                <span className="font-code text-accent small mb-2">{t.projects.aiCat}</span>
                <h3 className="h4 mb-3">{t.projects.p2_title}</h3>
                <p className="text-muted-custom mb-4 small flex-grow-1">{t.projects.p2_desc}</p>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {t.projects.p2_tech.map(tech => <span key={tech} className="skill-badge">{tech}</span>)}
                </div>
                <div className="d-flex gap-2">
                  <a href={t.projects.p2_repo} target="_blank" rel="noreferrer" className="btn-goth flex-grow-1"><Github size={16} /></a>
                  <a href={t.projects.p2_live} target="_blank" rel="noreferrer" className="btn-goth flex-grow-1" style={{background: 'var(--accent)', color: '#fff'}}>{t.projects.btnLive}</a>
                </div>
              </div>
            </div>

            {/* 3. Robson Pinturas */}
            <div className="col-md-6 col-lg-4">
              <div className="glass-card d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div className="p-3 rounded-circle border border-danger"><Layers size={28} className="text-accent" /></div>
                  <span className="badge border border-secondary text-muted-custom font-code" style={{fontSize: '0.6rem'}}>2024</span>
                </div>
                <span className="font-code text-accent small mb-2">{t.projects.webCat}</span>
                <h3 className="h4 mb-3">{t.projects.p3_title}</h3>
                <p className="text-muted-custom mb-4 small flex-grow-1">{t.projects.p3_desc}</p>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {t.projects.p3_tech.map(tech => <span key={tech} className="skill-badge">{tech}</span>)}
                </div>
                <div className="text-center p-2 font-code small border border-dashed text-muted-custom">
                   {t.projects.btnLegacy}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-5">
        <div className="container py-5 text-center">
          <h2 className="mb-5 font-display display-5">{t.contact.title}</h2>
          <div className="row justify-content-center text-start">
            <div className="col-lg-6">
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" className="input-underlined mb-4" placeholder={t.contact.placeholderName} required />
                <input type="email" name="email" className="input-underlined mb-4" placeholder={t.contact.placeholderEmail} required />
                <textarea name="message" className="input-underlined mb-4" rows="3" placeholder={t.contact.placeholderMsg} required></textarea>
                <button type="submit" className="btn-goth w-100 py-3" disabled={formStatus !== 'idle'}>
                  {formStatus === 'sending' ? t.contact.sending : <>{t.contact.btn} <Send size={16} /></>}
                </button>
                {formStatus === 'success' && <div className="text-success mt-3 font-code text-center">{t.contact.success}</div>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-5 border-top border-secondary mt-5">
        <div className="container text-center">
          <div className="d-flex gap-4 justify-content-center mb-4">
            <a href={linkedinUrl} target="_blank" rel="noreferrer" className="text-muted-custom"><Linkedin /></a>
            <a href="https://github.com/isabelladosanjos" target="_blank" rel="noreferrer" className="text-muted-custom"><Github /></a>
            <a href={emailUrl} className="text-muted-custom"><Mail /></a>
          </div>
          <p className="small text-muted-custom font-code">{t.footer.copy}</p>
        </div>
      </footer>
    </>
  );
};

export default App;