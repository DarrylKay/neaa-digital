"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DownloadCvButton,
  DownloadIcon,
  downloadCvClassName,
} from "@/components/download-cv-button";

export function HeaderDownloadCv() {
  const pathname = usePathname();

  if (pathname === "/cv") {
    return <DownloadCvButton />;
  }

  return (
    <Link href="/cv?download=1" className={downloadCvClassName}>
      <DownloadIcon />
      Download CV
      <ArrowIcon />
    </Link>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}
