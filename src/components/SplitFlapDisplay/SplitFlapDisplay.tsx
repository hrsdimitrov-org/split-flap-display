import { SplitFlap } from "../SplitFlap";
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
      <SplitFlap char="W" nextChar="W" />
      <SplitFlap char="E" nextChar="E" />
      <SplitFlap char="L" nextChar="L" />
      <SplitFlap char="C" nextChar="C" />
      <SplitFlap char="O" nextChar="O" />
      <SplitFlap char="M" nextChar="M" />
      <SplitFlap char="E" nextChar="E" />

    </div>
  );
};

export { SplitFlapDisplay };
export type { SplitFlapDisplayProps };