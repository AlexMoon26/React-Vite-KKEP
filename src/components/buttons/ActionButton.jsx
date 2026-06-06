export function ActionButton({ label, onClick }) {
  return (
    <button type="button" className="secondary-button" onClick={onClick}>
      {label}
    </button>
  );
}
