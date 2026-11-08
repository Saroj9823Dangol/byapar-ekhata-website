"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Arrow } from "@/components/ui";

const topics = [
  "Choosing a plan",
  "Setting up my business",
  "Data import or migration",
  "Billing or a payment issue",
  "Marketer programme",
  "Something else",
];

export function ContactForm() {
  const [topic, setTopic] = useState(topics[0]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const business = String(data.get("business") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");

    const body = [
      `Name: ${name}`,
      business ? `Business: ${business}` : null,
      phone ? `Phone: ${phone}` : null,
      `Topic: ${topic}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.supportEmail}?subject=${encodeURIComponent(
      `[${topic}] Enquiry from ${name || "the website"}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" required />
        <Field label="Business name" name="business" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Mobile number" name="phone" type="tel" />
        <div>
          <label
            htmlFor="topic"
            className="text-muted mb-2 block text-[11px] font-semibold tracking-[0.14em] uppercase"
          >
            What is this about?
          </label>
          <select
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="border-line bg-paper focus:border-ink w-full rounded-lg border px-3.5 py-3 text-[14px] outline-none transition-colors"
          >
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-muted mb-2 block text-[11px] font-semibold tracking-[0.14em] uppercase"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="border-line bg-paper focus:border-ink w-full resize-y rounded-lg border px-3.5 py-3 text-[14px] outline-none transition-colors"
          placeholder="Tell us how many counters and staff you have, and what you are trying to fix."
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="bg-ink text-paper hover:bg-brand inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14px] font-medium transition-colors"
        >
          Send message
          <Arrow />
        </button>
        <p className="text-muted text-[12.5px]">
          This opens your email app with the message ready — nothing is sent until you send it.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-muted mb-2 block text-[11px] font-semibold tracking-[0.14em] uppercase"
      >
        {label}
        {required ? <span className="text-brand ml-1">*</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="border-line bg-paper focus:border-ink w-full rounded-lg border px-3.5 py-3 text-[14px] outline-none transition-colors"
      />
    </div>
  );
}
