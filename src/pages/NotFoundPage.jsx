import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <section className="grid min-h-[60svh] place-items-center px-5 py-12 text-center">
      <div>
        <h1>Page not found</h1>
        <p className="mb-5">Такой страницы в учебном приложении нет.</p>
        <Link className="secondary-button" to="/">
          Back home
        </Link>
      </div>
    </section>
  );
}
