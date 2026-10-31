import Image from "next/image";
import Link from "next/link";
import { HeaderDownloadCv } from "@/components/header-download-cv";
import { MobileMenu, SiteNav } from "@/components/site-nav";

export function SiteHeader() {
  return (
    <header className="no-print border-b border-border bg-paper">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-80">
          <Image
            src="/neaa-digital-logo.png"
            alt="NEAA Digital"
            width={538}
            height={162}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <SiteNav />
          <HeaderDownloadCv />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
