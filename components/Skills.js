import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Skills.module.css';

const Skills = () => {
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

  const skillCategories = [
    {
      title: "마이크로컨트롤러 & 프로세서",
      skills: [
        { name: "ARM Cortex-M Series", level: 95, years: "12년" },
        { name: "STM32 Family", level: 98, years: "10년" },
        { name: "ESP32/ESP8266", level: 90, years: "5년" },
        { name: "PIC Microcontroller", level: 85, years: "8년" },
        { name: "Arduino Platform", level: 88, years: "6년" }
      ]
    },
    {
      title: "실시간 운영체제 & 펌웨어",
      skills: [
        { name: "FreeRTOS", level: 95, years: "8년" },
        { name: "μC/OS-III", level: 90, years: "6년" },
        { name: "Bare Metal Programming", level: 98, years: "15년" },
        { name: "Bootloader Development", level: 92, years: "7년" },
        { name: "OTA Update System", level: 88, years: "4년" }
      ]
    },
    {
      title: "통신 프로토콜 & 인터페이스",
      skills: [
        { name: "CAN/CAN-FD", level: 95, years: "10년" },
        { name: "UART/SPI/I2C", level: 98, years: "15년" },
        { name: "Modbus RTU/TCP", level: 92, years: "8년" },
        { name: "WiFi/Bluetooth", level: 88, years: "6년" },
        { name: "Ethernet/TCP-IP", level: 90, years: "7년" }
      ]
    },
    {
      title: "개발 도구 & 환경",
      skills: [
        { name: "Keil μVision", level: 95, years: "12년" },
        { name: "STM32CubeIDE", level: 92, years: "8년" },
        { name: "IAR Embedded Workbench", level: 88, years: "6년" },
        { name: "JTAG/SWD Debugging", level: 95, years: "15년" },
        { name: "Oscilloscope/Logic Analyzer", level: 90, years: "15년" }
      ]
    },
    {
      title: "프로그래밍 언어",
      skills: [
        { name: "C/C++", level: 98, years: "15년" },
        { name: "Assembly Language", level: 90, years: "12년" },
        { name: "Python (Scripts/Tools)", level: 85, years: "5년" },
        { name: "MATLAB/Simulink", level: 80, years: "4년" }
      ]
    },
    {
      title: "전문 분야",
      skills: [
        { name: "자동차 블랙박스 시스템", level: 98, years: "12년" },
        { name: "냉동기 제어 시스템", level: 95, years: "8년" },
        { name: "센서 데이터 융합", level: 92, years: "10년" },
        { name: "전력 관리 최적화", level: 90, years: "9년" },
        { name: "실시간 영상 처리", level: 88, years: "7년" }
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className={styles.skills}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.header}>
            <h2 className={styles.title}>Technical Skills</h2>
            <p className={styles.subtitle}>
              15년간 축적된 임베디드 시스템 개발 전문 기술
            </p>
          </div>

          <div className={styles.skillsGrid}>
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className={styles.skillCategory}
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <div className={styles.skillsList}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className={styles.skillItem}>
                      <div className={styles.skillInfo}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <div className={styles.skillMeta}>
                          <span className={styles.skillYears}>{skill.years}</span>
                          <span className={styles.skillLevel}>{skill.level}%</span>
                        </div>
                      </div>
                      <div className={styles.skillBar}>
                        <div 
                          className={styles.skillProgress}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.certifications}>
            <h3 className={styles.certificationsTitle}>자격증 & 인증</h3>
            <div className={styles.certificationsList}>
              <div className={styles.certification}>
                <span className={styles.certName}>정보처리기사</span>
                <span className={styles.certYear}>2010</span>
              </div>
              <div className={styles.certification}>
                <span className={styles.certName}>임베디드 시스템 전문가</span>
                <span className={styles.certYear}>2012</span>
              </div>
              <div className={styles.certification}>
                <span className={styles.certName}>ARM Accredited Engineer</span>
                <span className={styles.certYear}>2015</span>
              </div>
              <div className={styles.certification}>
                <span className={styles.certName}>ISO 26262 Functional Safety</span>
                <span className={styles.certYear}>2018</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 