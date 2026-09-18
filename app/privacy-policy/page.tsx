import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How FP Global collects, uses and protects the personal information shared through this website, our enquiry forms and our recruitment process.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      lede="How we collect, use and protect the information you share with us."
      image="/assets/images/fpginvestment_banner_img1-web.webp"
      updated="16 September 2026"
      intro={`${site.name} is a hospitality development and management company based in ${site.address.line1}, ${site.address.line2}. This policy explains what personal information we collect through fpginvestment, why we collect it, how long we keep it and what you can ask us to do with it.`}
      sections={[
        {
          heading: "Who we are",
          body: [
            `${site.name} develops, repositions and operates hospitality assets, including Hyatt Regency Lahore. We act as the data controller for the information described in this policy — that is, we decide why and how it is used.`,
            `You can reach us about anything in this policy by email at ${site.email}, by phone on ${site.phone}, or by post at ${site.address.line1}, ${site.address.line2}.`,
          ],
        },
        {
          heading: "Information we collect",
          body: [
            "We only ask for what we need to answer you properly. Depending on how you use the site, that may include:",
          ],
          list: [
            "Enquiry details — your name, email address, organisation, phone number, enquiry type and the message you write when you use a contact, project or service enquiry form.",
            "Recruitment details — your name, email address, phone number, the role you are applying for, your covering message and any CV or supporting document you upload through our careers pages.",
            "Correspondence — emails, calls and messages exchanged with our development, operations or commercial teams, together with any notes we make about your requirements.",
            "Technical and usage data — IP address, browser and device type, referring page and the pages you view, collected automatically so that we can keep the site secure and understand which content is useful.",
          ],
        },
        {
          heading: "Why we use it",
          body: [
            "We use your information for a limited set of purposes, each with a clear basis:",
          ],
          list: [
            "To respond to your enquiry and to discuss a project, investment, partnership or booking with you. This is necessary to take steps at your request before entering into a contract.",
            "To assess job applications, arrange interviews and, where appropriate, keep you in mind for future openings. Where we retain an application beyond a live vacancy, we do so with your consent.",
            "To provide and administer our services under an agreement with you or the organisation you represent.",
            "To keep the website secure, diagnose faults and improve its content and structure. This rests on our legitimate interest in running a functioning, safe website.",
            "To meet legal, regulatory, tax and accounting obligations that apply to us in Pakistan and in any other jurisdiction where we operate.",
          ],
        },
        {
          heading: "Marketing communications",
          body: [
            "We do not sell your details, and we do not add you to a mailing list simply because you sent us an enquiry.",
            "If we invite you to receive project updates or news about our properties, we will ask you first, and every message will carry a way to stop receiving them. Withdrawing consent does not affect messages already sent, and it will not stop us replying to an enquiry you have made.",
          ],
        },
        {
          heading: "Sharing and disclosure",
          body: [
            "We share personal information only where there is a reason to, and only with recipients bound to protect it:",
          ],
          list: [
            "Service providers who host our website, deliver our email, or help us manage enquiries and applications, acting on our instructions and nothing more.",
            "Hotel brand partners and operators, where your enquiry concerns a property managed under their brand and cannot be answered without them.",
            "Professional advisers — lawyers, auditors, accountants and insurers — where they need the information to advise us.",
            "Authorities, regulators or courts where we are required by law to disclose, or where disclosure is necessary to establish or defend a legal claim.",
            "A buyer or successor entity, if our business or part of it is reorganised, transferred or acquired.",
          ],
        },
        {
          heading: "International transfers",
          body: [
            "Some of the providers we rely on — website hosting, email and analytics among them — process data on servers outside Pakistan.",
            "Where information is transferred abroad, we take reasonable steps to ensure it continues to be protected to a standard consistent with this policy, including by contract with the provider concerned.",
          ],
        },
        {
          heading: "How long we keep it",
          body: [
            "We do not keep personal information for longer than we need it.",
          ],
          list: [
            "Enquiries that do not proceed: up to 24 months from your last contact with us, so that we have context if you come back to us.",
            "Client and project records: for the life of the engagement and then for as long as required to meet contractual, tax and statutory record-keeping obligations.",
            "Unsuccessful job applications: up to 12 months after the recruitment process closes, unless you ask us to remove them sooner or agree to a longer period.",
            "Website technical logs: typically no more than 12 months.",
          ],
        },
        {
          heading: "How we protect it",
          body: [
            "We apply organisational and technical measures appropriate to the sensitivity of the information we hold — restricted access on a need-to-know basis, encrypted connections to this website, and contractual obligations on the providers who process data for us.",
            "No method of transmission over the internet is completely secure, so please do not send us sensitive personal information, identity documents or financial details through a website form. If we need them, we will tell you how to send them safely.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "You can ask us to do any of the following in relation to your own information:",
          ],
          list: [
            "Give you a copy of the personal information we hold about you.",
            "Correct anything that is inaccurate or incomplete.",
            "Delete information we no longer have a reason to keep.",
            "Restrict or object to a particular use, including any use based on our legitimate interests.",
            "Withdraw consent you have previously given, at any time.",
          ],
        },
        {
          heading: "Cookies and analytics",
          body: [
            "This website uses a small number of cookies and similar technologies. Some are strictly necessary to serve pages and remember your display preferences; others help us understand, in aggregate, which pages are read and where visitors arrive from.",
            "You can block or delete cookies through your browser settings. Blocking the strictly necessary ones may stop parts of the site working as intended.",
          ],
        },
        {
          heading: "Children",
          body: [
            "This website is intended for a professional audience and is not directed at children. We do not knowingly collect personal information from anyone under 18. If you believe a child has provided us with information, contact us and we will delete it.",
          ],
        },
        {
          heading: "Changes to this policy",
          body: [
            "We review this policy periodically and will update it when our practices, our services or the law change. The date at the top of this page always shows when it was last revised.",
            "Where a change materially affects how we use information you have already given us, we will take reasonable steps to tell you directly.",
          ],
        },
        {
          heading: "Contact us",
          body: [
            `To exercise any of the rights above, to ask a question about this policy, or to raise a concern about how we have handled your information, email ${site.email} or write to us at ${site.address.line1}, ${site.address.line2}.`,
            "We aim to acknowledge every request within five working days and to resolve it within 30 days. If you are not satisfied with our response, you are entitled to complain to the data protection authority in your country.",
          ],
        },
      ]}
      footnote={`This policy describes ${site.name}'s current practice and is provided for information. It is not legal advice, and it does not form part of any contract between us.`}
    />
  );
}
