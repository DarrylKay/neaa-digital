import type { SectionLabelProps } from "./types";

const labelClassName =
  "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted print:text-[0.65rem]";

export function SectionLabel({ as = "h2", id, children }: SectionLabelProps) {
  const Tag = as;

  return (
    <Tag id={id} className={labelClassName}>
      <span aria-hidden className="h-0.5 w-8 shrink-0 bg-accent" />
      {children}
    </Tag>
  );
}
