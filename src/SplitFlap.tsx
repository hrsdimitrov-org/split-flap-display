import clsx from "clsx";
import styles from "./SplitFlap.module.css";
import fitty from 'fitty';
import { useEffect, useRef } from 'react';

interface SplitFlapProps {
  char: string;
  nextChar: string;
  className?: string;
  "aria-label"?: string;
}

type FittyElementInstance = {
  fit: () => void;
  unsubscribe: () => void;
};

const SplitFlap = ({ char, nextChar, className, "aria-label": ariaLabel }: SplitFlapProps) => {
  const unfoldTopRef = useRef<HTMLDivElement | null>(null);
  const unfoldBottomRef = useRef<HTMLDivElement | null>(null);
  const foldTopRef = useRef<HTMLDivElement | null>(null);
  const foldBottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const instances: FittyElementInstance[] = [];
    const refs = [unfoldTopRef, unfoldBottomRef, foldTopRef, foldBottomRef];

    refs.forEach((ref) => {
      if (ref.current) {
        instances.push(fitty(ref.current));
      }
    });

    instances.forEach((i) => {
      i.fit();
    });

    return () => {
      instances.forEach((i) => i.unsubscribe());
    };
  }, [char, nextChar]);

  return (
    <div className={clsx(styles.flap, className)} aria-label={ariaLabel}>
      <div className={styles.unfold_top}>
        <div ref={unfoldTopRef}>{char}</div>
      </div>

      <div className={styles.unfold_bottom}>
        <div ref={unfoldBottomRef} className={styles.char}>{char}</div>
      </div>

      <div className={styles.fold_top}>
        <div ref={foldTopRef} className={styles.char}>{nextChar}</div>
      </div>

      <div className={styles.fold_bottom}>
        <div ref={foldBottomRef} className={styles.char}>{nextChar}</div>
      </div>
    </div>
  );
};

export { SplitFlap };
export type { SplitFlapProps };
