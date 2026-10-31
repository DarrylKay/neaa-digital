import type { SkillGroup } from "@/content";
import { Chip } from "@/components/chip";
import { SectionLabel } from "@/components/section-label";

interface SkillGroupsProps {
  sectionLabel: string;
  groups: SkillGroup[];
}

export function SkillGroups({ sectionLabel, groups }: SkillGroupsProps) {
  return (
    <section aria-labelledby="skills-heading" className="mt-16 print:mt-5">
      <SectionLabel id="skills-heading">{sectionLabel}</SectionLabel>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 print:mt-2 print:block print:space-y-1">
        {groups.map((group) => (
          <li
            key={group.label}
            className="rounded-2xl border border-border/80 bg-surface p-5 print:rounded-none print:border-0 print:bg-transparent print:p-0"
          >
            <div className="flex items-center gap-3 print:hidden">
              <SkillIcon name={group.label} />
              <h3 className="text-sm font-semibold text-ink">{group.label}</h3>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2 print:hidden">
              {group.items.map((item) => (
                <li key={item}>
                  <Chip>{item}</Chip>
                </li>
              ))}
            </ul>
            <p className="hidden text-[0.75rem] leading-snug print:block">
              <span className="font-semibold text-ink">{group.label}: </span>
              <span className="text-ink/80">{group.items.join(", ")}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SkillIcon({ name }: { name: string }) {
  const shared = {
    "aria-hidden": true as const,
    className: "h-5 w-5",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.75,
  };

  return (
    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
      {name === "Backend & APIs" ? (
        <svg {...shared}>
          <ellipse cx="12" cy="6" rx="7" ry="2.5" />
          <path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
          <path d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
        </svg>
      ) : null}
      {name === "Testing & delivery" ? (
        <svg {...shared}>
          <circle cx="12" cy="12" r="3" />
          <path
            strokeLinecap="round"
            d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6"
          />
        </svg>
      ) : null}
      {name === "Architecture & practices" ? (
        <svg {...shared}>
          <rect x="3" y="5" width="18" height="12" rx="2" />
          <path strokeLinecap="round" d="M8 21h8M12 17v4" />
        </svg>
      ) : null}
      {name !== "Backend & APIs" &&
      name !== "Testing & delivery" &&
      name !== "Architecture & practices" ? (
        <svg {...shared}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 8l-4 4 4 4M16 8l4 4-4 4" />
        </svg>
      ) : null}
    </span>
  );
}
