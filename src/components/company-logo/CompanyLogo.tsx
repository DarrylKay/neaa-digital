interface CompanyLogoProps {
  src: string;
  alt: string;
  className?: string;
}

export function CompanyLogo({ src, alt, className }: CompanyLogoProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className ?? "h-8 w-auto max-w-[9.5rem] object-contain"}
    />
  );
}
