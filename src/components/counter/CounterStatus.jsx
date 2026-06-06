export function CounterStatus({ count }) {
  if (count === 0) {
    return <p className="counter-status">Кнопку еще не нажимали.</p>;
  }

  if (count < 5) {
    return (
      <p className="counter-status">Кнопку нажали {count} раз. Продолжайте.</p>
    );
  }

  return (
    <p className="counter-status success">Отлично, счетчик дошел до {count}.</p>
  );
}
