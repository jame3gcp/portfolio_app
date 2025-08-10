import { useState, useEffect } from 'react';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    // 실제 구현시 PDF 파일 경로로 수정
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              안녕하세요, 저는{' '}
              <span className={styles.highlight}>KSK</span>입니다
            </h1>
            <p className={styles.subtitle}>
              임베디드 시스템 개발자 · 하드웨어 솔루션 전문가
            </p>
            <p className={styles.description}>
              15년간 자동차 블랙박스와 냉동기 제어 시스템 개발을 통해 검증된 실력을 보유한 
              임베디드 시스템 전문가입니다. 하드웨어와 소프트웨어의 완벽한 융합으로 
              안정적이고 혁신적인 솔루션을 제공합니다.
            </p>
            
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>년 경력</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100+</span>
                <span className={styles.statLabel}>프로젝트</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>99.9%</span>
                <span className={styles.statLabel}>시스템 안정성</span>
              </div>
            </div>

            <div className={styles.actions}>
              <button 
                className={styles.primaryButton}
                onClick={handleResumeDownload}
                aria-label="이력서 다운로드"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                이력서 다운로드
              </button>
              <button 
                className={styles.secondaryButton}
                onClick={scrollToContact}
                aria-label="연락하기"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                연락하기
              </button>
            </div>
          </div>

          <div className={styles.visualContent}>
            <div className={styles.profileImageContainer}>
              <div className={styles.profileImage}>
                <div className={styles.imagePlaceholder}>
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className={styles.backgroundDecoration}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
          <span className={styles.scrollText}>스크롤하여 더 보기</span>
        </div>
      </div>
    </section>
  );
};

export default Hero; 