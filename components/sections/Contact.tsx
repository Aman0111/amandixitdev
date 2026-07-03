"use client";

import emailjs from "@emailjs/browser";
import { Download, Loader2, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { profile, sectionKicker } from "@/data/portfolio";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    console.log("EmailJS config:", { serviceId, templateId, publicKey });
    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setStatusMessage("EmailJS is not configured yet. Add the EmailJS environment variables and restart the dev server.");
      return;
    }

    try {
      const templateParams = {
        to_email: profile.email,
        to_name: profile.name,
        from_name: String(formData.get("from_name") || ""),
        reply_to: String(formData.get("reply_to") || ""),
        subject: String(formData.get("subject") || ""),
        message: String(formData.get("message") || "")
      };

      console.log("EmailJS template params:", templateParams);

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        { publicKey }
      );
      form.reset();
      setStatus("success");
      setStatusMessage("Message sent to Aman. Thank you for reaching out.");
    } catch (error) {
      console.error("EmailJS send failed", error);
      setStatus("error");
      setStatusMessage("The message could not be sent. Please try again or email Aman directly.");
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          kicker={sectionKicker.contact}
          title="Have a product, platform, or AI workflow worth making excellent?"
          copy="Send a note with the shape of the opportunity. I will reply with next steps, availability, and how I would approach the first milestone."
        />

        <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Reveal>
            <div className="premium-card rounded-[32px] p-6 sm:p-8">
              <h3 className="text-2xl font-bold">Contact Details</h3>
              <p className="mt-4 leading-8 text-graphite/72">
                Based in {profile.location}. Available for Agentic AI systems, MERN/Next.js builds,
                Python/FastAPI backends, healthcare/SaaS platforms, and technical delivery leadership.
              </p>
              <div className="mt-6 space-y-2 text-sm font-semibold text-graphite/72">
                <p>{profile.email}</p>
                <p>{profile.phone}</p>
              </div>
              <a
                href={profile.resumeUrl}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-ambient transition hover:bg-graphite"
                download
              >
                <Download size={17} /> Download Resume
              </a>
              <div className="mt-8 flex flex-wrap gap-3">
                {profile.socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
                      className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                    >
                      <Icon size={16} />
                      {social.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={onSubmit} className="premium-card grid gap-4 rounded-[32px] p-5 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold">
                  Name
                  <input name="from_name" required className="rounded-2xl border border-white/70 bg-white/74 px-4 py-3 outline-none transition focus:border-violet/50" />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Email
                  <input name="reply_to" type="email" required className="rounded-2xl border border-white/70 bg-white/74 px-4 py-3 outline-none transition focus:border-violet/50" />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold">
                Subject
                <input name="subject" required className="rounded-2xl border border-white/70 bg-white/74 px-4 py-3 outline-none transition focus:border-violet/50" />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Message
                <textarea name="message" required rows={6} className="resize-none rounded-2xl border border-white/70 bg-white/74 px-4 py-3 outline-none transition focus:border-violet/50" />
              </label>
              <button
                disabled={status === "loading"}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-white shadow-ambient transition hover:bg-graphite disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? <Loader2 size={18} className="animate-spin" /> : <Send size={17} />}
                {status === "loading" ? "Sending" : "Send Message"}
              </button>
              {status === "success" ? (
                <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                  {statusMessage}
                </p>
              ) : null}
              {status === "error" ? (
                <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">
                  {statusMessage}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
