import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className="mx-auto max-w-lg bg-(--surface) px-6 my-32 py-10 text-center rounded-2xl border border-(--gold-line)">
      <h1 className="text-5xl font-bold mb-6 text-(--ivory)">404</h1>
      <h2 className="text-2xl text-(--ivory2) mb-4">Page Not Found</h2>
      <p className="text-lg text-(--muted) mb-6">
        The page you are looking for does not exist.
      </p>
      <Link href="/">
        <button className="px-5 py-2 rounded-lg bg-(--gold) text-(--obsidian) hover:bg-(--gold2) transition">
          Go Home
        </button>
      </Link>
    </section>
  );
};

export default NotFoundPage;
