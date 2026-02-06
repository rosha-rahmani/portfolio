import React, { useMemo, useState } from "react";
import Card from "../ui/Card";
import ScrollReveal from "../animations/ScrollReveal";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../utils/constants";
import { getIcon } from "../../utils/iconMap";

const validate = (values) => {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Please enter a valid email.";
  }
  if (!values.message.trim()) errors.message = "Please write a message.";
  if (values.message.trim().length < 12)
    errors.message = "Message should be at least 12 characters.";
  return errors;
};

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const errors = useMemo(() => validate(values), [values]);
  const isValid = Object.keys(errors).length === 0;

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (status.type !== "idle") setStatus({ type: "idle", message: "" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length) {
      setStatus({ type: "error", message: "Please fix the highlighted fields." });
      return;
    }

    // Demo-only: we don't have a backend. You can wire this to Formspree / EmailJS later.
    setStatus({ type: "success", message: "Message sent! I’ll get back to you soon." });
    setValues({ name: "", email: "", message: "" });
  };

  const MailIcon = getIcon("Mail");
  const MapPinIcon = getIcon("MapPin");

  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-[1320px] mx-auto px-5">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Contact</h2>
          <p className="mt-4 text-white/70 max-w-2xl">
            Have a project in mind? Let’s talk.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid lg:grid-cols-12 gap-6">
          <ScrollReveal className="lg:col-span-7" delay={120}>
            <Card className="p-7 sm:p-8">
              <form onSubmit={onSubmit} className="grid gap-4">
                {status.type !== "idle" && (
                  <div
                    className={
                      "rounded-2xl border px-4 py-3 text-sm " +
                      (status.type === "success"
                        ? "border-primary/30 bg-primary/10 text-primary"
                        : "border-red-500/30 bg-red-500/10 text-red-200")
                    }
                    role="alert"
                  >
                    {status.message}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/70">Name</label>
                    <input
                      name="name"
                      value={values.name}
                      onChange={onChange}
                      className={
                        "mt-2 w-full rounded-2xl border bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition " +
                        (errors.name
                          ? "border-red-500/40 focus:border-red-400"
                          : "border-white/10 focus:border-white/25")
                      }
                      placeholder="Your name"
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p className="mt-2 text-xs text-red-200">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm text-white/70">Email</label>
                    <input
                      name="email"
                      value={values.email}
                      onChange={onChange}
                      className={
                        "mt-2 w-full rounded-2xl border bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition " +
                        (errors.email
                          ? "border-red-500/40 focus:border-red-400"
                          : "border-white/10 focus:border-white/25")
                      }
                      placeholder="you@email.com"
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p className="mt-2 text-xs text-red-200">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-white/70">Message</label>
                  <textarea
                    name="message"
                    value={values.message}
                    onChange={onChange}
                    rows={6}
                    className={
                      "mt-2 w-full resize-none rounded-2xl border bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition " +
                      (errors.message
                        ? "border-red-500/40 focus:border-red-400"
                        : "border-white/10 focus:border-white/25")
                    }
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-xs text-red-200">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={!isValid}
                  className={
                    "mt-2 inline-flex items-center justify-center rounded-[17px] border px-7 py-3.5 text-base font-medium transition-all duration-300 " +
                    (isValid
                      ? "border-white bg-white text-[#212121] hover:bg-transparent hover:text-white"
                      : "border-white/10 bg-white/10 text-white/40 cursor-not-allowed")
                  }
                >
                  Send Message
                </button>
              </form>
            </Card>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-5" delay={200}>
            <div className="grid gap-6">
              <Card className="p-7">
                <p className="text-white/60 text-sm">Email</p>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="mt-2 flex items-center gap-3 text-white hover:text-primary transition"
                >
                  {MailIcon ? <MailIcon className="h-5 w-5 text-primary" /> : null}
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </Card>

              <Card className="p-7">
                <p className="text-white/60 text-sm">Location</p>
                <div className="mt-2 flex items-center gap-3 text-white">
                  {MapPinIcon ? (
                    <MapPinIcon className="h-5 w-5 text-primary" />
                  ) : null}
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </Card>

              <Card className="p-7">
                <p className="text-white/60 text-sm">Social</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {SOCIAL_LINKS.map((s) => {
                    const Icon = getIcon(s.icon);
                    return (
                      <a
                        key={s.id}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:text-white hover:border-white/20"
                      >
                        {Icon ? <Icon className="h-4 w-4" /> : null}
                        {s.label}
                      </a>
                    );
                  })}
                </div>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
