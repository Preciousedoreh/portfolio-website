import React, { useState, useEffect } from 'react';

const Hero = (): JSX.Element => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Full Stack Engineer',
    'Senior Backend Engineer',
    'Web Developer',
    'Problem Solver',
    'Code Architect'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentTitle = titles[currentIndex];
      
      if (isDeleting) {
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
        
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      } else {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
        
        if (displayedText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [displayedText, currentIndex, isDeleting, titles]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const hero = e.currentTarget;
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    hero.style.setProperty('--mouse-x', `${x}px`);
    hero.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="home" className="hero" onMouseMove={handleMouseMove}>
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="name">Your Name</span>
          </h1>
          
          <div className="typewriter-container">
            <span className="typewriter-prefix">I'm a </span>
            <span className="typewriter-text">{displayedText}</span>
            <span className="cursor">|</span>
          </div>
          
          <p className="hero-description">
  I design and build reliable, high-performing applications that solve real problems. 
  Every line of code I write is focused on creating impact and lasting value.
        </p>

          
          <div className="hero-buttons">
            <button 
              className="cta-primary" 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>View My Work</span>
              <div className="button-glow"></div>
            </button>
            
            <button 
              className="cta-secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Let's Connect</span>
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="code-snippet">
            <div className="code-line">
              <span className="code-keyword">const</span> 
              <span className="code-variable"> developer</span> 
              <span className="code-operator"> = </span>
              <span className="code-string">"awesome"</span>
            </div>
            <div className="code-line">
              <span className="code-keyword">function</span> 
              <span className="code-function"> createMagic</span>
              <span className="code-bracket">()</span> 
              <span className="code-bracket">{'{'}</span>
            </div>
            <div className="code-line code-indent">
              <span className="code-keyword">return</span> 
              <span className="code-string"> innovation</span>
            </div>
            <div className="code-line">
              <span className="code-bracket">{'}'}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;