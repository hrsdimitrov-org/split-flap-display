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
      <SplitFlap char="H" nextChar="H" />
      <SplitFlap char="R" nextChar="R" />
      <SplitFlap char="I" nextChar="I" />
      <SplitFlap char="S" nextChar="S" />
    </div>
  );
};

export { SplitFlapDisplay };
export type { SplitFlapDisplayProps };