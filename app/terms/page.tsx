import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms on which you may use the FP Global website and the material published on it.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      lede="The terms on which you may use this website and the material published on it."
      image="/assets/images/fpginvestment_banner_img2.jpg"
      updated="16 September 2026"
      intro={`These terms govern your use of fpginvestment, operated by ${site.name} from ${site.address.line1}, ${site.address.line2}. Please read them before you rely on anything published here. If you do not accept them, please stop using the site.`}
      sections={[
        {
          heading: "Acceptance of these terms",
          body: [
            "By accessing, browsing or submitting an enquiry through this website you confirm that you accept these terms and agree to comply with them.",
            "We may revise these terms at any time by updating this page. The version in force is the one published here when you use the site, and the date above shows when it last changed. Continuing to use the site after a change means you accept the revised terms.",
          ],
        },
        {
          heading: "About us and this site",
          body: [
            `${site.name} is a hospitality development and management company. Through this site we publish information about our services, our people, the assets we develop and operate — including Hyatt Regency Lahore — and the roles we are recruiting for.`,
            "The site is provided free of charge. We may change, suspend or withdraw all or part of it, temporarily or permanently, without notice.",
          ],
        },
        {
          heading: "Permitted use",
          body: [
            "You may view, download and print pages from this site for your own reference or for a legitimate business enquiry with us. You must not remove or alter any copyright, trade mark or other proprietary notice.",
            "You must not:",
          ],
          list: [
            "Use the site for any unlawful, fraudulent or misleading purpose, or in breach of any applicable law or regulation.",
            "Reproduce, republish, licence, sell or commercially exploit any part of the site without our written permission.",
            "Scrape, harvest or systematically extract content, or use automated means to access the site in a way that imposes an unreasonable load on it.",
            "Introduce any virus, malicious code or other material that is harmful or technologically damaging.",
            "Attempt to gain unauthorised access to the site, the server on which it is stored, or any connected system or network.",
            "Submit another person's personal information, or a document you do not have the right to share, through any form on this site.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            `All content on this site — text, photography, renderings, illustrations, layout, graphics and code — is owned by ${site.name} or licensed to us, and is protected by copyright and other intellectual property laws.`,
            "Third-party brands, hotel marks and partner logos shown on this site remain the property of their respective owners and are used to identify the relationships and assets described. Nothing here grants you a licence to use them.",
          ],
        },
        {
          heading: "No offer, no investment advice",
          body: [
            "The information on this site is published for general information about our business and capabilities. It is not an offer, an invitation, a recommendation or a solicitation to buy, sell or subscribe for any security, unit, property interest or investment, in any jurisdiction.",
            "Nothing on this site constitutes investment, financial, legal, tax or professional advice, and it does not take account of your particular circumstances or objectives. Before acting on anything you read here, take advice from a suitably qualified adviser.",
            "Descriptions of past projects, mandates and asset performance are a record of what has happened. They are not a promise, projection or guarantee of any future result.",
          ],
        },
        {
          heading: "Project information and imagery",
          body: [
            "Renderings, plans, floor layouts, amenity lists, specifications, room counts, timelines and opening dates shown on this site are indicative and were prepared for illustrative purposes.",
            "Developments evolve. Design, materials, finishes, facilities, dimensions and programme may change during delivery without notice, and images may include artistic impressions, furnishings or landscaping that do not form part of any contract.",
            "Anything binding will be set out in a signed written agreement between you and us. In the event of a conflict, that agreement prevails over anything published here.",
          ],
        },
        {
          heading: "Enquiries and applications",
          body: [
            "Submitting an enquiry, a project brief or a job application through this site does not create a contract, a retainer, an engagement or an employment relationship.",
            "We aim to respond to enquiries within one business day, but we cannot guarantee a response or a particular outcome, and we may decline to act on any enquiry.",
            "You are responsible for making sure that what you submit is accurate, that you are entitled to send it, and that it does not contain confidential information belonging to someone else. Please do not send us financial details, identity documents or anything you consider sensitive through a website form.",
          ],
        },
        {
          heading: "Links to other sites",
          body: [
            "Where this site links to a third-party website, brand page or social media profile, the link is provided for convenience only.",
            "We do not control those sites, we do not endorse their content, and we accept no responsibility for them or for any loss arising from your use of them. Your use of a linked site is governed by that site's own terms.",
          ],
        },
        {
          heading: "Availability and accuracy",
          body: [
            "We take reasonable care to keep this site accurate and available, but we do not warrant that it will be uninterrupted, error-free, secure, or free of viruses.",
            "Content may become out of date, and we are under no obligation to update it. You are responsible for configuring your own device and software to access the site safely.",
          ],
        },
        {
          heading: "Limitation of liability",
          body: [
            "Nothing in these terms excludes or limits our liability for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation, or for any liability that cannot lawfully be excluded.",
            "Subject to that, we exclude all conditions, warranties and representations that might otherwise be implied, and we will not be liable for any loss of profit, revenue, business, goodwill, opportunity, data or anticipated saving, or for any indirect or consequential loss, arising from your use of, or inability to use, this site or from reliance on its content.",
          ],
        },
        {
          heading: "Privacy",
          body: [
            "Any personal information you provide through this site is handled in accordance with our Privacy Policy, which forms part of these terms and explains what we collect, why, how long we keep it and what you can ask us to do with it.",
          ],
        },
        {
          heading: "Governing law and contact",
          body: [
            "These terms and any dispute arising out of them or out of your use of this site are governed by the laws of the Islamic Republic of Pakistan, and the courts of Lahore have exclusive jurisdiction.",
            `If you have a question about these terms, email ${site.email}, call ${site.phone}, or write to us at ${site.address.line1}, ${site.address.line2}.`,
          ],
        },
      ]}
      footnote={`These terms set out the basis on which ${site.name} makes this website available. They are provided for information and do not constitute legal advice.`}
    />
  );
}
