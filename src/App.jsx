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

const content = {
  pt: {
    hero: {
      role: 'Developer & AI Enthusiast',
      title: 'Código com Alma & Lógica',
      subtitle: 'Desenvolvedora apaixonada por arquitetura de software, automação e inteligência artificial. Transformo regras de negócio complexas em sistemas elegantes e escaláveis.',
      location: 'Sorocaba, SP',
      btnProject: 'Ver Portfolio',
      btnContact: 'Entrar em Contato'
    },
    about: {
      title: 'A Arquiteta por trás do Código',
      desc1: 'Minha jornada técnica une a robustez do desenvolvimento Back-end com a versatilidade do Front-end e a inovação da IA. Atualmente cursando Análise e Desenvolvimento de Sistemas na UNISO.',
      desc2: 'Tenho experiência prática na criação de sistemas desktop (Python/SQL) e aplicações web modernas. Meu foco é construir soluções completas, integrando APIs de IA com interfaces responsivas.',
      skillsTitle: 'Arsenal Técnico & Humano'
    },
    skills: {
      cat1: 'Back-end & Arquitetura',
      cat2: 'Banco de Dados',
      cat4: 'Frontend & UI',
      cat5: 'Soft Skills'
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
      p1_desc: 'Sistema de gestão completo para salões de beleza. Gerencia agendamentos e base de clientes com integridade de dados rigorosa.',
      p1_tech: ['Python', 'MySQL', 'PySide6', 'VirtualBox'],
      p1_repo: 'https://github.com/isabelladosanjos/BelleTime_Agenda',
      p2_title: 'Symphony IA - Music Agent',
      p2_desc: 'Agente inteligente que recomenda playlists musicais personalizadas utilizando a API do Groq.',
      p2_tech: ['Python', 'Groq API', 'Streamlit', 'LLM Engineering'],
      p2_repo: 'https://github.com/isabelladosanjos/SymphonyIA_ProjetoADS',
      p2_live: 'https://symphonyiaprojetoads-5dfiru6tjoubjst8kvsabn.streamlit.app/',
      p3_title: 'Robson Pinturas - Digital Presence',
      p3_desc: 'Liderança técnica no desenvolvimento de uma plataforma mobile-first com integração de WhatsApp e Google OAuth.',
      p3_tech: ['JavaScript', 'Bootstrap', 'WhatsApp API', 'OAuth 2.0'],
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
      desc1: 'My technical journey bridges robust Back-end development with Front-end versatility and AI innovation.',
      desc2: 'I have practical experience building desktop systems and modern web applications with AI integration.',
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
      p2_title: 'Symphony IA - Music Agent',
      p3_title: 'Robson Pinturas - Digital Presence',
    },
    contact: {
      title: 'Let\'s build something amazing?',
      btn: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      placeholderName: 'Your Name',
      placeholderEmail: 'Your Email',
      placeholderMsg: 'Your Message'
    },
    footer: {
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
    emailjs.sendForm('service_parjxqq', 'template_pkxt7e5', form.current, 'y8ylFUesGIArqOpkq')
      .then(() => {
          setFormStatus('success');
          e.target.reset();
          setTimeout(() => setFormStatus('idle'), 5000);
      }, () => {
          setFormStatus('error');
          setTimeout(() => setFormStatus('idle'), 5000);
      });
  };

  const styles = `
    :root {
      --bg-body: #0a0508; --bg-card: #140a0f; --text-main: #eaddcf; 
      --text-muted: #9c8c94; --accent: #9b2242; --border: #3d1822;
      --font-display: 'Playfair Display', serif; --font-body: 'Inter', sans-serif;
      --font-code: 'Fira Code', monospace;
    }
    [data-theme="light"] {
      --bg-body: #fdfbf7; --bg-card: #ffffff; --text-main: #2b2124; 
      --text-muted: #665a5d; --accent: #800020; --border: #e6dadd;
    }
    body { background-color: var(--bg-body) !important; color: var(--text-main) !important; font-family: var(--font-body); transition: all 0.3s; }
    .btn-goth { border: 1px solid var(--accent); color: var(--text-main); padding: 10px 24px; background: transparent; font-family: var(--font-code); text-decoration: none; cursor: pointer; transition: 0.3s; }
    .btn-goth:hover { background: var(--accent); color: #fff !important; }
    .glass-card { background: var(--bg-card); border: 1px solid var(--border); padding: 2rem; border-radius: 4px; height: 100%; transition: 0.3s; }
    .glass-card:hover { transform: translateY(-5px); border-color: var(--accent); }
    .nav-blur { background: rgba(20, 10, 15, 0.7); backdrop-filter: blur(15px); border-bottom: 1px solid var(--border); }
    .skill-badge { font-family: var(--font-code); font-size: 0.85rem; padding: 6px 12px; background: rgba(128, 128, 128, 0.1); border: 1px solid var(--border); color: var(--text-muted); margin: 0 5px 5px 0; display: inline-block; }
    .skill-category { border-left: 2px solid var(--border); padding-left: 1.5rem; margin-bottom: 2rem; }
    .text-accent { color: var(--accent) !important; }
    .text-muted-custom { color: var(--text-muted) !important; }
    .font-code { font-family: var(--font-code); }
    .input-underlined { background: transparent; border: none; border-bottom: 1px solid var(--border); color: var(--text-main); padding: 15px 0; width: 100%; outline: none; }
  `;

  return (
    <>
      <style>{styles}</style>
      <nav className="nav-blur fixed-top py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <span className="font-display fw-bold" style={{fontSize: '1.4rem'}}>Isabella Dev<span className="text-accent">.</span></span>
          <div className="d-flex align-items-center gap-4">
            <button onClick={toggleTheme} className="btn p-0 border-0 text-accent">{theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}</button>
            <button onClick={toggleLang} className="btn p-0 border-0 d-flex align-items-center gap-2" style={{color: 'var(--text-main)'}}><Globe size={18} /> <span className="font-code small">{lang.toUpperCase()}</span></button>
          </div>
        </div>
      </nav>

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

      {/* SEÇÃO REINSERIDA AQUI */}
      <section id="about" className="py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6">
              <h2 className="mb-5 display-5 font-display">{t.about.title}</h2>
              <p className="text-muted-custom mb-4" style={{fontSize: '1.1rem', lineHeight: '1.8'}}>{t.about.desc1}</p>
              <p className="text-muted-custom" style={{fontSize: '1.1rem', lineHeight: '1.8'}}>{t.about.desc2}</p>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <h3 className="h5 mb-5 font-code text-accent">&lt; {t.about.skillsTitle} /&gt;</h3>
              <div className="skill-category">
                <h4 className="h6 mb-3 d-flex align-items-center gap-2"><Server size={18} className="text-accent"/> {t.skills.cat1}</h4>
                {['Python', 'Node.js', 'API REST', 'MVC', 'SQL'].map(s => <span key={s} className="skill-badge">{s}</span>)}
              </div>
              <div className="skill-category">
                <h4 className="h6 mb-3 d-flex align-items-center gap-2"><Layout size={18} className="text-accent"/> {t.skills.cat4}</h4>
                {['React.js', 'JavaScript', 'HTML5/CSS3', 'Bootstrap'].map(s => <span key={s} className="skill-badge">{s}</span>)}
              </div>
              <div className="skill-category">
                <h4 className="h6 mb-3 d-flex align-items-center gap-2"><Users size={18} className="text-accent"/> {t.skills.cat5}</h4>
                {softSkillsList.map(s => <span key={s} className="skill-badge">{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-5" style={{background: 'linear-gradient(to bottom, var(--bg-body), var(--bg-card))'}}>
        <div className="container py-5">
          <h2 className="display-4 mb-5 text-center font-display">{t.projects.title}</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="glass-card d-flex flex-column">
                <ShieldCheck size={28} className="text-accent mb-4" />
                <h3 className="h4 mb-3">{t.projects.p1_title}</h3>
                <p className="text-muted-custom mb-4 small flex-grow-1">{t.projects.p1_desc}</p>
                <div className="mb-4">{t.projects.p1_tech.map(tech => <span key={tech} className="skill-badge">{tech}</span>)}</div>
                <a href={t.projects.p1_repo} target="_blank" rel="noreferrer" className="btn-goth w-100 text-center"><Github size={16} /> Ver Código</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="glass-card d-flex flex-column">
                <Music size={28} className="text-accent mb-4" />
                <h3 className="h4 mb-3">{t.projects.p2_title}</h3>
                <p className="text-muted-custom mb-4 small flex-grow-1">{t.projects.p2_desc}</p>
                <div className="mb-4">{t.projects.p2_tech.map(tech => <span key={tech} className="skill-badge">{tech}</span>)}</div>
                <div className="d-flex gap-2">
                  <a href={t.projects.p2_repo} target="_blank" rel="noreferrer" className="btn-goth flex-grow-1 text-center"><Github size={16} /></a>
                  <a href={t.projects.p2_live} target="_blank" rel="noreferrer" className="btn-goth flex-grow-1 text-center" style={{background: 'var(--accent)', color: '#fff'}}>Live</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="glass-card d-flex flex-column">
                <Layers size={28} className="text-accent mb-4" />
                <h3 className="h4 mb-3">{t.projects.p3_title}</h3>
                <p className="text-muted-custom mb-4 small flex-grow-1">{t.projects.p3_desc}</p>
                <div className="mb-4">{t.projects.p3_tech.map(tech => <span key={tech} className="skill-badge">{tech}</span>)}</div>
                <div className="text-center p-2 font-code small border border-dashed text-muted-custom">{t.projects.btnLegacy}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                {formStatus === 'success' && <div className="text-success mt-3 font-code text-center">Enviado com sucesso!</div>}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-5 border-top border-secondary mt-5">
        <div className="container text-center text-muted-custom font-code small">
          <div className="d-flex gap-4 justify-content-center mb-4">
            <a href="https://www.linkedin.com/in/isabella-dos-anjos/" target="_blank" rel="noreferrer" className="text-muted-custom"><Linkedin /></a>
            <a href="https://github.com/isabelladosanjos" target="_blank" rel="noreferrer" className="text-muted-custom"><Github /></a>
            <a href="mailto:bellaadevs@gmail.com" className="text-muted-custom"><Mail /></a>
          </div>
          <p>{t.footer.copy}</p>
        </div>
      </footer>
    </>
  );
};

export default App;