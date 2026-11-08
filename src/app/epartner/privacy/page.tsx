import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/legal";
import { site } from "@/lib/site";

const app = "Byapar ePartner";

export const metadata: Metadata = {
  title: { absolute: `Privacy policy · ${app}` },
  description: `How ${app} collects, uses, stores and protects the information of partners who introduce businesses to Byapar eKhata, and the choices available to you.`,
};

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          {app} is operated by {site.name} Pvt. Ltd. (&ldquo;we&rdquo;, &ldquo;us&rdquo;).{" "}
          {app} is the app for partners — the people who introduce businesses to Byapar eKhata and
          earn commission when those businesses subscribe. We are the data controller for the
          personal information described in this policy.
        </p>
        <p>
          This policy covers the {app} mobile applications for Android and iOS, and any partner pages
          we provide on this website. It does not cover the Byapar eKhata app used by the businesses
          you refer; that product has its own <Link href="/privacy">privacy policy</Link>. If you
          also use Byapar eKhata to keep books for a business of your own, that policy applies to
          your business records and this one applies to your partner account.
        </p>
        <p>
          Questions about this policy, or a request about your information, can be sent to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or to {site.address}.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "Information we collect",
    body: (
      <>
        <h3>Account and sign-in details</h3>
        <p>
          Your full name; your mobile number, which is used to sign in with a one-time code; your
          email address if you provide one; your preferred language; a password if you choose to set
          one, which we store only as a hash; and a profile photo, city, district or address if you
          add them. If you sign in with Google or Apple, we receive the account identifier and the
          name and email address those services share with us.
        </p>

        <h3>Partner and commission records</h3>
        <p>
          Your referral code; the businesses attributed to you and when they joined; the plan each
          one is on and whether that subscription is active; the commission each one generates; your
          rank in the programme; your wallet balance; and every movement in that wallet. These
          records are what your dashboard, statements and payouts are calculated from.
        </p>

        <h3>Payout details</h3>
        <p>
          When you request a payout we record the amount, the status of the request and any note you
          add. To pay you, we also hold the account details you give us for that purpose — for
          example the account name and number for a bank transfer. We do not collect your bank
          passwords, wallet PINs or full card numbers.
        </p>

        <h3>Device, technical and usage information</h3>
        <p>
          Device model and manufacturer, operating system and version, app version and build,
          language and time zone, IP address, a device identifier we use to bind your sessions, and
          your push notification token. We also receive crash reports and diagnostic logs, and
          aggregate information about which screens and features are used.
        </p>

        <h3>Communications</h3>
        <p>
          Messages you send to our support team, and a record of the notifications and messages we
          send to you, including whether they were delivered.
        </p>
      </>
    ),
  },
  {
    id: "referred-businesses",
    title: "Information about the businesses you refer",
    body: (
      <>
        <p>
          For each business attributed to you we hold its name, mobile number, address, the plan it
          is on, whether that subscription is active, and the commission it generates. We show you
          that much so you can confirm a referral was recorded correctly, see which of your clients
          are still subscribed, and understand what you are being paid for.
        </p>
        <p>
          You do not receive the business&rsquo;s ledgers, invoices, customers, payments or any other
          financial records. Those belong to the business and are covered by its own agreement with
          us.
        </p>
        <p>
          Because this information belongs to someone else, use it only to contact that business
          about its Byapar eKhata subscription. Do not use it for your own marketing, pass it to
          anyone else, copy it into a mailing list, or keep it after the business stops being your
          referral.
        </p>
        <p>
          Where a referral reaches you through the customer referral programme rather than directly,
          the referral record also shows the name of the customer who made the introduction.
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
          <li>
            To attribute referrals to you — and to make sure the same business is not credited twice
            or to the wrong partner.
          </li>
          <li>
            To calculate commission, rank, wallet balances and payouts, and to produce your
            statements.
          </li>
          <li>To show your dashboard, referrals and growth analytics.</li>
          <li>To publish the partner leaderboard described below.</li>
          <li>
            To send you notifications about new referrals, commission and payouts, where you have
            allowed notifications.
          </li>
          <li>To answer your support requests and resolve disputes about attribution or payment.</li>
          <li>
            To detect and prevent abuse — self-referrals, duplicate accounts, fictitious businesses
            and attempts to manipulate commission.
          </li>
          <li>To keep the service secure and to investigate incidents.</li>
          <li>To meet tax, accounting and other legal obligations that apply to us.</li>
          <li>To understand how the app is used so that we can improve it.</li>
        </ul>
        <p>
          We do not sell your personal information, and we do not use it for third-party
          advertising.
        </p>
      </>
    ),
  },
  {
    id: "leaderboard",
    title: "The partner leaderboard is public",
    body: (
      <>
        <p>
          We publish a leaderboard of partners on this website. It can be read without signing in.
          If your account passes the programme&rsquo;s minimum for inclusion — currently 100 active
          clients — the leaderboard shows your name, your referral code, your rank title, the number
          of your active clients, your total commission and your earnings for the current month. It
          does not show your mobile number, email address, home address or payout details.
        </p>
        <p>
          Separately, when someone checks a referral code, they see the name and mobile number
          registered to that partner account, so the business can confirm who is introducing them.
          A referral code is made to be shared, but treat your code and the figures attached to it as
          public.
        </p>
        <p>
          If you would rather not appear on the leaderboard, write to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> and we will remove you from it. Being
          removed does not affect your account, your referrals or your commission.
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
          We process your information because it is necessary to perform the agreement you have with
          us as a partner, because we have a legitimate interest in running and securing the partner
          programme, because you have given consent (for example for push notifications), or because
          the law requires it. Where processing relies on consent, you may withdraw it at any time
          without affecting what you have already earned or the service you have already received.
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
              <td>Businesses you refer</td>
              <td>
                Your name and referral code, so the business knows who introduced them. You appear
                to them as a partner, not as someone with access to their books.
              </td>
            </tr>
            <tr>
              <td>Banks and payment providers</td>
              <td>
                The amount of a payout and the account details you supplied, in order to pay your
                commission.
              </td>
            </tr>
            <tr>
              <td>SMS, email and push providers</td>
              <td>
                Your mobile number, email address or device token and the message content, to
                deliver notifications and one-time codes.
              </td>
            </tr>
            <tr>
              <td>Cloud hosting and storage providers</td>
              <td>
                The data needed to run, store and back up the service, including uploaded files.
              </td>
            </tr>
            <tr>
              <td>Analytics and crash-reporting providers</td>
              <td>
                Technical and diagnostic data used to keep the app stable.
              </td>
            </tr>
            <tr>
              <td>Professional advisers and authorities</td>
              <td>
                Where we are required by law, or to establish or defend a legal claim.
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          We may publish aggregated statistics — for example the number of active partners or the
          total commission paid — but never your individual figures outside the leaderboard
          described above.
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
          We keep your account, referral and wallet records for as long as your partner account is
          open. Commission and payout records are kept after your account closes for as long as tax
          and accounting law requires, and for as long as we may need them to resolve a dispute
          about attribution or payment.
        </p>
        <p>
          Your entry disappears from the leaderboard as soon as your account is closed or no longer
          meets the threshold.
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
          Traffic between the app and our servers is encrypted in transit, and your records are
          encrypted at rest. Signing in uses a one-time code sent to your mobile number; if you set a
          password it is stored only as a hash.
        </p>
        <p>
          Sessions use short-lived access tokens and refresh tokens that rotate on every use. Tokens
          are stored hashed, are bound to the device that created them, and presenting one that has
          already been rotated revokes the whole session. Sign-in and other sensitive endpoints are
          rate limited. Deletes are soft, so a mistake is recoverable rather than final, and every
          request carries an identifier so that support can trace an issue precisely.
        </p>
        <p>
          Staff access to partner records is limited to the people who administer the programme.
        </p>
        <p>
          No system is perfectly secure. Keep your device locked, do not share one-time codes, and
          tell us promptly if you suspect someone else has access to your account.
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
            <strong>Correction.</strong> Correct inaccurate details, or edit them yourself in the
            app.
          </li>
          <li>
            <strong>Export.</strong> Ask for a statement of your referrals, commission and payouts.
          </li>
          <li>
            <strong>Deletion.</strong> Close your partner account and have your information deleted,
            subject to the retention described above.
          </li>
          <li>
            <strong>Withdraw consent.</strong> Turn notifications off in the app or in your device
            settings, and ask us to remove you from the leaderboard.
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
    id: "deleting-your-account",
    title: "Closing your account",
    body: (
      <>
        <p>
          To close your partner account, write to{" "}
          <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> from the email address on
          your account, or call {site.phone}. We will ask you to confirm the request from the mobile
          number registered to the account, so that nobody else can close it.
        </p>
        <p>When your account is closed we delete or anonymise:</p>
        <ul>
          <li>your name, mobile number, email address and profile photo;</li>
          <li>your referral code, and your entry on the leaderboard;</li>
          <li>your device tokens and every active session.</li>
        </ul>
        <p>We keep:</p>
        <ul>
          <li>
            commission, wallet and payout records, for as long as tax and accounting law requires
            and so that a dispute about payment can still be settled;
          </li>
          <li>
            a record of referrals that were paid, so that they cannot be credited a second time.
          </li>
        </ul>
        <p>
          We will action a deletion request within 30 days. Copies held in backups are removed as
          the backup cycle rolls over.
        </p>
        <p>
          Closing your {app} account does not close a separate Byapar eKhata business account, and
          closing a Byapar eKhata account does not close your partner account. Ask us to close both
          if that is what you intend.
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
          {app} is a business programme and is not intended for anyone under 18. We do not knowingly
          collect personal information from children. If you believe a child has provided us with
          information, contact us and we will remove it.
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
    id: "cookies",
    title: "Cookies on our website",
    body: (
      <>
        <p>
          Our website uses only the cookies and local storage needed to make the site work and to
          understand, in aggregate, which pages are useful. We do not use advertising cookies and we
          do not sell audience data. You can block cookies in your browser, though parts of the site
          may then behave differently. The app itself does not use advertising identifiers to track
          you across other companies&rsquo; apps or websites.
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
          We may update this policy as the programme or the law changes. When we make a material
          change we will notify you in the app before it takes effect. The date at the top of this
          page always shows the current version.
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
          {site.name} Pvt. Ltd.
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

export default function EPartnerPrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy policy"
      updated="26 October 2026"
      summary={
        <p>
          This policy explains what we collect when you use {app}, why we collect it, who sees it,
          and what you can do about it. {app} is the partner app for people who bring businesses to
          Byapar eKhata and earn commission — so it also covers the information you see about the
          businesses you refer.
        </p>
      }
      sections={sections}
    />
  );
}
