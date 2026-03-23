import Link from "next/link";

export function Contact() {
  return (
    <section
      id="kontakt"
      className="flex flex-col items-center justify-center bg-black px-6 py-24"
    >
      <h2 className="mb-8 font-sans text-2xl font-semibold text-white">
        KONTAKT
      </h2>

      <div className="flex max-w-[300px] gap-2">
        <Link
          href="mailto:sanne.jakob@gmail.com"
          className="rounded bg-gold px-6 py-2 font-sans text-sm font-semibold text-white transition-colors hover:bg-gold/80"
        >
          Send e-post
        </Link>
        <Link
          href="tel:+4751536900"
          className="rounded border-2 border-white px-6 py-2 font-sans text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
        >
          Ring oss
        </Link>
      </div>

      <div className="mt-8 text-center font-mono text-sm leading-relaxed text-white">
        <p>Spor 3</p>
        <p>Kirkegata 1</p>
        <p>4307 Sandnes</p>
      </div>
    </section>
  );
}
