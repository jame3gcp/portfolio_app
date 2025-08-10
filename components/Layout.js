import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from './Header';

const Layout = ({ children, title = '포트폴리오', description = '개인 포트폴리오 웹사이트' }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    // 저장된 테마 또는 시스템 선호도 확인
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="app">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="main">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout; 