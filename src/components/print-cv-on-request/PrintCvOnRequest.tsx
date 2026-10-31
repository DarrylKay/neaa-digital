"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

export function PrintCvOnRequest() {
  const searchParams = useSearchParams();
  const hasPrinted = useRef(false);

  useEffect(() => {
    if (hasPrinted.current) {
      return;
    }

    if (searchParams.get("download") !== "1") {
      return;
    }

    hasPrinted.current = true;
    window.print();
  }, [searchParams]);

  return null;
}
