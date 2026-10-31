import Image from "next/image";
import Link from "next/link";
import { CompanyLogo } from "@/components/company-logo";
import { SectionLabel } from "@/components/section-label";
import { SiteShell } from "@/components/site-shell";
import { profile } from "@/content";
import { ServiceIcon } from "./service-icon";

export default function HomePage() {
  return (
    <SiteShell>
      <section className="mx-auto grid w-full max-w-5xl gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10 lg:py-10">
        <div>
          <SectionLabel as="p">{profile.eyebrow}</SectionLabel>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            {profile.headline}
            <span className="text-accent">.</span>
          </h1>
          <div className="mt-4 max-w-xl space-y-3 text-[0.98rem] leading-relaxed text-muted">
            {profile.homeIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <figure className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <Image
            src="/darryl-kay-portrait.jpg"
            alt={profile.portraitAlt}
            width={960}
            height={720}
            priority
            className="aspect-[4/5] w-full rounded-3xl border border-border object-cover object-[center_42%] shadow-md shadow-ink/8"
          />
        </figure>
      </section>

      <section
        aria-labelledby="services-heading"
        className="border-y border-border bg-surface-muted"
      >
        <h2 id="services-heading" className="sr-only">
          What I build
        </h2>
        <ul className="mx-auto grid max-w-5xl gap-3 px-6 py-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {profile.services.map((service) => (
            <li
              key={service.title}
              className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-4"
            >
              <ServiceIcon name={service.title} />
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-ink">{service.title}</h3>
                <p className="mt-0.5 text-xs leading-snug text-muted">{service.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="companies-heading"
        className="mx-auto w-full max-w-5xl px-6 py-6 sm:px-8"
      >
        <SectionLabel id="companies-heading">
          Some companies I&apos;ve worked with
        </SectionLabel>
        <ul className="mt-5 grid grid-cols-2 items-center gap-x-6 gap-y-6 lg:flex lg:flex-nowrap lg:justify-between lg:gap-0">
          {profile.featuredCompanies.map((company, index) => (
            <li
              key={company.name}
              className={
                index === 0
                  ? "flex items-center justify-center lg:min-w-0 lg:flex-1"
                  : "flex items-center justify-center lg:min-w-0 lg:flex-1 lg:border-l lg:border-border"
              }
            >
              <Link
                href={company.href}
                className="block opacity-80 transition-opacity hover:opacity-100"
              >
                <CompanyLogo
                  src={company.logoSrc}
                  alt={company.logoAlt}
                  className="h-7 w-auto max-w-[7.5rem] object-contain"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SiteShell>
  );
}
