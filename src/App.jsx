import { useState } from "react";
import { ActionButton } from "./components/buttons/ActionButton.jsx";
import { CounterButton } from "./components/buttons/CounterButton.jsx";
import { ContactForm } from "./components/ContactForm.jsx";
import { CounterStatus } from "./components/counter/CounterStatus.jsx";
import { StateHint } from "./components/counter/StateHint.jsx";
import { Hero } from "./components/Hero.jsx";
import { PageTitle } from "./components/PageTitle.jsx";
import { ResourceLink } from "./components/ResourceLink.jsx";
import { documentationLinks, socialLinks } from "./data/resourceLinks.js";
import "./App.css";

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
        <PageTitle title="Get started" fileName="src/App.jsx" toolName="HMR" />
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
