import type { ChipProps } from "./types";

export function Chip({ children }: ChipProps) {
  return (
    <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs text-ink/80">
      {children}
    </span>
  );
}
