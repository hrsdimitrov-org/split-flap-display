import clsx from "clsx";
import styles from "./SplitFlap.module.css";

interface SplitFlapProps {
  char: string;
  nextChar: string;
  className?: string;
  "aria-label"?: string;
}

const SplitFlap = ({ char, nextChar, className, "aria-label": ariaLabel }: SplitFlapProps) => {

  return (
    <div className={clsx(styles.flap, className)} aria-label={ariaLabel}>
      <div className={styles.unfold_top}>{char}</div>
      <div className={styles.unfold_bottom}>{char}</div>
      <div className={styles.fold_top}>{nextChar}</div>
      <div className={styles.fold_bottom}>{nextChar}</div>
    </div>
  );
};

export { SplitFlap };
export type { SplitFlapProps };
