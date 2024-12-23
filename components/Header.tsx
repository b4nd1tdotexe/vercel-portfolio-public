'use client';
import headerLinks, { mobileHeaderLinks } from '@/assets/headerLinks';
import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import NavFeatures from './NavFeatures';
import { useEffect, useRef, useState } from 'react';
import MobileNavFeatures from './MobileNavFeatures';

const Header = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState(0);

  const handleClick = () => {
    if (open) setOpen(false);
    else { setOpen(true); setPos(document.documentElement.scrollTop); }
  }

  useEffect(() => {
    if (open) document.body.style.position = 'fixed', document.body.style.width = '100%';
    else document.body.style.position = 'unset', document.body.style.width = 'unset', document.documentElement.scrollTop = pos;
  })

  useEffect(() => {
    const handler = () => {
      if (ref.current == null) return;
      if (document.documentElement.scrollTop > 0) ref.current.classList.add(styles.scrolled);
      else ref.current.classList.remove(styles.scrolled);
    };

    addEventListener('scroll', handler);

    return () => {
      removeEventListener('scroll', handler);
    }
  }, []);

  useEffect(() => {
    const handler = () => {
      if (document.documentElement.clientWidth > 1149) setOpen(false);
    };

    addEventListener('resize', handler);

    return () => {
      removeEventListener('resize', handler);
    }
  }, []);

  return (
    <div ref={ref} className={styles.container}>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href='/'>
            <svg aria-label="Vercel Logotype" fill="var(--foreground)" height="26" viewBox="0 0 283 64"><path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"></path></svg>
          </Link>
          <button aria-label='Menu' className={`${styles.menuBtn} ${open && styles.open}`} onClick={handleClick}>
            <div className={styles.first} />
            <div className={styles.second} />
          </button>
          {open && <nav className={styles.mobileContent}>
            <div className={styles.login}>
              <Link href='https://vercel.com/login' className={styles.mobileLink}>Login</Link>
            </div>
            <div className={styles.signUp}>
              <Link href='https://vercel.com/signup' className={styles.mobileLink}>Sign Up</Link>
            </div>
            <MobileNavFeatures />
            <ul>
              {mobileHeaderLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <Link href={link.link} className={styles.mobileNavLink}>
                      <p className={styles.mobileLinkText}>
                        {link.title}
                      </p>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>}
        </div>
        <nav className={styles.center}>
          <ul>
            <NavFeatures />
            {headerLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Link href={link.link} className={styles.link}>
                    <p className={styles.linkText}>
                      {link.title}
                    </p>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className={styles.right}>
          <Link href='https://vercel.com/contact/sales' className={styles.link}>
            <p className={styles.linkText}>
              Contact
            </p>
          </Link>
          <Link href='https://vercel.com/login' className={styles.link}>
            <p className={styles.linkText}>
              Login
            </p>
          </Link>
          <Link href='https://vercel.com/signup' className={styles.signupBtn}>
            <p className={styles.signupTxt}>
              Sign Up
            </p>
            <span className={styles.signupWidth} />
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Header;