"use client";

import PreOrderFormPrivatePolicyHeader from "./Header";
import PreOrderFormPrivatePolicyTerms from "./Terms";

export default function PreOrderFormPrivatePolicyContainer() {
  return (
    <details className="pre-order-inquiry-policy">
      <PreOrderFormPrivatePolicyHeader />
      <PreOrderFormPrivatePolicyTerms />
    </details>
  );
}
