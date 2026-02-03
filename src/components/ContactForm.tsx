"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { type Locale, getDictionary } from "@/lib/i18n";
import { getFormationBySlug } from "@/lib/data/formations";
import { formatDate } from "@/lib/utils";

// Validation schema factory (depends on type)
const createContactSchema = (dict: ReturnType<typeof getDictionary>) =>
  z
    .object({
      type: z.enum(["B2B", "B2C"]),
      name: z.string().min(1, dict.contact.errors.nameRequired),
      email: z
        .string()
        .min(1, dict.contact.errors.emailRequired)
        .email(dict.contact.errors.emailInvalid),
      phone: z.string().min(1, dict.contact.errors.phoneRequired),
      company: z.string().optional(),
      message: z.string().min(1, dict.contact.errors.messageRequired),
      consent: z.boolean().refine((val) => val === true, {
        message: dict.contact.errors.consentRequired,
      }),
    })
    .refine(
      (data) =>
        data.type !== "B2B" || (data.company && data.company.length > 0),
      {
        message: dict.contact.errors.companyRequired,
        path: ["company"],
      },
    );

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;

interface ContactFormProps {
  locale: Locale;
}

export default function ContactForm({ locale }: ContactFormProps) {
  const dict = getDictionary(locale);
  const searchParams = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const schema = createContactSchema(dict);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      type: "B2B",
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const watchType = watch("type");

  // Pre-fill from query strings
  useEffect(() => {
    const formationSlug = searchParams.get("formation");
    const date = searchParams.get("date");

    if (formationSlug) {
      const formation = getFormationBySlug(formationSlug);
      if (formation) {
        let message =
          locale === "fr"
            ? `Je souhaite des informations sur la formation : ${formation.title}`
            : `I would like information about the training: ${formation.title}`;

        if (date) {
          const formattedDate = formatDate(date, locale);
          message +=
            locale === "fr"
              ? `\nSession souhaitée : ${formattedDate}`
              : `\nPreferred session: ${formattedDate}`;
        }

        setValue("message", message);
      }
    }
  }, [searchParams, locale, setValue]);

  const onSubmit = async (data: ContactFormData) => {
    // Mock submission - in production, this would send to an API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="card text-center py-12 bg-surface animate-fade-in">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-ink mb-2">
          {dict.contact.successTitle}
        </h2>
        <p className="text-ink-light">{dict.contact.successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card" noValidate>
      {/* Type Selection */}
      <div className="mb-6">
        <label className="form-label">{dict.contact.typeLabel}</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="B2B"
              {...register("type")}
              className="w-4 h-4 text-accent focus:ring-accent"
            />
            <span className="text-ink">{dict.contact.typeB2B}</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="B2C"
              {...register("type")}
              className="w-4 h-4 text-accent focus:ring-accent"
            />
            <span className="text-ink">{dict.contact.typeB2C}</span>
          </label>
        </div>
      </div>

      {/* Name */}
      <div className="mb-4">
        <label htmlFor="name" className="form-label">
          {dict.contact.nameLabel} *
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="form-input"
          placeholder={locale === "fr" ? "Jean Dupont" : "John Doe"}
        />
        {errors.name && <p className="form-error">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div className="mb-4">
        <label htmlFor="email" className="form-label">
          {dict.contact.emailLabel} *
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="form-input"
          placeholder="email@example.com"
        />
        {errors.email && <p className="form-error">{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label htmlFor="phone" className="form-label">
          {dict.contact.phoneLabel} *
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          className="form-input"
          placeholder="+33 6 12 34 56 78"
        />
        {errors.phone && <p className="form-error">{errors.phone.message}</p>}
      </div>

      {/* Company (B2B only) */}
      {watchType === "B2B" && (
        <div className="mb-4">
          <label htmlFor="company" className="form-label">
            {dict.contact.companyLabel} *
          </label>
          <input
            id="company"
            type="text"
            {...register("company")}
            className="form-input"
            placeholder={
              locale === "fr" ? "Nom de l'entreprise" : "Company name"
            }
          />
          {errors.company && (
            <p className="form-error">{errors.company.message}</p>
          )}
        </div>
      )}

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="message" className="form-label">
          {dict.contact.messageLabel} *
        </label>
        <textarea
          id="message"
          {...register("message")}
          className="form-input min-h-[120px] resize-y"
          placeholder={dict.contact.messagePlaceholder}
        />
        {errors.message && (
          <p className="form-error">{errors.message.message}</p>
        )}
      </div>

      {/* Consent */}
      <div className="mb-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("consent")}
            className="w-5 h-5 mt-0.5 text-accent focus:ring-accent rounded"
          />
          <span className="text-sm text-ink-light">
            {dict.contact.consentLabel}
          </span>
        </label>
        {errors.consent && (
          <p className="form-error">{errors.consent.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting
          ? locale === "fr"
            ? "Envoi en cours..."
            : "Sending..."
          : dict.contact.submitButton}
      </button>
    </form>
  );
}
