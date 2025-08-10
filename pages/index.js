import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <Layout
      title="KSK - 임베디드 시스템 개발자 포트폴리오"
      description="15년간 자동차 블랙박스와 냉동기 제어 시스템 개발을 통해 검증된 실력을 보유한 임베디드 시스템 전문가 KSK의 포트폴리오입니다."
    >
      <Hero />
      <About />
      <Skills />
      <Projects />

      {/* Experience Section Placeholder */}
      <section id="experience" className="section" style={{backgroundColor: 'var(--color-bg-secondary)'}}>
        <div className="container">
          <div className="text-center">
            <h2>Experience</h2>
            <p>Experience 섹션이 여기에 구현될 예정입니다.</p>
          </div>
        </div>
      </section>

      {/* Contact Section Placeholder */}
      <section id="contact" className="section">
        <div className="container">
          <div className="text-center">
            <h2>Contact</h2>
            <p>Contact 섹션이 여기에 구현될 예정입니다.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
} 