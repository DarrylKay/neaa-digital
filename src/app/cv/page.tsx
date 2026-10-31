import type { Metadata } from "next";
import { Suspense } from "react";
import { CvDocument } from "@/components/cv-document";
import { PrintCvOnRequest } from "@/components/print-cv-on-request";
import { SiteShell } from "@/components/site-shell";
import { profile } from "@/content";

export const metadata: Metadata = {
  title: "CV",
  description: `Curriculum vitae for ${profile.name}, ${profile.title}.`,
};

export default function CvPage() {
  return (
    <SiteShell>
      <Suspense fallback={null}>
        <PrintCvOnRequest />
      </Suspense>
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-8 sm:py-14 print:m-0 print:max-w-none print:p-0">
        <CvDocument />
      </div>
    </SiteShell>
  );
}
