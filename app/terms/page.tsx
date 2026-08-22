import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for RepDaily 1.5 — the camera-based push-up training app from TODO: Engineering.",
};

export default function TermsPage() {
  return (
    <SubPageLayout>
      <p className="text-xs font-extrabold tracking-[0.2em] text-[#151A00]/50">
        LEGAL
      </p>
      <h1 className="mt-3 font-display text-4xl font-black uppercase tracking-tight text-[#151A00] md:text-5xl">
        Terms of Use
      </h1>
      <p className="mt-3 text-sm font-extrabold tracking-wider text-[#151A00]/50">
        LAST UPDATED AUGUST 22, 2026
      </p>
      <p className="mt-6 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
        These Terms of Use govern access to RepDaily, including the mobile app,
        this website, and related services operated by TODO: Engineering. By
        downloading, creating an account, or using RepDaily, you agree to these
        terms.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-xl font-black uppercase tracking-tight text-[#151A00]">
          1. The service
        </h2>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          RepDaily is a training tool that uses on-device computer vision to
          count push-ups, track daily output, and run structured programs such
          as FreeRep, PushPass 24, and UltraTasks. Features may change as we
          ship updates. Public beta software can contain bugs, incomplete
          features, or data resets.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-black uppercase tracking-tight text-[#151A00]">
          2. Eligibility and accounts
        </h2>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          You must be at least 13 years old to use RepDaily. You are responsible
          for the credentials on your account and for activity that happens
          under it. Keep your login details secure and tell us at
          tech@todo.engineering if you think the account has been compromised.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-black uppercase tracking-tight text-[#151A00]">
          3. Health and safety
        </h2>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          RepDaily is not medical advice, diagnosis, or treatment. Training
          involves physical exertion. Consult a physician before starting a new
          program, especially if you have an injury, medical condition, or
          other health concern. You train at your own risk. Stop immediately if
          you feel pain, dizziness, or shortness of breath.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-black uppercase tracking-tight text-[#151A00]">
          4. Free and Pro
        </h2>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          Free access includes open FreeRep sessions, camera auto-counting, and
          PowerPath tracking as described in the app. Pro unlocks paid features
          such as PushPass 24 stages and UltraTasks. Subscriptions are billed
          through the Apple App Store or Google Play. Their refund, renewal, and
          cancellation rules apply. Manage or cancel in your store account
          settings.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-black uppercase tracking-tight text-[#151A00]">
          5. Acceptable use
        </h2>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          Do not misuse RepDaily. That includes attempting to reverse engineer
          or disrupt the service, spoofing rep counts or session data, probing
          other users&apos; accounts, or using the app in any way that breaks
          the law. We may suspend or terminate access if these terms are
          violated.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-black uppercase tracking-tight text-[#151A00]">
          6. Intellectual property
        </h2>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          RepDaily, the wordmark, the lime identity, and the app software are
          owned by TODO: Engineering. You get a limited, non-exclusive,
          non-transferable license to use the app for personal training. You do
          not get any right to copy, resell, or redistribute the product.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-black uppercase tracking-tight text-[#151A00]">
          7. Disclaimers
        </h2>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          RepDaily is provided &quot;as is.&quot; We do not warrant that
          counting will be perfect in every lighting condition, camera angle, or
          device, or that the service will be uninterrupted. To the maximum
          extent allowed by law, we disclaim implied warranties of
          merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-black uppercase tracking-tight text-[#151A00]">
          8. Limitation of liability
        </h2>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          To the maximum extent allowed by law, TODO: Engineering and its
          operators are not liable for indirect, incidental, special,
          consequential, or punitive damages, or for lost training data, lost
          profits, or personal injury arising from use of the app. Our total
          liability for any claim relating to RepDaily will not exceed the
          amount you paid us for the service in the 12 months before the claim,
          or fifty U.S. dollars if you have not paid us.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-black uppercase tracking-tight text-[#151A00]">
          9. Termination
        </h2>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          You can stop using RepDaily at any time and request account deletion
          through our{" "}
          <a
            href="/support"
            className="font-extrabold text-[#151A00] underline decoration-[#151A00]/30 underline-offset-2 hover:decoration-[#151A00]"
          >
            Support
          </a>{" "}
          page. We may suspend or end access if you breach these terms or if we
          discontinue the product.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-black uppercase tracking-tight text-[#151A00]">
          10. Changes
        </h2>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#151A00]/80 md:text-base">
          We may update these terms as RepDaily evolves. The latest version will
          live on this page. If you continue using the service after a change,
          you accept the updated terms. Questions:{" "}
          <a
            href="mailto:tech@todo.engineering"
            className="font-extrabold text-[#151A00] underline decoration-[#151A00]/30 underline-offset-2 hover:decoration-[#151A00]"
          >
            tech@todo.engineering
          </a>
          .
        </p>
      </section>
    </SubPageLayout>
  );
}
