import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Byapar eKhata collects, uses, stores and protects your personal and business information, and the choices available to you.",
};

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          {site.name} (&ldquo;Byapar eKhata&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides
          accounting, billing and bookkeeping software for businesses in Nepal. We are the data
          controller for the personal information described in this policy.
        </p>
        <p>
          This policy covers our mobile applications, our web application, and this website. It does
          not cover third-party services you reach from our product, such as your bank or a payment
          wallet, which have their own policies.
        </p>
        <p>
          If you have questions about this policy or want to exercise a right described below,
          contact us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or at {site.address}.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "Information we collect",
    body: (
      <>
        <h3>Account information</h3>
        <p>
          Your mobile number, which is used to sign in; your name; your preferred language; your
          email address if you choose to provide one; and records of your sign-ins and devices.
        </p>

        <h3>Business and financial records you enter</h3>
        <p>
          The information you put into the product: business names and addresses, PAN and VAT
          numbers, customer and supplier details, products and prices, invoices, purchases, payments,
          expenses, income, cash and bank entries, and the resulting ledgers and reports. This
          information belongs to you. We process it to provide the service to you.
        </p>

        <h3>Payment information</h3>
        <p>
          When you buy a subscription, the payment is handled by a licensed payment provider (for
          example eSewa, Khalti or Fonepay). We receive a reference, the amount, the status and the
          plan purchased. We do not receive or store your full wallet credentials or bank details.
        </p>

        <h3>Device, technical and usage information</h3>
        <p>
          Device model, operating system version, app version, language, time zone, IP address,
          crash and diagnostic logs, and information about how features are used. We also store push
          notification tokens so we can deliver notifications to your devices.
        </p>

        <h3>Communications</h3>
        <p>
          Messages you send to our support team, and records of the reminders and notifications the
          system sends on your behalf, including delivery status. Where you use SMS features, we
          store the content of messages sent through the service and their delivery outcome.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    title: "How we use your information",
    body: (
      <>
        <ul>
          <li>To create and secure your account, and to verify you when you sign in.</li>
          <li>To provide the service: storing your records, generating reports, syncing across your devices.</li>
          <li>To send reminders and notifications that you have configured, on your instruction.</li>
          <li>To process subscription payments and manage your plan.</li>
          <li>To provide support and respond to your requests.</li>
          <li>To keep the service secure, detect abuse and prevent fraud.</li>
          <li>To operate the referral and marketer programme, including crediting commission.</li>
          <li>To understand how the product is used so we can improve it.</li>
          <li>To meet legal, tax and accounting obligations that apply to us.</li>
        </ul>
        <p>
          We do not sell your personal information. We do not use the contents of your business
          records for advertising, and we do not train advertising models on them.
        </p>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "Basis for processing",
    body: (
      <>
        <p>
          We process your information because it is necessary to provide the service you have asked
          for, because we have a legitimate interest in operating and securing the service, because
          you have given consent (for example, for SMS reminders or marketing messages), or because
          the law requires it. Where processing relies on consent, you may withdraw it at any time
          without affecting the service you have already received.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who we share information with",
    body: (
      <>
        <p>
          We share information only where it is needed, and only with parties who are bound to
          protect it.
        </p>
        <table>
          <thead>
            <tr>
              <th>Recipient</th>
              <th>What is shared</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Payment providers (eSewa, Khalti, Fonepay)</td>
              <td>Amount, plan and a transaction reference, to process your subscription payment.</td>
            </tr>
            <tr>
              <td>SMS, email and push providers</td>
              <td>The mobile number, email address or device token and the message content, to deliver reminders and notifications.</td>
            </tr>
            <tr>
              <td>Cloud hosting and storage providers</td>
              <td>The data needed to run and store the service, including backups and uploaded files.</td>
            </tr>
            <tr>
              <td>Analytics and diagnostics providers</td>
              <td>Technical and usage data used to keep the service stable.</td>
            </tr>
            <tr>
              <td>Professional advisers and authorities</td>
              <td>Where we are required by law, or to establish or defend legal claims.</td>
            </tr>
          </tbody>
        </table>
        <p>
          We may share aggregated, non-identifying statistics — for example, the number of businesses
          using a feature — but never your individual records.
        </p>
      </>
    ),
  },
  {
    id: "referrals",
    title: "Referral and marketer programme",
    body: (
      <>
        <p>
          If you join the referral programme or become a marketer, we process the details you give us
          (such as your contact details and payout information), the referrals attributed to you, and
          the commission and payouts generated. Where a referral credits a marketer, the new business
          is shown that they signed up through a referral link; we do not share the referred
          business&rsquo;s financial records with the marketer.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep information",
    body: (
      <>
        <p>
          We keep your account and business records for as long as your account is open. If you
          delete your account, we delete or anonymise your personal information and your business
          records within a reasonable period, except where we must keep records longer to satisfy
          tax, accounting or legal obligations, or to resolve a dispute.
        </p>
        <p>
          Backups are retained on a rolling cycle and are overwritten as part of normal operation.
          Records in backups are not used for any other purpose.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "How we protect your information",
    body: (
      <>
        <p>
          Data is encrypted in transit and at rest. Access to your business data is scoped to the
          business you are signed into and enforced on the server for every request, not merely
          hidden in the interface. Sign-in on a new device requires a one-time code sent to your
          mobile number, and sessions use rotating tokens.
        </p>
        <p>
          We maintain activity logs that record who created, changed or deleted records, use soft
          deletion so mistakes can be recovered, apply rate limiting on sensitive endpoints, and
          track requests so that support can trace an issue precisely.
        </p>
        <p>
          No system is perfectly secure. Keep your device locked, do not share one-time codes, and
          tell us promptly if you suspect unauthorised access to your account.
        </p>
      </>
    ),
  },
  {
    id: "offline",
    title: "Offline data on your device",
    body: (
      <>
        <p>
          Byapar eKhata is designed to work without an internet connection. While you are offline,
          your records are stored on your device, and any changes you make are held in a local queue
          until they can be uploaded. This data remains on your device until it syncs, and may
          remain in the app&rsquo;s local storage afterwards as a cache. Clearing the app&rsquo;s
          data or uninstalling the app removes the local copy; your synced records remain in your
          account.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and similar technologies",
    body: (
      <>
        <p>
          Our website uses only the cookies and local storage needed to make the site work and to
          understand, in aggregate, which pages are useful. We do not use advertising cookies and we
          do not sell audience data. You can block cookies in your browser, though parts of the site
          may then behave differently.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights and choices",
    body: (
      <>
        <ul>
          <li>
            <strong>Access.</strong> Ask us what personal information we hold about you.
          </li>
          <li>
            <strong>Correction.</strong> Correct inaccurate details, or edit them yourself in the app.
          </li>
          <li>
            <strong>Export.</strong> Export your reports to PDF or Excel at any time, or request a
            full export of your data.
          </li>
          <li>
            <strong>Deletion.</strong> Request deletion of your account and the records in it, subject
            to the retention obligations described above.
          </li>
          <li>
            <strong>Withdraw consent.</strong> Turn off SMS or marketing messages at any time in the
            app, or by writing to us.
          </li>
          <li>
            <strong>Object or restrict.</strong> Ask us to stop or limit a particular use of your
            information.
          </li>
        </ul>
        <p>
          Write to <a href={`mailto:${site.email}`}>{site.email}</a> to make a request. We will
          respond within 30 days. If you are not satisfied with our response, you may raise the
          matter with the relevant authority in Nepal.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <>
        <p>
          Byapar eKhata is a business tool and is not intended for children. We do not knowingly
          collect personal information from anyone under 16. If you believe a child has provided us
          with information, contact us and we will remove it.
        </p>
      </>
    ),
  },
  {
    id: "transfers",
    title: "Where your information is stored",
    body: (
      <>
        <p>
          Your data is stored on infrastructure that may be located outside Nepal, including with
          cloud providers. Where information is transferred abroad, we require the recipients to
          protect it to a standard consistent with this policy and with applicable law.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <>
        <p>
          We may update this policy as the service evolves or the law changes. When we make a
          material change we will notify you in the app or by email before it takes effect. The date
          at the top of this page always shows the current version.
        </p>
        <p>
          This policy should be read with our{" "}
          <Link href="/terms">terms &amp; conditions</Link>.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <>
        <p>For any question about this policy or your information:</p>
        <p>
          {site.name}
          <br />
          {site.address}
          <br />
          Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          <br />
          Support: <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
          <br />
          Phone: {site.phone}
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy policy"
      updated="1 October 2026"
      summary={
        <p>
          This policy explains what we collect when you use Byapar eKhata, why we collect it, who we
          share it with, and the control you have over it. It is written to be read, not to be
          skimmed past.
        </p>
      }
      reviewNote={
        <>
          <strong className="text-ink">Note for the site owner:</strong> this policy is a working
          draft that reflects how the product actually handles data. Have it reviewed by a Nepali
          lawyer before launch, and confirm the company&rsquo;s registered name, address and
          retention periods.
        </>
      }
      sections={sections}
    />
  );
}
