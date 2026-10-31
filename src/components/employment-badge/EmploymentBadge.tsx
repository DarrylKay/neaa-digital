import type { EmploymentType } from "@/content";
import { getEmploymentLabel } from "@/lib/employment-label";

interface EmploymentBadgeProps {
  type: EmploymentType;
}

const EMPLOYMENT_BADGE_TONE: Record<EmploymentType, string> = {
  contract: "bg-contract-bg text-contract-text",
  permanent: "bg-permanent-bg text-permanent-text",
  freelance: "bg-badge-bg text-badge-text",
};

export function EmploymentBadge({ type }: EmploymentBadgeProps) {
  const tone = EMPLOYMENT_BADGE_TONE[type];

  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide print:px-2 print:py-0 print:text-[0.6rem] ${tone}`}
    >
      {getEmploymentLabel(type)}
    </span>
  );
}
