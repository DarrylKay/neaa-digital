import { Chip } from "@/components/chip";
import type { TechPillsProps } from "./types";

export function TechPills({ technologies }: TechPillsProps) {
  if (technologies.length === 0) {
    return null;
  }

  return (
    <>
      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 print:hidden">
        <p className="text-xs font-semibold text-muted">Tech used:</p>
        <ul className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li key={tech}>
              <Chip>{tech}</Chip>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-1.5 hidden text-[0.75rem] leading-snug text-muted print:block">
        <span className="font-semibold text-ink">Tech: </span>
        {technologies.join(", ")}
      </p>
    </>
  );
}
