interface SplitFlapProps {
  char: string;
  className?: string;
  "aria-label"?: string;
}

const SplitFlap = ({ char, className, "aria-label": ariaLabel }: SplitFlapProps) => {
  return (
    <div className={className} aria-label={ariaLabel}>
      <div>{char}</div>
      <div>{char}</div>
      <div>{char}</div>
      <div>{char}</div>
    </div>
  );
};

export { SplitFlap };
export type { SplitFlapProps };