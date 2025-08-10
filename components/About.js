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
    navigator.clipboard.writeText('ksk.embedded@gmail.com');
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
                혁신적인 임베디드 시스템으로 미래를 설계하는 전문가
              </p>
            </div>

            <div className={styles.description}>
              <p>
                15년간 자동차 블랙박스와 산업용 냉동기 제어 시스템 개발 분야에서 축적한 전문성으로 
                하드웨어와 소프트웨어의 완벽한 융합 솔루션을 제공합니다. 
                ARM Cortex-M, STM32, RTOS 기반의 안정적이고 효율적인 시스템 설계에 특화되어 있습니다.
              </p>
              <p>
                특히 실시간 데이터 처리, 센서 융합, 통신 프로토콜 최적화를 통해 
                고성능 임베디드 시스템을 구현하는 것에 전문성을 가지고 있으며, 
                양산 제품의 품질 안정성과 성능 최적화에 대한 깊은 이해를 보유하고 있습니다.
              </p>
            </div>

            <div className={styles.achievements}>
              <h3 className={styles.achievementsTitle}>주요 성과</h3>
              <ul className={styles.achievementsList}>
                <li>
                  <strong>블랙박스 시스템 안정성 99.9% 달성</strong>
                  <span>24시간 연속 운영 환경에서 무결점 동작 보장</span>
                </li>
                <li>
                  <strong>냉동기 에너지 효율 30% 개선</strong>
                  <span>AI 기반 예측 제어 알고리즘 도입</span>
                </li>
                <li>
                  <strong>개발 기간 40% 단축</strong>
                  <span>모듈화된 펌웨어 아키텍처 및 자동화 도구 구축</span>
                </li>
                <li>
                  <strong>특허 3건 출원</strong>
                  <span>센서 융합 기술 및 전력 최적화 관련</span>
                </li>
              </ul>
            </div>

            <div className={styles.info}>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>근무형태</span>
                  <span className={styles.infoValue}>정규직 · 컨설팅</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>지역</span>
                  <span className={styles.infoValue}>전국 · 해외 출장 가능</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>이메일</span>
                  <button 
                    className={styles.emailButton}
                    onClick={copyEmail}
                    aria-label="이메일 주소 복사"
                  >
                    ksk.embedded@gmail.com
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