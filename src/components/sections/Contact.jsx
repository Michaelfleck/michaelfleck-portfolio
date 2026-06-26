import { useState } from "react";
import emailjs from "@emailjs/browser";
import { RevealOnScroll } from "../RevealOnScroll";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const channels = [
  {
    label: "Email",
    value: "michael.j.fleck@gmail.com",
    href: "mailto:michael.j.fleck@gmail.com",
    external: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 5L2 7" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "@Michaelfleck",
    href: "https://github.com/Michaelfleck",
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.52.1.71-.23.71-.5v-1.96c-2.9.63-3.52-1.24-3.52-1.24-.48-1.2-1.16-1.52-1.16-1.52-.95-.65.07-.64.07-.64 1.05.08 1.6 1.08 1.6 1.08.94 1.6 2.45 1.14 3.05.87.1-.68.37-1.14.67-1.4-2.32-.26-4.76-1.16-4.76-5.16 0-1.14.4-2.07 1.07-2.8-.1-.26-.46-1.32.1-2.75 0 0 .88-.28 2.88 1.07a9.9 9.9 0 0 1 5.24 0c2-1.35 2.87-1.07 2.87-1.07.57 1.43.21 2.49.11 2.75.67.73 1.07 1.66 1.07 2.8 0 4.01-2.45 4.9-4.78 5.16.38.32.71.95.71 1.92v2.85c0 .28.19.61.72.5A10.5 10.5 0 0 0 12 1.5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/michaeljfleck/",
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z" />
      </svg>
    ),
  },
];

const ExtIcon = () => (
  <span className="ext">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  </span>
);

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  // status: "idle" | "sending" | "sent" | "error"
  const [status, setStatus] = useState("idle");

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;

    // Guard: make sure the EmailJS env vars are configured.
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error(
        "EmailJS is not configured. Copy .env.example to .env and add your keys."
      );
      setStatus("error");
      return;
    }

    setStatus("sending");
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formEl, { publicKey: PUBLIC_KEY })
      .then(() => {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS send failed:", err);
        setStatus("error");
      });
  };

  const sending = status === "sending";

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="contact-left">
          <RevealOnScroll as="p" className="eyebrow">
            <span className="num">04</span>&nbsp;Contact
          </RevealOnScroll>
          <RevealOnScroll as="h2">
            Want to{" "}
            <span className="grad-text">chat </span>
            or{" "}
            <span className="grad-text">build something?</span>
          </RevealOnScroll>
          <RevealOnScroll as="p" delay={1}>
            Have a role, a project, or just want to connect? My inbox is always
            open. I'll get back to you quickly.
          </RevealOnScroll>
          <RevealOnScroll as="div" delay={2} className="contact-channels">
            {channels.map((c) => (
              <a
                key={c.label}
                className="channel"
                href={c.href}
                {...(c.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="ico">{c.icon}</span>
                <div className="meta">
                  <span className="label">{c.label}</span>
                  <span className="value">{c.value}</span>
                </div>
                {c.external && <ExtIcon />}
              </a>
            ))}
          </RevealOnScroll>
        </div>

        <RevealOnScroll
          as="form"
          delay={1}
          className="contact-form"
          onSubmit={onSubmit}
        >
          <div className="field">
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Jane Doe"
              value={form.name}
              onChange={onChange}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="jane@company.com"
              value={form.email}
              onChange={onChange}
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Tell me about the role or project…"
              value={form.message}
              onChange={onChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" disabled={sending}>
            <span className="label">{sending ? "Sending…" : "Send message"}</span>{" "}
            <span className="arrow">→</span>
          </button>
          {status === "sent" && (
            <div className="form-note ok show">
              Thanks for reaching out! <br />Your message is on its way. I'll get back to you ASAP.
            </div>
          )}
          {status === "error" && (
            <div className="form-note err show">
              Something went wrong sending your message. Please email me directly at{" "}
              <a href="mailto:michael.j.fleck@gmail.com">michael.j.fleck@gmail.com</a>.
            </div>
          )}
        </RevealOnScroll>
      </div>
    </section>
  );
};
