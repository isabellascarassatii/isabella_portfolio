import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Database, Server, Layout, Cpu, Code2, Terminal, 
  Github, Linkedin, Mail, Globe, Moon, Sun, 
  MapPin, ExternalLink, Music, Sparkles, 
  ArrowRight, Box, ShieldCheck, Workflow, CheckCircle, 
  Send, AlertCircle, Users, Brain, Clock
} from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

// --- CONTEÚDO ---
const content = {
  pt: {
    hero: {
      role: 'Back-end Developer & AI Enthusiast',
      title: 'Código com Alma & Lógica',
      subtitle: 'Desenvolvedora apaixonada por arquitetura de software, automação e inteligência artificial. Transformo regras de negócio complexas em sistemas elegantes e escaláveis.',
      location: 'Sorocaba, SP',
      btnProject: 'Ver Portfolio',
      btnContact: 'Entrar em Contato'
    },
    about: {
      title: 'A Arquiteta por trás do Código',
      desc1: 'Minha jornada técnica combina a precisão do desenvolvimento Back-end com a criatividade da Inteligência Artificial. Atualmente cursando Análise e Desenvolvimento de Sistemas na UNISO.',
      desc2: 'Tenho experiência prática na criação de sistemas desktop robustos (Python/SQL) e agentes de IA modernos (Groq API). Meu foco é entregar performance sem sacrificar a estética do código.',
      skillsTitle: 'Arsenal Técnico & Humano'
    },
    skills: {
      cat1: 'Back-end & Arquitetura',
      cat2: 'Banco de Dados',
      cat3: 'DevOps & Ferramentas',
      cat4: 'Frontend & UI',
      cat5: 'Soft Skills (Interpessoais)'
    },
    projects: {
      title: 'Projetos em Destaque',
      desktopCat: 'Desktop Engineering',
      aiCat: 'AI & Web Solutions',
      btnCode: 'Ver Código',
      btnLive: 'Testar Online',
      
      // Projeto 1: Belle Time
      p1_title: 'Belle Time - Studio System',
      p1_desc: 'Sistema de gestão completo para salões de beleza (Studio Ella’s). Gerencia agendamentos complexos, base de clientes e fluxo financeiro com integridade de dados rigorosa.',
      p1_tech: ['Python', 'MySQL', 'PySide6', 'VirtualBox'],
      p1_role: 'Full System Architecture',
      p1_repo: 'https://github.com/isabelladosanjos/BelleTime_Agenda',
      
      // Projeto 2: Symphony IA
      p2_title: 'Symphony IA - Music Agent',
      p2_desc: 'Agente inteligente que analisa sentimentos do usuário via processamento de linguagem natural e recomenda playlists musicais personalizadas utilizando a API do Groq.',
      p2_tech: ['Python', 'Groq API', 'Streamlit', 'LLM Engineering'],
      p2_role: 'AI Implementation',
      p2_repo: 'https://github.com/isabelladosanjos/SymphonyIA_ProjetoADS',
      p2_live: 'https://symphonyiaprojetoads-5dfiru6tjoubjst8kvsabn.streamlit.app/'
    },
    contact: {
      title: 'Vamos criar algo incrível?',
      desc: 'Preencha o formulário abaixo. A mensagem chegará diretamente no meu e-mail profissional.',
      btn: 'Enviar Mensagem',
      sending: 'Enviando...',
      success: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
      error: 'Houve um erro ao enviar. Tente novamente ou me chame no LinkedIn.',
      placeholderName: 'Seu Nome',
      placeholderEmail: 'Seu E-mail',
      placeholderMsg: 'Sua Mensagem'
    },
    footer: {
      tagline: 'Construindo o futuro, uma linha de código por vez.',
      links: 'Navegação',
      social: 'Conexão',
      copy: '© 2026 Isabella Dos Anjos. Todos os direitos reservados.'
    }
  },
  en: {
    hero: {
      role: 'Back-end Developer & AI Enthusiast',
      title: 'Code with Soul & Logic',
      subtitle: 'Developer passionate about software architecture, automation, and artificial intelligence. I turn complex business rules into elegant, scalable systems.',
      location: 'Sorocaba, Brazil',
      btnProject: 'View Portfolio',
      btnContact: 'Get in Touch'
    },
    about: {
      title: 'The Architect Behind the Code',
      desc1: 'My technical journey combines Back-end precision with AI creativity. Currently studying Analysis and Systems Development at UNISO.',
      desc2: 'I have practical experience building robust desktop systems (Python/SQL) and modern AI agents (Groq API). My focus is delivering performance without sacrificing code aesthetics.',
      skillsTitle: 'Technical & Human Arsenal'
    },
    skills: {
      cat1: 'Back-end & Architecture',
      cat2: 'Database',
      cat3: 'DevOps & Tools',
      cat4: 'Frontend & UI',
      cat5: 'Soft Skills (Interpersonal)'
    },
    projects: {
      title: 'Featured Projects',
      desktopCat: 'Desktop Engineering',
      aiCat: 'AI & Web Solutions',
      btnCode: 'View Code',
      btnLive: 'Live Demo',
      p1_title: 'Belle Time - Studio System',
      p1_desc: 'Complete management system for beauty salons (Studio Ella’s). Handles complex scheduling, client database, and financial flow with strict data integrity.',
      p1_tech: ['Python', 'MySQL', 'PySide6', 'VirtualBox'],
      p1_role: 'Full System Architecture',
      p1_repo: 'https://github.com/isabelladosanjos/BelleTime_Agenda',
      p2_title: 'Symphony IA - Music Agent',
      p2_desc: 'Intelligent agent that analyzes user sentiment via natural language processing and recommends personalized music playlists using Groq API.',
      p2_tech: ['Python', 'Groq API', 'Streamlit', 'LLM Engineering'],
      p2_role: 'AI Implementation',
      p2_repo: 'https://github.com/isabelladosanjos/SymphonyIA_ProjetoADS',
      p2_live: 'https://symphonyiaprojetoads-5dfiru6tjoubjst8kvsabn.streamlit.app/'
    },
    contact: {
      title: 'Let\'s build something amazing?',
      desc: 'Fill out the form below. The message will arrive directly in my professional email.',
      btn: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully! I will contact you shortly.',
      error: 'There was an error sending. Please try again or contact me on LinkedIn.',
      placeholderName: 'Your Name',
      placeholderEmail: 'Your Email',
      placeholderMsg: 'Your Message'
    },
    footer: {
      tagline: 'Building the future, one line of code at a time.',
      links: 'Navigation',
      social: 'Connect',
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

  // Variável de Soft Skills
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

    // --- COLOQUE SUAS CHAVES DO EMAILJS AQUI ---
    const SERVICE_ID = 'service_parjxqq';   
    const TEMPLATE_ID = 'template_pkxt7e5'; 
    const PUBLIC_KEY = 'y8ylFUesGIArqOpkq';   

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setFormStatus('success');
          e.target.reset();
          setTimeout(() => setFormStatus('idle'), 5000);
      }, (error) => {
          setFormStatus('error');
          setTimeout(() => setFormStatus('idle'), 5000);
      });
  };

  const linkedinUrl = "https://www.linkedin.com/in/isabella-dos-anjos/";
  const emailUrl = "mailto:bellaadevs@gmail.com"; 

  const styles = `
    :root {
      /* DARK MODE */
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
      /* LIGHT MODE */
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
      overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6 {
      color: var(--text-main) !important;
      font-family: var(--font-display);
      font-weight: 700;
    }

    a { color: var(--text-main); transition: 0.2s; }
    a:hover { color: var(--accent); }

    .text-muted-custom { color: var(--text-muted) !important; }
    .font-code { font-family: var(--font-code); }
    .text-accent { color: var(--accent) !important; }
    
    .btn-goth {
      border: 1px solid var(--accent);
      color: var(--text-main);
      padding: 10px 24px;
      background: transparent;
      font-family: var(--font-code);
      font-size: 0.85rem;
      letter-spacing: 1px;
      transition: all 0.3s;
      position: relative;
      overflow: hidden;
      z-index: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      text-decoration: none;
      cursor: pointer;
    }
    
    .btn-goth:disabled { opacity: 0.7; cursor: not-allowed; }
    .btn-goth::before {
      content: '';
      position: absolute;
      top: 0; left: 0; width: 0%; height: 100%;
      background: var(--accent);
      z-index: -1;
      transition: width 0.3s;
    }
    .btn-goth:hover:not(:disabled) {
      color: #fff !important;
      box-shadow: 0 0 20px var(--accent-glow);
    }
    .btn-goth:hover:not(:disabled)::before { width: 100%; }

    .btn-goth-fill {
      background: var(--accent);
      color: #fff;
      border: 1px solid var(--accent);
    }
    .btn-goth-fill:hover {
      background: transparent;
      color: var(--text-main) !important;
    }

    .glass-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      padding: 2rem;
      border-radius: 4px; 
      transition: transform 0.3s, border-color 0.3s;
      height: 100%;
    }

    .glass-card:hover {
      transform: translateY(-5px);
      border-color: var(--accent);
    }

    .input-underlined {
      background: transparent;
      border: none;
      border-bottom: 1px solid var(--border);
      color: var(--text-main);
      padding: 15px 0;
      width: 100%;
      outline: none;
      transition: border-color 0.3s;
      border-radius: 0;
    }
    .input-underlined:focus {
      border-bottom-color: var(--accent);
      box-shadow: none;
    }

    .skill-category {
      border-left: 2px solid var(--border);
      padding-left: 1.5rem;
      transition: border-color 0.3s;
    }
    .skill-category:hover {
      border-left-color: var(--accent);
    }

    /* ESTILO DOS BADGES (SKILLS) */
    .skill-badge {
      font-family: var(--font-code);
      font-size: 0.85rem;
      padding: 6px 12px;
      background: rgba(128, 128, 128, 0.1);
      border: 1px solid var(--border);
      color: var(--text-muted);
      display: inline-block;
      transition: all 0.3s ease;
      cursor: default;
    }
    
    /* EFEITO HOVER (Ao passar o mouse) */
    .skill-badge:hover {
      border-color: var(--accent);
      color: var(--text-main);
      box-shadow: 0 0 10px var(--accent-glow);
      transform: translateY(-2px);
    }

    .nav-blur {
      background: var(--bg-glass);
      backdrop-filter: blur(15px);
      border-bottom: 1px solid var(--border);
    }
    
    .success-message {
      background: rgba(46, 125, 50, 0.1);
      border: 1px solid var(--success);
      color: var(--success);
      padding: 1rem;
      margin-top: 1rem;
      font-family: var(--font-code);
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      animation: fadeIn 0.5s ease;
    }
    .error-message {
      background: rgba(198, 40, 40, 0.1);
      border: 1px solid var(--error);
      color: var(--error);
      padding: 1rem;
      margin-top: 1rem;
      font-family: var(--font-code);
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      animation: fadeIn 0.5s ease;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    footer {
      background-color: var(--bg-footer);
      border-top: 1px solid var(--border);
    }
  `;

  return (
    <>
      <style>{styles}</style>

      {/* --- NAVBAR --- */}
      <nav className="nav-blur fixed-top py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <span className="font-display fw-bold" style={{fontSize: '1.4rem', letterSpacing: '0.5px'}}>
              Isabella Anjos<span className="text-accent">.</span>
            </span>
          </div>
          
          <div className="d-flex align-items-center gap-4">
            <button onClick={toggleTheme} className="btn p-0 border-0 text-accent">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={toggleLang} className="btn p-0 border-0 d-flex align-items-center gap-2" style={{color: 'var(--text-main)'}}>
              <Globe size={18} />
              <span className="font-code small">{lang.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="min-vh-100 d-flex align-items-center pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 animate-up">
              <div className="d-inline-block px-3 py-1 mb-4 border border-secondary rounded-pill">
                <small className="font-code text-accent">{t.hero.role}</small>
              </div>
              <h1 className="display-1 mb-4" style={{fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: '1.1'}}>
                {t.hero.title}
              </h1>
              <p className="lead text-muted-custom mb-5" style={{maxWidth: '650px'}}>
                {t.hero.subtitle}
              </p>
              
              <div className="d-flex flex-wrap gap-3 align-items-center mb-5">
                <a href="#projects" className="btn-goth">{t.hero.btnProject}</a>
                <div className="d-flex align-items-center gap-2 ms-md-4 text-muted-custom font-code small">
                  <MapPin size={16} className="text-accent" /> {t.hero.location}
                </div>
              </div>

              <div className="d-flex gap-4">
                <a href={linkedinUrl} target="_blank" rel="noreferrer" className="text-muted-custom hover-accent"><Linkedin size={24}/></a>
                <a href="https://github.com/isabelladosanjos" target="_blank" rel="noreferrer" className="text-muted-custom hover-accent"><Github size={24}/></a>
                <a href={emailUrl} className="text-muted-custom hover-accent"><Mail size={24}/></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT & SKILLS (Formatado) --- */}
      <section id="about" className="py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-5 display-5">{t.about.title}</h2>
              
              {/* Texto com Espaçamento Estruturado (Editorial Look) */}
              <div style={{ paddingRight: '1rem' }}>
                <p className="text-muted-custom mb-4" style={{
                  fontSize: '1.15rem', 
                  lineHeight: '1.9', 
                  marginBottom: '2rem'
                }}>
                  {t.about.desc1}
                </p>
                <p className="text-muted-custom" style={{
                  fontSize: '1.15rem', 
                  lineHeight: '1.9'
                }}>
                  {t.about.desc2}
                </p>
              </div>
            </div>
            
            {/* Skills */}
            <div className="col-lg-5 offset-lg-1">
              <h3 className="h5 mb-5 font-code text-accent">&lt; {t.about.skillsTitle} /&gt;</h3>
              
              <div className="row g-4">
                <div className="col-12">
                  <div className="skill-category">
                    <h4 className="h6 mb-3 d-flex align-items-center gap-2">
                      <Server size={18} className="text-accent"/> {t.skills.cat1}
                    </h4>
                    <div className="d-flex flex-wrap gap-2">
                      {['Python', 'Node.js', 'API REST', 'MVC Pattern', 'Security'].map(s => (
                        <span key={s} className="skill-badge">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="skill-category">
                    <h4 className="h6 mb-3 d-flex align-items-center gap-2">
                      <Database size={18} className="text-accent"/> {t.skills.cat2}
                    </h4>
                    <div className="d-flex flex-wrap gap-2">
                      {['MySQL', 'PostgreSQL', 'Data Modeling', 'SQL Optimization'].map(s => (
                        <span key={s} className="skill-badge">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="skill-category">
                    <h4 className="h6 mb-3 d-flex align-items-center gap-2">
                      <Users size={18} className="text-accent"/> {t.skills.cat5}
                    </h4>
                    <div className="d-flex flex-wrap gap-2">
                      {softSkillsList.map(s => (
                        <span key={s} className="skill-badge">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS --- */}
      <section id="projects" className="py-5" style={{background: 'linear-gradient(to bottom, var(--bg-body), var(--bg-card))'}}>
        <div className="container py-5">
          <h2 className="display-4 mb-5 text-center">{t.projects.title}</h2>

          <div className="row g-4">
            {/* Belle Time */}
            <div className="col-md-6">
              <div className="glass-card d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div className="p-3 rounded-circle" style={{background: 'var(--bg-body)', border: '1px solid var(--border)'}}>
                    <ShieldCheck size={28} className="text-accent" />
                  </div>
                  <ExternalLink size={20} className="text-muted-custom" />
                </div>
                <span className="font-code text-accent small mb-2 d-block">{t.projects.desktopCat}</span>
                <h3 className="h4 mb-3">{t.projects.p1_title}</h3>
                <p className="text-muted-custom mb-4 small flex-grow-1">{t.projects.p1_desc}</p>
                <div className="mb-4 pt-3 border-top" style={{borderColor: 'var(--border)'}}>
                  <p className="font-code small text-uppercase mb-1 text-muted-custom" style={{fontSize: '0.7rem'}}>Role:</p>
                  <p className="mb-0 fw-bold small">{t.projects.p1_role}</p>
                </div>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {t.projects.p1_tech.map(tech => (
                    <span key={tech} className="small font-code px-2 py-1" style={{background: 'rgba(155, 34, 66, 0.1)', color: 'var(--accent)'}}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                   <a href={t.projects.p1_repo} target="_blank" rel="noreferrer" className="btn-goth w-100">
                     <Github size={16} /> {t.projects.btnCode}
                   </a>
                </div>
              </div>
            </div>

            {/* Symphony IA */}
            <div className="col-md-6">
              <div className="glass-card d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div className="p-3 rounded-circle" style={{background: 'var(--bg-body)', border: '1px solid var(--border)'}}>
                    <Music size={28} className="text-accent" />
                  </div>
                  <ExternalLink size={20} className="text-muted-custom" />
                </div>
                <span className="font-code text-accent small mb-2 d-block">{t.projects.aiCat}</span>
                <h3 className="h4 mb-3">{t.projects.p2_title}</h3>
                <p className="text-muted-custom mb-4 small flex-grow-1">{t.projects.p2_desc}</p>
                <div className="mb-4 pt-3 border-top" style={{borderColor: 'var(--border)'}}>
                   <p className="font-code small text-uppercase mb-1 text-muted-custom" style={{fontSize: '0.7rem'}}>Role:</p>
                   <p className="mb-0 fw-bold small">{t.projects.p2_role}</p>
                </div>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {t.projects.p2_tech.map(tech => (
                    <span key={tech} className="small font-code px-2 py-1" style={{background: 'rgba(155, 34, 66, 0.1)', color: 'var(--accent)'}}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto d-flex gap-2">
                   <a href={t.projects.p2_repo} target="_blank" rel="noreferrer" className="btn-goth flex-grow-1">
                     <Github size={16} /> {t.projects.btnCode}
                   </a>
                   <a href={t.projects.p2_live} target="_blank" rel="noreferrer" className="btn-goth btn-goth-fill flex-grow-1">
                     <ExternalLink size={16} /> {t.projects.btnLive}
                   </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 className="mb-3 font-display">{t.contact.title}</h2>
              <p className="text-muted-custom mb-5">{t.contact.desc}</p>
              
              <form ref={form} className="text-start" onSubmit={sendEmail}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <input type="text" name="name" className="input-underlined" placeholder={t.contact.placeholderName} required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" name="email" className="input-underlined" placeholder={t.contact.placeholderEmail} required />
                  </div>
                  <div className="col-12">
                    <textarea name="message" className="input-underlined" rows="3" placeholder={t.contact.placeholderMsg} required></textarea>
                  </div>
                  <div className="col-12 text-center mt-4">
                    <button type="submit" className="btn-goth w-100 py-3" disabled={formStatus === 'sending' || formStatus === 'success'}>
                      {formStatus === 'sending' ? (<span>{t.contact.sending}</span>) : (<>{t.contact.btn} <Send size={16} /></>)}
                    </button>
                    {formStatus === 'success' && (<div className="success-message animate-up"><CheckCircle size={18} /> {t.contact.success}</div>)}
                    {formStatus === 'error' && (<div className="error-message animate-up"><AlertCircle size={18} /> {t.contact.error}</div>)}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER (Sem borda) --- */}
      <footer className="py-5 mt-5">
        <div className="container">
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <Sparkles size={18} className="text-accent" />
                <span className="font-display fw-bold" style={{fontSize: '1.2rem'}}>ISABELLA.DEV</span>
              </div>
              <p className="text-muted-custom small mb-0">{t.footer.tagline}</p>
            </div>
            <div className="col-md-2 offset-md-2">
              <h5 className="h6 mb-3 font-code text-accent">{t.footer.links}</h5>
              <ul className="list-unstyled small">
                <li className="mb-2"><a href="#about" className="text-decoration-none text-muted-custom hover-white">Sobre</a></li>
                <li className="mb-2"><a href="#projects" className="text-decoration-none text-muted-custom hover-white">Projetos</a></li>
                <li className="mb-2"><a href="#contact" className="text-decoration-none text-muted-custom hover-white">Contato</a></li>
              </ul>
            </div>
            <div className="col-md-3 offset-md-1">
              <h5 className="h6 mb-3 font-code text-accent">{t.footer.social}</h5>
              <div className="d-flex gap-3">
                <a href={linkedinUrl} target="_blank" rel="noreferrer" className="text-muted-custom hover-accent"><Linkedin size={20}/></a>
                <a href="https://github.com/isabelladosanjos" target="_blank" rel="noreferrer" className="text-muted-custom hover-accent"><Github size={20}/></a>
                <a href={emailUrl} className="text-muted-custom hover-accent"><Mail size={20}/></a>
              </div>
            </div>
          </div>
          {/* DIV DE COPYRIGHT SEM BORDA */}
          <div className="pt-4 text-center">
            <p className="small text-muted-custom mb-0 font-code opacity-50">{t.footer.copy}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;