interface ServiceIconProps {
  name: string;
}

export function ServiceIcon({ name }: ServiceIconProps) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-accent">
      <Icon name={name} />
    </span>
  );
}

function Icon({ name }: ServiceIconProps) {
  const shared = {
    "aria-hidden": true as const,
    className: "h-5 w-5",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.75,
  };

  if (name === "Mobile applications") {
    return (
      <svg {...shared}>
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path strokeLinecap="round" d="M11 18h2" />
      </svg>
    );
  }

  if (name === "Web platforms") {
    return (
      <svg {...shared}>
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16M12 4c2.2 2.4 3.3 5.2 3.3 8S14.2 17.6 12 20c-2.2-2.4-3.3-5.2-3.3-8S9.8 6.4 12 4z" />
      </svg>
    );
  }

  if (name === "Backend and APIs") {
    return (
      <svg {...shared}>
        <ellipse cx="12" cy="6" rx="7" ry="2.5" />
        <path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
        <path d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
      </svg>
    );
  }

  return (
    <svg {...shared}>
      <path strokeLinejoin="round" d="M4 20h16M6 20V6.5A1.5 1.5 0 0 1 7.5 5h5A1.5 1.5 0 0 1 14 6.5V20" />
      <path strokeLinejoin="round" d="M14 20V10h4.5a.5.5 0 0 1 .5.5V20" />
      <path strokeLinecap="round" d="M8.5 9h2M8.5 12.5h2M8.5 16h2M16.2 13.5h1.3M16.2 16.5h1.3" />
    </svg>
  );
}
