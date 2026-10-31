import type { EmploymentType } from "@/content";

const EMPLOYMENT_LABELS: Record<EmploymentType, string> = {
  contract: "Contract",
  permanent: "Permanent",
  freelance: "Freelance",
};

export function getEmploymentLabel(type: EmploymentType): string {
  return EMPLOYMENT_LABELS[type];
}
