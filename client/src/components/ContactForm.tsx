import { useState } from "react";
import type { FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { api } from "@/services/api";

const TOPICS = [
  "Job Opportunity",
  "Freelance / Project Work",
  "Collaboration",
  "General Inquiry",
  "Other",
];

interface FormValues {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}

type FieldErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  topic: "",
  message: "",
};

const inputClasses =
  "w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary/50 dark:bg-white/5 dark:text-white dark:placeholder-slate-500";

function fieldBorderClasses(hasError: boolean): string {
  return hasError
    ? "border-red-400 focus:ring-red-400/50 dark:border-red-500/70"
    : "border-slate-300 dark:border-white/10 focus:border-brand-primary dark:focus:border-brand-secondary";
}

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email.";
  }
  if (!values.topic) errors.topic = "Please select a topic.";
  if (!values.message.trim()) errors.message = "Please enter a message.";

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    setErrorMessage(null);

    try {
      await api.submitContact({
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim() || undefined,
        topic: values.topic,
        message: values.message.trim(),
      });
      setStatus("success");
      setValues(initialValues);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm dark:glass-card dark:shadow-black/20">
        <CheckCircle2 className="h-10 w-10 text-emerald-500" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Message sent
        </h3>
        <p className="max-w-xs text-sm text-slate-500 dark:text-slate-400">
          Thanks for reaching out — I'll get back to you as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-brand-primary underline-offset-4 hover:underline dark:text-brand-secondary"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:glass-card dark:shadow-black/20"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={`mt-2 ${inputClasses} ${fieldBorderClasses(Boolean(errors.name))}`}
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-1.5 text-sm text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={`mt-2 ${inputClasses} ${fieldBorderClasses(Boolean(errors.email))}`}
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-1.5 text-sm text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
          >
            Phone <span className="normal-case text-slate-400 dark:text-slate-500">(optional)</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 (555) 000-0000"
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={`mt-2 ${inputClasses} ${fieldBorderClasses(false)}`}
          />
        </div>

        <div>
          <label
            htmlFor="contact-topic"
            className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
          >
            Topic <span className="text-red-500">*</span>
          </label>
          <select
            id="contact-topic"
            value={values.topic}
            onChange={(event) => updateField("topic", event.target.value)}
            aria-invalid={Boolean(errors.topic)}
            aria-describedby={errors.topic ? "contact-topic-error" : undefined}
            className={`mt-2 ${inputClasses} ${fieldBorderClasses(Boolean(errors.topic))} ${values.topic ? "" : "text-slate-400 dark:text-slate-500"}`}
          >
            <option value="" disabled>
              Select a topic...
            </option>
            {TOPICS.map((topic) => (
              <option key={topic} value={topic} className="text-slate-900 dark:bg-brand-bg dark:text-white">
                {topic}
              </option>
            ))}
          </select>
          {errors.topic && (
            <p id="contact-topic-error" className="mt-1.5 text-sm text-red-500">
              {errors.topic}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="contact-message"
          className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Tell me about your project, timeline, or question..."
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={`mt-2 resize-y ${inputClasses} ${fieldBorderClasses(Boolean(errors.message))}`}
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1.5 text-sm text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <div className="mt-5 flex items-start gap-2 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-400">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-brand-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 motion-reduce:hover:translate-y-0 dark:shadow-brand-primary/30 dark:focus-visible:ring-white dark:focus-visible:ring-offset-brand-bg dark:hover:shadow-brand-secondary/50"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
