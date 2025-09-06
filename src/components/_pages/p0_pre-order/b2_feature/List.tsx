"use client";

import useLocale from "@/hooks/useLocale";
import { useMemo } from "react";

export default function PagePreOrderFeatureList() {
  const { locale } = useLocale();
  const RENDER_KEY = `homepage/${locale}/pre-order/feature/list`;

  const list = useMemo(
    () =>
      Array(6)
        .fill(null)
        .map((_, i) => ({
          key: `${RENDER_KEY}/${i + 1}`,
          img: `/renew/pre-order/feature/desc-${i + 1}-${locale}.png`,
        })),
    [RENDER_KEY, locale],
  );

  return (
    <div className="page-pre-order-feature-list-container">
      <ul>
        {list.map(d => (
          <li key={d.key}>
            <figure>
              <picture>
                <img src={d.img} alt="Feature" />
              </picture>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
