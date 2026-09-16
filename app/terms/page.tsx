import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms governing use of the FP Global website.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      lede="The terms on which you may use this website and the material published on it."
      image="/assets/images/fpginvestment_banner_img2.jpg"
      updated="1 September 2026"
      sections={[
        { heading: "Acceptance of terms", body: "Placeholder. State that use of the site constitutes acceptance of these terms." },
        { heading: "Use of the website", body: "Placeholder. Set out permitted and prohibited uses of the site and its content." },
        { heading: "Intellectual property", body: "Placeholder. Confirm ownership of marks, text, imagery and the licence granted to visitors." },
        { heading: "No offer or advice", body: "Placeholder. Clarify that content is informational and does not constitute an offer or professional advice." },
        { heading: "Limitation of liability", body: "Placeholder. Set out the limits of liability for use of the site and reliance on its content." },
        { heading: "Governing law", body: "Placeholder. Specify governing law and the jurisdiction for disputes." },
      ]}
    />
  );
}
