'use client';
import { useRef, useState } from "react";
import styles from '@/styles/NavFeatures.module.css';
import features from "@/assets/features";
import Link from "next/link";
import { CSSTransition } from 'react-transition-group';

const NavFeatures = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mouseOn = useRef(false);
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timeoutId = useRef(-1);

  const handleEnter = () => {
    clearTimeout(timeoutId.current);
    timeoutId.current = -1;

    if(!mouseOn.current) { setIsOpen(true); mouseOn.current = true; }
  }

  const handleLeave = () => {
    clearTimeout(timeoutId.current);
    timeoutId.current = window.setTimeout(() => {
      setIsOpen(false);
      mouseOn.current = false;
    }, 200);
  }

  return (
    <li className={styles.wrapper}
    onMouseOver={handleEnter}
    onMouseOut={handleLeave}>
      <button aria-label='Features' className={`${styles.features} ${isOpen && styles.open}`}
      onClick={() => { setIsOpen((o) => !o); }}>
        <p>Features</p>
        <svg xmlns="http://www.w3.org/2000/svg" color='currentColor' viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
      </button>
      <CSSTransition unmountOnExit in={isOpen} nodeRef={indicatorRef} timeout={200} classNames={{
        enter: styles.indicatorEnter,
        enterActive: styles.indicatorEnterActive,
        enterDone: styles.indicatorEnterDone,
        exit: styles.indicatorExit,
        exitActive: styles.indicatorExitActive,
        exitDone: styles.indicatorExitDone
      }}>
        <div ref={indicatorRef} className={styles.indicator}>
          <svg fill="none" height="46" viewBox="0 0 158 46" width="158"><path d="M70.952 36.8018L55.1106 20.9604C47.384 13.2338 43.5207 9.37047 39.0122 6.6077C35.0151 4.15823 30.6573 2.35317 26.0988 1.25878C20.9573 0.0244141 15.4938 0.0244141 4.56672 0.0244141H153.132C142.205 0.0244141 136.742 0.0244141 131.6 1.25878C127.042 2.35317 122.684 4.15823 118.687 6.6077C114.178 9.37047 110.315 13.2338 102.588 20.9604L86.7469 36.8018C82.3853 41.1635 75.3137 41.1635 70.952 36.8018Z" fill="var(--arrow-bg)"></path><path d="M153.132 5.60877C141.939 5.60877 137.253 5.64466 132.904 6.68885C128.915 7.64643 125.102 9.22586 121.605 11.3691C117.791 13.7062 114.452 16.9946 106.537 24.9091L90.6957 40.7506C84.1532 47.293 73.5457 47.293 67.0033 40.7505L51.1618 24.9091C43.2473 16.9946 39.9082 13.7062 36.0944 11.3691C32.5969 9.22586 28.7838 7.64643 24.7952 6.68885C20.4458 5.64466 15.7596 5.60877 4.56672 5.60877H0.668457V0.0244141H4.56672C15.4938 0.0244141 20.9573 0.0244141 26.0988 1.25878C30.6573 2.35317 35.0151 4.15823 39.0122 6.6077C43.5207 9.37047 47.384 13.2338 55.1106 20.9604L70.952 36.8018C75.3137 41.1635 82.3853 41.1635 86.7469 36.8018L102.588 20.9604C110.315 13.2338 114.178 9.37047 118.687 6.6077C122.684 4.15823 127.042 2.35317 131.6 1.25878C136.742 0.0244141 142.205 0.0244141 153.132 0.0244141H157.03V5.60877H153.132Z" fill="var(--border-color)"></path></svg>
        </div>
      </CSSTransition>
      <CSSTransition unmountOnExit in={isOpen} nodeRef={containerRef} timeout={200} classNames={{
        enter: styles.containerEnter,
        enterActive: styles.containerEnterActive,
        enterDone: styles.containerEnterDone,
        exit: styles.containerExit,
        exitActive: styles.containerExitActive,
        exitDone: styles.containerExitDone
      }}>
        <div ref={containerRef} className={styles.container}>
          <div className={styles.menu}>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>
                  <Link href={feature.link} className={styles.link}>
                    <div className={styles.header}>
                      {feature.icon}
                      <p>{feature.title}</p>
                    </div>
                    <p className={styles.description}>{feature.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CSSTransition>
    </li>
  )
}

export default NavFeatures;