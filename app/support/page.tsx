import type { Metadata } from "next";
import { Mail } from "lucide-react";
import SubPageLayout from "@/components/SubPageLayout";
import { content } from "@/config/content";

export const metadata: Metadata = {
  title: content.meta.pages.support.title,
  description: content.meta.pages.support.description,
};

export default function SupportPage() {
  return (
    <SubPageLayout>
      <p className="text-xs font-extrabold tracking-[0.2em] text-[#151A00]/50">
        SUPPORT
      </p>
      <h1 className="mt-3 font-display text-4xl font-black uppercase tracking-tight text-[#151A00] md:text-5xl">
        Support & Account Deletion
      </h1>
      <p className="mt-3 text-sm font-extrabold tracking-wider text-[#151A00]/50">
        LAST UPDATED AUGUST 22, 2026
      </p>
      <p className="mt-6 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
        Need help with tracking, billing, or your account? Email the team
        directly. Same inbox handles deletion requests.
      </p>

      <div className="mt-10">
        <a
          href="mailto:tech@todo.engineering?subject=RepDaily%20Support"
          className="inline-flex items-center gap-2 rounded-[10px] bg-[#151A00] px-8 py-3.5 font-sans text-sm font-extrabold uppercase tracking-wider text-[#C9E800] shadow-[0_15px_30px_-8px_rgba(21,26,0,0.5)] transition-all hover:shadow-[0_20px_40px_-5px_rgba(21,26,0,0.7)] active:scale-95"
        >
          <Mail size={16} strokeWidth={2.5} aria-hidden />
          Email tech@todo.engineering
        </a>
      </div>

      <section className="mt-14">
        <h2 className="font-display text-xl font-black uppercase tracking-tight text-[#151A00]">
          How to get help
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          <li>
            Email{" "}
            <a
              href="mailto:tech@todo.engineering"
              className="font-extrabold text-[#151A00] underline decoration-[#151A00]/30 underline-offset-2 hover:decoration-[#151A00]"
            >
              tech@todo.engineering
            </a>{" "}
            from the address on your RepDaily account.
          </li>
          <li>
            Include your device type, OS version, app version, and a short
            description of the issue.
          </li>
          <li>
            For App Store or Google Play billing, also manage subscriptions in
            your store account settings.
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-black uppercase tracking-tight text-[#151A00]">
          Delete your account
        </h2>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          You can request full account deletion at any time. We will remove
          account identifiers and associated training records from our systems.
        </p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          <li>
            Send an email to tech@todo.engineering with the subject line
            &quot;Account Deletion Request.&quot;
          </li>
          <li>
            Use the email address tied to your RepDaily account so we can
            verify ownership.
          </li>
          <li>
            Tell us if you also want store subscription cancellation confirmed.
            Refunds and renewals are handled by Apple or Google.
          </li>
        </ol>
        <p className="mt-4 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          We process verified deletion requests within 30 days. Some records may
          be kept longer if required for security, fraud prevention, tax, or
          legal compliance. Camera frames are never stored, so there is no
          workout video to delete.
        </p>
        <div className="mt-8">
          <a
            href="mailto:tech@todo.engineering?subject=Account%20Deletion%20Request"
            className="inline-flex items-center gap-2 rounded-[4px] border-2 border-[#151A00] bg-transparent px-6 py-3 font-sans text-xs font-extrabold uppercase tracking-wider text-[#151A00] transition-colors hover:bg-[#151A00] hover:text-[#C9E800]"
          >
            Request Account Deletion
          </a>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-black uppercase tracking-tight text-[#151A00]">
          What gets deleted
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          <li>Account email and authentication identifiers.</li>
          <li>
            Synced training history, streaks, stage progress, and related
            profile data.
          </li>
          <li>Support tickets tied to that account, after we close the request.</li>
        </ul>
      </section>
    </SubPageLayout>
  );
}
