export function StateHint({ isVisible }) {
  if (!isVisible) {
    return null;
  }

  return (
    <p className="state-hint">
      useState хранит данные, которые влияют на интерфейс.
    </p>
  );
}
