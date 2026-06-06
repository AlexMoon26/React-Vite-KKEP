import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

const documentationLinks = [
  {
    id: "vite",
    label: "Explore Vite",
    href: "https://vite.dev/",
    icon: viteLogo,
    iconClassName: "logo",
  },
  {
    id: "react",
    label: "Learn more",
    href: "https://react.dev/",
    icon: reactLogo,
  },
];

const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/vitejs/vite",
    iconHref: "/icons.svg#github-icon",
  },
  {
    id: "discord",
    label: "Discord",
    href: "https://chat.vite.dev/",
    iconHref: "/icons.svg#discord-icon",
  },
  {
    id: "x",
    label: "X.com",
    href: "https://x.com/vite_js",
    iconHref: "/icons.svg#x-icon",
  },
  {
    id: "bluesky",
    label: "Bluesky",
    href: "https://bsky.app/profile/vite.dev",
    iconHref: "/icons.svg#bluesky-icon",
  },
];

function Hero() {
  return (
    <div className="hero">
      <img src={heroImg} className="base" width="170" height="179" alt="" />
      <img src={reactLogo} className="framework" alt="React logo" />
      <img src={viteLogo} className="vite" alt="Vite logo" />
    </div>
  );
}

function PageTitle({ title, fileName, toolName }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>
        Edit <code>{fileName}</code> and save to test <code>{toolName}</code>
      </p>
    </div>
  );
}

function CounterButton({ count, onClick }) {
  return (
    <button type="button" className="counter" onClick={onClick}>
      Count is {count}
    </button>
  );
}

function ActionButton({ label, onClick }) {
  return (
    <button type="button" className="secondary-button" onClick={onClick}>
      {label}
    </button>
  );
}

function ResourceLink({
  href,
  label,
  icon,
  iconHref,
  iconClassName = "button-icon",
}) {
  return (
    <li>
      <a href={href} target="_blank">
        {icon ? (
          <img className={iconClassName} src={icon} alt="" />
        ) : (
          <svg className={iconClassName} role="presentation" aria-hidden="true">
            <use href={iconHref}></use>
          </svg>
        )}
        {label}
      </a>
    </li>
  );
}

function CounterStatus({ count }) {
  if (count === 0) {
    return <p className="counter-status">Кнопку еще не нажимали.</p>;
  }

  if (count < 5) {
    return (
      <p className="counter-status">
        Кнопку нажали {count} раз. Продолжайте.
      </p>
    );
  }

  return (
    <p className="counter-status success">
      Отлично, счетчик дошел до {count}.
    </p>
  );
}

function StateHint({ isVisible }) {
  if (!isVisible) {
    return null;
  }

  return (
    <p className="state-hint">
      useState хранит данные, которые влияют на интерфейс.
    </p>
  );
}

function ContactForm() {
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
              <span className="text-sm text-red-600">{errors.name.message}</span>
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

function App() {
  const [count, setCount] = useState(0);
  const [isHintVisible, setIsHintVisible] = useState(false);

  function handleCounterClick() {
    setCount((count) => count + 1);
  }

  function handleResetClick() {
    setCount(0);
  }

  function handleHintClick() {
    setIsHintVisible((isHintVisible) => !isHintVisible);
  }

  return (
    <>
      <section id="center">
        <Hero />
        <PageTitle
          title="Get started"
          fileName="src/App.jsx"
          toolName="HMR"
        />
        <div className="counter-panel">
          <CounterButton count={count} onClick={handleCounterClick} />
          <CounterStatus count={count} />
          <div className="counter-actions">
            <ActionButton label="Reset" onClick={handleResetClick} />
            <ActionButton
              label={isHintVisible ? "Hide hint" : "Show hint"}
              onClick={handleHintClick}
            />
          </div>
          <StateHint isVisible={isHintVisible} />
        </div>
      </section>

      <ContactForm />

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            {documentationLinks.map((link) => (
              <ResourceLink key={link.id} {...link} />
            ))}
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            {socialLinks.map((link) => (
              <ResourceLink key={link.id} {...link} />
            ))}
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
