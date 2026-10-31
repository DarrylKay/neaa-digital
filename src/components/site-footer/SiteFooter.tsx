import { profile } from "@/content";

export function SiteFooter() {
  const { company } = profile;

  return (
    <footer className="no-print mt-auto border-t border-border bg-paper">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          {company.legalName} · Company No. {company.companyNumber} · VAT No.{" "}
          {company.vatNumber} · {company.registeredIn}
        </p>
        <p>
          © {company.copyrightYear} {company.legalName}
        </p>
      </div>
    </footer>
  );
}
