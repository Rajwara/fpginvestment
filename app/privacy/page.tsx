import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How FP Global collects, uses and protects personal data.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      lede="How we collect, use and protect the information you share with us."
      updated="1 September 2026"
      sections={[
        { heading: "Information we collect", body: "Placeholder. Describe the personal data collected through enquiry forms, job applications and website analytics." },
        { heading: "How we use it", body: "Placeholder. Describe the purposes for processing — responding to enquiries, assessing applications and improving the site." },
        { heading: "Sharing and disclosure", body: "Placeholder. Describe any processors, brand partners or authorities with whom data may be shared." },
        { heading: "Data retention", body: "Placeholder. State how long each category of data is retained and the basis for that period." },
        { heading: "Your rights", body: "Placeholder. Describe access, correction, deletion and objection rights, and how to exercise them." },
        { heading: "Contact", body: "Placeholder. Give the contact point for privacy questions and complaints." },
      ]}
    />
  );
}
