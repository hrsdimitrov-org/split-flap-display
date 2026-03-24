import { SplitFlap } from "./SplitFlap";
import clsx from "clsx";
import styles from "./SplitFlapDisplay.module.css";

interface SplitFlapDisplayProps {
  value: string;
  className?: string;
  "aria-label"?: string;
}

const SplitFlapDisplay = ({ value, className, "aria-label": ariaLabel }: SplitFlapDisplayProps) => {
  return (
    <div className={clsx(styles.flap_display, className)} role="text" aria-label={ariaLabel ?? value}>
      <SplitFlap char="A" nextChar="3" />
    </div>
  );
};

export { SplitFlapDisplay };
export type { SplitFlapDisplayProps };