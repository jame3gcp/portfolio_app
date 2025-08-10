import { useState, useEffect, useRef } from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('contact@example.com');
    // 실제 구현시 토스트 메시지 추가
  };

  return (
    <section id="about" ref={sectionRef} className={styles.about}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.imageSection}>
            <div className={styles.profileImageContainer}>
              <div className={styles.profileImage}>
                <div className={styles.imagePlaceholder}>
                  <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.textSection}>
            <div className={styles.header}>
              <h2 className={styles.title}>About Me</h2>
              <p className={styles.subtitle}>
                사용자 중심의 디지털 경험을 만들어가는 웹기획자
              </p>
            </div>

            <div className={styles.description}>
              <p>
                5년간 다양한 규모의 프로젝트를 통해 사용자 경험 설계부터 비즈니스 전략까지 
                포괄적인 웹기획 업무를 수행해왔습니다. 데이터 기반의 의사결정과 
                사용자 중심적 사고를 바탕으로 실질적인 비즈니스 가치를 창출합니다.
              </p>
              <p>
                특히 복잡한 서비스를 직관적이고 사용하기 쉽게 만드는 것에 관심이 많으며, 
                개발팀과의 원활한 협업을 통해 기획 의도가 제대로 구현될 수 있도록 
                세심하게 관리합니다.
              </p>
            </div>

            <div className={styles.achievements}>
              <h3 className={styles.achievementsTitle}>주요 성과</h3>
              <ul className={styles.achievementsList}>
                <li>
                  <strong>사용자 만족도 40% 향상</strong>
                  <span>UX 리뉴얼을 통한 주요 지표 개선</span>
                </li>
                <li>
                  <strong>전환율 25% 증가</strong>
                  <span>데이터 분석 기반 퍼널 최적화</span>
                </li>
                <li>
                  <strong>개발 일정 20% 단축</strong>
                  <span>효율적인 기획 프로세스 도입</span>
                </li>
              </ul>
            </div>

            <div className={styles.info}>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>근무형태</span>
                  <span className={styles.infoValue}>정규직 · 프리랜서</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>지역</span>
                  <span className={styles.infoValue}>서울 · 원격근무</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>이메일</span>
                  <button 
                    className={styles.emailButton}
                    onClick={copyEmail}
                    aria-label="이메일 주소 복사"
                  >
                    contact@example.com
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 