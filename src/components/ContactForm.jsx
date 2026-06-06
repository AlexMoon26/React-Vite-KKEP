import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";

export function ContactForm() {
  const [submittedContact, setSubmittedContact] = useState(null);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      topic: "React",
      message: "",
    },
  });

  const selectedTopic = useWatch({
    control,
    name: "topic",
  });

  function onSubmit(data) {
    setSubmittedContact(data);
    reset();
  }

  return (
    <section className="w-full border-t border-[var(--border)] px-5 py-8 text-left md:px-8">
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h2 className="mb-3 text-2xl font-medium text-[var(--text-h)]">
            Feedback form
          </h2>
          <p className="text-base text-[var(--text)]">
            Форма показывает управляемый учебный сценарий: поля регистрируются
            через React Hook Form, ошибки приходят из `formState`, а выбранная
            тема читается через `useWatch`.
          </p>
          <p className="mt-4 rounded-md border border-[var(--border)] bg-[var(--social-bg)] px-3 py-2 text-sm text-[var(--text-h)]">
            Сейчас выбрана тема: <strong>{selectedTopic}</strong>
          </p>
        </div>

        <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
          <label className="grid gap-1">
            <span className="text-sm font-medium text-[var(--text-h)]">
              Имя
            </span>
            <input
              className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-[var(--text-h)] outline-none transition focus:border-[var(--accent-border)] focus:ring-2 focus:ring-[var(--accent-bg)]"
              type="text"
              {...register("name", {
                required: "Введите имя",
                minLength: {
                  value: 2,
                  message: "Минимум 2 символа",
                },
              })}
            />
            {errors.name && (
              <span className="text-sm text-red-600">
                {errors.name.message}
              </span>
            )}
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium text-[var(--text-h)]">
              Email
            </span>
            <input
              className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-[var(--text-h)] outline-none transition focus:border-[var(--accent-border)] focus:ring-2 focus:ring-[var(--accent-bg)]"
              type="email"
              {...register("email", {
                required: "Введите email",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Введите корректный email",
                },
              })}
            />
            {errors.email && (
              <span className="text-sm text-red-600">
                {errors.email.message}
              </span>
            )}
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium text-[var(--text-h)]">
              Тема
            </span>
            <select
              className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-[var(--text-h)] outline-none transition focus:border-[var(--accent-border)] focus:ring-2 focus:ring-[var(--accent-bg)]"
              {...register("topic")}
            >
              <option value="React">React</option>
              <option value="Vite">Vite</option>
              <option value="Tailwind CSS">Tailwind CSS</option>
              <option value="React Hook Form">React Hook Form</option>
            </select>
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium text-[var(--text-h)]">
              Сообщение
            </span>
            <textarea
              className="min-h-28 resize-y rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-[var(--text-h)] outline-none transition focus:border-[var(--accent-border)] focus:ring-2 focus:ring-[var(--accent-bg)]"
              {...register("message", {
                required: "Введите сообщение",
                minLength: {
                  value: 10,
                  message: "Минимум 10 символов",
                },
              })}
            />
            {errors.message && (
              <span className="text-sm text-red-600">
                {errors.message.message}
              </span>
            )}
          </label>

          <div className="flex flex-wrap gap-2">
            <button
              className="rounded-md bg-[var(--accent)] px-4 py-2 font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--accent-border)]"
              type="submit"
              disabled={isSubmitting}
            >
              Send
            </button>
            <button
              className="rounded-md border border-[var(--border)] px-4 py-2 text-[var(--text-h)] transition hover:border-[var(--accent-border)]"
              type="button"
              onClick={() => reset()}
            >
              Clear
            </button>
          </div>

          {submittedContact && (
            <div className="rounded-md border border-[var(--accent-border)] bg-[var(--accent-bg)] px-3 py-2 text-sm text-[var(--text-h)]">
              Спасибо, {submittedContact.name}. Тема сообщения:{" "}
              {submittedContact.topic}.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
