"use client";

export const downloadCvClassName =
  "no-print inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function DownloadCvButton() {
  function handleDownload() {
    window.print();
  }

  return (
    <button type="button" onClick={handleDownload} className={downloadCvClassName}>
      <DownloadIcon />
      Download CV
    </button>
  );
}

export function DownloadIcon() {
  return (
    <svg
      aria-hidden
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
      />
    </svg>
  );
}
