"use strict";

/*
 * Contact form -> e-mail, through FormSubmit (https://formsubmit.co).
 *
 * LEAD_EMAIL is the inbox that receives every lead. The first submission sends
 * that inbox an "Activate form" e-mail; leads are delivered once it is clicked.
 * After activation FormSubmit also gives a random alias that can replace the
 * address here, so the address is not visible in the page source.
 */
const LEAD_EMAIL = "";

(() => {
  const form = document.querySelector("[data-lead-form]");
  if (!form) return;

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
      setStatus("Merci d’indiquer votre nom et une adresse e-mail valide.", "error");
      invalid[0].focus();
      return;
    }

    // Bots fill the hidden field; pretend it worked and drop the submission.
    if (form.elements._honey.value) {
      form.reset();
      setStatus("Merci, votre message a bien été envoyé. Nous revenons vers vous rapidement.", "success");
      return;
    }

    if (!LEAD_EMAIL) {
      console.warn("[omni] LEAD_EMAIL is not set in main.js, so the lead was not sent.");
      setStatus("Le formulaire n’est pas encore disponible. Merci de réessayer un peu plus tard.", "error");
      return;
    }

    const fields = Object.fromEntries(["name", "email", "website", "message"].map(key => [key, form.elements[key].value.trim()]));

    submit.disabled = true;
    setStatus("Envoi en cours…");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(LEAD_EMAIL)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Nom: fields.name,
          "E-mail": fields.email,
          "Site web": fields.website,
          Message: fields.message,
          Page: window.location.href,
          _subject: `Nouveau lead Omni : ${fields.name}`,
          _replyto: fields.email,
          _template: "table"
        })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || String(result.success) !== "true") throw new Error(result.message || `HTTP ${response.status}`);

      form.reset();
      setStatus("Merci, votre message a bien été envoyé. Nous revenons vers vous rapidement.", "success");
    } catch (error) {
      console.error("[omni] lead not sent:", error);
      setStatus("L’envoi n’a pas abouti. Merci de réessayer dans un instant.", "error");
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
