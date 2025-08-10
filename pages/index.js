import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';

export default function Home() {
  return (
    <Layout
      title="James - 웹기획 포트폴리오"
      description="사용자 중심의 디지털 경험을 설계하고, 데이터 기반의 의사결정으로 비즈니스 가치를 창출하는 웹기획자 James의 포트폴리오입니다."
    >
      <Hero />
      <About />

      {/* Skills Section Placeholder */}
      <section id="skills" className="section" style={{backgroundColor: 'var(--color-bg-secondary)'}}>
        <div className="container">
          <div className="text-center">
            <h2>Skills</h2>
            <p>Skills 섹션이 여기에 구현될 예정입니다.</p>
          </div>
        </div>
      </section>

      {/* Projects Section Placeholder */}
      <section id="projects" className="section">
        <div className="container">
          <div className="text-center">
            <h2>Projects</h2>
            <p>Projects 섹션이 여기에 구현될 예정입니다.</p>
          </div>
        </div>
      </section>

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