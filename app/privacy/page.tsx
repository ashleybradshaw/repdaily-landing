import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How RepDaily collects, uses, and protects your data. Camera tracking stays on-device. Video is never stored or uploaded.",
};

export default function PrivacyPage() {
  return (
    <SubPageLayout>
      <p className="text-xs font-extrabold tracking-[0.2em] text-[#151A00]/50">
        LEGAL
      </p>
      <h1 className="mt-3 font-display text-4xl font-black uppercase tracking-tight text-[#151A00] md:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm font-extrabold tracking-wider text-[#151A00]/50">
        LAST UPDATED AUGUST 22, 2026
      </p>
      <p className="mt-6 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
        RepDaily is a camera-based push-up training app built by TODO:
        Engineering. This policy explains what we collect, why we collect it,
        and the controls you have. Short version: rep tracking runs on your
        device. We do not record, store, or upload workout video.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-xl font-black uppercase tracking-tight text-[#151A00]">
          1. Who we are
        </h2>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          RepDaily is operated by TODO: Engineering. For privacy questions,
          account requests, or data deletion, email{" "}
          <a
            href="mailto:tech@todo.engineering"
            className="font-extrabold text-[#151A00] underline decoration-[#151A00]/30 underline-offset-2 hover:decoration-[#151A00]"
          >
            tech@todo.engineering
          </a>
          . Company site:{" "}
          <a
            href="https://todo.engineering"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold text-[#151A00] underline decoration-[#151A00]/30 underline-offset-2 hover:decoration-[#151A00]"
          >
            todo.engineering
          </a>
          .
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-black uppercase tracking-tight text-[#151A00]">
          2. Camera and on-device tracking
        </h2>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          RepDaily uses your phone camera and on-device computer vision to count
          clean reps in real time. Video frames are processed locally and
          discarded immediately. We do not save workout video, do not upload
          camera frames to our servers, and do not use session video for
          advertising or model training off-device.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-black uppercase tracking-tight text-[#151A00]">
          3. Data we collect
        </h2>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          Depending on how you use RepDaily, we may process:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          <li>
            Account identifiers such as email address and authentication tokens.
          </li>
          <li>
            Training records such as rep counts, session timestamps, streak
            status, stage progress, and strength estimates needed to run
            FreeRep, PushPass 24, and UltraTasks.
          </li>
          <li>
            App diagnostics such as device type, OS version, app version, and
            crash or performance logs.
          </li>
          <li>
            Subscription status from Apple or Google so we can unlock Pro
            features. We do not receive your full payment card details.
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-black uppercase tracking-tight text-[#151A00]">
          4. How we use data
        </h2>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          We use this information to operate the app, sync progress across your
          sessions, personalize training difficulty, process subscriptions,
          diagnose bugs, and respond to support requests. We do not sell your
          personal data.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-black uppercase tracking-tight text-[#151A00]">
          5. Sharing
        </h2>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          We share data only when needed to run the service: infrastructure and
          analytics providers under contract, Apple and Google for app-store
          billing, and authorities when legally required. We do not share
          camera frames because we do not store them.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-black uppercase tracking-tight text-[#151A00]">
          6. Retention and deletion
        </h2>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          We keep account and training records while your account is active and
          for a limited period afterward if needed for security, billing
          disputes, or legal obligations. You can request deletion at any time
          via our{" "}
          <a
            href="/support"
            className="font-extrabold text-[#151A00] underline decoration-[#151A00]/30 underline-offset-2 hover:decoration-[#151A00]"
          >
            Support & Account Deletion
          </a>{" "}
          page or by emailing tech@todo.engineering.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-black uppercase tracking-tight text-[#151A00]">
          7. Your rights
        </h2>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          Subject to applicable law, you may request access, correction, export,
          or deletion of personal data we hold about you. Email
          tech@todo.engineering from the address on your account so we can
          verify the request.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-black uppercase tracking-tight text-[#151A00]">
          8. Children
        </h2>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          RepDaily is not directed at children under 13, and we do not
          knowingly collect personal data from children under 13. If you believe
          a child has created an account, contact us and we will delete it.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-black uppercase tracking-tight text-[#151A00]">
          9. Changes
        </h2>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          We may update this policy as the product evolves. Material changes
          will be posted on this page with a new &quot;last updated&quot; date.
          Continued use of RepDaily after an update means you accept the revised
          policy.
        </p>
      </section>
    </SubPageLayout>
  );
}
