import { useState } from "react";
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
          <div className="counter-actions">
            <ActionButton label="Reset" onClick={handleResetClick} />
            <ActionButton label="Toggle hint" onClick={handleHintClick} />
          </div>
          {isHintVisible && (
            <p className="state-hint">
              useState хранит данные, которые влияют на интерфейс.
            </p>
          )}
        </div>
      </section>

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
