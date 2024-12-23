'use client';
import styles from '@/styles/ThemeSwitcher.module.css';
import { CSSProperties, useState } from 'react';

const ThemeSwitcher = () => {
  const [selected, setSelected] = useState(localStorage.getItem('theme'));

  if(selected === 'dark') document.documentElement.classList.add('dark-theme');
  else if(selected === 'light') document.documentElement.classList.remove('dark-theme');
  else{
    if(window.matchMedia('(prefers-color-scheme: dark)')) document.documentElement.classList.add('dark-theme');
    else document.documentElement.classList.remove('dark-theme');
  }

  return (
    <div className={styles.themeSwitch} style={{
      "--base": '--background: #000;'
    } as CSSProperties}>
      <button className={`${styles.darkTheme} ${selected === 'dark' && styles.active}`} aria-label='Dark'
      onClick={() => { setSelected('dark'); localStorage.setItem('theme', 'dark'); }}>
        <svg data-testid="geist-icon" fill="none" height="16" color='currentColor' shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>
      </button>
      <button  className={`${styles.lightTheme} ${selected === 'light' && styles.active}`} aria-label='Light'
      onClick={() => { setSelected('light'); localStorage.setItem('theme', 'light'); }}>
        <svg data-testid="geist-icon" fill="none" height="16" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" color='currentColor'><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2"></path><path d="M12 21v2"></path><path d="M4.22 4.22l1.42 1.42"></path><path d="M18.36 18.36l1.42 1.42"></path><path d="M1 12h2"></path><path d="M21 12h2"></path><path d="M4.22 19.78l1.42-1.42"></path><path d="M18.36 5.64l1.42-1.42"></path></svg>
      </button>
      <button className={`${styles.systemTheme} ${selected === 'system' && styles.active}`} aria-label='System'
      onClick={() => { setSelected('system'); localStorage.setItem('theme', 'system'); }}>
        <svg data-testid="geist-icon" fill="none" height="16" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" color='currentColor'><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><path d="M8 21h8"></path><path d="M12 17v4"></path></svg>
      </button>
    </div>
  )
}

export default ThemeSwitcher;