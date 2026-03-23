export interface SplitFlapDisplayProps {
  value: string;
  className?: string;
  "aria-label"?: string;
}

export function SplitFlapDisplay({
  value,
  className,
  "aria-label": ariaLabel
}: SplitFlapDisplayProps) {
  return (
    <div className={className} role="text" aria-label={ariaLabel ?? value}>
      <p>{value}</p>
    </div>
  );
}
