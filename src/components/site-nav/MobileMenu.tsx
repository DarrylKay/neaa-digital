"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderDownloadCv } from "@/components/header-download-cv";
import { NAV_ITEMS } from "./nav-items";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
      wasOpenRef.current = true;
      return;
    }

    if (wasOpenRef.current) {
      menuButtonRef.current?.focus();
      wasOpenRef.current = false;
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusable = [
        ...dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="md:hidden">
      <button
        ref={menuButtonRef}
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        aria-expanded={isOpen}
        aria-controls="site-menu"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
        <span className="sr-only">Open menu</span>
      </button>

      <div ref={dialogRef} inert={!isOpen ? true : undefined} aria-hidden={!isOpen}>
        <button
          type="button"
          className={`fixed inset-0 z-40 bg-ink/40 transition-opacity duration-200 ${
            isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-label="Close menu"
          tabIndex={-1}
          onClick={closeMenu}
        />
        <div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`fixed inset-y-0 left-0 z-50 flex w-[min(18rem,calc(100vw-3rem))] flex-col bg-paper px-6 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-xl shadow-ink/10 transition-transform duration-200 ease-out ${
            isOpen ? "translate-x-0" : "pointer-events-none -translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="shrink-0 transition-opacity hover:opacity-80"
              onClick={() => {
                if (pathname === "/") {
                  closeMenu();
                }
              }}
            >
              <Image
                src="/neaa-digital-logo.png"
                alt="NEAA Digital"
                width={538}
                height={162}
                className="h-8 w-auto"
              />
            </Link>
            <button
              ref={closeButtonRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              onClick={closeMenu}
            >
              <CloseIcon />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <nav aria-label="Main" className="mt-4">
            <ul>
              {NAV_ITEMS.map((item) => {
                const isCurrent = pathname === item.href;

                return (
                  <li key={item.href} className="border-b border-border">
                    <Link
                      href={item.href}
                      aria-current={isCurrent ? "page" : undefined}
                      className={`block py-4 text-base font-medium transition-colors ${
                        isCurrent ? "text-accent" : "text-ink hover:text-accent"
                      }`}
                      onClick={() => {
                        if (isCurrent) {
                          closeMenu();
                        }
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div
            className="mt-8"
            onClick={(event) => {
              if (event.target instanceof Element && event.target.closest("button")) {
                closeMenu();
              }
            }}
          >
            <HeaderDownloadCv />
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuIcon() {
  return (
    <svg
      aria-hidden
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
