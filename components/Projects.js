import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
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

  const projects = [
    {
      id: 1,
      title: "차세대 AI 블랙박스 시스템",
      category: "blackbox",
      period: "2021-2023",
      client: "현대자동차그룹",
      description: "AI 기반 실시간 영상 분석과 위험 상황 감지 기능을 탑재한 차세대 블랙박스 시스템 개발",
      technologies: ["STM32H7", "FreeRTOS", "OpenCV", "CAN-FD", "GPS", "G-Sensor"],
      achievements: [
        "실시간 객체 인식 정확도 95% 달성",
        "24시간 연속 운영 안정성 99.9% 보장",
        "전력 소모량 기존 대비 40% 절감",
        "HD 영상 압축률 30% 개선"
      ],
      status: "양산 완료",
      image: "/project-blackbox-1.jpg"
    },
    {
      id: 2,
      title: "스마트 냉동창고 통합 제어 시스템",
      category: "refrigeration",
      period: "2020-2022",
      client: "삼성전자",
      description: "IoT 기반 대형 냉동창고의 온습도, 압축기, 팬 등을 통합 제어하는 스마트 시스템",
      technologies: ["ARM Cortex-M4", "Modbus TCP", "WiFi", "Temperature Sensors", "PID Control"],
      achievements: [
        "에너지 효율 35% 개선",
        "온도 제어 정밀도 ±0.1°C 달성",
        "원격 모니터링 및 제어 시스템 구축",
        "예측 정비를 통한 다운타임 50% 감소"
      ],
      status: "운영 중",
      image: "/project-refrigeration-1.jpg"
    },
    {
      id: 3,
      title: "고성능 트럭 전용 블랙박스",
      category: "blackbox",
      period: "2019-2021",
      client: "볼보트럭코리아",
      description: "상용차 특화 기능과 내진동성을 강화한 트럭 전용 블랙박스 시스템",
      technologies: ["STM32F7", "μC/OS-III", "CAN Bus", "4G LTE", "Vibration Resistant"],
      achievements: [
        "진동 테스트 IEC 60068-2-6 통과",
        "운행 데이터 실시간 전송 기능",
        "운전자 피로도 감지 알고리즘 개발",
        "Fleet 관리 시스템 연동"
      ],
      status: "양산 완료",
      image: "/project-blackbox-2.jpg"
    },
    {
      id: 4,
      title: "산업용 초저온 냉동기 제어기",
      category: "refrigeration",
      period: "2018-2020",
      client: "LG전자",
      description: "-80°C 초저온 환경을 위한 정밀 온도 제어 시스템 개발",
      technologies: ["STM32L4", "RTX RTOS", "Modbus RTU", "PT100", "Advanced PID"],
      achievements: [
        "초저온 -80°C 정밀 제어 달성",
        "전력 효율 25% 개선",
        "자동 해동 알고리즘 최적화",
        "의료용 백신 저장 표준 인증 획득"
      ],
      status: "운영 중",
      image: "/project-refrigeration-2.jpg"
    },
    {
      id: 5,
      title: "멀티채널 CCTV 블랙박스",
      category: "blackbox",
      period: "2017-2019",
      client: "한국교통안전공단",
      description: "대중교통용 8채널 동시 녹화 및 실시간 스트리밍 지원 블랙박스",
      technologies: ["ARM Cortex-A9", "Linux RT", "H.264/H.265", "Ethernet", "Multi-Camera"],
      achievements: [
        "8채널 Full HD 동시 녹화",
        "실시간 스트리밍 지연시간 100ms 이하",
        "RAID 구성으로 데이터 안정성 확보",
        "교통사고 자동 신고 시스템 연동"
      ],
      status: "양산 완료",
      image: "/project-blackbox-3.jpg"
    },
    {
      id: 6,
      title: "스마트팜 환경제어 시스템",
      category: "refrigeration",
      period: "2016-2018",
      client: "농촌진흥청",
      description: "온실 내 온습도, CO2, 조도를 자동 제어하는 스마트팜 시스템",
      technologies: ["STM32F4", "FreeRTOS", "LoRa", "Multiple Sensors", "Machine Learning"],
      achievements: [
        "작물 수확량 20% 증가",
        "에너지 사용량 30% 절감",
        "원격 모니터링 앱 개발",
        "AI 기반 최적 환경 예측 모델"
      ],
      status: "운영 중",
      image: "/project-refrigeration-3.jpg"
    }
  ];

  const filters = [
    { key: 'all', label: '전체 프로젝트' },
    { key: 'blackbox', label: '블랙박스 시스템' },
    { key: 'refrigeration', label: '냉동/환경제어' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" ref={sectionRef} className={styles.projects}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.header}>
            <h2 className={styles.title}>Major Projects</h2>
            <p className={styles.subtitle}>
              15년간 수행한 핵심 프로젝트들과 달성한 성과들
            </p>
          </div>

          <div className={styles.filters}>
            {filters.map((filter) => (
              <button
                key={filter.key}
                className={`${styles.filterButton} ${activeFilter === filter.key ? styles.active : ''}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className={styles.projectsGrid}>
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={styles.projectCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.projectImage}>
                  <div className={styles.imagePlaceholder}>
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                      <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
                      <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className={styles.projectStatus}>
                    <span className={`${styles.statusBadge} ${project.status === '양산 완료' ? styles.completed : styles.active}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className={styles.projectContent}>
                  <div className={styles.projectMeta}>
                    <span className={styles.projectPeriod}>{project.period}</span>
                    <span className={styles.projectClient}>{project.client}</span>
                  </div>

                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>

                  <div className={styles.technologies}>
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={styles.achievements}>
                    <h4 className={styles.achievementsTitle}>주요 성과</h4>
                    <ul className={styles.achievementsList}>
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className={styles.achievementItem}>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.projectStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100+</span>
              <span className={styles.statLabel}>완료 프로젝트</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>협력 기업</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>99.9%</span>
              <span className={styles.statLabel}>시스템 안정성</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>특허 출원</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 