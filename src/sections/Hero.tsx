import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Code2, Cloud, Users, Zap } from 'lucide-react';

const techTags = ['Java', 'React', 'Python', 'Kubernetes', 'Docker', 'DevOps', 'AWS', 'Azure'];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      if (leftRef.current) {
        gsap.fromTo(
          Array.from(leftRef.current.children || []),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
        );
      }

      if (rightRef.current) {
        gsap.fromTo(
          rightRef.current,
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.4 }
        );
      }

      // Floating animation for right elements
      gsap.to(rightRef.current, {
        y: -20,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1428 100%)',
      }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, #1a6ef5, transparent)',
            animation: 'float 6s ease-in-out infinite',
          }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, #00c6a7, transparent)',
            animation: 'float 8s ease-in-out infinite 1s',
          }} />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, #2d9cdb, transparent)',
            animation: 'float 7s ease-in-out infinite 2s',
          }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(26,110,245,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />

      <div className="container-modern relative z-10 pt-20 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div ref={leftRef} className="flex flex-col gap-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 self-start px-4 py-2.5 rounded-full border"
              style={{
                background: 'rgba(26,110,245,0.1)',
                borderColor: 'rgba(26,110,245,0.3)',
                backdropFilter: 'blur(10px)',
              }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#1a6ef5' }} />
              <span className="text-sm font-semibold" style={{ color: '#1a6ef5' }}>
                Engineering + Staffing
              </span>
            </div>

            {/* Main headline */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              fontFamily: "'Sora', sans-serif",
            }}>
              Build Better Software.
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #1a6ef5 0%, #00c6a7 50%, #2d9cdb 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Hire Elite Talent.
              </span>
            </h1>

            {/* Description */}
            <p style={{
              fontSize: '1.125rem',
              fontWeight: 300,
              lineHeight: 1.8,
              color: '#a0aec0',
              maxWidth: '520px',
              fontFamily: "'DM Sans', sans-serif",
            }}>
              15+ years of software engineering expertise. Enterprise-grade development + strategic staffing for Java, DevOps, Cloud, and React.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #1a6ef5 0%, #2d9cdb 100%)',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  boxShadow: '0 10px 30px rgba(26, 110, 245, 0.3)',
                }}
                onMouseEnter={e => {
                  gsap.to(e.currentTarget, { y: -2, boxShadow: '0 15px 40px rgba(26, 110, 245, 0.4)', duration: 0.3 });
                }}
                onMouseLeave={e => {
                  gsap.to(e.currentTarget, { y: 0, boxShadow: '0 10px 30px rgba(26, 110, 245, 0.3)', duration: 0.3 });
                }}
              >
                Start Building <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                onClick={e => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold"
                style={{
                  background: 'transparent',
                  color: '#a0aec0',
                  border: '1.5px solid rgba(26,110,245,0.3)',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,110,245,0.6)';
                  (e.currentTarget as HTMLElement).style.color = '#1a6ef5';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,110,245,0.3)';
                  (e.currentTarget as HTMLElement).style.color = '#a0aec0';
                }}
              >
                Explore Services
              </a>
            </div>

            {/* Tech stack */}
            <div className="pt-8">
              <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.75rem' }}>Our Expertise</p>
              <div className="flex flex-wrap gap-2">
                {techTags.map(tag => (
                  <span key={tag}
                    style={{
                      padding: '0.4rem 0.875rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      color: '#a0aec0',
                      border: '1px solid rgba(26,110,245,0.2)',
                      background: 'rgba(26,110,245,0.05)',
                      backdropFilter: 'blur(10px)',
                    }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT - Interactive Stats */}
          <div ref={rightRef} className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '15+', label: 'Years Experience', icon: Code2, color: '#1a6ef5' },
                { number: '100%', label: 'Client Focused', icon: Zap, color: '#00c6a7' },
                { number: 'Full', label: 'End-to-End', icon: Cloud, color: '#2d9cdb' },
                { number: '24/7', label: 'Support', icon: Users, color: '#1a6ef5' },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i}
                    className="p-6 rounded-2xl border group cursor-pointer transition-all duration-300"
                    style={{
                      background: 'rgba(26,110,245,0.05)',
                      borderColor: 'rgba(26,110,245,0.1)',
                      backdropFilter: 'blur(10px)',
                    }}
                    onMouseEnter={e => {
                      gsap.to(e.currentTarget, {
                        y: -8,
                        background: 'rgba(26,110,245,0.15)',
                        borderColor: `${stat.color}40`,
                        boxShadow: `0 10px 30px ${stat.color}20`,
                        duration: 0.3,
                      });
                    }}
                    onMouseLeave={e => {
                      gsap.to(e.currentTarget, {
                        y: 0,
                        background: 'rgba(26,110,245,0.05)',
                        borderColor: 'rgba(26,110,245,0.1)',
                        boxShadow: '0 0 0 transparent',
                        duration: 0.3,
                      });
                    }}>
                    <div className="flex items-start gap-3">
                      <Icon className="w-5 h-5" style={{ color: stat.color }} />
                    </div>
                    <p className="text-3xl font-bold mt-3 mb-1" style={{ color: stat.color }}>
                      {stat.number}
                    </p>
                    <p style={{ fontSize: '0.875rem', color: '#a0aec0' }}>
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Glassmorphic card */}
            <div className="mt-8 p-6 rounded-2xl border"
              style={{
                background: 'rgba(26,110,245,0.08)',
                borderColor: 'rgba(26,110,245,0.2)',
                backdropFilter: 'blur(20px)',
              }}>
              <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>
                Based in Mississauga, Ontario
              </p>
              <p style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 600 }}>
                Serving Canada & North America
              </p>
              <p style={{ fontSize: '0.875rem', color: '#a0aec0', marginTop: '0.5rem' }}>
                Remote-first teams with global reach
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
      `}</style>
    </section>
  );
}
