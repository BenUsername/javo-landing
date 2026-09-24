"use strict";

/*
 * Contact form -> /api/lead, which stores each lead in the site's private Vercel
 * Blob store. Download them all as CSV from /api/leads/?key=<LEADS_KEY>.
 */

(() => {
  const form = document.querySelector("[data-lead-form]");
  if (!form) return;

  const MESSAGES = {
    en: {
      invalid: "Please enter your name and a valid email address.",
      success: "Thank you, your message has been sent. We'll get back to you shortly.",
      sending: "Sending…",
      failed: "Your message couldn't be sent. Please try again in a moment."
    },
    fr: {
      invalid: "Merci d’indiquer votre nom et une adresse e-mail valide.",
      success: "Merci, votre message a bien été envoyé. Nous revenons vers vous rapidement.",
      sending: "Envoi en cours…",
      failed: "L’envoi n’a pas abouti. Merci de réessayer dans un instant."
    }
  };
  const lang = document.documentElement.lang.startsWith("fr") ? "fr" : "en";
  const t = MESSAGES[lang];

  const status = form.querySelector("[data-form-status]");
  const submit = form.querySelector('button[type="submit"]');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const setStatus = (text, kind) => {
    status.textContent = text;
    status.classList.toggle("is-error", kind === "error");
    status.classList.toggle("is-success", kind === "success");
  };

  const validate = () => {
    const invalid = [];
    const name = form.elements.name;
    const email = form.elements.email;
    if (!name.value.trim()) invalid.push(name);
    if (!emailPattern.test(email.value.trim())) invalid.push(email);
    [name, email].forEach(field => field.setAttribute("aria-invalid", String(invalid.includes(field))));
    return invalid;
  };

  form.addEventListener("input", event => {
    if (event.target.getAttribute("aria-invalid") === "true") validate();
  });

  form.addEventListener("submit", async event => {
    event.preventDefault();

    const invalid = validate();
    if (invalid.length) {
      setStatus(t.invalid, "error");
      invalid[0].focus();
      return;
    }

    // Bots fill the hidden field; pretend it worked and drop the submission.
    if (form.elements._honey.value) {
      form.reset();
      setStatus(t.success, "success");
      return;
    }

    const fields = Object.fromEntries(["name", "email", "website", "message"].map(key => [key, form.elements[key].value.trim()]));

    submit.disabled = true;
    setStatus(t.sending);

    try {
      const response = await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...fields, lang, page: window.location.href })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.ok !== true) throw new Error(result.error || `HTTP ${response.status}`);

      form.reset();
      setStatus(t.success, "success");
    } catch (error) {
      console.error("[omni] lead not sent:", error);
      setStatus(t.failed, "error");
    } finally {
      submit.disabled = false;
    }
  });
})();

(() => {
  // Respect reduced motion: keep the demo on its poster frame instead of autoplaying.
  const video = document.querySelector(".phone__screen");
  if (!video || !window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  video.removeAttribute("autoplay");
  video.pause();
  video.controls = true;
})();
