"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "447000000000"; // Replace with real number
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Levelone! I'm interested in working together. Let's talk."
);

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate submission — wire to your backend/Supabase
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative bg-brand-black py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 lg:mb-20"
        >
          <div className="mb-4 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-brand-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-brand-accent">
              Get In Touch
            </span>
          </div>
          <h2 className="max-w-2xl font-display text-[clamp(2rem,4vw,3.5rem)] font-black uppercase leading-[1.05] tracking-[-0.03em] text-brand-white">
            READY TO
            <br />
            <span className="text-brand-accent">LEVEL UP?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ─── Form ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {status === "success" ? (
              <div className="flex min-h-[400px] flex-col items-start justify-center">
                <span className="mb-4 text-4xl">✓</span>
                <h3 className="mb-3 font-display text-2xl font-bold uppercase text-brand-white">
                  Message Sent
                </h3>
                <p className="mb-6 font-body text-base text-brand-grey-300">
                  We&apos;ll get back to you within 24 hours. Expect directness,
                  not an auto-reply.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="border border-brand-grey-700 px-6 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-brand-grey-300 transition-all duration-300 hover:border-brand-white hover:text-brand-white"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-brand-grey-500"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full border-b-[1px] border-brand-grey-700 bg-transparent px-0 py-3 font-body text-base text-brand-white placeholder:text-brand-grey-700 transition-colors duration-300 outline-none focus:border-brand-accent"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-brand-grey-500"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full border-b-[1px] border-brand-grey-700 bg-transparent px-0 py-3 font-body text-base text-brand-white placeholder:text-brand-grey-700 transition-colors duration-300 outline-none focus:border-brand-accent"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="contact-service"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-brand-grey-500"
                  >
                    What do you need?
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full appearance-none border-b-[1px] border-brand-grey-700 bg-transparent px-0 py-3 font-body text-base text-brand-white transition-colors duration-300 outline-none focus:border-brand-accent [&:invalid]:text-brand-grey-700"
                  >
                    <option value="" disabled className="bg-brand-black">
                      Select a service
                    </option>
                    <option value="web" className="bg-brand-black">
                      Web Design & Development
                    </option>
                    <option value="branding" className="bg-brand-black">
                      Graphic Design & Branding
                    </option>
                    <option value="social" className="bg-brand-black">
                      Social Media
                    </option>
                    <option value="video" className="bg-brand-black">
                      Video & Audio
                    </option>
                    <option value="motion" className="bg-brand-black">
                      Motion Graphics
                    </option>
                    <option value="ai" className="bg-brand-black">
                      AI Services
                    </option>
                    <option value="full" className="bg-brand-black">
                      Full Digital Package
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-brand-grey-500"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Budget, timeline, goals — the more detail, the better."
                    className="w-full resize-none border-b-[1px] border-brand-grey-700 bg-transparent px-0 py-3 font-body text-base text-brand-white placeholder:text-brand-grey-700 transition-colors duration-300 outline-none focus:border-brand-accent"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group relative inline-flex w-full items-center justify-center gap-3 bg-brand-accent px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-brand-black transition-all duration-300 hover:shadow-[0_0_60px_rgba(212,255,0,0.2)] disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto"
                >
                  {status === "submitting" ? (
                    <>
                      <span className="inline-block h-4 w-4 animate-spin border-2 border-brand-black border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="square"
                          d="M5 12h14M13 5l7 7-7 7"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* ─── Right Side: Direct Contact ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="mb-8 max-w-sm font-body text-base leading-relaxed text-brand-grey-300">
                Prefer a quicker conversation? Reach out directly and get a
                response within 24 hours. No forms, no friction.
              </p>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group mb-8 flex items-center gap-4 border border-brand-grey-700 p-5 transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent/5"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#25D366]/10 transition-colors duration-300 group-hover:bg-[#25D366]/20">
                  <svg
                    className="h-6 w-6 text-[#25D366]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <span className="mb-1 block font-display text-sm font-bold uppercase tracking-[0.05em] text-brand-white">
                    WhatsApp Us
                  </span>
                  <span className="font-mono text-xs text-brand-grey-500">
                    Direct line — Reply in &lt;24h
                  </span>
                </div>
                <svg
                  className="ml-auto h-4 w-4 text-brand-grey-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="square"
                    d="M5 12h14M13 5l7 7-7 7"
                  />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@levelone.agency"
                className="group mb-8 flex items-center gap-4 border border-brand-grey-700/40 p-5 transition-all duration-300 hover:border-brand-grey-700"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-brand-grey-900/50">
                  <svg
                    className="h-5 w-5 text-brand-grey-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <span className="mb-1 block font-display text-sm font-bold uppercase tracking-[0.05em] text-brand-white">
                    hello@levelone.agency
                  </span>
                  <span className="font-mono text-xs text-brand-grey-500">
                    For proposals & formal enquiries
                  </span>
                </div>
              </a>
            </div>

            {/* Location */}
            <div className="border-t border-brand-grey-900/40 pt-6">
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.15em] text-brand-grey-500">
                Based In
              </span>
              <span className="font-display text-sm font-bold uppercase tracking-[0.05em] text-brand-white">
                Surrey, United Kingdom
              </span>
              <p className="mt-1 font-body text-xs text-brand-grey-500">
                Working with clients across the UK & internationally
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
