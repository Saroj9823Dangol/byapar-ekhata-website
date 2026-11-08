import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & conditions",
  description:
    "The terms that govern your use of Byapar eKhata, including subscriptions, billing, refunds, the referral programme and your responsibilities.",
};

const sections: LegalSection[] = [
  {
    id: "agreement",
    title: "Agreement",
    body: (
      <>
        <p>
          These terms govern your use of the Byapar eKhata mobile applications, web application and
          website (together, the &ldquo;Service&rdquo;), provided by {site.name}. By creating an
          account or using the Service, you agree to these terms. If you do not agree, do not use the
          Service.
        </p>
        <p>
          Our <Link href="/privacy">privacy policy</Link> describes how we handle your information
          and forms part of these terms.
        </p>
      </>
    ),
  },
  {
    id: "accounts",
    title: "Accounts and eligibility",
    body: (
      <>
        <ul>
          <li>You must be at least 18 years old and able to enter into a binding contract.</li>
          <li>
            You sign in with a mobile number and a one-time code. You are responsible for keeping
            access to that number secure, and for everything done through your account.
          </li>
          <li>
            Information you give us must be accurate. If you register on behalf of a business, you
            confirm you are authorised to act for it.
          </li>
          <li>
            Tell us immediately if you believe your account has been accessed without your
            permission.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "service",
    title: "The Service and plan limits",
    body: (
      <>
        <p>
          Byapar eKhata records your business transactions and produces reports from them. Each plan
          carries limits — on the number of businesses, users, monthly transactions and features
          such as exports and SMS. These limits are shown on our{" "}
          <Link href="/pricing">pricing page</Link> and in the app.
        </p>
        <p>
          If you exceed the limits of your plan, we may ask you to upgrade, or restrict the features
          that exceed them. Limits apply per subscription and are not transferable between separate
          organisations.
        </p>
      </>
    ),
  },
  {
    id: "subscriptions",
    title: "Subscriptions, billing and renewal",
    body: (
      <>
        <ul>
          <li>
            Paid plans are billed in Nepali rupees, monthly or yearly, through payment providers such
            as eSewa, Khalti or Fonepay. Prices shown include applicable taxes unless stated
            otherwise.
          </li>
          <li>
            Subscriptions renew automatically at the end of each period unless you cancel before the
            renewal date. You can cancel at any time in the app.
          </li>
          <li>
            Paid plans begin with a 30-day trial unless otherwise stated. If you do not upgrade by
            the end of the trial, the account reverts to the free plan. Your data is not deleted
            because a trial ends.
          </li>
          <li>
            If we change the price of a plan, we will tell you before the change applies to you, and
            you may cancel before it takes effect.
          </li>
          <li>
            Where a payment fails, we may retry it or suspend paid features until it is settled.
            Access to your records is not removed as a result of a failed payment.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "refunds",
    title: "Refunds",
    body: (
      <>
        <p>
          Subscription fees are charged for a period you have already begun to use. We do not refund
          part of a billing period because you stopped using the Service or downgraded mid-period.
        </p>
        <p>We will refund a payment where:</p>
        <ul>
          <li>you were charged twice for the same period;</li>
          <li>you were charged after you had cancelled, and the charge was our error; or</li>
          <li>the Service was materially unavailable for a prolonged period through our fault.</li>
        </ul>
        <p>
          Where a refund is approved, it is returned through the original payment method. Refund
          requests should be sent to <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>{" "}
          with the payment reference. Nothing in this section limits any right you have that cannot
          be excluded by law.
        </p>
      </>
    ),
  },
  {
    id: "your-data",
    title: "Your data and your content",
    body: (
      <>
        <p>
          The business records you enter remain yours. You grant us the licence we need to host,
          process, back up and display that content solely in order to provide the Service to you.
        </p>
        <p>
          You are responsible for the accuracy and legality of what you record, for having the right
          to record it, and for complying with the tax, VAT and accounting obligations that apply to
          your business. Byapar eKhata is a record-keeping tool; it does not file anything with any
          authority on your behalf and it does not provide legal, tax or accounting advice.
        </p>
      </>
    ),
  },
  {
    id: "ip",
    title: "Our intellectual property",
    body: (
      <>
        <p>
          The Service, its software, design, text and trademarks are owned by us or our licensors.
          You receive a limited, non-exclusive, non-transferable right to use the Service for your
          business during your subscription. You may not copy, resell, reverse engineer or attempt to
          extract the source code of the Service, except as permitted by law.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>use the Service for anything unlawful, fraudulent or misleading;</li>
          <li>upload malware, or attempt to gain unauthorised access to the Service or other accounts;</li>
          <li>scrape, overload or interfere with the Service, or circumvent its plan limits or security;</li>
          <li>resell access to the Service without our written agreement;</li>
          <li>use the Service to send unsolicited messages or messages that breach applicable law.</li>
        </ul>
      </>
    ),
  },
  {
    id: "referral",
    title: "Referral and marketer programme",
    body: (
      <>
        <p>
          Commission is earned on subscription payments made by businesses that sign up through your
          referral link, at the rate published in the app at the time of payment. Commission is
          credited after the payment has settled and any refund window has passed. Payouts are made
          once your wallet reaches the minimum threshold, to the payout method you have registered.
        </p>
        <p>
          Self-referrals, duplicate accounts, fictitious businesses and any attempt to manipulate
          attribution do not qualify for commission. We may adjust or reverse commission that was
          credited on such referrals, and remove an account from the programme.
        </p>
        <p>
          We may change commission rates, tiers and thresholds. A change affects payments made after
          it takes effect; rates already earned are not reduced retrospectively.
        </p>
      </>
    ),
  },
  {
    id: "availability",
    title: "Availability, sync and backups",
    body: (
      <>
        <p>
          We aim to keep the Service available and we work to fix problems quickly, but we do not
          guarantee uninterrupted service. Maintenance, network conditions and third-party failures
          will occasionally interrupt it.
        </p>
        <p>
          Byapar eKhata is built to work offline, and changes made offline are uploaded when a
          connection returns. Where the same record is edited on two devices, the most recent change
          wins. You should keep the app installed and connected periodically so that offline entries
          are synced, and use the backup features available on your plan.
        </p>
      </>
    ),
  },
  {
    id: "third-parties",
    title: "Third-party services",
    body: (
      <>
        <p>
          Some features depend on third parties — payment providers, SMS and email delivery, push
          notifications and cloud hosting. Their services are governed by their own terms and
          policies, and we are not responsible for their acts or omissions. We choose providers
          carefully and will tell you if a material dependency changes.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Disclaimers and limitation of liability",
    body: (
      <>
        <p>
          The Service is provided on an &ldquo;as is&rdquo; basis. To the extent permitted by law, we
          exclude implied warranties, including fitness for a particular purpose and
          non-infringement. We do not warrant that reports produced by the Service will satisfy any
          particular authority, or that the Service is a substitute for professional advice.
        </p>
        <p>
          To the extent permitted by law, our total liability arising out of or relating to the
          Service is limited to the fees you paid us in the twelve months before the event giving
          rise to the claim. We are not liable for indirect or consequential loss, loss of profit,
          loss of business or loss of data that you failed to back up.
        </p>
        <p>
          Nothing in these terms limits liability that cannot lawfully be limited.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "Suspension and termination",
    body: (
      <>
        <p>
          You may stop using the Service and delete your account at any time. We may suspend or
          terminate an account that breaches these terms, that is used unlawfully, or where we are
          required to by law. Where we terminate for a reason other than your breach, we will
          provide a reasonable opportunity to export your data.
        </p>
        <p>
          On termination, your right to use the Service ends. Sections that by their nature should
          survive — including those on intellectual property, liability and governing law — continue
          to apply.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <>
        <p>
          We may update these terms as the Service or the law changes. Where a change is material, we
          will notify you before it takes effect. Continuing to use the Service after that date means
          you accept the updated terms.
        </p>
      </>
    ),
  },
  {
    id: "law",
    title: "Governing law and disputes",
    body: (
      <>
        <p>
          These terms are governed by the laws of Nepal. The courts of Kathmandu have exclusive
          jurisdiction over any dispute arising from them, unless the law requires otherwise. Before
          starting formal proceedings, we ask that you write to us so we can try to resolve the
          matter directly.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <>
        <p>Questions about these terms:</p>
        <p>
          {site.name}
          <br />
          {site.address}
          <br />
          Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          <br />
          Phone: {site.phone}
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & conditions"
      updated="1 October 2026"
      summary={
        <p>
          These terms set out what you can expect from Byapar eKhata and what we expect from you.
          They cover accounts, plans and payment, refunds, the referral programme, and the limits of
          our responsibility.
        </p>
      }
      reviewNote={
        <>
          <strong className="text-ink">Note for the site owner:</strong> these terms are a working
          draft aligned with how the product is actually built and billed. Have them reviewed by a
          Nepali lawyer before launch, and confirm the registered company name, plan pricing and
          refund position.
        </>
      }
      sections={sections}
    />
  );
}
