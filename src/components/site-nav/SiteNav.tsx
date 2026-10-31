"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "./nav-items";

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main">
      <ul className="flex items-center gap-8">
        {NAV_ITEMS.map((item) => {
          const isCurrent = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`text-sm font-medium underline decoration-2 underline-offset-8 transition-colors ${
                  isCurrent
                    ? "text-ink decoration-accent"
                    : "text-muted decoration-transparent hover:text-accent hover:decoration-accent"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
