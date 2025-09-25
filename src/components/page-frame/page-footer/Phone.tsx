"use client";

import { useEffect, useState } from "react";

export default function PageFooterPhone({ locale }: { locale: string | undefined }) {
  const standardTime = "2025-09-25T06:32:00Z"; // KST 2025-09-25 18:00
  const [time, setTime] = useState(new Date());
  const [activePhone, setActivePhone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !locale) {
      setActivePhone(prev => (prev !== false ? false : prev));
      return;
    }

    if (time >= new Date(standardTime)) {
      setActivePhone(prev => (prev !== false ? false : prev));
      return;
    }

    const timer = setInterval(() => setTime(new Date()), 1000);
    const update = locale === "ko" && time < new Date(standardTime);

    setActivePhone(prev => (prev !== update ? update : prev));

    return () => clearInterval(timer);
  }, [locale, time]);

  return (
    activePhone && (
      <dl className="address-info-item">
        <dt>TEL</dt>
        <dd>
          <a href="tel:070-8657-0073">070-8657-0073</a>
        </dd>
      </dl>
    )
  );
}
