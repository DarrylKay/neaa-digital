import type { CvRole } from "@/content";
import { CompanyLogo } from "@/components/company-logo";
import { EmploymentBadge } from "@/components/employment-badge";
import { SectionLabel } from "@/components/section-label";
import { TechPills } from "@/components/tech-pills";

interface ExperienceSectionProps {
  sectionLabel: string;
  roles: CvRole[];
}

export function ExperienceSection({
  sectionLabel,
  roles,
}: ExperienceSectionProps) {
  return (
    <section aria-labelledby="experience-heading">
      <SectionLabel id="experience-heading">{sectionLabel}</SectionLabel>
      <ol className="mt-8 space-y-4 print:mt-3 print:space-y-0">
        {roles.map((role) => (
          <li
            key={role.id}
            id={role.id}
            className="cv-role scroll-mt-28 print:mt-3 print:border-t print:border-border print:pt-3 print:first:mt-0 print:first:border-t-0 print:first:pt-0"
          >
            <article className="rounded-2xl border border-border/80 bg-surface p-6 shadow-sm shadow-ink/5 sm:p-8 print:rounded-none print:border-0 print:bg-transparent print:p-0 print:shadow-none">
              <RoleHeader role={role} />
              {role.summary ? (
                <p className="mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-ink/85 print:mt-1.5 print:max-w-none print:text-[0.8rem] print:leading-snug">
                  {role.summary}
                </p>
              ) : null}
              {role.highlights && role.highlights.length > 0 ? (
                <HighlightList items={role.highlights} />
              ) : null}
              {role.technologies ? (
                <TechPills technologies={role.technologies} />
              ) : null}
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}

function roleLogoClassName(roleId: string) {
  const shared = "mt-0.5 w-auto shrink-0 object-contain object-left";

  if (roleId === "pi-brand") {
    return `${shared} h-12 max-w-[9.5rem] print:mt-0 print:h-9 print:max-w-[7.5rem]`;
  }

  return `${shared} h-8 max-w-[8.5rem] print:mt-0 print:h-6 print:max-w-[6.5rem]`;
}

function RoleHeader({ role }: { role: CvRole }) {
  return (
    <div className="flex items-start gap-4 print:gap-3">
      {role.logoSrc ? (
        <CompanyLogo
          src={role.logoSrc}
          alt=""
          className={roleLogoClassName(role.id)}
        />
      ) : null}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-xl font-semibold text-ink print:text-sm">{role.company}</h3>
          <EmploymentBadge type={role.employmentType} />
        </div>
        {role.context ? (
          <p className="mt-1 text-xs uppercase tracking-wide text-muted">
            {role.context}
          </p>
        ) : null}
        <p className="mt-1 text-sm text-ink/80 print:mt-0.5 print:text-xs">{role.title}</p>
      </div>
      <time className="shrink-0 text-sm text-muted print:text-xs">{role.dateRange}</time>
    </div>
  );
}

function HighlightList({
  items,
  className = "mt-5 print:mt-1.5",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul
      className={`space-y-2 text-[0.95rem] leading-relaxed text-ink/90 print:space-y-0.5 print:text-[0.75rem] print:leading-snug ${className}`}
    >
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
