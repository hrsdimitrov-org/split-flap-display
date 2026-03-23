import { SplitFlap } from "./SplitFlap";

interface SplitFlapDisplayProps {
  value: string;
  className?: string;
  "aria-label"?: string;
}

const SplitFlapDisplay = ({ value, className, "aria-label": ariaLabel }: SplitFlapDisplayProps) => {
  return (
    <div className={className} role="text" aria-label={ariaLabel ?? value}>
      <SplitFlap char="7" />
    </div>
  );
};

export { SplitFlapDisplay };
export type { SplitFlapDisplayProps };;