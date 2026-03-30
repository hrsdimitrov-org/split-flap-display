import clsx from "clsx";
import styles from "./SplitFlap.module.css";
import fitty from 'fitty';
import { useEffect, useRef } from 'react';
import { motion, useAnimation } from "motion/react";
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
  const topFirstRef = useRef<HTMLDivElement | null>(null);
  const bottomFirstRef = useRef<HTMLDivElement | null>(null);
  const topSecondRef = useRef<HTMLDivElement | null>(null);
  const bottomSecondRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const instances: FittyElementInstance[] = [];
    const refs = [topFirstRef, bottomFirstRef, topSecondRef, bottomSecondRef];

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

  const topFirstControls = useAnimation();
  const topSecondControls = useAnimation();
  const bottomFirstControls = useAnimation();
  const bottomSecondControls = useAnimation();

  const topVariants = {
    flat: {
    },
    flip: {
      rotateX: -90
    }
  };

  const bottomVariants = {
    flat: {
    },
    flip: {
      rotateX: -90
    }
  };


  return (
    <div className={clsx(styles.flap, className)} aria-label={ariaLabel}>

      <motion.div className={styles.top_first} variants={topVariants} animate={topFirstControls} initial="flat">
        <div className={styles.top_first_text_offset}>
          <div ref={topFirstRef} className={styles.char}>{char}</div>
        </div>
      </motion.div>

      <motion.div className={styles.top_second} variants={topVariants} animate={topSecondControls} initial="flat">
        <div className={styles.top_second_text_offset}>
          <div ref={topSecondRef} className={styles.char}>{nextChar}</div>
        </div>
      </motion.div>

      <motion.div className={styles.bottom_second} variants={bottomVariants} animate={bottomSecondControls} initial="flat">
        <div className={styles.bottom_second_text_offset}>
          <div ref={bottomSecondRef} className={styles.char}>{nextChar}</div>
        </div>
      </motion.div>

      <motion.div className={styles.bottom_first} variants={bottomVariants} animate={bottomFirstControls} initial="flat">
        <div className={styles.bottom_first_text_offset}>
          <div ref={bottomFirstRef} className={styles.char}>{char}</div>
        </div>
      </motion.div>
    </div>
  );
};

export { SplitFlap };
export type { SplitFlapProps };
