import { cv, profile } from "@/content";
import { ExperienceSection } from "@/components/experience-section";
import { SkillGroups } from "@/components/skill-groups";

export function CvDocument() {
  return (
    <article id="cv-document" className="cv-document mx-auto max-w-none">
      <header className="text-center print:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted print:text-[0.65rem]">
          Curriculum vitae
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl print:mt-1 print:text-2xl">
          {profile.name}
        </h1>
        <p className="mt-2 text-lg text-ink/80 print:mt-0.5 print:text-sm">{profile.title}</p>
        <p className="mt-2 text-sm font-medium text-accent print:mt-1 print:text-xs">{cv.focus}</p>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-accent print:mt-1 print:justify-start print:text-xs print:text-ink">
          <li>
            <a href={`mailto:${profile.email}`} className="hover:underline">
              {profile.email}
            </a>
          </li>
          <li aria-hidden className="text-muted">
            ·
          </li>
          <li>{profile.location}</li>
        </ul>
        <div className="mx-auto mt-8 max-w-2xl space-y-4 text-center text-[0.95rem] leading-relaxed text-ink/85 print:mx-0 print:mt-3 print:max-w-none print:space-y-2 print:text-left print:text-[0.8rem] print:leading-snug">
          {cv.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </header>

      <div className="mt-16 print:mt-5">
        <ExperienceSection sectionLabel={cv.sectionLabel} roles={cv.roles} />
        <SkillGroups
          sectionLabel={cv.skillsSectionLabel}
          groups={cv.skillGroups}
        />
      </div>
    </article>
  );
}
