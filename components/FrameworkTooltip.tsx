import styles from '@/styles/Framework.module.css';
import { useLayoutEffect, useRef, useState } from "react";
import { Portal } from 'react-portal';

const FrameworkTooltip = ({
  show,
  title,
  parent
}: {
  show: boolean,
  title: string,
  parent: React.MutableRefObject<HTMLDivElement | null>
}) => {
  const [offset, setOffset] = useState(0);
  const itemRef = useRef<HTMLDivElement | null>(null);
  const topPos = parent.current == null ? 0 : parent.current.getBoundingClientRect().y + parent.current.getBoundingClientRect().height;
  const leftPos = parent.current == null ? 0 : parent.current.getBoundingClientRect().left + (parent.current.getBoundingClientRect().width / 2);
  
  useLayoutEffect(() => {
    setOffset(itemRef.current ? itemRef.current.getBoundingClientRect().width / 2 : 0);
  }, [show]);

  if(!show) return <></>;
  return (
    <Portal>
      <div ref={itemRef} className={styles.tooltip} style={{
        '--offset': `${offset}px`,
        '--top': `${topPos}px`,
        '--left': `${leftPos}px`
      } as React.CSSProperties}>
        <div className={styles.indicator} />
        {title}
      </div>
    </Portal>
  )
}

export default FrameworkTooltip;