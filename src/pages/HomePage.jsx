import { useState } from "react";
import { ActionButton } from "../components/buttons/ActionButton.jsx";
import { CounterButton } from "../components/buttons/CounterButton.jsx";
import { CounterStatus } from "../components/counter/CounterStatus.jsx";
import { StateHint } from "../components/counter/StateHint.jsx";
import { Hero } from "../components/Hero.jsx";
import { PageTitle } from "../components/PageTitle.jsx";

export function HomePage() {
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
  );
}
